/* ============================================================================
   SBOR VÍRY — DATA, KTERÁ SE MĚNÍ NEJČASTĚJI
   ----------------------------------------------------------------------------
   Tady upravujte: kontakty, časy setkání, aktuality, videa, čísla účtu.
   Texty se zapisují jako { cs:"…", sk:"…", pl:"…", uk:"…", ru:"…",
                            de:"…", en:"…", es:"…", sv:"…", hu:"…" }.
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
      when:  { cs: 'Neděle 11:00', sk: 'Nedeľa 11:00', pl: 'Niedziela 11:00', uk: 'Неділя 11:00', ru: 'Воскресенье 11:00', de: 'Sonntag 11:00 Uhr', en: 'Sunday 11:00', es: 'Domingo 11:00', sv: 'Söndag kl. 11.00', hu: 'Vasárnap 11.00' },
      what:  { cs: 'Bohoslužba', sk: 'Bohoslužba', pl: 'Nabożeństwo', uk: 'Богослужіння', ru: 'Богослужение', de: 'Gottesdienst', en: 'Service', es: 'Culto', sv: 'Gudstjänst', hu: 'Istentisztelet' },
      where: { cs: 'Hraniční 213, Třinec', sk: 'Hraniční 213, Třinec', pl: 'Hraniční 213, Trzyniec', uk: 'Hraniční 213, Тршинець', ru: 'Hraniční 213, Тршинец', de: 'Hraniční 213, Třinec', en: 'Hraniční 213, Třinec', es: 'Hraniční 213, Třinec', sv: 'Hraniční 213, Třinec', hu: 'Hraniční 213, Třinec' }
    },
    {
      when:  { cs: 'Pondělí 17:30', sk: 'Pondelok 17:30', pl: 'Poniedziałek 17:30', uk: 'Понеділок 17:30', ru: 'Понедельник 17:30', de: 'Montag 17:30 Uhr', en: 'Monday 17:30', es: 'Lunes 17:30', sv: 'Måndag kl. 17.30', hu: 'Hétfő 17.30' },
      what:  { cs: 'Evangelizace', sk: 'Evanjelizácia', pl: 'Ewangelizacja', uk: 'Євангелізація', ru: 'Евангелизация', de: 'Evangelisation', en: 'Evangelism', es: 'Evangelización', sv: 'Evangelisation', hu: 'Evangelizáció' },
      where: { cs: 'nám. T. G. Masaryka, Třinec', sk: 'nám. T. G. Masaryka, Třinec', pl: 'Rynek T. G. Masaryka, Trzyniec', uk: 'пл. Т. Ґ. Масарика, Тршинець', ru: 'пл. Т. Г. Масарика, Тршинец', de: 'T.-G.-Masaryk-Platz, Třinec', en: 'T. G. Masaryk Square, Třinec', es: 'Plaza T. G. Masaryk, Třinec', sv: 'T. G. Masaryks torg, Třinec', hu: 'T. G. Masaryk tér, Třinec' }
    },
    {
      when:  { cs: 'Čtvrtek 18:00', sk: 'Štvrtok 18:00', pl: 'Czwartek 18:00', uk: 'Четвер 18:00', ru: 'Четверг 18:00', de: 'Donnerstag 18:00 Uhr', en: 'Thursday 18:00', es: 'Jueves 18:00', sv: 'Torsdag kl. 18.00', hu: 'Csütörtök 18.00' },
      what:  { cs: 'Domácí skupinky', sk: 'Domáce skupinky', pl: 'Grupy domowe', uk: 'Домашні групи', ru: 'Домашние группы', de: 'Hauskreise', en: 'Home groups', es: 'Grupos en casas', sv: 'Hemgrupper', hu: 'Házicsoportok' },
      // Místo se u skupinek neuvádí — adresy domácností se nezveřejňují.
      // Prázdný sloupec se na webu vůbec nevykreslí.
      where: { cs: '', sk: '', pl: '', uk: '', ru: '', de: '', en: '', es: '', sv: '', hu: '' }
    },
    {
      // TODO doplnit konkrétní den a čas modlitebního setkání
      when:  { cs: 'Termín upřesníme', sk: 'Termín upresníme', pl: 'Termin podamy wkrótce', uk: 'Час уточнимо', ru: 'Время уточним', de: 'Termin wird bekannt gegeben', en: 'Date to be confirmed', es: 'Fecha por confirmar', sv: 'Tiden meddelas senare', hu: 'Az időpontot később pontosítjuk' },
      what:  { cs: 'Modlitební setkání', sk: 'Modlitebné stretnutie', pl: 'Spotkanie modlitewne', uk: 'Молитовна зустріч', ru: 'Молитвенная встреча', de: 'Gebetstreffen', en: 'Prayer meeting', es: 'Reunión de oración', sv: 'Bönesamling', hu: 'Imaalkalom' },
      where: { cs: 'Hraniční 213, Třinec', sk: 'Hraniční 213, Třinec', pl: 'Hraniční 213, Trzyniec', uk: 'Hraniční 213, Тршинець', ru: 'Hraniční 213, Тршинец', de: 'Hraniční 213, Třinec', en: 'Hraniční 213, Třinec', es: 'Hraniční 213, Třinec', sv: 'Hraniční 213, Třinec', hu: 'Hraniční 213, Třinec' }
    }
  ],

  /* ------------------------------------------------------------------
     4) FOTOGALERIE na úvodní stránce
     Vložte soubory do assets/img/ a dopište je sem. Prázdný seznam =
     celá sekce se na webu vůbec nezobrazí.
     ------------------------------------------------------------------ */
  gallery: [
    { src: 'assets/img/galerie-01.jpg', alt: { cs: 'Chvály při nedělní bohoslužbě', sk: 'Chvály počas nedeľnej bohoslužby', uk: 'Прославлення на недільному богослужінні', ru: 'Прославление на воскресном богослужении', de: 'Lobpreis im Sonntagsgottesdienst', pl: 'Uwielbienie podczas nabożeństwa niedzielnego', en: 'Worship during the Sunday service', es: 'Alabanza durante el culto dominical', sv: 'Lovsång under söndagens gudstjänst', hu: 'Dicséret a vasárnapi istentiszteleten' } },
    { src: 'assets/img/galerie-02.jpg', alt: { cs: 'Stůl s občerstvením v předsálí', sk: 'Stôl s občerstvením v predsálí', uk: 'Стіл з частуванням у фойє', ru: 'Стол с угощением в фойе', de: 'Der Tisch mit Erfrischungen im Foyer', pl: 'Stół z poczęstunkiem w przedsionku', en: 'The refreshments table in the foyer', es: 'La mesa con el refrigerio en el vestíbulo', sv: 'Bordet med förfriskningar i foajén', hu: 'Frissítőkkel megterített asztal az előtérben' } },
    { src: 'assets/img/galerie-03.jpg', alt: { cs: 'Rozhovor u pití po bohoslužbě', sk: 'Rozhovor pri nápoji po bohoslužbe', uk: 'Розмова за напоєм після богослужіння', ru: 'Разговор за напитком после богослужения', de: 'Gespräch bei einem Getränk nach dem Gottesdienst', pl: 'Rozmowa przy napoju po nabożeństwie', en: 'Conversation over a drink after the service', es: 'Conversación con una bebida después del culto', sv: 'Samtal över en kopp efter gudstjänsten', hu: 'Beszélgetés egy ital mellett az istentisztelet után' } },
    { src: 'assets/img/galerie-04.jpg', alt: { cs: 'Kytarista během chval', sk: 'Gitarista počas chvál', uk: 'Гітарист під час прославлення', ru: 'Гитарист во время прославления', de: 'Ein Gitarrist im Lobpreis', pl: 'Gitarzysta podczas uwielbienia', en: 'A guitarist during worship', es: 'Un guitarrista durante la alabanza', sv: 'En gitarrist under lovsången', hu: 'Gitáros a dicséret közben' } },
    { src: 'assets/img/galerie-05.jpg', alt: { cs: 'Baskytarista v kapele', sk: 'Basgitarista v kapele', uk: 'Басист у гурті', ru: 'Бас-гитарист в группе', de: 'Der Bassist der Band', pl: 'Basista w zespole', en: 'The bass player in the band', es: 'El bajista de la banda', sv: 'Basisten i bandet', hu: 'A zenekar basszusgitárosa' } },
    { src: 'assets/img/galerie-06.jpg', alt: { cs: 'Chvály při ztlumených světlech', sk: 'Chvály pri stlmených svetlách', uk: 'Прославлення при приглушеному світлі', ru: 'Прославление при приглушённом свете', de: 'Lobpreis bei gedämpftem Licht', pl: 'Uwielbienie przy przyciemnionych światłach', en: 'Worship with the lights down', es: 'Alabanza con las luces bajas', sv: 'Lovsång i dämpad belysning', hu: 'Dicséret letompított fényben' } },
    { src: 'assets/img/galerie-07.jpg', alt: { cs: 'Záznam bohoslužby na telefon', sk: 'Nahrávanie bohoslužby na telefón', uk: 'Запис богослужіння на телефон', ru: 'Запись богослужения на телефон', de: 'Der Gottesdienst wird mit dem Handy gefilmt', pl: 'Nagrywanie nabożeństwa telefonem', en: 'Filming the service on a phone', es: 'Grabando el culto con el móvil', sv: 'Gudstjänsten filmas med en telefon', hu: 'Az istentisztelet felvétele telefonnal' } },
    { src: 'assets/img/galerie-08.jpg', alt: { cs: 'Host na bohoslužbě s tlumočnicí', sk: 'Hosť na bohoslužbe s tlmočníčkou', uk: 'Гість на богослужінні з перекладачкою', ru: 'Гость на богослужении с переводчицей', de: 'Ein Gastredner mit Dolmetscherin', pl: 'Gość na nabożeństwie z tłumaczką', en: 'A guest speaker with an interpreter', es: 'Un invitado con intérprete', sv: 'En gästtalare på gudstjänsten med tolk', hu: 'Vendég az istentiszteleten tolmáccsal' } },
    { src: 'assets/img/galerie-09.jpg', alt: { cs: 'Rozhovor na pódiu při bohoslužbě', sk: 'Rozhovor na pódiu počas bohoslužby', uk: 'Розмова на сцені під час богослужіння', ru: 'Разговор на сцене во время богослужения', de: 'Ein Gespräch auf der Bühne während des Gottesdienstes', pl: 'Rozmowa na scenie podczas nabożeństwa', en: 'A conversation on the platform during the service', es: 'Una conversación en la plataforma durante el culto', sv: 'Ett samtal på podiet under gudstjänsten', hu: 'Beszélgetés a színpadon az istentisztelet alatt' } },
    { src: 'assets/img/galerie-10.jpg', alt: { cs: 'Vyučování u flipchartu', sk: 'Vyučovanie pri flipcharte', uk: 'Навчання біля фліпчарту', ru: 'Обучение у флипчарта', de: 'Lehre am Flipchart', pl: 'Nauczanie przy flipcharcie', en: 'Teaching at the flip chart', es: 'Enseñanza junto al rotafolio', sv: 'Undervisning vid blädderblocket', hu: 'Tanítás a flipchartnál' } },
    { src: 'assets/img/galerie-11.jpg', alt: { cs: 'Poděkování při bohoslužbě', sk: 'Poďakovanie počas bohoslužby', uk: 'Подяка під час богослужіння', ru: 'Благодарность во время богослужения', de: 'Ein Dankeschön während des Gottesdienstes', pl: 'Podziękowanie podczas nabożeństwa', en: 'A thank-you during the service', es: 'Un agradecimiento durante el culto', sv: 'Ett tack under gudstjänsten', hu: 'Köszönetnyilvánítás az istentiszteleten' } },
    { src: 'assets/img/galerie-12.jpg', alt: { cs: 'Pastor Petr Lysek při kázání', sk: 'Pastor Petr Lysek pri kázni', uk: 'Пастор Петр Лисек проповідує', ru: 'Пастор Петр Лысек проповедует', de: 'Pastor Petr Lysek beim Predigen', pl: 'Pastor Petr Lysek podczas kazania', en: 'Pastor Petr Lysek preaching', es: 'El pastor Petr Lysek predicando', sv: 'Pastor Petr Lysek predikar', hu: 'Petr Lysek pásztor igét hirdet' } }
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
      tag:   { cs: 'Konference', sk: 'Konferencia', uk: 'Конференція', ru: 'Конференция', de: 'Konferenz', pl: 'Konferencja', en: 'Conference', es: 'Conferencia', sv: 'Konferens', hu: 'Konferencia' },
      title: {
        cs: 'Podzimní konference 2026', sk: 'Jesenná konferencia 2026', uk: 'Осіння конференція 2026', ru: 'Осенняя конференция 2026', de: 'Herbstkonferenz 2026',
        pl: 'Konferencja jesienna 2026',
        en: 'Autumn Conference 2026',
        es: 'Conferencia de otoño 2026', sv: 'Höstkonferensen 2026', hu: '2026-os őszi konferencia'
      },
      text: {
        cs: 'Připravujeme společné dny vyučování, chval a modliteb. Program, hosty a přesné termíny zveřejníme na Facebooku a na tomto místě.', sk: 'Pripravujeme spoločné dni vyučovania, chvál a modlitieb. Program, hostí a presné termíny zverejníme na Facebooku a na tomto mieste.', uk: 'Ми готуємо спільні дні навчання, прославлення та молитви. Програму, гостей і точні дати оголосимо на Facebook і тут.', ru: 'Мы готовим совместные дни обучения, прославления и молитвы. Программу, гостей и точные даты объявим в Facebook и здесь.', de: 'Wir bereiten gemeinsame Tage mit Lehre, Lobpreis und Gebet vor. Programm, Gäste und genaue Termine geben wir auf Facebook und hier bekannt.',
        pl: 'Przygotowujemy wspólne dni nauczania, uwielbienia i modlitwy. Program, gości oraz dokładne terminy ogłosimy na Facebooku i w tym miejscu.',
        en: 'We are preparing several days of teaching, worship and prayer together. The programme, guests and exact dates will be announced on Facebook and here.',
        es: 'Estamos preparando varios días de enseñanza, alabanza y oración. El programa, los invitados y las fechas exactas se anunciarán en Facebook y aquí.', sv: 'Vi förbereder gemensamma dagar med undervisning, lovsång och bön. Program, gäster och exakta datum meddelar vi på Facebook och här.', hu: 'Közös tanítási, dicséreti és imanapokra készülünk. A programot, a vendégeket és a pontos időpontokat a Facebookon és itt tesszük közzé.'
      }
    },
    {
      date: '2026-06-01',
      image: '',
      link: '',
      tag:   { cs: 'Evangelizace', sk: 'Evanjelizácia', uk: 'Євангелізація', ru: 'Евангелизация', de: 'Evangelisation', pl: 'Ewangelizacja', en: 'Evangelism', es: 'Evangelización', sv: 'Evangelisation', hu: 'Evangelizáció' },
      title: {
        cs: 'Každé pondělí na náměstí', sk: 'Každý pondelok na námestí', uk: 'Щопонеділка на площі', ru: 'Каждый понедельник на площади', de: 'Jeden Montag auf dem Platz',
        pl: 'W każdy poniedziałek na rynku',
        en: 'On the square every Monday',
        es: 'Cada lunes en la plaza', sv: 'Varje måndag på torget', hu: 'Minden hétfőn a téren'
      },
      text: {
        cs: 'Scházíme se na náměstí T. G. Masaryka v Třinci, mluvíme s lidmi a nabízíme modlitbu. Přidat se může kdokoli ze sboru — stačí přijít.', sk: 'Stretávame sa na námestí T. G. Masaryka v Třinci, rozprávame sa s ľuďmi a ponúkame modlitbu. Pridať sa môže ktokoľvek zo zboru — stačí prísť.', uk: 'Ми збираємося на площі Т. Ґ. Масарика у Тршинці, розмовляємо з людьми й пропонуємо помолитися. Долучитися може будь-хто з церкви — досить просто прийти.', ru: 'Мы собираемся на площади Т. Г. Масарика в Тршинце, разговариваем с людьми и предлагаем помолиться. Присоединиться может любой из церкви — достаточно просто прийти.', de: 'Wir treffen uns auf dem T.-G.-Masaryk-Platz in Třinec, kommen mit Menschen ins Gespräch und bieten an, mit ihnen zu beten. Mitmachen kann jeder aus der Gemeinde — einfach dazukommen.',
        pl: 'Spotykamy się na Rynku T. G. Masaryka w Trzyńcu, rozmawiamy z ludźmi i proponujemy modlitwę. Dołączyć może każdy ze zboru — wystarczy przyjść.',
        en: 'We meet on T. G. Masaryk Square in Třinec, talk with people and offer to pray with them. Anyone from the church is welcome to join — just turn up.',
        es: 'Nos reunimos en la plaza T. G. Masaryk de Třinec, hablamos con la gente y ofrecemos orar con ellos. Cualquiera de la iglesia puede unirse: basta con venir.', sv: 'Vi träffas på T. G. Masaryks torg i Třinec, samtalar med människor och erbjuder förbön. Vem som helst i församlingen kan följa med — det räcker att komma.', hu: 'A třineci T. G. Masaryk téren gyűlünk össze, beszélgetünk az emberekkel, és felajánljuk, hogy imádkozunk értük. Bárki csatlakozhat a gyülekezetből — elég eljönni.'
      }
    },
    {
      date: '2026-05-07',
      image: 'assets/img/rozsvit-tmu.jpg',
      link: 'https://www.rozsvittmu.cz/po-akci.html',
      tag:   { cs: 'Festival', sk: 'Festival', pl: 'Festiwal', uk: 'Фестиваль', ru: 'Фестиваль', de: 'Festival', en: 'Festival', es: 'Festival', sv: 'Festival', hu: 'Fesztivál' },
      title: {
        cs: 'Rozsviť tmu — byli jsme u toho',
        sk: 'Rozsviť tmu — boli sme pri tom',
        pl: 'Rozsviť tmu — byliśmy przy tym',
        uk: 'Rozsviť tmu — ми були серед організаторів',
        ru: 'Rozsviť tmu — мы были среди организаторов',
        de: 'Rozsviť tmu — wir waren Mitveranstalter',
        en: 'Rozsviť tmu — we helped put it on',
        es: 'Rozsviť tmu: fuimos coorganizadores',
        sv: 'Rozsviť tmu — vi var med och ordnade den',
        hu: 'Rozsviť tmu — társszervezők voltunk'
      },
      text: {
        cs: 'Od čtvrtka 7. do soboty 9. května se na náměstí Svobody v Třinci konal rodinný festival Rozsviť tmu. Připravili jsme ho společně s dalšími místními církvemi a sbory. Hudba, program pro děti a osobní příběhy lidí o novém začátku — a vstup zdarma. Ve stejných dnech festival proběhl v deseti městech po celém Česku — evangelium tam slyšelo 8 100 lidí, 1 074 z nich se rozhodlo pro Ježíše a 626 lidí poprosilo o další kontakt. Připravuje se další ročník; jakmile budeme znát termín, dáme vědět tady a na Facebooku.',
        sk: 'Od štvrtka 7. do soboty 9. mája sa na námestí Svobody v Třinci konal rodinný festival Rozsviť tmu. Pripravili sme ho spoločne s ďalšími miestnymi cirkvami a zbormi. Hudba, program pre deti a osobné príbehy ľudí o novom začiatku — a vstup zadarmo. V rovnakých dňoch festival prebehol v desiatich mestách po celom Česku — evanjelium tam počulo 8 100 ľudí, 1 074 z nich sa rozhodlo pre Ježiša a 626 ľudí požiadalo o ďalší kontakt. Pripravuje sa ďalší ročník; hneď ako budeme poznať termín, dáme vedieť tu a na Facebooku.',
        pl: 'Od czwartku 7 do soboty 9 maja odbywał się na placu Svobody w Trzyńcu rodzinny festiwal Rozsviť tmu. Przygotowaliśmy go wspólnie z innymi miejscowymi kościołami i zborami. Muzyka, program dla dzieci i osobiste historie ludzi o nowym początku — a wstęp wolny. W tych samych dniach festiwal odbył się w dziesięciu miastach w całych Czechach — ewangelię usłyszało tam 8 100 osób, 1 074 osoby zdecydowały się pójść za Jezusem, a 626 osób poprosiło o dalszy kontakt. Przygotowywana jest kolejna edycja; gdy poznamy termin, damy znać tutaj i na Facebooku.',
        uk: 'Із четверга 7 до суботи 9 травня на площі Свободи у Тршинці тривав сімейний фестиваль Rozsviť tmu. Ми підготували його разом з іншими місцевими церквами та громадами. Музика, програма для дітей та особисті історії людей про новий початок — і безкоштовний вхід. Того самого тижня фестиваль пройшов у десяти містах по всій Чехії — євангеліє там почули 8 100 людей, 1 074 з них вирішили піти за Ісусом, а 626 попросили про подальший контакт. Готується наступний рік; щойно знатимемо дату, повідомимо тут і на Facebook.',
        ru: 'С четверга 7 по субботу 9 мая на площади Свободы в Тршинце проходил семейный фестиваль Rozsviť tmu. Мы подготовили его вместе с другими местными церквями и общинами. Музыка, программа для детей и личные истории людей о новом начале — и бесплатный вход. В те же дни фестиваль прошёл в десяти городах по всей Чехии — евангелие там услышали 8 100 человек, 1 074 из них приняли решение следовать за Иисусом, а 626 попросили о дальнейшем контакте. Готовится следующий год; как только узнаем дату, сообщим здесь и в Facebook.',
        de: 'Von Donnerstag, dem 7., bis Samstag, dem 9. Mai, fand auf dem Svobody-Platz in Třinec das Familienfestival Rozsviť tmu statt. Wir haben es gemeinsam mit weiteren örtlichen Kirchen und Gemeinden vorbereitet. Musik, ein Programm für Kinder und persönliche Geschichten von Menschen über einen Neuanfang — bei freiem Eintritt. Zur gleichen Zeit lief das Festival in zehn Städten in ganz Tschechien — 8.100 Menschen hörten dort das Evangelium, 1.074 von ihnen entschieden sich für Jesus und 626 baten um weiteren Kontakt. Die nächste Ausgabe ist in Vorbereitung; sobald der Termin feststeht, sagen wir hier und auf Facebook Bescheid.',
        en: 'From Thursday 7 to Saturday 9 May the Rozsviť tmu family festival took place on Svobody Square in Třinec. We prepared it together with other local churches and congregations. Music, a programme for children and people telling their own stories of a fresh start — with free admission. Over the same days the festival ran in ten towns across Czechia — 8,100 people heard the gospel there, 1,074 of them made a decision for Jesus and 626 asked for further contact. Another edition is being prepared; as soon as we know the date, we will announce it here and on Facebook.',
        es: 'Del jueves 7 al sábado 9 de mayo se celebró en la plaza Svobody de Třinec el festival familiar Rozsviť tmu. Lo preparamos junto con otras iglesias y congregaciones locales. Música, programa para los niños e historias personales sobre un nuevo comienzo, con entrada libre. Esos mismos días el festival se celebró en diez ciudades de toda Chequia: 8100 personas escucharon allí el evangelio, 1074 de ellas tomaron la decisión de seguir a Jesús y 626 pidieron seguir en contacto. Ya se prepara la próxima edición; en cuanto sepamos la fecha, lo anunciaremos aquí y en Facebook.',
        sv: 'Från torsdagen den 7 till lördagen den 9 maj hölls familjefestivalen Rozsviť tmu på torget Svobody i Třinec. Vi förberedde den tillsammans med andra lokala kyrkor och församlingar. Musik, program för barnen och människor som berättade sina egna historier om en ny start — med fri entré. Samma dagar hölls festivalen i tio städer runt om i Tjeckien — 8 100 människor fick höra evangeliet, 1 074 av dem tog emot Jesus och 626 bad om fortsatt kontakt. Nästa upplaga förbereds; så snart vi vet datumet berättar vi det här och på Facebook.',
        hu: 'Május 7. és 9. között, csütörtöktől szombatig rendezték meg a třineci Svobody téren a Rozsviť tmu családi fesztivált. Más helyi egyházakkal és gyülekezetekkel közösen készítettük elő. Zene, gyerekprogram és emberek személyes történetei az újrakezdésről — ingyenes belépéssel. Ugyanezekben a napokban a fesztivál Csehország tíz városában zajlott — ott 8100 ember hallotta az evangéliumot, közülük 1074-en döntöttek Jézus mellett, és 626-an kérték, hogy tartsuk velük a kapcsolatot. Készül a jövő évi fesztivál is; amint tudjuk az időpontot, itt és a Facebookon jelezzük.'
      }
    },
    {
      date: '2026-04-20',
      image: '',
      link: 'https://www.youtube.com/@sborviry',
      tag:   { cs: 'Vyučování', sk: 'Vyučovanie', uk: 'Навчання', ru: 'Обучение', de: 'Lehre', pl: 'Nauczanie', en: 'Teaching', es: 'Enseñanza', sv: 'Undervisning', hu: 'Tanítás' },
      title: {
        cs: 'Nová série kázání je na YouTube', sk: 'Nová séria kázní je na YouTube', uk: 'Нова серія проповідей уже на YouTube', ru: 'Новая серия проповедей уже на YouTube', de: 'Eine neue Predigtreihe ist auf YouTube',
        pl: 'Nowa seria kazań jest na YouTube',
        en: 'A new sermon series is on YouTube',
        es: 'Nueva serie de predicaciones en YouTube', sv: 'En ny predikoserie finns på YouTube', hu: 'Új igehirdetés-sorozat a YouTube-on'
      },
      text: {
        cs: 'Všechna kázání postupně zveřejňujeme na našem kanálu. Můžete si je pustit kdykoli — doma, v autě i cestou do práce.', sk: 'Všetky kázne postupne zverejňujeme na našom kanáli. Môžete si ich pustiť kedykoľvek — doma, v aute aj cestou do práce.', uk: 'Усі проповіді ми поступово публікуємо на нашому каналі. Слухати можна будь-коли — вдома, в авті чи дорогою на роботу.', ru: 'Все проповеди мы постепенно публикуем на нашем канале. Слушать можно в любое время — дома, в машине или по дороге на работу.', de: 'Alle Predigten veröffentlichen wir nach und nach auf unserem Kanal. Sie können sie jederzeit hören — zu Hause, im Auto oder auf dem Weg zur Arbeit.',
        pl: 'Wszystkie kazania publikujemy sukcesywnie na naszym kanale. Możesz ich słuchać w dowolnej chwili — w domu, w samochodzie czy w drodze do pracy.',
        en: 'We publish all our sermons on our channel. You can watch or listen any time — at home, in the car or on your way to work.',
        es: 'Publicamos todas nuestras predicaciones en nuestro canal. Puedes verlas o escucharlas cuando quieras: en casa, en el coche o de camino al trabajo.', sv: 'Alla predikningar publicerar vi efter hand på vår kanal. Du kan lyssna när du vill — hemma, i bilen eller på väg till jobbet.', hu: 'Minden igehirdetést fokozatosan közzéteszünk a csatornánkon. Bármikor meghallgathatod — otthon, az autóban vagy munkába menet.'
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
