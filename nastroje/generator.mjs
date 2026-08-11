/* ============================================================================
   SBOR VÍRY — GENERÁTOR STATICKÝCH STRÁNEK
   ----------------------------------------------------------------------------
   PROČ TO EXISTUJE
   Web si celý obsah vykresluje JavaScriptem. Google si s tím poradí, ale
   Bing (a s ním Edge i Copilot), Seznam ani vyhledávače umělé inteligence
   (ChatGPT, Claude, Perplexity) JavaScript nespouštějí — viděly by prázdnou
   stránku. Tenhle generátor proto stránku jednou předem vykreslí a text uloží
   přímo do HTML. Návštěvník dostane totéž co dřív, roboti navíc vidí obsah.

   JAK SE POUŽÍVÁ
       node nastroje/generator.mjs

   Texty se dál upravují jen v assets/js/i18n.js a údaje v assets/js/content.js.
   Po úpravě se spustí příkaz výše a hotové stránky se přegenerují.

   CO ČTE A CO ZAPISUJE
       čte    _sablony/*.html   — kostry stránek (prázdné, bez textu)
       zapisuje  *.html         — česká verze do kořene
                 sk/, pl/, …    — ostatní jazyky do vlastních složek
                 sitemap.xml    — seznam všech adres pro vyhledávače

   Soubory v kořeni se pokaždé přepíšou. Ručně se upravují šablony
   v _sablony/, nikdy ne výsledek.

   JAK TO FUNGUJE UVNITŘ
   Nekopírujeme logiku ze site.js — spouštíme ji. Na pozadí se nastartuje
   malý webový server a stránku vykreslí Chrome, který už v počítači je.
   Výsledek proto vypadá přesně tak, jako by ji otevřel návštěvník.
   ========================================================================== */

import { createServer } from 'node:http';
import { execFile, execFileSync } from 'node:child_process';
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const KOREN   = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SABLONY = path.join(KOREN, '_sablony');

/* Musí souhlasit s LANGS a DEFAULT_LANG v assets/js/site.js. */
const JAZYKY  = ['cs', 'sk', 'pl', 'uk', 'ru', 'de', 'en', 'es', 'sv', 'hu'];
const VYCHOZI = 'cs';

/* Podoba jazyka pro sociální sítě (og:locale). */
const LOCALE = {
  cs: 'cs_CZ', sk: 'sk_SK', pl: 'pl_PL', uk: 'uk_UA', ru: 'ru_RU',
  de: 'de_DE', en: 'en_GB', es: 'es_ES', sv: 'sv_SE', hu: 'hu_HU'
};

const DOMENA = 'https://sborviry.org';

/* Stránky, které se generují ve všech jazycích. Pořadí určuje i pořadí
   v sitemap.xml; priorita říká vyhledávači, co je na webu důležité. */
const STRANKY = [
  { soubor: 'index.html',                  priorita: '1.0', zmena: 'weekly' },
  { soubor: 'o-nas.html',                  priorita: '0.9', zmena: 'monthly' },
  { soubor: 'jsem-tu-poprve.html',         priorita: '0.9', zmena: 'monthly' },
  { soubor: 'kazani.html',                 priorita: '0.8', zmena: 'weekly' },
  { soubor: 'aktuality.html',              priorita: '0.8', zmena: 'weekly' },
  { soubor: 'co-u-nas-najdete.html',       priorita: '0.8', zmena: 'monthly' },
  { soubor: 'podporte-nas.html',           priorita: '0.7', zmena: 'yearly' },
  { soubor: 'kontakt.html',                priorita: '0.9', zmena: 'monthly' },
  // Do vyhledávání nepatří (viz robots.txt), ale odkaz na ni je v patičce
  // každého jazyka, takže ji potřebujeme mít všude vygenerovanou.
  { soubor: 'ochrana-osobnich-udaju.html', priorita: null,  zmena: null }
];

/* Chybová stránka. GitHub Pages ji ukáže na jakékoli neexistující adrese,
   proto stačí jedna v kořeni — v jazykových složkách by se nepoužila. */
