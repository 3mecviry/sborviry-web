/* ============================================================================
   SBOR VÍRY — DATA, KTERÁ SE MĚNÍ NEJČASTĚJI
   ----------------------------------------------------------------------------
   Tady upravujte: kontakty, časy setkání, aktuality, videa, čísla účtu.
   Texty se zapisují jako { cs:"…", sk:"…", pl:"…", uk:"…", ru:"…", de:"…", en:"…", es:"…" }.
   Pokud nějaký jazyk vynecháte, automaticky se použije čeština.

   ⚠️ Zbývající položky označené TODO doplňte, až budou údaje k dispozici.
   ========================================================================== */

const DATA = {

  /* ------------------------------------------------------------------
     1) KONTAKTNÍ ÚDAJE
     ------------------------------------------------------------------ */
  contact: {
    orgName: 'Sbor Víry, z. s.',
    venue: 'Hraniční 213, 739 61 Třinec',      // místo shromáždění
    ico:   '26596865',
    email: 'sborviry@gmail.com',
    // Telefon se záměrně nezveřejňuje — hlavní kontakt je e-mail a zpráva na Facebooku.
    // Kdybyste ho někdy chtěli uvést, stačí sem vepsat číslo a řádek se sám zobrazí.
    phone: '',
    pastor: 'Petr Lysek',
    // Přesná poloha budovy podle firemního profilu na Google Maps
    lat: 49.6818592,
    lon: 18.6510254,
    mapZoom: 17,
    // Odkaz na ověřený firemní profil „Sbor Víry - Třinec“ na Google Maps
    googleMapsUrl: 'https://maps.google.com/?cid=5863197709849295835'
  },

  /* ------------------------------------------------------------------
     2) SOCIÁLNÍ SÍTĚ A VIDEO
     ------------------------------------------------------------------ */
  social: {
    youtube:   'https://www.youtube.com/@sborviry',
    facebook:  'https://www.facebook.com/sborviry.org/',
    instagram: 'https://www.instagram.com/sborviryorg/'
  },

  // ID YouTube kanálu @sborviry (používá se ve strukturovaných datech).
  youtubeChannelId: 'UCjtt9_ez5UzekptGN_88xhA',

  /* --- Video na webu -------------------------------------------------
     youtubeVideoId    — ID videa, které se přehraje jako první.
                         Je to 11 znaků z adresy za „watch?v=“.
                         Doplňuje se samo (viz .github/workflows), ale
                         můžete ho kdykoli přepsat ručně.

     youtubePlaylistId — ID playlistu s letošními bohoslužbami (za „list=“).
                         Návštěvník tak po dohrání videa plynule pokračuje
                         dalšími kázáními. Na začátku roku sem vložte
                         playlist pro nový rok.

     Pozor: automatický seznam „nahraná videa“ (ID začínající na UU…)
     YouTube na cizí weby vkládat nedovolí — vrací chybu 153.
     Použijte vždy vlastní playlist, který jste si na YouTube vytvořili.
     Zůstanou-li obě pole prázdná, zobrazí se místo přehrávače tlačítko
     odkazující na kanál. Web se nikdy nerozbije.
     ------------------------------------------------------------------ */
  youtubeVideoId: 'w1Qw761j-Ws',
  youtubePlaylistId: 'PLeGPPF1P4_e7bzvZGKWhvnJ1RVz-8MkM-',   // Bohoslužba | 2026

  // Rok založení sboru (uvádí se ve strukturovaných datech pro vyhledávače)
  founded: '2002',

  /* ------------------------------------------------------------------
     3) ČASY SETKÁNÍ
     ------------------------------------------------------------------ */
  times: [
    {
      when:  { cs: 'Neděle 11:00', sk: 'Nedeľa 11:00', pl: 'Niedziela 11:00', uk: 'Неділя 11:00', ru: 'Воскресенье 11:00', de: 'Sonntag 11:00 Uhr', en: 'Sunday 11:00', es: 'Domingo 11:00' },
      what:  { cs: 'Nedělní bohoslužba', sk: 'Nedeľná bohoslužba', pl: 'Nabożeństwo niedzielne', uk: 'Недільне богослужіння', ru: 'Воскресное богослужение', de: 'Sonntagsgottesdienst', en: 'Sunday service', es: 'Culto dominical' },
      where: { cs: 'Hraniční 213, Třinec', sk: 'Hraniční 213, Třinec', pl: 'Hraniční 213, Trzyniec', uk: 'Hraniční 213, Тршинець', ru: 'Hraniční 213, Тршинец', de: 'Hraniční 213, Třinec', en: 'Hraniční 213, Třinec', es: 'Hraniční 213, Třinec' }
    },
    {
      when:  { cs: 'Pondělí 17:30', sk: 'Pondelok 17:30', pl: 'Poniedziałek 17:30', uk: 'Понеділок 17:30', ru: 'Понедельник 17:30', de: 'Montag 17:30 Uhr', en: 'Monday 17:30', es: 'Lunes 17:30' },
      what:  { cs: 'Evangelizace v centru města', sk: 'Evanjelizácia v centre mesta', pl: 'Ewangelizacja w centrum miasta', uk: 'Євангелізація в центрі міста', ru: 'Евангелизация в центре города', de: 'Evangelisation im Stadtzentrum', en: 'Evangelism in the town centre', es: 'Evangelización en el centro' },
      where: { cs: 'nám. T. G. Masaryka, Třinec', sk: 'nám. T. G. Masaryka, Třinec', pl: 'Rynek T. G. Masaryka, Trzyniec', uk: 'пл. Т. Ґ. Масарика, Тршинець', ru: 'пл. Т. Г. Масарика, Тршинец', de: 'T.-G.-Masaryk-Platz, Třinec', en: 'T. G. Masaryk Square, Třinec', es: 'Plaza T. G. Masaryk, Třinec' }
    },
    {
      // TODO doplnit konkrétní den a čas modlitebního setkání
      when:  { cs: 'Termín upřesníme', sk: 'Termín upresníme', pl: 'Termin podamy wkrótce', uk: 'Час уточнимо', ru: 'Время уточним', de: 'Termin wird bekannt gegeben', en: 'Date to be confirmed', es: 'Fecha por confirmar' },
      what:  { cs: 'Modlitební setkání', sk: 'Modlitebné stretnutie', pl: 'Spotkanie modlitewne', uk: 'Молитовна зустріч', ru: 'Молитвенная встреча', de: 'Gebetstreffen', en: 'Prayer meeting', es: 'Reunión de oración' },
      where: { cs: 'Hraniční 213, Třinec', sk: 'Hraniční 213, Třinec', pl: 'Hraniční 213, Trzyniec', uk: 'Hraniční 213, Тршинець', ru: 'Hraniční 213, Тршинец', de: 'Hraniční 213, Třinec', en: 'Hraniční 213, Třinec', es: 'Hraniční 213, Třinec' }
    }
  ],

  /* ------------------------------------------------------------------
     4) FOTOGALERIE na úvodní stránce
     Vložte soubory do assets/img/ a dopište je sem. Prázdný seznam =
     celá sekce se na webu vůbec nezobrazí.
     ------------------------------------------------------------------ */
  gallery: [
    { src: 'assets/img/galerie-01.jpg', alt: { cs: 'Chvály při nedělní bohoslužbě', sk: 'Chvály počas nedeľnej bohoslužby', uk: 'Прославлення на недільному богослужінні', ru: 'Прославление на воскресном богослужении', de: 'Lobpreis im Sonntagsgottesdienst', pl: 'Uwielbienie podczas nabożeństwa niedzielnego', en: 'Worship during the Sunday service', es: 'Alabanza durante el culto dominical' } },
    { src: 'assets/img/galerie-02.jpg', alt: { cs: 'Stůl s občerstvením v předsálí', sk: 'Stôl s občerstvením v predsálí', uk: 'Стіл з частуванням у фойє', ru: 'Стол с угощением в фойе', de: 'Der Tisch mit Erfrischungen im Foyer', pl: 'Stół z poczęstunkiem w przedsionku', en: 'The refreshments table in the foyer', es: 'La mesa con el refrigerio en el vestíbulo' } },
    { src: 'assets/img/galerie-03.jpg', alt: { cs: 'Rozhovor u pití po bohoslužbě', sk: 'Rozhovor pri nápoji po bohoslužbe', uk: 'Розмова за напоєм після богослужіння', ru: 'Разговор за напитком после богослужения', de: 'Gespräch bei einem Getränk nach dem Gottesdienst', pl: 'Rozmowa przy napoju po nabożeństwie', en: 'Conversation over a drink after the service', es: 'Conversación con una bebida después del culto' } },
    { src: 'assets/img/galerie-04.jpg', alt: { cs: 'Kytarista během chval', sk: 'Gitarista počas chvál', uk: 'Гітарист під час прославлення', ru: 'Гитарист во время прославления', de: 'Ein Gitarrist im Lobpreis', pl: 'Gitarzysta podczas uwielbienia', en: 'A guitarist during worship', es: 'Un guitarrista durante la alabanza' } },
    { src: 'assets/img/galerie-05.jpg', alt: { cs: 'Baskytarista v kapele', sk: 'Basgitarista v kapele', uk: 'Басист у гурті', ru: 'Бас-гитарист в группе', de: 'Der Bassist der Band', pl: 'Basista w zespole', en: 'The bass player in the band', es: 'El bajista de la banda' } },
    { src: 'assets/img/galerie-06.jpg', alt: { cs: 'Chvály při ztlumených světlech', sk: 'Chvály pri stlmených svetlách', uk: 'Прославлення при приглушеному світлі', ru: 'Прославление при приглушённом свете', de: 'Lobpreis bei gedämpftem Licht', pl: 'Uwielbienie przy przyciemnionych światłach', en: 'Worship with the lights down', es: 'Alabanza con las luces bajas' } },
    { src: 'assets/img/galerie-07.jpg', alt: { cs: 'Záznam bohoslužby na telefon', sk: 'Nahrávanie bohoslužby na telefón', uk: 'Запис богослужіння на телефон', ru: 'Запись богослужения на телефон', de: 'Der Gottesdienst wird mit dem Handy gefilmt', pl: 'Nagrywanie nabożeństwa telefonem', en: 'Filming the service on a phone', es: 'Grabando el culto con el móvil' } },
    { src: 'assets/img/galerie-08.jpg', alt: { cs: 'Host na bohoslužbě s tlumočnicí', sk: 'Hosť na bohoslužbe s tlmočníčkou', uk: 'Гість на богослужінні з перекладачкою', ru: 'Гость на богослужении с переводчицей', de: 'Ein Gastredner mit Dolmetscherin', pl: 'Gość na nabożeństwie z tłumaczką', en: 'A guest speaker with an interpreter', es: 'Un invitado con intérprete' } },
    { src: 'assets/img/galerie-09.jpg', alt: { cs: 'Rozhovor na pódiu při bohoslužbě', sk: 'Rozhovor na pódiu počas bohoslužby', uk: 'Розмова на сцені під час богослужіння', ru: 'Разговор на сцене во время богослужения', de: 'Ein Gespräch auf der Bühne während des Gottesdienstes', pl: 'Rozmowa na scenie podczas nabożeństwa', en: 'A conversation on the platform during the service', es: 'Una conversación en la plataforma durante el culto' } },
    { src: 'assets/img/galerie-10.jpg', alt: { cs: 'Vyučování u flipchartu', sk: 'Vyučovanie pri flipcharte', uk: 'Навчання біля фліпчарту', ru: 'Обучение у флипчарта', de: 'Lehre am Flipchart', pl: 'Nauczanie przy flipcharcie', en: 'Teaching at the flip chart', es: 'Enseñanza junto al rotafolio' } },
    { src: 'assets/img/galerie-11.jpg', alt: { cs: 'Poděkování při bohoslužbě', sk: 'Poďakovanie počas bohoslužby', uk: 'Подяка під час богослужіння', ru: 'Благодарность во время богослужения', de: 'Ein Dankeschön während des Gottesdienstes', pl: 'Podziękowanie podczas nabożeństwa', en: 'A thank-you during the service', es: 'Un agradecimiento durante el culto' } },
    { src: 'assets/img/galerie-12.jpg', alt: { cs: 'Pastor Petr Lysek při kázání', sk: 'Pastor Petr Lysek pri kázni', uk: 'Пастор Петр Лисек проповідує', ru: 'Пастор Петр Лысек проповедует', de: 'Pastor Petr Lysek beim Predigen', pl: 'Pastor Petr Lysek podczas kazania', en: 'Pastor Petr Lysek preaching', es: 'El pastor Petr Lysek predicando' } }
  ],

  /* ------------------------------------------------------------------
     5) AKTUALITY
     Nový příspěvek = zkopírujte celý blok { … } a vložte nahoru.
     image: cesta k fotce, např. 'assets/img/konference.jpg' (nebo '' = zástupný obrázek)
     link:  '' = bez odkazu, nebo URL na Facebook / YouTube / plakát
     ------------------------------------------------------------------ */
  news: [
    {
      date: '2026-07-12',
      image: '',
      link: '',
      tag:   { cs: 'Konference', sk: 'Konferencia', uk: 'Конференція', ru: 'Конференция', de: 'Konferenz', pl: 'Konferencja', en: 'Conference', es: 'Conferencia' },
      title: {
        cs: 'Podzimní konference 2026', sk: 'Jesenná konferencia 2026', uk: 'Осіння конференція 2026', ru: 'Осенняя конференция 2026', de: 'Herbstkonferenz 2026',
        pl: 'Konferencja jesienna 2026',
        en: 'Autumn Conference 2026',
        es: 'Conferencia de otoño 2026'
      },
      text: {
        cs: 'Připravujeme společné dny vyučování, chval a modliteb. Program, hosty a přesné termíny zveřejníme na Facebooku a na tomto místě.', sk: 'Pripravujeme spoločné dni vyučovania, chvál a modlitieb. Program, hostí a presné termíny zverejníme na Facebooku a na tomto mieste.', uk: 'Ми готуємо спільні дні навчання, прославлення та молитви. Програму, гостей і точні дати оголосимо на Facebook і тут.', ru: 'Мы готовим совместные дни обучения, прославления и молитвы. Программу, гостей и точные даты объявим в Facebook и здесь.', de: 'Wir bereiten gemeinsame Tage mit Lehre, Lobpreis und Gebet vor. Programm, Gäste und genaue Termine geben wir auf Facebook und hier bekannt.',
        pl: 'Przygotowujemy wspólne dni nauczania, uwielbienia i modlitwy. Program, gości oraz dokładne terminy ogłosimy na Facebooku i w tym miejscu.',
        en: 'We are preparing several days of teaching, worship and prayer together. The programme, guests and exact dates will be announced on Facebook and here.',
        es: 'Estamos preparando varios días de enseñanza, alabanza y oración. El programa, los invitados y las fechas exactas se anunciarán en Facebook y aquí.'
      }
    },
    {
      date: '2026-06-01',
      image: '',
      link: '',
      tag:   { cs: 'Evangelizace', sk: 'Evanjelizácia', uk: 'Євангелізація', ru: 'Евангелизация', de: 'Evangelisation', pl: 'Ewangelizacja', en: 'Evangelism', es: 'Evangelización' },
      title: {
        cs: 'Každé pondělí na náměstí', sk: 'Každý pondelok na námestí', uk: 'Щопонеділка на площі', ru: 'Каждый понедельник на площади', de: 'Jeden Montag auf dem Platz',
        pl: 'W każdy poniedziałek na rynku',
        en: 'On the square every Monday',
        es: 'Cada lunes en la plaza'
      },
      text: {
        cs: 'Scházíme se na náměstí T. G. Masaryka v Třinci, mluvíme s lidmi a nabízíme modlitbu. Přidat se může kdokoli ze sboru — stačí přijít.', sk: 'Stretávame sa na námestí T. G. Masaryka v Třinci, rozprávame sa s ľuďmi a ponúkame modlitbu. Pridať sa môže ktokoľvek zo zboru — stačí prísť.', uk: 'Ми збираємося на площі Т. Ґ. Масарика у Тршинці, розмовляємо з людьми й пропонуємо помолитися. Долучитися може будь-хто з церкви — досить просто прийти.', ru: 'Мы собираемся на площади Т. Г. Масарика в Тршинце, разговариваем с людьми и предлагаем помолиться. Присоединиться может любой из церкви — достаточно просто прийти.', de: 'Wir treffen uns auf dem T.-G.-Masaryk-Platz in Třinec, kommen mit Menschen ins Gespräch und bieten an, mit ihnen zu beten. Mitmachen kann jeder aus der Gemeinde — einfach dazukommen.',
        pl: 'Spotykamy się na Rynku T. G. Masaryka w Trzyńcu, rozmawiamy z ludźmi i proponujemy modlitwę. Dołączyć może każdy ze zboru — wystarczy przyjść.',
        en: 'We meet on T. G. Masaryk Square in Třinec, talk with people and offer to pray with them. Anyone from the church is welcome to join — just turn up.',
        es: 'Nos reunimos en la plaza T. G. Masaryk de Třinec, hablamos con la gente y ofrecemos orar con ellos. Cualquiera de la iglesia puede unirse: basta con venir.'
      }
    },
    {
      date: '2026-04-20',
      image: '',
      link: 'https://www.youtube.com/@sborviry',
      tag:   { cs: 'Vyučování', sk: 'Vyučovanie', uk: 'Навчання', ru: 'Обучение', de: 'Lehre', pl: 'Nauczanie', en: 'Teaching', es: 'Enseñanza' },
      title: {
        cs: 'Nová série kázání je na YouTube', sk: 'Nová séria kázní je na YouTube', uk: 'Нова серія проповідей уже на YouTube', ru: 'Новая серия проповедей уже на YouTube', de: 'Eine neue Predigtreihe ist auf YouTube',
        pl: 'Nowa seria kazań jest na YouTube',
        en: 'A new sermon series is on YouTube',
        es: 'Nueva serie de predicaciones en YouTube'
      },
      text: {
        cs: 'Všechna kázání postupně zveřejňujeme na našem kanálu. Můžete si je pustit kdykoli — doma, v autě i cestou do práce.', sk: 'Všetky kázne postupne zverejňujeme na našom kanáli. Môžete si ich pustiť kedykoľvek — doma, v aute aj cestou do práce.', uk: 'Усі проповіді ми поступово публікуємо на нашому каналі. Слухати можна будь-коли — вдома, в авті чи дорогою на роботу.', ru: 'Все проповеди мы постепенно публикуем на нашем канале. Слушать можно в любое время — дома, в машине или по дороге на работу.', de: 'Alle Predigten veröffentlichen wir nach und nach auf unserem Kanal. Sie können sie jederzeit hören — zu Hause, im Auto oder auf dem Weg zur Arbeit.',
        pl: 'Wszystkie kazania publikujemy sukcesywnie na naszym kanale. Możesz ich słuchać w dowolnej chwili — w domu, w samochodzie czy w drodze do pracy.',
        en: 'We publish all our sermons on our channel. You can watch or listen any time — at home, in the car or on your way to work.',
        es: 'Publicamos todas nuestras predicaciones en nuestro canal. Puedes verlas o escucharlas cuando quieras: en casa, en el coche o de camino al trabajo.'
      }
    }
  ],

  /* ------------------------------------------------------------------
     6) BANKOVNÍ ÚDAJE PRO DARY
     ------------------------------------------------------------------ */
  giving: {
    accountName: 'Sbor Víry, z. s.',
    bank: 'Fio banka, a. s.',
    accountNumber: '2601434065/2010',
    iban: 'CZ81 2010 0000 0026 0143 4065',
    swift: 'FIOBCZPP',
    variableSymbol: ''   // nepovinné — prázdné pole se nezobrazí
  }
};
