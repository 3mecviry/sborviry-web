/* ============================================================================
   SBOR VÍRY — OZNÁMENÍ ZMĚN VYHLEDÁVAČŮM (IndexNow)
   ----------------------------------------------------------------------------
   K ČEMU TO JE
   Vyhledávač se běžně o změně dozví, až se na web někdy zastaví jeho robot —
   u menšího webu to bývá týdny. IndexNow to obrací: web sám ohlásí „tady se
   něco změnilo“ a robot přijde řádově během hodin.

   Oznámení se posílá na jedno místo (api.indexnow.org) a to si ho mezi sebou
   rozešlou všichni zapojení — Bing, Seznam, Yandex a další. Google zapojený
   není, ten si chodí sám podle sitemap.xml.

   JAK SE POUŽÍVÁ
       node nastroje/indexnow.mjs           ohlásí všechny adresy ze sitemap.xml
       node nastroje/indexnow.mjs /kazani   ohlásí jen vyjmenované adresy

   Spouští se AŽ PO nahrání na GitHub — vyhledávač si stránku vzápětí přijde
   přečíst, takže na webu už musí být nová verze. Automatika s videem si to
   volá sama (viz .github/workflows/nejnovejsi-video.yml).

   JAK SE OVĚŘUJE VLASTNICTVÍ
   V kořeni webu leží soubor pojmenovaný podle klíče (KLIC + „.txt“), který
   obsahuje ten samý klíč. Vyhledávač si ho stáhne a porovná — tím ví, že
   oznámení posílá opravdu správce webu. Klíč není tajný, je veřejně čitelný;
   smysl má jen to, aby ho nemohl uhodnout někdo cizí.

   ZMĚNA KLÍČE
   Vygenerujte nový (32 znaků, číslice a písmena a–f), přepište KLIC níž
   a soubor v kořeni přejmenujte i s obsahem. Starý soubor smažte.
   ========================================================================== */

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const KOREN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOMENA = 'sborviry.org';
const KLIC = '18ae3ce4378bd2a331aa24e11327150b';
const SLUZBA = 'https://api.indexnow.org/indexnow';

/** Adresy ze sitemap.xml — tedy přesně ty, které mají být ve vyhledávání. */
async function adresyZeSitemapy() {
  const soubor = path.join(KOREN, 'sitemap.xml');
  if (!existsSync(soubor)) throw new Error('chybí sitemap.xml — spusťte nejdřív generátor');
  const xml = await readFile(soubor, 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  // Klíč musí ležet v kořeni jako soubor, jinak oznámení nikdo nepřijme.
  const klicovySoubor = path.join(KOREN, KLIC + '.txt');
  if (!existsSync(klicovySoubor)) {
    console.error('Chybí ' + KLIC + '.txt v kořeni webu — bez něj vyhledávač oznámení odmítne.');
    process.exit(1);
  }
  const obsah = (await readFile(klicovySoubor, 'utf8')).trim();
  if (obsah !== KLIC) {
    console.error('Soubor ' + KLIC + '.txt neobsahuje tentýž klíč — opravte jedno, nebo druhé.');
    process.exit(1);
  }

  // Buď adresy z příkazové řádky, nebo všechny ze sitemapy.
  const zadane = process.argv.slice(2).filter(Boolean);
  const adresy = zadane.length
    ? zadane.map((a) => (a.startsWith('http') ? a : 'https://' + DOMENA + (a.startsWith('/') ? a : '/' + a)))
    : await adresyZeSitemapy();

  if (!adresy.length) { console.error('Není co ohlásit.'); process.exit(1); }
  const cizi = adresy.filter((a) => !a.startsWith('https://' + DOMENA + '/'));
  if (cizi.length) { console.error('Adresa mimo web: ' + cizi[0]); process.exit(1); }

  const pocetAdres = (n) => n + (n === 1 ? ' adresu' : (n < 5 ? ' adresy' : ' adres'));
  console.log('Ohlašuji ' + pocetAdres(adresy.length) + '…');

  const odpoved = await fetch(SLUZBA, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: DOMENA,
      key: KLIC,
      keyLocation: 'https://' + DOMENA + '/' + KLIC + '.txt',
      urlList: adresy
    })
  });

  /* 200 = přijato, 202 = přijato, klíč se teprve ověřuje. Obojí je v pořádku.
     Vyhledávač si stránky přijde přečíst sám, obvykle do několika hodin. */
  if (odpoved.status === 200 || odpoved.status === 202) {
    console.log('Přijato (HTTP ' + odpoved.status + ').');
    console.log(odpoved.status === 202
      ? 'Klíč se ověřuje, oznámení je zařazené.'
      : 'Oznámení přijato a klíč ověřen.');
    return;
  }

  const text = (await odpoved.text()).slice(0, 300);
  const vysvetleni = {
    400: 'špatně sestavené oznámení',
    403: 'klíč neodpovídá souboru v kořeni webu',
    422: 'adresy nepatří k této doméně, nebo klíč nesedí',
    429: 'příliš mnoho oznámení za sebou — zkuste to za chvíli'
  }[odpoved.status] || 'neznámá odpověď';
  console.error('Nepřijato: HTTP ' + odpoved.status + ' — ' + vysvetleni);
  if (text.trim()) console.error(text);
  process.exit(1);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
