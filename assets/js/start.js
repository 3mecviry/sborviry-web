/* ============================================================================
   SBOR VÍRY — ÚKLID ADRESY
   ----------------------------------------------------------------------------
   Sociální sítě a reklamní systémy připojují k odkazu sledovací kódy
   (fbclid od Facebooku, igsh od Instagramu, utm_… z newsletterů), které pak
   straší v adresním řádku. Tenhle soubor je smaže hned na začátku načítání,
   takže návštěvník vidí jen sborviry.org a název stránky.

   Načítá se v <head> bez atributu defer — musí proběhnout dřív, než se
   stránka vykreslí, jinak by sledovací kód na okamžik probleskl v adrese.

   Nový sledovací kód stačí dopsat do seznamu `smeti` níž. Dřív byl tenhle
   úsek vepsaný přímo v každé stránce; jako samostatný soubor se udržuje na
   jednom místě a hlavně dovolí zakázat vkládaný kód v pravidlech
   Content-Security-Policy (viz hlavička stránek).
   ========================================================================== */
(function () {
  'use strict';
  try {
    var adresa = new URL(location.href);
    var parametry = adresa.searchParams;
    var zmeneno = false;
    var smeti = [
      'fbclid', 'igshid', 'igsh',                     // Facebook, Instagram
      'gclid', 'dclid', 'gbraid', 'wbraid', '_ga', '_gl',  // Google
      'msclkid',                                      // Microsoft / Bing
      'ttclid',                                       // TikTok
      'twclid', 'ref_src', 'ref_url',                 // X (Twitter)
      'li_fat_id',                                    // LinkedIn
      'yclid',                                        // Yandex
      'mc_cid', 'mc_eid',                             // Mailchimp
      'si'                                            // YouTube (sdílení)
    ];
    smeti.forEach(function (klic) {
      if (parametry.has(klic)) { parametry.delete(klic); zmeneno = true; }
    });
    Array.from(parametry.keys()).forEach(function (klic) {
      if (klic.indexOf('utm_') === 0) { parametry.delete(klic); zmeneno = true; }
    });
    // Adresy webu jedou bez koncovky .html (sborviry.org/kazani). Kdo přijde
    // po starém odkazu s .html, uvidí čistou adresu — stránka se přitom
    // znovu nenačítá. Mimo ostrou doménu (z disku, z lokálního serveru)
    // koncovka zůstává, tam ji prohlížeč potřebuje.
    var cesta = adresa.pathname;
    if (/(^|\.)sborviry\.org$/.test(location.hostname)) {
      var ciste = cesta.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
      if (ciste !== cesta) { cesta = ciste; zmeneno = true; }
    }
    if (zmeneno) {
      var zbytek = parametry.toString();
      history.replaceState(null, '', cesta + (zbytek ? '?' + zbytek : '') + adresa.hash);
    }
  } catch (e) { /* starý prohlížeč nebo otevřeno přes file:// — adresa zůstane beze změny */ }
})();
