# Kontrola jazykových mutací — úvodní sekce (hero)

**Datum:** 6. 8. 2026 (aktualizace: gramatická oprava zapsána do `i18n.js`)
**Předmět:** klíče `home.hero.*` a `cta.*` v `assets/js/i18n.js`, 10 jazyků
**Stav:** 1 gramatická chyba → **opravena přímo v souboru**, 4 doslovné překlady
čekají na posouzení rodilým mluvčím, zbytek v pořádku

---

## Jak jsem to kontroloval

Prošel jsem hero texty ve všech deseti jazycích a porovnal je s českým originálem,
ze kterého vycházejí. Hledal jsem tři věci: skutečné gramatické chyby, doslovné
překlady, které v cílovém jazyce nefungují, a nekonzistence v tónu.

**Čemu tenhle dokument nesmí být:** náhradou za rodilého mluvčího. Nejsem rodilý
mluvčí ani v jednom z těch jazyků kromě češtiny. U bodu **A** jde o pravidlo shody,
které se dá ověřit v mluvnici a jsem si jím jistý. U bodů **B** a **C** jde o cit
pro jazyk — tam ber moje formulace jako **návrh k posouzení**, ne jako opravu.

---

## Souhrn

| Jazyk | Gramatika | Přirozenost | Pozn. |
|---|---|---|---|
| Čeština `cs` | ✅ | ✅ | zdrojový text |
| Slovenština `sk` | ✅ | ✅ | |
| Polština `pl` | ✅ | ⚠️ slovosled | nízká priorita |
| Ukrajinština `uk` | ✅ | ⚠️ doslovný překlad | |
| Ruština `ru` | ✅ | ⚠️ doslovný překlad | |
| Němčina `de` | ✅ | ✅ | bez připomínek |
| Angličtina `en` | ✅ | ⚠️ doslovný překlad | |
| Španělština `es` | ✅ | ⚠️ doslovný překlad | |
| Švédština `sv` | ✅ | ✅ | bez připomínek |
| Maďarština `hu` | ✅ *(byla chyba shody)* | ✅ | **opraveno v `i18n.js`** |

---

## A. Gramatická chyba — maďarština ✅ OPRAVENO v `i18n.js`

**Soubor:** `assets/js/i18n.js`, **řádek 3817**

```js
// stav před opravou:
lead: 'Hétköznapi emberek vagyunk, akik megtapasztalták, hogy Isten megváltoztatja az életet. …'
```

Věta začíná v 1. osobě množného čísla — *„vagyunk"* (jsme). Maďarština v takovém
případě vyžaduje, aby i sloveso ve vedlejší větě uvozené *„akik"* stálo v 1. osobě
množného čísla. Tvar **`megtapasztalták`** je 3. osoba množného čísla, takže věta
říká zhruba *„jsme obyčejní lidé, kteří (ti druzí) zažili…"* — mluvčí se z ní vyřazuje.

Správný tvar je **`megtapasztaltuk`**.

**Opravené znění — už reálně v `i18n.js`, řádek 3817:**

```js
lead: 'Hétköznapi emberek vagyunk, akik megtapasztaltuk, hogy Isten megváltoztatja az életet. Minden vasárnap összejövünk Třinecben, és szeretettel várunk téged is.',
```

Zbytek maďarské věty je v pořádku, včetně `Třinecben` (správná koncovka podle
samohláskové harmonie) i `Gyere úgy, ahogy vagy`. V souboru je tohle jediný
výskyt slovesného tvaru `megtapasztal-`, takže oprava nezanechala nekonzistenci
jinde na webu.

---

## B. Doslovné překlady jedné české vazby

Česká věta *„lidé, kteří **zažili, že** Bůh mění životy"* je správně česky. Do čtyř
jazyků se ale přeložila slovo od slova do vazby, která v nich nefunguje —
sloveso *zažít / prožít* v nich nemůže mít vedlejší větu s *„že"*.

Není to gramatická chyba, věta je srozumitelná. Ale zní jako překlad, ne jako
text psaný v tom jazyce.

### Ukrajinština — řádek 1333

```
teď:    Ми звичайні люди, які пережили, що Бог змінює життя.
návrh:  Ми звичайні люди, які на власному досвіді переконалися, що Бог змінює життя.
```

### Ruština — řádek 1747

```
teď:    Мы обычные люди, которые пережили, что Бог меняет жизни.
návrh:  Мы обычные люди, которые на собственном опыте узнали, что Бог меняет жизни.
```

### Angličtina — řádek 2575

```
teď:    We are ordinary people who have experienced that God changes lives.
návrh:  We are ordinary people who have seen God change lives.
```

### Španělština — řádek 2989

```
teď:    Somos personas corrientes que hemos experimentado que Dios cambia vidas.
návrh:  Somos personas corrientes que hemos comprobado que Dios cambia vidas.
```

**Pozor — u těchto čtyř jazyků stejnou vazbu NEMĚŇ:**

- **Němčina** (2161): `die erlebt haben, dass Gott Leben verändert` — v němčině je
  vazba *erleben, dass* zcela běžná. ✅
- **Švédština** (3403): `som har upplevt att Gud förändrar liv` — totéž,
  *uppleva att* je idiomatické. ✅
- **Slovenština** (505) a **polština** (919) — slovanské jazyky vazbu snesou. ✅

