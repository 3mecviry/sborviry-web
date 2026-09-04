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

  /* --- Archivní podcast ----------------------------------------------
     Patnáct kázání z roku 2020, tehdy nahraných přes službu Anchor
     (dnes Spotify for Creators). Nové epizody nepřibývají.

     Na webu ho záměrně nikde neodkazujeme — posílat návštěvníky na spící
     pořad nemá smysl. Ve strukturovaných datech ale být má: říká
     vyhledávačům a AI „tenhle podcast jsme my“, takže nás nerozdělí
     na dvě různé organizace. Proto stojí mimo `social` výš, ze kterého
     se skládají viditelná tlačítka v patičce.

     Adresa je záměrně ta s číslem pořadu (id…) — textová část se v Apple
     Podcasts mění, číslo zůstává. V llms.txt se u ní doplní poznámka,
     že jde o archiv, aby ji AI nenabízela jako zdroj aktuálních kázání.
     -------------------------------------------------------------------- */
  podcastArchiv: 'https://podcasts.apple.com/cz/podcast/sbor-v%C3%ADry/id1525580706',

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
  youtubeVideoId: 'S2COFjoJIN4',
  youtubePlaylistId: 'PLeGPPF1P4_e7bzvZGKWhvnJ1RVz-8MkM-',   // Bohoslužba | 2026

  // Rok založení sboru (uvádí se ve strukturovaných datech pro vyhledávače)
  founded: '2002',

  /* ------------------------------------------------------------------
     3) ČASY SETKÁNÍ
     ------------------------------------------------------------------ */
  /* U každého setkání je vedle textu pro návštěvníka i strojový zápis
     (`den` a `cas`). Z něj se skládají strukturovaná data pro vyhledávače
     a hlasové i textové asistenty — díky nim umí odpovědět na otázku
     „kdy má Sbor Víry bohoslužby“ přímo, bez otvírání webu.
     Den se píše anglicky (Sunday, Monday, Tuesday, Wednesday, Thursday,
     Friday, Saturday), čas ve tvaru HH:MM. Obojí je nepovinné — když je
     vynecháte, na webu se setkání ukáže úplně stejně, jen se nedostane
     do strukturovaných dat. */
  times: [
    {
      den: 'Sunday', cas: '11:00',
      when:  { cs: 'Neděle 11:00', sk: 'Nedeľa 11:00', pl: 'Niedziela 11:00', uk: 'Неділя 11:00', ru: 'Воскресенье 11:00', de: 'Sonntag 11:00 Uhr', en: 'Sunday 11:00', es: 'Domingo 11:00', sv: 'Söndag kl. 11.00', hu: 'Vasárnap 11.00' },
      what:  { cs: 'Bohoslužba', sk: 'Bohoslužba', pl: 'Nabożeństwo', uk: 'Богослужіння', ru: 'Богослужение', de: 'Gottesdienst', en: 'Service', es: 'Culto', sv: 'Gudstjänst', hu: 'Istentisztelet' },
      where: { cs: 'Hraniční 213, Třinec', sk: 'Hraniční 213, Třinec', pl: 'Hraniční 213, Trzyniec', uk: 'Hraniční 213, Тршинець', ru: 'Hraniční 213, Тршинец', de: 'Hraniční 213, Třinec', en: 'Hraniční 213, Třinec', es: 'Hraniční 213, Třinec', sv: 'Hraniční 213, Třinec', hu: 'Hraniční 213, Třinec' }
    },
    {
      den: 'Monday', cas: '17:30',
      when:  { cs: 'Pondělí 17:30', sk: 'Pondelok 17:30', pl: 'Poniedziałek 17:30', uk: 'Понеділок 17:30', ru: 'Понедельник 17:30', de: 'Montag 17:30 Uhr', en: 'Monday 17:30', es: 'Lunes 17:30', sv: 'Måndag kl. 17.30', hu: 'Hétfő 17.30' },
      what:  { cs: 'Evangelizace', sk: 'Evanjelizácia', pl: 'Ewangelizacja', uk: 'Євангелізація', ru: 'Евангелизация', de: 'Evangelisation', en: 'Evangelism', es: 'Evangelización', sv: 'Evangelisation', hu: 'Evangelizáció' },
      where: { cs: 'nám. T. G. Masaryka, Třinec', sk: 'nám. T. G. Masaryka, Třinec', pl: 'Rynek T. G. Masaryka, Trzyniec', uk: 'пл. Т. Ґ. Масарика, Тршинець', ru: 'пл. Т. Г. Масарика, Тршинец', de: 'T.-G.-Masaryk-Platz, Třinec', en: 'T. G. Masaryk Square, Třinec', es: 'Plaza T. G. Masaryk, Třinec', sv: 'T. G. Masaryks torg, Třinec', hu: 'T. G. Masaryk tér, Třinec' }
    },
    {
      den: 'Thursday', cas: '18:00',
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
     dateLabel: nepovinné. U pravidelné akce se místo data zveřejnění ukáže
                tenhle text, např. 'Každé pondělí 17:30'. Bez něj se vypíše date.
     ------------------------------------------------------------------ */
  news: [
    {
      // Pozvánka na akci, která teprve bude. Po večeru stačí přepsat text na
      // ohlédnutí, smazat dateLabel (vypíše se pak datum konání) a případně
      // doplnit odkaz na záznam a vlastní fotku.
      date: '2026-09-14',
      dateLabel: {
        cs: 'Pondělí 14. září v 18:00',
        sk: 'Pondelok 14. septembra o 18:00',
        pl: 'Poniedziałek 14 września o 18:00',
        uk: 'Понеділок, 14 вересня, о 18:00',
        ru: 'Понедельник, 14 сентября, в 18:00',
        de: 'Montag, 14. September, 18:00 Uhr',
        en: 'Monday 14 September at 18:00',
        es: 'Lunes 14 de septiembre a las 18:00',
        sv: 'Måndag 14 september kl. 18.00',
        hu: 'Szeptember 14., hétfő, 18:00'
      },
      // Fotka z loňského prorockého večera, na který tenhle navazuje.
      image: 'assets/img/prorocka-sluzba-2025.jpg',
      link: '',
      tag:   { cs: 'Pozvánka', sk: 'Pozvánka', pl: 'Zaproszenie', uk: 'Запрошення', ru: 'Приглашение', de: 'Einladung', en: 'Invitation', es: 'Invitación', sv: 'Inbjudan', hu: 'Meghívó' },
      title: {
        cs: 'Prorocký večer s uctíváním v Třinci — 14. září 2026',
        sk: 'Prorocký večer s uctievaním v Třinci — 14. septembra 2026',
        pl: 'Wieczór proroczy z uwielbieniem w Trzyńcu — 14 września 2026',
        uk: 'Пророчий вечір із прославленням у Тршинці — 14 вересня 2026',
        ru: 'Пророческий вечер с прославлением в Тршинце — 14 сентября 2026',
        de: 'Prophetischer Abend mit Lobpreis in Třinec — 14. September 2026',
        en: 'A prophetic evening with worship in Třinec — 14 September 2026',
        es: 'Velada profética con alabanza en Třinec — 14 de septiembre de 2026',
        sv: 'Profetisk kväll med lovsång i Třinec — 14 september 2026',
        hu: 'Prófétai est dicsérettel Třinecben — 2026. szeptember 14.'
      },
      text: {
        cs: 'V pondělí 14. září 2026 od 18:00 vás zveme do Sboru Víry v Třinci na další prorocký večer — navazuje na ten loňský z 13. října. Čekají nás chvály a uctívání, společná modlitba a prorocká slova. Přijít může kdokoli, vstup je volný a hlásit se nikam předem nemusíte. Sejdeme se na adrese Hraniční 213.',
        sk: 'V pondelok 14. septembra 2026 od 18:00 vás pozývame do zboru Sbor Víry v Třinci na ďalší prorocký večer — nadväzuje na ten vlaňajší z 13. októbra. Čakajú nás chvály a uctievanie, spoločná modlitba a prorocké slová. Prísť môže ktokoľvek, vstup je voľný a vopred sa nikam hlásiť nemusíte. Stretneme sa na adrese Hraniční 213.',
        pl: 'W poniedziałek 14 września 2026 r. od 18:00 zapraszamy do zboru Sbor Víry w Trzyńcu na kolejny wieczór proroczy — nawiązuje do zeszłorocznego z 13 października. Czekają nas uwielbienie, wspólna modlitwa i prorocze słowa. Przyjść może każdy, wstęp jest wolny i nie trzeba się wcześniej zgłaszać. Spotykamy się przy ulicy Hraniční 213.',
        uk: 'У понеділок, 14 вересня 2026 року, о 18:00 запрошуємо до церкви Sbor Víry у Тршинці на черговий пророчий вечір — він продовжує торішній вечір 13 жовтня. На нас чекають прославлення, спільна молитва та пророчі слова. Прийти може будь-хто, вхід вільний і реєструватися заздалегідь не потрібно. Зустрічаємося за адресою Hraniční 213.',
        ru: 'В понедельник, 14 сентября 2026 года, в 18:00 приглашаем в церковь Sbor Víry в Тршинце на очередной пророческий вечер — он продолжает прошлогодний вечер 13 октября. Нас ждут прославление, совместная молитва и пророческие слова. Прийти может любой, вход свободный и записываться заранее не нужно. Встречаемся по адресу Hraniční 213.',
        de: 'Am Montag, dem 14. September 2026, laden wir ab 18:00 Uhr zu einem weiteren prophetischen Abend in die Gemeinde Sbor Víry in Třinec ein — er knüpft an den Abend vom 13. Oktober des vergangenen Jahres an. Es erwarten uns Lobpreis und Anbetung, gemeinsames Gebet und prophetische Worte. Kommen kann jeder, der Eintritt ist frei und eine Anmeldung ist nicht nötig. Wir treffen uns in der Hraniční 213.',
        en: 'On Monday 14 September 2026 at 18:00 we invite you to Sbor Víry in Třinec for another prophetic evening — it follows on from the one we held here last October. There will be worship, prayer together and prophetic words. Anyone is welcome, admission is free and there is no need to sign up in advance. We meet at Hraniční 213.',
        es: 'El lunes 14 de septiembre de 2026, a las 18:00, te invitamos a la iglesia Sbor Víry de Třinec a otra velada profética, que da continuidad a la del 13 de octubre del año pasado. Habrá alabanza y adoración, oración en común y palabras proféticas. Puede venir cualquiera, la entrada es libre y no hace falta inscribirse. Nos vemos en Hraniční 213.',
        sv: 'Måndagen den 14 september 2026 kl. 18.00 bjuder vi in till ännu en profetisk kväll hos Sbor Víry i Třinec — den knyter an till kvällen den 13 oktober förra året. Det blir lovsång och tillbedjan, gemensam bön och profetiska ord. Alla är välkomna, inträdet är fritt och man behöver inte anmäla sig i förväg. Vi ses på Hraniční 213.',
        hu: '2026. szeptember 14-én, hétfőn 18:00-tól újabb prófétai estre hívunk a třineci Sbor Víry gyülekezetbe — a tavalyi, október 13-i est folytatása. Dicséret és imádat, közös imádság és prófétai szavak várnak ránk. Bárki eljöhet, a belépés ingyenes, és előre nem kell jelentkezni. A Hraniční 213. szám alatt találkozunk.'
      }
    },
    {
      date: '2026-06-01',
      // Pravidelná akce: místo data zveřejnění se na kartě ukáže tenhle popisek.
      dateLabel: {
        cs: 'Každé pondělí v 17:30',
        sk: 'Každý pondelok o 17:30',
        pl: 'W każdy poniedziałek o 17:30',
        uk: 'Щопонеділка о 17:30',
        ru: 'Каждый понедельник в 17:30',
        de: 'Jeden Montag um 17:30 Uhr',
        en: 'Every Monday at 17:30',
        es: 'Cada lunes a las 17:30',
        sv: 'Varje måndag kl. 17.30',
        hu: 'Minden hétfőn 17:30-kor'
      },
      // Zástupná karta s logem — používá se u aktualit, ke kterým nemáme fotku.
      image: 'assets/img/logo-karta.jpg',
      link: '',
      tag:   { cs: 'Evangelizace', sk: 'Evanjelizácia', uk: 'Євангелізація', ru: 'Евангелизация', de: 'Evangelisation', pl: 'Ewangelizacja', en: 'Evangelism', es: 'Evangelización', sv: 'Evangelisation', hu: 'Evangelizáció' },
      title: {
        cs: 'Evangelizace v Třinci',
        sk: 'Evanjelizácia v Třinci',
        pl: 'Ewangelizacja w Trzyńcu',
        uk: 'Євангелізація у Тршинці',
        ru: 'Евангелизация в Тршинце',
        de: 'Evangelisation in Třinec',
        en: 'Street evangelism in Třinec',
        es: 'Evangelización en Třinec',
        sv: 'Evangelisation i Třinec',
        hu: 'Evangelizáció Třinecben'
      },
      text: {
        cs: 'Pravidelně se scházíme na třineckém náměstí T. G. Masaryka, kde se sdílíme s lidmi a nabízíme jim modlitbu. Přidat se může kdokoli ze sboru — stačí prostě přijít. Vynecháváme jen tehdy, když vytrvale prší.',
        sk: 'Pravidelne sa stretávame na třineckom námestí T. G. Masaryka, kde sa zdieľame s ľuďmi a ponúkame im modlitbu. Pridať sa môže ktokoľvek zo zboru — stačí jednoducho prísť. Vynechávame len vtedy, keď vytrvalo prší.',
        pl: 'Regularnie spotykamy się na Rynku T. G. Masaryka w Trzyńcu, gdzie dzielimy się z ludźmi i proponujemy im modlitwę. Dołączyć może każdy ze zboru — wystarczy po prostu przyjść. Odpuszczamy tylko wtedy, gdy pada rzęsisty deszcz.',
        uk: 'Ми регулярно збираємося на площі Т. Ґ. Масарика у Тршинці, де ділимося з людьми й пропонуємо їм помолитися. Долучитися може будь-хто з церкви — досить просто прийти. Не виходимо лише тоді, коли ллє дощ.',
        ru: 'Мы регулярно собираемся на площади Т. Г. Масарика в Тршинце, где делимся с людьми и предлагаем им помолиться. Присоединиться может любой из церкви — достаточно просто прийти. Не выходим только тогда, когда льёт дождь.',
        de: 'Wir treffen uns regelmäßig auf dem T.-G.-Masaryk-Platz in Třinec, kommen dort mit Menschen ins Gespräch und bieten an, mit ihnen zu beten. Mitmachen kann jeder aus der Gemeinde — einfach dazukommen. Nur bei anhaltendem Regen fällt es aus.',
        en: 'We meet regularly on T. G. Masaryk Square in Třinec, where we get into conversation with people and offer to pray with them. Anyone from the church is welcome to join — just turn up. We only skip it when it is pouring with rain.',
        es: 'Nos reunimos habitualmente en la plaza T. G. Masaryk de Třinec, donde hablamos con la gente y le ofrecemos orar por ella. Cualquiera de la iglesia puede unirse: basta con venir. Solo lo suspendemos cuando llueve con fuerza.',
        sv: 'Vi träffas regelbundet på T. G. Masaryks torg i Třinec, där vi samtalar med människor och erbjuder dem förbön. Vem som helst i församlingen kan följa med — det räcker att komma. Vi ställer in bara när det regnar ihållande.',
        hu: 'Rendszeresen összegyűlünk a třineci T. G. Masaryk téren, ahol beszélgetünk az emberekkel, és felajánljuk, hogy imádkozunk értük. Bárki csatlakozhat a gyülekezetből — elég egyszerűen eljönni. Csak tartós esőben marad el.'
      }
    },
    {
      date: '2026-05-22',
      image: 'assets/img/tomasz-kmiecik.jpg',
      link: 'https://www.youtube.com/playlist?list=PLeGPPF1P4_e61nY4u_DCHjuFaD2oux-2w',
      tag:   { cs: 'Seminář', sk: 'Seminár', pl: 'Seminarium', uk: 'Семінар', ru: 'Семинар', de: 'Seminar', en: 'Seminar', es: 'Seminario', sv: 'Seminarium', hu: 'Szeminárium' },
      title: {
        cs: 'Seminář o Božím uzdravení v Třinci s Tomaszem Kmiecikem',
        sk: 'Seminár o Božom uzdravení v Třinci s Tomaszom Kmiecikom',
        pl: 'Seminarium o Bożym uzdrowieniu w Trzyńcu z Tomaszem Kmiecikiem',
        uk: 'Семінар про Боже зцілення у Тршинці з Томашем Кмєциком',
        ru: 'Семинар о Божьем исцелении в Тршинце с Томашем Кмециком',
        de: 'Seminar über göttliche Heilung in Třinec mit Tomasz Kmiecik',
        en: 'Divine healing seminar in Třinec with Pastor Tomasz Kmiecik',
        es: 'Seminario sobre la sanidad divina en Třinec con Tomasz Kmiecik',
        sv: 'Seminarium om Guds helande i Třinec med Tomasz Kmiecik',
        hu: 'Szeminárium az isteni gyógyulásról Třinecben Tomasz Kmiecikkel'
      },
      text: {
        cs: 'V pátek 22. a v sobotu 23. května 2026 vedl ve Sboru Víry v Třinci seminář o Božím uzdravení pastor Tomasz Kmiecik ze sboru Kościół Ducha Świętego – Shoreline v Čenstochové; v Česku byl poprvé. V šesti blocích s tlumočením do češtiny mluvil o tom, jak uzdravení přijmout vírou, jaká je v něm Boží vůle a jakou autoritu má věřící. Čtyři úrovně víry doložil vlastním příběhem — jeho novorozená dcera se uzdravila ze sepse, kterou lékaři považovali za beznadějnou. Záznam najdete v našem playlistu na YouTube.',
        sk: 'V piatok 22. a v sobotu 23. mája 2026 viedol v zbore Sbor Víry v Třinci seminár o Božom uzdravení pastor Tomasz Kmiecik zo zboru Kościół Ducha Świętego – Shoreline v Čenstochovej; v Česku bol prvýkrát. V šiestich blokoch s tlmočením do češtiny hovoril o tom, ako uzdravenie prijať vierou, aká je v ňom Božia vôľa a akú autoritu má veriaci. Štyri úrovne viery doložil vlastným príbehom — jeho novonarodená dcéra sa uzdravila zo sepsy, ktorú lekári považovali za beznádejnú. Záznam nájdete v našom playliste na YouTube.',
        pl: 'W piątek 22 i w sobotę 23 maja 2026 r. seminarium o Bożym uzdrowieniu poprowadził w zborze Sbor Víry w Trzyńcu pastor Tomasz Kmiecik z Kościoła Ducha Świętego – Shoreline w Częstochowie; w Czechach był po raz pierwszy. W sześciu sesjach, tłumaczonych na czeski, mówił o tym, jak przyjąć uzdrowienie wiarą, jaka jest w nim Boża wola i jaki autorytet ma wierzący. Cztery poziomy wiary zilustrował własną historią — jego nowo narodzona córka została uzdrowiona z sepsy, którą lekarze uznali za beznadziejną. Nagrania znajdziesz na naszej playliście na YouTube.',
        uk: 'У п’ятницю 22 та в суботу 23 травня 2026 року в церкві Sbor Víry у Тршинці провів семінар про Боже зцілення пастор Томаш Кмєцик із церкви Kościół Ducha Świętego – Shoreline у Ченстохові; у Чехії він був уперше. У шести блоках із перекладом чеською він говорив про те, як прийняти зцілення вірою, яка в ньому Божа воля і яку владу має віруючий. Чотири рівні віри він підтвердив власною історією — його новонароджена донька зцілилася від сепсису, який лікарі вважали безнадійним. Запис ви знайдете в нашому плейлисті на YouTube.',
        ru: 'В пятницу 22 и в субботу 23 мая 2026 года в церкви Sbor Víry в Тршинце провёл семинар о Божьем исцелении пастор Томаш Кмецик из церкви Kościół Ducha Świętego – Shoreline в Ченстохове; в Чехии он был впервые. В шести блоках с переводом на чешский он говорил о том, как принять исцеление верой, какова в нём Божья воля и какую власть имеет верующий. Четыре уровня веры он подтвердил собственной историей — его новорождённая дочь исцелилась от сепсиса, который врачи считали безнадёжным. Запись вы найдёте в нашем плейлисте на YouTube.',
        de: 'Am Freitag, dem 22., und am Samstag, dem 23. Mai 2026, leitete Pastor Tomasz Kmiecik von der Gemeinde Kościół Ducha Świętego – Shoreline in Tschenstochau bei Sbor Víry in Třinec ein Seminar über göttliche Heilung; in Tschechien war er zum ersten Mal. In sechs Einheiten mit Übersetzung ins Tschechische sprach er darüber, wie man Heilung im Glauben annimmt, was Gottes Wille darin ist und welche Vollmacht der Gläubige hat. Vier Stufen des Glaubens belegte er mit seiner eigenen Geschichte — seine neugeborene Tochter wurde von einer Sepsis geheilt, die die Ärzte für aussichtslos hielten. Die Aufzeichnungen finden sich in unserer Playlist auf YouTube.',
        en: 'On Friday 22 and Saturday 23 May 2026 Pastor Tomasz Kmiecik of Kościół Ducha Świętego – Shoreline in Częstochowa, Poland, led a seminar on divine healing at Sbor Víry in Třinec, Czechia; it was his first visit to the country. Over six sessions, interpreted into Czech, he spoke about receiving healing by faith, what God wills in it and what authority the believer has. He illustrated four levels of faith from his own story — his newborn daughter was healed of a sepsis the doctors had given up on. The recordings are in our playlist on YouTube.',
        es: 'El viernes 22 y el sábado 23 de mayo de 2026, el pastor Tomasz Kmiecik, de la iglesia Kościół Ducha Świętego – Shoreline de Częstochowa (Polonia), dirigió en Sbor Víry de Třinec (Chequia) un seminario sobre la sanidad divina; era su primera vez en el país. En seis sesiones, con traducción al checo, habló de cómo recibir la sanidad por fe, cuál es la voluntad de Dios en ello y qué autoridad tiene el creyente. Ilustró cuatro niveles de fe con su propia historia: su hija recién nacida sanó de una sepsis que los médicos daban por perdida. Las grabaciones están en nuestra lista de reproducción de YouTube.',
        sv: 'Fredagen den 22 och lördagen den 23 maj 2026 ledde pastor Tomasz Kmiecik från församlingen Kościół Ducha Świętego – Shoreline i Częstochowa ett seminarium om Guds helande hos Sbor Víry i Třinec; det var hans första besök i Tjeckien. Under sex pass, med tolkning till tjeckiska, talade han om hur man tar emot helande i tro, vad Guds vilja är i det och vilken auktoritet den troende har. Fyra nivåer av tro illustrerade han med sin egen historia — hans nyfödda dotter blev helad från en sepsis som läkarna hade gett upp hoppet om. Inspelningarna finns i vår spellista på YouTube.',
        hu: '2026. május 22-én, pénteken és 23-án, szombaton Tomasz Kmiecik pásztor szemináriumot tartott az isteni gyógyulásról a třineci Sbor Víry gyülekezetben. A lengyelországi Częstochowában szolgál a Kościół Ducha Świętego – Shoreline gyülekezetben, és akkor járt először Csehországban. Hat alkalmon át, cseh tolmácsolással arról beszélt, hogyan fogadjuk el hittel a gyógyulást, mi ebben Isten akarata, és milyen felhatalmazása van a hívőnek. A hit négy szintjét a saját történetével támasztotta alá — újszülött lánya meggyógyult egy szepszisből, amelyet az orvosok reménytelennek tartottak. A felvételek megtalálhatók a YouTube-lejátszási listánkban.'
      }
    },
    {
      date: '2026-05-07',
      image: 'assets/img/rozsvit-tmu.jpg',
      link: 'https://www.rozsvittmu.cz/po-akci.html',
      tag:   { cs: 'Festival', sk: 'Festival', pl: 'Festiwal', uk: 'Фестиваль', ru: 'Фестиваль', de: 'Festival', en: 'Festival', es: 'Festival', sv: 'Festival', hu: 'Fesztivál' },
      title: {
        cs: 'Festival Rozsviť tmu v Třinci — byli jsme u toho',
        sk: 'Festival Rozsviť tmu v Třinci — boli sme pri tom',
        pl: 'Festiwal Rozsviť tmu w Trzyńcu — byliśmy przy tym',
        uk: 'Фестиваль Rozsviť tmu у Тршинці — ми були серед організаторів',
        ru: 'Фестиваль Rozsviť tmu в Тршинце — мы были среди организаторов',
        de: 'Festival Rozsviť tmu in Třinec — wir waren Mitveranstalter',
        en: 'Rozsviť tmu festival in Třinec — we helped put it on',
        es: 'Festival Rozsviť tmu en Třinec: fuimos coorganizadores',
        sv: 'Festivalen Rozsviť tmu i Třinec — vi var med och ordnade den',
        hu: 'Rozsviť tmu fesztivál Třinecben — társszervezők voltunk'
      },
      text: {
        cs: 'Od 7. do 9. května 2026 se na náměstí Svobody v Třinci konal rodinný festival Rozsviť tmu, který jsme připravili společně s dalšími místními církvemi. Hudba, program pro děti, osobní příběhy o novém začátku — a vstup zdarma. Ve stejných dnech festival proběhl v deseti městech po celém Česku: evangelium slyšelo 8 100 lidí a 1 074 z nich se rozhodlo pro Ježíše. Připravuje se další ročník — termín oznámíme tady a na Facebooku.',
        sk: 'Od 7. do 9. mája 2026 sa na námestí Svobody v Třinci konal rodinný festival Rozsviť tmu, ktorý sme pripravili spoločne s ďalšími miestnymi cirkvami. Hudba, program pre deti, osobné príbehy o novom začiatku — a vstup zadarmo. V rovnakých dňoch festival prebehol v desiatich mestách po celom Česku: evanjelium počulo 8 100 ľudí a 1 074 z nich sa rozhodlo pre Ježiša. Pripravuje sa ďalší ročník — termín oznámime tu a na Facebooku.',
        pl: 'Od 7 do 9 maja 2026 r. na placu Svobody w Trzyńcu odbywał się rodzinny festiwal Rozsviť tmu, który przygotowaliśmy wspólnie z innymi miejscowymi kościołami. Muzyka, program dla dzieci, osobiste historie o nowym początku — i wstęp wolny. W tych samych dniach festiwal odbył się w dziesięciu miastach w całych Czechach: ewangelię usłyszało 8 100 osób, a 1 074 osoby zdecydowały się pójść za Jezusem. Przygotowywana jest kolejna edycja — termin podamy tutaj i na Facebooku.',
        uk: 'Із 7 до 9 травня 2026 року на площі Свободи у Тршинці тривав сімейний фестиваль Rozsviť tmu, який ми підготували разом з іншими місцевими церквами. Музика, програма для дітей, особисті історії про новий початок — і безкоштовний вхід. Того самого тижня фестиваль пройшов у десяти містах по всій Чехії: євангеліє почули 8 100 людей і 1 074 з них вирішили піти за Ісусом. Готується наступний рік — дату повідомимо тут і на Facebook.',
        ru: 'С 7 по 9 мая 2026 года на площади Свободы в Тршинце проходил семейный фестиваль Rozsviť tmu, который мы подготовили вместе с другими местными церквями. Музыка, программа для детей, личные истории о новом начале — и бесплатный вход. В те же дни фестиваль прошёл в десяти городах по всей Чехии: евангелие услышали 8 100 человек и 1 074 из них решили следовать за Иисусом. Готовится следующий год — дату сообщим здесь и в Facebook.',
        de: 'Vom 7. bis 9. Mai 2026 fand auf dem Svobody-Platz in Třinec das Familienfestival Rozsviť tmu statt, das wir gemeinsam mit weiteren örtlichen Kirchen vorbereitet haben. Musik, ein Programm für Kinder, persönliche Geschichten über einen Neuanfang — bei freiem Eintritt. Zur gleichen Zeit lief das Festival in zehn Städten in ganz Tschechien: 8.100 Menschen hörten das Evangelium und 1.074 von ihnen entschieden sich für Jesus. Die nächste Ausgabe ist in Vorbereitung — den Termin geben wir hier und auf Facebook bekannt.',
        en: 'From 7 to 9 May 2026 the Rozsviť tmu family festival took place on Svobody Square in Třinec. We prepared it together with other local churches. Music, a programme for children, people telling their own stories of a fresh start — with free admission. Over the same days the festival ran in ten towns across Czechia: 8,100 people heard the gospel and 1,074 of them made a decision for Jesus. Another edition is being prepared — we will announce the date here and on Facebook.',
        es: 'Del 7 al 9 de mayo de 2026 se celebró en la plaza Svobody de Třinec el festival familiar Rozsviť tmu, que preparamos junto con otras iglesias locales. Música, programa para los niños e historias personales sobre un nuevo comienzo, con entrada libre. Esos mismos días el festival se celebró en diez ciudades de toda Chequia: 8100 personas escucharon el evangelio y 1074 de ellas decidieron seguir a Jesús. Ya se prepara la próxima edición: anunciaremos la fecha aquí y en Facebook.',
        sv: 'Den 7–9 maj 2026 hölls familjefestivalen Rozsviť tmu på torget Svobody i Třinec. Vi förberedde den tillsammans med andra lokala kyrkor. Musik, program för barnen och människor som berättade sina egna historier om en ny start — med fri entré. Samma dagar hölls festivalen i tio städer runt om i Tjeckien: 8 100 människor fick höra evangeliet och 1 074 av dem tog emot Jesus. Nästa upplaga förbereds — datumet berättar vi här och på Facebook.',
        hu: '2026. május 7. és 9. között rendezték meg a třineci Svobody téren a Rozsviť tmu családi fesztivált, amelyet más helyi egyházakkal közösen készítettünk elő. Zene, gyerekprogram és személyes történetek az újrakezdésről — ingyenes belépéssel. Ugyanezekben a napokban a fesztivál Csehország tíz városában zajlott: 8100 ember hallotta az evangéliumot, közülük 1074-en döntöttek Jézus mellett. Készül a következő fesztivál is — az időpontot itt és a Facebookon jelezzük.'
      }
    },
    {
      // Zařazeno na konec záměrně: aktuality se vypisují v tom pořadí, v jakém
      // jsou zapsané, a tahle je starší než obě položky nad ní.
      date: '2025-10-13',
      image: 'assets/img/prorocka-sluzba-2025.jpg',
      link: '',    // až bude znám odkaz na záznam: URL videa na YouTube
      tag:   { cs: 'Návštěva', sk: 'Návšteva', pl: 'Wizyta', uk: 'Візит', ru: 'Визит', de: 'Besuch', en: 'Visit', es: 'Visita', sv: 'Besök', hu: 'Látogatás' },
      title: {
        cs: 'Prorocký večer v Třinci s hosty ze Spojených států',
        sk: 'Prorocký večer v Třinci s hosťami zo Spojených štátov',
        pl: 'Wieczór proroczy w Trzyńcu z gośćmi ze Stanów Zjednoczonych',
        uk: 'Пророчий вечір у Тршинці з гостями зі Сполучених Штатів',
        ru: 'Пророческий вечер в Тршинце с гостями из Соединённых Штатов',
        de: 'Prophetischer Abend in Třinec mit Gästen aus den USA',
        en: 'A prophetic evening in Třinec with guests from the United States',
        es: 'Velada profética en Třinec con invitadas de Estados Unidos',
        sv: 'En profetisk kväll i Třinec med gäster från USA',
        hu: 'Prófétai est Třinecben amerikai vendégekkel'
      },
      text: {
        cs: 'V pondělí 13. října 2025 přivedla Hana D. do Sboru Víry v Třinci prorockou službu ze Spojených států — Raquel O. z Fearless Rock Ministries, Keyon B. z Kingdom Builders Ministries a Stephanie z Emerging Prophets. Po chválách následovalo vyučování o naší identitě v Kristu a společné pokání z pocitu nehodnosti a z nevíry. Večer uzavřely modlitby a prorocká slova pro sbor, pro chválící skupinu i pro vedoucí.',
        sk: 'V pondelok 13. októbra 2025 priviedla Hana D. do zboru Sbor Víry v Třinci prorockú službu zo Spojených štátov — Raquel O. z Fearless Rock Ministries, Keyon B. z Kingdom Builders Ministries a Stephanie z Emerging Prophets. Po chválach nasledovalo vyučovanie o našej identite v Kristovi a spoločné pokánie z pocitu nehodnosti a z nevery. Večer uzavreli modlitby a prorocké slová pre zbor, pre chváliacu skupinu aj pre vedúcich.',
        pl: 'W poniedziałek 13 października 2025 r. Hana D. przywiozła do zboru Sbor Víry w Trzyńcu służbę proroczą ze Stanów Zjednoczonych — Raquel O. z Fearless Rock Ministries, Keyon B. z Kingdom Builders Ministries i Stephanie z Emerging Prophets. Po uwielbieniu nastąpiło nauczanie o naszej tożsamości w Chrystusie, a potem wspólnie odrzuciliśmy w pokucie poczucie własnej niegodności i niewiarę. Wieczór zamknęły modlitwy i prorocze słowa dla zboru, dla zespołu uwielbienia i dla liderów.',
        uk: 'У понеділок 13 жовтня 2025 року Гана Д. привезла до церкви Sbor Víry у Тршинці пророче служіння зі Сполучених Штатів — Ракель О. з Fearless Rock Ministries, Кейон Б. з Kingdom Builders Ministries і Стефані з Emerging Prophets. Після прославлення було навчання про нашу ідентичність у Христі та спільне покаяння у відчутті власної негідності й у невірі. Вечір завершили молитви та пророчі слова для церкви, для групи прославлення і для служителів.',
        ru: 'В понедельник 13 октября 2025 года Гана Д. привезла в церковь Sbor Víry в Тршинце пророческое служение из Соединённых Штатов — Ракель О. из Fearless Rock Ministries, Кейон Б. из Kingdom Builders Ministries и Стефани из Emerging Prophets. После прославления было учение о нашей идентичности во Христе и общее покаяние в чувстве собственного недостоинства и в неверии. Вечер завершили молитвы и пророческие слова для церкви, для группы прославления и для служителей.',
        de: 'Am Montag, dem 13. Oktober 2025, war ein prophetisches Team aus den USA bei der Gemeinde Sbor Víry in Třinec zu Gast — Raquel O. von Fearless Rock Ministries, Keyon B. von Kingdom Builders Ministries und Stephanie von Emerging Prophets, die Hana D. zu uns gebracht hatte. Auf den Lobpreis folgten eine Lehre über unsere Identität in Christus und gemeinsame Buße über das Gefühl, nicht gut genug zu sein, und über den Unglauben. Den Abschluss bildeten Gebet und prophetische Worte für die Gemeinde, für das Lobpreisteam und für die Leiter.',
        en: 'On Monday 13 October 2025 Hana D. brought a prophetic team from the United States to Sbor Víry in Třinec, Czechia — Raquel O. of Fearless Rock Ministries, Keyon B. of Kingdom Builders Ministries and Stephanie of Emerging Prophets. Worship was followed by teaching on our identity in Christ and by shared repentance from feeling unworthy and from unbelief. The evening closed with prayer and prophetic words for the church, for the worship team and for our leaders.',
        es: 'El lunes 13 de octubre de 2025, Hana D. llevó a la iglesia Sbor Víry de Třinec (Chequia) un equipo profético de Estados Unidos: Raquel O., de Fearless Rock Ministries; Keyon B., de Kingdom Builders Ministries; y Stephanie, de Emerging Prophets. Tras la alabanza vino una enseñanza sobre nuestra identidad en Cristo y un arrepentimiento compartido del sentimiento de indignidad y de la incredulidad. La velada se cerró con oración y palabras proféticas para la iglesia, para el grupo de alabanza y para nuestros líderes.',
        sv: 'Måndagen den 13 oktober 2025 tog församlingen Sbor Víry i Třinec emot ett profetiskt team från USA — Raquel O. från Fearless Rock Ministries, Keyon B. från Kingdom Builders Ministries och Stephanie från Emerging Prophets, som Hana D. hade tagit med sig. Efter lovsången kom undervisning om vår identitet i Kristus och gemensam omvändelse från känslan av att inte duga och från otron. Kvällen avslutades med bön och profetiska ord för församlingen, för lovsångsteamet och för ledarna.',
        hu: '2025. október 13-án, hétfőn a třineci Sbor Víry gyülekezet az Egyesült Államokból érkezett prófétai csapatot látott vendégül: Raquel O.-t (Fearless Rock Ministries), Keyon B.-t (Kingdom Builders Ministries) és Stephanie-t (Emerging Prophets), akiket Hana D. hozott el hozzánk. A dicséret után tanítás következett a Krisztusban való identitásunkról, majd közösen bűnbánatot tartottunk a méltatlanság érzése és a hitetlenség miatt. Az estét imádság és a gyülekezetért, a dicsőítő csapatért és a vezetőkért elhangzott prófétai szavak zárták.'
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
