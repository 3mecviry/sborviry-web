/* ============================================================================
   SBOR VÍRY — PŘEKLADY VŠECH TEXTŮ NA WEBU
   ----------------------------------------------------------------------------
   Struktura je ve všech jazycích STEJNÁ.
   Chcete-li změnit text, najděte jeho klíč (např. home.hero.h1)
   a upravte hodnotu v jazycích, které používáte.

   cs = čeština · sk = slovenština · pl = polština · uk = ukrajinština
   ru = ruština · de = němčina · en = angličtina · es = španělština
   sv = švédština · hu = maďarština

   Chybí-li klíč v některém jazyce, použije se automaticky česká verze.
   Pořadí jazyků v přepínači se řídí polem LANGS v souboru site.js.
   ========================================================================== */

const I18N = {

/* ########  ČEŠTINA  ######################################################## */
cs: {
  langName: 'Čeština',
  // Krátké představení pro vyhledávače a AI — díky němu nás nespletou
  // s podobně znějícími sbory jinde. Ve strukturovaných datech jde
  // do pole disambiguatingDescription (viz renderSchema v site.js).
  identita: 'Křesťanský sbor v Třinci na adrese Hraniční 213. Zapsaný spolek, IČO 26596865, působí od roku 2002.',
  meta: {
    home: {
      title: 'Sbor Víry — Třinec | křesťanský sbor',
      desc: 'Sbor Víry, z. s. — křesťanský sbor v Třinci. Bohoslužby každou neděli na adrese Hraniční 213. Přijď takový, jaký jsi.'
    },
    about: {
      title: 'O nás | Sbor Víry — Třinec',
      desc: 'Kdo jsme, čemu věříme a jak sbor vznikl. Sbor Víry, z. s., Hraniční 213, Třinec.'
    },
    first: {
      title: 'Jsem tu poprvé | Sbor Víry — Třinec',
      desc: 'Co vás čeká, když k nám přijdete poprvé. Praktické odpovědi na běžné otázky.'
    },
    sermons: {
      title: 'Kázání a záznamy | Sbor Víry — Třinec',
      desc: 'Záznamy kázání a konferencí na našem YouTube kanálu.'
    },
    news: {
      title: 'Aktuality | Sbor Víry — Třinec',
      desc: 'Novinky, akce a oznámení ze života sboru.'
    },
    ministries: {
      title: 'Co u nás najdete | Sbor Víry — Třinec',
      desc: 'Nedělní bohoslužby, chvály, evangelizace v centru Třince a modlitba.'
    },
    give: {
      title: 'Podpořte nás | Sbor Víry — Třinec',
      desc: 'Jak můžete podpořit službu sboru dobrovolným darem.'
    },
    contact: {
      title: 'Kontakt | Sbor Víry — Třinec',
      desc: 'Hraniční 213, 739 61 Třinec. Napište nám nebo se stavte.'
    },
    privacy: {
      title: 'Ochrana osobních údajů | Sbor Víry — Třinec',
      desc: 'Jak Sbor Víry, z. s., v Třinci nakládá s osobními údaji z kontaktního formuláře a jaká máte podle GDPR práva.'
    },
    notfound: {
      title: 'Stránka nenalezena | Sbor Víry — Třinec',
      desc: ''
    }
  },
  ui: {
    skip: 'Přejít na hlavní obsah',
    menu: 'Menu',
    language: 'Jazyk',
    photoPlaceholder: 'Místo pro fotografii',
    loading: 'Načítání…'
  },
  nav: {
    home: 'Domů',
    about: 'O nás',
    first: 'Poprvé u nás',
    sermons: 'Kázání',
    news: 'Aktuality',
    ministries: 'Co děláme',
    give: 'Podpořte nás',
    contact: 'Kontakt'
  },
  cta: {
    first: 'Jsem tu poprvé',
    watch: 'Sledovat kázání',
    contact: 'Napište nám',
    more: 'Zjistit více',
    allNews: 'Všechny aktuality',
    youtube: 'Otevřít YouTube kanál',
    directions: 'Zobrazit trasu',
    join: 'Přijďte mezi nás',
    support: 'Podpořit sbor'
  },
  home: {
    hero: {
      eyebrow: 'Křesťanský sbor v Třinci',
      h1: 'Přijď takový,<br>jaký jsi',
      lead: 'Jsme obyčejní lidé, kteří zažili, že Bůh mění životy. Scházíme se v Třinci každou neděli a rádi mezi sebou uvidíme i tebe.',
      m1: 'Bohoslužba',
      m2: 'Kde se scházíme',
      m3: 'Sledujte online'
    },
    welcome: {
      eyebrow: 'Vítejte',
      h2: 'Nezáleží na tom, odkud přicházíte',
      p: 'Nezáleží na tom, kolik vám je let, čemu dnes věříte, jak se oblékáte ani co máte za sebou. U nás máte své místo — a nikdo od vás nebude nic vyžadovat.',
      c1t: 'Nedělní bohoslužba',
      c1d: 'V 11:00 začínáme společnými chválami, pokračujeme vyučováním z Bible a modlitbou. Budova je otevřená už od 10:30.',
      c2t: 'Evangelizace ve městě',
      c2d: 'Každé pondělí odpoledne stojíme na náměstí T. G. Masaryka a sdílíme evangelium s lidmi v Třinci.',
      c3t: 'Modlitba',
      c3d: 'Scházíme se také k modlitbám — za sbor, za konkrétní lidi i za naše město.'
    },
    times: {
      eyebrow: 'Kdy a kde',
      h2: 'Setkáváme se pravidelně',
      p: 'Hlavní setkání celého sboru je v neděli dopoledne. Během týdne se scházíme na domácích skupinkách, k modlitbám a vycházíme s evangeliem do centra města.',
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
      v1t: 'Bible',
      v1d: 'Vyučujeme z Písma srozumitelně a bez zbytečných náboženských frází.',
      v2t: 'Modlitba',
      v2d: 'Počítáme s tím, že Bůh slyší a jedná. Modlíme se za lidi i za naše město.',
      v3t: 'Rodina',
      v3d: 'Sbor není budova ani program. Jsou to konkrétní lidé, kteří o sebe stojí.',
      v4t: 'Otevřenost',
      v4d: 'Dveře jsou otevřené každému. Otázky a pochybnosti u nás nejsou problém.'
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
    hero: {
      eyebrow: 'O nás',
      h1: 'Sbor, který stojí na lidech',
      p: 'Jsme společenství křesťanů v Třinci. Věříme, že křesťanství není soubor pravidel, ale živý vztah, který proměňuje běžný život.'
    },
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
      b1t: 'Bible',
      b1d: 'Bible je inspirované Boží slovo a nejvyšší autorita pro víru i každodenní život.',
      b2t: 'Bůh',
      b2d: 'Věříme v jednoho Boha, který se zjevuje jako Otec, Syn a Duch svatý.',
      b3t: 'Ježíš Kristus',
      b3d: 'Ježíš je Boží Syn. Zemřel za naše hříchy, byl vzkříšen a žije.',
      b4t: 'Záchrana',
      b4d: 'Spasení je Boží dar z milosti, který přijímáme vírou — není to odměna za naše výkony.',
      b5t: 'Duch svatý',
      b5d: 'Duch svatý dává sílu žít křesťanský život a obdarovává církev pro službu druhým.',
      b6t: 'Církev',
      b6d: 'Církev je rodina, ne budova. Je to společenství lidí, kteří patří Kristu i sobě navzájem.',
      b7t: 'Naděje',
      b7d: 'Ježíš se vrátí. Smrt nemá poslední slovo a to mění způsob, jak žijeme dnes.'
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
      eyebrow: 'Údaje o organizaci',
      h2: 'Právní informace',
      orgLabel: 'Název',
      venueLabel: 'Místo shromáždění',
      icoLabel: 'IČO',
      pastorLabel: 'Statutární zástupce'
    }
  },
  first: {
    hero: {
      eyebrow: 'Jste tu poprvé?',
      h1: 'Nemusíte se ničeho bát',
      p: 'Víme, že přijít poprvé mezi neznámé lidi není jednoduché. Tady je poctivý popis toho, co vás čeká — bez překvapení.'
    },
    steps: {
      eyebrow: 'Krok za krokem',
      h2: 'Jak vypadá nedělní dopoledne',
      p: 'Budova se otevírá v 10:30, bohoslužba začíná v 11:00 a trvá přibližně 90 minut. Potom je čas na kávu — a odejít můžete, kdykoli budete chtít.',
      s1t: 'Přijedete a zaparkujete',
      s1d: 'Parkovat lze přímo u budovy. Vchod je společný s dalšími nájemci — naše část se nachází hned vpravo za dveřmi. Budova je otevřená od 10:30, takže můžete dorazit v klidu.',
      s2t: 'Někdo vás přivítá',
      s2d: 'U vchodu vás potká někdo z našich lidí, poradí vám a odpoví na otázky. V předsálí je místnost s křesly a stoly, kde si můžete před začátkem dát kávu, čaj a drobné občerstvení a v klidu se s někým seznámit. Nikam se nezapisujete a nic nevyplňujete.',
      s3t: 'V 11:00 začínají chvály',
      s3d: 'Prvních zhruba dvacet pět minut společně zpíváme. Můžete zpívat, stát, sedět nebo jen poslouchat — jak je vám příjemné.',
      s4t: 'Následuje vyučování',
      s4d: 'Kázání trvá zhruba 35 až 45 minut. Mluvíme srozumitelně a snažíme se propojit Bibli s běžným životem.',
      s5t: 'Zůstanete na kávu',
      s5d: 'Po skončení je čas na rozhovor. Pokud budete raději chtít nenápadně odejít, je to naprosto v pořádku.'
    },
    faq: {
      eyebrow: 'Časté otázky',
      h2: 'Na co se lidé ptají nejčastěji',
      q1: 'Jak se mám obléct?',
      a1: 'Jak je vám příjemné. Potkáte u nás mikiny i košile. Nikoho nehodnotíme podle oblečení.',
      q2: 'Musím něco platit nebo dávat?',
      a2: 'Ne. Vstup je zdarma. Během bohoslužby probíhá dobrovolná sbírka, ale nikdo vás nesleduje a nikdo od vás nic neočekává.',
      q3: 'Nejsem věřící. Můžu vůbec přijít?',
      a3: 'Samozřejmě. Řada lidí k nám chodila dlouho předtím, než se rozhodli něčemu věřit. Otázky a pochybnosti jsou u nás vítané.',
      q4: 'Jak dlouho to celé trvá?',
      a4: 'Bohoslužba trvá přibližně 90 minut. Po ní následuje nezávazný čas na kávu a rozhovor.',
      q5: 'Co mám dělat s dětmi?',
      a5: 'Děti jsou vítané a mohou být na bohoslužbě s vámi. Samostatný program pro děti v tuto chvíli nemáme — sbor dnes tvoří převážně dospělí.',
      q6: 'Musím se předem registrovat?',
      a6: 'Ne. Stačí prostě přijít.',
      q7: 'V jakém jazyce probíhá bohoslužba?',
      a7: 'Bohoslužby probíhají v češtině. Vzhledem k blízkosti hranice u nás potkáte i polsky mluvící. Pokud byste potřebovali pomoc s jazykem, napište nám předem a domluvíme se.',
      q8: 'Je budova bezbariérová?',
      a8: 'U vchodu je rampa, po které se bez potíží dostanete dovnitř s kočárkem. Pro invalidní vozík je ale poměrně strmá, takže doporučujeme doprovod. Dejte nám vědět dopředu a rádi vám pomůžeme.'
    },
    cta: {
      h2: 'Máte ještě otázku?',
      p: 'Napište nám. Odpovíme obyčejně do dvou dnů a nikdo vás nebude nikam tlačit.'
    }
  },
  sermons: {
    hero: {
      eyebrow: 'Kázání',
      h1: 'Poslouchejte kdykoli',
      p: 'Kázání a záznamy z konferencí zveřejňujeme systematicky už řadu let. Všechno najdete na našem YouTube kanálu — zdarma a bez registrace.'
    },
    playBtn: 'Přehrát nejnovější video',
    live: {
      eyebrow: 'Nejnovější',
      h2: 'Poslední záznam z kanálu'
    },
    channel: {
      eyebrow: 'Archiv',
      h2: 'Celý archiv na YouTube',
      p: 'Na kanálu najdete jednotlivá nedělní kázání, tematické série i celé záznamy z konferencí. Odebírejte kanál a nic vám neuteče.'
    },
    links: {
      videos: 'Videa',
      playlists: 'Playlisty'
    },
    cards: {
      c1t: 'Nedělní kázání',
      c1d: 'Záznamy jednotlivých nedělních bohoslužeb — vyučování z Bible, sdílení a modlitba.',
      c2t: 'Konference a hosté',
      c2d: 'Delší záznamy z konferencí a z hostů, které jsme u nás přivítali.'
    },
    follow: {
      h2: 'Sledujte nás i jinde',
      p: 'Videa, fotografie a rychlá oznámení sdílíme také na Facebooku a Instagramu.'
    }
  },
  photos: {
    hero: 'Nedělní bohoslužba Sboru Víry v Třinci',
    about1: 'Pastor Petr Lysek mluví k mladým lidem',
    about2: 'Zdvižené ruce při chválách',
    pastor: 'Pastor Petr Lysek se zdviženou Biblí',
    first: 'Předsálí s křesly a stolky, kde se lidé scházejí před bohoslužbou'
  },
  gallery: {
    prev: 'Předchozí fotky',
    next: 'Další fotky',
    pause: 'Pozastavit posouvání',
    play: 'Spustit posouvání',
    slide: 'Fotka %1 z %2',
    page: 'Skupina fotek %1 z %2',
    eyebrow: 'Fotogalerie',
    h2: 'Podívejte se, jak to u nás vypadá',
    p: 'Několik snímků z našich setkání a ze života sboru.',
    alt: 'Ze života Sboru Víry v Třinci'
  },
  news: {
    hero: {
      eyebrow: 'Aktuality',
      h1: 'Co se u nás děje',
      p: 'Novinky, akce, konference a oznámení ze života sboru.'
    },
    empty: 'Zatím tu nejsou žádné aktuality.',
    readMore: 'Číst dál'
  },
  ministries: {
    hero: {
      eyebrow: 'Co u nás najdete',
      h1: 'Sbor není jen neděle',
      p: 'Kromě nedělní bohoslužby se ve čtvrtek scházíme na domácích skupinkách, modlíme se a každé pondělí vycházíme s evangeliem do centra Třince.'
    },
    m1t: 'Nedělní bohoslužba',
    m1d: 'Hlavní setkání celého sboru. V 11:00 začínáme chválami, následuje vyučování z Bible, modlitba a čas pro sebe navzájem.',
    m2t: 'Chvály a hudba',
    m2d: 'Skupina lidí, která připravuje hudební část bohoslužby. Rádi mezi sebou uvítáme i nové hudebníky.',
    m3t: 'Evangelizace ve městě',
    m3d: 'Každé pondělí odpoledne stojíme na náměstí T. G. Masaryka, mluvíme s lidmi a nabízíme modlitbu.',
    m4t: 'Modlitba',
    m4d: 'Modlitební setkání během týdne. Modlíme se za sbor, za konkrétní lidi i za Třinec.',
    cta: {
      h2: 'Chcete se zapojit?',
      p: 'Napište nám, o co máte zájem, a propojíme vás s těmi správnými lidmi.'
    },
    m5t: 'Domácí skupinky',
    m5d: 'Ve čtvrtek v 18:00 se scházíme v menších skupinkách po domácnostech — čteme Bibli, mluvíme o životě a společně se modlíme. Tady se lidé poznají doopravdy. Napište nám a rádi vás nasměrujeme do některé ze skupinek.'
  },
  give: {
    hero: {
      eyebrow: 'Podpořte nás',
      h1: 'Vaše podpora má smysl',
      p: 'Provoz sboru, evangelizaci ve městě i pomoc lidem v nouzi financujeme z dobrovolných darů.'
    },
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
      bank: 'Banka',
      account: 'Číslo účtu',
      iban: 'IBAN',
      swift: 'SWIFT / BIC',
      vs: 'Variabilní symbol',
      owner: 'Majitel účtu',
      todo: 'Bankovní údaje zatím nejsou vyplněny. Doplňte je v souboru assets/js/content.js.',
      hint: 'Do zprávy pro příjemce můžete uvést účel daru, například „děti“ nebo „misie“.'
    },
    receipt: {
      h2: 'Potvrzení o daru',
      p: 'Pokud potřebujete potvrzení o daru pro daňové účely, napište nám na e-mail a rádi vám ho vystavíme.'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Kontakt',
      h1: 'Ozvěte se nám',
      p: 'Máte otázku, potřebujete se za něco modlit nebo si jen chcete promluvit? Napište nám.'
    },
    labels: {
      venue: 'Kde se scházíme',
      email: 'E-mail',
      messenger: 'Napište nám na Facebooku',
      phone: 'Telefon',
      pastor: 'Pastor',
      ico: 'IČO',
      social: 'Sociální sítě'
    },
    form: {
      h2: 'Napište nám',
      p: 'Odpovídáme obvykle do dvou pracovních dnů.',
      name: 'Jméno a příjmení',
      email: 'E-mail',
      phone: 'Telefon (nepovinné)',
      subject: 'Předmět',
      message: 'Vaše zpráva',
      subjectOptions: [
        'Obecný dotaz',
        'Chci přijít poprvé',
        'Prosba o modlitbu',
        'Evangelizace',
        'Jiné'
      ],
      consent: 'Souhlasím s tím, aby Sbor Víry, z. s., zpracoval mé údaje za účelem odpovědi na tuto zprávu.',
      send: 'Odeslat zprávu',
      hint: 'Formulář otevře váš e-mailový program s předvyplněnou zprávou.'
    },
    map: {
      h2: 'Kde nás najdete',
      p: 'Hraniční 213, 739 61 Třinec. Parkovat lze přímo u budovy. Vchod do budovy je společný s dalšími nájemci; sborová část se nachází hned vpravo za dveřmi.'
    }
  },
  footer: {
    tagline: 'Křesťanský sbor v Třinci. Scházíme se každou neděli a rádi mezi sebou uvidíme i vás.',
    explore: 'Web',
    connect: 'Sledujte nás',
    visit: 'Navštivte nás',
    rights: 'Všechna práva vyhrazena.',
    privacy: 'Ochrana osobních údajů'
  },
  notfound: {
    h1: 'Tuhle stránku jsme nenašli',
    p: 'Odkaz je nejspíš neplatný nebo se stránka přesunula. Zkuste to od začátku.',
    btn: 'Zpět na úvod'
  },
  privacy: {
    hero: {
      eyebrow: 'Právní informace',
      h1: 'Ochrana osobních údajů',
      p: 'Stručně a bez právničiny: jaké údaje o vás zpracováváme a proč.'
    },
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

/* ########  SLOVENŠTINA  #################################################### */
sk: {
  langName: 'Slovenčina',
  // Krátké představení pro vyhledávače a AI — díky němu nás nespletou
  // s podobně znějícími sbory jinde. Ve strukturovaných datech jde
  // do pole disambiguatingDescription (viz renderSchema v site.js).
  identita: 'Kresťanský zbor v Třinci na adrese Hraniční 213. Zapísaný spolok, IČO 26596865, pôsobí od roku 2002.',
  meta: {
    home: {
      title: 'Sbor Víry — Třinec | kresťanský zbor',
      desc: 'Sbor Víry, z. s. — kresťanský zbor v Třinci. Bohoslužby každú nedeľu na adrese Hraniční 213. Príď taký, aký si.'
    },
    about: {
      title: 'O nás | Sbor Víry — Třinec',
      desc: 'Kto sme, čomu veríme a ako zbor vznikol. Sbor Víry, z. s., Hraniční 213, Třinec.'
    },
    first: {
      title: 'Som tu prvýkrát | Sbor Víry — Třinec',
      desc: 'Čo vás čaká, keď k nám prídete prvýkrát. Praktické odpovede na bežné otázky.'
    },
    sermons: {
      title: 'Kázne a záznamy | Sbor Víry — Třinec',
      desc: 'Záznamy kázní a konferencií na našom kanáli YouTube.'
    },
    news: {
      title: 'Aktuality | Sbor Víry — Třinec',
      desc: 'Novinky, akcie a oznamy zo života zboru.'
    },
    ministries: {
      title: 'Čo u nás nájdete | Sbor Víry — Třinec',
      desc: 'Nedeľné bohoslužby, chvály, evanjelizácia v centre Třinca a modlitba.'
    },
    give: {
      title: 'Podporte nás | Sbor Víry — Třinec',
      desc: 'Ako môžete podporiť službu zboru dobrovoľným darom.'
    },
    contact: {
      title: 'Kontakt | Sbor Víry — Třinec',
      desc: 'Hraniční 213, 739 61 Třinec. Napíšte nám alebo sa zastavte.'
    },
    privacy: {
      title: 'Ochrana osobných údajov | Sbor Víry — Třinec',
      desc: 'Ako Sbor Víry, z. s., v Třinci narába s osobnými údajmi z kontaktného formulára a aké máte podľa GDPR práva.'
    },
    notfound: {
      title: 'Stránka sa nenašla | Sbor Víry — Třinec',
      desc: ''
    }
  },
  ui: {
    skip: 'Prejsť na hlavný obsah',
    menu: 'Menu',
    language: 'Jazyk',
    photoPlaceholder: 'Miesto pre fotografiu',
    loading: 'Načítava sa…'
  },
  nav: {
    home: 'Domov',
    about: 'O nás',
    first: 'Prvýkrát u nás',
    sermons: 'Kázne',
    news: 'Aktuality',
    ministries: 'Čo robíme',
    give: 'Podporte nás',
    contact: 'Kontakt'
  },
  cta: {
    first: 'Som tu prvýkrát',
    watch: 'Pozrieť kázne',
    contact: 'Napíšte nám',
    more: 'Zistiť viac',
    allNews: 'Všetky aktuality',
    youtube: 'Otvoriť kanál YouTube',
    directions: 'Zobraziť trasu',
    join: 'Príďte medzi nás',
    support: 'Podporiť zbor'
  },
  home: {
    hero: {
      eyebrow: 'Kresťanský zbor v Třinci',
      h1: 'Príď taký,<br>aký si',
      lead: 'Sme obyčajní ľudia, ktorí zažili, že Boh mení životy. Stretávame sa v Třinci každú nedeľu a radi medzi sebou uvidíme aj teba.',
      m1: 'Bohoslužba',
      m2: 'Kde sa stretávame',
      m3: 'Sledujte online'
    },
    welcome: {
      eyebrow: 'Vitajte',
      h2: 'Nezáleží na tom, odkiaľ prichádzate',
      p: 'Nezáleží na tom, koľko máte rokov, čomu dnes veríte, ako sa obliekate ani čo máte za sebou. U nás máte svoje miesto — a nikto od vás nebude nič vyžadovať.',
      c1t: 'Nedeľná bohoslužba',
      c1d: 'O 11:00 začíname spoločnými chválami, pokračujeme vyučovaním z Biblie a modlitbou. Budova je otvorená už od 10:30.',
      c2t: 'Evanjelizácia v meste',
      c2d: 'Každý pondelok popoludní stojíme na námestí T. G. Masaryka a delíme sa o evanjelium s ľuďmi v Třinci.',
      c3t: 'Modlitba',
      c3d: 'Stretávame sa aj na modlitbách — za zbor, za konkrétnych ľudí i za naše mesto.'
    },
    times: {
      eyebrow: 'Kedy a kde',
      h2: 'Stretávame sa pravidelne',
      p: 'Hlavné stretnutie celého zboru je v nedeľu dopoludnia. Počas týždňa sa stretávame na domácich skupinkách, k modlitbám a vychádzame s evanjeliom do centra mesta.',
      note: 'Budova je otvorená od 10:30. Časy sa môžu počas sviatkov a mimoriadnych akcií meniť — najaktuálnejšie informácie nájdete vždy na našom Facebooku.'
    },
    watch: {
      eyebrow: 'Online',
      h2: 'Kázne a záznamy z konferencií',
      p: 'Už roky systematicky zverejňujeme záznamy kázní a konferencií na svojom kanáli YouTube. Nestihli ste nedeľu? Môžete si ju pustiť kedykoľvek.',
      fallback: 'Pozrite si náš kanál a prehrajte si najnovšiu kázeň.'
    },
    quote: {
      text: 'Cirkev nie je chrám ani skostnatené obrady, ale predovšetkým Božia rodina. Ježiš netvoril organizáciu — dal nám možnosť osobného stretnutia s Bohom Otcom.',
      cite: 'Petr Lysek, pastor zboru'
    },
    values: {
      eyebrow: 'Na čom staviame',
      h2: 'Štyri veci, ktoré berieme vážne',
      v1t: 'Biblia',
      v1d: 'Vyučujeme z Písma zrozumiteľne a bez zbytočných náboženských fráz.',
      v2t: 'Modlitba',
      v2d: 'Počítame s tým, že Boh počuje a koná. Modlíme sa za ľudí aj za naše mesto.',
      v3t: 'Rodina',
      v3d: 'Zbor nie je budova ani program. Sú to konkrétni ľudia, ktorým na sebe záleží.',
      v4t: 'Otvorenosť',
      v4d: 'Dvere sú otvorené každému. Otázky a pochybnosti u nás nie sú problém.'
    },
    news: {
      eyebrow: 'Aktuality',
      h2: 'Čo sa u nás deje',
      p: 'Krátke správy o tom, čo práve prežívame a čo pripravujeme.'
    },
    cta: {
      h2: 'Uvidíme sa v nedeľu?',
      p: 'Nemusíte sa hlásiť vopred, nemusíte nič prinášať a nemusíte nič vedieť. Stačí prísť.'
    }
  },
  about: {
    hero: {
      eyebrow: 'O nás',
      h1: 'Zbor, ktorý stojí na ľuďoch',
      p: 'Sme spoločenstvo kresťanov v Třinci. Veríme, že kresťanstvo nie je súbor pravidiel, ale živý vzťah, ktorý premieňa bežný život.'
    },
    story: {
      eyebrow: 'Naša cesta',
      h2: 'Kto sme a kde sme začali',
      p1: 'Sbor Víry vznikol v Třinci v roku 2002. Snažíme sa pomáhať ľuďom pri hľadaní zmyslu života a kresťanských hodnôt. Odpovede na svoje otázky môžu nájsť v Biblii — základom našej práce je preto dôkladné oboznámenie sa s textami Písma.',
      p2: 'Poznanie Božieho slova formuje priebeh našich stretnutí a veriacim dáva odpovede na otázky každodenného života, či už ide o rodinu, medziľudské vzťahy alebo prácu. Pomáhame aj ľuďom, ktorí sa dostali na okraj spoločnosti, vrátiť sa do plnohodnotného života.',
      p3: 'Organizujeme verejné prednášky, a to aj s hosťami zo zahraničia, ktorí zastupujú podobné kresťanské hnutia. Premietame filmy s duchovnou tematikou pre širokú verejnosť a organizujeme koncerty a hudobné večery. Máme početné kontakty na cirkvi a organizácie v Česku, Poľsku, Maďarsku a na Slovensku.',
      p4: 'Veríme, že návrat ku skutočným kresťanským hodnotám je prospešný celej spoločnosti — v súčasnej generácii aj v tej budúcej.'
    },
    vision: {
      eyebrow: 'Naša vízia',
      h2: 'Kresťanské centrum pre naše mesto',
      p1: 'Túžime pozitívnym spôsobom ovplyvniť naše mesto tým, že tvoríme kresťanské centrum, v ktorom mnohí ľudia nájdu svoje miesto, posilnia nádej a zatúžia žiť pre Boha a pre druhých.',
      p2: 'Chceme tiež zmeniť obraz kresťanstva v Česku — ukázať, že Boh nemá nič spoločné so stredovekým náboženstvom, ale pôsobí medzi nami súčasným, fascinujúcim spôsobom. Cirkev nie je chrám ani skostnatené obrady, ale predovšetkým Jeho rodina. Ježiš netvoril organizáciu; dal nám možnosť osobného stretnutia s Bohom Otcom.',
      p3: 'Túžime, aby mladí ľudia, ktorí od života chcú niečo viac, stavali na Ňom a na Jeho slove.'
    },
    believe: {
      eyebrow: 'Čomu veríme',
      h2: 'Sedem bodov, na ktorých sa zhodneme',
      p: 'Nejde o vyčerpávajúci teologický dokument, ale o jadro, ktoré nás drží pokope.',
      b1t: 'Biblia',
      b1d: 'Biblia je inšpirované Božie slovo a najvyššia autorita pre vieru aj každodenný život.',
      b2t: 'Boh',
      b2d: 'Veríme v jedného Boha, ktorý sa zjavuje ako Otec, Syn a Duch Svätý.',
      b3t: 'Ježiš Kristus',
      b3d: 'Ježiš je Boží Syn. Zomrel za naše hriechy, bol vzkriesený a žije.',
      b4t: 'Záchrana',
      b4d: 'Spasenie je Boží dar z milosti, ktorý prijímame vierou — nie je to odmena za naše výkony.',
      b5t: 'Duch Svätý',
      b5d: 'Duch Svätý dáva silu žiť kresťanský život a obdarúva cirkev pre službu druhým.',
      b6t: 'Cirkev',
      b6d: 'Cirkev je rodina, nie budova. Je to spoločenstvo ľudí, ktorí patria Kristovi aj sebe navzájom.',
      b7t: 'Nádej',
      b7d: 'Ježiš sa vráti. Smrť nemá posledné slovo a to mení spôsob, akým žijeme dnes.'
    },
    lead: {
      eyebrow: 'Vedenie zboru',
      h2: 'Pastor Petr Lysek',
      role: 'Pastor a zakladateľ zboru',
      b1: 'Vedie kresťanské centrum Sbor Víry od jeho vzniku v roku 2002. Narodil sa v Třinci, povolaním je stavbár. Svoju vášeň a povolanie našiel v budovaní silnej a novodobej miestnej cirkvi.',
      b2: 'Obrátil sa v pätnástich rokoch na výjazde oldřichovickej evanjelickej mládeže, kde pôsobil až do roku 1989. Potom sa zapojil do charizmatického hnutia a od roku 1992 viedol Zbor Siloe pri Apoštolskej cirkvi. Ukázalo sa však, že ho Boh obdaril priekopníckou povahou a povolaním reformátora — túžba urobiť pre Boha a pre veriacich niečo, čo v okolí nikto predtým nevidel, ho priviedla k založeniu Sboru Víry.',
      b3: 'Je talentovaným rečníkom a inšpirátorom. Káže Slovo naplnené vierou a nadšením, ale aj s poriadnou dávkou humoru. Triezvosť mysle, múdra zmena života, poznanie Božích zásad a práca na charaktere — to sú hlavné témy, o ktorých hovorí.',
      b4: 'Dlhé roky slúžil spoločne s manželkou Marcelou, ktorá nečakane zomrela v januári 2024. Ich vytrvalosť, vernosť Slovu, angažovanosť a nekončiaci optimizmus pomohli mnohým ľuďom objaviť vieru v Boha a v Jeho slovo. Obaja verili v cirkev ako telo tvorené z ľudí — neusilovali sa o prílišnú popularitu, ale stavali na tímovej práci. Pracovať s ľuďmi a pre ľudí: v tom pastor Petr dodnes vidí zmysel svojej služby.'
    },
    legal: {
      eyebrow: 'Údaje o organizácii',
      h2: 'Právne informácie',
      orgLabel: 'Názov',
      venueLabel: 'Miesto zhromaždenia',
      icoLabel: 'IČO',
      pastorLabel: 'Štatutárny zástupca'
    }
  },
  first: {
    hero: {
      eyebrow: 'Ste tu prvýkrát?',
      h1: 'Nemusíte sa ničoho báť',
      p: 'Vieme, že prísť prvýkrát medzi neznámych ľudí nie je jednoduché. Tu je poctivý opis toho, čo vás čaká — bez prekvapení.'
    },
    steps: {
      eyebrow: 'Krok za krokom',
      h2: 'Ako vyzerá nedeľné dopoludnie',
      p: 'Budova sa otvára o 10:30, bohoslužba začína o 11:00 a trvá približne 90 minút. Potom je čas na kávu — a odísť môžete, kedykoľvek budete chcieť.',
      s1t: 'Prídete a zaparkujete',
      s1d: 'Parkovať sa dá priamo pri budove. Vchod je spoločný s ďalšími nájomcami — naša časť sa nachádza hneď vpravo za dverami. Budova je otvorená od 10:30, takže môžete doraziť v pokoji.',
      s2t: 'Niekto vás privíta',
      s2d: 'Pri vchode vás stretne niekto z našich ľudí, poradí vám a odpovie na otázky. V predsálí je miestnosť s kreslami a stolmi, kde si môžete pred začiatkom dať kávu, čaj a drobné občerstvenie a v pokoji sa s niekým zoznámiť. Nikam sa nezapisujete a nič nevypĺňate.',
      s3t: 'O 11:00 začínajú chvály',
      s3d: 'Prvých zhruba dvadsaťpäť minút spoločne spievame. Môžete spievať, stáť, sedieť alebo len počúvať — ako je vám príjemné.',
      s4t: 'Nasleduje vyučovanie',
      s4d: 'Kázeň trvá zhruba 35 až 45 minút. Hovoríme zrozumiteľne a snažíme sa prepojiť Bibliu s bežným životom.',
      s5t: 'Zostanete na kávu',
      s5d: 'Po skončení je čas na rozhovor. Ak budete radšej chcieť nenápadne odísť, je to úplne v poriadku.'
    },
    faq: {
      eyebrow: 'Časté otázky',
      h2: 'Na čo sa ľudia pýtajú najčastejšie',
      q1: 'Ako sa mám obliecť?',
      a1: 'Ako je vám príjemné. Stretnete u nás mikiny aj košele. Nikoho nehodnotíme podľa oblečenia.',
      q2: 'Musím niečo platiť alebo dávať?',
      a2: 'Nie. Vstup je zadarmo. Počas bohoslužby prebieha dobrovoľná zbierka, ale nikto vás nesleduje a nikto od vás nič neočakáva.',
      q3: 'Nie som veriaci. Môžem vôbec prísť?',
      a3: 'Samozrejme. Mnohí ľudia k nám chodili dlho predtým, než sa rozhodli niečomu veriť. Otázky a pochybnosti sú u nás vítané.',
      q4: 'Ako dlho to celé trvá?',
      a4: 'Bohoslužba trvá približne 90 minút. Po nej nasleduje nezáväzný čas na kávu a rozhovor.',
      q5: 'Čo mám robiť s deťmi?',
      a5: 'Deti sú vítané a môžu byť na bohoslužbe s vami. Samostatný program pre deti v tejto chvíli nemáme — zbor dnes tvoria prevažne dospelí.',
      q6: 'Musím sa vopred zaregistrovať?',
      a6: 'Nie. Stačí jednoducho prísť.',
      q7: 'V akom jazyku prebieha bohoslužba?',
      a7: 'Bohoslužby prebiehajú v češtine. Vzhľadom na blízkosť hranice u nás stretnete aj po poľsky hovoriacich. Ak by ste potrebovali pomoc s jazykom, napíšte nám vopred a dohodneme sa.',
      q8: 'Je budova bezbariérová?',
      a8: 'Pri vchode je rampa, po ktorej sa bez problémov dostanete dnu s kočíkom. Pre invalidný vozík je však pomerne strmá, takže odporúčame sprievod. Dajte nám vedieť vopred a radi vám pomôžeme.'
    },
    cta: {
      h2: 'Máte ešte otázku?',
      p: 'Napíšte nám. Odpovieme zvyčajne do dvoch dní a nikto vás nebude nikam tlačiť.'
    }
  },
  sermons: {
    hero: {
      eyebrow: 'Kázne',
      h1: 'Počúvajte kedykoľvek',
      p: 'Kázne a záznamy z konferencií zverejňujeme systematicky už roky. Všetko nájdete na našom kanáli YouTube — zadarmo a bez registrácie.'
    },
    playBtn: 'Prehrať najnovšie video',
    live: {
      eyebrow: 'Najnovšie',
      h2: 'Posledný záznam z kanála'
    },
    channel: {
      eyebrow: 'Archív',
      h2: 'Celý archív na YouTube',
      p: 'Na kanáli nájdete jednotlivé nedeľné kázne, tematické série aj celé záznamy z konferencií. Odoberajte kanál a nič vám neujde.'
    },
    links: {
      videos: 'Videá',
      playlists: 'Playlisty'
    },
    cards: {
      c1t: 'Nedeľné kázne',
      c1d: 'Záznamy jednotlivých nedeľných bohoslužieb — vyučovanie z Biblie, svedectvá a modlitba.',
      c2t: 'Konferencie a hostia',
      c2d: 'Dlhšie záznamy z konferencií a od hostí, ktorých sme u nás privítali.'
    },
    follow: {
      h2: 'Sledujte nás aj inde',
      p: 'Videá, fotografie a rýchle oznamy zdieľame aj na Facebooku a Instagrame.'
    }
  },
  photos: {
    hero: 'Nedeľná bohoslužba zboru Sbor Víry v Třinci',
    about1: 'Pastor Petr Lysek hovorí k mladým ľuďom',
    about2: 'Zdvihnuté ruky pri chválach',
    pastor: 'Pastor Petr Lysek so zdvihnutou Bibliou',
    first: 'Predsálie s kreslami a stolíkmi, kde sa ľudia stretávajú pred bohoslužbou'
  },
  gallery: {
    prev: 'Predchádzajúce fotky',
    next: 'Ďalšie fotky',
    pause: 'Pozastaviť posúvanie',
    play: 'Spustiť posúvanie',
    slide: 'Fotka %1 z %2',
    page: 'Skupina fotiek %1 z %2',
    eyebrow: 'Fotogaléria',
    h2: 'Pozrite sa, ako to u nás vyzerá',
    p: 'Niekoľko záberov z našich stretnutí a zo života zboru.',
    alt: 'Zo života zboru Sbor Víry v Třinci'
  },
  news: {
    hero: {
      eyebrow: 'Aktuality',
      h1: 'Čo sa u nás deje',
      p: 'Novinky, akcie, konferencie a oznamy zo života zboru.'
    },
    empty: 'Zatiaľ tu nie sú žiadne aktuality.',
    readMore: 'Čítať ďalej'
  },
  ministries: {
    hero: {
      eyebrow: 'Čo u nás nájdete',
      h1: 'Zbor nie je len nedeľa',
      p: 'Okrem nedeľnej bohoslužby sa vo štvrtok stretávame na domácich skupinkách, modlíme sa a každý pondelok vychádzame s evanjeliom do centra Třinca.'
    },
    m1t: 'Nedeľná bohoslužba',
    m1d: 'Hlavné stretnutie celého zboru. O 11:00 začíname chválami, nasleduje vyučovanie z Biblie, modlitba a čas jeden pre druhého.',
    m2t: 'Chvály a hudba',
    m2d: 'Skupina ľudí, ktorá pripravuje hudobnú časť bohoslužby. Radi medzi sebou privítame aj nových hudobníkov.',
    m3t: 'Evanjelizácia v meste',
    m3d: 'Každý pondelok popoludní stojíme na námestí T. G. Masaryka, rozprávame sa s ľuďmi a ponúkame modlitbu.',
    m4t: 'Modlitba',
    m4d: 'Modlitebné stretnutia počas týždňa. Modlíme sa za zbor, za konkrétnych ľudí i za Třinec.',
    cta: {
      h2: 'Chcete sa zapojiť?',
      p: 'Napíšte nám, o čo máte záujem, a prepojíme vás so správnymi ľuďmi.'
    },
    m5t: 'Domáce skupinky',
    m5d: 'Vo štvrtok o 18:00 sa stretávame v menších skupinkách po domácnostiach — čítame Bibliu, hovoríme o živote a spoločne sa modlíme. Tu sa ľudia spoznajú naozaj. Napíšte nám a radi vás nasmerujeme do niektorej zo skupiniek.'
  },
  give: {
    hero: {
      eyebrow: 'Podporte nás',
      h1: 'Vaša podpora má zmysel',
      p: 'Prevádzku zboru, evanjelizáciu v meste aj pomoc ľuďom v núdzi financujeme z dobrovoľných darov.'
    },
    why: {
      eyebrow: 'Prečo darovať',
      h2: 'Kam vaše dary idú',
      i1: 'prevádzka a údržba priestorov, kde sa stretávame;',
      i2: 'evanjelizácia v centre mesta — materiály a tlač;',
      i3: 'nahrávanie a zverejňovanie kázní a konferencií;',
      i4: 'praktická pomoc ľuďom v ťažkej životnej situácii;',
      i5: 'podpora misijnej a charitatívnej práce.',
      note: 'Žiadna suma nie je príliš malá a nikoho u nás nehodnotíme podľa toho, koľko dáva. Dar je úplne dobrovoľný.'
    },
    bank: {
      eyebrow: 'Bankové spojenie',
      h2: 'Ako poslať dar',
      bank: 'Banka',
      account: 'Číslo účtu',
      iban: 'IBAN',
      swift: 'SWIFT / BIC',
      vs: 'Variabilný symbol',
      owner: 'Majiteľ účtu',
      todo: 'Bankové údaje zatiaľ nie sú vyplnené. Doplňte ich v súbore assets/js/content.js.',
      hint: 'Do správy pre príjemcu môžete uviesť účel daru, napríklad „deti“ alebo „misia“.'
    },
    receipt: {
      h2: 'Potvrdenie o dare',
      p: 'Ak potrebujete potvrdenie o dare na daňové účely, napíšte nám e-mail a radi vám ho vystavíme.'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Kontakt',
      h1: 'Ozvite sa nám',
      p: 'Máte otázku, potrebujete sa za niečo modliť alebo si len chcete pohovoriť? Napíšte nám.'
    },
    labels: {
      venue: 'Kde sa stretávame',
      email: 'E-mail',
      messenger: 'Napíšte nám na Facebooku',
      phone: 'Telefón',
      pastor: 'Pastor',
      ico: 'IČO',
      social: 'Sociálne siete'
    },
    form: {
      h2: 'Napíšte nám',
      p: 'Odpovedáme zvyčajne do dvoch pracovných dní.',
      name: 'Meno a priezvisko',
      email: 'E-mail',
      phone: 'Telefón (nepovinné)',
      subject: 'Predmet',
      message: 'Vaša správa',
      subjectOptions: [
        'Všeobecná otázka',
        'Chcem prísť prvýkrát',
        'Prosba o modlitbu',
        'Evanjelizácia',
        'Iné'
      ],
      consent: 'Súhlasím s tým, aby Sbor Víry, z. s., spracoval moje údaje na účely odpovede na túto správu.',
      send: 'Odoslať správu',
      hint: 'Formulár otvorí váš e-mailový program s predvyplnenou správou.'
    },
    map: {
      h2: 'Kde nás nájdete',
      p: 'Hraniční 213, 739 61 Třinec. Parkovať sa dá priamo pri budove. Vchod do budovy je spoločný s ďalšími nájomcami; zborová časť sa nachádza hneď vpravo za dverami.'
    }
  },
  footer: {
    tagline: 'Kresťanský zbor v Třinci. Stretávame sa každú nedeľu a radi medzi sebou uvidíme aj vás.',
    explore: 'Web',
    connect: 'Sledujte nás',
    visit: 'Navštívte nás',
    rights: 'Všetky práva vyhradené.',
    privacy: 'Ochrana osobných údajov'
  },
  notfound: {
    h1: 'Túto stránku sme nenašli',
    p: 'Odkaz je zrejme neplatný alebo sa stránka presunula. Skúste to od začiatku.',
    btn: 'Späť na úvod'
  },
  privacy: {
    hero: {
      eyebrow: 'Právne informácie',
      h1: 'Ochrana osobných údajov',
      p: 'Stručne a bez právnickej reči: aké údaje o vás spracúvame a prečo.'
    },
    h2a: 'Kto je prevádzkovateľom údajov',
    pa: 'Prevádzkovateľom osobných údajov je Sbor Víry, z. s., IČO 26596865, kontaktná adresa Hraniční 213, 739 61 Třinec.',
    h2b: 'Aké údaje spracúvame',
    pb: 'Spracúvame iba údaje, ktoré nám sami pošlete prostredníctvom kontaktného formulára alebo e-mailu — typicky meno, e-mailovú adresu, prípadne telefón a obsah vašej správy.',
    h2c: 'Prečo ich spracúvame',
    pc: 'Výhradne preto, aby sme vám mohli odpovedať. Údaje nikomu nepredávame ani neposkytujeme tretím stranám na marketingové účely.',
    h2d: 'Cookies a meranie návštevnosti',
    pd: 'Táto stránka nepoužíva žiadne sledovacie ani reklamné cookies. Vložené videá z YouTube a mapové podklady môžu ukladať vlastné cookies podľa podmienok príslušných poskytovateľov.',
    h2e: 'Vaše práva',
    pe: 'Máte právo na prístup k svojim údajom, ich opravu aj vymazanie. Stačí nám napísať na kontaktný e-mail a vybavíme to.'
  }
},

/* ########  POLŠTINA  ####################################################### */
pl: {
  langName: 'Polski',
  // Krátké představení pro vyhledávače a AI — díky němu nás nespletou
  // s podobně znějícími sbory jinde. Ve strukturovaných datech jde
  // do pole disambiguatingDescription (viz renderSchema v site.js).
  identita: 'Zbór chrześcijański w Trzyńcu przy ulicy Hraniční 213. Stowarzyszenie rejestrowe, IČO 26596865, działa od 2002 roku.',
  meta: {
    home: {
      title: 'Sbor Víry — Trzyniec | zbór chrześcijański',
      desc: 'Sbor Víry, z. s. — zbór chrześcijański w Trzyńcu. Nabożeństwa w każdą niedzielę przy ulicy Hraniční 213. Przyjdź taki, jaki jesteś.'
    },
    about: {
      title: 'O nas | Sbor Víry — Trzyniec',
      desc: 'Kim jesteśmy, w co wierzymy i jak powstał nasz zbór. Sbor Víry, z. s., Hraniční 213, Trzyniec.'
    },
    first: {
      title: 'Jestem tu pierwszy raz | Sbor Víry — Trzyniec',
      desc: 'Czego możesz się spodziewać podczas pierwszej wizyty. Praktyczne odpowiedzi na typowe pytania.'
    },
    sermons: {
      title: 'Kazania i nagrania | Sbor Víry — Trzyniec',
      desc: 'Nagrania kazań i konferencji na naszym kanale YouTube.'
    },
    news: {
      title: 'Aktualności | Sbor Víry — Trzyniec',
      desc: 'Nowości, wydarzenia i ogłoszenia z życia zboru.'
    },
    ministries: {
      title: 'Co u nas znajdziesz | Sbor Víry — Trzyniec',
      desc: 'Nabożeństwa niedzielne, uwielbienie, ewangelizacja w centrum Trzyńca i modlitwa.'
    },
    give: {
      title: 'Wesprzyj nas | Sbor Víry — Trzyniec',
      desc: 'Jak możesz wesprzeć służbę zboru dobrowolnym darem.'
    },
    contact: {
      title: 'Kontakt | Sbor Víry — Trzyniec',
      desc: 'Hraniční 213, 739 61 Trzyniec. Napisz do nas albo po prostu wpadnij.'
    },
    privacy: {
      title: 'Ochrona danych osobowych | Sbor Víry — Trzyniec',
      desc: 'Jak zbór Sbor Víry w Trzyńcu postępuje z danymi osobowymi z formularza kontaktowego i jakie masz prawa zgodnie z RODO.'
    },
    notfound: {
      title: 'Nie znaleziono strony | Sbor Víry — Trzyniec',
      desc: ''
    }
  },
  ui: {
    skip: 'Przejdź do treści głównej',
    menu: 'Menu',
    language: 'Język',
    photoPlaceholder: 'Miejsce na zdjęcie',
    loading: 'Wczytywanie…'
  },
  nav: {
    home: 'Start',
    about: 'O nas',
    first: 'Pierwszy raz',
    sermons: 'Kazania',
    news: 'Aktualności',
    ministries: 'Co robimy',
    give: 'Wesprzyj nas',
    contact: 'Kontakt'
  },
  cta: {
    first: 'Jestem tu pierwszy raz',
    watch: 'Oglądaj kazania',
    contact: 'Napisz do nas',
    more: 'Dowiedz się więcej',
    allNews: 'Wszystkie aktualności',
    youtube: 'Otwórz kanał YouTube',
    directions: 'Wyznacz trasę',
    join: 'Przyjdź do nas',
    support: 'Wesprzyj zbór'
  },
  home: {
    hero: {
      eyebrow: 'Zbór chrześcijański w Trzyńcu',
      h1: 'Przyjdź taki,<br>jaki jesteś',
      lead: 'Jesteśmy zwyczajnymi ludźmi, którzy doświadczyli, że Bóg zmienia życie. Spotykamy się w Trzyńcu w każdą niedzielę i chętnie zobaczymy wśród nas również Ciebie.',
      m1: 'Nabożeństwo',
      m2: 'Gdzie się spotykamy',
      m3: 'Oglądaj online'
    },
    welcome: {
      eyebrow: 'Witamy',
      h2: 'Nieważne, skąd przychodzisz',
      p: 'Nie ma znaczenia, ile masz lat, w co dziś wierzysz, jak się ubierasz ani co masz za sobą. U nas jest miejsce dla Ciebie — i nikt nie będzie niczego od Ciebie wymagał.',
      c1t: 'Nabożeństwo niedzielne',
      c1d: 'O 11:00 zaczynamy wspólnym uwielbieniem, potem jest nauczanie z Biblii i modlitwa. Budynek jest otwarty już od 10:30.',
      c2t: 'Ewangelizacja w mieście',
      c2d: 'W każdy poniedziałek po południu stoimy na Rynku T. G. Masaryka i dzielimy się ewangelią z mieszkańcami Trzyńca.',
      c3t: 'Modlitwa',
      c3d: 'Spotykamy się również na modlitwie — za zbór, za konkretne osoby i za nasze miasto.'
    },
    times: {
      eyebrow: 'Kiedy i gdzie',
      h2: 'Spotykamy się regularnie',
      p: 'Główne spotkanie całego zboru odbywa się w niedzielę przed południem. W ciągu tygodnia spotykamy się w grupach domowych, modlimy się i wychodzimy z ewangelią do centrum miasta.',
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
      v1t: 'Biblia',
      v1d: 'Nauczamy z Pisma w sposób zrozumiały, bez zbędnych religijnych zwrotów.',
      v2t: 'Modlitwa',
      v2d: 'Liczymy na to, że Bóg słyszy i działa. Modlimy się za ludzi i za nasze miasto.',
      v3t: 'Rodzina',
      v3d: 'Zbór to nie budynek ani program. To konkretni ludzie, którym na sobie zależy.',
      v4t: 'Otwartość',
      v4d: 'Drzwi są otwarte dla każdego. Pytania i wątpliwości nie są u nas problemem.'
    },
    news: {
      eyebrow: 'Aktualności',
      h2: 'Co się u nas dzieje',
      p: 'Krótkie wiadomości o tym, czym teraz żyjemy i co przygotowujemy.'
    },
    cta: {
      h2: 'Do zobaczenia w niedzielę?',
      p: 'Nie musisz się wcześniej zgłaszać, nie musisz nic przynosić i nie musisz nic wiedzieć. Wystarczy przyjść.'
    }
  },
  about: {
    hero: {
      eyebrow: 'O nas',
      h1: 'Zbór, który opiera się na ludziach',
      p: 'Jesteśmy wspólnotą chrześcijan w Trzyńcu. Wierzymy, że chrześcijaństwo to nie zbiór zasad, lecz żywa relacja, która przemienia codzienne życie.'
    },
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
      b1t: 'Biblia',
      b1d: 'Biblia jest natchnionym Słowem Bożym i najwyższym autorytetem dla wiary oraz codziennego życia.',
      b2t: 'Bóg',
      b2d: 'Wierzymy w jednego Boga, który objawia się jako Ojciec, Syn i Duch Święty.',
      b3t: 'Jezus Chrystus',
      b3d: 'Jezus jest Synem Bożym. Umarł za nasze grzechy, zmartwychwstał i żyje.',
      b4t: 'Zbawienie',
      b4d: 'Zbawienie jest darem Bożej łaski, który przyjmujemy przez wiarę — nie jest nagrodą za nasze osiągnięcia.',
      b5t: 'Duch Święty',
      b5d: 'Duch Święty daje siłę do życia chrześcijańskiego i obdarowuje kościół do służby innym.',
      b6t: 'Kościół',
      b6d: 'Kościół to rodzina, a nie budynek. To wspólnota ludzi, którzy należą do Chrystusa i do siebie nawzajem.',
      b7t: 'Nadzieja',
      b7d: 'Jezus powróci. Śmierć nie ma ostatniego słowa i to zmienia sposób, w jaki żyjemy dzisiaj.'
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
      eyebrow: 'Dane organizacji',
      h2: 'Informacje prawne',
      orgLabel: 'Nazwa',
      venueLabel: 'Miejsce spotkań',
      icoLabel: 'REGON / IČO',
      pastorLabel: 'Przedstawiciel statutowy'
    }
  },
  first: {
    hero: {
      eyebrow: 'Jesteś tu pierwszy raz?',
      h1: 'Nie musisz się niczego obawiać',
      p: 'Wiemy, że przyjście pierwszy raz między nieznajomych nie jest łatwe. Oto uczciwy opis tego, co Cię czeka — bez niespodzianek.'
    },
    steps: {
      eyebrow: 'Krok po kroku',
      h2: 'Jak wygląda niedzielny poranek',
      p: 'Budynek otwieramy o 10:30, nabożeństwo zaczyna się o 11:00 i trwa około 90 minut. Potem jest czas na kawę — a wyjść możesz, kiedy tylko zechcesz.',
      s1t: 'Przyjeżdżasz i parkujesz',
      s1d: 'Parkować można bezpośrednio przy budynku. Wejście jest wspólne z innymi najemcami — nasza część znajduje się zaraz po prawej stronie za drzwiami. Budynek jest otwarty od 10:30, więc możesz przyjść bez pośpiechu.',
      s2t: 'Ktoś Cię przywita',
      s2d: 'Przy wejściu spotkasz kogoś z nas, kto Ci doradzi i odpowie na pytania. W przedsionku jest pomieszczenie z fotelami i stolikami, gdzie przed rozpoczęciem możesz napić się kawy lub herbaty, zjeść drobny poczęstunek i spokojnie kogoś poznać. Nigdzie się nie zapisujesz i niczego nie wypełniasz.',
      s3t: 'O 11:00 zaczyna się uwielbienie',
      s3d: 'Przez pierwsze mniej więcej dwadzieścia pięć minut wspólnie śpiewamy. Możesz śpiewać, stać, siedzieć albo tylko słuchać — tak, jak Ci wygodnie.',
      s4t: 'Potem jest nauczanie',
      s4d: 'Kazanie trwa około 35–45 minut. Mówimy zrozumiale i staramy się łączyć Biblię ze zwyczajnym życiem.',
      s5t: 'Zostajesz na kawę',
      s5d: 'Po zakończeniu jest czas na rozmowę. Jeśli wolisz po prostu dyskretnie wyjść, to również jest zupełnie w porządku.'
    },
    faq: {
      eyebrow: 'Częste pytania',
      h2: 'O co ludzie pytają najczęściej',
      q1: 'Jak mam się ubrać?',
      a1: 'Tak, jak Ci wygodnie. Spotkasz u nas zarówno bluzy, jak i koszule. Nikogo nie oceniamy po ubraniu.',
      q2: 'Czy muszę coś płacić albo dawać?',
      a2: 'Nie. Wstęp jest bezpłatny. Podczas nabożeństwa odbywa się dobrowolna zbiórka, ale nikt Cię nie obserwuje i niczego od Ciebie nie oczekuje.',
      q3: 'Nie jestem wierzący. Czy mogę przyjść?',
      a3: 'Oczywiście. Wiele osób przychodziło do nas długo, zanim zdecydowało się w cokolwiek uwierzyć. Pytania i wątpliwości są u nas mile widziane.',
      q4: 'Jak długo to wszystko trwa?',
      a4: 'Nabożeństwo trwa około 90 minut. Po nim następuje niezobowiązujący czas na kawę i rozmowę.',
      q5: 'Co zrobić z dziećmi?',
      a5: 'Dzieci są mile widziane i mogą być na nabożeństwie razem z Tobą. Obecnie nie prowadzimy osobnego programu dla dzieci — zbór tworzą dziś głównie osoby dorosłe.',
      q6: 'Czy muszę się wcześniej zarejestrować?',
      a6: 'Nie. Wystarczy po prostu przyjść.',
      q7: 'W jakim języku odbywa się nabożeństwo?',
      a7: 'Nabożeństwa odbywają się po czesku. Ze względu na bliskość granicy spotkasz u nas również osoby mówiące po polsku. Jeśli potrzebujesz pomocy językowej, napisz do nas wcześniej, a na pewno się dogadamy.',
      q8: 'Czy budynek jest dostępny bez barier?',
      a8: 'Przy wejściu znajduje się podjazd, którym bez trudu wjedziesz z wózkiem dziecięcym. Dla wózka inwalidzkiego jest jednak dość stromy, więc zalecamy asystę. Daj nam znać wcześniej, a chętnie pomożemy.'
    },
    cta: {
      h2: 'Masz jeszcze pytanie?',
      p: 'Napisz do nas. Zwykle odpowiadamy w ciągu dwóch dni i nikt nie będzie Cię do niczego popychał.'
    }
  },
  sermons: {
    hero: {
      eyebrow: 'Kazania',
      h1: 'Słuchaj, kiedy chcesz',
      p: 'Kazania i nagrania z konferencji publikujemy systematycznie od wielu lat. Wszystko znajdziesz na naszym kanale YouTube — bezpłatnie i bez rejestracji.'
    },
    playBtn: 'Odtwórz najnowszy film',
    live: {
      eyebrow: 'Najnowsze',
      h2: 'Ostatnie nagranie z kanału'
    },
    channel: {
      eyebrow: 'Archiwum',
      h2: 'Całe archiwum na YouTube',
      p: 'Na kanale znajdziesz poszczególne kazania niedzielne, serie tematyczne oraz pełne nagrania z konferencji. Subskrybuj kanał, żeby nic Ci nie umknęło.'
    },
    links: {
      videos: 'Filmy',
      playlists: 'Playlisty'
    },
    cards: {
      c1t: 'Kazania niedzielne',
      c1d: 'Nagrania poszczególnych nabożeństw niedzielnych — nauczanie z Biblii, świadectwa i modlitwa.',
      c2t: 'Konferencje i goście',
      c2d: 'Dłuższe nagrania z konferencji oraz z gośćmi, których u siebie przyjęliśmy.'
    },
    follow: {
      h2: 'Śledź nas również tutaj',
      p: 'Filmy, zdjęcia i szybkie ogłoszenia udostępniamy także na Facebooku i Instagramie.'
    }
  },
  photos: {
    hero: 'Nabożeństwo niedzielne zboru Sbor Víry w Trzyńcu',
    about1: 'Pastor Petr Lysek mówi do młodych ludzi',
    about2: 'Wzniesione ręce podczas uwielbienia',
    pastor: 'Pastor Petr Lysek z uniesioną Biblią',
    first: 'Przedsionek z fotelami i stolikami, gdzie ludzie spotykają się przed nabożeństwem'
  },
  gallery: {
    prev: 'Poprzednie zdjęcia',
    next: 'Następne zdjęcia',
    pause: 'Wstrzymaj przewijanie',
    play: 'Wznów przewijanie',
    slide: 'Zdjęcie %1 z %2',
    page: 'Grupa zdjęć %1 z %2',
    eyebrow: 'Galeria',
    h2: 'Zobacz, jak u nas jest',
    p: 'Kilka zdjęć z naszych spotkań i z życia zboru.',
    alt: 'Z życia zboru Sbor Víry w Trzyńcu'
  },
  news: {
    hero: {
      eyebrow: 'Aktualności',
      h1: 'Co się u nas dzieje',
      p: 'Nowości, wydarzenia, konferencje i ogłoszenia z życia zboru.'
    },
    empty: 'Na razie nie ma tu żadnych aktualności.',
    readMore: 'Czytaj dalej'
  },
  ministries: {
    hero: {
      eyebrow: 'Co u nas znajdziesz',
      h1: 'Zbór to nie tylko niedziela',
      p: 'Oprócz nabożeństwa niedzielnego w czwartki spotykamy się w grupach domowych, modlimy się, a w każdy poniedziałek wychodzimy z ewangelią do centrum Trzyńca.'
    },
    m1t: 'Nabożeństwo niedzielne',
    m1d: 'Główne spotkanie całego zboru. O 11:00 zaczynamy uwielbieniem, potem jest nauczanie z Biblii, modlitwa i czas dla siebie nawzajem.',
    m2t: 'Uwielbienie i muzyka',
    m2d: 'Grupa osób, która przygotowuje muzyczną część nabożeństwa. Chętnie przyjmiemy również nowych muzyków.',
    m3t: 'Ewangelizacja w mieście',
    m3d: 'W każdy poniedziałek po południu stoimy na Rynku T. G. Masaryka, rozmawiamy z ludźmi i proponujemy modlitwę.',
    m4t: 'Modlitwa',
    m4d: 'Spotkania modlitewne w ciągu tygodnia. Modlimy się za zbór, za konkretne osoby i za Trzyniec.',
    cta: {
      h2: 'Chcesz się zaangażować?',
      p: 'Napisz nam, co Cię interesuje, a połączymy Cię z właściwymi osobami.'
    },
    m5t: 'Grupy domowe',
    m5d: 'W czwartki o 18:00 spotykamy się w mniejszych grupach po domach — czytamy Biblię, rozmawiamy o życiu i wspólnie się modlimy. To tutaj ludzie poznają się naprawdę. Napisz do nas, a chętnie pomożemy ci trafić do jednej z grup.'
  },
  give: {
    hero: {
      eyebrow: 'Wesprzyj nas',
      h1: 'Twoje wsparcie ma sens',
      p: 'Funkcjonowanie zboru, ewangelizację w mieście oraz pomoc osobom w potrzebie finansujemy z dobrowolnych darów.'
    },
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
      bank: 'Bank',
      account: 'Numer konta',
      iban: 'IBAN',
      swift: 'SWIFT / BIC',
      vs: 'Symbol zmienny',
      owner: 'Właściciel konta',
      todo: 'Dane bankowe nie zostały jeszcze uzupełnione. Wpisz je w pliku assets/js/content.js.',
      hint: 'W tytule przelewu możesz podać cel daru, na przykład „dzieci” albo „misja”.'
    },
    receipt: {
      h2: 'Potwierdzenie darowizny',
      p: 'Jeśli potrzebujesz potwierdzenia darowizny do celów podatkowych, napisz do nas na adres e-mail, a chętnie je wystawimy.'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Kontakt',
      h1: 'Odezwij się do nas',
      p: 'Masz pytanie, potrzebujesz modlitwy albo po prostu chcesz porozmawiać? Napisz do nas.'
    },
    labels: {
      venue: 'Gdzie się spotykamy',
      email: 'E-mail',
      messenger: 'Napisz do nas na Facebooku',
      phone: 'Telefon',
      pastor: 'Pastor',
      ico: 'REGON / IČO',
      social: 'Media społecznościowe'
    },
    form: {
      h2: 'Napisz do nas',
      p: 'Zwykle odpowiadamy w ciągu dwóch dni roboczych.',
      name: 'Imię i nazwisko',
      email: 'E-mail',
      phone: 'Telefon (opcjonalnie)',
      subject: 'Temat',
      message: 'Twoja wiadomość',
      subjectOptions: [
        'Pytanie ogólne',
        'Chcę przyjść pierwszy raz',
        'Prośba o modlitwę',
        'Ewangelizacja',
        'Inne'
      ],
      consent: 'Wyrażam zgodę na przetwarzanie moich danych przez Sbor Víry, z. s. w celu udzielenia odpowiedzi na tę wiadomość.',
      send: 'Wyślij wiadomość',
      hint: 'Formularz otworzy Twój program pocztowy z wstępnie wypełnioną wiadomością.'
    },
    map: {
      h2: 'Gdzie nas znaleźć',
      p: 'Hraniční 213, 739 61 Trzyniec. Parkować można bezpośrednio przy budynku. Wejście do budynku jest wspólne z innymi najemcami; nasza część znajduje się zaraz po prawej stronie za drzwiami.'
    }
  },
  footer: {
    tagline: 'Zbór chrześcijański w Trzyńcu. Spotykamy się w każdą niedzielę i chętnie zobaczymy wśród nas również Ciebie.',
    explore: 'Strona',
    connect: 'Śledź nas',
    visit: 'Odwiedź nas',
    rights: 'Wszelkie prawa zastrzeżone.',
    privacy: 'Ochrona danych osobowych'
  },
  notfound: {
    h1: 'Nie znaleźliśmy tej strony',
    p: 'Link jest prawdopodobnie nieprawidłowy albo strona została przeniesiona. Spróbuj zacząć od początku.',
    btn: 'Wróć na stronę główną'
  },
  privacy: {
    hero: {
      eyebrow: 'Informacje prawne',
      h1: 'Ochrona danych osobowych',
      p: 'Krótko i bez prawniczego żargonu: jakie dane o Tobie przetwarzamy i po co.'
    },
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

/* ########  UKRAJINŠTINA  ################################################### */
uk: {
  langName: 'Українська',
  // Krátké představení pro vyhledávače a AI — díky němu nás nespletou
  // s podobně znějícími sbory jinde. Ve strukturovaných datech jde
  // do pole disambiguatingDescription (viz renderSchema v site.js).
  identita: 'Християнська церква у Тршинці на вулиці Hraniční 213. Зареєстроване товариство, IČO 26596865, діє з 2002 року.',
  meta: {
    home: {
      title: 'Sbor Víry — Тршинець | християнська церква',
      desc: 'Sbor Víry, z. s. — християнська церква у місті Тршинець (Чехія). Богослужіння щонеділі на вулиці Hraniční 213. Приходь таким, яким ти є.'
    },
    about: {
      title: 'Про нас | Sbor Víry — Тршинець',
      desc: 'Хто ми, у що віримо і як виникла наша церква. Sbor Víry, z. s., Hraniční 213, Тршинець.'
    },
    first: {
      title: 'Я тут уперше | Sbor Víry — Тршинець',
      desc: 'Що на вас чекає під час першого візиту. Чесні відповіді на звичайні запитання.'
    },
    sermons: {
      title: 'Проповіді та записи | Sbor Víry — Тршинець',
      desc: 'Записи проповідей і конференцій на нашому каналі YouTube.'
    },
    news: {
      title: 'Новини | Sbor Víry — Тршинець',
      desc: 'Новини, події та оголошення з життя церкви.'
    },
    ministries: {
      title: 'Що ми робимо | Sbor Víry — Тршинець',
      desc: 'Недільні богослужіння, прославлення, євангелізація в центрі Тршинця та молитва.'
    },
    give: {
      title: 'Підтримайте нас | Sbor Víry — Тршинець',
      desc: 'Як ви можете підтримати служіння церкви добровільною пожертвою.'
    },
    contact: {
      title: 'Контакти | Sbor Víry — Тршинець',
      desc: 'Hraniční 213, 739 61 Тршинець, Чехія. Напишіть нам або просто завітайте.'
    },
    privacy: {
      title: 'Захист персональних даних | Sbor Víry — Тршинець',
      desc: 'Як церква Sbor Víry у Тршинці поводиться з персональними даними з контактної форми і які ви маєте права за GDPR.'
    },
    notfound: {
      title: 'Сторінку не знайдено | Sbor Víry — Тршинець',
      desc: ''
    }
  },
  ui: {
    skip: 'Перейти до основного вмісту',
    menu: 'Меню',
    language: 'Мова',
    photoPlaceholder: 'Місце для фотографії',
    loading: 'Завантаження…'
  },
  nav: {
    home: 'Головна',
    about: 'Про нас',
    first: 'Уперше в нас',
    sermons: 'Проповіді',
    news: 'Новини',
    ministries: 'Що ми робимо',
    give: 'Підтримати',
    contact: 'Контакти'
  },
  cta: {
    first: 'Я тут уперше',
    watch: 'Дивитися проповіді',
    contact: 'Напишіть нам',
    more: 'Дізнатися більше',
    allNews: 'Усі новини',
    youtube: 'Відкрити канал YouTube',
    directions: 'Прокласти маршрут',
    join: 'Приходьте до нас',
    support: 'Підтримати церкву'
  },
  home: {
    hero: {
      eyebrow: 'Християнська церква у Тршинці',
      h1: 'Приходь таким,<br>яким ти є',
      lead: 'Ми звичайні люди, які пережили, що Бог змінює життя. Ми збираємося у Тршинці щонеділі й будемо раді бачити серед нас і тебе.',
      m1: 'Богослужіння',
      m2: 'Де ми збираємося',
      m3: 'Дивіться онлайн'
    },
    welcome: {
      eyebrow: 'Ласкаво просимо',
      h2: 'Немає значення, звідки ви прийшли',
      p: 'Немає значення, скільки вам років, у що ви вірите сьогодні, як ви одягаєтеся чи що у вас за плечима. У нас є місце для вас — і ніхто нічого від вас не вимагатиме.',
      c1t: 'Недільне богослужіння',
      c1d: 'О 11:00 ми починаємо спільним прославленням, далі — зрозуміле навчання з Біблії та молитва. Будівля відчинена вже з 10:30.',
      c2t: 'Євангелізація в місті',
      c2d: 'Щопонеділка по обіді ми стоїмо на площі Т. Ґ. Масарика й ділимося Євангелієм з людьми у Тршинці.',
      c3t: 'Молитва',
      c3d: 'Ми також збираємося на молитву — за церкву, за конкретних людей і за наше місто.'
    },
    times: {
      eyebrow: 'Коли і де',
      h2: 'Ми збираємося регулярно',
      p: 'Головна зустріч усієї церкви відбувається в неділю вранці. Протягом тижня ми збираємося в домашніх групах, разом молимося і виходимо з євангелієм у центр міста.',
      note: 'Будівля відчинена з 10:30. У свята та під час особливих подій час може змінюватися — найактуальнішу інформацію завжди знайдете на нашому Facebook.'
    },
    watch: {
      eyebrow: 'Онлайн',
      h2: 'Проповіді та записи конференцій',
      p: 'Уже багато років ми систематично публікуємо записи проповідей і конференцій на своєму каналі YouTube. Не встигли в неділю? Можете переглянути будь-коли.',
      fallback: 'Загляньте на наш канал і перегляньте найновішу проповідь.'
    },
    quote: {
      text: 'Церква — це не храм і не закостенілі обряди, а насамперед Божа родина. Ісус не створював організації — Він дав нам можливість особистої зустрічі з Богом Отцем.',
      cite: 'Петр Лисек, пастор церкви'
    },
    values: {
      eyebrow: 'На чому ми будуємо',
      h2: 'Чотири речі, які ми сприймаємо серйозно',
      v1t: 'Біблія',
      v1d: 'Ми навчаємо з Писання зрозуміло й без зайвих релігійних фраз.',
      v2t: 'Молитва',
      v2d: 'Ми розраховуємо на те, що Бог чує і діє. Ми молимося за людей і за наше місто.',
      v3t: 'Родина',
      v3d: 'Церква — це не будівля й не програма. Це конкретні люди, яким одне до одного не байдуже.',
      v4t: 'Відкритість',
      v4d: 'Двері відчинені для кожного. Запитання й сумніви у нас не є проблемою.'
    },
    news: {
      eyebrow: 'Новини',
      h2: 'Що у нас відбувається',
      p: 'Короткі повідомлення про те, чим ми зараз живемо і що готуємо.'
    },
    cta: {
      h2: 'Побачимося в неділю?',
      p: 'Не потрібно записуватися заздалегідь, нічого приносити чи щось знати. Досить просто прийти.'
    }
  },
  about: {
    hero: {
      eyebrow: 'Про нас',
      h1: 'Церква, що тримається на людях',
      p: 'Ми — спільнота християн у Тршинці. Ми віримо, що християнство — це не набір правил, а живі стосунки, які змінюють повсякденне життя.'
    },
    story: {
      eyebrow: 'Наш шлях',
      h2: 'Хто ми і з чого починали',
      p1: 'Sbor Víry виникла у Тршинці 2002 року. Ми прагнемо допомагати людям у пошуку сенсу життя та християнських цінностей. Відповіді на свої запитання вони можуть знайти в Біблії — тому основою нашої праці є ґрунтовне ознайомлення з текстами Писання.',
      p2: 'Пізнання Божого Слова формує перебіг наших зустрічей і дає віруючим відповіді на запитання щоденного життя — чи то про родину, стосунки з людьми, чи про роботу. Ми також допомагаємо людям, які опинилися на узбіччі суспільства, повернутися до повноцінного життя.',
      p3: 'Ми проводимо публічні лекції, зокрема з гостями з-за кордону, які представляють подібні християнські рухи. Показуємо фільми на духовну тематику для широкого загалу та влаштовуємо концерти й музичні вечори. Маємо численні контакти з церквами та організаціями в Чехії, Польщі, Угорщині й Словаччині.',
      p4: 'Ми віримо, що повернення до справжніх християнських цінностей корисне для всього суспільства — як для нинішнього покоління, так і для майбутніх.'
    },
    vision: {
      eyebrow: 'Наше бачення',
      h2: 'Християнський центр для нашого міста',
      p1: 'Ми прагнемо позитивно вплинути на наше місто, створюючи християнський центр, у якому багато людей знайдуть своє місце, зміцнять надію й забажають жити для Бога та для інших.',
      p2: 'Ми також хочемо змінити образ християнства в Чехії — показати, що Бог не має нічого спільного із середньовічною релігією, а діє серед нас у сучасний, захопливий спосіб. Церква — це не храм і не закостенілі обряди, а насамперед Його родина. Ісус не створював організації; Він дав нам можливість особистої зустрічі з Богом Отцем.',
      p3: 'Ми прагнемо, щоб молоді люди, які хочуть від життя чогось більшого, будували на Ньому та на Його слові.'
    },
    believe: {
      eyebrow: 'У що ми віримо',
      h2: 'Сім пунктів, у яких ми одностайні',
      p: 'Це не вичерпний богословський документ, а те головне, що тримає нас разом.',
      b1t: 'Біблія',
      b1d: 'Біблія — це натхненне Боже Слово і найвищий авторитет для віри та щоденного життя.',
      b2t: 'Бог',
      b2d: 'Ми віримо в єдиного Бога, який відкривається як Отець, Син і Святий Дух.',
      b3t: 'Ісус Христос',
      b3d: 'Ісус — Син Божий. Він помер за наші гріхи, воскрес і живий.',
      b4t: 'Спасіння',
      b4d: 'Спасіння — це дар Божої благодаті, який ми приймаємо вірою; це не нагорода за наші заслуги.',
      b5t: 'Святий Дух',
      b5d: 'Святий Дух дає силу жити християнським життям і наділяє церкву дарами для служіння іншим.',
      b6t: 'Церква',
      b6d: 'Церква — це родина, а не будівля. Це спільнота людей, які належать Христу й одне одному.',
      b7t: 'Надія',
      b7d: 'Ісус повернеться. Смерть не має останнього слова, і це змінює те, як ми живемо сьогодні.'
    },
    lead: {
      eyebrow: 'Керівництво церкви',
      h2: 'Пастор Петр Лисек',
      role: 'Пастор і засновник церкви',
      b1: 'Керує християнським центром Sbor Víry від його заснування у 2002 році. Народився у Тршинці, за фахом будівельник. Своє покликання й пристрасть знайшов у розбудові сильної та сучасної місцевої церкви.',
      b2: 'Навернувся у п’ятнадцять років під час виїзду євангельської молоді з Ольдржиховиць, де служив до 1989 року. Згодом долучився до харизматичного руху, а з 1992 року очолював громаду Сілоє при Апостольській церкві. Проте виявилося, що Бог наділив його вдачею першопрохідця й покликанням реформатора — бажання зробити для Бога і для віруючих щось, чого в околиці раніше ніхто не бачив, привело його до заснування Sbor Víry.',
      b3: 'Він талановитий промовець, який уміє надихати. Проповідує Слово, сповнене віри й ентузіазму, але й з добрячою дозою гумору. Тверезість розуму, мудра зміна життя, пізнання Божих принципів і праця над характером — ось головні теми, про які він говорить.',
      b4: 'Багато років він служив разом із дружиною Марцелою, яка несподівано померла у січні 2024 року. Їхня наполегливість, вірність Слову, відданість і невичерпний оптимізм допомогли багатьом людям відкрити віру в Бога та в Його слово. Обоє вірили в церкву як у тіло, що складається з людей — вони не прагнули популярності, а будували на командній праці. Працювати з людьми і для людей: саме в цьому пастор Петр і донині бачить сенс свого служіння.'
    },
    legal: {
      eyebrow: 'Дані про організацію',
      h2: 'Правова інформація',
      orgLabel: 'Назва',
      venueLabel: 'Місце зібрань',
      icoLabel: 'Код організації (IČO)',
      pastorLabel: 'Статутний представник'
    }
  },
  first: {
    hero: {
      eyebrow: 'Ви тут уперше?',
      h1: 'Вам нема чого боятися',
      p: 'Ми знаємо, що прийти вперше до незнайомих людей непросто. Ось чесний опис того, що на вас чекає — без несподіванок.'
    },
    steps: {
      eyebrow: 'Крок за кроком',
      h2: 'Як минає недільний ранок',
      p: 'Будівля відчиняється о 10:30, богослужіння починається об 11:00 і триває приблизно 90 хвилин. Потім є час на каву — а піти можна будь-коли.',
      s1t: 'Ви приїжджаєте й паркуєтеся',
      s1d: 'Припаркуватися можна просто біля будівлі. Вхід спільний з іншими орендарями — наша частина розташована одразу праворуч за дверима. Будівля відчинена з 10:30, тож можете прийти спокійно.',
      s2t: 'Вас хтось привітає',
      s2d: 'Біля входу вас зустріне хтось із наших людей, підкаже й відповість на запитання. У фойє є кімната з кріслами та столиками, де перед початком можна випити каву чи чай, з’їсти щось невелике й спокійно з кимось познайомитися. Нікуди записуватися й нічого заповнювати не потрібно.',
      s3t: 'Об 11:00 починається прославлення',
      s3d: 'Перші приблизно двадцять п’ять хвилин ми співаємо разом. Ви можете співати, стояти, сидіти або просто слухати — як вам зручніше.',
      s4t: 'Далі — проповідь',
      s4d: 'Проповідь триває приблизно 35–45 хвилин. Ми говоримо зрозуміло й намагаємося поєднати Біблію з повсякденним життям.',
      s5t: 'Залишаєтеся на каву',
      s5d: 'Після завершення є час на розмову. Якщо ви волієте непомітно піти, це теж цілком нормально.'
    },
    faq: {
      eyebrow: 'Часті запитання',
      h2: 'Про що запитують найчастіше',
      q1: 'Як мені одягнутися?',
      a1: 'Так, як вам зручно. У нас ви побачите і худі, і сорочки. Ми нікого не оцінюємо за одягом.',
      q2: 'Чи потрібно щось платити або жертвувати?',
      a2: 'Ні. Вхід вільний. Під час богослужіння відбувається добровільний збір, але ніхто за вами не стежить і нічого від вас не очікує.',
      q3: 'Я невіруючий. Чи можу я взагалі прийти?',
      a3: 'Звичайно. Багато людей приходили до нас довго, перш ніж вирішили в щось повірити. Запитання й сумніви у нас вітаються.',
      q4: 'Скільки все це триває?',
      a4: 'Богослужіння триває приблизно 90 хвилин. Після нього — необов’язковий час на каву та розмову.',
      q5: 'Що робити з дітьми?',
      a5: 'Дітям ми раді, і вони можуть бути на богослужінні разом з вами. Окремої програми для дітей наразі немає — сьогодні церкву складають переважно дорослі.',
      q6: 'Чи потрібно реєструватися заздалегідь?',
      a6: 'Ні. Досить просто прийти.',
      q7: 'Якою мовою проходить богослужіння?',
      a7: 'Богослужіння проходять чеською мовою. Через близькість кордону у нас ви зустрінете й людей, які говорять польською. Якщо вам потрібна мовна допомога, напишіть нам заздалегідь — ми щось придумаємо.',
      q8: 'Чи є будівля безбар’єрною?',
      a8: 'Біля входу є пандус, яким без проблем можна заїхати з дитячим візочком. Для інвалідного візка він, однак, доволі крутий, тому радимо мати супровід. Повідомте нас заздалегідь — ми залюбки допоможемо.'
    },
    cta: {
      h2: 'Залишилося запитання?',
      p: 'Напишіть нам. Зазвичай відповідаємо протягом двох днів, і ніхто вас нікуди не підштовхуватиме.'
    }
  },
  sermons: {
    hero: {
      eyebrow: 'Проповіді',
      h1: 'Слухайте будь-коли',
      p: 'Проповіді та записи конференцій ми систематично публікуємо вже багато років. Усе знайдете на нашому каналі YouTube — безкоштовно й без реєстрації.'
    },
    playBtn: 'Відтворити найновіше відео',
    live: {
      eyebrow: 'Найновіше',
      h2: 'Останній запис з каналу'
    },
    channel: {
      eyebrow: 'Архів',
      h2: 'Увесь архів на YouTube',
      p: 'На каналі ви знайдете окремі недільні проповіді, тематичні цикли та повні записи конференцій. Підпишіться на канал, щоб нічого не пропустити.'
    },
    links: {
      videos: 'Відео',
      playlists: 'Плейлисти'
    },
    cards: {
      c1t: 'Недільні проповіді',
      c1d: 'Записи окремих недільних богослужінь — навчання з Біблії, свідчення та молитва.',
      c2t: 'Конференції та гості',
      c2d: 'Довші записи з конференцій і від гостей, яких ми в себе приймали.'
    },
    follow: {
      h2: 'Слідкуйте за нами й деінде',
      p: 'Відео, фотографії та короткі оголошення ми публікуємо також на Facebook та в Instagram.'
    }
  },
  photos: {
    hero: 'Недільне богослужіння церкви Sbor Víry у Тршинці',
    about1: 'Пастор Петр Лисек говорить до молоді',
    about2: 'Підняті руки під час прославлення',
    pastor: 'Пастор Петр Лисек з піднятою Біблією',
    first: 'Фойє з кріслами та столиками, де люди збираються перед богослужінням'
  },
  gallery: {
    prev: 'Попередні фото',
    next: 'Наступні фото',
    pause: 'Призупинити показ',
    play: 'Відновити показ',
    slide: 'Фото %1 з %2',
    page: 'Група фото %1 з %2',
    eyebrow: 'Фотогалерея',
    h2: 'Подивіться, як у нас усе виглядає',
    p: 'Кілька знімків з наших зустрічей і з життя церкви.',
    alt: 'З життя церкви Sbor Víry у Тршинці'
  },
  news: {
    hero: {
      eyebrow: 'Новини',
      h1: 'Що у нас відбувається',
      p: 'Новини, події, конференції та оголошення з життя церкви.'
    },
    empty: 'Тут поки що немає новин.',
    readMore: 'Читати далі'
  },
  ministries: {
    hero: {
      eyebrow: 'Що ми робимо',
      h1: 'Церква — це не лише неділя',
      p: 'Окрім недільного богослужіння, щочетверга ми збираємося в домашніх групах, молимося разом, а щопонеділка виходимо з євангелієм у центр Тршинця.'
    },
    m1t: 'Недільне богослужіння',
    m1d: 'Головна зустріч усієї церкви. Об 11:00 ми починаємо прославленням, далі — навчання з Біблії, молитва і час одне для одного.',
    m2t: 'Прославлення та музика',
    m2d: 'Команда, яка готує музичну частину богослужіння. Радо приймемо й нових музикантів.',
    m3t: 'Євангелізація в місті',
    m3d: 'Щопонеділка по обіді ми стоїмо на площі Т. Ґ. Масарика, розмовляємо з людьми й пропонуємо помолитися за них.',
    m4t: 'Молитва',
    m4d: 'Молитовні зустрічі протягом тижня. Ми молимося за церкву, за конкретних людей і за Тршинець.',
    cta: {
      h2: 'Хочете долучитися?',
      p: 'Напишіть нам, що вас цікавить, і ми познайомимо вас із потрібними людьми.'
    },
    m5t: 'Домашні групи',
    m5d: 'Щочетверга о 18:00 ми збираємося невеликими групами по домівках — читаємо Біблію, говоримо про життя і разом молимося. Саме тут люди пізнають одне одного по-справжньому. Напишіть нам, і ми радо допоможемо вам приєднатися до однієї з груп.'
  },
  give: {
    hero: {
      eyebrow: 'Підтримайте нас',
      h1: 'Ваша підтримка має сенс',
      p: 'Утримання церкви, євангелізацію в місті та допомогу людям у скруті ми фінансуємо з добровільних пожертв.'
    },
    why: {
      eyebrow: 'Навіщо жертвувати',
      h2: 'На що йдуть ваші пожертви',
      i1: 'утримання й ремонт приміщень, де ми збираємося;',
      i2: 'євангелізація в центрі міста — матеріали та друк;',
      i3: 'запис і публікація проповідей та конференцій;',
      i4: 'практична допомога людям у складних життєвих обставинах;',
      i5: 'підтримка місіонерської та благодійної праці.',
      note: 'Жодна сума не є надто малою, і нікого в нас не оцінюють за тим, скільки він дає. Пожертва цілком добровільна.'
    },
    bank: {
      eyebrow: 'Банківські реквізити',
      h2: 'Як надіслати пожертву',
      bank: 'Банк',
      account: 'Номер рахунку',
      iban: 'IBAN',
      swift: 'SWIFT / BIC',
      vs: 'Змінний символ',
      owner: 'Власник рахунку',
      todo: 'Банківські реквізити ще не заповнені. Додайте їх у файлі assets/js/content.js.',
      hint: 'У призначенні платежу можете вказати мету пожертви, наприклад «діти» або «місія».'
    },
    receipt: {
      h2: 'Підтвердження пожертви',
      p: 'Якщо вам потрібне підтвердження пожертви для податкових цілей, напишіть нам на електронну пошту — ми залюбки його видамо.'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Контакти',
      h1: 'Напишіть нам',
      p: 'Маєте запитання, потребуєте молитви чи просто хочете поговорити? Напишіть нам.'
    },
    labels: {
      venue: 'Де ми збираємося',
      email: 'Електронна пошта',
      messenger: 'Напишіть нам у Facebook',
      phone: 'Телефон',
      pastor: 'Пастор',
      ico: 'Код організації (IČO)',
      social: 'Соціальні мережі'
    },
    form: {
      h2: 'Напишіть нам',
      p: 'Зазвичай відповідаємо протягом двох робочих днів.',
      name: 'Ім’я та прізвище',
      email: 'Електронна пошта',
      phone: 'Телефон (необов’язково)',
      subject: 'Тема',
      message: 'Ваше повідомлення',
      subjectOptions: [
        'Загальне запитання',
        'Хочу прийти вперше',
        'Прохання про молитву',
        'Євангелізація',
        'Інше'
      ],
      consent: 'Погоджуюся, щоб Sbor Víry, z. s. опрацювала мої дані для відповіді на це повідомлення.',
      send: 'Надіслати повідомлення',
      hint: 'Форма відкриє вашу поштову програму з уже підготовленим повідомленням.'
    },
    map: {
      h2: 'Де нас знайти',
      p: 'Hraniční 213, 739 61 Тршинець, Чехія. Припаркуватися можна просто біля будівлі. Вхід до будівлі спільний з іншими орендарями; наша частина розташована одразу праворуч за дверима.'
    }
  },
  footer: {
    tagline: 'Християнська церква у Тршинці. Ми збираємося щонеділі й будемо раді бачити серед нас і вас.',
    explore: 'Сайт',
    connect: 'Слідкуйте за нами',
    visit: 'Завітайте до нас',
    rights: 'Усі права застережено.',
    privacy: 'Захист персональних даних'
  },
  notfound: {
    h1: 'Цієї сторінки ми не знайшли',
    p: 'Ймовірно, посилання застаріле або сторінку перенесено. Спробуйте почати спочатку.',
    btn: 'Повернутися на головну'
  },
  privacy: {
    hero: {
      eyebrow: 'Правова інформація',
      h1: 'Захист персональних даних',
      p: 'Коротко й без юридичної мови: які ваші дані ми опрацьовуємо і навіщо.'
    },
    h2a: 'Хто є розпорядником даних',
    pa: 'Розпорядником персональних даних є Sbor Víry, z. s., код організації 26596865, контактна адреса Hraniční 213, 739 61 Тршинець, Чехія.',
    h2b: 'Які дані ми опрацьовуємо',
    pb: 'Ми опрацьовуємо лише ті дані, які ви самі надсилаєте нам через контактну форму або електронною поштою — зазвичай ім’я, адресу пошти, за потреби телефон і зміст вашого повідомлення.',
    h2c: 'Навіщо ми їх опрацьовуємо',
    pc: 'Виключно для того, щоб мати змогу вам відповісти. Ми не продаємо ваші дані й не передаємо їх третім сторонам для маркетингових цілей.',
    h2d: 'Файли cookie та вимірювання відвідуваності',
    pd: 'Цей сайт не використовує жодних відстежувальних чи рекламних файлів cookie. Вбудовані відео з YouTube та карти можуть зберігати власні файли cookie згідно з умовами відповідних постачальників.',
    h2e: 'Ваші права',
    pe: 'Ви маєте право на доступ до своїх даних, їх виправлення та видалення. Достатньо написати нам на контактну адресу — ми все залагодимо.'
  }
},

/* ########  RUŠTINA  ######################################################## */
ru: {
  langName: 'Русский',
  // Krátké představení pro vyhledávače a AI — díky němu nás nespletou
  // s podobně znějícími sbory jinde. Ve strukturovaných datech jde
  // do pole disambiguatingDescription (viz renderSchema v site.js).
  identita: 'Христианская церковь в Тршинце на улице Hraniční 213. Зарегистрированное объединение, IČO 26596865, действует с 2002 года.',
  meta: {
    home: {
      title: 'Sbor Víry — Тршинец | христианская церковь',
      desc: 'Sbor Víry, z. s. — христианская церковь в городе Тршинец (Чехия). Богослужения каждое воскресенье на улице Hraniční 213. Приходи таким, какой ты есть.'
    },
    about: {
      title: 'О нас | Sbor Víry — Тршинец',
      desc: 'Кто мы, во что верим и как возникла наша церковь. Sbor Víry, z. s., Hraniční 213, Тршинец.'
    },
    first: {
      title: 'Я здесь впервые | Sbor Víry — Тршинец',
      desc: 'Что вас ждёт во время первого визита. Честные ответы на обычные вопросы.'
    },
    sermons: {
      title: 'Проповеди и записи | Sbor Víry — Тршинец',
      desc: 'Записи проповедей и конференций на нашем канале YouTube.'
    },
    news: {
      title: 'Новости | Sbor Víry — Тршинец',
      desc: 'Новости, события и объявления из жизни церкви.'
    },
    ministries: {
      title: 'Чем мы занимаемся | Sbor Víry — Тршинец',
      desc: 'Воскресные богослужения, прославление, евангелизация в центре Тршинца и молитва.'
    },
    give: {
      title: 'Поддержите нас | Sbor Víry — Тршинец',
      desc: 'Как вы можете поддержать служение церкви добровольным пожертвованием.'
    },
    contact: {
      title: 'Контакты | Sbor Víry — Тршинец',
      desc: 'Hraniční 213, 739 61 Тршинец, Чехия. Напишите нам или просто зайдите.'
    },
    privacy: {
      title: 'Защита персональных данных | Sbor Víry — Тршинец',
      desc: 'Как церковь Sbor Víry в Тршинце обращается с персональными данными из контактной формы и какие у вас права по GDPR.'
    },
    notfound: {
      title: 'Страница не найдена | Sbor Víry — Тршинец',
      desc: ''
    }
  },
  ui: {
    skip: 'Перейти к основному содержанию',
    menu: 'Меню',
    language: 'Язык',
    photoPlaceholder: 'Место для фотографии',
    loading: 'Загрузка…'
  },
  nav: {
    home: 'Главная',
    about: 'О нас',
    first: 'Впервые у нас',
    sermons: 'Проповеди',
    news: 'Новости',
    ministries: 'Чем занимаемся',
    give: 'Поддержать',
    contact: 'Контакты'
  },
  cta: {
    first: 'Я здесь впервые',
    watch: 'Смотреть проповеди',
    contact: 'Напишите нам',
    more: 'Узнать больше',
    allNews: 'Все новости',
    youtube: 'Открыть канал YouTube',
    directions: 'Проложить маршрут',
    join: 'Приходите к нам',
    support: 'Поддержать церковь'
  },
  home: {
    hero: {
      eyebrow: 'Христианская церковь в Тршинце',
      h1: 'Приходи таким,<br>какой ты есть',
      lead: 'Мы обычные люди, которые пережили, что Бог меняет жизни. Мы собираемся в Тршинце каждое воскресенье и будем рады видеть среди нас и тебя.',
      m1: 'Богослужение',
      m2: 'Где мы собираемся',
      m3: 'Смотрите онлайн'
    },
    welcome: {
      eyebrow: 'Добро пожаловать',
      h2: 'Неважно, откуда вы пришли',
      p: 'Неважно, сколько вам лет, во что вы верите сегодня, как одеваетесь и что у вас за плечами. У нас есть место для вас — и никто ничего от вас не потребует.',
      c1t: 'Воскресное богослужение',
      c1d: 'В 11:00 мы начинаем совместным прославлением, затем следует понятное изучение Библии и молитва. Здание открыто уже с 10:30.',
      c2t: 'Евангелизация в городе',
      c2d: 'Каждый понедельник после обеда мы стоим на площади Т. Г. Масарика и делимся Евангелием с жителями Тршинца.',
      c3t: 'Молитва',
      c3d: 'Мы также собираемся на молитву — о церкви, о конкретных людях и о нашем городе.'
    },
    times: {
      eyebrow: 'Когда и где',
      h2: 'Мы собираемся регулярно',
      p: 'Главная встреча всей церкви проходит в воскресенье утром. В течение недели мы собираемся в домашних группах, вместе молимся и выходим с евангелием в центр города.',
      note: 'Здание открыто с 10:30. В праздники и во время особых событий время может меняться — самую актуальную информацию всегда найдёте на нашем Facebook.'
    },
    watch: {
      eyebrow: 'Онлайн',
      h2: 'Проповеди и записи конференций',
      p: 'Уже много лет мы систематически публикуем записи проповедей и конференций на своём канале YouTube. Не успели в воскресенье? Можно посмотреть в любое время.',
      fallback: 'Загляните на наш канал и посмотрите самую свежую проповедь.'
    },
    quote: {
      text: 'Церковь — это не храм и не окостеневшие обряды, а прежде всего Божья семья. Иисус не создавал организацию — Он дал нам возможность личной встречи с Богом Отцом.',
      cite: 'Петр Лысек, пастор церкви'
    },
    values: {
      eyebrow: 'На чём мы строим',
      h2: 'Четыре вещи, к которым мы относимся серьёзно',
      v1t: 'Библия',
      v1d: 'Мы учим из Писания понятно и без лишних религиозных фраз.',
      v2t: 'Молитва',
      v2d: 'Мы рассчитываем на то, что Бог слышит и действует. Мы молимся о людях и о нашем городе.',
      v3t: 'Семья',
      v3d: 'Церковь — это не здание и не программа. Это конкретные люди, которым друг до друга есть дело.',
      v4t: 'Открытость',
      v4d: 'Двери открыты для каждого. Вопросы и сомнения у нас не проблема.'
    },
    news: {
      eyebrow: 'Новости',
      h2: 'Что у нас происходит',
      p: 'Короткие сообщения о том, чем мы сейчас живём и что готовим.'
    },
    cta: {
      h2: 'Увидимся в воскресенье?',
      p: 'Не нужно записываться заранее, ничего приносить и ничего знать. Достаточно просто прийти.'
    }
  },
  about: {
    hero: {
      eyebrow: 'О нас',
      h1: 'Церковь, которая держится на людях',
      p: 'Мы — сообщество христиан в Тршинце. Мы верим, что христианство — это не свод правил, а живые отношения, которые меняют повседневную жизнь.'
    },
    story: {
      eyebrow: 'Наш путь',
      h2: 'Кто мы и с чего начинали',
      p1: 'Sbor Víry возникла в Тршинце в 2002 году. Мы стремимся помогать людям в поиске смысла жизни и христианских ценностей. Ответы на свои вопросы они могут найти в Библии — поэтому основой нашей работы является внимательное знакомство с текстами Писания.',
      p2: 'Познание Божьего Слова формирует ход наших встреч и даёт верующим ответы на вопросы повседневной жизни — будь то семья, отношения с людьми или работа. Мы также помогаем людям, оказавшимся на обочине общества, вернуться к полноценной жизни.',
      p3: 'Мы проводим публичные лекции, в том числе с гостями из-за рубежа, представляющими близкие христианские движения. Показываем фильмы на духовные темы для широкой публики и устраиваем концерты и музыкальные вечера. У нас множество контактов с церквями и организациями в Чехии, Польше, Венгрии и Словакии.',
      p4: 'Мы верим, что возвращение к подлинным христианским ценностям полезно всему обществу — как нынешнему поколению, так и будущим.'
    },
    vision: {
      eyebrow: 'Наше видение',
      h2: 'Христианский центр для нашего города',
      p1: 'Мы хотим положительно повлиять на наш город, создавая христианский центр, в котором многие люди найдут своё место, укрепят надежду и захотят жить для Бога и для других.',
      p2: 'Мы также хотим изменить образ христианства в Чехии — показать, что Бог не имеет ничего общего со средневековой религией, а действует среди нас современным, увлекательным образом. Церковь — это не храм и не окостеневшие обряды, а прежде всего Его семья. Иисус не создавал организацию; Он дал нам возможность личной встречи с Богом Отцом.',
      p3: 'Мы хотим, чтобы молодые люди, которые ждут от жизни большего, строили на Нём и на Его слове.'
    },
    believe: {
      eyebrow: 'Во что мы верим',
      h2: 'Семь пунктов, в которых мы едины',
      p: 'Это не исчерпывающий богословский документ, а то главное, что держит нас вместе.',
      b1t: 'Библия',
      b1d: 'Библия — это вдохновлённое Божье Слово и высший авторитет для веры и повседневной жизни.',
      b2t: 'Бог',
      b2d: 'Мы верим в единого Бога, который открывается как Отец, Сын и Святой Дух.',
      b3t: 'Иисус Христос',
      b3d: 'Иисус — Сын Божий. Он умер за наши грехи, воскрес и жив.',
      b4t: 'Спасение',
      b4d: 'Спасение — это дар Божьей благодати, который мы принимаем верой; это не награда за наши заслуги.',
      b5t: 'Святой Дух',
      b5d: 'Святой Дух даёт силу жить христианской жизнью и наделяет церковь дарами для служения другим.',
      b6t: 'Церковь',
      b6d: 'Церковь — это семья, а не здание. Это сообщество людей, которые принадлежат Христу и друг другу.',
      b7t: 'Надежда',
      b7d: 'Иисус вернётся. У смерти не последнее слово, и это меняет то, как мы живём сегодня.'
    },
    lead: {
      eyebrow: 'Руководство церкви',
      h2: 'Пастор Петр Лысек',
      role: 'Пастор и основатель церкви',
      b1: 'Руководит христианским центром Sbor Víry с момента его основания в 2002 году. Родился в Тршинце, по профессии строитель. Своё призвание и увлечение он нашёл в созидании сильной и современной поместной церкви.',
      b2: 'Он обратился в пятнадцать лет во время выезда евангелической молодёжи из Ольдржиховиц, где служил до 1989 года. Затем присоединился к харизматическому движению, а с 1992 года возглавлял общину Силоэ при Апостольской церкви. Однако оказалось, что Бог наделил его характером первопроходца и призванием реформатора — желание сделать для Бога и для верующих то, чего в округе прежде никто не видел, привело его к основанию Sbor Víry.',
      b3: 'Он талантливый оратор, умеющий вдохновлять. Проповедует Слово, наполненное верой и энтузиазмом, но и с изрядной долей юмора. Трезвость ума, мудрая перемена жизни, познание Божьих принципов и работа над характером — вот главные темы, о которых он говорит.',
      b4: 'Долгие годы он служил вместе с женой Марцелой, которая неожиданно умерла в январе 2024 года. Их упорство, верность Слову, самоотдача и неиссякаемый оптимизм помогли многим людям открыть веру в Бога и в Его слово. Оба верили в церковь как в тело, состоящее из людей — они не стремились к популярности, а строили на командной работе. Работать с людьми и для людей: именно в этом пастор Петр и сегодня видит смысл своего служения.'
    },
    legal: {
      eyebrow: 'Данные об организации',
      h2: 'Правовая информация',
      orgLabel: 'Название',
      venueLabel: 'Место собраний',
      icoLabel: 'Код организации (IČO)',
      pastorLabel: 'Уставный представитель'
    }
  },
  first: {
    hero: {
      eyebrow: 'Вы здесь впервые?',
      h1: 'Вам нечего бояться',
      p: 'Мы знаем, что прийти впервые к незнакомым людям непросто. Вот честное описание того, что вас ждёт — без неожиданностей.'
    },
    steps: {
      eyebrow: 'Шаг за шагом',
      h2: 'Как проходит воскресное утро',
      p: 'Здание открывается в 10:30, богослужение начинается в 11:00 и длится примерно 90 минут. Потом есть время на кофе — а уйти можно в любой момент.',
      s1t: 'Вы приезжаете и паркуетесь',
      s1d: 'Припарковаться можно прямо у здания. Вход общий с другими арендаторами — наша часть находится сразу справа за дверью. Здание открыто с 10:30, так что можете прийти спокойно.',
      s2t: 'Вас кто-нибудь встретит',
      s2d: 'У входа вас встретит кто-то из наших людей, подскажет и ответит на вопросы. В фойе есть комната с креслами и столиками, где перед началом можно выпить кофе или чай, перекусить и спокойно с кем-нибудь познакомиться. Никуда записываться и ничего заполнять не нужно.',
      s3t: 'В 11:00 начинается прославление',
      s3d: 'Первые примерно двадцать пять минут мы поём вместе. Вы можете петь, стоять, сидеть или просто слушать — как вам удобнее.',
      s4t: 'Дальше — проповедь',
      s4d: 'Проповедь длится примерно 35–45 минут. Мы говорим понятно и стараемся связать Библию с повседневной жизнью.',
      s5t: 'Остаётесь на кофе',
      s5d: 'После окончания есть время для разговора. Если вы предпочтёте незаметно уйти, это тоже совершенно нормально.'
    },
    faq: {
      eyebrow: 'Частые вопросы',
      h2: 'О чём спрашивают чаще всего',
      q1: 'Как мне одеться?',
      a1: 'Так, как вам удобно. У нас вы увидите и худи, и рубашки. Мы никого не оцениваем по одежде.',
      q2: 'Нужно ли что-то платить или жертвовать?',
      a2: 'Нет. Вход свободный. Во время богослужения проходит добровольный сбор, но никто за вами не наблюдает и ничего от вас не ждёт.',
      q3: 'Я неверующий. Могу ли я вообще прийти?',
      a3: 'Конечно. Многие люди приходили к нам долго, прежде чем решились во что-то поверить. Вопросы и сомнения у нас приветствуются.',
      q4: 'Сколько всё это длится?',
      a4: 'Богослужение длится примерно 90 минут. После него — необязательное время для кофе и разговора.',
      q5: 'Что делать с детьми?',
      a5: 'Детям мы рады, и они могут быть на богослужении вместе с вами. Отдельной программы для детей сейчас нет — сегодня церковь состоит преимущественно из взрослых.',
      q6: 'Нужно ли регистрироваться заранее?',
      a6: 'Нет. Достаточно просто прийти.',
      q7: 'На каком языке проходит богослужение?',
      a7: 'Богослужения проходят на чешском языке. Из-за близости границы у нас вы встретите и людей, говорящих по-польски. Если вам нужна языковая помощь, напишите нам заранее — мы что-нибудь придумаем.',
      q8: 'Есть ли в здании безбарьерный доступ?',
      a8: 'У входа есть пандус, по которому без труда можно заехать с детской коляской. Для инвалидной коляски он, однако, довольно крутой, поэтому советуем прийти с сопровождающим. Сообщите нам заранее — мы с радостью поможем.'
    },
    cta: {
      h2: 'Остался вопрос?',
      p: 'Напишите нам. Обычно отвечаем в течение двух дней, и никто не будет вас ни к чему подталкивать.'
    }
  },
  sermons: {
    hero: {
      eyebrow: 'Проповеди',
      h1: 'Слушайте в любое время',
      p: 'Проповеди и записи конференций мы систематически публикуем уже много лет. Всё найдёте на нашем канале YouTube — бесплатно и без регистрации.'
    },
    playBtn: 'Воспроизвести последнее видео',
    live: {
      eyebrow: 'Самое новое',
      h2: 'Последняя запись с канала'
    },
    channel: {
      eyebrow: 'Архив',
      h2: 'Весь архив на YouTube',
      p: 'На канале вы найдёте отдельные воскресные проповеди, тематические циклы и полные записи конференций. Подпишитесь на канал, чтобы ничего не пропустить.'
    },
    links: {
      videos: 'Видео',
      playlists: 'Плейлисты'
    },
    cards: {
      c1t: 'Воскресные проповеди',
      c1d: 'Записи отдельных воскресных богослужений — изучение Библии, свидетельства и молитва.',
      c2t: 'Конференции и гости',
      c2d: 'Более длинные записи с конференций и от гостей, которых мы у себя принимали.'
    },
    follow: {
      h2: 'Следите за нами и в других местах',
      p: 'Видео, фотографии и короткие объявления мы публикуем также в Facebook и Instagram.'
    }
  },
  photos: {
    hero: 'Воскресное богослужение церкви Sbor Víry в Тршинце',
    about1: 'Пастор Петр Лысек говорит с молодёжью',
    about2: 'Поднятые руки во время прославления',
    pastor: 'Пастор Петр Лысек с поднятой Библией',
    first: 'Фойе с креслами и столиками, где люди собираются перед богослужением'
  },
  gallery: {
    prev: 'Предыдущие фото',
    next: 'Следующие фото',
    pause: 'Приостановить показ',
    play: 'Возобновить показ',
    slide: 'Фото %1 из %2',
    page: 'Группа фото %1 из %2',
    eyebrow: 'Фотогалерея',
    h2: 'Посмотрите, как у нас всё выглядит',
    p: 'Несколько снимков с наших встреч и из жизни церкви.',
    alt: 'Из жизни церкви Sbor Víry в Тршинце'
  },
  news: {
    hero: {
      eyebrow: 'Новости',
      h1: 'Что у нас происходит',
      p: 'Новости, события, конференции и объявления из жизни церкви.'
    },
    empty: 'Пока здесь нет новостей.',
    readMore: 'Читать дальше'
  },
  ministries: {
    hero: {
      eyebrow: 'Чем мы занимаемся',
      h1: 'Церковь — это не только воскресенье',
      p: 'Кроме воскресного богослужения, по четвергам мы собираемся в домашних группах, молимся вместе, а каждый понедельник выходим с евангелием в центр Тршинца.'
    },
    m1t: 'Воскресное богослужение',
    m1d: 'Главная встреча всей церкви. В 11:00 мы начинаем прославлением, затем следует изучение Библии, молитва и время друг для друга.',
    m2t: 'Прославление и музыка',
    m2d: 'Команда, которая готовит музыкальную часть богослужения. Мы рады и новым музыкантам.',
    m3t: 'Евангелизация в городе',
    m3d: 'Каждый понедельник после обеда мы стоим на площади Т. Г. Масарика, разговариваем с людьми и предлагаем помолиться о них.',
    m4t: 'Молитва',
    m4d: 'Молитвенные встречи в течение недели. Мы молимся о церкви, о конкретных людях и о Тршинце.',
    cta: {
      h2: 'Хотите присоединиться?',
      p: 'Напишите нам, что вас интересует, и мы познакомим вас с нужными людьми.'
    },
    m5t: 'Домашние группы',
    m5d: 'По четвергам в 18:00 мы собираемся небольшими группами по домам — читаем Библию, говорим о жизни и вместе молимся. Именно здесь люди узнают друг друга по-настоящему. Напишите нам, и мы с радостью поможем вам присоединиться к одной из групп.'
  },
  give: {
    hero: {
      eyebrow: 'Поддержите нас',
      h1: 'Ваша поддержка имеет смысл',
      p: 'Содержание церкви, евангелизацию в городе и помощь людям в нужде мы финансируем из добровольных пожертвований.'
    },
    why: {
      eyebrow: 'Зачем жертвовать',
      h2: 'На что идут ваши пожертвования',
      i1: 'содержание и ремонт помещений, где мы собираемся;',
      i2: 'евангелизация в центре города — материалы и печать;',
      i3: 'запись и публикация проповедей и конференций;',
      i4: 'практическая помощь людям в трудных жизненных обстоятельствах;',
      i5: 'поддержка миссионерской и благотворительной работы.',
      note: 'Никакая сумма не является слишком малой, и никого у нас не оценивают по тому, сколько он даёт. Пожертвование полностью добровольное.'
    },
    bank: {
      eyebrow: 'Банковские реквизиты',
      h2: 'Как отправить пожертвование',
      bank: 'Банк',
      account: 'Номер счёта',
      iban: 'IBAN',
      swift: 'SWIFT / BIC',
      vs: 'Переменный символ',
      owner: 'Владелец счёта',
      todo: 'Банковские реквизиты пока не заполнены. Добавьте их в файле assets/js/content.js.',
      hint: 'В назначении платежа можно указать цель пожертвования, например «дети» или «миссия».'
    },
    receipt: {
      h2: 'Подтверждение пожертвования',
      p: 'Если вам нужно подтверждение пожертвования для налоговых целей, напишите нам на электронную почту — мы с радостью его выдадим.'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Контакты',
      h1: 'Напишите нам',
      p: 'У вас есть вопрос, нужна молитва или просто хотите поговорить? Напишите нам.'
    },
    labels: {
      venue: 'Где мы собираемся',
      email: 'Электронная почта',
      messenger: 'Напишите нам в Facebook',
      phone: 'Телефон',
      pastor: 'Пастор',
      ico: 'Код организации (IČO)',
      social: 'Социальные сети'
    },
    form: {
      h2: 'Напишите нам',
      p: 'Обычно отвечаем в течение двух рабочих дней.',
      name: 'Имя и фамилия',
      email: 'Электронная почта',
      phone: 'Телефон (необязательно)',
      subject: 'Тема',
      message: 'Ваше сообщение',
      subjectOptions: [
        'Общий вопрос',
        'Хочу прийти впервые',
        'Просьба о молитве',
        'Евангелизация',
        'Другое'
      ],
      consent: 'Согласен(на) с тем, чтобы Sbor Víry, z. s. обработала мои данные для ответа на это сообщение.',
      send: 'Отправить сообщение',
      hint: 'Форма откроет вашу почтовую программу с уже подготовленным сообщением.'
    },
    map: {
      h2: 'Где нас найти',
      p: 'Hraniční 213, 739 61 Тршинец, Чехия. Припарковаться можно прямо у здания. Вход в здание общий с другими арендаторами; наша часть находится сразу справа за дверью.'
    }
  },
  footer: {
    tagline: 'Христианская церковь в Тршинце. Мы собираемся каждое воскресенье и будем рады видеть среди нас и вас.',
    explore: 'Сайт',
    connect: 'Следите за нами',
    visit: 'Приходите к нам',
    rights: 'Все права защищены.',
    privacy: 'Защита персональных данных'
  },
  notfound: {
    h1: 'Эту страницу мы не нашли',
    p: 'Скорее всего, ссылка устарела или страницу перенесли. Попробуйте начать сначала.',
    btn: 'Вернуться на главную'
  },
  privacy: {
    hero: {
      eyebrow: 'Правовая информация',
      h1: 'Защита персональных данных',
      p: 'Коротко и без юридического языка: какие ваши данные мы обрабатываем и зачем.'
    },
    h2a: 'Кто является распорядителем данных',
    pa: 'Распорядителем персональных данных является Sbor Víry, z. s., код организации 26596865, контактный адрес Hraniční 213, 739 61 Тршинец, Чехия.',
    h2b: 'Какие данные мы обрабатываем',
    pb: 'Мы обрабатываем только те данные, которые вы сами отправляете нам через контактную форму или по электронной почте — обычно имя, адрес почты, при необходимости телефон и содержание вашего сообщения.',
    h2c: 'Зачем мы их обрабатываем',
    pc: 'Исключительно для того, чтобы иметь возможность вам ответить. Мы не продаём ваши данные и не передаём их третьим сторонам в маркетинговых целях.',
    h2d: 'Файлы cookie и измерение посещаемости',
    pd: 'Этот сайт не использует никаких отслеживающих или рекламных файлов cookie. Встроенные видео с YouTube и карты могут сохранять собственные файлы cookie согласно условиям соответствующих поставщиков.',
    h2e: 'Ваши права',
    pe: 'Вы имеете право на доступ к своим данным, их исправление и удаление. Достаточно написать нам на контактный адрес — мы всё уладим.'
  }
},

/* ########  NĚMČINA  ######################################################## */
de: {
  langName: 'Deutsch',
  // Krátké představení pro vyhledávače a AI — díky němu nás nespletou
  // s podobně znějícími sbory jinde. Ve strukturovaných datech jde
  // do pole disambiguatingDescription (viz renderSchema v site.js).
  identita: 'Christliche Gemeinde in Třinec, Hraniční 213. Eingetragener Verein, IČO 26596865, besteht seit 2002.',
  meta: {
    home: {
      title: 'Sbor Víry — Třinec | christliche Gemeinde',
      desc: 'Sbor Víry, z. s. — eine christliche Gemeinde in Třinec (Tschechien). Gottesdienst jeden Sonntag in der Hraniční 213. Komm so, wie du bist.'
    },
    about: {
      title: 'Über uns | Sbor Víry — Třinec',
      desc: 'Wer wir sind, was wir glauben und wie die Gemeinde entstanden ist. Sbor Víry, z. s., Hraniční 213, Třinec.'
    },
    first: {
      title: 'Zum ersten Mal hier | Sbor Víry — Třinec',
      desc: 'Was Sie bei Ihrem ersten Besuch erwartet. Ehrliche Antworten auf die häufigsten Fragen.'
    },
    sermons: {
      title: 'Predigten und Aufzeichnungen | Sbor Víry — Třinec',
      desc: 'Aufzeichnungen von Predigten und Konferenzen auf unserem YouTube-Kanal.'
    },
    news: {
      title: 'Aktuelles | Sbor Víry — Třinec',
      desc: 'Neuigkeiten, Veranstaltungen und Ankündigungen aus dem Leben der Gemeinde.'
    },
    ministries: {
      title: 'Was wir tun | Sbor Víry — Třinec',
      desc: 'Sonntagsgottesdienste, Lobpreis, Evangelisation im Zentrum von Třinec und Gebet.'
    },
    give: {
      title: 'Unterstützen Sie uns | Sbor Víry — Třinec',
      desc: 'Wie Sie die Arbeit der Gemeinde mit einer freiwilligen Spende unterstützen können.'
    },
    contact: {
      title: 'Kontakt | Sbor Víry — Třinec',
      desc: 'Hraniční 213, 739 61 Třinec, Tschechien. Schreiben Sie uns oder kommen Sie einfach vorbei.'
    },
    privacy: {
      title: 'Datenschutz | Sbor Víry — Třinec',
      desc: 'Wie die Gemeinde Sbor Víry in Třinec mit personenbezogenen Daten aus dem Kontaktformular umgeht und welche Rechte Sie nach der DSGVO haben.'
    },
    notfound: {
      title: 'Seite nicht gefunden | Sbor Víry — Třinec',
      desc: ''
    }
  },
  ui: {
    skip: 'Zum Hauptinhalt springen',
    menu: 'Menü',
    language: 'Sprache',
    photoPlaceholder: 'Platz für ein Foto',
    loading: 'Wird geladen…'
  },
  nav: {
    home: 'Start',
    about: 'Über uns',
    first: 'Erster Besuch',
    sermons: 'Predigten',
    news: 'Aktuelles',
    ministries: 'Was wir tun',
    give: 'Unterstützen',
    contact: 'Kontakt'
  },
  cta: {
    first: 'Ich bin zum ersten Mal hier',
    watch: 'Predigten ansehen',
    contact: 'Schreiben Sie uns',
    more: 'Mehr erfahren',
    allNews: 'Alle Neuigkeiten',
    youtube: 'YouTube-Kanal öffnen',
    directions: 'Route anzeigen',
    join: 'Kommen Sie zu uns',
    support: 'Gemeinde unterstützen'
  },
  home: {
    hero: {
      eyebrow: 'Christliche Gemeinde in Třinec',
      h1: 'Komm so,<br>wie du bist',
      lead: 'Wir sind ganz normale Menschen, die erlebt haben, dass Gott Leben verändert. Wir treffen uns jeden Sonntag in Třinec und würden dich gern bei uns sehen.',
      m1: 'Gottesdienst',
      m2: 'Wo wir uns treffen',
      m3: 'Online ansehen'
    },
    welcome: {
      eyebrow: 'Willkommen',
      h2: 'Es spielt keine Rolle, woher Sie kommen',
      p: 'Es macht keinen Unterschied, wie alt Sie sind, was Sie heute glauben, wie Sie sich kleiden oder was hinter Ihnen liegt. Bei uns haben Sie Ihren Platz — und niemand wird etwas von Ihnen verlangen.',
      c1t: 'Sonntagsgottesdienst',
      c1d: 'Um 11:00 Uhr beginnen wir mit gemeinsamem Lobpreis, danach folgen eine verständliche Auslegung der Bibel und Gebet. Das Gebäude ist bereits ab 10:30 Uhr geöffnet.',
      c2t: 'Evangelisation in der Stadt',
      c2d: 'Jeden Montagnachmittag stehen wir auf dem T.-G.-Masaryk-Platz und teilen das Evangelium mit den Menschen in Třinec.',
      c3t: 'Gebet',
      c3d: 'Wir treffen uns auch zum Gebet — für die Gemeinde, für einzelne Menschen und für unsere Stadt.'
    },
    times: {
      eyebrow: 'Wann und wo',
      h2: 'Wir treffen uns regelmäßig',
      p: 'Die Hauptversammlung der ganzen Gemeinde ist am Sonntagvormittag. Unter der Woche treffen wir uns in Hauskreisen, beten gemeinsam und gehen mit dem Evangelium in die Innenstadt.',
      note: 'Das Gebäude ist ab 10:30 Uhr geöffnet. An Feiertagen und bei besonderen Veranstaltungen können sich die Zeiten ändern — die aktuellsten Informationen finden Sie immer auf unserer Facebook-Seite.'
    },
    watch: {
      eyebrow: 'Online',
      h2: 'Predigten und Konferenz­aufzeichnungen',
      p: 'Seit vielen Jahren veröffentlichen wir Aufzeichnungen unserer Predigten und Konferenzen auf unserem YouTube-Kanal. Sonntag verpasst? Sie können ihn jederzeit nachholen.',
      fallback: 'Schauen Sie auf unserem Kanal vorbei und sehen Sie sich die neueste Predigt an.'
    },
    quote: {
      text: 'Kirche ist kein Tempel und kein erstarrtes Ritual, sondern vor allem Gottes Familie. Jesus hat keine Organisation gegründet — er hat uns die Möglichkeit geschenkt, Gott dem Vater persönlich zu begegnen.',
      cite: 'Petr Lysek, Pastor der Gemeinde'
    },
    values: {
      eyebrow: 'Worauf wir bauen',
      h2: 'Vier Dinge, die wir ernst nehmen',
      v1t: 'Die Bibel',
      v1d: 'Wir lehren die Schrift verständlich und ohne unnötige religiöse Floskeln.',
      v2t: 'Das Gebet',
      v2d: 'Wir rechnen damit, dass Gott hört und handelt. Wir beten für Menschen und für unsere Stadt.',
      v3t: 'Die Familie',
      v3d: 'Eine Gemeinde ist kein Gebäude und kein Programm. Es sind konkrete Menschen, denen einander etwas bedeutet.',
      v4t: 'Offenheit',
      v4d: 'Die Tür steht jedem offen. Fragen und Zweifel sind bei uns kein Problem.'
    },
    news: {
      eyebrow: 'Aktuelles',
      h2: 'Was bei uns geschieht',
      p: 'Kurze Nachrichten darüber, was wir gerade erleben und was wir vorbereiten.'
    },
    cta: {
      h2: 'Sehen wir uns am Sonntag?',
      p: 'Sie müssen sich nicht anmelden, nichts mitbringen und nichts wissen. Kommen Sie einfach.'
    }
  },
  about: {
    hero: {
      eyebrow: 'Über uns',
      h1: 'Eine Gemeinde, die auf Menschen gebaut ist',
      p: 'Wir sind eine Gemeinschaft von Christen in Třinec. Wir glauben, dass christlicher Glaube kein Regelwerk ist, sondern eine lebendige Beziehung, die den Alltag verändert.'
    },
    story: {
      eyebrow: 'Unser Weg',
      h2: 'Wer wir sind und wie wir angefangen haben',
      p1: 'Sbor Víry entstand 2002 in Třinec. Wir möchten Menschen bei der Suche nach dem Sinn des Lebens und nach christlichen Werten helfen. Antworten auf ihre Fragen finden sie in der Bibel — deshalb ist eine gründliche Beschäftigung mit den Texten der Schrift die Grundlage unserer Arbeit.',
      p2: 'Die Erkenntnis des Wortes Gottes prägt den Verlauf unserer Treffen und gibt den Gläubigen Antworten auf die Fragen des Alltags, sei es in der Familie, in Beziehungen oder im Beruf. Wir helfen auch Menschen, die an den Rand der Gesellschaft geraten sind, in ein vollwertiges Leben zurückzufinden.',
      p3: 'Wir veranstalten öffentliche Vorträge, auch mit Gästen aus dem Ausland, die ähnliche christliche Bewegungen vertreten. Wir zeigen Filme mit geistlichen Themen für die breite Öffentlichkeit und organisieren Konzerte und Musikabende. Wir pflegen zahlreiche Kontakte zu Kirchen und Organisationen in Tschechien, Polen, Ungarn und der Slowakei.',
      p4: 'Wir sind überzeugt, dass eine Rückkehr zu echten christlichen Werten der ganzen Gesellschaft guttut — der heutigen Generation wie auch den kommenden.'
    },
    vision: {
      eyebrow: 'Unsere Vision',
      h2: 'Ein christliches Zentrum für unsere Stadt',
      p1: 'Wir möchten unsere Stadt zum Guten verändern, indem wir ein christliches Zentrum aufbauen, in dem viele Menschen ihren Platz finden, neue Hoffnung schöpfen und den Wunsch bekommen, für Gott und für andere zu leben.',
      p2: 'Wir möchten auch das Bild des Christentums in Tschechien verändern — zeigen, dass Gott nichts mit mittelalterlicher Religion zu tun hat, sondern auf gegenwärtige, faszinierende Weise unter uns wirkt. Kirche ist kein Tempel und kein erstarrtes Ritual, sondern vor allem seine Familie. Jesus hat keine Organisation gegründet; er hat uns die Möglichkeit einer persönlichen Begegnung mit Gott dem Vater geschenkt.',
      p3: 'Wir wünschen uns, dass junge Menschen, die mehr vom Leben erwarten, auf ihm und auf seinem Wort bauen.'
    },
    believe: {
      eyebrow: 'Was wir glauben',
      h2: 'Sieben Punkte, in denen wir übereinstimmen',
      p: 'Das ist kein erschöpfendes theologisches Dokument, sondern der Kern, der uns zusammenhält.',
      b1t: 'Die Bibel',
      b1d: 'Die Bibel ist das inspirierte Wort Gottes und die höchste Autorität für den Glauben und den Alltag.',
      b2t: 'Gott',
      b2d: 'Wir glauben an den einen Gott, der sich als Vater, Sohn und Heiliger Geist offenbart.',
      b3t: 'Jesus Christus',
      b3d: 'Jesus ist der Sohn Gottes. Er starb für unsere Sünden, wurde auferweckt und lebt.',
      b4t: 'Die Rettung',
      b4d: 'Rettung ist ein Geschenk der Gnade Gottes, das wir im Glauben annehmen — sie ist kein Lohn für unsere Leistung.',
      b5t: 'Der Heilige Geist',
      b5d: 'Der Heilige Geist gibt Kraft, christlich zu leben, und rüstet die Gemeinde zum Dienst an anderen aus.',
      b6t: 'Die Gemeinde',
      b6d: 'Die Gemeinde ist eine Familie, kein Gebäude. Sie ist eine Gemeinschaft von Menschen, die zu Christus und zueinander gehören.',
      b7t: 'Die Hoffnung',
      b7d: 'Jesus wird wiederkommen. Der Tod hat nicht das letzte Wort, und das verändert, wie wir heute leben.'
    },
    lead: {
      eyebrow: 'Leitung der Gemeinde',
      h2: 'Pastor Petr Lysek',
      role: 'Pastor und Gründer der Gemeinde',
      b1: 'Er leitet das christliche Zentrum Sbor Víry seit dessen Gründung im Jahr 2002. Geboren in Třinec und von Beruf Bauingenieur, fand er seine Leidenschaft und Berufung im Aufbau einer starken, zeitgemäßen Ortsgemeinde.',
      b2: 'Mit fünfzehn Jahren kam er auf einer Freizeit der evangelischen Jugend von Oldřichovice zum Glauben, wo er bis 1989 mitarbeitete. Danach engagierte er sich in der charismatischen Bewegung und leitete ab 1992 die Gemeinde Siloe innerhalb der Apostolischen Kirche. Es zeigte sich jedoch, dass Gott ihm ein Pioniernaturell und die Berufung eines Reformators geschenkt hatte — der Wunsch, für Gott und für die Gläubigen etwas zu tun, das in der Region zuvor niemand gesehen hatte, führte ihn zur Gründung von Sbor Víry.',
      b3: 'Er ist ein begabter und mitreißender Redner. Er predigt ein Wort voller Glauben und Begeisterung, aber auch mit einer guten Portion Humor. Nüchternheit des Denkens, eine kluge Lebensveränderung, das Erkennen der Prinzipien Gottes und die Arbeit am eigenen Charakter — das sind seine Hauptthemen.',
      b4: 'Viele Jahre lang diente er gemeinsam mit seiner Frau Marcela, die im Januar 2024 unerwartet verstarb. Ihre Ausdauer, ihre Treue zum Wort, ihr Einsatz und ihr unermüdlicher Optimismus haben vielen Menschen geholfen, den Glauben an Gott und an sein Wort zu entdecken. Beide glaubten an die Gemeinde als einen Leib aus Menschen — sie strebten nicht nach Bekanntheit, sondern bauten auf Teamarbeit. Mit Menschen und für Menschen zu arbeiten: darin sieht Pastor Petr bis heute den Sinn seines Dienstes.'
    },
    legal: {
      eyebrow: 'Angaben zur Organisation',
      h2: 'Rechtliche Informationen',
      orgLabel: 'Name',
      venueLabel: 'Versammlungsort',
      icoLabel: 'Registernummer (IČO)',
      pastorLabel: 'Gesetzlicher Vertreter'
    }
  },
  first: {
    hero: {
      eyebrow: 'Zum ersten Mal hier?',
      h1: 'Sie brauchen sich vor nichts zu fürchten',
      p: 'Wir wissen, dass es nicht leicht ist, zum ersten Mal unter fremde Menschen zu kommen. Hier ist eine ehrliche Beschreibung dessen, was Sie erwartet — ohne Überraschungen.'
    },
    steps: {
      eyebrow: 'Schritt für Schritt',
      h2: 'So sieht ein Sonntagvormittag aus',
      p: 'Das Gebäude öffnet um 10:30 Uhr, der Gottesdienst beginnt um 11:00 Uhr und dauert etwa 90 Minuten. Danach ist Zeit für einen Kaffee — und gehen können Sie jederzeit.',
      s1t: 'Sie kommen an und parken',
      s1d: 'Direkt am Gebäude können Sie parken. Der Eingang wird mit anderen Mietern geteilt — unser Bereich liegt gleich rechts hinter der Tür. Das Gebäude ist ab 10:30 Uhr geöffnet, Sie können also in Ruhe eintreffen.',
      s2t: 'Jemand begrüßt Sie',
      s2d: 'Am Eingang empfängt Sie jemand von uns, hilft Ihnen weiter und beantwortet Ihre Fragen. Im Foyer gibt es einen Raum mit Sesseln und Tischen, wo Sie vor Beginn Kaffee, Tee und eine Kleinigkeit zu essen bekommen und in Ruhe jemanden kennenlernen können. Sie müssen sich nirgends eintragen und nichts ausfüllen.',
      s3t: 'Um 11:00 Uhr beginnt der Lobpreis',
      s3d: 'Die ersten etwa fünfundzwanzig Minuten singen wir gemeinsam. Sie können mitsingen, stehen, sitzen oder einfach zuhören — ganz so, wie es Ihnen angenehm ist.',
      s4t: 'Danach folgt die Predigt',
      s4d: 'Die Predigt dauert etwa 35 bis 45 Minuten. Wir sprechen verständlich und versuchen, die Bibel mit dem Alltag zu verbinden.',
      s5t: 'Sie bleiben auf einen Kaffee',
      s5d: 'Danach ist Zeit für Gespräche. Wenn Sie lieber unauffällig gehen möchten, ist das völlig in Ordnung.'
    },
    faq: {
      eyebrow: 'Häufige Fragen',
      h2: 'Was uns am häufigsten gefragt wird',
      q1: 'Was soll ich anziehen?',
      a1: 'Das, worin Sie sich wohlfühlen. Bei uns sehen Sie Kapuzenpullis ebenso wie Hemden. Wir beurteilen niemanden nach seiner Kleidung.',
      q2: 'Muss ich etwas bezahlen oder geben?',
      a2: 'Nein. Der Eintritt ist frei. Während des Gottesdienstes gibt es eine freiwillige Kollekte, aber niemand beobachtet Sie und niemand erwartet etwas von Ihnen.',
      q3: 'Ich bin nicht gläubig. Darf ich trotzdem kommen?',
      a3: 'Selbstverständlich. Viele Menschen sind lange zu uns gekommen, bevor sie sich entschieden haben, überhaupt etwas zu glauben. Fragen und Zweifel sind bei uns willkommen.',
      q4: 'Wie lange dauert das Ganze?',
      a4: 'Der Gottesdienst dauert etwa 90 Minuten. Danach folgt eine unverbindliche Zeit für Kaffee und Gespräche.',
      q5: 'Was mache ich mit meinen Kindern?',
      a5: 'Kinder sind herzlich willkommen und können während des Gottesdienstes bei Ihnen bleiben. Ein eigenes Kinderprogramm haben wir derzeit nicht — die Gemeinde besteht heute überwiegend aus Erwachsenen.',
      q6: 'Muss ich mich vorher anmelden?',
      a6: 'Nein. Kommen Sie einfach vorbei.',
      q7: 'In welcher Sprache findet der Gottesdienst statt?',
      a7: 'Die Gottesdienste finden auf Tschechisch statt. Wegen der Nähe zur Grenze treffen Sie bei uns auch polnischsprachige Menschen. Wenn Sie sprachliche Unterstützung brauchen, schreiben Sie uns vorher — wir finden eine Lösung.',
      q8: 'Ist das Gebäude barrierefrei?',
      a8: 'Am Eingang gibt es eine Rampe, über die Sie mit einem Kinderwagen problemlos hineinkommen. Für einen Rollstuhl ist sie allerdings recht steil, deshalb empfehlen wir eine Begleitperson. Sagen Sie uns vorher Bescheid, wir helfen Ihnen gern.'
    },
    cta: {
      h2: 'Haben Sie noch eine Frage?',
      p: 'Schreiben Sie uns. Wir antworten in der Regel innerhalb von zwei Tagen, und niemand wird Sie zu irgendetwas drängen.'
    }
  },
  sermons: {
    hero: {
      eyebrow: 'Predigten',
      h1: 'Hören Sie, wann Sie möchten',
      p: 'Predigten und Konferenzaufzeichnungen veröffentlichen wir seit Jahren regelmäßig. Alles finden Sie auf unserem YouTube-Kanal — kostenlos und ohne Anmeldung.'
    },
    playBtn: 'Neuestes Video abspielen',
    live: {
      eyebrow: 'Neuestes',
      h2: 'Die neueste Aufzeichnung des Kanals'
    },
    channel: {
      eyebrow: 'Archiv',
      h2: 'Das gesamte Archiv auf YouTube',
      p: 'Auf dem Kanal finden Sie einzelne Sonntagspredigten, thematische Reihen und vollständige Konferenzaufzeichnungen. Abonnieren Sie den Kanal, dann verpassen Sie nichts.'
    },
    links: {
      videos: 'Videos',
      playlists: 'Playlists'
    },
    cards: {
      c1t: 'Sonntagspredigten',
      c1d: 'Aufzeichnungen einzelner Sonntagsgottesdienste — Bibelauslegung, Zeugnisse und Gebet.',
      c2t: 'Konferenzen und Gäste',
      c2d: 'Längere Aufzeichnungen von Konferenzen und von Gästen, die wir bei uns begrüßen durften.'
    },
    follow: {
      h2: 'Folgen Sie uns auch anderswo',
      p: 'Videos, Fotos und kurze Ankündigungen teilen wir auch auf Facebook und Instagram.'
    }
  },
  photos: {
    hero: 'Sonntagsgottesdienst der Gemeinde Sbor Víry in Třinec',
    about1: 'Pastor Petr Lysek spricht zu jungen Menschen',
    about2: 'Erhobene Hände im Lobpreis',
    pastor: 'Pastor Petr Lysek hält eine Bibel hoch',
    first: 'Das Foyer mit Sesseln und Tischen, wo sich die Leute vor dem Gottesdienst treffen'
  },
  gallery: {
    prev: 'Vorherige Fotos',
    next: 'Nächste Fotos',
    pause: 'Diashow anhalten',
    play: 'Diashow fortsetzen',
    slide: 'Foto %1 von %2',
    page: 'Fotogruppe %1 von %2',
    eyebrow: 'Fotogalerie',
    h2: 'Sehen Sie, wie es bei uns aussieht',
    p: 'Einige Aufnahmen von unseren Treffen und aus dem Leben der Gemeinde.',
    alt: 'Aus dem Leben der Gemeinde Sbor Víry in Třinec'
  },
  news: {
    hero: {
      eyebrow: 'Aktuelles',
      h1: 'Was bei uns geschieht',
      p: 'Neuigkeiten, Veranstaltungen, Konferenzen und Ankündigungen aus dem Leben der Gemeinde.'
    },
    empty: 'Hier gibt es noch keine Beiträge.',
    readMore: 'Weiterlesen'
  },
  ministries: {
    hero: {
      eyebrow: 'Was wir tun',
      h1: 'Gemeinde ist mehr als Sonntag',
      p: 'Neben dem Sonntagsgottesdienst treffen wir uns donnerstags in Hauskreisen, beten gemeinsam und gehen jeden Montag mit dem Evangelium in die Innenstadt von Třinec.'
    },
    m1t: 'Sonntagsgottesdienst',
    m1d: 'Das Haupttreffen der ganzen Gemeinde. Um 11:00 Uhr beginnen wir mit Lobpreis, danach folgen Bibelauslegung, Gebet und Zeit füreinander.',
    m2t: 'Lobpreis und Musik',
    m2d: 'Das Team, das den musikalischen Teil des Gottesdienstes vorbereitet. Neue Musiker sind uns jederzeit willkommen.',
    m3t: 'Evangelisation in der Stadt',
    m3d: 'Jeden Montagnachmittag stehen wir auf dem T.-G.-Masaryk-Platz, kommen mit Menschen ins Gespräch und bieten an, mit ihnen zu beten.',
    m4t: 'Gebet',
    m4d: 'Gebetstreffen unter der Woche. Wir beten für die Gemeinde, für einzelne Menschen und für Třinec.',
    cta: {
      h2: 'Möchten Sie mitmachen?',
      p: 'Schreiben Sie uns, wofür Sie sich interessieren, und wir bringen Sie mit den richtigen Leuten zusammen.'
    },
    m5t: 'Hauskreise',
    m5d: 'Donnerstags um 18:00 Uhr treffen wir uns in kleineren Gruppen in Privatwohnungen — wir lesen die Bibel, sprechen über das Leben und beten gemeinsam. Hier lernt man einander wirklich kennen. Schreiben Sie uns, und wir vermitteln Ihnen gern einen Hauskreis.'
  },
  give: {
    hero: {
      eyebrow: 'Unterstützen Sie uns',
      h1: 'Ihre Unterstützung macht einen Unterschied',
      p: 'Den Betrieb der Gemeinde, die Evangelisation in der Stadt und die Hilfe für Menschen in Not finanzieren wir aus freiwilligen Spenden.'
    },
    why: {
      eyebrow: 'Warum spenden',
      h2: 'Wofür Ihre Spenden verwendet werden',
      i1: 'Betrieb und Instandhaltung der Räume, in denen wir uns treffen;',
      i2: 'Evangelisation im Stadtzentrum — Material und Druck;',
      i3: 'Aufzeichnung und Veröffentlichung von Predigten und Konferenzen;',
      i4: 'praktische Hilfe für Menschen in schwierigen Lebenslagen;',
      i5: 'Unterstützung von Missions- und Wohltätigkeitsarbeit.',
      note: 'Kein Betrag ist zu klein, und niemand wird bei uns danach beurteilt, wie viel er gibt. Jede Spende ist völlig freiwillig.'
    },
    bank: {
      eyebrow: 'Bankverbindung',
      h2: 'So können Sie spenden',
      bank: 'Bank',
      account: 'Kontonummer',
      iban: 'IBAN',
      swift: 'SWIFT / BIC',
      vs: 'Variabler Symbolcode',
      owner: 'Kontoinhaber',
      todo: 'Die Bankverbindung ist noch nicht eingetragen. Ergänzen Sie sie in der Datei assets/js/content.js.',
      hint: 'Im Verwendungszweck können Sie den Zweck Ihrer Spende angeben, zum Beispiel „Kinder“ oder „Mission“.'
    },
    receipt: {
      h2: 'Spendenbescheinigung',
      p: 'Wenn Sie für steuerliche Zwecke eine Spendenbescheinigung benötigen, schreiben Sie uns eine E-Mail — wir stellen sie Ihnen gern aus.'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Kontakt',
      h1: 'Melden Sie sich bei uns',
      p: 'Haben Sie eine Frage, brauchen Sie Gebet oder möchten Sie einfach reden? Schreiben Sie uns.'
    },
    labels: {
      venue: 'Wo wir uns treffen',
      email: 'E-Mail',
      messenger: 'Schreiben Sie uns auf Facebook',
      phone: 'Telefon',
      pastor: 'Pastor',
      ico: 'Registernummer (IČO)',
      social: 'Soziale Netzwerke'
    },
    form: {
      h2: 'Schreiben Sie uns',
      p: 'Wir antworten in der Regel innerhalb von zwei Werktagen.',
      name: 'Vor- und Nachname',
      email: 'E-Mail',
      phone: 'Telefon (optional)',
      subject: 'Betreff',
      message: 'Ihre Nachricht',
      subjectOptions: [
        'Allgemeine Anfrage',
        'Ich möchte zu Besuch kommen',
        'Gebetsanliegen',
        'Evangelisation',
        'Sonstiges'
      ],
      consent: 'Ich bin damit einverstanden, dass Sbor Víry, z. s. meine Daten zur Beantwortung dieser Nachricht verarbeitet.',
      send: 'Nachricht senden',
      hint: 'Das Formular öffnet Ihr E-Mail-Programm mit einer vorbereiteten Nachricht.'
    },
    map: {
      h2: 'So finden Sie uns',
      p: 'Hraniční 213, 739 61 Třinec, Tschechien. Direkt am Gebäude können Sie parken. Der Eingang wird mit anderen Mietern geteilt; unser Gemeindebereich liegt gleich rechts hinter der Tür.'
    }
  },
  footer: {
    tagline: 'Christliche Gemeinde in Třinec. Wir treffen uns jeden Sonntag und würden Sie gern bei uns sehen.',
    explore: 'Website',
    connect: 'Folgen Sie uns',
    visit: 'Besuchen Sie uns',
    rights: 'Alle Rechte vorbehalten.',
    privacy: 'Datenschutz'
  },
  notfound: {
    h1: 'Diese Seite haben wir nicht gefunden',
    p: 'Der Link ist wahrscheinlich ungültig oder die Seite wurde verschoben. Versuchen Sie es noch einmal von vorn.',
    btn: 'Zurück zur Startseite'
  },
  privacy: {
    hero: {
      eyebrow: 'Rechtliche Hinweise',
      h1: 'Datenschutz',
      p: 'Kurz und ohne Juristendeutsch: welche Daten wir über Sie verarbeiten und wozu.'
    },
    h2a: 'Wer ist der Verantwortliche',
    pa: 'Verantwortlich für die Verarbeitung der personenbezogenen Daten ist Sbor Víry, z. s., Registernummer 26596865, Kontaktadresse Hraniční 213, 739 61 Třinec, Tschechien.',
    h2b: 'Welche Daten wir verarbeiten',
    pb: 'Wir verarbeiten ausschließlich die Daten, die Sie uns selbst über das Kontaktformular oder per E-Mail senden — in der Regel Name, E-Mail-Adresse, gegebenenfalls Telefonnummer und den Inhalt Ihrer Nachricht.',
    h2c: 'Wozu wir sie verarbeiten',
    pc: 'Ausschließlich dazu, Ihnen antworten zu können. Wir verkaufen Ihre Daten nicht und geben sie nicht zu Marketingzwecken an Dritte weiter.',
    h2d: 'Cookies und Reichweitenmessung',
    pd: 'Diese Website verwendet keine Tracking- oder Werbe-Cookies. Eingebettete YouTube-Videos und Kartendienste können nach den Bedingungen der jeweiligen Anbieter eigene Cookies setzen.',
    h2e: 'Ihre Rechte',
    pe: 'Sie haben das Recht auf Auskunft über Ihre Daten sowie auf deren Berichtigung und Löschung. Schreiben Sie uns einfach an unsere Kontaktadresse, wir kümmern uns darum.'
  }
},

/* ########  ANGLIČTINA  ##################################################### */
en: {
  langName: 'English',
  // Krátké představení pro vyhledávače a AI — díky němu nás nespletou
  // s podobně znějícími sbory jinde. Ve strukturovaných datech jde
  // do pole disambiguatingDescription (viz renderSchema v site.js).
  identita: 'Christian church in Třinec at Hraniční 213, Czechia. Registered association, company ID 26596865, active since 2002.',
  meta: {
    home: {
      title: 'Sbor Víry — Třinec | a Christian church',
      desc: 'Sbor Víry, z. s. — a Christian church in Třinec, Czechia. Services every Sunday at Hraniční 213. Come exactly as you are.'
    },
    about: {
      title: 'About us | Sbor Víry — Třinec',
      desc: 'Who we are, what we believe and how our church began. Sbor Víry, z. s., Hraniční 213, Třinec.'
    },
    first: {
      title: 'First time here | Sbor Víry — Třinec',
      desc: 'What to expect on your first visit. Honest answers to the usual questions.'
    },
    sermons: {
      title: 'Sermons and recordings | Sbor Víry — Třinec',
      desc: 'Recordings of sermons and conferences on our YouTube channel.'
    },
    news: {
      title: 'News | Sbor Víry — Třinec',
      desc: 'Updates, events and announcements from the life of our church.'
    },
    ministries: {
      title: 'What we do | Sbor Víry — Třinec',
      desc: 'Sunday services, worship, evangelism in the centre of Třinec and prayer.'
    },
    give: {
      title: 'Support us | Sbor Víry — Třinec',
      desc: 'How you can support the work of our church with a voluntary gift.'
    },
    contact: {
      title: 'Contact | Sbor Víry — Třinec',
      desc: 'Hraniční 213, 739 61 Třinec, Czechia. Write to us or simply drop by.'
    },
    privacy: {
      title: 'Privacy policy | Sbor Víry — Třinec',
      desc: 'How Sbor Víry in Třinec handles the personal data you send through the contact form, and what rights you have under the GDPR.'
    },
    notfound: {
      title: 'Page not found | Sbor Víry — Třinec',
      desc: ''
    }
  },
  ui: {
    skip: 'Skip to main content',
    menu: 'Menu',
    language: 'Language',
    photoPlaceholder: 'Space for a photograph',
    loading: 'Loading…'
  },
  nav: {
    home: 'Home',
    about: 'About us',
    first: 'First time',
    sermons: 'Sermons',
    news: 'News',
    ministries: 'What we do',
    give: 'Support us',
    contact: 'Contact'
  },
  cta: {
    first: 'First time here',
    watch: 'Watch sermons',
    contact: 'Write to us',
    more: 'Find out more',
    allNews: 'All news',
    youtube: 'Open our YouTube channel',
    directions: 'Get directions',
    join: 'Come and join us',
    support: 'Support the church'
  },
  home: {
    hero: {
      eyebrow: 'A Christian church in Třinec',
      h1: 'Come exactly<br>as you are',
      lead: 'We are ordinary people who have experienced that God changes lives. We meet in Třinec every Sunday, and we would love to see you among us.',
      m1: 'Sunday service',
      m2: 'Where we meet',
      m3: 'Watch online'
    },
    welcome: {
      eyebrow: 'Welcome',
      h2: 'It does not matter where you are coming from',
      p: 'It makes no difference how old you are, what you currently believe, how you dress or what lies behind you. There is a place for you here — and nobody will demand anything from you.',
      c1t: 'Sunday service',
      c1d: 'At 11:00 we begin with worship together, followed by clear Bible teaching and prayer. The building opens at 10:30.',
      c2t: 'Evangelism in the town',
      c2d: 'Every Monday afternoon we stand on T. G. Masaryk Square and share the gospel with the people of Třinec.',
      c3t: 'Prayer',
      c3d: 'We also meet to pray — for the church, for individual people and for our town.'
    },
    times: {
      eyebrow: 'When and where',
      h2: 'We meet regularly',
      p: 'The main gathering of the whole church is on Sunday morning. During the week we meet in home groups, pray together and take the gospel into the town centre.',
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
      v1t: 'The Bible',
      v1d: 'We teach from Scripture clearly, without unnecessary religious jargon.',
      v2t: 'Prayer',
      v2d: 'We count on God hearing and acting. We pray for people and for our town.',
      v3t: 'Family',
      v3d: 'A church is not a building or a programme. It is real people who care about one another.',
      v4t: 'Openness',
      v4d: 'The door is open to everyone. Questions and doubts are not a problem here.'
    },
    news: {
      eyebrow: 'News',
      h2: 'What is happening',
      p: 'Short updates on what we are living through and what we are preparing.'
    },
    cta: {
      h2: 'See you on Sunday?',
      p: 'You do not need to sign up in advance, bring anything or know anything. Just come.'
    }
  },
  about: {
    hero: {
      eyebrow: 'About us',
      h1: 'A church built on people',
      p: 'We are a community of Christians in Třinec. We believe Christianity is not a set of rules but a living relationship that transforms everyday life.'
    },
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
      b1t: 'The Bible',
      b1d: 'The Bible is the inspired Word of God and the highest authority for faith and everyday life.',
      b2t: 'God',
      b2d: 'We believe in one God, who reveals himself as Father, Son and Holy Spirit.',
      b3t: 'Jesus Christ',
      b3d: 'Jesus is the Son of God. He died for our sins, was raised from the dead and is alive.',
      b4t: 'Salvation',
      b4d: 'Salvation is a gift of God’s grace received through faith — it is not a reward for our performance.',
      b5t: 'The Holy Spirit',
      b5d: 'The Holy Spirit gives strength to live the Christian life and equips the church to serve others.',
      b6t: 'The Church',
      b6d: 'The church is a family, not a building. It is a community of people who belong to Christ and to one another.',
      b7t: 'Hope',
      b7d: 'Jesus will return. Death does not have the last word, and that changes how we live today.'
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
      eyebrow: 'Organisation details',
      h2: 'Legal information',
      orgLabel: 'Name',
      venueLabel: 'Meeting place',
      icoLabel: 'Company ID (IČO)',
      pastorLabel: 'Statutory representative'
    }
  },
  first: {
    hero: {
      eyebrow: 'First time here?',
      h1: 'There is nothing to worry about',
      p: 'We know that walking in among strangers for the first time is not easy. Here is an honest description of what awaits you — no surprises.'
    },
    steps: {
      eyebrow: 'Step by step',
      h2: 'What a Sunday morning looks like',
      p: 'The building opens at 10:30, the service starts at 11:00 and lasts about 90 minutes. Afterwards there is time for coffee — and you can leave whenever you like.',
      s1t: 'You arrive and park',
      s1d: 'There is parking right by the building. The entrance is shared with other tenants — our part is immediately on the right once you are through the door. The building opens at 10:30, so there is no need to rush.',
      s2t: 'Someone welcomes you',
      s2d: 'At the entrance one of our people will meet you, point you in the right direction and answer your questions. In the foyer there is a room with armchairs and tables where you can have coffee, tea and a light snack before we begin, and get to know someone without any rush. There is nothing to sign and no form to fill in.',
      s3t: 'Worship starts at 11:00',
      s3d: 'For the first twenty-five minutes or so we sing together. You can sing, stand, sit or simply listen — whatever feels comfortable.',
      s4t: 'Then comes the teaching',
      s4d: 'The sermon lasts roughly 35 to 45 minutes. We speak plainly and try to connect the Bible with ordinary life.',
      s5t: 'You stay for coffee',
      s5d: 'Afterwards there is time to talk. If you would rather slip away quietly, that is perfectly fine too.'
    },
    faq: {
      eyebrow: 'Frequently asked',
      h2: 'What people ask most often',
      q1: 'What should I wear?',
      a1: 'Whatever you feel comfortable in. You will see hoodies and shirts alike. We do not judge anyone by their clothes.',
      q2: 'Do I have to pay or give anything?',
      a2: 'No. Entry is free. There is a voluntary offering during the service, but nobody is watching you and nothing is expected of you.',
      q3: 'I am not a believer. Can I still come?',
      a3: 'Of course. Many people came here for a long time before they decided to believe anything. Questions and doubts are welcome.',
      q4: 'How long does the whole thing take?',
      a4: 'The service lasts about 90 minutes, followed by an informal time for coffee and conversation.',
      q5: 'What do I do with my children?',
      a5: 'Children are very welcome and can stay with you throughout the service. We do not run a separate children’s programme at the moment — the church today is made up mostly of adults.',
      q6: 'Do I need to register in advance?',
      a6: 'No. Simply come along.',
      q7: 'What language is the service in?',
      a7: 'Services are held in Czech. Because we are close to the border, you will also meet Polish speakers here. If you need help with the language, write to us in advance and we will sort something out.',
      q8: 'Is the building step-free?',
      a8: 'There is a ramp at the entrance, which works well for a pushchair. For a wheelchair it is rather steep, so we recommend bringing someone with you. Let us know in advance and we will gladly help.'
    },
    cta: {
      h2: 'Still have a question?',
      p: 'Write to us. We usually reply within two days, and nobody will push you into anything.'
    }
  },
  sermons: {
    hero: {
      eyebrow: 'Sermons',
      h1: 'Listen whenever you like',
      p: 'We have been publishing sermons and conference recordings systematically for years. You will find everything on our YouTube channel — free and without registration.'
    },
    playBtn: 'Play the latest video',
    live: {
      eyebrow: 'Latest',
      h2: 'The most recent recording'
    },
    channel: {
      eyebrow: 'Archive',
      h2: 'The full archive on YouTube',
      p: 'On the channel you will find individual Sunday sermons, themed series and complete conference recordings. Subscribe so that you do not miss anything.'
    },
    links: {
      videos: 'Videos',
      playlists: 'Playlists'
    },
    cards: {
      c1t: 'Sunday sermons',
      c1d: 'Recordings of individual Sunday services — Bible teaching, testimonies and prayer.',
      c2t: 'Conferences and guests',
      c2d: 'Longer recordings from conferences and from the guest speakers we have welcomed.'
    },
    follow: {
      h2: 'Follow us elsewhere too',
      p: 'We also share videos, photographs and quick announcements on Facebook and Instagram.'
    }
  },
  photos: {
    hero: 'A Sunday service of Sbor Víry in Třinec',
    about1: 'Pastor Petr Lysek speaking to young people',
    about2: 'Hands raised in worship',
    pastor: 'Pastor Petr Lysek holding up a Bible',
    first: 'The foyer with armchairs and tables where people gather before the service'
  },
  gallery: {
    prev: 'Previous photos',
    next: 'Next photos',
    pause: 'Pause the slideshow',
    play: 'Play the slideshow',
    slide: 'Photo %1 of %2',
    page: 'Photo group %1 of %2',
    eyebrow: 'Photos',
    h2: 'See what it looks like here',
    p: 'A few pictures from our gatherings and from the life of the church.',
    alt: 'From the life of Sbor Víry in Třinec'
  },
  news: {
    hero: {
      eyebrow: 'News',
      h1: 'What is happening',
      p: 'Updates, events, conferences and announcements from the life of our church.'
    },
    empty: 'There are no news items yet.',
    readMore: 'Read more'
  },
  ministries: {
    hero: {
      eyebrow: 'What we do',
      h1: 'Church is more than Sunday',
      p: 'Besides the Sunday service we meet in home groups on Thursdays, pray together, and every Monday we take the gospel into the centre of Třinec.'
    },
    m1t: 'Sunday service',
    m1d: 'The main gathering of the whole church. We begin at 11:00 with worship, followed by Bible teaching, prayer and time for one another.',
    m2t: 'Worship and music',
    m2d: 'The team that prepares the musical part of the service. We are always glad to welcome new musicians.',
    m3t: 'Evangelism in the town',
    m3d: 'Every Monday afternoon we stand on T. G. Masaryk Square, talk with people and offer to pray with them.',
    m4t: 'Prayer',
    m4d: 'Prayer meetings during the week. We pray for the church, for individual people and for Třinec.',
    cta: {
      h2: 'Would you like to get involved?',
      p: 'Tell us what interests you and we will connect you with the right people.'
    },
    m5t: 'Home groups',
    m5d: 'On Thursdays at 18:00 we meet in smaller groups in one another’s homes — we read the Bible, talk about life and pray together. This is where people really get to know each other. Write to us and we will gladly point you to a group.'
  },
  give: {
    hero: {
      eyebrow: 'Support us',
      h1: 'Your support makes a difference',
      p: 'The running of the church, our evangelism in the town and our help for people in need are all funded by voluntary gifts.'
    },
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
      bank: 'Bank',
      account: 'Account number',
      iban: 'IBAN',
      swift: 'SWIFT / BIC',
      vs: 'Variable symbol',
      owner: 'Account holder',
      todo: 'The bank details have not been filled in yet. Add them in the file assets/js/content.js.',
      hint: 'You may state the purpose of your gift in the payment reference, for example “children” or “mission”.'
    },
    receipt: {
      h2: 'Confirmation of your gift',
      p: 'If you need written confirmation of your gift for tax purposes, send us an email and we will gladly issue one.'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Contact',
      h1: 'Get in touch',
      p: 'Do you have a question, would you like prayer, or do you simply want to talk? Write to us.'
    },
    labels: {
      venue: 'Where we meet',
      email: 'Email',
      messenger: 'Message us on Facebook',
      phone: 'Telephone',
      pastor: 'Pastor',
      ico: 'Company ID (IČO)',
      social: 'Social media'
    },
    form: {
      h2: 'Send us a message',
      p: 'We usually reply within two working days.',
      name: 'Full name',
      email: 'Email',
      phone: 'Telephone (optional)',
      subject: 'Subject',
      message: 'Your message',
      subjectOptions: [
        'General enquiry',
        'I would like to visit',
        'Prayer request',
        'Evangelism',
        'Other'
      ],
      consent: 'I agree that Sbor Víry, z. s. may process my details in order to reply to this message.',
      send: 'Send message',
      hint: 'The form will open your email program with the message ready to send.'
    },
    map: {
      h2: 'Where to find us',
      p: 'Hraniční 213, 739 61 Třinec, Czechia. There is parking right by the building. The entrance is shared with other tenants; our part is immediately on the right once you are inside.'
    }
  },
  footer: {
    tagline: 'A Christian church in Třinec. We meet every Sunday and would love to see you among us.',
    explore: 'Site',
    connect: 'Follow us',
    visit: 'Visit us',
    rights: 'All rights reserved.',
    privacy: 'Privacy notice'
  },
  notfound: {
    h1: 'We could not find that page',
    p: 'The link is probably out of date or the page has moved. Try starting again from the beginning.',
    btn: 'Back to the home page'
  },
  privacy: {
    hero: {
      eyebrow: 'Legal',
      h1: 'Privacy notice',
      p: 'Briefly and without legal jargon: what information we hold about you and why.'
    },
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

/* ########  ŠPANĚLŠTINA  #################################################### */
es: {
  langName: 'Español',
  // Krátké představení pro vyhledávače a AI — díky němu nás nespletou
  // s podobně znějícími sbory jinde. Ve strukturovaných datech jde
  // do pole disambiguatingDescription (viz renderSchema v site.js).
  identita: 'Iglesia cristiana en Třinec, Hraniční 213 (Chequia). Asociación registrada, IČO 26596865, activa desde 2002.',
  meta: {
    home: {
      title: 'Sbor Víry — Třinec | iglesia cristiana',
      desc: 'Sbor Víry, z. s. — iglesia cristiana en Třinec (Chequia). Cultos todos los domingos en Hraniční 213. Ven tal y como eres.'
    },
    about: {
      title: 'Quiénes somos | Sbor Víry — Třinec',
      desc: 'Quiénes somos, en qué creemos y cómo nació nuestra iglesia. Sbor Víry, z. s., Hraniční 213, Třinec.'
    },
    first: {
      title: 'Es mi primera vez | Sbor Víry — Třinec',
      desc: 'Qué puedes esperar en tu primera visita. Respuestas sinceras a las preguntas más habituales.'
    },
    sermons: {
      title: 'Predicaciones y grabaciones | Sbor Víry — Třinec',
      desc: 'Grabaciones de predicaciones y conferencias en nuestro canal de YouTube.'
    },
    news: {
      title: 'Novedades | Sbor Víry — Třinec',
      desc: 'Noticias, eventos y anuncios de la vida de nuestra iglesia.'
    },
    ministries: {
      title: 'Qué hacemos | Sbor Víry — Třinec',
      desc: 'Cultos dominicales, alabanza, evangelización en el centro de Třinec y oración.'
    },
    give: {
      title: 'Apóyanos | Sbor Víry — Třinec',
      desc: 'Cómo puedes apoyar el trabajo de la iglesia con una ofrenda voluntaria.'
    },
    contact: {
      title: 'Contacto | Sbor Víry — Třinec',
      desc: 'Hraniční 213, 739 61 Třinec, Chequia. Escríbenos o simplemente ven a vernos.'
    },
    privacy: {
      title: 'Protección de datos | Sbor Víry — Třinec',
      desc: 'Cómo la iglesia Sbor Víry de Třinec trata los datos personales del formulario de contacto y qué derechos tiene usted según el RGPD.'
    },
    notfound: {
      title: 'Página no encontrada | Sbor Víry — Třinec',
      desc: ''
    }
  },
  ui: {
    skip: 'Ir al contenido principal',
    menu: 'Menú',
    language: 'Idioma',
    photoPlaceholder: 'Espacio para una fotografía',
    loading: 'Cargando…'
  },
  nav: {
    home: 'Inicio',
    about: 'Quiénes somos',
    first: 'Primera vez',
    sermons: 'Predicaciones',
    news: 'Novedades',
    ministries: 'Qué hacemos',
    give: 'Apóyanos',
    contact: 'Contacto'
  },
  cta: {
    first: 'Es mi primera vez',
    watch: 'Ver predicaciones',
    contact: 'Escríbenos',
    more: 'Saber más',
    allNews: 'Todas las novedades',
    youtube: 'Abrir nuestro canal de YouTube',
    directions: 'Cómo llegar',
    join: 'Ven a vernos',
    support: 'Apoyar a la iglesia'
  },
  home: {
    hero: {
      eyebrow: 'Iglesia cristiana en Třinec',
      h1: 'Ven<br>tal y como eres',
      lead: 'Somos personas corrientes que hemos experimentado que Dios cambia vidas. Nos reunimos en Třinec todos los domingos y nos encantaría verte entre nosotros.',
      m1: 'Culto dominical',
      m2: 'Dónde nos reunimos',
      m3: 'Míranos en línea'
    },
    welcome: {
      eyebrow: 'Bienvenido',
      h2: 'No importa de dónde vengas',
      p: 'Da igual la edad que tengas, en qué creas hoy, cómo vistas o qué hayas vivido. Aquí hay un lugar para ti, y nadie te va a exigir nada.',
      c1t: 'Culto dominical',
      c1d: 'A las 11:00 empezamos con la alabanza, seguida de una enseñanza bíblica clara y un tiempo de oración. El edificio abre a las 10:30.',
      c2t: 'Evangelización en la ciudad',
      c2d: 'Cada lunes por la tarde estamos en la plaza T. G. Masaryk y compartimos el evangelio con la gente de Třinec.',
      c3t: 'Oración',
      c3d: 'También nos reunimos para orar: por la iglesia, por personas concretas y por nuestra ciudad.'
    },
    times: {
      eyebrow: 'Cuándo y dónde',
      h2: 'Nos reunimos con regularidad',
      p: 'La reunión principal de toda la iglesia es el domingo por la mañana. Durante la semana nos reunimos en grupos en casas, oramos juntos y salimos con el evangelio al centro de la ciudad.',
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
      v1t: 'La Biblia',
      v1d: 'Enseñamos las Escrituras de forma comprensible, sin lenguaje religioso innecesario.',
      v2t: 'La oración',
      v2d: 'Contamos con que Dios escucha y actúa. Oramos por las personas y por nuestra ciudad.',
      v3t: 'La familia',
      v3d: 'La iglesia no es un edificio ni un programa. Son personas concretas que se cuidan entre sí.',
      v4t: 'La apertura',
      v4d: 'La puerta está abierta para todos. Las preguntas y las dudas no son un problema aquí.'
    },
    news: {
      eyebrow: 'Novedades',
      h2: 'Qué está pasando',
      p: 'Noticias breves sobre lo que estamos viviendo y lo que preparamos.'
    },
    cta: {
      h2: '¿Nos vemos el domingo?',
      p: 'No hace falta avisar con antelación, no tienes que traer nada ni saber nada. Basta con venir.'
    }
  },
  about: {
    hero: {
      eyebrow: 'Quiénes somos',
      h1: 'Una iglesia construida sobre personas',
      p: 'Somos una comunidad de cristianos en Třinec. Creemos que el cristianismo no es un conjunto de normas, sino una relación viva que transforma la vida cotidiana.'
    },
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
      b1t: 'La Biblia',
      b1d: 'La Biblia es la Palabra inspirada de Dios y la máxima autoridad para la fe y la vida diaria.',
      b2t: 'Dios',
      b2d: 'Creemos en un solo Dios, que se revela como Padre, Hijo y Espíritu Santo.',
      b3t: 'Jesucristo',
      b3d: 'Jesús es el Hijo de Dios. Murió por nuestros pecados, resucitó y vive.',
      b4t: 'La salvación',
      b4d: 'La salvación es un don de la gracia de Dios que se recibe por la fe; no es una recompensa por nuestros méritos.',
      b5t: 'El Espíritu Santo',
      b5d: 'El Espíritu Santo da fuerza para vivir la vida cristiana y capacita a la iglesia para servir a los demás.',
      b6t: 'La Iglesia',
      b6d: 'La iglesia es una familia, no un edificio. Es una comunidad de personas que pertenecen a Cristo y unas a otras.',
      b7t: 'La esperanza',
      b7d: 'Jesús volverá. La muerte no tiene la última palabra, y eso cambia nuestra manera de vivir hoy.'
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
      eyebrow: 'Datos de la organización',
      h2: 'Información legal',
      orgLabel: 'Denominación',
      venueLabel: 'Lugar de reunión',
      icoLabel: 'CIF (IČO)',
      pastorLabel: 'Representante legal'
    }
  },
  first: {
    hero: {
      eyebrow: '¿Es tu primera vez?',
      h1: 'No tienes nada que temer',
      p: 'Sabemos que llegar por primera vez a un sitio lleno de desconocidos no es fácil. Aquí tienes una descripción sincera de lo que te espera, sin sorpresas.'
    },
    steps: {
      eyebrow: 'Paso a paso',
      h2: 'Cómo es un domingo por la mañana',
      p: 'El edificio abre a las 10:30, el culto empieza a las 11:00 y dura unos 90 minutos. Después hay tiempo para un café, y puedes irte cuando quieras.',
      s1t: 'Llegas y aparcas',
      s1d: 'Se puede aparcar justo al lado del edificio. La entrada es compartida con otros inquilinos: nuestra parte está justo a la derecha al pasar la puerta. El edificio abre a las 10:30, así que puedes llegar sin prisas.',
      s2t: 'Alguien te da la bienvenida',
      s2d: 'En la entrada te recibirá alguien de la iglesia, te orientará y responderá a tus preguntas. En el vestíbulo hay una sala con sillones y mesas donde, antes de empezar, puedes tomar un café o un té con algo ligero y conocer a alguien con calma. No hay que apuntarse en ningún sitio ni rellenar nada.',
      s3t: 'La alabanza empieza a las 11:00',
      s3d: 'Los primeros veinticinco minutos aproximadamente cantamos juntos. Puedes cantar, estar de pie, sentarte o simplemente escuchar; como te resulte más cómodo.',
      s4t: 'Después viene la enseñanza',
      s4d: 'La predicación dura entre 35 y 45 minutos. Hablamos con claridad y procuramos conectar la Biblia con la vida cotidiana.',
      s5t: 'Te quedas a tomar café',
      s5d: 'Al terminar hay tiempo para conversar. Si prefieres marcharte discretamente, también está perfectamente bien.'
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      h2: 'Lo que más nos preguntan',
      q1: '¿Cómo debo vestir?',
      a1: 'Como te sientas cómodo. Aquí verás tanto sudaderas como camisas. No juzgamos a nadie por su ropa.',
      q2: '¿Tengo que pagar o dar algo?',
      a2: 'No. La entrada es gratuita. Durante el culto se recoge una ofrenda voluntaria, pero nadie te observa ni espera nada de ti.',
      q3: 'No soy creyente. ¿Puedo venir igualmente?',
      a3: 'Por supuesto. Muchas personas vinieron aquí durante mucho tiempo antes de decidirse a creer en algo. Las preguntas y las dudas son bienvenidas.',
      q4: '¿Cuánto dura todo?',
      a4: 'El culto dura unos 90 minutos. Después hay un rato informal para tomar café y charlar.',
      q5: '¿Qué hago con mis hijos?',
      a5: 'Los niños son muy bienvenidos y pueden estar contigo durante todo el culto. De momento no tenemos un programa aparte para niños: la iglesia está formada hoy en día sobre todo por adultos.',
      q6: '¿Tengo que inscribirme antes?',
      a6: 'No. Basta con venir.',
      q7: '¿En qué idioma es el culto?',
      a7: 'Los cultos son en checo. Por la cercanía de la frontera, también encontrarás aquí personas que hablan polaco. Si necesitas ayuda con el idioma, escríbenos con antelación y lo resolvemos.',
      q8: '¿El edificio es accesible?',
      a8: 'En la entrada hay una rampa por la que se entra sin problema con un cochecito de bebé. Para una silla de ruedas resulta algo empinada, así que recomendamos venir acompañado. Avísanos con antelación y te ayudaremos con mucho gusto.'
    },
    cta: {
      h2: '¿Te queda alguna duda?',
      p: 'Escríbenos. Solemos responder en un par de días y nadie te va a presionar para nada.'
    }
  },
  sermons: {
    hero: {
      eyebrow: 'Predicaciones',
      h1: 'Escucha cuando quieras',
      p: 'Llevamos años publicando de forma sistemática nuestras predicaciones y las grabaciones de las conferencias. Lo encontrarás todo en nuestro canal de YouTube, gratis y sin registrarte.'
    },
    playBtn: 'Reproducir el último vídeo',
    live: {
      eyebrow: 'Lo más reciente',
      h2: 'La última grabación del canal'
    },
    channel: {
      eyebrow: 'Archivo',
      h2: 'Todo el archivo en YouTube',
      p: 'En el canal encontrarás las predicaciones dominicales, series temáticas y las grabaciones completas de las conferencias. Suscríbete para no perderte nada.'
    },
    links: {
      videos: 'Vídeos',
      playlists: 'Listas de reproducción'
    },
    cards: {
      c1t: 'Predicaciones dominicales',
      c1d: 'Grabaciones de cada culto dominical: enseñanza bíblica, testimonios y oración.',
      c2t: 'Conferencias e invitados',
      c2d: 'Grabaciones más largas de conferencias y de los invitados que hemos recibido.'
    },
    follow: {
      h2: 'Síguenos también aquí',
      p: 'Compartimos vídeos, fotografías y avisos rápidos en Facebook e Instagram.'
    }
  },
  photos: {
    hero: 'Un culto dominical de Sbor Víry en Třinec',
    about1: 'El pastor Petr Lysek hablando a los jóvenes',
    about2: 'Manos levantadas en la alabanza',
    pastor: 'El pastor Petr Lysek sosteniendo una Biblia en alto',
    first: 'El vestíbulo con sillones y mesas donde la gente se reúne antes del culto'
  },
  gallery: {
    prev: 'Fotos anteriores',
    next: 'Fotos siguientes',
    pause: 'Pausar el pase de fotos',
    play: 'Reanudar el pase de fotos',
    slide: 'Foto %1 de %2',
    page: 'Grupo de fotos %1 de %2',
    eyebrow: 'Galería',
    h2: 'Mira cómo es esto por dentro',
    p: 'Algunas fotos de nuestras reuniones y de la vida de la iglesia.',
    alt: 'De la vida de Sbor Víry en Třinec'
  },
  news: {
    hero: {
      eyebrow: 'Novedades',
      h1: 'Qué está pasando',
      p: 'Noticias, eventos, conferencias y anuncios de la vida de nuestra iglesia.'
    },
    empty: 'Todavía no hay novedades publicadas.',
    readMore: 'Seguir leyendo'
  },
  ministries: {
    hero: {
      eyebrow: 'Qué hacemos',
      h1: 'La iglesia es mucho más que el domingo',
      p: 'Además del culto dominical, los jueves nos reunimos en grupos en casas, oramos juntos y cada lunes salimos con el evangelio al centro de Třinec.'
    },
    m1t: 'Culto dominical',
    m1d: 'La reunión principal de toda la iglesia. Empezamos a las 11:00 con la alabanza, seguida de enseñanza bíblica, oración y tiempo los unos con los otros.',
    m2t: 'Alabanza y música',
    m2d: 'El equipo que prepara la parte musical del culto. También damos la bienvenida a nuevos músicos.',
    m3t: 'Evangelización en la ciudad',
    m3d: 'Cada lunes por la tarde estamos en la plaza T. G. Masaryk, hablamos con la gente y ofrecemos orar con ellos.',
    m4t: 'Oración',
    m4d: 'Reuniones de oración entre semana. Oramos por la iglesia, por personas concretas y por Třinec.',
    cta: {
      h2: '¿Quieres participar?',
      p: 'Cuéntanos qué te interesa y te pondremos en contacto con las personas adecuadas.'
    },
    m5t: 'Grupos en casas',
    m5d: 'Los jueves a las 18:00 nos reunimos en grupos pequeños en las casas: leemos la Biblia, hablamos de la vida y oramos juntos. Aquí es donde la gente llega a conocerse de verdad. Escríbenos y con mucho gusto te pondremos en contacto con un grupo.'
  },
  give: {
    hero: {
      eyebrow: 'Apóyanos',
      h1: 'Tu apoyo tiene sentido',
      p: 'El funcionamiento de la iglesia, la evangelización en la ciudad y la ayuda a personas necesitadas se financian con ofrendas voluntarias.'
    },
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
      bank: 'Banco',
      account: 'Número de cuenta',
      iban: 'IBAN',
      swift: 'SWIFT / BIC',
      vs: 'Símbolo variable',
      owner: 'Titular de la cuenta',
      todo: 'Los datos bancarios aún no están completados. Añádelos en el archivo assets/js/content.js.',
      hint: 'Puedes indicar el destino de tu donativo en el concepto, por ejemplo «niños» o «misión».'
    },
    receipt: {
      h2: 'Certificado del donativo',
      p: 'Si necesitas un certificado de tu donativo para fines fiscales, escríbenos por correo electrónico y te lo emitiremos con mucho gusto.'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Contacto',
      h1: 'Ponte en contacto',
      p: '¿Tienes alguna pregunta, necesitas oración o simplemente quieres hablar? Escríbenos.'
    },
    labels: {
      venue: 'Dónde nos reunimos',
      email: 'Correo electrónico',
      messenger: 'Escríbenos por Facebook',
      phone: 'Teléfono',
      pastor: 'Pastor',
      ico: 'CIF (IČO)',
      social: 'Redes sociales'
    },
    form: {
      h2: 'Escríbenos',
      p: 'Solemos responder en un plazo de dos días laborables.',
      name: 'Nombre y apellidos',
      email: 'Correo electrónico',
      phone: 'Teléfono (opcional)',
      subject: 'Asunto',
      message: 'Tu mensaje',
      subjectOptions: [
        'Consulta general',
        'Quiero visitaros',
        'Petición de oración',
        'Evangelización',
        'Otro'
      ],
      consent: 'Acepto que Sbor Víry, z. s. trate mis datos con el fin de responder a este mensaje.',
      send: 'Enviar mensaje',
      hint: 'El formulario abrirá tu programa de correo con el mensaje ya redactado.'
    },
    map: {
      h2: 'Dónde encontrarnos',
      p: 'Hraniční 213, 739 61 Třinec, Chequia. Se puede aparcar justo al lado del edificio. La entrada al edificio es compartida con otros inquilinos; nuestra parte está justo a la derecha al entrar.'
    }
  },
  footer: {
    tagline: 'Iglesia cristiana en Třinec. Nos reunimos todos los domingos y nos encantaría verte entre nosotros.',
    explore: 'Sitio',
    connect: 'Síguenos',
    visit: 'Visítanos',
    rights: 'Todos los derechos reservados.',
    privacy: 'Política de privacidad'
  },
  notfound: {
    h1: 'No hemos encontrado esta página',
    p: 'Es probable que el enlace ya no sea válido o que la página se haya movido. Prueba a empezar de nuevo.',
    btn: 'Volver al inicio'
  },
  privacy: {
    hero: {
      eyebrow: 'Información legal',
      h1: 'Política de privacidad',
      p: 'En pocas palabras y sin jerga jurídica: qué datos tuyos tratamos y para qué.'
    },
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
},

/* ########  ŠVÉDŠTINA  ###################################################### */
sv: {
  langName: 'Svenska',
  // Krátké představení pro vyhledávače a AI — díky němu nás nespletou
  // s podobně znějícími sbory jinde. Ve strukturovaných datech jde
  // do pole disambiguatingDescription (viz renderSchema v site.js).
  identita: 'Kristen församling i Třinec på Hraniční 213, Tjeckien. Registrerad förening, org.nr 26596865, verksam sedan 2002.',
  meta: {
    home: {
      title: 'Sbor Víry — Třinec | kristen församling',
      desc: 'Sbor Víry, z. s. — en kristen församling i Třinec i Tjeckien. Gudstjänst varje söndag på Hraniční 213. Kom precis som du är.'
    },
    about: {
      title: 'Om oss | Sbor Víry — Třinec',
      desc: 'Vilka vi är, vad vi tror på och hur församlingen kom till. Sbor Víry, z. s., Hraniční 213, Třinec.'
    },
    first: {
      title: 'Första gången här | Sbor Víry — Třinec',
      desc: 'Vad som väntar dig när du kommer till oss för första gången. Ärliga svar på de vanligaste frågorna.'
    },
    sermons: {
      title: 'Predikningar och inspelningar | Sbor Víry — Třinec',
      desc: 'Inspelningar av predikningar och konferenser på vår YouTube-kanal.'
    },
    news: {
      title: 'Aktuellt | Sbor Víry — Třinec',
      desc: 'Nyheter, evenemang och meddelanden från församlingens liv.'
    },
    ministries: {
      title: 'Det här gör vi | Sbor Víry — Třinec',
      desc: 'Gudstjänst på söndagar, lovsång, hemgrupper, evangelisation i Třinec centrum och bön.'
    },
    give: {
      title: 'Stöd oss | Sbor Víry — Třinec',
      desc: 'Så kan du stödja församlingens arbete med en frivillig gåva.'
    },
    contact: {
      title: 'Kontakt | Sbor Víry — Třinec',
      desc: 'Hraniční 213, 739 61 Třinec, Tjeckien. Skriv till oss eller kom förbi.'
    },
    privacy: {
      title: 'Personuppgifter | Sbor Víry — Třinec',
      desc: 'Hur församlingen Sbor Víry i Třinec hanterar personuppgifter från kontaktformuläret och vilka rättigheter du har enligt GDPR.'
    },
    notfound: {
      title: 'Sidan hittades inte | Sbor Víry — Třinec',
      desc: ''
    }
  },
  ui: {
    skip: 'Gå till huvudinnehållet',
    menu: 'Meny',
    language: 'Språk',
    photoPlaceholder: 'Plats för ett foto',
    loading: 'Laddar…'
  },
  nav: {
    home: 'Hem',
    about: 'Om oss',
    first: 'Första gången',
    sermons: 'Predikningar',
    news: 'Aktuellt',
    ministries: 'Vad vi gör',
    give: 'Stöd oss',
    contact: 'Kontakt'
  },
  cta: {
    first: 'Första gången här',
    watch: 'Se predikningar',
    contact: 'Skriv till oss',
    more: 'Läs mer',
    allNews: 'Alla nyheter',
    youtube: 'Öppna vår YouTube-kanal',
    directions: 'Visa vägen',
    join: 'Kom och var med',
    support: 'Stöd församlingen'
  },
  home: {
    hero: {
      eyebrow: 'Kristen församling i Třinec',
      h1: 'Kom precis<br>som du är',
      lead: 'Vi är helt vanliga människor som har upplevt att Gud förändrar liv. Vi träffas i Třinec varje söndag och vi vill gärna se dig bland oss.',
      m1: 'Gudstjänst',
      m2: 'Här träffas vi',
      m3: 'Se online'
    },
    welcome: {
      eyebrow: 'Välkommen',
      h2: 'Det spelar ingen roll var du kommer ifrån',
      p: 'Det spelar ingen roll hur gammal du är, vad du tror på i dag, hur du klär dig eller vad du bär med dig. Hos oss finns en plats för dig — och ingen kommer att kräva något av dig.',
      c1t: 'Gudstjänst på söndagar',
      c1d: 'Kl. 11.00 börjar vi med gemensam lovsång, sedan följer undervisning ur Bibeln och bön. Lokalen öppnar redan kl. 10.30.',
      c2t: 'Evangelisation i staden',
      c2d: 'Varje måndag eftermiddag står vi på T. G. Masaryks torg och delar evangeliet med människorna i Třinec.',
      c3t: 'Bön',
      c3d: 'Vi träffas också för att be — för församlingen, för enskilda människor och för vår stad.'
    },
    times: {
      eyebrow: 'När och var',
      h2: 'Vi träffas regelbundet',
      p: 'Hela församlingens huvudsamling är på söndag förmiddag. Under veckan träffas vi i hemgrupper, ber tillsammans och går ut med evangeliet i stadens centrum.',
      note: 'Lokalen öppnar kl. 10.30. Tiderna kan ändras vid helger och särskilda evenemang — den senaste informationen hittar du alltid på vår Facebook-sida.'
    },
    watch: {
      eyebrow: 'Online',
      h2: 'Predikningar och inspelningar från konferenser',
      p: 'I många år har vi systematiskt publicerat inspelningar av predikningar och konferenser på vår YouTube-kanal. Missade du söndagen? Du kan se den när du vill.',
      fallback: 'Besök vår kanal och se den senaste predikan.'
    },
    quote: {
      text: 'Kyrkan är varken ett tempel eller förstelnade ritualer, utan framför allt Guds familj. Jesus grundade ingen organisation — han gav oss möjligheten att möta Gud Fadern personligen.',
      cite: 'Petr Lysek, församlingens pastor'
    },
    values: {
      eyebrow: 'Det vi bygger på',
      h2: 'Fyra saker vi tar på allvar',
      v1t: 'Bibeln',
      v1d: 'Vi undervisar ur Skriften på ett begripligt sätt, utan onödiga religiösa fraser.',
      v2t: 'Bön',
      v2d: 'Vi räknar med att Gud hör och handlar. Vi ber för människor och för vår stad.',
      v3t: 'Familj',
      v3d: 'En församling är varken en byggnad eller ett program. Det är verkliga människor som bryr sig om varandra.',
      v4t: 'Öppenhet',
      v4d: 'Dörren står öppen för alla. Frågor och tvivel är inget problem hos oss.'
    },
    news: {
      eyebrow: 'Aktuellt',
      h2: 'Det här händer hos oss',
      p: 'Korta rapporter om vad vi är med om just nu och vad vi förbereder.'
    },
    cta: {
      h2: 'Ses vi på söndag?',
      p: 'Du behöver inte anmäla dig i förväg, du behöver inte ta med dig något och du behöver inte veta något. Det räcker att du kommer.'
    }
  },
  about: {
    hero: {
      eyebrow: 'Om oss',
      h1: 'En församling som byggs av människor',
      p: 'Vi är en gemenskap av kristna i Třinec. Vi tror att kristen tro inte är en samling regler utan en levande relation som förvandlar vardagen.'
    },
    story: {
      eyebrow: 'Vår väg',
      h2: 'Vilka vi är och var vi började',
      p1: 'Sbor Víry grundades i Třinec år 2002. Vi vill hjälpa människor att söka meningen med livet och kristna värderingar. Svaren på sina frågor kan de finna i Bibeln — grunden för vårt arbete är därför en grundlig kännedom om Skriftens texter.',
      p2: 'Kunskapen om Guds ord formar våra samlingar och ger de troende svar på vardagens frågor, oavsett om det gäller familjen, relationerna eller arbetet. Vi hjälper också människor som hamnat i samhällets utkant att komma tillbaka till ett fullvärdigt liv.',
      p3: 'Vi anordnar offentliga föreläsningar, även med gäster från utlandet som företräder liknande kristna rörelser. Vi visar filmer med andligt innehåll för allmänheten och ordnar konserter och musikkvällar. Vi har många kontakter med församlingar och organisationer i Tjeckien, Polen, Ungern och Slovakien.',
      p4: 'Vi tror att en återgång till verkliga kristna värderingar är till nytta för hela samhället — både för den nuvarande generationen och för dem som kommer efter.'
    },
    vision: {
      eyebrow: 'Vår vision',
      h2: 'Ett kristet centrum för vår stad',
      p1: 'Vi längtar efter att påverka vår stad på ett positivt sätt genom att bygga ett kristet centrum där många människor finner sin plats, får sitt hopp stärkt och börjar längta efter att leva för Gud och för andra.',
      p2: 'Vi vill också förändra bilden av kristen tro i Tjeckien — visa att Gud inte har något med medeltida religion att göra, utan verkar bland oss på ett nutida och fascinerande sätt. Kyrkan är varken ett tempel eller förstelnade ritualer, utan framför allt hans familj. Jesus grundade ingen organisation; han gav oss möjligheten att möta Gud Fadern personligen.',
      p3: 'Vi längtar efter att unga människor som vill ha något mer av livet ska bygga på honom och på hans ord.'
    },
    believe: {
      eyebrow: 'Vad vi tror',
      h2: 'Sju punkter som vi är eniga om',
      p: 'Det här är inget uttömmande teologiskt dokument, utan den kärna som håller oss samman.',
      b1t: 'Bibeln',
      b1d: 'Bibeln är Guds inspirerade ord och den högsta auktoriteten för tron och för vardagen.',
      b2t: 'Gud',
      b2d: 'Vi tror på en enda Gud, som uppenbarar sig som Fadern, Sonen och den helige Ande.',
      b3t: 'Jesus Kristus',
      b3d: 'Jesus är Guds Son. Han dog för våra synder, uppstod och lever.',
      b4t: 'Frälsning',
      b4d: 'Frälsningen är en Guds gåva av nåd som vi tar emot genom tro — den är ingen lön för våra prestationer.',
      b5t: 'Den helige Ande',
      b5d: 'Den helige Ande ger kraft att leva det kristna livet och utrustar församlingen till tjänst för andra.',
      b6t: 'Församlingen',
      b6d: 'Församlingen är en familj, inte en byggnad. Den är en gemenskap av människor som hör Kristus och varandra till.',
      b7t: 'Hopp',
      b7d: 'Jesus kommer tillbaka. Döden har inte sista ordet, och det förändrar hur vi lever i dag.'
    },
    lead: {
      eyebrow: 'Församlingens ledning',
      h2: 'Pastor Petr Lysek',
      role: 'Pastor och församlingens grundare',
      b1: 'Han har lett det kristna centret Sbor Víry sedan det grundades 2002. Han är född i Třinec och byggare till yrket. Sin passion och sin kallelse fann han i att bygga en stark och nutida lokal församling.',
      b2: 'Han kom till tro vid femton års ålder på en resa med den evangeliska ungdomsgruppen i Oldřichovice, där han var verksam fram till 1989. Därefter engagerade han sig i den karismatiska rörelsen och ledde från 1992 församlingen Siloe inom Apostoliska kyrkan. Det visade sig dock att Gud hade gett honom ett banbrytande sinnelag och en reformators kallelse — längtan att göra något för Gud och för de troende som ingen i trakten hade sett tidigare ledde honom till att grunda Sbor Víry.',
      b3: 'Han är en begåvad talare som inspirerar andra. Han predikar ett ord fyllt av tro och entusiasm, men också med en rejäl dos humor. Ett nyktert sinne, en klok livsförändring, kunskapen om Guds principer och arbetet med karaktären — det är de teman han främst talar om.',
      b4: 'I många år tjänade han tillsammans med sin hustru Marcela, som oväntat gick bort i januari 2024. Deras uthållighet, trohet mot Ordet, engagemang och outtröttliga optimism har hjälpt många människor att finna tron på Gud och på hans ord. Båda trodde på kyrkan som en kropp av människor — de sökte aldrig popularitet, utan byggde på lagarbete. Att arbeta med människor och för människor: där ser pastor Petr än i dag meningen med sin tjänst.'
    },
    legal: {
      eyebrow: 'Uppgifter om organisationen',
      h2: 'Juridisk information',
      orgLabel: 'Namn',
      venueLabel: 'Möteslokal',
      icoLabel: 'Organisationsnummer (IČO)',
      pastorLabel: 'Firmatecknare'
    }
  },
  first: {
    hero: {
      eyebrow: 'Är det första gången?',
      h1: 'Du behöver inte vara orolig',
      p: 'Vi vet att det inte är lätt att för första gången komma in bland människor man inte känner. Här är en ärlig beskrivning av vad som väntar dig — utan överraskningar.'
    },
    steps: {
      eyebrow: 'Steg för steg',
      h2: 'Så ser en söndagsförmiddag ut',
      p: 'Byggnaden öppnar 10.30, gudstjänsten börjar 11.00 och varar ungefär 90 minuter. Efteråt finns tid för kaffe — och du kan gå när du vill.',
      s1t: 'Du kommer fram och parkerar',
      s1d: 'Det går att parkera alldeles intill byggnaden. Entrén delar vi med andra hyresgäster — vår del ligger direkt till höger innanför dörren. Byggnaden öppnar kl. 10.30, så du kan komma i lugn och ro.',
      s2t: 'Någon tar emot dig',
      s2d: 'Vid entrén möter någon av oss dig, visar till rätta och svarar på dina frågor. I foajén finns ett rum med fåtöljer och bord där du före start kan ta en kaffe, ett te och något litet att äta och i lugn och ro lära känna någon. Du skriver inte upp dig någonstans och fyller inte i något formulär.',
      s3t: 'Kl. 11.00 börjar lovsången',
      s3d: 'De första tjugofem minuterna ungefär sjunger vi tillsammans. Du kan sjunga, stå, sitta eller bara lyssna — precis som du känner för.',
      s4t: 'Sedan följer undervisningen',
      s4d: 'Predikan tar ungefär 35 till 45 minuter. Vi talar begripligt och försöker koppla ihop Bibeln med det vanliga livet.',
      s5t: 'Du stannar på en kaffe',
      s5d: 'Efteråt finns det tid att samtala. Om du hellre vill smita i väg diskret är det helt i sin ordning.'
    },
    faq: {
      eyebrow: 'Vanliga frågor',
      h2: 'Det här undrar folk oftast',
      q1: 'Hur ska jag klä mig?',
      a1: 'Precis som du känner dig bekväm. Hos oss ser du både hoodies och skjortor. Vi bedömer ingen efter kläderna.',
      q2: 'Måste jag betala eller ge något?',
      a2: 'Nej. Det är gratis att komma. Under gudstjänsten tas en frivillig kollekt upp, men ingen håller koll på dig och ingen förväntar sig något.',
      q3: 'Jag är inte troende. Får jag ändå komma?',
      a3: 'Självklart. Många kom till oss länge innan de bestämde sig för att tro på något. Frågor och tvivel är välkomna hos oss.',
      q4: 'Hur lång tid tar det hela?',
      a4: 'Gudstjänsten tar ungefär 90 minuter. Efteråt följer en helt frivillig stund med kaffe och samtal.',
      q5: 'Vad gör jag med barnen?',
      a5: 'Barn är välkomna och kan vara med dig under hela gudstjänsten. Något eget program för barn har vi inte just nu — församlingen består i dag mest av vuxna.',
      q6: 'Måste jag anmäla mig i förväg?',
      a6: 'Nej. Det räcker att du kommer.',
      q7: 'Vilket språk hålls gudstjänsten på?',
      a7: 'Gudstjänsterna hålls på tjeckiska. Eftersom vi ligger nära gränsen möter du också polsktalande hos oss. Om du behöver hjälp med språket, skriv till oss i förväg så löser vi det.',
      q8: 'Är byggnaden tillgänglig utan trappsteg?',
      a8: 'Vid entrén finns en ramp som du utan problem tar dig in med barnvagn på. För rullstol är den ganska brant, så vi rekommenderar sällskap. Hör av dig i förväg så hjälper vi gärna till.'
    },
    cta: {
      h2: 'Har du fler frågor?',
      p: 'Skriv till oss. Vi svarar oftast inom två dagar och ingen kommer att pressa dig till något.'
    }
  },
  sermons: {
    hero: {
      eyebrow: 'Predikningar',
      h1: 'Lyssna när du vill',
      p: 'Vi har publicerat predikningar och konferensinspelningar systematiskt i många år. Allt finns på vår YouTube-kanal — gratis och utan registrering.'
    },
    playBtn: 'Spela upp den senaste videon',
    live: {
      eyebrow: 'Senaste',
      h2: 'Den senaste inspelningen från kanalen'
    },
    channel: {
      eyebrow: 'Arkiv',
      h2: 'Hela arkivet på YouTube',
      p: 'På kanalen hittar du enskilda söndagspredikningar, tematiska serier och hela konferensinspelningar. Prenumerera så missar du inget.'
    },
    links: {
      videos: 'Videor',
      playlists: 'Spellistor'
    },
    cards: {
      c1t: 'Söndagspredikningar',
      c1d: 'Inspelningar från enskilda söndagsgudstjänster — undervisning ur Bibeln, vittnesbörd och bön.',
      c2t: 'Konferenser och gäster',
      c2d: 'Längre inspelningar från konferenser och från de gäster vi har haft hos oss.'
    },
    follow: {
      h2: 'Följ oss även på andra ställen',
      p: 'Videor, foton och snabba meddelanden delar vi också på Facebook och Instagram.'
    }
  },
  photos: {
    hero: 'Gudstjänst i Sbor Víry i Třinec',
    about1: 'Pastor Petr Lysek talar till unga människor',
    about2: 'Upplyfta händer under lovsången',
    pastor: 'Pastor Petr Lysek med en upplyft bibel',
    first: 'Foajén med fåtöljer och småbord där man samlas före gudstjänsten'
  },
  gallery: {
    prev: 'Föregående foton',
    next: 'Fler foton',
    pause: 'Pausa bildspelet',
    play: 'Starta bildspelet',
    slide: 'Foto %1 av %2',
    page: 'Fotogrupp %1 av %2',
    eyebrow: 'Bildgalleri',
    h2: 'Se hur det ser ut hos oss',
    p: 'Några bilder från våra samlingar och från församlingens liv.',
    alt: 'Ur Sbor Vírys liv i Třinec'
  },
  news: {
    hero: {
      eyebrow: 'Aktuellt',
      h1: 'Det här händer hos oss',
      p: 'Nyheter, evenemang, konferenser och meddelanden från församlingens liv.'
    },
    empty: 'Det finns inga nyheter än.',
    readMore: 'Läs mer'
  },
  ministries: {
    hero: {
      eyebrow: 'Det här gör vi',
      h1: 'Församlingen är mer än söndag',
      p: 'Förutom söndagens gudstjänst träffas vi på torsdagar i hemgrupper, ber tillsammans och går varje måndag ut med evangeliet i Třinec centrum.'
    },
    m1t: 'Gudstjänst på söndagar',
    m1d: 'Hela församlingens huvudsamling. Kl. 11.00 börjar vi med lovsång, sedan följer undervisning ur Bibeln, bön och tid för varandra.',
    m2t: 'Lovsång och musik',
    m2d: 'Gruppen som förbereder gudstjänstens musikaliska del. Vi välkomnar gärna nya musiker.',
    m3t: 'Evangelisation i staden',
    m3d: 'Varje måndag eftermiddag står vi på T. G. Masaryks torg, samtalar med människor och erbjuder förbön.',
    m4t: 'Bön',
    m4d: 'Bönesamlingar under veckan. Vi ber för församlingen, för enskilda människor och för Třinec.',
    cta: {
      h2: 'Vill du vara med?',
      p: 'Skriv och berätta vad du är intresserad av, så kopplar vi ihop dig med rätt personer.'
    },
    m5t: 'Hemgrupper',
    m5d: 'På torsdagar kl. 18.00 träffas vi i mindre grupper hemma hos varandra — vi läser Bibeln, samtalar om livet och ber tillsammans. Det är här man lär känna varandra på riktigt. Skriv till oss så hjälper vi dig till en grupp.'
  },
  give: {
    hero: {
      eyebrow: 'Stöd oss',
      h1: 'Ditt stöd gör skillnad',
      p: 'Församlingens verksamhet, evangelisationen i staden och hjälpen till människor i nöd finansierar vi med frivilliga gåvor.'
    },
    why: {
      eyebrow: 'Varför ge',
      h2: 'Dit går dina gåvor',
      i1: 'drift och underhåll av de lokaler där vi träffas;',
      i2: 'evangelisation i stadens centrum — material och tryck;',
      i3: 'inspelning och publicering av predikningar och konferenser;',
      i4: 'praktisk hjälp till människor i svåra livssituationer;',
      i5: 'stöd till mission och välgörenhetsarbete.',
      note: 'Ingen summa är för liten, och ingen hos oss bedöms efter hur mycket han eller hon ger. Gåvan är helt frivillig.'
    },
    bank: {
      eyebrow: 'Bankuppgifter',
      h2: 'Så skickar du en gåva',
      bank: 'Bank',
      account: 'Kontonummer',
      iban: 'IBAN',
      swift: 'SWIFT/BIC',
      vs: 'Variabelsymbol',
      owner: 'Kontoinnehavare',
      todo: 'Bankuppgifterna är inte ifyllda än. Fyll i dem i filen assets/js/content.js.',
      hint: 'I meddelandet till mottagaren kan du ange gåvans ändamål, till exempel ”barn” eller ”mission”.'
    },
    receipt: {
      h2: 'Kvitto på gåvan',
      p: 'Om du behöver ett kvitto på din gåva för skatteändamål, skriv till oss så utfärdar vi gärna ett.'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Kontakt',
      h1: 'Hör av dig',
      p: 'Har du en fråga, behöver du förbön eller vill du bara prata? Skriv till oss.'
    },
    labels: {
      venue: 'Här träffas vi',
      email: 'E-post',
      messenger: 'Skriv till oss på Facebook',
      phone: 'Telefon',
      pastor: 'Pastor',
      ico: 'Organisationsnummer (IČO)',
      social: 'Sociala medier'
    },
    form: {
      h2: 'Skriv till oss',
      p: 'Vi svarar oftast inom två arbetsdagar.',
      name: 'För- och efternamn',
      email: 'E-post',
      phone: 'Telefon (frivilligt)',
      subject: 'Ämne',
      message: 'Ditt meddelande',
      subjectOptions: [
        'Allmän fråga',
        'Jag vill komma på besök',
        'Böneämne',
        'Evangelisation',
        'Annat'
      ],
      consent: 'Jag samtycker till att Sbor Víry, z. s. behandlar mina uppgifter för att kunna svara på det här meddelandet.',
      send: 'Skicka meddelandet',
      hint: 'Formuläret öppnar ditt e-postprogram med meddelandet färdigt att skicka.'
    },
    map: {
      h2: 'Här hittar du oss',
      p: 'Hraniční 213, 739 61 Třinec, Tjeckien. Det går att parkera alldeles intill byggnaden. Entrén delas med andra hyresgäster; församlingens del ligger direkt till höger innanför dörren.'
    }
  },
  footer: {
    tagline: 'Kristen församling i Třinec. Vi träffas varje söndag och vill gärna se dig bland oss.',
    explore: 'Webbplatsen',
    connect: 'Följ oss',
    visit: 'Besök oss',
    rights: 'Alla rättigheter förbehållna.',
    privacy: 'Personuppgifter'
  },
  notfound: {
    h1: 'Vi hittade inte den här sidan',
    p: 'Länken är förmodligen ogiltig eller så har sidan flyttats. Försök från början.',
    btn: 'Tillbaka till startsidan'
  },
  privacy: {
    hero: {
      eyebrow: 'Juridisk information',
      h1: 'Behandling av personuppgifter',
      p: 'Kort och utan juridiskt krångel: vilka uppgifter vi behandlar om dig och varför.'
    },
    h2a: 'Vem som är personuppgiftsansvarig',
    pa: 'Personuppgiftsansvarig är Sbor Víry, z. s., organisationsnummer 26596865, kontaktadress Hraniční 213, 739 61 Třinec, Tjeckien.',
    h2b: 'Vilka uppgifter vi behandlar',
    pb: 'Vi behandlar bara de uppgifter du själv skickar till oss via kontaktformuläret eller med e-post — vanligen namn, e-postadress, eventuellt telefonnummer och innehållet i ditt meddelande.',
    h2c: 'Varför vi behandlar dem',
    pc: 'Uteslutande för att vi ska kunna svara dig. Vi säljer inga uppgifter och lämnar dem inte vidare till tredje part för marknadsföring.',
    h2d: 'Kakor och besöksstatistik',
    pd: 'Den här webbplatsen använder inga spårnings- eller reklamkakor. Inbäddade videor från YouTube och kartunderlag kan spara egna kakor enligt respektive leverantörs villkor.',
    h2e: 'Dina rättigheter',
    pe: 'Du har rätt att få tillgång till dina uppgifter, att få dem rättade och raderade. Skriv bara till vår kontaktadress så ordnar vi det.'
  }
},

/* ########  MAĎARŠTINA  ##################################################### */
hu: {
  langName: 'Magyar',
  // Krátké představení pro vyhledávače a AI — díky němu nás nespletou
  // s podobně znějícími sbory jinde. Ve strukturovaných datech jde
  // do pole disambiguatingDescription (viz renderSchema v site.js).
  identita: 'Keresztény gyülekezet Třinecben, Hraniční 213. Bejegyzett egyesület, nyilvántartási szám 26596865, 2002 óta működik.',
  meta: {
    home: {
      title: 'Sbor Víry — Třinec | keresztény gyülekezet',
      desc: 'Sbor Víry, z. s. — keresztény gyülekezet a csehországi Třinecben. Istentisztelet minden vasárnap a Hraniční 213. szám alatt. Gyere úgy, ahogy vagy.'
    },
    about: {
      title: 'Rólunk | Sbor Víry — Třinec',
      desc: 'Kik vagyunk, mit hiszünk, és hogyan jött létre a gyülekezet. Sbor Víry, z. s., Hraniční 213, Třinec.'
    },
    first: {
      title: 'Először vagyok itt | Sbor Víry — Třinec',
      desc: 'Mi vár rád, ha először jössz el hozzánk. Őszinte válaszok a leggyakoribb kérdésekre.'
    },
    sermons: {
      title: 'Igehirdetések és felvételek | Sbor Víry — Třinec',
      desc: 'Igehirdetések és konferenciák felvételei a YouTube-csatornánkon.'
    },
    news: {
      title: 'Hírek | Sbor Víry — Třinec',
      desc: 'Hírek, események és közlemények a gyülekezet életéből.'
    },
    ministries: {
      title: 'Amit nálunk találsz | Sbor Víry — Třinec',
      desc: 'Vasárnapi istentisztelet, dicséret, házicsoportok, evangelizáció Třinec központjában és imádság.'
    },
    give: {
      title: 'Támogass minket | Sbor Víry — Třinec',
      desc: 'Hogyan támogathatod a gyülekezet szolgálatát önkéntes adománnyal.'
    },
    contact: {
      title: 'Kapcsolat | Sbor Víry — Třinec',
      desc: 'Hraniční 213, 739 61 Třinec, Csehország. Írj nekünk, vagy nézz be hozzánk.'
    },
    privacy: {
      title: 'Adatvédelem | Sbor Víry — Třinec',
      desc: 'Hogyan kezeli a třineci Sbor Víry gyülekezet a kapcsolatfelvételi űrlapon küldött személyes adatokat, és milyen jogaid vannak a GDPR szerint.'
    },
    notfound: {
      title: 'Az oldal nem található | Sbor Víry — Třinec',
      desc: ''
    }
  },
  ui: {
    skip: 'Ugrás a fő tartalomra',
    menu: 'Menü',
    language: 'Nyelv',
    photoPlaceholder: 'Hely a fényképnek',
    loading: 'Betöltés…'
  },
  nav: {
    home: 'Főoldal',
    about: 'Rólunk',
    first: 'Először itt',
    sermons: 'Igehirdetések',
    news: 'Hírek',
    ministries: 'Amit teszünk',
    give: 'Támogatás',
    contact: 'Kapcsolat'
  },
  cta: {
    first: 'Először vagyok itt',
    watch: 'Igehirdetések megtekintése',
    contact: 'Írj nekünk',
    more: 'Tudj meg többet',
    allNews: 'Összes hír',
    youtube: 'YouTube-csatornánk megnyitása',
    directions: 'Útvonal megjelenítése',
    join: 'Gyere el közénk',
    support: 'Támogasd a gyülekezetet'
  },
  home: {
    hero: {
      eyebrow: 'Keresztény gyülekezet Třinecben',
      h1: 'Gyere úgy,<br>ahogy vagy',
      lead: 'Hétköznapi emberek vagyunk, akik megtapasztaltuk, hogy Isten megváltoztatja az életet. Minden vasárnap összejövünk Třinecben, és szeretettel várunk téged is.',
      m1: 'Istentisztelet',
      m2: 'Itt találkozunk',
      m3: 'Nézd online'
    },
    welcome: {
      eyebrow: 'Üdvözlünk',
      h2: 'Nem számít, honnan érkezel',
      p: 'Nem számít, hány éves vagy, mit hiszel ma, hogyan öltözködsz, és mi van mögötted. Nálunk van helyed — és senki nem fog tőled semmit követelni.',
      c1t: 'Vasárnapi istentisztelet',
      c1d: '11.00 órakor közös dicsérettel kezdünk, ezt bibliai tanítás és imádság követi. Az épület már 10.30-tól nyitva van.',
      c2t: 'Evangelizáció a városban',
      c2d: 'Minden hétfő délután kiállunk a T. G. Masaryk térre, és megosztjuk az evangéliumot Třinec lakóival.',
      c3t: 'Imádság',
      c3d: 'Imádkozni is összejövünk — a gyülekezetért, konkrét emberekért és a városunkért.'
    },
    times: {
      eyebrow: 'Mikor és hol',
      h2: 'Rendszeresen találkozunk',
      p: 'Az egész gyülekezet fő alkalma vasárnap délelőtt van. A hét közben házicsoportokban jövünk össze, együtt imádkozunk, és kimegyünk az evangéliummal a város központjába.',
      note: 'Az épület 10.30-tól nyitva van. Az időpontok ünnepnapokon és különleges alkalmak idején változhatnak — a legfrissebb információt mindig megtalálod a Facebook-oldalunkon.'
    },
    watch: {
      eyebrow: 'Online',
      h2: 'Igehirdetések és konferencia­felvételek',
      p: 'Évek óta rendszeresen közzétesszük az igehirdetések és a konferenciák felvételeit a YouTube-csatornánkon. Lemaradtál a vasárnapról? Bármikor megnézheted.',
      fallback: 'Nézd meg a csatornánkat, és játszd le a legújabb igehirdetést.'
    },
    quote: {
      text: 'Az egyház nem templom és nem megkövesedett szertartások sora, hanem mindenekelőtt Isten családja. Jézus nem szervezetet alapított — lehetőséget adott arra, hogy személyesen találkozzunk az Atyával.',
      cite: 'Petr Lysek, a gyülekezet pásztora'
    },
    values: {
      eyebrow: 'Amire építünk',
      h2: 'Négy dolog, amit komolyan veszünk',
      v1t: 'A Biblia',
      v1d: 'Érthetően tanítunk az Írásból, felesleges vallásos szófordulatok nélkül.',
      v2t: 'Imádság',
      v2d: 'Számítunk arra, hogy Isten hall és cselekszik. Imádkozunk az emberekért és a városunkért.',
      v3t: 'Család',
      v3d: 'A gyülekezet nem épület és nem program. Valódi emberek, akik számítanak egymásnak.',
      v4t: 'Nyitottság',
      v4d: 'Az ajtó mindenki előtt nyitva áll. A kérdések és a kételyek nálunk nem jelentenek gondot.'
    },
    news: {
      eyebrow: 'Hírek',
      h2: 'Ez történik nálunk',
      p: 'Rövid hírek arról, amit éppen átélünk, és amire készülünk.'
    },
    cta: {
      h2: 'Találkozunk vasárnap?',
      p: 'Nem kell előre jelentkezned, nem kell hoznod semmit, és nem kell tudnod semmit. Elég, ha eljössz.'
    }
  },
  about: {
    hero: {
      eyebrow: 'Rólunk',
      h1: 'Gyülekezet, amely emberekre épül',
      p: 'Keresztények közössége vagyunk Třinecben. Hisszük, hogy a kereszténység nem szabályok gyűjteménye, hanem élő kapcsolat, amely átformálja a hétköznapokat.'
    },
    story: {
      eyebrow: 'A mi utunk',
      h2: 'Kik vagyunk, és hol kezdtük',
      p1: 'A Sbor Víry gyülekezet 2002-ben jött létre Třinecben. Segíteni szeretnénk az embereknek az élet értelmének és a keresztény értékeknek a keresésében. A kérdéseikre a Bibliában találhatnak választ — munkánk alapja ezért az Írás szövegeinek alapos megismerése.',
      p2: 'Isten igéjének ismerete formálja az alkalmaink menetét, és választ ad a hívőknek a mindennapi élet kérdéseire, legyen szó családról, emberi kapcsolatokról vagy munkáról. Azoknak is segítünk visszatérni a teljes értékű életbe, akik a társadalom peremére kerültek.',
      p3: 'Nyilvános előadásokat szervezünk, külföldi vendégekkel is, akik hasonló keresztény mozgalmakat képviselnek. Lelki témájú filmeket vetítünk a nagyközönségnek, valamint koncerteket és zenés esteket rendezünk. Számos kapcsolatunk van csehországi, lengyelországi, magyarországi és szlovákiai gyülekezetekkel és szervezetekkel.',
      p4: 'Hisszük, hogy a valódi keresztény értékekhez való visszatérés az egész társadalom javát szolgálja — a mai és a jövő nemzedékét egyaránt.'
    },
    vision: {
      eyebrow: 'A víziónk',
      h2: 'Keresztény központ a városunkért',
      p1: 'Vágyunk arra, hogy jó irányban befolyásoljuk a városunkat: olyan keresztény központot építünk, amelyben sokan megtalálják a helyüket, megerősödik a reménységük, és vágyat éreznek arra, hogy Istenért és másokért éljenek.',
      p2: 'Szeretnénk megváltoztatni a kereszténység képét is Csehországban — megmutatni, hogy Istennek semmi köze a középkori valláshoz, hanem mai, lenyűgöző módon munkálkodik közöttünk. Az egyház nem templom és nem megkövesedett szertartások sora, hanem mindenekelőtt az Ő családja. Jézus nem szervezetet alapított; lehetőséget adott arra, hogy személyesen találkozzunk az Atyával.',
      p3: 'Vágyunk arra, hogy a fiatalok, akik többet várnak az élettől, Rá és az Ő igéjére építsenek.'
    },
    believe: {
      eyebrow: 'Mit hiszünk',
      h2: 'Hét pont, amelyben egyetértünk',
      p: 'Ez nem kimerítő teológiai dokumentum, hanem az a mag, amely összetart minket.',
      b1t: 'A Biblia',
      b1d: 'A Biblia Isten ihletett igéje, és a legfőbb tekintély a hit és a mindennapi élet számára.',
      b2t: 'Isten',
      b2d: 'Egy Istenben hiszünk, aki Atyaként, Fiúként és Szentlélekként jelenti ki magát.',
      b3t: 'Jézus Krisztus',
      b3d: 'Jézus Isten Fia. Meghalt a bűneinkért, feltámadt, és él.',
      b4t: 'Üdvösség',
      b4d: 'Az üdvösség Isten kegyelmi ajándéka, amelyet hit által fogadunk el — nem a teljesítményünk jutalma.',
      b5t: 'A Szentlélek',
      b5d: 'A Szentlélek erőt ad a keresztény élethez, és felkészíti a gyülekezetet a mások felé való szolgálatra.',
      b6t: 'Az egyház',
      b6d: 'Az egyház család, nem épület. Olyan emberek közössége, akik Krisztushoz és egymáshoz tartoznak.',
      b7t: 'Reménység',
      b7d: 'Jézus visszajön. Nem a halálé az utolsó szó, és ez megváltoztatja, hogyan élünk ma.'
    },
    lead: {
      eyebrow: 'A gyülekezet vezetése',
      h2: 'Petr Lysek pásztor',
      role: 'Pásztor és a gyülekezet alapítója',
      b1: 'A Sbor Víry keresztény központot annak 2002-es megalapítása óta vezeti. Třinecben született, foglalkozását tekintve az építőiparban dolgozik. Szenvedélyét és elhívását egy erős, mai kor emberéhez szóló helyi gyülekezet építésében találta meg.',
      b2: 'Tizenöt évesen tért meg az oldřichovicei evangélikus ifjúság egyik kirándulásán, ahol 1989-ig szolgált. Ezután bekapcsolódott a karizmatikus mozgalomba, 1992-től pedig az Apostoli Egyházhoz tartozó Siloe gyülekezetet vezette. Kiderült azonban, hogy Isten úttörő természettel és reformátori elhívással ajándékozta meg — az a vágy, hogy Istenért és a hívőkért olyat tegyen, amit a környéken addig senki nem látott, elvezette a Sbor Víry megalapításához.',
      b3: 'Tehetséges szónok, aki másokat is lelkesít. Hittel és lendülettel telve hirdeti az igét, de jó adag humorral is. A józan gondolkodás, a bölcs életváltozás, Isten alapelveinek megismerése és a jellem formálása — ezek a fő témái.',
      b4: 'Hosszú éveken át a feleségével, Marcelával együtt szolgált, aki 2024 januárjában váratlanul elhunyt. Kitartásuk, az igéhez való hűségük, elkötelezettségük és véget nem érő derűlátásuk sok embernek segített megtalálni az Istenbe és az igéjébe vetett hitet. Mindketten olyan egyházban hittek, amely emberekből álló test — nem a népszerűséget keresték, hanem a csapatmunkára építettek. Emberekkel és emberekért dolgozni: Petr pásztor ma is ebben látja a szolgálata értelmét.'
    },
    legal: {
      eyebrow: 'A szervezet adatai',
      h2: 'Jogi információk',
      orgLabel: 'Név',
      venueLabel: 'Az alkalmak helyszíne',
      icoLabel: 'Nyilvántartási szám (IČO)',
      pastorLabel: 'Törvényes képviselő'
    }
  },
  first: {
    hero: {
      eyebrow: 'Először vagy itt?',
      h1: 'Nincs miért aggódnod',
      p: 'Tudjuk, hogy nem könnyű először ismeretlen emberek közé lépni. Íme az őszinte leírás arról, mi vár rád — meglepetések nélkül.'
    },
    steps: {
      eyebrow: 'Lépésről lépésre',
      h2: 'Így néz ki egy vasárnap délelőtt',
      p: 'Az épület 10:30-kor nyit, az istentisztelet 11:00-kor kezdődik és körülbelül 90 percig tart. Utána van idő egy kávéra — és bármikor elmehetsz.',
      s1t: 'Megérkezel és parkolsz',
      s1d: 'Közvetlenül az épület mellett lehet parkolni. A bejárat közös a többi bérlővel — a mi részünk rögtön az ajtó után jobbra van. Az épület 10.30-tól nyitva van, így nyugodtan megérkezhetsz.',
      s2t: 'Valaki fogad téged',
      s2d: 'A bejáratnál valaki közülünk fogad, útbaigazít és válaszol a kérdéseidre. Az előtérben van egy fotelekkel és asztalokkal berendezett helyiség, ahol a kezdés előtt megihatsz egy kávét vagy teát, ehetsz egy kis harapnivalót, és nyugodtan megismerkedhetsz valakivel. Sehová nem kell feliratkoznod, és semmit nem kell kitöltened.',
      s3t: '11.00 órakor kezdődik a dicséret',
      s3d: 'Az első nagyjából huszonöt percben együtt énekelünk. Énekelhetsz, állhatsz, ülhetsz, vagy csak hallgathatod — ahogy jólesik.',
      s4t: 'Ezt követi a tanítás',
      s4d: 'Az igehirdetés körülbelül 35–45 percig tart. Érthetően beszélünk, és igyekszünk összekötni a Bibliát a hétköznapi élettel.',
      s5t: 'Maradsz egy kávéra',
      s5d: 'Az alkalom után van idő a beszélgetésre. Ha inkább feltűnés nélkül távoznál, az is teljesen rendben van.'
    },
    faq: {
      eyebrow: 'Gyakori kérdések',
      h2: 'Ezt kérdezik a leggyakrabban',
      q1: 'Hogyan öltözzek?',
      a1: 'Ahogy jólesik. Nálunk pulóverben és ingben is találkozol emberekkel. Senkit nem ítélünk meg a ruhája alapján.',
      q2: 'Kell fizetnem vagy adnom valamit?',
      a2: 'Nem. A belépés ingyenes. Az istentisztelet alatt önkéntes adománygyűjtés van, de senki nem figyel téged, és senki nem vár el tőled semmit.',
      q3: 'Nem vagyok hívő. Egyáltalán eljöhetek?',
      a3: 'Természetesen. Sokan jártak hozzánk jóval azelőtt, hogy elhatározták volna: hisznek valamiben. A kérdéseket és a kételyeket szívesen fogadjuk.',
      q4: 'Mennyi ideig tart az egész?',
      a4: 'Az istentisztelet nagyjából 90 percig tart. Utána kötetlen beszélgetés következik egy kávé mellett.',
      q5: 'Mit csináljak a gyerekekkel?',
      a5: 'A gyerekeket szeretettel várjuk, és végig veled lehetnek az istentiszteleten. Külön gyermekprogramunk jelenleg nincs — a gyülekezetet ma túlnyomórészt felnőttek alkotják.',
      q6: 'Előre kell regisztrálnom?',
      a6: 'Nem. Elég, ha egyszerűen eljössz.',
      q7: 'Milyen nyelven folyik az istentisztelet?',
      a7: 'Az istentiszteletek cseh nyelven folynak. A határ közelsége miatt lengyelül beszélőkkel is találkozol nálunk. Ha nyelvi segítségre van szükséged, írj nekünk előre, és megbeszéljük.',
      q8: 'Akadálymentes az épület?',
      a8: 'A bejáratnál rámpa van, amelyen babakocsival gond nélkül bejutsz. Kerekesszékhez viszont elég meredek, ezért kísérőt ajánlunk. Szólj előre, és szívesen segítünk.'
    },
    cta: {
      h2: 'Maradt még kérdésed?',
      p: 'Írj nekünk. Általában két napon belül válaszolunk, és senki nem fog téged sürgetni.'
    }
  },
  sermons: {
    hero: {
      eyebrow: 'Igehirdetések',
      h1: 'Hallgasd, amikor csak akarod',
      p: 'Az igehirdetéseket és a konferenciafelvételeket évek óta rendszeresen közzétesszük. Mindent megtalálsz a YouTube-csatornánkon — ingyen és regisztráció nélkül.'
    },
    playBtn: 'A legújabb videó lejátszása',
    live: {
      eyebrow: 'Legújabb',
      h2: 'A csatorna legutóbbi felvétele'
    },
    channel: {
      eyebrow: 'Archívum',
      h2: 'A teljes archívum a YouTube-on',
      p: 'A csatornán megtalálod az egyes vasárnapi igehirdetéseket, a tematikus sorozatokat és a teljes konferenciafelvételeket. Iratkozz fel, hogy semmiről ne maradj le.'
    },
    links: {
      videos: 'Videók',
      playlists: 'Lejátszási listák'
    },
    cards: {
      c1t: 'Vasárnapi igehirdetések',
      c1d: 'Az egyes vasárnapi istentiszteletek felvételei — bibliai tanítás, bizonyságtételek és imádság.',
      c2t: 'Konferenciák és vendégek',
      c2d: 'Hosszabb felvételek konferenciákról és a nálunk járt vendégektől.'
    },
    follow: {
      h2: 'Kövess minket máshol is',
      p: 'Videókat, fényképeket és rövid híreket a Facebookon és az Instagramon is megosztunk.'
    }
  },
  photos: {
    hero: 'A Sbor Víry vasárnapi istentisztelete Třinecben',
    about1: 'Petr Lysek pásztor fiatalokhoz szól',
    about2: 'Felemelt kezek a dicséret közben',
    pastor: 'Petr Lysek pásztor felemelt Bibliával',
    first: 'Az előtér fotelekkel és asztalokkal, ahol az istentisztelet előtt gyülekezünk'
  },
  gallery: {
    prev: 'Előző fényképek',
    next: 'További fényképek',
    pause: 'A léptetés szüneteltetése',
    play: 'A léptetés indítása',
    slide: '%1. fénykép, összesen %2',
    page: '%1. fényképcsoport, összesen %2',
    eyebrow: 'Fotógaléria',
    h2: 'Nézd meg, milyen nálunk',
    p: 'Néhány kép az alkalmainkról és a gyülekezet életéből.',
    alt: 'A třineci Sbor Víry életéből'
  },
  news: {
    hero: {
      eyebrow: 'Hírek',
      h1: 'Ez történik nálunk',
      p: 'Hírek, események, konferenciák és közlemények a gyülekezet életéből.'
    },
    empty: 'Egyelőre nincsenek hírek.',
    readMore: 'Tovább'
  },
  ministries: {
    hero: {
      eyebrow: 'Amit nálunk találsz',
      h1: 'A gyülekezet több mint vasárnap',
      p: 'A vasárnapi istentiszteleten kívül csütörtökönként házicsoportokban jövünk össze, együtt imádkozunk, és minden hétfőn kimegyünk az evangéliummal Třinec központjába.'
    },
    m1t: 'Vasárnapi istentisztelet',
    m1d: 'Az egész gyülekezet fő alkalma. 11.00 órakor dicsérettel kezdünk, ezt bibliai tanítás, imádság és az egymásra szánt idő követi.',
    m2t: 'Dicséret és zene',
    m2d: 'Az a csapat, amely az istentisztelet zenei részét készíti elő. Új zenészeket is szívesen fogadunk.',
    m3t: 'Evangelizáció a városban',
    m3d: 'Minden hétfő délután kiállunk a T. G. Masaryk térre, beszélgetünk az emberekkel, és felajánljuk, hogy imádkozunk értük.',
    m4t: 'Imádság',
    m4d: 'Imaalkalmak a hét folyamán. Imádkozunk a gyülekezetért, konkrét emberekért és Třinecért.',
    cta: {
      h2: 'Szeretnél bekapcsolódni?',
      p: 'Írd meg, mi érdekel, és összekötünk a megfelelő emberekkel.'
    },
    m5t: 'Házicsoportok',
    m5d: 'Csütörtökönként 18.00 órakor kisebb csoportokban jövünk össze egymás otthonában — olvassuk a Bibliát, beszélgetünk az életről, és együtt imádkozunk. Itt lehet igazán megismerni egymást. Írj nekünk, és segítünk bekapcsolódni.'
  },
  give: {
    hero: {
      eyebrow: 'Támogass minket',
      h1: 'A támogatásodnak értelme van',
      p: 'A gyülekezet működését, a városi evangelizációt és a rászorulók megsegítését önkéntes adományokból fedezzük.'
    },
    why: {
      eyebrow: 'Miért adakozz',
      h2: 'Mire fordítjuk az adományokat',
      i1: 'a helyiségek működtetése és karbantartása, ahol összejövünk;',
      i2: 'evangelizáció a város központjában — anyagok és nyomtatás;',
      i3: 'az igehirdetések és a konferenciák felvétele és közzététele;',
      i4: 'gyakorlati segítség a nehéz élethelyzetbe került embereknek;',
      i5: 'a missziós és a jótékonysági munka támogatása.',
      note: 'Egyetlen összeg sem túl kicsi, és nálunk senkit nem ítélünk meg az alapján, mennyit ad. Az adomány teljesen önkéntes.'
    },
    bank: {
      eyebrow: 'Banki adatok',
      h2: 'Hogyan küldhetsz adományt',
      bank: 'Bank',
      account: 'Számlaszám',
      iban: 'IBAN',
      swift: 'SWIFT/BIC',
      vs: 'Változó szimbólum (VS)',
      owner: 'Számlatulajdonos',
      todo: 'A banki adatok még nincsenek kitöltve. Töltsd ki őket az assets/js/content.js fájlban.',
      hint: 'A közlemény rovatban feltüntetheted az adomány célját, például „gyerekek” vagy „misszió”.'
    },
    receipt: {
      h2: 'Igazolás az adományról',
      p: 'Ha adóügyi célból igazolásra van szükséged az adományról, írj nekünk e-mailt, és szívesen kiállítjuk.'
    }
  },
  contact: {
    hero: {
      eyebrow: 'Kapcsolat',
      h1: 'Keress minket bátran',
      p: 'Kérdésed van, imádságra van szükséged, vagy csak beszélgetnél? Írj nekünk.'
    },
    labels: {
      venue: 'Itt találkozunk',
      email: 'E-mail',
      messenger: 'Írj nekünk a Facebookon',
      phone: 'Telefon',
      pastor: 'Pásztor',
      ico: 'Nyilvántartási szám (IČO)',
      social: 'Közösségi oldalak'
    },
    form: {
      h2: 'Írj nekünk',
      p: 'Általában két munkanapon belül válaszolunk.',
      name: 'Vezeték- és keresztnév',
      email: 'E-mail',
      phone: 'Telefon (nem kötelező)',
      subject: 'Tárgy',
      message: 'Az üzeneted',
      subjectOptions: [
        'Általános kérdés',
        'Szeretnék eljönni',
        'Imakérés',
        'Evangelizáció',
        'Egyéb'
      ],
      consent: 'Hozzájárulok, hogy a Sbor Víry, z. s. kezelje az adataimat az üzenetem megválaszolása céljából.',
      send: 'Üzenet küldése',
      hint: 'Az űrlap megnyitja az e-mail-programodat az előre kitöltött üzenettel.'
    },
    map: {
      h2: 'Itt találsz minket',
      p: 'Hraniční 213, 739 61 Třinec, Csehország. Közvetlenül az épület mellett lehet parkolni. Az épület bejárata közös a többi bérlővel; a gyülekezet része rögtön az ajtó után jobbra található.'
    }
  },
  footer: {
    tagline: 'Keresztény gyülekezet Třinecben. Minden vasárnap összejövünk, és szeretettel várunk téged is.',
    explore: 'Weboldal',
    connect: 'Kövess minket',
    visit: 'Látogass el hozzánk',
    rights: 'Minden jog fenntartva.',
    privacy: 'Adatvédelem'
  },
  notfound: {
    h1: 'Ezt az oldalt nem találtuk',
    p: 'A hivatkozás valószínűleg érvénytelen, vagy az oldal átkerült máshová. Próbáld elölről.',
    btn: 'Vissza a főoldalra'
  },
  privacy: {
    hero: {
      eyebrow: 'Jogi információk',
      h1: 'Adatvédelmi tájékoztató',
      p: 'Röviden és jogi nyelvezet nélkül: milyen adatokat kezelünk rólad és miért.'
    },
    h2a: 'Ki az adatkezelő',
    pa: 'Az adatkezelő a Sbor Víry, z. s., nyilvántartási szám 26596865, levelezési cím: Hraniční 213, 739 61 Třinec, Csehország.',
    h2b: 'Milyen adatokat kezelünk',
    pb: 'Kizárólag azokat az adatokat kezeljük, amelyeket te magad küldesz nekünk a kapcsolatfelvételi űrlapon vagy e-mailben — jellemzően a nevedet, az e-mail-címedet, esetleg a telefonszámodat és az üzeneted tartalmát.',
    h2c: 'Miért kezeljük őket',
    pc: 'Kizárólag azért, hogy válaszolni tudjunk neked. Az adatokat nem adjuk el, és marketingcélból nem továbbítjuk harmadik félnek.',
    h2d: 'Sütik és látogatottságmérés',
    pd: 'Ez a weboldal nem használ nyomkövető vagy hirdetési sütiket. A beágyazott YouTube-videók és a térképek az adott szolgáltató feltételei szerint saját sütiket menthetnek.',
    h2e: 'A jogaid',
    pe: 'Jogod van hozzáférni az adataidhoz, kérni azok helyesbítését és törlését. Elég, ha írsz a kapcsolattartási e-mail-címünkre, és elintézzük.'
  }
}

};

if (typeof window !== 'undefined') window.I18N = I18N;
