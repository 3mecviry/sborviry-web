/* ============================================================================
   SBOR VÍRY — PŘEKLADY VŠECH TEXTŮ NA WEBU
   ----------------------------------------------------------------------------
   Struktura je ve všech čtyřech jazycích STEJNÁ.
   Chcete-li změnit text, najděte jeho klíč (např. home.hero.h1)
   a upravte hodnotu ve všech jazycích, které používáte.

   cs = čeština · pl = polština · en = angličtina · es = španělština
   Chybí-li klíč v některém jazyce, použije se automaticky česká verze.
   ========================================================================== */

const I18N = {

/* ############################  ČEŠTINA  ################################## */
cs: {
  langName: 'Čeština',
  meta: {
    home:       { title: 'Sbor Víry — Třinec | křesťanský sbor',            desc: 'Sbor Víry, z. s. — křesťanský sbor v Třinci. Bohoslužby každou neděli na adrese Hraniční 213. Přijď takový, jaký jsi.' },
    about:      { title: 'O nás | Sbor Víry — Třinec',                      desc: 'Kdo jsme, čemu věříme a jak sbor vznikl. Sbor Víry, z. s., Hraniční 213, Třinec.' },
    first:      { title: 'Jsem tu poprvé | Sbor Víry — Třinec',             desc: 'Co vás čeká, když k nám přijdete poprvé. Praktické odpovědi na běžné otázky.' },
    sermons:    { title: 'Kázání a záznamy | Sbor Víry — Třinec',           desc: 'Záznamy kázání a konferencí na našem YouTube kanálu.' },
    news:       { title: 'Aktuality | Sbor Víry — Třinec',                  desc: 'Novinky, akce a oznámení ze života sboru.' },
    ministries: { title: 'Co u nás najdete | Sbor Víry — Třinec',           desc: 'Nedělní bohoslužby, chvály, evangelizace v centru Třince a modlitba.' },
    give:       { title: 'Podpořte nás | Sbor Víry — Třinec',               desc: 'Jak můžete podpořit službu sboru dobrovolným darem.' },
    contact:    { title: 'Kontakt | Sbor Víry — Třinec',                    desc: 'Hraniční 213, 739 61 Třinec. Napište nám nebo se stavte.' },
    notfound:   { title: 'Stránka nenalezena | Sbor Víry — Třinec',         desc: '' }
  },
  ui: {
    skip: 'Přejít na hlavní obsah',
    menu: 'Menu',
    language: 'Jazyk',
    photoPlaceholder: 'Místo pro fotografii',
    loading: 'Načítání…'
  },
  nav: {
    home: 'Domů', about: 'O nás', first: 'Jsem tu poprvé', sermons: 'Kázání',
    news: 'Aktuality', ministries: 'Co u nás najdete', give: 'Podpořte nás', contact: 'Kontakt'
  },
  cta: {
    first: 'Jsem tu poprvé', watch: 'Sledovat kázání', contact: 'Napište nám',
    more: 'Zjistit více', allNews: 'Všechny aktuality', youtube: 'Otevřít YouTube kanál',
    directions: 'Zobrazit trasu', join: 'Přijďte mezi nás', support: 'Podpořit sbor'
  },

  home: {
    hero: {
      eyebrow: 'Křesťanský sbor v Třinci',
      h1: 'Přijď takový, jaký jsi',
      lead: 'Jsme obyčejní lidé, kteří zažili, že Bůh mění životy. Scházíme se v Třinci každou neděli a rádi mezi sebou uvidíme i tebe.',
      m1: 'Bohoslužba', m2: 'Kde se scházíme', m3: 'Sledujte online'
    },
    welcome: {
      eyebrow: 'Vítejte',
      h2: 'Nezáleží na tom, odkud přicházíte',
      p: 'Nezáleží na tom, kolik vám je let, čemu dnes věříte, jak se oblékáte ani co máte za sebou. U nás máte své místo — a nikdo od vás nebude nic vyžadovat.',
      c1t: 'Nedělní bohoslužba',   c1d: 'V 11:00 začínáme společnými chválami, pokračujeme vyučováním z Bible a modlitbou. Budova je otevřená už od 10:30.',
      c2t: 'Evangelizace ve městě', c2d: 'Každé pondělí odpoledne stojíme na náměstí T. G. Masaryka a sdílíme evangelium s lidmi v Třinci.',
      c3t: 'Modlitba',             c3d: 'Scházíme se také k modlitbám — za sbor, za konkrétní lidi i za naše město.'
    },
    times: {
      eyebrow: 'Kdy a kde',
      h2: 'Setkáváme se pravidelně',
      p: 'Hlavní setkání celého sboru je v neděli dopoledne. Během týdne se scházíme k modlitbám a vycházíme s evangeliem do centra města.',
      note: 'Budova je otevřená od 10:30. Časy se mohou u svátků a zvláštních akcí měnit — nejaktuálnější informace najdete vždy na našem Facebooku.'
    },
    watch: {
      eyebrow: 'Online',
      h2: 'Kázání a záznamy z konferencí',
      p: 'Už řadu let systematicky zveřejňujeme záznamy kázání a konferencí na svém YouTube kanálu. Nestihli jste neděli? Můžete si ji pustit kdykoli.',
      fallback: 'Podívejte se na náš kanál a přehrajte si nejnovější kázání.'
    },
    quote: {
      text: 'Církev není chrám ani zkostnatělé obřady, ale především Boží rodina. Ježíš netvořil organizaci — dal nám možnost osobního setkání s Bohem Otcem.',
      cite: 'Petr Lysek, pastor sboru'
    },
    values: {
      eyebrow: 'Na čem stavíme',
      h2: 'Čtyři věci, které bereme vážně',
      v1t: 'Bible',      v1d: 'Vyučujeme z Písma srozumitelně a bez zbytečných náboženských frází.',
      v2t: 'Modlitba',   v2d: 'Počítáme s tím, že Bůh slyší a jedná. Modlíme se za lidi i za naše město.',
      v3t: 'Rodina',     v3d: 'Sbor není budova ani program. Jsou to konkrétní lidé, kteří o sebe stojí.',
      v4t: 'Otevřenost', v4d: 'Dveře jsou otevřené každému. Otázky a pochybnosti u nás nejsou problém.'
    },
    news: {
      eyebrow: 'Aktuality',
      h2: 'Co se u nás děje',
      p: 'Krátké zprávy o tom, co právě prožíváme a co připravujeme.'
    },
    cta: {
      h2: 'Uvidíme se v neděli?',
      p: 'Nemusíte se hlásit dopředu, nemusíte nic přinášet a nemusíte nic vědět. Stačí přijít.'
    }
  },

  about: {
    hero: { eyebrow: 'O nás', h1: 'Sbor, který stojí na lidech', p: 'Jsme společenství křesťanů v Třinci. Věříme, že křesťanství není soubor pravidel, ale živý vztah, který proměňuje běžný život.' },
    story: {
      eyebrow: 'Naše cesta',
      h2: 'Kdo jsme a kde jsme začali',
      p1: 'Sbor Víry vznikl v Třinci v roce 2002. Snažíme se pomáhat lidem při hledání smyslu života a křesťanských hodnot. Odpovědi na své otázky mohou najít v Bibli — základem naší práce je proto důkladné seznámení s texty Písma.',
      p2: 'Poznání Božího slova formuje průběh našich setkání a věřícím dává odpovědi na otázky každodenního života, ať už jde o rodinu, mezilidské vztahy nebo práci. Pomáháme také lidem, kteří se dostali na okraj společnosti, vrátit se do plnohodnotného života.',
      p3: 'Pořádáme veřejné přednášky, a to i s hosty ze zahraničí, kteří zastupují obdobná křesťanská hnutí. Promítáme filmy s duchovní tematikou pro širokou veřejnost a pořádáme koncerty a hudební večery. Máme početné kontakty na církve a organizace v Česku, Polsku, Maďarsku a na Slovensku.',
      p4: 'Věříme, že návrat ke skutečným křesťanským hodnotám je prospěšný celé společnosti — v generaci současné i budoucí.'
    },
    vision: {
      eyebrow: 'Naše vize',
      h2: 'Křesťanské centrum pro naše město',
      p1: 'Toužíme pozitivním způsobem ovlivnit naše město tím, že tvoříme křesťanské centrum, ve kterém mnoho lidí nalezne své místo, posílí naději a zatouží žít pro Boha a pro druhé.',
      p2: 'Chceme také změnit obraz křesťanství v Česku — ukázat, že Bůh nemá nic společného se středověkým náboženstvím, ale působí mezi námi současným, fascinujícím způsobem. Církev není chrám ani zkostnatělé obřady, ale především Jeho rodina. Ježíš netvořil organizaci; dal nám možnost osobního setkání s Bohem Otcem.',
      p3: 'Toužíme, aby mladí lidé, kteří od života chtějí něco víc, stavěli na Něm a na Jeho slově.'
    },
    believe: {
      eyebrow: 'Čemu věříme',
      h2: 'Sedm bodů, na kterých se shodneme',
      p: 'Nejde o vyčerpávající teologický dokument, ale o jádro, které nás drží pohromadě.',
      b1t: 'Bible',         b1d: 'Bible je inspirované Boží slovo a nejvyšší autorita pro víru i každodenní život.',
      b2t: 'Bůh',           b2d: 'Věříme v jednoho Boha, který se zjevuje jako Otec, Syn a Duch svatý.',
      b3t: 'Ježíš Kristus', b3d: 'Ježíš je Boží Syn. Zemřel za naše hříchy, byl vzkříšen a žije.',
      b4t: 'Záchrana',      b4d: 'Spasení je Boží dar z milosti, který přijímáme vírou — není to odměna za naše výkony.',
      b5t: 'Duch svatý',    b5d: 'Duch svatý dává sílu žít křesťanský život a obdarovává církev pro službu druhým.',
      b6t: 'Církev',        b6d: 'Církev je rodina, ne budova. Je to společenství lidí, kteří patří Kristu i sobě navzájem.',
      b7t: 'Naděje',        b7d: 'Ježíš se vrátí. Smrt nemá poslední slovo a to mění způsob, jak žijeme dnes.'
    },
    lead: {
      eyebrow: 'Vedení sboru',
      h2: 'Pastor Petr Lysek',
      role: 'Pastor a zakladatel sboru',
      b1: 'Vede křesťanské centrum Sbor Víry od jeho vzniku v roce 2002. Narodil se v Třinci, povoláním je stavař. Svou vášeň a povolání našel v budování silné a novodobé místní církve.',
      b2: 'Obrátil se v patnácti letech na výjezdu oldřichovické evangelické mládeže, kde působil až do roku 1989. Poté se zapojil do charismatického hnutí a od roku 1992 vedl Sbor Siloe při Apoštolské církvi. Ukázalo se však, že ho Bůh obdařil průkopnickou povahou a povoláním reformátora — touha udělat pro Boha a pro věřící něco, co v okolí nikdo předtím neviděl, ho přivedla k založení Sboru Víry.',
      b3: 'Je talentovaným řečníkem a inspirátorem. Káže Slovo naplněné vírou a nadšením, ale také s notnou dávkou humoru. Střízlivost mysli, moudrá změna života, poznání Božích zásad a práce na charakteru — to jsou hlavní témata, o kterých mluví.',
      b4: 'Dlouhá léta sloužil společně s manželkou Marcelou, která nečekaně zemřela v lednu 2024. Jejich vytrvalost, věrnost Slovu, angažovanost a nekončící optimismus pomohly mnoha lidem objevit víru v Boha a v Jeho slovo. Oba věřili v církev jako tělo tvořené z lidí — neusilovali o přílišnou popularitu, ale stavěli na týmové práci. Pracovat s lidmi a pro lidi: v tom pastor Petr dodnes vidí smysl své služby.'
    },
    legal: {
      eyebrow: 'Údaje o organizaci', h2: 'Právní informace',
      orgLabel: 'Název', venueLabel: 'Místo shromáždění', icoLabel: 'IČO', pastorLabel: 'Statutární zástupce'
    }
  },

  first: {
    hero: { eyebrow: 'Jste tu poprvé?', h1: 'Nemusíte se ničeho bát', p: 'Víme, že přijít poprvé mezi neznámé lidi není jednoduché. Tady je poctivý popis toho, co vás čeká — bez překvapení.' },
    steps: {
      eyebrow: 'Krok za krokem',
      h2: 'Jak vypadá nedělní dopoledne',
      s1t: 'Přijedete a zaparkujete',  s1d: 'Parkovat lze přímo u budovy. Vchod je společný s dalšími nájemci — naše část se nachází hned vpravo za dveřmi. Budova je otevřená od 10:30, takže můžete dorazit v klidu.',
      s2t: 'Někdo vás přivítá',        s2d: 'U vchodu vás potká někdo z našich lidí, poradí vám a odpoví na otázky. V předsálí je místnost s křesly a stoly, kde si můžete před začátkem dát kávu, čaj a drobné občerstvení a v klidu se s někým seznámit. Nikam se nezapisujete a nic nevyplňujete.',
      s3t: 'V 11:00 začínají chvály',  s3d: 'Prvních zhruba dvacet pět minut společně zpíváme. Můžete zpívat, stát, sedět nebo jen poslouchat — jak je vám příjemné.',
      s4t: 'Následuje vyučování',      s4d: 'Kázání trvá zhruba 35 až 45 minut. Mluvíme srozumitelně a snažíme se propojit Bibli s běžným životem.',
      s5t: 'Zůstanete na kávu',        s5d: 'Po skončení je čas na rozhovor. Pokud budete raději chtít nenápadně odejít, je to naprosto v pořádku.'
    },
    faq: {
      eyebrow: 'Časté otázky',
      h2: 'Na co se lidé ptají nejčastěji',
      q1: 'Jak se mám obléct?',                     a1: 'Jak je vám příjemné. Potkáte u nás mikiny i košile. Nikoho nehodnotíme podle oblečení.',
      q2: 'Musím něco platit nebo dávat?',          a2: 'Ne. Vstup je zdarma. Během bohoslužby probíhá dobrovolná sbírka, ale nikdo vás nesleduje a nikdo od vás nic neočekává.',
      q3: 'Nejsem věřící. Můžu vůbec přijít?',      a3: 'Samozřejmě. Řada lidí k nám chodila dlouho předtím, než se rozhodli něčemu věřit. Otázky a pochybnosti jsou u nás vítané.',
      q4: 'Jak dlouho to celé trvá?',               a4: 'Bohoslužba trvá přibližně 90 minut. Po ní následuje nezávazný čas na kávu a rozhovor.',
      q5: 'Co mám dělat s dětmi?',                  a5: 'Děti jsou vítané a mohou být na bohoslužbě s vámi. Samostatný program pro děti v tuto chvíli nemáme — sbor dnes tvoří převážně dospělí.',
      q6: 'Musím se předem registrovat?',           a6: 'Ne. Stačí prostě přijít.',
      q7: 'V jakém jazyce probíhá bohoslužba?',     a7: 'Bohoslužby probíhají v češtině. Vzhledem k blízkosti hranice u nás potkáte i polsky mluvící. Pokud byste potřebovali pomoc s jazykem, napište nám předem a domluvíme se.',
      q8: 'Je budova bezbariérová?',                 a8: 'U vchodu je rampa, po které se bez potíží dostanete dovnitř s kočárkem. Pro invalidní vozík je ale poměrně strmá, takže doporučujeme doprovod. Dejte nám vědět dopředu a rádi vám pomůžeme.'
    },
    cta: { h2: 'Máte ještě otázku?', p: 'Napište nám. Odpovíme obyčejně do dvou dnů a nikdo vás nebude nikam tlačit.' }
  },

  sermons: {
    hero: { eyebrow: 'Kázání', h1: 'Poslouchejte kdykoli', p: 'Kázání a záznamy z konferencí zveřejňujeme systematicky už řadu let. Všechno najdete na našem YouTube kanálu — zdarma a bez registrace.' },
    live: { eyebrow: 'Nejnovější', h2: 'Poslední záznam z kanálu' },
    channel: {
      eyebrow: 'Archiv',
      h2: 'Celý archiv na YouTube',
      p: 'Na kanálu najdete jednotlivá nedělní kázání, tematické série i celé záznamy z konferencí. Odebírejte kanál a nic vám neuteče.'
    },
    follow: { h2: 'Sledujte nás i jinde', p: 'Videa, fotografie a rychlá oznámení sdílíme také na Facebooku a Instagramu.' }
  },

  photos: { hero: 'Nedělní bohoslužba Sboru Víry v Třinci', about1: 'Pastor Petr Lysek mluví k mladým lidem', about2: 'Zdvižené ruce při chválách', pastor: 'Pastor Petr Lysek se zdviženou Biblí', first: 'Stůl s občerstvením v předsálí' },
  gallery: { eyebrow: 'Fotogalerie', h2: 'Podívejte se, jak to u nás vypadá', p: 'Několik snímků z našich setkání a ze života sboru.', alt: 'Ze života Sboru Víry v Třinci' },
  news: {
    hero: { eyebrow: 'Aktuality', h1: 'Co se u nás děje', p: 'Novinky, akce, konference a oznámení ze života sboru.' },
    empty: 'Zatím tu nejsou žádné aktuality.',
    readMore: 'Číst dál'
  },

  ministries: {
    hero: { eyebrow: 'Co u nás najdete', h1: 'Sbor není jen neděle', p: 'Kromě nedělní bohoslužby se scházíme k modlitbám a každé pondělí vycházíme s evangeliem do centra Třince.' },
    m1t: 'Nedělní bohoslužba', m1d: 'Hlavní setkání celého sboru. V 11:00 začínáme chválami, následuje vyučování z Bible, modlitba a čas pro sebe navzájem.',
    m2t: 'Chvály a hudba',     m2d: 'Skupina lidí, která připravuje hudební část bohoslužby. Rádi mezi sebou uvítáme i nové hudebníky.',
    m3t: 'Evangelizace ve městě', m3d: 'Každé pondělí odpoledne stojíme na náměstí T. G. Masaryka, mluvíme s lidmi a nabízíme modlitbu.',
    m4t: 'Modlitba',           m4d: 'Modlitební setkání během týdne. Modlíme se za sbor, za konkrétní lidi i za Třinec.',
    cta: { h2: 'Chcete se zapojit?', p: 'Napište nám, o co máte zájem, a propojíme vás s těmi správnými lidmi.' }
  },

  give: {
    hero: { eyebrow: 'Podpořte nás', h1: 'Vaše podpora má smysl', p: 'Provoz sboru, evangelizaci ve městě i pomoc lidem v nouzi financujeme z dobrovolných darů.' },
    why: {
      eyebrow: 'Proč darovat',
      h2: 'Kam vaše dary jdou',
      i1: 'provoz a údržba prostor, kde se scházíme;',
      i2: 'evangelizace v centru města — materiály a tisk;',
      i3: 'pořizování a zveřejňování záznamů kázání a konferencí;',
      i4: 'praktická pomoc lidem v obtížné životní situaci;',
      i5: 'podpora misijní a charitativní práce.',
      note: 'Žádná částka není příliš malá a nikoho u nás nehodnotíme podle toho, kolik dává. Dar je zcela dobrovolný.'
    },
    bank: {
      eyebrow: 'Bankovní spojení',
      h2: 'Jak poslat dar',
      bank: 'Banka', account: 'Číslo účtu', iban: 'IBAN', swift: 'SWIFT / BIC', vs: 'Variabilní symbol', owner: 'Majitel účtu',
      todo: 'Bankovní údaje zatím nejsou vyplněny. Doplňte je v souboru assets/js/content.js.',
      hint: 'Do zprávy pro příjemce můžete uvést účel daru, například „děti“ nebo „misie“.'
    },
    receipt: { h2: 'Potvrzení o daru', p: 'Pokud potřebujete potvrzení o daru pro daňové účely, napište nám na e-mail a rádi vám ho vystavíme.' }
  },

  contact: {
    hero: { eyebrow: 'Kontakt', h1: 'Ozvěte se nám', p: 'Máte otázku, potřebujete se za něco modlit nebo si jen chcete promluvit? Napište nám.' },
    labels: { venue: 'Kde se scházíme', email: 'E-mail', messenger: 'Napište nám na Facebooku', phone: 'Telefon', pastor: 'Pastor', ico: 'IČO', social: 'Sociální sítě' },
    form: {
      h2: 'Napište nám',
      p: 'Odpovídáme obvykle do dvou pracovních dnů.',
      name: 'Jméno a příjmení', email: 'E-mail', phone: 'Telefon (nepovinné)',
      subject: 'Předmět', message: 'Vaše zpráva',
      subjectOptions: ['Obecný dotaz', 'Chci přijít poprvé', 'Prosba o modlitbu', 'Evangelizace', 'Jiné'],
      consent: 'Souhlasím s tím, aby Sbor Víry, z. s., zpracoval mé údaje za účelem odpovědi na tuto zprávu.',
      send: 'Odeslat zprávu',
      hint: 'Formulář otevře váš e-mailový program s předvyplněnou zprávou.'
    },
    map: { h2: 'Kde nás najdete', p: 'Hraniční 213, 739 61 Třinec. Parkovat lze přímo u budovy. Vchod do budovy je společný s dalšími nájemci; sborová část se nachází hned vpravo za dveřmi.' }
  },

  footer: {
    tagline: 'Křesťanský sbor v Třinci. Scházíme se každou neděli a rádi mezi sebou uvidíme i vás.',
    explore: 'Web', connect: 'Sledujte nás', visit: 'Navštivte nás',
    rights: 'Všechna práva vyhrazena.',
    privacy: 'Ochrana osobních údajů'
  },

  notfound: { h1: 'Tuhle stránku jsme nenašli', p: 'Odkaz je nejspíš neplatný nebo se stránka přesunula. Zkuste to od začátku.', btn: 'Zpět na úvod' },

  privacy: {
    hero: { eyebrow: 'Právní informace', h1: 'Ochrana osobních údajů', p: 'Stručně a bez právničiny: jaké údaje o vás zpracováváme a proč.' },
    h2a: 'Kdo je správcem údajů',
    pa: 'Správcem osobních údajů je Sbor Víry, z. s., IČO 26596865, kontaktní adresa Hraniční 213, 739 61 Třinec.',
    h2b: 'Jaké údaje zpracováváme',
    pb: 'Zpracováváme pouze údaje, které nám sami pošlete prostřednictvím kontaktního formuláře nebo e-mailu — typicky jméno, e-mailovou adresu, případně telefon a obsah vaší zprávy.',
    h2c: 'Proč je zpracováváme',
    pc: 'Výhradně proto, abychom vám mohli odpovědět. Údaje nikomu neprodáváme ani nepředáváme třetím stranám pro marketingové účely.',
    h2d: 'Cookies a měření návštěvnosti',
    pd: 'Tento web nepoužívá žádné sledovací ani reklamní cookies. Vložená videa z YouTube a mapové podklady mohou ukládat vlastní cookies podle podmínek příslušných poskytovatelů.',
    h2e: 'Vaše práva',
    pe: 'Máte právo na přístup ke svým údajům, jejich opravu i výmaz. Stačí nám napsat na kontaktní e-mail a vyřídíme to.'
  }
},

/* ############################  POLSKI  ################################### */
pl: {
  langName: 'Polski',
  meta: {
    home:       { title: 'Sbor Víry — Trzyniec | zbór chrześcijański',      desc: 'Sbor Víry, z. s. — zbór chrześcijański w Trzyńcu. Nabożeństwa w każdą niedzielę przy ulicy Hraniční 213. Przyjdź taki, jaki jesteś.' },
    about:      { title: 'O nas | Sbor Víry — Trzyniec',                    desc: 'Kim jesteśmy, w co wierzymy i jak powstał nasz zbór. Sbor Víry, z. s., Hraniční 213, Trzyniec.' },
    first:      { title: 'Jestem tu pierwszy raz | Sbor Víry — Trzyniec',   desc: 'Czego możesz się spodziewać podczas pierwszej wizyty. Praktyczne odpowiedzi na typowe pytania.' },
    sermons:    { title: 'Kazania i nagrania | Sbor Víry — Trzyniec',       desc: 'Nagrania kazań i konferencji na naszym kanale YouTube.' },
    news:       { title: 'Aktualności | Sbor Víry — Trzyniec',              desc: 'Nowości, wydarzenia i ogłoszenia z życia zboru.' },
    ministries: { title: 'Co u nas znajdziesz | Sbor Víry — Trzyniec',      desc: 'Nabożeństwa niedzielne, uwielbienie, ewangelizacja w centrum Trzyńca i modlitwa.' },
    give:       { title: 'Wesprzyj nas | Sbor Víry — Trzyniec',             desc: 'Jak możesz wesprzeć służbę zboru dobrowolnym darem.' },
    contact:    { title: 'Kontakt | Sbor Víry — Trzyniec',                  desc: 'Hraniční 213, 739 61 Trzyniec. Napisz do nas albo po prostu wpadnij.' },
    notfound:   { title: 'Nie znaleziono strony | Sbor Víry — Trzyniec',    desc: '' }
  },
  ui: { skip: 'Przejdź do treści głównej', menu: 'Menu', language: 'Język', photoPlaceholder: 'Miejsce na zdjęcie', loading: 'Wczytywanie…' },
  nav: {
    home: 'Start', about: 'O nas', first: 'Jestem tu pierwszy raz', sermons: 'Kazania',
    news: 'Aktualności', ministries: 'Co u nas znajdziesz', give: 'Wesprzyj nas', contact: 'Kontakt'
  },
  cta: {
    first: 'Jestem tu pierwszy raz', watch: 'Oglądaj kazania', contact: 'Napisz do nas',
    more: 'Dowiedz się więcej', allNews: 'Wszystkie aktualności', youtube: 'Otwórz kanał YouTube',
    directions: 'Wyznacz trasę', join: 'Przyjdź do nas', support: 'Wesprzyj zbór'
  },

  home: {
    hero: {
      eyebrow: 'Zbór chrześcijański w Trzyńcu',
      h1: 'Przyjdź taki, jaki jesteś',
      lead: 'Jesteśmy zwyczajnymi ludźmi, którzy doświadczyli, że Bóg zmienia życie. Spotykamy się w Trzyńcu w każdą niedzielę i chętnie zobaczymy wśród nas również Ciebie.',
      m1: 'Nabożeństwo', m2: 'Gdzie się spotykamy', m3: 'Oglądaj online'
    },
    welcome: {
      eyebrow: 'Witamy',
      h2: 'Nieważne, skąd przychodzisz',
      p: 'Nie ma znaczenia, ile masz lat, w co dziś wierzysz, jak się ubierasz ani co masz za sobą. U nas jest miejsce dla Ciebie — i nikt nie będzie niczego od Ciebie wymagał.',
      c1t: 'Nabożeństwo niedzielne',  c1d: 'O 11:00 zaczynamy wspólnym uwielbieniem, potem jest nauczanie z Biblii i modlitwa. Budynek jest otwarty już od 10:30.',
      c2t: 'Ewangelizacja w mieście', c2d: 'W każdy poniedziałek po południu stoimy na Rynku T. G. Masaryka i dzielimy się ewangelią z mieszkańcami Trzyńca.',
      c3t: 'Modlitwa',                c3d: 'Spotykamy się również na modlitwie — za zbór, za konkretne osoby i za nasze miasto.'
    },
    times: {
      eyebrow: 'Kiedy i gdzie',
      h2: 'Spotykamy się regularnie',
      p: 'Główne spotkanie całego zboru odbywa się w niedzielę przed południem. W ciągu tygodnia spotykamy się na modlitwie i wychodzimy z ewangelią do centrum miasta.',
      note: 'Budynek jest otwarty od 10:30. W okresie świąt i podczas wydarzeń specjalnych godziny mogą ulec zmianie — najbardziej aktualne informacje znajdziesz zawsze na naszym Facebooku.'
    },
    watch: {
      eyebrow: 'Online',
      h2: 'Kazania i nagrania z konferencji',
      p: 'Od wielu lat systematycznie publikujemy nagrania kazań i konferencji na naszym kanale YouTube. Nie udało Ci się przyjść w niedzielę? Możesz obejrzeć nagranie w dowolnej chwili.',
      fallback: 'Zajrzyj na nasz kanał i odtwórz najnowsze kazanie.'
    },
    quote: {
      text: 'Kościół to nie świątynia ani skostniałe obrzędy, ale przede wszystkim Boża rodzina. Jezus nie tworzył organizacji — dał nam możliwość osobistego spotkania z Bogiem Ojcem.',
      cite: 'Petr Lysek, pastor zboru'
    },
    values: {
      eyebrow: 'Na czym budujemy',
      h2: 'Cztery rzeczy, które traktujemy poważnie',
      v1t: 'Biblia',    v1d: 'Nauczamy z Pisma w sposób zrozumiały, bez zbędnych religijnych zwrotów.',
      v2t: 'Modlitwa',  v2d: 'Liczymy na to, że Bóg słyszy i działa. Modlimy się za ludzi i za nasze miasto.',
      v3t: 'Rodzina',   v3d: 'Zbór to nie budynek ani program. To konkretni ludzie, którym na sobie zależy.',
      v4t: 'Otwartość', v4d: 'Drzwi są otwarte dla każdego. Pytania i wątpliwości nie są u nas problemem.'
    },
    news: { eyebrow: 'Aktualności', h2: 'Co się u nas dzieje', p: 'Krótkie wiadomości o tym, czym teraz żyjemy i co przygotowujemy.' },
    cta: { h2: 'Do zobaczenia w niedzielę?', p: 'Nie musisz się wcześniej zgłaszać, nie musisz nic przynosić i nie musisz nic wiedzieć. Wystarczy przyjść.' }
  },

  about: {
    hero: { eyebrow: 'O nas', h1: 'Zbór, który opiera się na ludziach', p: 'Jesteśmy wspólnotą chrześcijan w Trzyńcu. Wierzymy, że chrześcijaństwo to nie zbiór zasad, lecz żywa relacja, która przemienia codzienne życie.' },
    story: {
      eyebrow: 'Nasza droga',
      h2: 'Kim jesteśmy i jak zaczynaliśmy',
      p1: 'Sbor Víry powstał w Trzyńcu w 2002 roku. Staramy się pomagać ludziom w poszukiwaniu sensu życia i wartości chrześcijańskich. Odpowiedzi na swoje pytania mogą znaleźć w Biblii — podstawą naszej pracy jest więc dogłębne poznawanie tekstów Pisma.',
      p2: 'Poznanie Słowa Bożego kształtuje przebieg naszych spotkań i daje wierzącym odpowiedzi na pytania codziennego życia, czy chodzi o rodzinę, relacje międzyludzkie, czy o pracę. Pomagamy również osobom, które znalazły się na marginesie społeczeństwa, wrócić do pełnowartościowego życia.',
      p3: 'Organizujemy publiczne wykłady, także z udziałem gości z zagranicy reprezentujących podobne ruchy chrześcijańskie. Wyświetlamy filmy o tematyce duchowej dla szerokiej publiczności oraz organizujemy koncerty i wieczory muzyczne. Mamy liczne kontakty z kościołami i organizacjami w Czechach, Polsce, na Węgrzech i na Słowacji.',
      p4: 'Wierzymy, że powrót do prawdziwych wartości chrześcijańskich przynosi pożytek całemu społeczeństwu — zarówno obecnemu pokoleniu, jak i przyszłym.'
    },
    vision: {
      eyebrow: 'Nasza wizja',
      h2: 'Centrum chrześcijańskie dla naszego miasta',
      p1: 'Pragniemy w pozytywny sposób wpłynąć na nasze miasto, tworząc centrum chrześcijańskie, w którym wiele osób znajdzie swoje miejsce, umocni nadzieję i zapragnie żyć dla Boga i dla innych.',
      p2: 'Chcemy również zmienić obraz chrześcijaństwa w Czechach — pokazać, że Bóg nie ma nic wspólnego ze średniowieczną religijnością, lecz działa wśród nas w sposób współczesny i fascynujący. Kościół to nie świątynia ani skostniałe obrzędy, ale przede wszystkim Jego rodzina. Jezus nie tworzył organizacji; dał nam możliwość osobistego spotkania z Bogiem Ojcem.',
      p3: 'Pragniemy, aby młodzi ludzie, którzy chcą od życia czegoś więcej, budowali na Nim i na Jego słowie.'
    },
    believe: {
      eyebrow: 'W co wierzymy',
      h2: 'Siedem punktów, co do których jesteśmy zgodni',
      p: 'To nie jest wyczerpujący dokument teologiczny, lecz sedno, które trzyma nas razem.',
      b1t: 'Biblia',        b1d: 'Biblia jest natchnionym Słowem Bożym i najwyższym autorytetem dla wiary oraz codziennego życia.',
      b2t: 'Bóg',           b2d: 'Wierzymy w jednego Boga, który objawia się jako Ojciec, Syn i Duch Święty.',
      b3t: 'Jezus Chrystus', b3d: 'Jezus jest Synem Bożym. Umarł za nasze grzechy, zmartwychwstał i żyje.',
      b4t: 'Zbawienie',     b4d: 'Zbawienie jest darem Bożej łaski, który przyjmujemy przez wiarę — nie jest nagrodą za nasze osiągnięcia.',
      b5t: 'Duch Święty',   b5d: 'Duch Święty daje siłę do życia chrześcijańskiego i obdarowuje kościół do służby innym.',
      b6t: 'Kościół',       b6d: 'Kościół to rodzina, a nie budynek. To wspólnota ludzi, którzy należą do Chrystusa i do siebie nawzajem.',
      b7t: 'Nadzieja',      b7d: 'Jezus powróci. Śmierć nie ma ostatniego słowa i to zmienia sposób, w jaki żyjemy dzisiaj.'
    },
    lead: {
      eyebrow: 'Kierownictwo zboru',
      h2: 'Pastor Petr Lysek',
      role: 'Pastor i założyciel zboru',
      b1: 'Prowadzi centrum chrześcijańskie Sbor Víry od jego powstania w 2002 roku. Urodził się w Trzyńcu, z zawodu jest budowlańcem. Swoją pasję i powołanie odnalazł w budowaniu silnego i nowoczesnego lokalnego kościoła.',
      b2: 'Nawrócił się w wieku piętnastu lat na wyjeździe oldrzychowickiej młodzieży ewangelickiej, gdzie działał aż do 1989 roku. Następnie zaangażował się w ruch charyzmatyczny, a od 1992 roku prowadził Zbór Siloe przy Kościele Apostolskim. Okazało się jednak, że Bóg obdarzył go pionierskim charakterem i powołaniem reformatora — pragnienie zrobienia dla Boga i dla wierzących czegoś, czego wcześniej w okolicy nikt nie widział, doprowadziło go do założenia Sboru Víry.',
      b3: 'Jest utalentowanym mówcą i inspiratorem. Głosi Słowo pełne wiary i entuzjazmu, ale też z dużą dawką humoru. Trzeźwość umysłu, mądra zmiana życia, poznanie Bożych zasad i praca nad charakterem — to główne tematy, o których mówi.',
      b4: 'Przez wiele lat służył razem z żoną Marcelą, która niespodziewanie zmarła w styczniu 2024 roku. Ich wytrwałość, wierność Słowu, zaangażowanie i niekończący się optymizm pomogły wielu osobom odkryć wiarę w Boga i w Jego słowo. Oboje wierzyli w kościół jako ciało tworzone z ludzi — nie zabiegali o nadmierną popularność, lecz budowali na pracy zespołowej. Praca z ludźmi i dla ludzi: w tym pastor Petr do dziś widzi sens swojej służby.'
    },
    legal: {
      eyebrow: 'Dane organizacji', h2: 'Informacje prawne',
      orgLabel: 'Nazwa', venueLabel: 'Miejsce spotkań', icoLabel: 'REGON / IČO', pastorLabel: 'Przedstawiciel statutowy'
    }
  },

  first: {
    hero: { eyebrow: 'Jesteś tu pierwszy raz?', h1: 'Nie musisz się niczego obawiać', p: 'Wiemy, że przyjście pierwszy raz między nieznajomych nie jest łatwe. Oto uczciwy opis tego, co Cię czeka — bez niespodzianek.' },
    steps: {
      eyebrow: 'Krok po kroku',
      h2: 'Jak wygląda niedzielny poranek',
      s1t: 'Przyjeżdżasz i parkujesz',   s1d: 'Parkować można bezpośrednio przy budynku. Wejście jest wspólne z innymi najemcami — nasza część znajduje się zaraz po prawej stronie za drzwiami. Budynek jest otwarty od 10:30, więc możesz przyjść bez pośpiechu.',
      s2t: 'Ktoś Cię przywita',          s2d: 'Przy wejściu spotkasz kogoś z nas, kto Ci doradzi i odpowie na pytania. W przedsionku jest pomieszczenie z fotelami i stolikami, gdzie przed rozpoczęciem możesz napić się kawy lub herbaty, zjeść drobny poczęstunek i spokojnie kogoś poznać. Nigdzie się nie zapisujesz i niczego nie wypełniasz.',
      s3t: 'O 11:00 zaczyna się uwielbienie', s3d: 'Przez pierwsze mniej więcej dwadzieścia pięć minut wspólnie śpiewamy. Możesz śpiewać, stać, siedzieć albo tylko słuchać — tak, jak Ci wygodnie.',
      s4t: 'Potem jest nauczanie',       s4d: 'Kazanie trwa około 35–45 minut. Mówimy zrozumiale i staramy się łączyć Biblię ze zwyczajnym życiem.',
      s5t: 'Zostajesz na kawę',          s5d: 'Po zakończeniu jest czas na rozmowę. Jeśli wolisz po prostu dyskretnie wyjść, to również jest zupełnie w porządku.'
    },
    faq: {
      eyebrow: 'Częste pytania',
      h2: 'O co ludzie pytają najczęściej',
      q1: 'Jak mam się ubrać?',                        a1: 'Tak, jak Ci wygodnie. Spotkasz u nas zarówno bluzy, jak i koszule. Nikogo nie oceniamy po ubraniu.',
      q2: 'Czy muszę coś płacić albo dawać?',          a2: 'Nie. Wstęp jest bezpłatny. Podczas nabożeństwa odbywa się dobrowolna zbiórka, ale nikt Cię nie obserwuje i niczego od Ciebie nie oczekuje.',
      q3: 'Nie jestem wierzący. Czy mogę przyjść?',    a3: 'Oczywiście. Wiele osób przychodziło do nas długo, zanim zdecydowało się w cokolwiek uwierzyć. Pytania i wątpliwości są u nas mile widziane.',
      q4: 'Jak długo to wszystko trwa?',               a4: 'Nabożeństwo trwa około 90 minut. Po nim następuje niezobowiązujący czas na kawę i rozmowę.',
      q5: 'Co zrobić z dziećmi?',                      a5: 'Dzieci są mile widziane i mogą być na nabożeństwie razem z Tobą. Obecnie nie prowadzimy osobnego programu dla dzieci — zbór tworzą dziś głównie osoby dorosłe.',
      q6: 'Czy muszę się wcześniej zarejestrować?',    a6: 'Nie. Wystarczy po prostu przyjść.',
      q7: 'W jakim języku odbywa się nabożeństwo?',    a7: 'Nabożeństwa odbywają się po czesku. Ze względu na bliskość granicy spotkasz u nas również osoby mówiące po polsku. Jeśli potrzebujesz pomocy językowej, napisz do nas wcześniej, a na pewno się dogadamy.',
      q8: 'Czy budynek jest dostępny bez barier?',      a8: 'Przy wejściu znajduje się podjazd, którym bez trudu wjedziesz z wózkiem dziecięcym. Dla wózka inwalidzkiego jest jednak dość stromy, więc zalecamy asystę. Daj nam znać wcześniej, a chętnie pomożemy.'
    },
    cta: { h2: 'Masz jeszcze pytanie?', p: 'Napisz do nas. Zwykle odpowiadamy w ciągu dwóch dni i nikt nie będzie Cię do niczego popychał.' }
  },

  sermons: {
    hero: { eyebrow: 'Kazania', h1: 'Słuchaj, kiedy chcesz', p: 'Kazania i nagrania z konferencji publikujemy systematycznie od wielu lat. Wszystko znajdziesz na naszym kanale YouTube — bezpłatnie i bez rejestracji.' },
    live: { eyebrow: 'Najnowsze', h2: 'Ostatnie nagranie z kanału' },
    channel: {
      eyebrow: 'Archiwum',
      h2: 'Całe archiwum na YouTube',
      p: 'Na kanale znajdziesz poszczególne kazania niedzielne, serie tematyczne oraz pełne nagrania z konferencji. Subskrybuj kanał, żeby nic Ci nie umknęło.'
    },
    follow: { h2: 'Śledź nas również tutaj', p: 'Filmy, zdjęcia i szybkie ogłoszenia udostępniamy także na Facebooku i Instagramie.' }
  },

  photos: { hero: 'Nabożeństwo niedzielne zboru Sbor Víry w Trzyńcu', about1: 'Pastor Petr Lysek mówi do młodych ludzi', about2: 'Wzniesione ręce podczas uwielbienia', pastor: 'Pastor Petr Lysek z uniesioną Biblią', first: 'Stół z poczęstunkiem w przedsionku' },
  gallery: { eyebrow: 'Galeria', h2: 'Zobacz, jak u nas jest', p: 'Kilka zdjęć z naszych spotkań i z życia zboru.', alt: 'Z życia zboru Sbor Víry w Trzyńcu' },
  news: {
    hero: { eyebrow: 'Aktualności', h1: 'Co się u nas dzieje', p: 'Nowości, wydarzenia, konferencje i ogłoszenia z życia zboru.' },
    empty: 'Na razie nie ma tu żadnych aktualności.',
    readMore: 'Czytaj dalej'
  },

  ministries: {
    hero: { eyebrow: 'Co u nas znajdziesz', h1: 'Zbór to nie tylko niedziela', p: 'Poza nabożeństwem niedzielnym spotykamy się na modlitwie, a w każdy poniedziałek wychodzimy z ewangelią do centrum Trzyńca.' },
    m1t: 'Nabożeństwo niedzielne', m1d: 'Główne spotkanie całego zboru. O 11:00 zaczynamy uwielbieniem, potem jest nauczanie z Biblii, modlitwa i czas dla siebie nawzajem.',
    m2t: 'Uwielbienie i muzyka',   m2d: 'Grupa osób, która przygotowuje muzyczną część nabożeństwa. Chętnie przyjmiemy również nowych muzyków.',
    m3t: 'Ewangelizacja w mieście', m3d: 'W każdy poniedziałek po południu stoimy na Rynku T. G. Masaryka, rozmawiamy z ludźmi i proponujemy modlitwę.',
    m4t: 'Modlitwa',               m4d: 'Spotkania modlitewne w ciągu tygodnia. Modlimy się za zbór, za konkretne osoby i za Trzyniec.',
    cta: { h2: 'Chcesz się zaangażować?', p: 'Napisz nam, co Cię interesuje, a połączymy Cię z właściwymi osobami.' }
  },

  give: {
    hero: { eyebrow: 'Wesprzyj nas', h1: 'Twoje wsparcie ma sens', p: 'Funkcjonowanie zboru, ewangelizację w mieście oraz pomoc osobom w potrzebie finansujemy z dobrowolnych darów.' },
    why: {
      eyebrow: 'Dlaczego warto',
      h2: 'Na co idą Twoje dary',
      i1: 'utrzymanie i remonty pomieszczeń, w których się spotykamy;',
      i2: 'ewangelizacja w centrum miasta — materiały i druk;',
      i3: 'nagrywanie i publikowanie kazań oraz konferencji;',
      i4: 'praktyczna pomoc osobom w trudnej sytuacji życiowej;',
      i5: 'wsparcie pracy misyjnej i charytatywnej.',
      note: 'Żadna kwota nie jest zbyt mała i nikogo nie oceniamy według tego, ile daje. Dar jest całkowicie dobrowolny.'
    },
    bank: {
      eyebrow: 'Dane bankowe',
      h2: 'Jak przekazać dar',
      bank: 'Bank', account: 'Numer konta', iban: 'IBAN', swift: 'SWIFT / BIC', vs: 'Symbol zmienny', owner: 'Właściciel konta',
      todo: 'Dane bankowe nie zostały jeszcze uzupełnione. Wpisz je w pliku assets/js/content.js.',
      hint: 'W tytule przelewu możesz podać cel daru, na przykład „dzieci” albo „misja”.'
    },
    receipt: { h2: 'Potwierdzenie darowizny', p: 'Jeśli potrzebujesz potwierdzenia darowizny do celów podatkowych, napisz do nas na adres e-mail, a chętnie je wystawimy.' }
  },

  contact: {
    hero: { eyebrow: 'Kontakt', h1: 'Odezwij się do nas', p: 'Masz pytanie, potrzebujesz modlitwy albo po prostu chcesz porozmawiać? Napisz do nas.' },
    labels: { venue: 'Gdzie się spotykamy', email: 'E-mail', messenger: 'Napisz do nas na Facebooku', phone: 'Telefon', pastor: 'Pastor', ico: 'REGON / IČO', social: 'Media społecznościowe' },
    form: {
      h2: 'Napisz do nas',
      p: 'Zwykle odpowiadamy w ciągu dwóch dni roboczych.',
      name: 'Imię i nazwisko', email: 'E-mail', phone: 'Telefon (opcjonalnie)',
      subject: 'Temat', message: 'Twoja wiadomość',
      subjectOptions: ['Pytanie ogólne', 'Chcę przyjść pierwszy raz', 'Prośba o modlitwę', 'Ewangelizacja', 'Inne'],
      consent: 'Wyrażam zgodę na przetwarzanie moich danych przez Sbor Víry, z. s. w celu udzielenia odpowiedzi na tę wiadomość.',
      send: 'Wyślij wiadomość',
      hint: 'Formularz otworzy Twój program pocztowy z wstępnie wypełnioną wiadomością.'
    },
    map: { h2: 'Gdzie nas znaleźć', p: 'Hraniční 213, 739 61 Trzyniec. Parkować można bezpośrednio przy budynku. Wejście do budynku jest wspólne z innymi najemcami; nasza część znajduje się zaraz po prawej stronie za drzwiami.' }
  },

  footer: {
    tagline: 'Zbór chrześcijański w Trzyńcu. Spotykamy się w każdą niedzielę i chętnie zobaczymy wśród nas również Ciebie.',
    explore: 'Strona', connect: 'Śledź nas', visit: 'Odwiedź nas',
    rights: 'Wszelkie prawa zastrzeżone.',
    privacy: 'Ochrona danych osobowych'
  },

  notfound: { h1: 'Nie znaleźliśmy tej strony', p: 'Link jest prawdopodobnie nieprawidłowy albo strona została przeniesiona. Spróbuj zacząć od początku.', btn: 'Wróć na stronę główną' },

  privacy: {
    hero: { eyebrow: 'Informacje prawne', h1: 'Ochrona danych osobowych', p: 'Krótko i bez prawniczego żargonu: jakie dane o Tobie przetwarzamy i po co.' },
    h2a: 'Kto jest administratorem danych',
    pa: 'Administratorem danych osobowych jest Sbor Víry, z. s., IČO 26596865, adres kontaktowy: Hraniční 213, 739 61 Trzyniec.',
    h2b: 'Jakie dane przetwarzamy',
    pb: 'Przetwarzamy wyłącznie dane, które sam nam przesyłasz przez formularz kontaktowy lub e-mail — zazwyczaj imię, adres e-mail, ewentualnie telefon i treść wiadomości.',
    h2c: 'Dlaczego je przetwarzamy',
    pc: 'Wyłącznie po to, żeby móc Ci odpowiedzieć. Danych nikomu nie sprzedajemy ani nie przekazujemy stronom trzecim w celach marketingowych.',
    h2d: 'Pliki cookie i pomiar ruchu',
    pd: 'Ta strona nie używa żadnych śledzących ani reklamowych plików cookie. Osadzone filmy z YouTube oraz mapy mogą zapisywać własne pliki cookie zgodnie z warunkami odpowiednich dostawców.',
    h2e: 'Twoje prawa',
    pe: 'Masz prawo dostępu do swoich danych, ich sprostowania oraz usunięcia. Wystarczy napisać na nasz adres kontaktowy, a wszystko załatwimy.'
  }
},

/* ############################  ENGLISH  ################################## */
en: {
  langName: 'English',
  meta: {
    home:       { title: 'Sbor Víry — Třinec | a Christian church',         desc: 'Sbor Víry, z. s. — a Christian church in Třinec, Czechia. Services every Sunday at Hraniční 213. Come exactly as you are.' },
    about:      { title: 'About us | Sbor Víry — Třinec',                    desc: 'Who we are, what we believe and how our church began. Sbor Víry, z. s., Hraniční 213, Třinec.' },
    first:      { title: 'First time here | Sbor Víry — Třinec',             desc: 'What to expect on your first visit. Honest answers to the usual questions.' },
    sermons:    { title: 'Sermons and recordings | Sbor Víry — Třinec',      desc: 'Recordings of sermons and conferences on our YouTube channel.' },
    news:       { title: 'News | Sbor Víry — Třinec',                        desc: 'Updates, events and announcements from the life of our church.' },
    ministries: { title: 'What we do | Sbor Víry — Třinec',                  desc: 'Sunday services, worship, evangelism in the centre of Třinec and prayer.' },
    give:       { title: 'Support us | Sbor Víry — Třinec',                  desc: 'How you can support the work of our church with a voluntary gift.' },
    contact:    { title: 'Contact | Sbor Víry — Třinec',                     desc: 'Hraniční 213, 739 61 Třinec, Czechia. Write to us or simply drop by.' },
    notfound:   { title: 'Page not found | Sbor Víry — Třinec',              desc: '' }
  },
  ui: { skip: 'Skip to main content', menu: 'Menu', language: 'Language', photoPlaceholder: 'Space for a photograph', loading: 'Loading…' },
  nav: {
    home: 'Home', about: 'About us', first: 'First time here', sermons: 'Sermons',
    news: 'News', ministries: 'What we do', give: 'Support us', contact: 'Contact'
  },
  cta: {
    first: 'First time here', watch: 'Watch sermons', contact: 'Write to us',
    more: 'Find out more', allNews: 'All news', youtube: 'Open our YouTube channel',
    directions: 'Get directions', join: 'Come and join us', support: 'Support the church'
  },

  home: {
    hero: {
      eyebrow: 'A Christian church in Třinec',
      h1: 'Come exactly as you are',
      lead: 'We are ordinary people who have experienced that God changes lives. We meet in Třinec every Sunday, and we would love to see you among us.',
      m1: 'Sunday service', m2: 'Where we meet', m3: 'Watch online'
    },
    welcome: {
      eyebrow: 'Welcome',
      h2: 'It does not matter where you are coming from',
      p: 'It makes no difference how old you are, what you currently believe, how you dress or what lies behind you. There is a place for you here — and nobody will demand anything from you.',
      c1t: 'Sunday service',        c1d: 'At 11:00 we begin with worship together, followed by clear Bible teaching and prayer. The building opens at 10:30.',
      c2t: 'Evangelism in the town', c2d: 'Every Monday afternoon we stand on T. G. Masaryk Square and share the gospel with the people of Třinec.',
      c3t: 'Prayer',                 c3d: 'We also meet to pray — for the church, for individual people and for our town.'
    },
    times: {
      eyebrow: 'When and where',
      h2: 'We meet regularly',
      p: 'The main gathering of the whole church is on Sunday morning. During the week we meet to pray and take the gospel into the town centre.',
      note: 'The building opens at 10:30. Times may change around public holidays and special events — you will always find the latest information on our Facebook page.'
    },
    watch: {
      eyebrow: 'Online',
      h2: 'Sermons and conference recordings',
      p: 'For many years we have been systematically publishing recordings of sermons and conferences on our YouTube channel. Missed a Sunday? You can watch it whenever you like.',
      fallback: 'Visit our channel and watch the latest sermon.'
    },
    quote: {
      text: 'The church is not a temple or a set of ossified rituals, but above all God’s family. Jesus did not found an organisation — he gave us the possibility of meeting God the Father personally.',
      cite: 'Petr Lysek, pastor'
    },
    values: {
      eyebrow: 'What we build on',
      h2: 'Four things we take seriously',
      v1t: 'The Bible', v1d: 'We teach from Scripture clearly, without unnecessary religious jargon.',
      v2t: 'Prayer',    v2d: 'We count on God hearing and acting. We pray for people and for our town.',
      v3t: 'Family',    v3d: 'A church is not a building or a programme. It is real people who care about one another.',
      v4t: 'Openness',  v4d: 'The door is open to everyone. Questions and doubts are not a problem here.'
    },
    news: { eyebrow: 'News', h2: 'What is happening', p: 'Short updates on what we are living through and what we are preparing.' },
    cta: { h2: 'See you on Sunday?', p: 'You do not need to sign up in advance, bring anything or know anything. Just come.' }
  },

  about: {
    hero: { eyebrow: 'About us', h1: 'A church built on people', p: 'We are a community of Christians in Třinec. We believe Christianity is not a set of rules but a living relationship that transforms everyday life.' },
    story: {
      eyebrow: 'Our journey',
      h2: 'Who we are and how we began',
      p1: 'Sbor Víry was founded in Třinec in 2002. We seek to help people in their search for meaning and for Christian values. The answers to their questions can be found in the Bible — a thorough acquaintance with the text of Scripture is therefore the foundation of everything we do.',
      p2: 'Knowing the Word of God shapes the way our meetings unfold and gives believers answers to the questions of everyday life, whether about family, relationships or work. We also help people who have ended up on the margins of society to return to a full life.',
      p3: 'We hold public lectures, including with guests from abroad who represent similar Christian movements. We screen films on spiritual themes for the general public and put on concerts and musical evenings. We have extensive contacts with churches and organisations in Czechia, Poland, Hungary and Slovakia.',
      p4: 'We believe that a return to genuine Christian values benefits society as a whole — both the present generation and those to come.'
    },
    vision: {
      eyebrow: 'Our vision',
      h2: 'A Christian centre for our town',
      p1: 'We long to influence our town for good by building a Christian centre where many people will find their place, have their hope strengthened and come to want to live for God and for others.',
      p2: 'We also want to change the image of Christianity in Czechia — to show that God has nothing to do with medieval religion, but works among us in a contemporary and fascinating way. The church is not a temple or a set of ossified rituals, but above all his family. Jesus did not found an organisation; he gave us the possibility of meeting God the Father personally.',
      p3: 'We long for young people who want something more from life to build on him and on his word.'
    },
    believe: {
      eyebrow: 'What we believe',
      h2: 'Seven things we agree on',
      p: 'This is not an exhaustive theological document, but the core that holds us together.',
      b1t: 'The Bible',    b1d: 'The Bible is the inspired Word of God and the highest authority for faith and everyday life.',
      b2t: 'God',          b2d: 'We believe in one God, who reveals himself as Father, Son and Holy Spirit.',
      b3t: 'Jesus Christ', b3d: 'Jesus is the Son of God. He died for our sins, was raised from the dead and is alive.',
      b4t: 'Salvation',    b4d: 'Salvation is a gift of God’s grace received through faith — it is not a reward for our performance.',
      b5t: 'The Holy Spirit', b5d: 'The Holy Spirit gives strength to live the Christian life and equips the church to serve others.',
      b6t: 'The Church',   b6d: 'The church is a family, not a building. It is a community of people who belong to Christ and to one another.',
      b7t: 'Hope',         b7d: 'Jesus will return. Death does not have the last word, and that changes how we live today.'
    },
    lead: {
      eyebrow: 'Leadership',
      h2: 'Pastor Petr Lysek',
      role: 'Pastor and founder of the church',
      b1: 'He has led the Sbor Víry Christian centre since it was founded in 2002. Born in Třinec and a builder by trade, he found his passion and calling in building a strong, contemporary local church.',
      b2: 'He came to faith at the age of fifteen on a trip with the Oldřichovice evangelical youth group, where he served until 1989. He then became involved in the charismatic movement and from 1992 led the Siloe congregation within the Apostolic Church. It became clear, however, that God had given him a pioneering temperament and the calling of a reformer — the desire to do something for God and for believers that no one in the area had seen before led him to found Sbor Víry.',
      b3: 'He is a gifted and inspiring speaker. He preaches a Word full of faith and enthusiasm, but also with a good deal of humour. Soberness of mind, wise change of life, knowing God’s principles and working on one’s character are his main themes.',
      b4: 'For many years he served together with his wife Marcela, who died suddenly in January 2024. Their perseverance, faithfulness to the Word, commitment and unfailing optimism helped many people discover faith in God and in his word. Both believed in the church as a body made of people — they never sought popularity, but built on teamwork. Working with people and for people is where pastor Petr still finds the meaning of his ministry.'
    },
    legal: {
      eyebrow: 'Organisation details', h2: 'Legal information',
      orgLabel: 'Name', venueLabel: 'Meeting place', icoLabel: 'Company ID (IČO)', pastorLabel: 'Statutory representative'
    }
  },

  first: {
    hero: { eyebrow: 'First time here?', h1: 'There is nothing to worry about', p: 'We know that walking in among strangers for the first time is not easy. Here is an honest description of what awaits you — no surprises.' },
    steps: {
      eyebrow: 'Step by step',
      h2: 'What a Sunday morning looks like',
      s1t: 'You arrive and park',      s1d: 'There is parking right by the building. The entrance is shared with other tenants — our part is immediately on the right once you are through the door. The building opens at 10:30, so there is no need to rush.',
      s2t: 'Someone welcomes you',     s2d: 'At the entrance one of our people will meet you, point you in the right direction and answer your questions. In the foyer there is a room with armchairs and tables where you can have coffee, tea and a light snack before we begin, and get to know someone without any rush. There is nothing to sign and no form to fill in.',
      s3t: 'Worship starts at 11:00',  s3d: 'For the first twenty-five minutes or so we sing together. You can sing, stand, sit or simply listen — whatever feels comfortable.',
      s4t: 'Then comes the teaching',  s4d: 'The sermon lasts roughly 35 to 45 minutes. We speak plainly and try to connect the Bible with ordinary life.',
      s5t: 'You stay for coffee',      s5d: 'Afterwards there is time to talk. If you would rather slip away quietly, that is perfectly fine too.'
    },
    faq: {
      eyebrow: 'Frequently asked',
      h2: 'What people ask most often',
      q1: 'What should I wear?',                      a1: 'Whatever you feel comfortable in. You will see hoodies and shirts alike. We do not judge anyone by their clothes.',
      q2: 'Do I have to pay or give anything?',       a2: 'No. Entry is free. There is a voluntary offering during the service, but nobody is watching you and nothing is expected of you.',
      q3: 'I am not a believer. Can I still come?',   a3: 'Of course. Many people came here for a long time before they decided to believe anything. Questions and doubts are welcome.',
      q4: 'How long does the whole thing take?',      a4: 'The service lasts about 90 minutes, followed by an informal time for coffee and conversation.',
      q5: 'What do I do with my children?',           a5: 'Children are very welcome and can stay with you throughout the service. We do not run a separate children\'s programme at the moment — the church today is made up mostly of adults.',
      q6: 'Do I need to register in advance?',        a6: 'No. Simply come along.',
      q7: 'What language is the service in?',         a7: 'Services are held in Czech. Because we are close to the border, you will also meet Polish speakers here. If you need help with the language, write to us in advance and we will sort something out.',
      q8: 'Is the building step-free?',               a8: 'There is a ramp at the entrance, which works well for a pushchair. For a wheelchair it is rather steep, so we recommend bringing someone with you. Let us know in advance and we will gladly help.'
    },
    cta: { h2: 'Still have a question?', p: 'Write to us. We usually reply within two days, and nobody will push you into anything.' }
  },

  sermons: {
    hero: { eyebrow: 'Sermons', h1: 'Listen whenever you like', p: 'We have been publishing sermons and conference recordings systematically for years. You will find everything on our YouTube channel — free and without registration.' },
    live: { eyebrow: 'Latest', h2: 'The most recent recording' },
    channel: {
      eyebrow: 'Archive',
      h2: 'The full archive on YouTube',
      p: 'On the channel you will find individual Sunday sermons, themed series and complete conference recordings. Subscribe so that you do not miss anything.'
    },
    follow: { h2: 'Follow us elsewhere too', p: 'We also share videos, photographs and quick announcements on Facebook and Instagram.' }
  },

  photos: { hero: 'A Sunday service of Sbor Víry in Třinec', about1: 'Pastor Petr Lysek speaking to young people', about2: 'Hands raised in worship', pastor: 'Pastor Petr Lysek holding up a Bible', first: 'The refreshment table in the foyer' },
  gallery: { eyebrow: 'Photos', h2: 'See what it looks like here', p: 'A few pictures from our gatherings and from the life of the church.', alt: 'From the life of Sbor Víry in Třinec' },
  news: {
    hero: { eyebrow: 'News', h1: 'What is happening', p: 'Updates, events, conferences and announcements from the life of our church.' },
    empty: 'There are no news items yet.',
    readMore: 'Read more'
  },

  ministries: {
    hero: { eyebrow: 'What we do', h1: 'Church is more than Sunday', p: 'Besides the Sunday service we meet to pray, and every Monday we take the gospel into the centre of Třinec.' },
    m1t: 'Sunday service',   m1d: 'The main gathering of the whole church. We begin at 11:00 with worship, followed by Bible teaching, prayer and time for one another.',
    m2t: 'Worship and music', m2d: 'The team that prepares the musical part of the service. We are always glad to welcome new musicians.',
    m3t: 'Evangelism in the town', m3d: 'Every Monday afternoon we stand on T. G. Masaryk Square, talk with people and offer to pray with them.',
    m4t: 'Prayer',           m4d: 'Prayer meetings during the week. We pray for the church, for individual people and for Třinec.',
    cta: { h2: 'Would you like to get involved?', p: 'Tell us what interests you and we will connect you with the right people.' }
  },

  give: {
    hero: { eyebrow: 'Support us', h1: 'Your support makes a difference', p: 'The running of the church, our evangelism in the town and our help for people in need are all funded by voluntary gifts.' },
    why: {
      eyebrow: 'Why give',
      h2: 'Where your gifts go',
      i1: 'the running and upkeep of the premises where we meet;',
      i2: 'evangelism in the town centre — materials and printing;',
      i3: 'recording and publishing sermons and conferences;',
      i4: 'practical help for people in difficult circumstances;',
      i5: 'support for mission and charitable work.',
      note: 'No amount is too small, and nobody here is judged by how much they give. Giving is entirely voluntary.'
    },
    bank: {
      eyebrow: 'Bank details',
      h2: 'How to give',
      bank: 'Bank', account: 'Account number', iban: 'IBAN', swift: 'SWIFT / BIC', vs: 'Variable symbol', owner: 'Account holder',
      todo: 'The bank details have not been filled in yet. Add them in the file assets/js/content.js.',
      hint: 'You may state the purpose of your gift in the payment reference, for example “children” or “mission”.'
    },
    receipt: { h2: 'Confirmation of your gift', p: 'If you need written confirmation of your gift for tax purposes, send us an email and we will gladly issue one.' }
  },

  contact: {
    hero: { eyebrow: 'Contact', h1: 'Get in touch', p: 'Do you have a question, would you like prayer, or do you simply want to talk? Write to us.' },
    labels: { venue: 'Where we meet', email: 'Email', messenger: 'Message us on Facebook', phone: 'Telephone', pastor: 'Pastor', ico: 'Company ID (IČO)', social: 'Social media' },
    form: {
      h2: 'Send us a message',
      p: 'We usually reply within two working days.',
      name: 'Full name', email: 'Email', phone: 'Telephone (optional)',
      subject: 'Subject', message: 'Your message',
      subjectOptions: ['General enquiry', 'I would like to visit', 'Prayer request', 'Evangelism', 'Other'],
      consent: 'I agree that Sbor Víry, z. s. may process my details in order to reply to this message.',
      send: 'Send message',
      hint: 'The form will open your email program with the message ready to send.'
    },
    map: { h2: 'Where to find us', p: 'Hraniční 213, 739 61 Třinec, Czechia. There is parking right by the building. The entrance is shared with other tenants; our part is immediately on the right once you are inside.' }
  },

  footer: {
    tagline: 'A Christian church in Třinec. We meet every Sunday and would love to see you among us.',
    explore: 'Site', connect: 'Follow us', visit: 'Visit us',
    rights: 'All rights reserved.',
    privacy: 'Privacy notice'
  },

  notfound: { h1: 'We could not find that page', p: 'The link is probably out of date or the page has moved. Try starting again from the beginning.', btn: 'Back to the home page' },

  privacy: {
    hero: { eyebrow: 'Legal', h1: 'Privacy notice', p: 'Briefly and without legal jargon: what information we hold about you and why.' },
    h2a: 'Who the data controller is',
    pa: 'The data controller is Sbor Víry, z. s., company ID 26596865, contact address Hraniční 213, 739 61 Třinec, Czechia.',
    h2b: 'What data we process',
    pb: 'We process only the information you send us yourself through the contact form or by email — typically your name, email address, possibly a telephone number, and the content of your message.',
    h2c: 'Why we process it',
    pc: 'Solely so that we can reply to you. We do not sell your data or pass it to third parties for marketing purposes.',
    h2d: 'Cookies and analytics',
    pd: 'This website uses no tracking or advertising cookies. Embedded YouTube videos and maps may set their own cookies under the terms of the respective providers.',
    h2e: 'Your rights',
    pe: 'You have the right to access your data, to have it corrected and to have it erased. Just write to our contact address and we will take care of it.'
  }
},

/* ############################  ESPAÑOL  ################################## */
es: {
  langName: 'Español',
  meta: {
    home:       { title: 'Sbor Víry — Třinec | iglesia cristiana',           desc: 'Sbor Víry, z. s. — iglesia cristiana en Třinec (Chequia). Cultos todos los domingos en Hraniční 213. Ven tal y como eres.' },
    about:      { title: 'Quiénes somos | Sbor Víry — Třinec',               desc: 'Quiénes somos, en qué creemos y cómo nació nuestra iglesia. Sbor Víry, z. s., Hraniční 213, Třinec.' },
    first:      { title: 'Es mi primera vez | Sbor Víry — Třinec',           desc: 'Qué puedes esperar en tu primera visita. Respuestas sinceras a las preguntas más habituales.' },
    sermons:    { title: 'Predicaciones y grabaciones | Sbor Víry — Třinec', desc: 'Grabaciones de predicaciones y conferencias en nuestro canal de YouTube.' },
    news:       { title: 'Novedades | Sbor Víry — Třinec',                   desc: 'Noticias, eventos y anuncios de la vida de nuestra iglesia.' },
    ministries: { title: 'Qué hacemos | Sbor Víry — Třinec',                 desc: 'Cultos dominicales, alabanza, evangelización en el centro de Třinec y oración.' },
    give:       { title: 'Apóyanos | Sbor Víry — Třinec',                    desc: 'Cómo puedes apoyar el trabajo de la iglesia con una ofrenda voluntaria.' },
    contact:    { title: 'Contacto | Sbor Víry — Třinec',                    desc: 'Hraniční 213, 739 61 Třinec, Chequia. Escríbenos o simplemente ven a vernos.' },
    notfound:   { title: 'Página no encontrada | Sbor Víry — Třinec',        desc: '' }
  },
  ui: { skip: 'Ir al contenido principal', menu: 'Menú', language: 'Idioma', photoPlaceholder: 'Espacio para una fotografía', loading: 'Cargando…' },
  nav: {
    home: 'Inicio', about: 'Quiénes somos', first: 'Es mi primera vez', sermons: 'Predicaciones',
    news: 'Novedades', ministries: 'Qué hacemos', give: 'Apóyanos', contact: 'Contacto'
  },
  cta: {
    first: 'Es mi primera vez', watch: 'Ver predicaciones', contact: 'Escríbenos',
    more: 'Saber más', allNews: 'Todas las novedades', youtube: 'Abrir nuestro canal de YouTube',
    directions: 'Cómo llegar', join: 'Ven a vernos', support: 'Apoyar a la iglesia'
  },

  home: {
    hero: {
      eyebrow: 'Iglesia cristiana en Třinec',
      h1: 'Ven tal y como eres',
      lead: 'Somos personas corrientes que hemos experimentado que Dios cambia vidas. Nos reunimos en Třinec todos los domingos y nos encantaría verte entre nosotros.',
      m1: 'Culto dominical', m2: 'Dónde nos reunimos', m3: 'Míranos en línea'
    },
    welcome: {
      eyebrow: 'Bienvenido',
      h2: 'No importa de dónde vengas',
      p: 'Da igual la edad que tengas, en qué creas hoy, cómo vistas o qué hayas vivido. Aquí hay un lugar para ti, y nadie te va a exigir nada.',
      c1t: 'Culto dominical',        c1d: 'A las 11:00 empezamos con la alabanza, seguida de una enseñanza bíblica clara y un tiempo de oración. El edificio abre a las 10:30.',
      c2t: 'Evangelización en la ciudad', c2d: 'Cada lunes por la tarde estamos en la plaza T. G. Masaryk y compartimos el evangelio con la gente de Třinec.',
      c3t: 'Oración',                c3d: 'También nos reunimos para orar: por la iglesia, por personas concretas y por nuestra ciudad.'
    },
    times: {
      eyebrow: 'Cuándo y dónde',
      h2: 'Nos reunimos con regularidad',
      p: 'La reunión principal de toda la iglesia es el domingo por la mañana. Entre semana nos reunimos para orar y salimos con el evangelio al centro de la ciudad.',
      note: 'El edificio abre a las 10:30. Los horarios pueden cambiar en días festivos y durante eventos especiales: la información más actualizada está siempre en nuestro Facebook.'
    },
    watch: {
      eyebrow: 'En línea',
      h2: 'Predicaciones y grabaciones de conferencias',
      p: 'Desde hace años publicamos de forma sistemática las grabaciones de nuestras predicaciones y conferencias en nuestro canal de YouTube. ¿No pudiste venir el domingo? Puedes verlo cuando quieras.',
      fallback: 'Visita nuestro canal y reproduce la última predicación.'
    },
    quote: {
      text: 'La Iglesia no es un templo ni un conjunto de ritos anquilosados, sino ante todo la familia de Dios. Jesús no fundó una organización: nos dio la posibilidad de un encuentro personal con Dios Padre.',
      cite: 'Petr Lysek, pastor'
    },
    values: {
      eyebrow: 'Sobre qué construimos',
      h2: 'Cuatro cosas que nos tomamos en serio',
      v1t: 'La Biblia', v1d: 'Enseñamos las Escrituras de forma comprensible, sin lenguaje religioso innecesario.',
      v2t: 'La oración', v2d: 'Contamos con que Dios escucha y actúa. Oramos por las personas y por nuestra ciudad.',
      v3t: 'La familia', v3d: 'La iglesia no es un edificio ni un programa. Son personas concretas que se cuidan entre sí.',
      v4t: 'La apertura', v4d: 'La puerta está abierta para todos. Las preguntas y las dudas no son un problema aquí.'
    },
    news: { eyebrow: 'Novedades', h2: 'Qué está pasando', p: 'Noticias breves sobre lo que estamos viviendo y lo que preparamos.' },
    cta: { h2: '¿Nos vemos el domingo?', p: 'No hace falta avisar con antelación, no tienes que traer nada ni saber nada. Basta con venir.' }
  },

  about: {
    hero: { eyebrow: 'Quiénes somos', h1: 'Una iglesia construida sobre personas', p: 'Somos una comunidad de cristianos en Třinec. Creemos que el cristianismo no es un conjunto de normas, sino una relación viva que transforma la vida cotidiana.' },
    story: {
      eyebrow: 'Nuestro camino',
      h2: 'Quiénes somos y cómo empezamos',
      p1: 'Sbor Víry nació en Třinec en 2002. Queremos ayudar a las personas en su búsqueda del sentido de la vida y de los valores cristianos. Las respuestas a sus preguntas pueden encontrarlas en la Biblia; por eso el fundamento de nuestro trabajo es un conocimiento a fondo de los textos de las Escrituras.',
      p2: 'Conocer la Palabra de Dios da forma a nuestras reuniones y ofrece a los creyentes respuestas a las preguntas de la vida diaria, ya sea sobre la familia, las relaciones o el trabajo. También ayudamos a quienes han quedado al margen de la sociedad a volver a una vida plena.',
      p3: 'Organizamos conferencias abiertas al público, también con invitados del extranjero que representan movimientos cristianos afines. Proyectamos películas de temática espiritual para el público general y organizamos conciertos y veladas musicales. Mantenemos numerosos contactos con iglesias y organizaciones de Chequia, Polonia, Hungría y Eslovaquia.',
      p4: 'Creemos que volver a los verdaderos valores cristianos beneficia a toda la sociedad, tanto a la generación actual como a las futuras.'
    },
    vision: {
      eyebrow: 'Nuestra visión',
      h2: 'Un centro cristiano para nuestra ciudad',
      p1: 'Anhelamos influir positivamente en nuestra ciudad creando un centro cristiano en el que muchas personas encuentren su lugar, fortalezcan su esperanza y deseen vivir para Dios y para los demás.',
      p2: 'También queremos cambiar la imagen del cristianismo en Chequia: mostrar que Dios no tiene nada que ver con una religión medieval, sino que actúa entre nosotros de una manera actual y fascinante. La Iglesia no es un templo ni un conjunto de ritos anquilosados, sino ante todo su familia. Jesús no fundó una organización; nos dio la posibilidad de un encuentro personal con Dios Padre.',
      p3: 'Anhelamos que los jóvenes que quieren algo más de la vida construyan sobre Él y sobre su palabra.'
    },
    believe: {
      eyebrow: 'En qué creemos',
      h2: 'Siete puntos en los que coincidimos',
      p: 'No se trata de un documento teológico exhaustivo, sino del núcleo que nos mantiene unidos.',
      b1t: 'La Biblia',      b1d: 'La Biblia es la Palabra inspirada de Dios y la máxima autoridad para la fe y la vida diaria.',
      b2t: 'Dios',           b2d: 'Creemos en un solo Dios, que se revela como Padre, Hijo y Espíritu Santo.',
      b3t: 'Jesucristo',     b3d: 'Jesús es el Hijo de Dios. Murió por nuestros pecados, resucitó y vive.',
      b4t: 'La salvación',   b4d: 'La salvación es un don de la gracia de Dios que se recibe por la fe; no es una recompensa por nuestros méritos.',
      b5t: 'El Espíritu Santo', b5d: 'El Espíritu Santo da fuerza para vivir la vida cristiana y capacita a la iglesia para servir a los demás.',
      b6t: 'La Iglesia',     b6d: 'La iglesia es una familia, no un edificio. Es una comunidad de personas que pertenecen a Cristo y unas a otras.',
      b7t: 'La esperanza',   b7d: 'Jesús volverá. La muerte no tiene la última palabra, y eso cambia nuestra manera de vivir hoy.'
    },
    lead: {
      eyebrow: 'Liderazgo',
      h2: 'Pastor Petr Lysek',
      role: 'Pastor y fundador de la iglesia',
      b1: 'Dirige el centro cristiano Sbor Víry desde su fundación en 2002. Nació en Třinec y es constructor de profesión. Encontró su pasión y su vocación en la construcción de una iglesia local fuerte y actual.',
      b2: 'Se convirtió a los quince años en una salida del grupo juvenil evangélico de Oldřichovice, donde sirvió hasta 1989. Después se implicó en el movimiento carismático y desde 1992 dirigió la congregación Siloe dentro de la Iglesia Apostólica. Sin embargo, quedó claro que Dios le había dado un carácter pionero y una vocación de reformador: el deseo de hacer por Dios y por los creyentes algo que nadie en la zona había visto antes lo llevó a fundar Sbor Víry.',
      b3: 'Es un orador con talento que sabe inspirar. Predica una Palabra llena de fe y entusiasmo, pero también con una buena dosis de humor. La sobriedad de la mente, un cambio de vida sensato, el conocimiento de los principios de Dios y el trabajo sobre el carácter son sus temas principales.',
      b4: 'Durante muchos años sirvió junto a su esposa Marcela, que falleció repentinamente en enero de 2024. Su perseverancia, su fidelidad a la Palabra, su entrega y su optimismo inagotable ayudaron a muchas personas a descubrir la fe en Dios y en su palabra. Ambos creyeron en la iglesia como un cuerpo formado por personas: nunca buscaron una popularidad excesiva, sino que construyeron sobre el trabajo en equipo. Trabajar con las personas y para las personas es donde el pastor Petr sigue encontrando el sentido de su servicio.'
    },
    legal: {
      eyebrow: 'Datos de la organización', h2: 'Información legal',
      orgLabel: 'Denominación', venueLabel: 'Lugar de reunión', icoLabel: 'CIF (IČO)', pastorLabel: 'Representante legal'
    }
  },

  first: {
    hero: { eyebrow: '¿Es tu primera vez?', h1: 'No tienes nada que temer', p: 'Sabemos que llegar por primera vez a un sitio lleno de desconocidos no es fácil. Aquí tienes una descripción sincera de lo que te espera, sin sorpresas.' },
    steps: {
      eyebrow: 'Paso a paso',
      h2: 'Cómo es un domingo por la mañana',
      s1t: 'Llegas y aparcas',            s1d: 'Se puede aparcar justo al lado del edificio. La entrada es compartida con otros inquilinos: nuestra parte está justo a la derecha al pasar la puerta. El edificio abre a las 10:30, así que puedes llegar sin prisas.',
      s2t: 'Alguien te da la bienvenida', s2d: 'En la entrada te recibirá alguien de la iglesia, te orientará y responderá a tus preguntas. En el vestíbulo hay una sala con sillones y mesas donde, antes de empezar, puedes tomar un café o un té con algo ligero y conocer a alguien con calma. No hay que apuntarse en ningún sitio ni rellenar nada.',
      s3t: 'La alabanza empieza a las 11:00', s3d: 'Los primeros veinticinco minutos aproximadamente cantamos juntos. Puedes cantar, estar de pie, sentarte o simplemente escuchar; como te resulte más cómodo.',
      s4t: 'Después viene la enseñanza',  s4d: 'La predicación dura entre 35 y 45 minutos. Hablamos con claridad y procuramos conectar la Biblia con la vida cotidiana.',
      s5t: 'Te quedas a tomar café',      s5d: 'Al terminar hay tiempo para conversar. Si prefieres marcharte discretamente, también está perfectamente bien.'
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      h2: 'Lo que más nos preguntan',
      q1: '¿Cómo debo vestir?',                        a1: 'Como te sientas cómodo. Aquí verás tanto sudaderas como camisas. No juzgamos a nadie por su ropa.',
      q2: '¿Tengo que pagar o dar algo?',              a2: 'No. La entrada es gratuita. Durante el culto se recoge una ofrenda voluntaria, pero nadie te observa ni espera nada de ti.',
      q3: 'No soy creyente. ¿Puedo venir igualmente?', a3: 'Por supuesto. Muchas personas vinieron aquí durante mucho tiempo antes de decidirse a creer en algo. Las preguntas y las dudas son bienvenidas.',
      q4: '¿Cuánto dura todo?',                        a4: 'El culto dura unos 90 minutos. Después hay un rato informal para tomar café y charlar.',
      q5: '¿Qué hago con mis hijos?',                  a5: 'Los niños son muy bienvenidos y pueden estar contigo durante todo el culto. De momento no tenemos un programa aparte para niños: la iglesia está formada hoy en día sobre todo por adultos.',
      q6: '¿Tengo que inscribirme antes?',             a6: 'No. Basta con venir.',
      q7: '¿En qué idioma es el culto?',               a7: 'Los cultos son en checo. Por la cercanía de la frontera, también encontrarás aquí personas que hablan polaco. Si necesitas ayuda con el idioma, escríbenos con antelación y lo resolvemos.',
      q8: '¿El edificio es accesible?',                 a8: 'En la entrada hay una rampa por la que se entra sin problema con un cochecito de bebé. Para una silla de ruedas resulta algo empinada, así que recomendamos venir acompañado. Avísanos con antelación y te ayudaremos con mucho gusto.'
    },
    cta: { h2: '¿Te queda alguna duda?', p: 'Escríbenos. Solemos responder en un par de días y nadie te va a presionar para nada.' }
  },

  sermons: {
    hero: { eyebrow: 'Predicaciones', h1: 'Escucha cuando quieras', p: 'Llevamos años publicando de forma sistemática nuestras predicaciones y las grabaciones de las conferencias. Lo encontrarás todo en nuestro canal de YouTube, gratis y sin registrarte.' },
    live: { eyebrow: 'Lo más reciente', h2: 'La última grabación del canal' },
    channel: {
      eyebrow: 'Archivo',
      h2: 'Todo el archivo en YouTube',
      p: 'En el canal encontrarás las predicaciones dominicales, series temáticas y las grabaciones completas de las conferencias. Suscríbete para no perderte nada.'
    },
    follow: { h2: 'Síguenos también aquí', p: 'Compartimos vídeos, fotografías y avisos rápidos en Facebook e Instagram.' }
  },

  photos: { hero: 'Un culto dominical de Sbor Víry en Třinec', about1: 'El pastor Petr Lysek hablando a los jóvenes', about2: 'Manos levantadas en la alabanza', pastor: 'El pastor Petr Lysek sosteniendo una Biblia en alto', first: 'La mesa con el refrigerio en el vestíbulo' },
  gallery: { eyebrow: 'Galería', h2: 'Mira cómo es esto por dentro', p: 'Algunas fotos de nuestras reuniones y de la vida de la iglesia.', alt: 'De la vida de Sbor Víry en Třinec' },
  news: {
    hero: { eyebrow: 'Novedades', h1: 'Qué está pasando', p: 'Noticias, eventos, conferencias y anuncios de la vida de nuestra iglesia.' },
    empty: 'Todavía no hay novedades publicadas.',
    readMore: 'Seguir leyendo'
  },

  ministries: {
    hero: { eyebrow: 'Qué hacemos', h1: 'La iglesia es mucho más que el domingo', p: 'Además del culto dominical nos reunimos para orar y cada lunes salimos con el evangelio al centro de Třinec.' },
    m1t: 'Culto dominical',     m1d: 'La reunión principal de toda la iglesia. Empezamos a las 11:00 con la alabanza, seguida de enseñanza bíblica, oración y tiempo los unos con los otros.',
    m2t: 'Alabanza y música',   m2d: 'El equipo que prepara la parte musical del culto. También damos la bienvenida a nuevos músicos.',
    m3t: 'Evangelización en la ciudad', m3d: 'Cada lunes por la tarde estamos en la plaza T. G. Masaryk, hablamos con la gente y ofrecemos orar con ellos.',
    m4t: 'Oración',             m4d: 'Reuniones de oración entre semana. Oramos por la iglesia, por personas concretas y por Třinec.',
    cta: { h2: '¿Quieres participar?', p: 'Cuéntanos qué te interesa y te pondremos en contacto con las personas adecuadas.' }
  },

  give: {
    hero: { eyebrow: 'Apóyanos', h1: 'Tu apoyo tiene sentido', p: 'El funcionamiento de la iglesia, la evangelización en la ciudad y la ayuda a personas necesitadas se financian con ofrendas voluntarias.' },
    why: {
      eyebrow: 'Por qué ofrendar',
      h2: 'A qué se destinan tus ofrendas',
      i1: 'al mantenimiento del local donde nos reunimos;',
      i2: 'a la evangelización en el centro de la ciudad: materiales e impresión;',
      i3: 'a grabar y publicar las predicaciones y conferencias;',
      i4: 'a la ayuda práctica a personas en situación difícil;',
      i5: 'al apoyo de la labor misionera y benéfica.',
      note: 'Ninguna cantidad es demasiado pequeña y aquí nadie es valorado por lo que da. La ofrenda es totalmente voluntaria.'
    },
    bank: {
      eyebrow: 'Datos bancarios',
      h2: 'Cómo hacer tu donativo',
      bank: 'Banco', account: 'Número de cuenta', iban: 'IBAN', swift: 'SWIFT / BIC', vs: 'Símbolo variable', owner: 'Titular de la cuenta',
      todo: 'Los datos bancarios aún no están completados. Añádelos en el archivo assets/js/content.js.',
      hint: 'Puedes indicar el destino de tu donativo en el concepto, por ejemplo «niños» o «misión».'
    },
    receipt: { h2: 'Certificado del donativo', p: 'Si necesitas un certificado de tu donativo para fines fiscales, escríbenos por correo electrónico y te lo emitiremos con mucho gusto.' }
  },

  contact: {
    hero: { eyebrow: 'Contacto', h1: 'Ponte en contacto', p: '¿Tienes alguna pregunta, necesitas oración o simplemente quieres hablar? Escríbenos.' },
    labels: { venue: 'Dónde nos reunimos', email: 'Correo electrónico', messenger: 'Escríbenos por Facebook', phone: 'Teléfono', pastor: 'Pastor', ico: 'CIF (IČO)', social: 'Redes sociales' },
    form: {
      h2: 'Escríbenos',
      p: 'Solemos responder en un plazo de dos días laborables.',
      name: 'Nombre y apellidos', email: 'Correo electrónico', phone: 'Teléfono (opcional)',
      subject: 'Asunto', message: 'Tu mensaje',
      subjectOptions: ['Consulta general', 'Quiero visitaros', 'Petición de oración', 'Evangelización', 'Otro'],
      consent: 'Acepto que Sbor Víry, z. s. trate mis datos con el fin de responder a este mensaje.',
      send: 'Enviar mensaje',
      hint: 'El formulario abrirá tu programa de correo con el mensaje ya redactado.'
    },
    map: { h2: 'Dónde encontrarnos', p: 'Hraniční 213, 739 61 Třinec, Chequia. Se puede aparcar justo al lado del edificio. La entrada al edificio es compartida con otros inquilinos; nuestra parte está justo a la derecha al entrar.' }
  },

  footer: {
    tagline: 'Iglesia cristiana en Třinec. Nos reunimos todos los domingos y nos encantaría verte entre nosotros.',
    explore: 'Sitio', connect: 'Síguenos', visit: 'Visítanos',
    rights: 'Todos los derechos reservados.',
    privacy: 'Política de privacidad'
  },

  notfound: { h1: 'No hemos encontrado esta página', p: 'Es probable que el enlace ya no sea válido o que la página se haya movido. Prueba a empezar de nuevo.', btn: 'Volver al inicio' },

  privacy: {
    hero: { eyebrow: 'Información legal', h1: 'Política de privacidad', p: 'En pocas palabras y sin jerga jurídica: qué datos tuyos tratamos y para qué.' },
    h2a: 'Quién es el responsable del tratamiento',
    pa: 'El responsable del tratamiento de los datos personales es Sbor Víry, z. s., CIF 26596865, dirección de contacto: Hraniční 213, 739 61 Třinec (Chequia).',
    h2b: 'Qué datos tratamos',
    pb: 'Tratamos únicamente los datos que tú mismo nos envías a través del formulario de contacto o por correo electrónico: normalmente el nombre, la dirección de correo, en su caso el teléfono y el contenido de tu mensaje.',
    h2c: 'Para qué los tratamos',
    pc: 'Exclusivamente para poder responderte. No vendemos tus datos ni los cedemos a terceros con fines comerciales.',
    h2d: 'Cookies y medición de visitas',
    pd: 'Este sitio no utiliza cookies de seguimiento ni de publicidad. Los vídeos de YouTube incrustados y los mapas pueden guardar sus propias cookies según las condiciones de sus respectivos proveedores.',
    h2e: 'Tus derechos',
    pe: 'Tienes derecho a acceder a tus datos, a rectificarlos y a solicitar su supresión. Basta con escribirnos a nuestra dirección de contacto y lo gestionaremos.'
  }
}

};
