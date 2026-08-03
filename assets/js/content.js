/* ============================================================================
   SBOR VÍRY — DATA, KTERÁ SE MĚNÍ NEJČASTĚJI
   ----------------------------------------------------------------------------
   Tady upravujte: kontakty, časy setkání, aktuality, videa, čísla účtu.
   Texty ve 4 jazycích se zapisují jako { cs:"…", pl:"…", en:"…", es:"…" }.
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

  // ID YouTube kanálu @sborviry — použije se pro vložený přehrávač.
  youtubeChannelId: 'UCjtt9_ez5UzekptGN_88xhA',

  // Rok založení sboru (uvádí se ve strukturovaných datech pro vyhledávače)
  founded: '2002',

  /* ------------------------------------------------------------------
     3) ČASY SETKÁNÍ
     ------------------------------------------------------------------ */
  times: [
    {
      when:  { cs: 'Neděle 11:00', pl: 'Niedziela 11:00', en: 'Sunday 11:00', es: 'Domingo 11:00' },
      what:  { cs: 'Nedělní bohoslužba', pl: 'Nabożeństwo niedzielne', en: 'Sunday service', es: 'Culto dominical' },
      where: { cs: 'Hraniční 213, Třinec', pl: 'Hraniční 213, Trzyniec', en: 'Hraniční 213, Třinec', es: 'Hraniční 213, Třinec' }
    },
    {
      when:  { cs: 'Pondělí 17:30', pl: 'Poniedziałek 17:30', en: 'Monday 17:30', es: 'Lunes 17:30' },
      what:  { cs: 'Evangelizace v centru města', pl: 'Ewangelizacja w centrum miasta', en: 'Evangelism in the town centre', es: 'Evangelización en el centro' },
      where: { cs: 'nám. T. G. Masaryka, Třinec', pl: 'Rynek T. G. Masaryka, Trzyniec', en: 'T. G. Masaryk Square, Třinec', es: 'Plaza T. G. Masaryk, Třinec' }
    },
    {
      // TODO doplnit konkrétní den a čas modlitebního setkání
      when:  { cs: 'Termín upřesníme', pl: 'Termin podamy wkrótce', en: 'Date to be confirmed', es: 'Fecha por confirmar' },
      what:  { cs: 'Modlitební setkání', pl: 'Spotkanie modlitewne', en: 'Prayer meeting', es: 'Reunión de oración' },
      where: { cs: 'Hraniční 213, Třinec', pl: 'Hraniční 213, Trzyniec', en: 'Hraniční 213, Třinec', es: 'Hraniční 213, Třinec' }
    }
  ],

  /* ------------------------------------------------------------------
     4) FOTOGALERIE na úvodní stránce
     Vložte soubory do assets/img/ a dopište je sem. Prázdný seznam =
     celá sekce se na webu vůbec nezobrazí.
     ------------------------------------------------------------------ */
  gallery: [
    { src: 'assets/img/galerie-1.jpg',  alt: { cs: 'Chvály při nedělní bohoslužbě', pl: 'Uwielbienie podczas nabożeństwa niedzielnego', en: 'Worship during the Sunday service', es: 'Alabanza durante el culto dominical' } },
    { src: 'assets/img/galerie-2.jpg',  alt: { cs: 'Vyučování u flipchartu', pl: 'Nauczanie przy flipcharcie', en: 'Teaching at the flipchart', es: 'Enseñanza junto al rotafolio' } },
    { src: 'assets/img/galerie-3.jpg',  alt: { cs: 'Kytarista během chval', pl: 'Gitarzysta podczas uwielbienia', en: 'A guitarist during worship', es: 'Un guitarrista durante la alabanza' } },
    { src: 'assets/img/galerie-4.jpg',  alt: { cs: 'Rozhovor na pódiu při bohoslužbě', pl: 'Rozmowa na scenie podczas nabożeństwa', en: 'A conversation on the platform during the service', es: 'Una conversación en la plataforma durante el culto' } },
    { src: 'assets/img/galerie-5.jpg',  alt: { cs: 'Sdílení na bohoslužbě', pl: 'Świadectwo podczas nabożeństwa', en: 'Sharing during the service', es: 'Un testimonio durante el culto' } },
    { src: 'assets/img/galerie-6.jpg',  alt: { cs: 'Baskytarista v kapele', pl: 'Basista w zespole', en: 'The bass player in the band', es: 'El bajista de la banda' } },
    { src: 'assets/img/galerie-7.jpg',  alt: { cs: 'Host mluví k lidem ve sboru', pl: 'Gość mówi do zboru', en: 'A guest speaking to the church', es: 'Un invitado hablando a la iglesia' } },
    { src: 'assets/img/galerie-8.jpg',  alt: { cs: 'Záznam bohoslužby na telefon', pl: 'Nagrywanie nabożeństwa telefonem', en: 'Filming the service on a phone', es: 'Grabando el culto con el móvil' } },
    { src: 'assets/img/galerie-9.jpg',  alt: { cs: 'Dva řečníci s mikrofony', pl: 'Dwaj mówcy z mikrofonami', en: 'Two speakers with microphones', es: 'Dos oradores con micrófonos' } },
    { src: 'assets/img/galerie-10.jpg', alt: { cs: 'Hudebník na pódiu', pl: 'Muzyk na scenie', en: 'A musician on the platform', es: 'Un músico en la plataforma' } },
    { src: 'assets/img/galerie-11.jpg', alt: { cs: 'Rozhovor u pití po bohoslužbě', pl: 'Rozmowa przy napoju po nabożeństwie', en: 'Conversation over a drink after the service', es: 'Conversación con una bebida después del culto' } },
    { src: 'assets/img/galerie-12.jpg', alt: { cs: 'Poděkování při bohoslužbě', pl: 'Podziękowanie podczas nabożeństwa', en: 'A thank-you during the service', es: 'Un agradecimiento durante el culto' } }
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
      tag:   { cs: 'Konference', pl: 'Konferencja', en: 'Conference', es: 'Conferencia' },
      title: {
        cs: 'Podzimní konference 2026',
        pl: 'Konferencja jesienna 2026',
        en: 'Autumn Conference 2026',
        es: 'Conferencia de otoño 2026'
      },
      text: {
        cs: 'Připravujeme společné dny vyučování, chval a modliteb. Program, hosty a přesné termíny zveřejníme na Facebooku a na tomto místě.',
        pl: 'Przygotowujemy wspólne dni nauczania, uwielbienia i modlitwy. Program, gości oraz dokładne terminy ogłosimy na Facebooku i w tym miejscu.',
        en: 'We are preparing several days of teaching, worship and prayer together. The programme, guests and exact dates will be announced on Facebook and here.',
        es: 'Estamos preparando varios días de enseñanza, alabanza y oración. El programa, los invitados y las fechas exactas se anunciarán en Facebook y aquí.'
      }
    },
    {
      date: '2026-06-01',
      image: '',
      link: '',
      tag:   { cs: 'Evangelizace', pl: 'Ewangelizacja', en: 'Evangelism', es: 'Evangelización' },
      title: {
        cs: 'Každé pondělí na náměstí',
        pl: 'W każdy poniedziałek na rynku',
        en: 'On the square every Monday',
        es: 'Cada lunes en la plaza'
      },
      text: {
        cs: 'Scházíme se na náměstí T. G. Masaryka v Třinci, mluvíme s lidmi a nabízíme modlitbu. Přidat se může kdokoli ze sboru — stačí přijít.',
        pl: 'Spotykamy się na Rynku T. G. Masaryka w Trzyńcu, rozmawiamy z ludźmi i proponujemy modlitwę. Dołączyć może każdy ze zboru — wystarczy przyjść.',
        en: 'We meet on T. G. Masaryk Square in Třinec, talk with people and offer to pray with them. Anyone from the church is welcome to join — just turn up.',
        es: 'Nos reunimos en la plaza T. G. Masaryk de Třinec, hablamos con la gente y ofrecemos orar con ellos. Cualquiera de la iglesia puede unirse: basta con venir.'
      }
    },
    {
      date: '2026-04-20',
      image: '',
      link: 'https://www.youtube.com/@sborviry',
      tag:   { cs: 'Vyučování', pl: 'Nauczanie', en: 'Teaching', es: 'Enseñanza' },
      title: {
        cs: 'Nová série kázání je na YouTube',
        pl: 'Nowa seria kazań jest na YouTube',
        en: 'A new sermon series is on YouTube',
        es: 'Nueva serie de predicaciones en YouTube'
      },
      text: {
        cs: 'Všechna kázání postupně zveřejňujeme na našem kanálu. Můžete si je pustit kdykoli — doma, v autě i cestou do práce.',
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
