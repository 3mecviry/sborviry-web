/* ============================================================================
   SBOR VÍRY — VÝROBA IKON WEBU
   ----------------------------------------------------------------------------
   K ČEMU TO JE
   Ikona v záložce prohlížeče (favicon) a ikona na ploše telefonu se vyrábějí
   ze symbolu srdce s křížem — assets/img/logo_zmena.png. Tenhle skript z něj
   udělá všechny potřebné velikosti naráz, aby se nemusely ořezávat ručně.

   Proč zvlášť symbol a ne celé logo: v logu je text „Sbor Víry“ napsaný přes
   spodní část srdce, takže z něj čtvercovou ikonu vyříznout nejde — písmena
   by se buď usekla, nebo by zbytečně zdrobněla celý znak.

   JAK SE POUŽÍVÁ
       node nastroje/ikony.mjs

   Potřebný je jen Chrome nebo Edge, který v počítači už je. Nic se neinstaluje.

   CO VZNIKNE (vše se přepíše)
       assets/img/favicon.png            192×192   ikona v záložce
       assets/img/apple-touch-icon.png   180×180   ikona na ploše iPhonu
       assets/img/icon.png               256×256   záloha ve větší velikosti
       favicon.ico                        48×48    záloha v kořeni webu

   Proč ještě favicon.ico, když v hlavičce stránek je odkaz na favicon.png:
   část nástrojů se na adresu /favicon.ico ptá napevno, bez ohledu na to,
   co je v hlavičce — čtečky, náhledy odkazů, starší prohlížeče. Bez souboru
   dostanou chybu 404. Proto leží v kořeni webu, ne v assets/img: ta adresa
   je daná zvykem a nedá se přesunout.

   Velikost favicony musí zůstat násobkem 48 px, jinak ji Google ve výsledcích
   vyhledávání neukáže. Změníte-li ji, přepište i sizes="…" v _sablony/*.html.

   ZMĚNA LOGA
   Nahraďte assets/img/logo_zmena.png novým symbolem (nejlépe s průhledným
   pozadím) a skript spusťte znovu. Okraje se dopočítají samy — symbol se
   v obrázku najde podle neprůhledných pixelů, takže nezáleží na tom,
   kde přesně v ploše leží.
   ========================================================================== */

import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const KOREN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ZDROJ = 'assets/img/logo_zmena.png';

/* název souboru, délka hrany, kolik místa nechat kolem (podíl z hrany) */
const IKONY = [
  ['favicon.png', 192, 0.05],
  ['apple-touch-icon.png', 180, 0.10],   // ikona na ploše snese větší okraj
  ['icon.png', 256, 0.05],
  ['favicon.ico', 48, 0.05]              // v kořeni webu, viz hlavička skriptu
];

/* Prohlížeč umí z plátna vydat jen PNG nebo JPEG, žádné ICO. Formát ICO ale
   od Windows Vista dovoluje mít PNG přímo uvnitř — stačí kolem něj obalit
   dvaadvacetibajtovou hlavičku. Tím se obejde nutnost cokoli instalovat.

   Hlavička má dvě části: popis souboru (kolik je uvnitř obrázků) a záznam
   o jediném obrázku (jak je velký a kde v souboru začíná). */
function zabalDoIco(png, hrana) {
  const hlavicka = Buffer.alloc(22);
  hlavicka.writeUInt16LE(0, 0);          // rezervováno, vždy nula
  hlavicka.writeUInt16LE(1, 2);          // typ 1 = ikona
  hlavicka.writeUInt16LE(1, 4);          // počet obrázků uvnitř
  hlavicka.writeUInt8(hrana, 6);         // šířka  (0 by znamenala 256)
  hlavicka.writeUInt8(hrana, 7);         // výška
  hlavicka.writeUInt8(0, 8);             // počet barev palety — 0 = plné barvy
  hlavicka.writeUInt8(0, 9);             // rezervováno
  hlavicka.writeUInt16LE(1, 10);         // barevné roviny
  hlavicka.writeUInt16LE(32, 12);        // bitů na pixel (RGBA)
  hlavicka.writeUInt32LE(png.length, 14);// délka obrázku
  hlavicka.writeUInt32LE(22, 18);        // kde obrázek začíná — hned za hlavičkou
  return Buffer.concat([hlavicka, png]);
}

function najdiChrome() {
  const kandidati = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe'),
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome', '/usr/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  ].filter(Boolean);
  return kandidati.find((c) => existsSync(c)) || null;
}