const CHYBOVA = '404.html';

/* Kolik stránek vykreslovat naráz. Víc = rychleji, ale víc otevřených
   Chromů. Čtyři jsou rozumný kompromis i na slabším počítači. */
const NARAZ = 4;

/* --------------------------------------------------------------- Chrome */
function najdiChrome() {
  const kandidati = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe'),
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  ].filter(Boolean);
  for (const c of kandidati) if (existsSync(c)) return c;
  return null;
}

/* ---------------------------------------------------------------- adresy */
/** Adresa stránky na webu: ('sk','o-nas.html') → '/sk/o-nas' */
function adresa(jazyk, soubor) {
  const zaklad = jazyk === VYCHOZI ? '/' : `/${jazyk}/`;
  return soubor === 'index.html' ? zaklad : zaklad + soubor.replace(/\.html$/, '');
}

/** Kam se soubor uloží na disk. */
function cilovySoubor(jazyk, soubor) {
  return jazyk === VYCHOZI
    ? path.join(KOREN, soubor)
    : path.join(KOREN, jazyk, soubor);
}

/* ----------------------------------------------------------------- server */
/* Servíruje šablony pod všemi jazykovými adresami. Díky tomu si stránka
   sama z adresy přečte jazyk a vykreslí se v něm — přesně jako na ostrém
   webu. Soubory z assets/ jdou rovnou z disku. */
function spustServer() {
  const server = createServer(async (req, res) => {
    try {
      const cesta = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);

      // Z adresy odřízneme jazyk — šablona i soubory v assets/ jsou pro
      // všechny jazyky společné.
      const useky = cesta.split('/').filter(Boolean);
      if (useky.length && JAZYKY.includes(useky[0])) useky.shift();

      // Obrázky, styly a skripty: rovnou z projektu.
      if (/\.[a-z0-9]+$/i.test(cesta) && !cesta.endsWith('.html')) {
        const soubor = path.join(KOREN, useky.join('/'));
        if (!soubor.startsWith(KOREN)) { res.writeHead(403).end(); return; }
        const data = await readFile(soubor);
        res.writeHead(200, { 'Content-Type': typObsahu(soubor) }).end(data);
        return;
      }

      let jmeno = useky.join('/') || 'index.html';
      if (!jmeno.endsWith('.html')) jmeno += '.html';

      const sablona = path.join(SABLONY, jmeno);
      if (!sablona.startsWith(SABLONY) || !existsSync(sablona)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }).end('nenalezeno');
        return;
      }
      // Při generování běží web po HTTP, kdežto naostro po HTTPS. Direktiva
      // upgrade-insecure-requests by teď prohlížeči nakázala sáhnout po
      // https:// — server by neodpověděl a stránka by zůstala prázdná.
      // Na chvíli ji proto vypneme; do uloženého souboru ji vrátí vratCSP().
      const sablonaText = (await readFile(sablona, 'utf8'))
        .replace(/;\s*upgrade-insecure-requests/i, '');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }).end(sablonaText);
    } catch (e) {
      res.writeHead(500).end(String(e && e.message));
    }
  });

  return new Promise((hotovo) => {
    server.listen(0, '127.0.0.1', () => hotovo({ server, port: server.address().port }));
  });
}

function typObsahu(soubor) {
  const p = path.extname(soubor).toLowerCase();
  return {
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
    '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
    '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8'
  }[p] || 'application/octet-stream';
}

/* -------------------------------------------------------------- vykreslení */
/* Chrome pustíme s přesměrováním sborviry.org na náš server. Stránka si tak
   myslí, že běží na ostré doméně, a vyrobí adresy bez koncovky .html —
   tedy přesně ty, které pak budou na webu platit. */
