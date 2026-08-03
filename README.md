# Sbor Víry — webové stránky

Statický web ve čtyřech jazycích (čeština, polština, angličtina, španělština).
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

**Až budete mít doménu** (např. `sborviry.cz`): v Settings → Pages zadejte doménu do pole
*Custom domain* a u registrátora domény nastavte `CNAME` záznam na `vase-jmeno.github.io`.

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

### Přidání nové aktuality

V `assets/js/content.js` najděte `news: [` a nahoru vložte nový blok:

```js
{
  date: '2026-09-15',
  image: 'assets/img/moje-fotka.jpg',   // nebo '' pro zástupný obrázek
  link:  'https://www.facebook.com/sborviry.org/',   // nebo '' bez odkazu
  tag:   { cs: 'Akce', pl: 'Wydarzenie', en: 'Event', es: 'Evento' },
  title: { cs: 'Nadpis',  pl: '…', en: '…', es: '…' },
  text:  { cs: 'Text…',   pl: '…', en: '…', es: '…' }
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
| `predsali.jpg` | Jsem tu poprvé — vedle popisu neděle | **na výšku** (ořezává se na 3 : 4) |
| `galerie-1.jpg` … `-12.jpg` | fotogalerie na úvodní stránce | první na šířku, ostatní čtvercový ořez |

Všechny tyto fotky jsou už **vložené a zmenšené** (dohromady zabírají 1,2 MB).
Chcete-li některou vyměnit, prostě přepište soubor stejného jména.

**Chybějící soubor web nerozbije** — místo fotky se zobrazí šrafovaná plocha
a úvodní obrazovka zůstane tmavá.

### Fotogalerie

V galerii je dvanáct fotek (`galerie-1.jpg` až `galerie-12.jpg`), první se zobrazí
větší. Seznam je v `content.js` → `gallery`; u každé fotky je i popisek ve čtyřech
jazycích, který čtou odečítače obrazovky a vyhledávače. Prázdný seznam znamená,
že se celá sekce vůbec nevykreslí.

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

## 5. YouTube — vložený přehrávač

Na úvodní stránce i na stránce Kázání se přehrává nejnovější video přímo z kanálu
[@sborviry](https://www.youtube.com/@sborviry). Je nastavené jeho ID
`UCjtt9_ez5UzekptGN_88xhA` (v `content.js` → `youtubeChannelId`).

Kdyby se ID kanálu někdy změnilo a pole vymazali, zobrazí se místo přehrávače
tlačítko odkazující na kanál — web se nerozbije.

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

Přepínač je vpravo v hlavičce. Volba se ukládá do prohlížeče a lze ji předat i odkazem:

```
index.html?lang=pl     index.html?lang=en     index.html?lang=es
```

Chcete-li přidat další jazyk, v `assets/js/i18n.js` zkopírujte celý blok `en: { … }`,
přejmenujte ho (např. `de`), přeložte hodnoty a v `assets/js/site.js` doplňte kód
do řádku `const LANGS = ['cs', 'pl', 'en', 'es'];`.

---

## 9. Co ještě doplnit (TODO)

- [ ] Den a čas modlitebního setkání (`content.js` → `times`, třetí položka)

- [x] ~~Originální soubor loga~~ — hotovo
- [x] ~~Souřadnice mapy~~ — hotovo (podle firemního profilu na Google Maps)
- [x] ~~Časy nedělní bohoslužby a evangelizace~~ — hotovo
- [x] ~~Bankovní účet pro dary~~ — hotovo (Fio 2601434065/2010)
- [x] ~~ID YouTube kanálu~~ — hotovo (`UCjtt9_ez5UzekptGN_88xhA`)
- [x] ~~Historie sboru, vize a medailonek pastora~~ — hotovo
- [x] ~~Fotografie~~ — hotovo (17 fotek včetně dvanáctidílné galerie)

---

## 10. Struktura souborů

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
assets/css/style.css          Vzhled
assets/js/i18n.js             Texty ve 4 jazycích
assets/js/content.js          Kontakty, časy, aktuality, dary
assets/js/site.js             Logika webu
assets/img/                   Logo, favicon, fotografie
```