const STRANKA = `<!DOCTYPE html><meta charset="utf-8"><body><div id="out"></div><div id="info"></div><script>
const o = new Image();
o.onload = function () {
  const m = document.createElement('canvas');
  m.width = o.width; m.height = o.height;
  const mk = m.getContext('2d', { willReadFrequently: true });
  mk.drawImage(o, 0, 0);
  const px = mk.getImageData(0, 0, o.width, o.height).data;

  // Symbol je vše, co není průhledné ani bílé — podle toho se ořízne nastěsno.
  let x1 = 1e9, y1 = 1e9, x2 = -1, y2 = -1;
  for (let y = 0; y < o.height; y++) {
    for (let x = 0; x < o.width; x++) {
      const i = (y * o.width + x) * 4;
      if (px[i+3] < 30) continue;
      if (px[i] > 240 && px[i+1] > 240 && px[i+2] > 240) continue;
      if (x < x1) x1 = x; if (x > x2) x2 = x;
      if (y < y1) y1 = y; if (y > y2) y2 = y;
    }
  }
  if (x2 < 0) { document.getElementById('out').textContent = 'SYMBOL-NENALEZEN'; return; }
  const vw = x2 - x1 + 1, vh = y2 - y1 + 1;
  document.getElementById('info').textContent = JSON.stringify({ x: x1, y: y1, sirka: vw, vyska: vh });

  const vysledky = [];
  for (const [nazev, velikost, okrajPodil] of ${JSON.stringify(IKONY)}) {
    const p = document.createElement('canvas');
    p.width = velikost; p.height = velikost;
    const k = p.getContext('2d');
    k.imageSmoothingEnabled = true; k.imageSmoothingQuality = 'high';
    const okraj = velikost * okrajPodil, volno = velikost - 2 * okraj;
    const mer = Math.min(volno / vw, volno / vh);
    const w = vw * mer, h = vh * mer;
    k.drawImage(o, x1, y1, vw, vh, (velikost - w) / 2, (velikost - h) / 2, w, h);
    vysledky.push(nazev + '|' + p.toDataURL('image/png'));
  }
  document.getElementById('out').textContent = vysledky.join('###');
};
o.onerror = function () { document.getElementById('out').textContent = 'CHYBA-NACTENI'; };
o.src = '/${ZDROJ}';
</script></body>`;

async function main() {
  const chrome = najdiChrome();
  if (!chrome) {
    console.error('Nenašel jsem Chrome ani Edge. Nainstalujte Chrome, nebo cestu k němu');
    console.error('předejte v proměnné CHROME_PATH.');
    process.exit(1);
  }
  if (!existsSync(path.join(KOREN, ZDROJ))) {
    console.error('Chybí předloha ' + ZDROJ + ' — symbol srdce s křížem bez textu.');
    process.exit(1);
  }

  const server = createServer(async (req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }).end(STRANKA);
      return;
    }
    let data;
    try {
      const s = path.join(KOREN, req.url.replace(/^\/+/, '').split('?')[0]);
      if (!s.startsWith(KOREN)) { res.writeHead(403).end(); return; }
      data = await readFile(s);
    } catch { res.writeHead(404).end(); return; }
    res.writeHead(200, { 'Content-Type': 'image/png' }).end(data);
  });

  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  console.log('Vykresluji přes: ' + chrome + '\n');

  const html = await new Promise((ok, ne) => {
    execFile(chrome, ['--headless=new', '--disable-gpu', '--no-sandbox',
      '--virtual-time-budget=8000', '--dump-dom', 'http://127.0.0.1:' + port + '/'],
      { encoding: 'buffer', maxBuffer: 128 * 1024 * 1024, timeout: 60000 },
      (e, out) => {
        const s = out ? out.toString('utf8') : '';
        s.includes('</html>') ? ok(s) : ne(new Error('Chrome nevrátil stránku' + (e ? ' — ' + e.message : '')));
      });
  });
  server.close();

  const vse = (html.match(/<div id="out">([^<]*)<\/div>/) || [])[1] || '';
  if (!vse.includes('data:image/png')) {
    console.error('Nepodařilo se vyrobit ikony: ' + (vse || 'prázdný výstup'));
    process.exit(1);
  }
  console.log('Symbol nalezen v předloze: ' + ((html.match(/<div id="info">([^<]*)<\/div>/) || [])[1] || ''));

  for (const kus of vse.split('###')) {
    const [nazev, url] = kus.split('|');
    const png = Buffer.from(url.split(',')[1], 'base64');
    const hrana = png.readUInt32BE(16);
    // Rozměry se čtou z PNG i u ikony — uvnitř ICO je pořád PNG.
    const jeIco = nazev.endsWith('.ico');
    const data = jeIco ? zabalDoIco(png, hrana) : png;
    // favicon.ico patří do kořene webu, ostatní ikony do assets/img.
    await writeFile(path.join(KOREN, jeIco ? '' : 'assets/img', nazev), data);
    console.log('  ' + nazev.padEnd(24) + hrana + '×' + png.readUInt32BE(20)
      + '   ' + (data.length / 1024).toFixed(1) + ' kB');
  }
  console.log('\nHotovo. Ikony se na webu projeví po nahrání na GitHub;');
  console.log('v prohlížeči je někdy potřeba načíst stránku bez mezipaměti (Ctrl+F5).');
}

main().catch((e) => { console.error(e); process.exit(1); });