function vykresli(chrome, port, url) {
  const argumenty = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-extensions',
    '--hide-scrollbars',
    // Fonty z Googlu při generování nepotřebujeme — na vzhled uloženého HTML
    // nemají vliv a jen by se na ně čekalo. Na hotovém webu se načtou normálně.
    // Náhled videa z i.ytimg.com naopak blokovat nesmíme: stránka si při
    // nedostupnosti sáhne pro horší variantu obrázku a ta by se uložila.
    '--host-resolver-rules=MAP sborviry.org 127.0.0.1:' + port
      + ',MAP fonts.googleapis.com 127.0.0.1:9,MAP fonts.gstatic.com 127.0.0.1:9',
    '--virtual-time-budget=10000',
    '--dump-dom',
    url
  ];
  return new Promise((hotovo, chyba) => {
    execFile(chrome, argumenty, { encoding: 'buffer', maxBuffer: 64 * 1024 * 1024, timeout: 90000 },
      (err, stdout) => {
        const html = stdout ? stdout.toString('utf8') : '';
        // Chrome hlásí nenulový návratový kód i tehdy, když stránku vykreslil
        // (třeba kvůli blokovaným fontům) — rozhoduje proto výsledek.
        if (html.includes('</html>')) hotovo(html);
        else chyba(new Error('Chrome nevrátil stránku: ' + url + (err ? ' — ' + err.message : '')));
      });
  });
}

/* Pojistka proti tiché chybě: kdyby se skripty nenačetly, Chrome by vrátil
   prázdnou kostru stránky a my bychom ji spokojeně uložili. Ověříme proto,
   že hlavička opravdu vznikla a že stránka běží v očekávaném jazyce. */
function zkontrolujVykresleni(html, jazyk) {
  // Hlavičku má každá stránka kromě chybové, která stojí samostatně.
  if (html.includes('<div id="site-header">')) {
    const hlavicka = html.match(/<div id="site-header">([\s\S]*?)<\/div>/);
    if (!hlavicka || !hlavicka[1].includes('<header')) {
      throw new Error('nevykreslila se hlavička — nenačetly se skripty?');
    }
  }
  // Aspoň jedno místo pro text musí být opravdu vyplněné.
  if (!/\sdata-i18n(-html)?="[^"]*"[^>]*>\s*\S/.test(html)) {
    throw new Error('stránka zůstala bez textu — nenačetly se skripty?');
  }
  const jazykStranky = (html.match(/<html lang="([a-z-]+)"/i) || [])[1];
  if (jazykStranky !== jazyk) {
    throw new Error(`stránka se vykreslila v jazyce "${jazykStranky}" místo "${jazyk}"`);
  }
}

/* Poslední kontrola před uložením: bezpečnostní pravidla musí být kompletní
   a nesmí v souboru zůstat vkládaný kód, který by je stejně obešel. */
function zkontrolujBezpecnost(html) {
  const csp = (html.match(/<meta http-equiv="Content-Security-Policy" content="([^"]*)"/i) || [])[1];
  if (!csp) throw new Error('chybí pravidla Content-Security-Policy');
  if (!csp.includes('upgrade-insecure-requests')) {
    throw new Error('v pravidlech chybí upgrade-insecure-requests');
  }
  // Vkládaný kód je zakázán (script-src 'self'), takže by ho prohlížeč stejně
  // odmítl — a stránka by se tiše rozbila. Chytíme to radši tady.
  if (/<script(?![^>]*\ssrc=)[^>]*>[\s\S]*?\S[\s\S]*?<\/script>/i.test(
        html.replace(/<script type="application\/ld\+json"[\s\S]*?<\/script>/gi, ''))) {
    throw new Error('ve stránce zůstal vkládaný <script> — pravidla ho zablokují');
  }
  if (/\son(click|error|load|mouseover)="/i.test(html)) {
    throw new Error('ve stránce zůstal vkládaný obslužný atribut (onclick, onerror…)');
  }
}