---

## C. Drobnosti, které nejsou chyby

Tyhle body měň, jen pokud ti na nich záleží. Nic z toho není špatně.

**Polština, řádek 919** — `chętnie zobaczymy wśród nas również Ciebie`
Slovosled je knižní až kostrbatý. Přirozeněji: `chętnie powitamy Cię wśród nas`
nebo `z radością zobaczymy Cię wśród nas`.

**Angličtina, eyebrow** — `A Christian church in Třinec`
Ostatní jazyky člen nemají a na webu se text sází verzálkami, takže
`A CHRISTIAN CHURCH IN TŘINEC` působí trochu neohrabaně. Zvaž
`Christian church in Třinec`.

**Angličtina, h1** — `Come exactly as you are`
Ustálená fráze v angličtině je `Come as you are` (mimo jiné je to název známé
písně, takže to lidé znají). Slovo `exactly` je navíc a trochu tu známost tlumí.

**Čeština, řádek 91** — `rádi mezi sebou uvidíme i tebe`
Správně, ale chladněji, než by šlo. Pro sborový web by možná lépe sedělo
`rádi mezi sebou přivítáme i tebe`. Věc vkusu, ne jazyka.

---

## D. Co je správně a nemá se to „opravovat"

Při procházení jsem narazil na několik míst, která vypadají jako chyba, ale nejsou.
Poznamenávám je, aby je někdo omylem nespravil.

- **`Vasárnap 11.00`** (maďarsky) a **`Söndag kl. 11.00`** (švédsky) — tečka místo
  dvojtečky je v obou jazycích správný zápis času. Švédské `kl.` tam patří taky.
- **`Trzyniec` / `w Trzyńcu`** (polsky) — Třinec má v polštině vlastní zavedený
  název, není to překlep.
- **`Třinecben`** (maďarsky) — koncovka `-ben` (ne `-ban`) je správně, řídí se
  samohláskovou harmonií.
- **`kázne`** (slovensky) — správný tvar množného čísla od `kázeň`.
- **Velké `Ciebie`** (polsky) — v polštině je zdvořilostní psaní zájmen velkým
  písmenem při přímém oslovení běžná konvence, ne chyba.

---

## E. Délka textu na tlačítkách

Souvisí to s `i18n.js`, tak to přikládám sem. Změřeno, ne odhadnuto: jde o to,
od jaké šířky displeje zůstanou obě tlačítka v hero sekci vedle sebe.
Cílová hranice je **360 px** (nejužší dnes běžný Android).

| Jazyk | Potřebuje | Stav |
|---|---|---|
| čeština, slovenština, ukrajinština, angličtina, švédština | 301 px | ✅ |
| španělština | 308 px | ✅ |
| polština | 326 px | ✅ |
| ruština | 328 px | ✅ |
| **maďarština** | **363 px** | ⚠️ přesně na hraně |
| **němčina** | **364 px** | ⚠️ přesně na hraně |

„Na hraně" je horší stav než „mimo" — na jednom telefonu se tlačítka vejdou vedle
sebe, na druhém ne, podle toho, jak přesně vysází písmo. Doporučuji zkrátit:

```js
// hu — druhé tlačítko (cta.watch), řádek ~3804
'Igehirdetések megtekintése'  →  'Igehirdetések'        // 363 px → 284 px

// de — první tlačítko (cta.first), řádek ~2147
'Ich bin zum ersten Mal hier'  →  'Zum ersten Mal hier'  // 364 px → 324 px
```

U maďarštiny jsem zvažoval i `Prédikációk` (281 px), ale `igehirdetés` je slovo,
které používají evangelikální a letniční sbory; `prédikáció` má katolický nádech.
Proto `Igehirdetések`.

**Když to nezměníš, nic se nerozbije** — na nejužších telefonech se tlačítka zalomí
pod sebe, což je běžné a funkční chování.

---

## F. Jedna věc, kterou jsem přidal já

Do návrhu hero sekce jsem zaváděl pevné zalomení nadpisu na dva řádky
(`Přijď takový,` / `jaký jsi`). U angličtiny, španělštiny a švédštiny originál
čárku nemá, takže jsem místo zlomu volil podle významu — a **u španělštiny jsem
přitom přidal čárku**, která v původním textu není:

```
originál v i18n.js:  Ven tal y como eres
v mém návrhu:        Ven,<br>tal y como eres   →  Ven, / tal y como eres
```

`Ven, tal y como eres` je španělsky přijatelné, ale ustálená podoba fráze je bez
čárky. Než to půjde do kódu, ať to posoudí někdo, kdo španělsky mluví — případně
zlom posunout jinam a čárku vypustit.

---

## Doporučené pořadí

1. ~~**Maďarština, řádek 3817** — `megtapasztalták` → `megtapasztaltuk`.~~
   **Hotovo — opraveno přímo v `i18n.js` dne 6. 8. 2026.**
2. **Čtyři doslovné překlady** (bod B) — zatím ponechány beze změny.
   Nechat posoudit rodilými mluvčími, pak přepsat.
3. **Zkrácení dvou tlačítek** (bod E) — až se rozhodneš, jestli chceš mít
   tlačítka vedle sebe i na nejužších Androidech.
4. **Drobnosti** (bod C) — kdykoli, nebo vůbec.
