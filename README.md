# Sbor Víry — webové stránky

Statický web v **deseti jazycích** (čeština, slovenština, polština, ukrajinština,
ruština, němčina, angličtina, španělština, švédština, maďarština).
Žádná databáze, žádné placené služby — stačí soubory nahrát na hosting.

Texty se upravují na jednom místě (`assets/js/i18n.js`) a hotové stránky se z nich
vyrobí jedním příkazem — viz [kapitola 3](#3-generování-stránek). Díky tomu je text
přímo v HTML, takže web najde nejen Google, ale i Bing, Seznam a vyhledávače
umělé inteligence.

---

## 1. Rychlé spuštění

**Vyzkoušet u sebe v počítači:** rozbalte složku a otevřete `index.html` v prohlížeči.

**Zveřejnit zdarma na GitHub Pages:**

1. Vytvořte si účet na [github.com](https://github.com) a nový repozitář, např. `sborviry-web`.
2. Nahrajte do něj **obsah této složky** (tedy `index.html` a složku `assets/`, ne složku samotnou).
3. V repozitáři jděte do **Settings → Pages**.
4. V *Source* zvolte `Deploy from a branch`, větev `main`, složka `/ (root)`. Uložte.
5. Za minutu bude web na adrese `https://vase-jmeno.github.io/sborviry-web/`.

### Doména sborviry.org (Cloudflare + GitHub Pages)

Doména je vedená na Cloudflare. **Pořadí kroků je důležité** — když se prohodí,
web na pár hodin přestane být dostupný, než se srovnají certifikáty.

1. **Cloudflare → DNS.** U kořenové domény `sborviry.org` založte **čtyři `A` záznamy**
   na adresy GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153`. Pro `www` přidejte `CNAME` na `vase-jmeno.github.io`.
2. **Oranžový mráček zatím vypněte** (*DNS only*, šedý). GitHub si potřebuje sám
   ověřit doménu a vystavit certifikát; přes zapnutou proxy to neprojde.
3. **Cloudflare → SSL/TLS → Overview:** režim musí být **Full**, ne *Flexible*.
   Při *Flexible* se web zacyklí v nekonečném přesměrování — je to nejčastější
   chyba téhle kombinace.
4. **GitHub → Settings → Pages → Custom domain:** zadejte `sborviry.org` a uložte.
   V repozitáři tím vznikne soubor `CNAME`. Počkejte, až se u pole objeví zelená
   fajfka (většinou do hodiny).
5. Teprve pak zaškrtněte **Enforce HTTPS** a případně v Cloudflare zapněte proxy zpět.

> **Adresa je už zadrátovaná v souborech.** `sitemap.xml`, `robots.txt` a značky
> `canonical`, `og:` a `hreflang` ve všech `*.html` odkazují na `https://sborviry.org`.
> Kdyby se doména někdy měnila, je potřeba přepsat je všechny — hledejte
> řetězec `sborviry.org`.

Stejně dobře fungují i **Netlify** nebo **Cloudflare Pages** — obojí zdarma; stačí složku
přetáhnout do prohlížeče na jejich stránce.

---

## 2. Kde co upravit

| Chci změnit | Soubor |
|---|---|
| Adresu, e-mail, IČO | `assets/js/content.js` → `contact` |
| Odkazy na YouTube / Facebook / Instagram | `assets/js/content.js` → `social` |
| Časy bohoslužeb a setkání | `assets/js/content.js` → `times` |
| Aktuality a oznámení | `assets/js/content.js` → `news` |
| Fotky ve fotogalerii | `assets/js/content.js` → `gallery` |
| Číslo účtu pro dary | `assets/js/content.js` → `giving` |
| **Jakýkoli text na webu** | `assets/js/i18n.js` |
| Barvy, velikosti, zaoblení | `assets/css/style.css` → sekce `:root` nahoře |
| Rozložení stránky, pořadí sekcí | `_sablony/` → příslušný `*.html` soubor |

Soubor `assets/js/site.js` obsahuje logiku (přepínání jazyků, menu, mapa).
Ten měnit nemusíte.

> **Po každé úpravě spusťte `node nastroje/generator.mjs`.** Stránky v kořeni
> (`index.html`, složky `sk/`, `pl/` …) se tím vyrobí znovu — ručně se do nich
> nezasahuje, při dalším spuštění by se změny ztratily. Podrobnosti v kapitole 3.

### Adresy bez koncovky `.html`

Web se venku ukazuje jako `sborviry.org/kazani`, ne `sborviry.org/kazani.html`.
Soubory na disku se nepřejmenovávaly — pořád je to `kazani.html`. GitHub Pages
(i Netlify a Cloudflare Pages) umí soubor najít i bez koncovky, takže stačilo
přepsat odkazy: menu a patičku vyrábí `assets/js/site.js`, adresy pro vyhledávače
jsou v `canonical`, `og:url` a `hreflang` v hlavičkách stránek a v `sitemap.xml`.

Staré odkazy s `.html` (třeba ve starším příspěvku na Facebooku) fungují dál —
stránka se otevře úplně stejná a v adresním řádku se koncovka jen tiše schová.
Vyhledávačům říká značka `canonical`, že platí ta kratší podoba, takže se stránka
nepočítá dvakrát.

**Při zkoušení z disku** (otevřením `index.html` v prohlížeči) si menu koncovky
nechává — bez serveru by odkazy bez koncovky nikam nevedly. Pozná se to podle
adresy: pravidlo v `site.js` (`CISTE_ADRESY`) i v hlavičce stránek reaguje jen
na `sborviry.org` a `*.github.io`.

**Přidáváte-li novou stránku,** založte ji v `_sablony/` a dopište ji do seznamu
`STRANKY` v `nastroje/generator.mjs`. Vygeneruje se pak sama ve všech jazycích
a rovnou se dostane i do `sitemap.xml` — ten se už ručně needituje.

### Úklid adresy ze sociálních sítí

Když někdo přijde z Facebooku nebo Instagramu, odkaz s sebou nese sledovací kód
(`?fbclid=IwAR3xK9mQ2vL8pN…`, `?igsh=…`). V adresním řádku pak místo
`sborviry.org/aktuality` visí dlouhý chuchvalec, který návštěvníkovi nic neříká.

V `<head>` každé stránky je proto krátký úsek označený komentářem **ÚKLID ADRESY**.
Smaže tyhle kódy hned na začátku načítání, ještě než se stránka vykreslí.
Odstraňuje značky Facebooku, Instagramu, Googlu, Microsoftu, TikToku, X, LinkedInu,
Yandexu, Mailchimpu, YouTube a všechny parametry začínající `utm_`.

Maže se jen to, co je vyjmenované v seznamu `smeti`; cokoli neznámého zůstává.
Jazyk se dnes pozná z adresy (`sborviry.org/sk/o-nas`), takže žádný vlastní
parametr chránit nepotřebujeme.

Kdyby některá síť zavedla nový sledovací kód, dopište ho do seznamu `smeti`
a stejnou úpravu zkopírujte do zbylých devíti stránek — úsek je ve všech totožný.

### Přidání nové aktuality

V `assets/js/content.js` najděte `news: [` a nahoru vložte nový blok:

```js
{
  date: '2026-09-15',
  image: 'assets/img/moje-fotka.jpg',   // nebo '' pro zástupný obrázek
  link:  'https://www.facebook.com/sborviry.org/',   // nebo '' bez odkazu
  tag:   { cs: 'Akce', sk: '…', pl: '…', uk: '…', ru: '…', de: '…', en: '…', es: '…' },
  title: { cs: 'Nadpis', sk: '…', pl: '…', uk: '…', ru: '…', de: '…', en: '…', es: '…' },
  text:  { cs: 'Text…',  sk: '…', pl: '…', uk: '…', ru: '…', de: '…', en: '…', es: '…' }
},
```

Pokud některý jazyk vynecháte, automaticky se zobrazí čeština.
Pozor na čárky mezi bloky — jsou povinné.

---

## 3. Generování stránek

### Proč to je potřeba

Web si celý text vykresluje JavaScriptem. Google si s tím poradí, ale **Bing
(a s ním Microsoft Edge i Copilot), Seznam ani vyhledávače umělé inteligence**
(ChatGPT, Claude, Perplexity) JavaScript nespouštějí — viděly by prázdnou stránku.
Proto se stránky jednou dopředu vykreslí a text se uloží přímo do HTML.
Návštěvník dostane přesně totéž co dřív, roboti navíc uvidí obsah.

### Jak se to používá

```
node nastroje/generator.mjs
```

Potřebujete jen **Node.js** ([nodejs.org](https://nodejs.org), stačí verze 18 a vyšší)
a **Chrome** nebo **Edge** — ten už v počítači je. Nic se neinstaluje, žádné
`node_modules`. Generování 91 stránek trvá necelou minutu.

Je-li Chrome jinde než obvykle, cestu k němu předáte proměnnou `CHROME_PATH`.

### Co je zdroj a co výsledek

| Složka | Co v ní je | Upravovat ručně? |
|---|---|---|
| `_sablony/` | kostry stránek — rozložení, pořadí sekcí | **ano** |
| `assets/js/i18n.js` | všechny texty | **ano** |
| `assets/js/content.js` | kontakty, časy, aktuality, dary | **ano** |
| `index.html`, `o-nas.html`, … | hotová česká verze | ne — vygeneruje se |
| `sk/`, `pl/`, `uk/`, … | hotové jazykové verze | ne — vygeneruje se |
| `sitemap.xml` | seznam adres pro vyhledávače | ne — vygeneruje se |

Do souborů v kořeni a v jazykových složkách se **nezasahuje**. Při dalším
spuštění by se změny přepsaly. Chcete-li upravit rozložení stránky, sáhněte
do `_sablony/`; chcete-li text, do `i18n.js`.

### Běžný postup při úpravě

1. Upravte text v `assets/js/i18n.js` (nebo údaj v `content.js`).
2. Spusťte `node nastroje/generator.mjs`.
3. Otevřete některou stránku a zkontrolujte ji.
4. Změny nahrajte na GitHub — projeví se do minuty.

### Co generátor vyrobí navíc

Kromě samotných stránek vzniká i to, podle čeho si web najdou vyhledávače
a nástroje s umělou inteligencí:

- **Strukturovaná data** (schema.org) přímo v HTML každé stránky — kdo sbor je,
  kde sídlí, IČO, odkazy na profily a **časy setkání ve strojovém tvaru**.
  Díky nim umí asistent odpovědět na „kdy má Sbor Víry bohoslužby“ rovnou.
  Časy se berou z `content.js` → `times`, z políček `den` a `cas`.
  Na stránce *Jsem tu poprvé* se navíc přidají **časté dotazy** — čtou se
  rovnou ze stránky, takže se nikdy nerozejdou s tím, co je vidět.
- **`sitemap.xml`** — všech 80 adres včetně jazykových verzí.
- **`llms.txt`** — stručný rozcestník pro AI nástroje: adresa, časy setkání,
  kontakt a seznam stránek na jednom místě.

Nic z toho se needituje ručně; vzniká to z `i18n.js` a `content.js`.

**Datum poslední změny v sitemapě** se bere z historie v Gitu — z posledního
commitu, který se dotkl šablony stránky nebo souborů `content.js`, `i18n.js`
a `site.js` (z nich stránka vzniká). Pustíte-li generátor, aniž jste něco
změnili, data zůstanou stát. To je záměr: kdyby se pokaždé přepsala na dnešek,
Google by údaj vyhodnotil jako nespolehlivý a přestal by ho brát v potaz
u celého webu. Rozepsaná změna, která ještě není v commitu, se počítá jako
dnešní. Bez Gitu (stažený ZIP) se použije datum souboru na disku.

### Oznámení vyhledávačům (IndexNow)

Vyhledávač se o změně běžně dozví, až se u nás někdy zastaví jeho robot —
u menšího webu to bývá týdny. Proto mu to umíme říct sami:

```
node nastroje/indexnow.mjs                 ohlásí všech 80 adres ze sitemapy
node nastroje/indexnow.mjs /kazani         ohlásí jen vyjmenované stránky
```

Spouští se **až po nahrání na GitHub** — vyhledávač si stránku vzápětí přijde
přečíst, takže na webu už musí být nová verze. Jedno oznámení stačí pro Bing,
Seznam i další; rozešlou si ho mezi sebou. Google zapojený není, ten chodí sám
podle `sitemap.xml`.

**O nové kázání se starat nemusíte** — automatika, která hlídá YouTube, si
oznámení pošle sama, jakmile video vymění.

Vlastnictví webu se dokládá souborem `18ae…150b.txt` v kořeni, který obsahuje
tentýž klíč jako `nastroje/indexnow.mjs`. Nesmí se smazat ani přejmenovat,
jinak vyhledávač oznámení odmítne. Klíč není tajný, je veřejně čitelný.

### Když se generování nepovede

Generátor si po sobě kontroluje, že stránka opravdu vznikla, že je ve správném
jazyce a že text nezůstal skrytý. Když něco nesedí, vypíše to a **soubor neuloží** —
na webu tedy zůstane poslední funkční verze. Nejčastější příčina je překlep
v `i18n.js` nebo `content.js`, kvůli kterému se soubor nenačte; chybu ukáže
prohlížeč v konzoli (F12).

---

## 4. Fotografie

Na webu jsou už **připravená místa s konkrétními názvy souborů**. Stačí fotku
pojmenovat a nakopírovat do složky `assets/img/` — nic v kódu se upravovat nemusí.

| Název souboru | Kde se zobrazí | Doporučený tvar |
|---|---|---|
| `hero.jpg` | pozadí úvodní obrazovky | na šířku, cca 2000 × 1125 px |
| `sbor-1.jpg` | O nás — vedle příběhu sboru | na šířku (ořezává se na 4 : 3) |
| `sbor-2.jpg` | O nás — vedle vize | na šířku (ořezává se na 4 : 3) |
| `pastor.jpg` | O nás — portrét pastora | **na výšku** (ořezává se na 3 : 4) |
| `predsali.jpg` | zatím nikde — sekce „Jak vypadá nedělní dopoledne“ je bez fotky | **na výšku** (ořezává se na 3 : 4) |
| `galerie-01.jpg` … `-12.jpg` | fotogalerie na úvodní stránce | první na šířku, ostatní čtvercový ořez |
| `logo-karta.jpg` | zástupná karta u aktualit bez fotky | hotová, 1200 × 675 |
| `og-image.jpg` | náhled při sdílení na sociálních sítích | hotová, 1200 × 630 |

Všechny tyto fotky jsou už **vložené a zmenšené** (celá složka `assets/img/` má 2,1 MB).
Chcete-li některou vyměnit, prostě přepište soubor stejného jména.

**Chybějící soubor web nerozbije** — místo fotky se zobrazí šrafovaná plocha
a úvodní obrazovka zůstane tmavá.

### Fotogalerie (karusel)

V galerii je dvanáct fotek (`galerie-01.jpg` až `galerie-12.jpg`). Seznam je
v `content.js` → `gallery`; u každé fotky je i popisek ve všech jazycích, který
čtou odečítače obrazovky a vyhledávače. Prázdný seznam = sekce se vůbec nevykreslí.

Kolik fotek je vidět vedle sebe, se řídí šířkou obrazovky: **mobil 1 · tablet 2 ·
notebook 3 · velký monitor 4 · televize 5**. Ovládat se dá potažením prstem,
šipkami, tečkami i klávesnicí (šipky vlevo/vpravo) — tedy i dálkovým ovladačem.

Galerie se pomalu posouvá sama (5 s) a **zastaví se**, jakmile na ni najedete myší,
dotknete se jí, používáte klávesnici, přepnete na jinou záložku nebo sjedete jinam
po stránce. Tlačítkem vpravo se posouvání dá vypnout úplně. Pokud má návštěvník
v systému zapnuté omezení animací, galerie se nerozjede vůbec.

Rychlost změníte v `assets/js/site.js` — hledejte `setInterval(tick, 5000)`.

### Kde vzít fotky

Vaše fotografie jsou na [Facebooku](https://www.facebook.com/sborviry.org/photos),
[Instagramu](https://www.instagram.com/sborviryorg/) a v profilu na Google Maps.
Stáhněte je v co největším rozlišení, zmenšete (např. na
[squoosh.app](https://squoosh.app), ideálně do 300 kB) a uložte pod názvy z tabulky výše.

> **Souhlas se zveřejněním.** U snímků, na kterých jsou rozpoznatelní lidé, je dobré
> mít jejich souhlas — zvlášť u dětí. Pro web se často hodí spíš záběry zezadu,
> celkové pohledy do sálu nebo detaily, kde konkrétní tváře nejsou v popředí.

---

## 5. Logo

Web používá **vaše originální logo** (`logo_bez_pozadi.png`), zpracované do těchto variant:

| Soubor | K čemu slouží |
|---|---|
| `logo.png` | hlavička webu — originál oříznutý, průhledné pozadí |
| `logo-light.png` | patička na tmavém pozadí — nápis je bílý, srdce a vlna světlejší |
| `logo_zmena.png` | **samotný symbol** srdce s křížem, bez nápisu — předloha pro ikony |
| `icon.png` | ikona 256 × 256 (záloha ve větší velikosti) |
| `favicon.png` | ikona v záložce prohlížeče, 192 × 192 |
| `apple-touch-icon.png` | ikona po přidání webu na plochu telefonu, 180 × 180 |
| `favicon.ico` | záloha v **kořeni webu**, 48 × 48 — viz poznámka níž |

### Ikony se vyrábějí příkazem

```
node nastroje/ikony.mjs
```

Ze souboru `logo_zmena.png` vzniknou naráz všechny velikosti — symbol se
v obrázku najde sám a vycentruje, takže se nic neořezává ručně.

**Proč ještě `favicon.ico`,** když v hlavičce stránek je odkaz na `favicon.png`:
část nástrojů se ptá napevno na adresu `/favicon.ico` bez ohledu na to, co je
v hlavičce — čtečky, náhledy odkazů při sdílení, starší prohlížeče. Bez souboru
dostanou chybu 404. Proto leží v kořeni webu, ne v `assets/img/`: ta adresa je
daná zvykem a přesunout se nedá. Uvnitř je obyčejné PNG, jen obalené hlavičkou
formátu ICO — prohlížeč umí z plátna vydat jen PNG, takže se obal dopisuje
v `ikony.mjs` a nic se kvůli tomu neinstaluje.

**Proč se ikony nedělají z `logo.png`:** v logu je nápis „Sbor Víry" napsaný
přes spodní část srdce. Čtvercový výřez by tedy buď usekl písmena (což byl
stav do léta 2026 — v záložce visel nečitelný útržek „or Ví"), nebo by celý
znak zdrobnil. Proto je symbol uložený zvlášť.

**Měníte-li logo:** nahraďte `logo_zmena.png` novým symbolem (nejlépe
s průhledným pozadím) a příkaz spusťte znovu.

> Velikost favicony musí zůstat **násobkem 48 px** (48, 96, 144, 192 …), jinak
> ji Google ve výsledcích vyhledávání neukáže. Měnili-li byste ji, přepište
> i `sizes="…"` v `_sablony/*.html`.

Máte-li logo i ve vektoru (`.svg`, `.ai`, `.eps`), vyplatí se ho použít: zůstane ostré
na jakémkoli displeji. Uložte ho jako `assets/img/logo.svg` a v `assets/js/site.js`
změňte `logo.png` na `logo.svg` (řádek s hlavičkou).

---

## 6. YouTube — video na webu

Na úvodní stránce i na stránce Kázání je náhled videa. Přehrávač YouTube se
vloží **až po kliknutí** — díky tomu se stránka načte rychleji a YouTube do té
doby o návštěvníkovi nic neví.

### Které video se přehraje

V `assets/js/content.js` jsou dvě pole a **obě jsou už vyplněná**:

| Pole | Nyní | K čemu je |
|---|---|---|
| `youtubeVideoId` | `w1Qw761j-Ws` | video, které se přehraje jako první |
| `youtubePlaylistId` | `PLeGPPF1P4_e7…` | playlist **Bohoslužba \| 2026** |

Přehraje se zadané video a po jeho dohrání divák plynule pokračuje dalšími
kázáními ze stejného playlistu. Když jedno z polí vymažete, web se nerozbije:
zůstane-li jen playlist, spustí se od začátku; zůstane-li jen video, přehraje
se samostatně; při obou prázdných se ukáže tlačítko odkazující na kanál.

**Na začátku každého roku** sem vložte ID nového playlistu (např. *Bohoslužba | 2027*).
Je to jediná roční údržba, kterou video na webu potřebuje.

> **Nepoužívejte automatický seznam „nahraná videa“** (ID začínající `UU…`).
> YouTube ho na cizí weby vkládat nedovolí a vrátí *chybu 153*. Vždy použijte
> playlist, který jste si na YouTube sami vytvořili.

### Automatické doplňování nejnovějšího kázání

Ve složce `.github/workflows/` je připravený soubor `nejnovejsi-video.yml`.
Pokud máte web na GitHubu, **pole `youtubeVideoId` se aktualizuje samo**:
dvakrát denně se podívá do playlistu bohoslužeb, najde v něm video s nejnovějším
datem zveřejnění a zapíše ho.

Bere je z playlistu záměrně — kdyby se koukal jen na kanál, po nahrání jiného
videa (třeba záznamu z konference) by se na webu místo kázání ukázalo ono.
Nepodaří-li se playlist načíst, sáhne po kanálu jako záloze.

Ručně workflow spustíte v záložce **Actions → Nejnovější video z YouTube →
Run workflow**. Pokud automatiku nechcete, soubor smažte — web funguje i bez ní,
jen si ID videa budete vyměňovat sami.

### Živé přenosy

Odkaz na živé vysílání byl z webu odstraněn. Až budete znovu vysílat živě,
napište si o jeho vrácení — jde o jedno tlačítko a jeden text v deseti jazycích.

---

## 7. Telefon a kontaktní formulář

Telefonní číslo se na webu **záměrně neuvádí** — jako kontakt slouží e-mail a zpráva
na Facebooku (obojí je na stránce Kontakt). Kdybyste číslo někdy chtěli zveřejnit,
stačí ho vepsat do `content.js` → `contact.phone` a řádek se sám objeví na všech
stránkách i ve strukturovaných datech. Prázdná hodnota se nikde nezobrazuje.

### Kontaktní formulář

Ve výchozím nastavení formulář otevře e-mailový program návštěvníka s předvyplněnou
zprávou. Funguje všude a nevyžaduje žádnou službu.

Chcete-li zprávy dostávat přímo do e-mailu bez otevírání klienta:

1. Zaregistrujte se zdarma na [formspree.io](https://formspree.io) a vytvořte formulář.
2. V `_sablony/kontakt.html` upravte řádek `<form id="contact-form" class="mt-2" method="post" action="#">` na:

```html
<form id="contact-form" class="mt-2" data-mode="endpoint"
      action="https://formspree.io/f/VAS_KOD" method="POST">
```

3. **Zároveň rozšiřte bezpečnostní pravidlo CSP** v hlavičce všech šablon
   v `_sablony/` z `form-action 'self'` na `form-action 'self' https://formspree.io`
   a spusťte `node nastroje/generator.mjs`. Bez toho prohlížeč odeslání
   tiše zablokuje — formulář vypadá funkčně, ale nic neodejde a chyba
   se ukáže jen v konzoli (F12).

---

## 8. Odlišení od podobných názvů

V Třinci působí i **Církev Víry**, která patří do jiné skupiny. Aby nedocházelo k záměně,
web dělá tři věci:

1. **Název stránek** je všude `Sbor Víry — Třinec` (v titulku záložky i při sdílení odkazu).
2. **V hlavičce** je vedle loga štítek „Třinec“.
3. **Strukturovaná data Schema.org** (typ `Church`) se vkládají automaticky do každé
   stránky. Obsahují IČO 26596865, přesnou adresu, souřadnice a odkazy na oficiální
   YouTube, Facebook a Instagram. Podle nich Google i AI asistenti spolehlivě poznají,
   že jde o jinou organizaci než podobně znějící sbory.

V seznamu profilů (`sameAs`) je i **archivní podcast** na Apple Podcasts — patnáct
kázání z roku 2020, nahraných tehdy přes službu Anchor. Nové epizody nepřibývají
a na webu na něj záměrně nikde neodkazujeme; posílat návštěvníky na spící pořad
nemá smysl. Ve strukturovaných datech ale zůstat má: bez něj by mohl vyjít jako
cizí subjekt se stejným názvem, což je přesně to, čemu se tahle kapitola věnuje.
Proto je v `content.js` uložený zvlášť jako `podcastArchiv`, mimo `social`, ze
kterého se skládají viditelná tlačítka. V `llms.txt` se u něj automaticky doplní
poznámka, že se neaktualizuje — jinak ho AI nabízí jako zdroj aktuálních kázání.

> **Pozor:** v RSS feedu toho podcastu je jako web uvedená stará doména
> `sborviry.cz`, která už neexistuje. Dnešní rozhraní Spotify for Creators
> pole s webem vůbec nenabízí, takže se ta hodnota přes ně opravit nedá —
> jediná cesta by byla přestěhovat podcast k jinému hostiteli.

Generuje je funkce `renderSchema()` v `assets/js/site.js` — čerpá z `content.js`,
takže se aktualizují samy, jakmile doplníte telefon nebo upravíte kontakty.
Správnost si můžete kdykoli ověřit na [validator.schema.org](https://validator.schema.org)
(až bude web nasazený online).

Web nikde konkurenční sbor nezmiňuje — odlišení stojí čistě na vlastní identitě.

---

## 9. Jazyky

Web je v **deseti jazycích**. Přepínač je vpravo v hlavičce. **Každý jazyk má
vlastní adresu** — čeština běží v kořeni, ostatní ve své složce:

| Kód | Jazyk | Odkaz |
|---|---|---|
| `cs` | čeština (výchozí) | `sborviry.org/` |
| `sk` | slovenština | `sborviry.org/sk/` |
| `pl` | polština | `sborviry.org/pl/` |
| `uk` | ukrajinština | `sborviry.org/uk/` |
| `ru` | ruština | `sborviry.org/ru/` |
| `de` | němčina | `sborviry.org/de/` |
| `en` | angličtina | `sborviry.org/en/` |
| `es` | španělština | `sborviry.org/es/` |
| `sv` | švédština | `sborviry.org/sv/` |
| `hu` | maďarština | `sborviry.org/hu/` |

Stejně to funguje na kterékoli stránce — `sborviry.org/pl/o-nas`.

**Proč vlastní adresy.** Dokud měly všechny jazyky jednu adresu a lišily se jen
parametrem `?lang=`, uměl je rozeznat pouze Google. Pro ostatní vyhledávače
existovala jedna česká stránka. Teď má každá verze svou adresu, svůj obsah
v HTML a značky `hreflang`, které je propojují — takže se dá najít i polská
nebo ukrajinská verze.

Staré odkazy s `?lang=sk` fungují dál: stránka je sama přesměruje na
`sborviry.org/sk/`. Odkazy rozeslané dřív tedy nikam nespadnou.

Jazyk se vždy řídí adresou, ne nastavením prohlížeče — návštěvník i vyhledávač
tak na jedné adrese vidí vždy totéž. Volba z přepínače se ukládá do prohlížeče.

**Pozor na písmo u azbuky.** Nadpisový font Bricolage Grotesque azbuku neobsahuje,
proto se v ukrajinštině a ruštině nadpisy sázejí Interem — ten ji má. Řídí to
pravidlo v `style.css` u selektoru `html[lang="uk"]`. Kdybyste přidávali další
jazyk s azbukou, dopište jeho kód i tam. Maďarské „ő“ a „ű“ i švédské „å ä ö“
Bricolage Grotesque obsahuje (podsada latin-ext), takže tam nic dopisovat netřeba.

### Úprava textů

Všechny texty jsou v `assets/js/i18n.js` — jeden blok na jazyk, ve všech stejná
struktura a stejné pořadí klíčů. Chcete-li něco změnit, najděte klíč (např.
`home.hero.h1`) a upravte hodnotu v každém jazyce, který používáte.

Chybí-li klíč v některém jazyce, zobrazí se automaticky česká verze — web se
tedy nikdy nerozbije, jen bude na daném místě česky.

### Přidání dalšího jazyka

1. V `assets/js/i18n.js` zkopírujte celý blok `en: { … }`, přejmenujte ho
   (např. `it`) a přeložte hodnoty.
2. V `assets/js/site.js` doplňte kód do pole `LANGS` a do `DATE_LOCALE`.
3. V `assets/js/content.js` doplňte nový jazyk do polí `times`, `gallery` a `news`.
4. V `nastroje/generator.mjs` doplňte kód do pole `JAZYKY` a do `LOCALE`.
   Pak spusťte `node nastroje/generator.mjs` — vznikne nová složka `it/`
   se všemi stránkami a jazyk se sám přidá do `sitemap.xml`.

Než web zveřejníte, projděte si v novém jazyce všechny stránky — nejrychleji
přes odkazy `sborviry.org/xx/`, `sborviry.org/xx/o-nas` a tak dál. Hlídejte
hlavně délku položek v menu: když se nevejdou, hlavička se sama přepne na
tlačítko s nabídkou. Nejdelší menu má zatím španělština (79 znaků) — pokud se
pod ní vejdete, je to v pořádku.

---

## 10. Co ještě doplnit (TODO)

- [ ] Den a čas modlitebního setkání (`content.js` → `times`, poslední položka)
- [ ] Odkaz na záznam prorockého večeru na YouTube — vložte URL do pole `link`
      u té aktuality; karta se tím stane prokliknutelnou

- [x] ~~Originální soubor loga~~ — hotovo
- [x] ~~Souřadnice mapy~~ — hotovo (podle firemního profilu na Google Maps)
- [x] ~~Časy nedělní bohoslužby a evangelizace~~ — hotovo
- [x] ~~Bankovní účet pro dary~~ — hotovo (Fio 2601434065/2010)
- [x] ~~ID YouTube kanálu~~ — hotovo (`UCjtt9_ez5UzekptGN_88xhA`)
- [x] ~~Historie sboru, vize a medailonek pastora~~ — hotovo
- [x] ~~Fotografie~~ — hotovo (18 fotek včetně dvanáctidílné galerie)
- [x] ~~Plakát festivalu ROZSVIŤ TMU~~ — hotovo (aktualita ze 7. 5. 2026;
      až bude znám termín dalšího ročníku, stačí u aktuality přepsat text)
- [x] ~~Domácí skupinky~~ — hotovo (čtvrtek 18:00, adresy domácností se
      záměrně nezveřejňují; zájemce se ozve e-mailem nebo přes Facebook)
- [x] ~~Návštěva prorocké služby 13. 10. 2025~~ — hotovo (aktualita ve všech
      deseti jazycích; příjmení hostů jsou kvůli GDPR zkrácená na iniciálu
      a kontaktní údaje se nezveřejňují; fotka `prorocka-sluzba-2025.jpg`
      — zbývá jen odkaz na záznam výše)
- [x] ~~Seminář o Božím uzdravení 22.–23. 5. 2026~~ — hotovo (aktualita ve všech
      deseti jazycích, fotka `tomasz-kmiecik.jpg`, odkaz na playlist na YouTube;
      playlist „Škola víry: Boží uzdravení a moc“ je veřejný)

---

## 11. Struktura souborů

Jde o názvy souborů na disku. Na webu se stránky ukazují bez koncovky —
`o-nas.html` je na adrese `sborviry.org/o-nas` (viz *Adresy bez koncovky `.html`*).

Hvězdičkou jsou označené soubory, které **vyrábí generátor** — ručně se do nich
nezasahuje (viz [kapitola 3](#3-generování-stránek)).

```
_sablony/                     ZDROJ — kostry stránek, tady se upravuje rozložení
  index.html                    Úvodní stránka
  o-nas.html                    O nás — historie, vize, čemu věříme
  jsem-tu-poprve.html           Pro nové návštěvníky + FAQ
  kazani.html                   Kázání a YouTube archiv
  aktuality.html                Aktuality
  co-u-nas-najdete.html         Bohoslužby, chvály, evangelizace, modlitba
  podporte-nas.html             Dary
  kontakt.html                  Kontakt, formulář, mapa
  ochrana-osobnich-udaju.html   Zásady zpracování údajů
  404.html                      Chybová stránka

nastroje/generator.mjs        Generátor stránek — spouští se ručně
nastroje/ikony.mjs            Výroba ikon ze symbolu (viz kapitola 5)
nastroje/indexnow.mjs         Oznámení změn vyhledávačům (viz kapitola 3)
18ae…150b.txt                 Klíč, kterým se web prokáže u IndexNow

*.html                      * Hotová česká verze (stejné názvy jako v _sablony/)
sk/  pl/  uk/  ru/  de/     * Hotové jazykové verze
en/  es/  sv/  hu/          *
sitemap.xml                 * Mapa webu (8 stránek × 10 jazyků = 80 adres)
llms.txt                    * Rozcestník pro nástroje s umělou inteligencí
favicon.ico                 * Ikona pro nástroje, které se ptají napevno (kap. 5)

robots.txt                    Pravidla pro roboty vyhledávačů
CNAME                         Doména pro GitHub Pages
assets/css/style.css          Vzhled
assets/js/i18n.js             Texty v deseti jazycích
assets/js/content.js          Kontakty, časy, aktuality, dary
assets/js/site.js             Logika webu
assets/js/start.js            Úklid adresy — běží jako první v hlavičce
assets/img/                   Logo, favicon, fotografie
```

---

## 12. Bezpečnost

Statický web nemá server, databázi ani administraci, takže odpadá většina
běžných útoků — není kam se přihlásit ani co podstrčit. Co je přesto zařízené:

| Opatření | Kde |
|---|---|
| Pravidla, odkud smí stránka načítat obsah (CSP) | hlavička každé stránky |
| Zákaz vkládaného kódu (`script-src 'self'`) | tamtéž — generátor to i kontroluje |
| Cizí web se dozví jen doménu, ne konkrétní stránku | `meta name="referrer"` |
| Odkazy ven nemají přístup k naší stránce | `rel="noopener"` |
| Formulář nikam neukládá data — otevře e-mail | `assets/js/site.js` |
| Video se načte z YouTube až po kliknutí | tamtéž |

**Přidáváte-li na web cizí službu** (jiné mapy, formulářový server, měření
návštěvnosti), musíte její adresu dopsat do CSP v hlavičce stránek — jinak ji
prohlížeč zablokuje a služba se prostě nezobrazí. Chyba se vypíše v konzoli
prohlížeče (F12).

### Hlavičky nastavené na Cloudflare

Některé ochrany se z HTML nastavit nedají — musí přijít jako hlavička od
serveru. GitHub Pages to neumí, Cloudflare ano a zdarma. **Nastaveno v srpnu
2026**, web je posílá u každé stránky i u souborů:

| Hlavička | Hodnota | Proti čemu |
|---|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | vynucení HTTPS i při prvním příchodu |
| `X-Content-Type-Options` | `nosniff` | podvržení typu souboru |
| `X-Frame-Options` | `SAMEORIGIN` | vložení webu do cizí stránky a vydávání za svůj |
| `Content-Security-Policy` | `frame-ancestors 'self'` | totéž pro novější prohlížeče |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | přístup ke kameře, mikrofonu a poloze |

Kde se to spravuje:

- **HSTS a nosniff** → *SSL/TLS → Edge Certificates → HTTP Strict Transport
  Security*. Volba *Preload* je schválně vypnutá: zapsala by doménu přímo do
  prohlížečů a zpět se to bere jen žádostí s několikaměsíční prodlevou.
- **Zbylé tři** → *Rules → Overview → Create rule → Response Header Transform
  Rule*, pravidlo se jmenuje „Bezpečnostní hlavičky" a platí na všechny
  požadavky.

> **Pozor při stěhování webu.** Kvůli HSTS si prohlížeče rok pamatují, že na
> `sborviry.org` mají chodit jen po HTTPS. Nový hosting proto musí mít HTTPS
> od prvního dne. U GitHub Pages i Cloudflare je to samozřejmost, riziko by
> nastalo jen u hostingu bez certifikátu.

Ověřit, že hlavičky opravdu chodí, jde příkazem:

```
curl -sI https://sborviry.org/ | findstr /I "strict-transport x-frame x-content permissions content-security"
```

### Účty

Největší riziko není v kódu, ale v přístupech: kdo se dostane do repozitáře na
GitHubu nebo na účet Cloudflare, přepíše web nebo přesměruje doménu. Mějte
u obou zapnuté **dvoufázové ověření** a hlídejte, kdo další má právo zápisu.