/* ------------------------------------------------------- úprava hlavičky */
/** Z vykreslené stránky poskládá správnou hlavičku pro daný jazyk. */
function upravHlavicku(html, jazyk, soubor, jeChybova) {
  const url = DOMENA + adresa(jazyk, soubor);

  // Titulek a popis si stránka nastavila sama podle jazyka — převezmeme je
  // i pro náhled na sociálních sítích, ať se nikde neliší.
  const titulek = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || '';
  const popis = (html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || '';

  let out = html;

  const nahradMeta = (klic, hodnota, atribut = 'property') => {
    const re = new RegExp(`(<meta ${atribut}="${klic}" content=")[^"]*(")`, 'i');
    if (re.test(out)) out = out.replace(re, `$1${hodnota}$2`);
  };

  nahradMeta('og:url', url);
  nahradMeta('og:locale', LOCALE[jazyk] || LOCALE[VYCHOZI]);
  nahradMeta('og:title', titulek);
  nahradMeta('og:description', popis);
  nahradMeta('twitter:title', titulek, 'name');
  nahradMeta('twitter:description', popis, 'name');

  // Kanonická adresa — říká vyhledávači, která adresa je ta pravá.
  out = out.replace(/<link rel="canonical" href="[^"]*">/i,
    `<link rel="canonical" href="${url}">`);

  // Odkazy na jazykové verze. Chybová stránka je jen jedna, jazykové
  // varianty nemá, proto se u ní vynechají.
  const hreflang = jeChybova ? '' : JAZYKY
    .map((j) => `<link rel="alternate" hreflang="${j}" href="${DOMENA}${adresa(j, soubor)}">`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${DOMENA}${adresa(VYCHOZI, soubor)}">`)
    .join('\n');

  // Původní řádky hreflang nahradíme nově složenými.
  const prvni = out.search(/<link rel="alternate" hreflang="/i);
  if (prvni !== -1) {
    out = out.replace(/<link rel="alternate" hreflang="[^"]*" href="[^"]*">\s*/gi, '');
    out = out.replace(/(<link rel="canonical"[^>]*>)/i,
      hreflang ? `$1\n${hreflang}` : '$1');
  }

  // Chybová stránka a stránka o osobních údajích do výsledků vyhledávání
  // nepatří. robots.txt je sice vylučuje, ale ten adresu jen nenavštíví —
  // tahle značka zajistí, že se neukáže, ani kdyby na ni někdo odkázal.
  if (jeChybova || soubor === 'ochrana-osobnich-udaju.html') {
    if (!/<meta name="robots"/i.test(out)) {
      out = out.replace(/(<link rel="canonical"[^>]*>)/i,
        '<meta name="robots" content="noindex, follow">\n$1');
    }
  }

  return out;
}

/* Vrátí do pravidel Content-Security-Policy direktivu, kterou server na dobu
   generování vypnul (viz spustServer). Na hotovém webu říká prohlížeči, ať
   případný odkaz na http:// sám povýší na zabezpečené https://. */
function vratCSP(html) {
  return html.replace(
    /(<meta http-equiv="Content-Security-Policy" content=")([^"]*)(")/i,
    (cele, zacatek, obsah, konec) => obsah.includes('upgrade-insecure-requests')
      ? cele
      : zacatek + obsah.replace(/;\s*$/, '') + '; upgrade-insecure-requests' + konec);
}

/* Odkazy na styly, skripty a obrázky musí platit i ze složky jazyka
   (/sk/o-nas), proto je tam vedeme od kořene webu. České stránky sedí přímo
   v kořeni, takže si u nich krátký zápis necháváme — díky tomu jde složka
   otevřít i ze souborů na disku. Výjimkou je chybová stránka: ta se ukazuje
   na libovolné adrese, a tak potřebuje odkazy od kořene vždycky. */
function absolutniCesty(html, jazyk, jeChybova) {
  if (jazyk === VYCHOZI && !jeChybova) return html;
  return html.replace(/(href|src)="assets\//g, '$1="/assets/');
}

/* --------------------------------------------------------------- sitemap */
/* --- Datum poslední změny --------------------------------------------------
   V sitemapě má <lastmod> říkat, kdy se stránka naposledy opravdu změnila.
   Dřív se sem psalo datum spuštění generátoru — jenže ten se pouští i tehdy,
   když se nezměnilo nic, takže se všech osmdesát adres tvářilo jako čerstvé.
   Google takový údaj pozná a přestane ho brát vážně u celého webu.

   Datum se proto bere z historie v Gitu: kdy padl poslední commit, který
   se daného souboru dotkl. Rozepsaná změna, která ještě není v commitu,
   se počítá jako dnešní — jinak by web tvrdil, že je starší, než je.

   Bez Gitu (stažené ZIP) se použije datum souboru na disku. */
const DATUM_CACHE = new Map();

function datumSouboru(relCesta) {
  if (DATUM_CACHE.has(relCesta)) return DATUM_CACHE.get(relCesta);
  const plna = path.join(KOREN, relCesta);
  let datum = null;

  try {
    const zmeneno = execFileSync('git', ['status', '--porcelain', '--', relCesta],
      { cwd: KOREN, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    datum = zmeneno
      ? new Date().toISOString().slice(0, 10)
      : execFileSync('git', ['log', '-1', '--format=%cs', '--', relCesta],
          { cwd: KOREN, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim() || null;
  } catch { /* Git není k dispozici — spadneme na datum souboru níž. */ }

  if (!datum) {
    try { datum = statSync(plna).mtime.toISOString().slice(0, 10); }
    catch { datum = new Date().toISOString().slice(0, 10); }
  }

  DATUM_CACHE.set(relCesta, datum);
  return datum;
}

/* Obsah stránky nevzniká jen z její šablony — texty jsou v i18n.js, údaje
   v content.js a vykreslení řeší site.js. Změna kteréhokoli z nich je změnou
   stránky, takže se bere to nejnovější datum ze všech. */
const SPOLECNE = ['assets/js/content.js', 'assets/js/i18n.js', 'assets/js/site.js'];

function datumStranky(soubor) {
  return [path.posix.join('_sablony', soubor), ...SPOLECNE]
    .map(datumSouboru)
    .sort()
    .pop();                             // řetězce RRRR-MM-DD se řadí jako data
}

function slozSitemap() {
  const zaznamy = [];

  for (const s of STRANKY) {
    if (!s.priorita) continue;          // stránky mimo vyhledávání vynecháme
    const zmeneno = datumStranky(s.soubor);
    for (const jazyk of JAZYKY) {
      const odkazy = JAZYKY
        .map((j) => `    <xhtml:link rel="alternate" hreflang="${j}" href="${DOMENA}${adresa(j, s.soubor)}"/>`)
        .join('\n');
      zaznamy.push(
`  <url>
    <loc>${DOMENA}${adresa(jazyk, s.soubor)}</loc>
${odkazy}
    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMENA}${adresa(VYCHOZI, s.soubor)}"/>
    <lastmod>${zmeneno}</lastmod>
    <changefreq>${s.zmena}</changefreq>
    <priority>${s.priorita}</priority>
  </url>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Tenhle soubor generuje nastroje/generator.mjs. Needitujte ho ručně —
     při dalším spuštění by se změny ztratily. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${zaznamy.join('\n')}
</urlset>
`;
}

/* ---------------------------------------------------------------- llms.txt */
/* Rozcestník pro nástroje s umělou inteligencí (llmstxt.org). Shrnuje na
   jednom místě to, na co se lidí ptají nejčastěji — kde sbor sídlí, kdy jsou
   bohoslužby, jak se ozvat — a odkazuje na jednotlivé stránky. Skládá se
   z týchž strukturovaných dat, která jsou v hotovém index.html, takže se
   s webem nemůže rozejít. */
function slozLlmsTxt(html) {
  const blok = html.match(/<script type="application\/ld\+json" id="schema-org">([\s\S]*?)<\/script>/);
  if (!blok) return null;

  let org;
  try {
    const data = JSON.parse(blok[1]);
    const graf = data['@graph'] || [data];
    org = graf.find((x) => x['@type'] === 'Church');
  } catch (e) { return null; }
  if (!org) return null;

  const a = org.address || {};
  const radky = [];

  radky.push('# ' + (org.name || 'Sbor Víry'));
  radky.push('');
  radky.push('> ' + (org.description || ''));
  radky.push('');
  // Krátké představení, které sbor odliší od podobně znějících organizací.
  // Rok založení i adresa v něm už jsou, proto se neopakují zvlášť.
  if (org.disambiguatingDescription) {
    radky.push(org.disambiguatingDescription);
  } else {
    radky.push('Křesťanský sbor v Třinci.');
    if (org.foundingDate) radky.push('Působí od roku ' + org.foundingDate + '.');
  }
  const kde = org.areaServed;
  if (kde) {
    radky.push('Působnost: ' + kde.name
      + (kde.containedInPlace ? ', ' + kde.containedInPlace.name : '') + ', Česko.');
  }
  radky.push('');

  radky.push('## Základní údaje');
  radky.push('');
  radky.push('- **Adresa setkávání:** ' + [a.streetAddress, a.postalCode, a.addressLocality]
    .filter(Boolean).join(', '));
  if (org.legalName) radky.push('- **Právní název:** ' + org.legalName);
  if (org.identifier && org.identifier.value) radky.push('- **IČO:** ' + org.identifier.value);
  if (org.email) radky.push('- **E-mail:** ' + org.email);
  if (org.employee && org.employee.name) {
    radky.push('- **Pastor:** ' + org.employee.name
      + (org.employee.jobTitle ? ' (' + org.employee.jobTitle + ')' : ''));
  }
  radky.push('');

  const hodiny = org.openingHoursSpecification || [];
  if (hodiny.length) {
    const DNY = {
      Sunday: 'neděle', Monday: 'pondělí', Tuesday: 'úterý', Wednesday: 'středa',
      Thursday: 'čtvrtek', Friday: 'pátek', Saturday: 'sobota'
    };
    radky.push('## Pravidelná setkání');
    radky.push('');
    for (const h of hodiny) {
      const den = DNY[String(h.dayOfWeek).split('/').pop()] || h.dayOfWeek;
      radky.push('- **' + (h.name || 'Setkání') + ':** ' + den + ' ' + h.opens);
    }
    radky.push('');
  }

  radky.push('## Stránky');
  radky.push('');
  const POPIS = {
    'index.html': 'úvodní stránka — časy setkání, aktuality, kázání',
    'o-nas.html': 'kdo jsme, čemu věříme, historie sboru',
    'jsem-tu-poprve.html': 'co čeká návštěvníka poprvé, časté dotazy',
    'kazani.html': 'záznamy kázání a konferencí',
    'aktuality.html': 'novinky a oznámení ze života sboru',
    'co-u-nas-najdete.html': 'bohoslužby, chvály, evangelizace, modlitba',
    'podporte-nas.html': 'jak podpořit službu sboru darem',
    'kontakt.html': 'kontakt, formulář a mapa'
  };
  for (const s of STRANKY) {
    if (!POPIS[s.soubor]) continue;
    radky.push('- [' + DOMENA + adresa(VYCHOZI, s.soubor) + '](' + DOMENA + adresa(VYCHOZI, s.soubor)
      + '): ' + POPIS[s.soubor]);
  }
  radky.push('');

  radky.push('## Jazykové verze');
  radky.push('');
  radky.push('Web je v deseti jazycích. Čeština běží v kořeni, ostatní ve vlastní složce:');
  radky.push(JAZYKY.filter((j) => j !== VYCHOZI).map((j) => DOMENA + '/' + j + '/').join(', ') + '.');
  radky.push('');

  if ((org.sameAs || []).length) {
    radky.push('## Oficiální profily');
    radky.push('');
    /* U archivního podcastu je potřeba dodat, že se neaktualizuje. Bez toho
       ho AI nabízí jako zdroj kázání a posluchač skončí u nahrávek z roku
       2020. Ve strukturovaných datech poznámka být nemůže — sameAs snese
       jen holé adresy — proto se dopisuje až tady. */
    const POZNAMKA = [
      [/podcasts\.apple\.com/, ' — archiv patnácti kázání z roku 2020, dál se neaktualizuje; '
        + 'aktuální kázání jsou na YouTube']
    ];
    for (const url of org.sameAs) {
      const p = POZNAMKA.find(([vzor]) => vzor.test(url));
      radky.push('- ' + url + (p ? p[1] : ''));
    }
    radky.push('');
  }

  return radky.join('\n');
}

/* ------------------------------------------------------------------ běh */
async function main() {
  const chrome = najdiChrome();
  if (!chrome) {
    console.error('Nenašel jsem Chrome ani Edge. Nainstalujte Chrome, nebo cestu');
    console.error('k němu předejte v proměnné CHROME_PATH.');
    process.exit(1);
  }

  const sablony = (await readdir(SABLONY)).filter((f) => f.endsWith('.html'));
  if (!sablony.length) {
    console.error('Ve složce _sablony/ nejsou žádné stránky.');
    process.exit(1);
  }

  console.log('Vykresluji přes: ' + chrome);
  const { server, port } = await spustServer();
  console.log('Pomocný server běží na portu ' + port + '\n');

  // Seznam všeho, co se má vygenerovat.
  const ukoly = [];
  for (const s of STRANKY) {
    for (const jazyk of JAZYKY) ukoly.push({ jazyk, soubor: s.soubor, jeChybova: false });
  }
  ukoly.push({ jazyk: VYCHOZI, soubor: CHYBOVA, jeChybova: true });

  let hotovo = 0;
  const chyby = [];

  async function zpracuj(ukol) {
    const url = 'http://sborviry.org' + adresa(ukol.jazyk, ukol.soubor);
    try {
      let html = await vykresli(chrome, port, url);
      zkontrolujVykresleni(html, ukol.jazyk);
      html = upravHlavicku(html, ukol.jazyk, ukol.soubor, ukol.jeChybova);
      html = absolutniCesty(html, ukol.jazyk, ukol.jeChybova);
      html = vratCSP(html);
      zkontrolujBezpecnost(html);

      const cil = cilovySoubor(ukol.jazyk, ukol.soubor);
      await mkdir(path.dirname(cil), { recursive: true });
      await writeFile(cil, html, 'utf8');

      hotovo++;
      const stav = String(hotovo).padStart(3, ' ') + '/' + ukoly.length;
      console.log(`  ${stav}  ${path.relative(KOREN, cil).replace(/\\/g, '/')}`);
    } catch (e) {
      chyby.push(`${ukol.jazyk}/${ukol.soubor}: ${e.message}`);
    }
  }

  // Vykreslujeme po skupinách, ať toho počítač nemá naráz moc.
  for (let i = 0; i < ukoly.length; i += NARAZ) {
    await Promise.all(ukoly.slice(i, i + NARAZ).map(zpracuj));
  }

  await writeFile(path.join(KOREN, 'sitemap.xml'), slozSitemap(), 'utf8');
  console.log('\n  sitemap.xml');

  // Rozcestník pro AI se skládá z hotové úvodní stránky, takže musí vzniknout
  // až po ní.
  try {
    const uvod = await readFile(path.join(KOREN, 'index.html'), 'utf8');
    const llms = slozLlmsTxt(uvod);
    if (llms) {
      await writeFile(path.join(KOREN, 'llms.txt'), llms, 'utf8');
      console.log('  llms.txt');
    } else {
      chyby.push('llms.txt: nepodařilo se přečíst strukturovaná data z index.html');
    }
  } catch (e) {
    chyby.push('llms.txt: ' + e.message);
  }

  server.close();

  if (chyby.length) {
    console.error('\nNěkteré stránky se nepovedly:');
    for (const c of chyby) console.error('  ' + c);
    process.exit(1);
  }
  console.log(`\nHotovo — vygenerováno ${hotovo} stránek v ${JAZYKY.length} jazycích.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
