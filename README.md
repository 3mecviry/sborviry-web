# Sbor Víry — webové stránky

Statický web v **deseti jazycích** (čeština, slovenština, polština, ukrajinština,
ruština, němčina, angličtina, španělština, švédština, maďarština).
Žádná databáze, žádný build, žádné placené služby — stačí soubory nahrát na hosting.

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
| Rozložení stránky, pořadí sekcí | příslušný `*.html` soubor |

Soubor `assets/js/site.js` obsahuje logiku (přepínání jazyků, menu, mapa).
Ten měnit nemusíte.

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

**Přidáváte-li novou stránku,** odkazujte na ni bez koncovky a nezapomeňte ji
dopsat do `sitemap.xml` — také bez `.html`.

### Úklid adresy ze sociálních sítí

Když někdo přijde z Facebooku nebo Instagramu, odkaz s sebou nese sledovací kód
(`?fbclid=IwAR3xK9mQ2vL8pN…`, `?igsh=…`). V adresním řádku pak místo
`sborviry.org/aktuality` visí dlouhý chuchvalec, který návštěvníkovi nic neříká.

V `<head>` každé stránky je proto krátký úsek označený komentářem **ÚKLID ADRESY**.
Smaže tyhle kódy hned na začátku načítání, ještě než se stránka vykreslí.
Odstraňuje značky Facebooku, Instagramu, Googlu, Microsoftu, TikToku, X, LinkedInu,
Yandexu, Mailchimpu, YouTube a všechny parametry začínající `utm_`.

**Vlastní parametr `?lang=` zůstává nedotčený** — na něm stojí přepínání jazyků.
Maže se jen to, co je vyjmenované v seznamu `smeti`; cokoli neznámého zůstává.

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

## 3. Fotografie

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

## 4. Logo

Web používá **vaše originální logo** (`logo_bez_pozadi.png`), zpracované do těchto variant:

| Soubor | K čemu slouží |
|---|---|
| `logo.png` | hlavička webu — originál oříznutý, průhledné pozadí |
| `logo-light.png` | patička na tmavém pozadí — nápis je bílý, srdce a vlna světlejší |
| `icon.png` | samotné srdce s křížem, průhledné pozadí (pro sociální sítě apod.) |
| `favicon.png` | ikona v záložce prohlížeče |
| `apple-touch-icon.png` | ikona po přidání webu na plochu telefonu |

Máte-li logo i ve vektoru (`.svg`, `.ai`, `.eps`), vyplatí se ho použít: zůstane ostré
na jakémkoli displeji. Uložte ho jako `assets/img/logo.svg` a v `assets/js/site.js`
změňte `logo.png` na `logo.svg` (řádek s hlavičkou).

---

## 5. YouTube — video na webu

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

## 6. Telefon a kontaktní formulář

Telefonní číslo se na webu **záměrně neuvádí** — jako kontakt slouží e-mail a zpráva
na Facebooku (obojí je na stránce Kontakt). Kdybyste číslo někdy chtěli zveřejnit,
stačí ho vepsat do `content.js` → `contact.phone` a řádek se sám objeví na všech
stránkách i ve strukturovaných datech. Prázdná hodnota se nikde nezobrazuje.

### Kontaktní formulář

Ve výchozím nastavení formulář otevře e-mailový program návštěvníka s předvyplněnou
zprávou. Funguje všude a nevyžaduje žádnou službu.

Chcete-li zprávy dostávat přímo do e-mailu bez otevírání klienta:

1. Zaregistrujte se zdarma na [formspree.io](https://formspree.io) a vytvořte formulář.
2. V `kontakt.html` upravte řádek `<form id="contact-form" class="mt-2">` na:

```html
<form id="contact-form" class="mt-2" data-mode="endpoint"
      action="https://formspree.io/f/VAS_KOD" method="POST">
```

---

## 7. Odlišení od podobných názvů

V Třinci působí i **Církev Víry**, která patří do jiné skupiny. Aby nedocházelo k záměně,
web dělá tři věci:

1. **Název stránek** je všude `Sbor Víry — Třinec` (v titulku záložky i při sdílení odkazu).
2. **V hlavičce** je vedle loga štítek „Třinec“.
3. **Strukturovaná data Schema.org** (typ `Church`) se vkládají automaticky do každé
   stránky. Obsahují IČO 26596865, přesnou adresu, souřadnice a odkazy na oficiální
   YouTube, Facebook a Instagram. Podle nich Google i AI asistenti spolehlivě poznají,
   že jde o jinou organizaci než podobně znějící sbory.

Generuje je funkce `renderSchema()` v `assets/js/site.js` — čerpá z `content.js`,
takže se aktualizují samy, jakmile doplníte telefon nebo upravíte kontakty.
Správnost si můžete kdykoli ověřit na [validator.schema.org](https://validator.schema.org)
(až bude web nasazený online).

Web nikde konkurenční sbor nezmiňuje — odlišení stojí čistě na vlastní identitě.

---

## 8. Jazyky

Web je v **deseti jazycích**. Přepínač je vpravo v hlavičce; volba se ukládá do
prohlížeče a lze ji předat i odkazem:

| Kód | Jazyk | Odkaz |
|---|---|---|
| `cs` | čeština (výchozí) | `sborviry.org/` |
| `sk` | slovenština | `sborviry.org/?lang=sk` |
| `pl` | polština | `sborviry.org/?lang=pl` |
| `uk` | ukrajinština | `sborviry.org/?lang=uk` |
| `ru` | ruština | `sborviry.org/?lang=ru` |
| `de` | němčina | `sborviry.org/?lang=de` |
| `en` | angličtina | `sborviry.org/?lang=en` |
| `es` | španělština | `sborviry.org/?lang=es` |
| `sv` | švédština | `sborviry.org/?lang=sv` |
| `hu` | maďarština | `sborviry.org/?lang=hu` |

Stejně to funguje na kterékoli stránce — `sborviry.org/o-nas?lang=pl`.

Při první návštěvě se jazyk vybere podle nastavení prohlížeče (prochází se celý
seznam preferovaných jazyků, ne jen první). Běloruština se mapuje na ukrajinštinu.

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

Než web zveřejníte, projděte si v novém jazyce všechny stránky — nejrychleji
přes odkazy `sborviry.org/?lang=xx`, `sborviry.org/o-nas?lang=xx` a tak dál. Hlídejte
hlavně délku položek v menu: když se nevejdou, hlavička se sama přepne na
tlačítko s nabídkou. Nejdelší menu má zatím španělština (79 znaků) — pokud se
pod ní vejdete, je to v pořádku.

---

## 9. Co ještě doplnit (TODO)

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

## 10. Struktura souborů

Jde o názvy souborů na disku. Na webu se stránky ukazují bez koncovky —
`o-nas.html` je na adrese `sborviry.org/o-nas` (viz *Adresy bez koncovky `.html`*).

```
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
sitemap.xml                   Mapa webu pro vyhledávače (8 stránek × 11 jazykových variant)
robots.txt                    Pravidla pro roboty vyhledávačů
assets/css/style.css          Vzhled
assets/js/i18n.js             Texty ve 4 jazycích
assets/js/content.js          Kontakty, časy, aktuality, dary
assets/js/site.js             Logika webu
assets/img/                   Logo, favicon, fotografie
```
