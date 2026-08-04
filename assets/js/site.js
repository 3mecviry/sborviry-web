/* ============================================================================
   SBOR VÍRY — logika webu
   ----------------------------------------------------------------------------
   Běžnou úpravu obsahu tady dělat nemusíte.
   Texty upravujte v assets/js/i18n.js, údaje v assets/js/content.js.
   ========================================================================== */
(function () {
  'use strict';

  // Pořadí určuje i pořadí v přepínači jazyků v hlavičce.
  const LANGS = ['cs', 'sk', 'pl', 'uk', 'ru', 'de', 'en', 'es'];
  const DEFAULT_LANG = 'cs';
  const STORE_KEY = 'sborviry-lang';

  // Formát data pro výpis u aktualit
  const DATE_LOCALE = {
    cs: 'cs-CZ', sk: 'sk-SK', pl: 'pl-PL', uk: 'uk-UA',
    ru: 'ru-RU', de: 'de-DE', en: 'en-GB', es: 'es-ES'
  };

  /* ---------------------------------------------------------------- jazyk */
  function detectLang() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl && LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem(STORE_KEY);
      if (saved && LANGS.includes(saved)) return saved;
    } catch (e) { /* localStorage nemusí být dostupné */ }
    // Projdeme všechny jazyky nastavené v prohlížeči, ne jen ten první.
    const prefs = (navigator.languages && navigator.languages.length)
      ? navigator.languages : [navigator.language || ''];
    for (const p of prefs) {
      const code = String(p).slice(0, 2).toLowerCase();
      if (LANGS.includes(code)) return code;
      if (code === 'be') return 'uk';   // běloruština → nejbližší dostupná
      if (code === 'at' || code === 'ch') return 'de';
    }
    return DEFAULT_LANG;
  }

  let LANG = detectLang();

  /** Vrátí text podle klíče typu "home.hero.h1". */
  function t(path) {
    const walk = (obj) => path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
    const v = walk(I18N[LANG]);
    if (v !== undefined && v !== null && v !== '') return v;
    const fb = walk(I18N[DEFAULT_LANG]);
    return fb === undefined || fb === null ? '' : fb;
  }

  /** Vrátí lokalizovanou hodnotu z content.js: { cs:"…", pl:"…" } */
  function loc(field) {
    if (field == null) return '';
    if (typeof field === 'string') return field;
    return field[LANG] || field[DEFAULT_LANG] || '';
  }

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------------------------------------------------------------- ikony */
  const ICON = {
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.9-.5-5.7c-.3-1-1.1-1.8-2.1-2.1C18.6 3.7 12 3.7 12 3.7s-6.6 0-8.4.5c-1 .3-1.8 1.1-2.1 2.1C1 8.1 1 12 1 12s0 3.9.5 5.7c.3 1 1.1 1.8 2.1 2.1 1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5c1-.3 1.8-1.1 2.1-2.1.5-1.8.5-5.7.5-5.7zM9.9 15.4V8.6l5.6 3.4-5.6 3.4z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.79 8.43-4.94 8.43-9.94z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 7 8.2 5.7a1.5 1.5 0 0 0 1.6 0L21 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10.3c0 5.4-8 12-8 12s-8-6.6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10.2" r="2.8"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 16.9v2.8a1.9 1.9 0 0 1-2.1 1.9 18.8 18.8 0 0 1-8.2-2.9 18.5 18.5 0 0 1-5.7-5.7A18.8 18.8 0 0 1 2.6 4.7 1.9 1.9 0 0 1 4.5 2.6h2.8a1.9 1.9 0 0 1 1.9 1.6c.1 1 .4 1.9.7 2.8a1.9 1.9 0 0 1-.4 2l-1.2 1.2a15 15 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.9.3 1.8.6 2.8.7a1.9 1.9 0 0 1 1.5 2Z"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
    hands: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 11V4.5a1.5 1.5 0 0 1 3 0V11"/><path d="M14 10V3.5a1.5 1.5 0 0 1 3 0V13"/><path d="M8 11.5V7a1.5 1.5 0 0 0-3 0v7.5a7 7 0 0 0 7 7h1.5a7 7 0 0 0 7-7V9a1.5 1.5 0 0 0-3 0"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 5.6a5.4 5.4 0 0 0-7.7 0L12 6.7l-1.1-1.1a5.4 5.4 0 0 0-7.7 7.7l1.1 1.1L12 22l7.7-7.6 1.1-1.1a5.4 5.4 0 0 0 0-7.7Z"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 22V12h6v10"/></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
    smile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M8 14.5s1.5 2 4 2 4-2 4-2"/><path d="M9 9.5h.01M15 9.5h.01"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5 14.2 9l6.5 2.2-6.5 2.2L12 20l-2.2-6.6L3.3 11.2 9.8 9Z"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
    id: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M7 15c.6-1.6 2-2.5 3.5-2.5S13.4 13.4 14 15"/><circle cx="10.5" cy="9.5" r="1.8"/><path d="M17 9.5h2M17 12.5h2"/></svg>'
  };

  /* --------------------------------------------------------- odkazy stránek */
  const PAGES = [
    { key: 'home',       file: 'index.html' },
    { key: 'about',      file: 'o-nas.html' },
    { key: 'first',      file: 'jsem-tu-poprve.html' },
    { key: 'sermons',    file: 'kazani.html' },
    { key: 'news',       file: 'aktuality.html' },
    { key: 'ministries', file: 'co-u-nas-najdete.html' },
    { key: 'give',       file: 'podporte-nas.html' },
    { key: 'contact',    file: 'kontakt.html' }
  ];
  // Odkazy v hlavní navigaci (ostatní jsou dostupné z patičky a z obsahu)
  const NAV_KEYS = ['about', 'first', 'sermons', 'ministries', 'news', 'contact'];

  const href = (key) => {
    const p = PAGES.find((x) => x.key === key);
    return (p ? p.file : 'index.html') + (LANG === DEFAULT_LANG ? '' : '?lang=' + LANG);
  };

  const PAGE = document.body.dataset.page || 'home';

  /* ------------------------------------------------------------- hlavička */
  function renderHeader() {
    const host = $('#site-header');
    if (!host) return;
    const nav = NAV_KEYS.map((k) =>
      `<a href="${href(k)}"${k === PAGE ? ' aria-current="page"' : ''}>${esc(t('nav.' + k))}</a>`
    ).join('');

    const langItems = LANGS.map((l) =>
      `<button type="button" data-set-lang="${l}" role="option" aria-selected="${l === LANG}">
         <i>${l.toUpperCase()}</i><span>${esc(I18N[l].langName)}</span>
       </button>`
    ).join('');

    host.innerHTML = `
      <header class="header" id="hdr">
        <div class="wrap header-inner">
          <a class="brand" href="${href('home')}" aria-label="Sbor Víry — Třinec">
            <img src="assets/img/logo.png" alt="Sbor Víry" width="78" height="52">
            <span class="brand-city">Třinec</span>
          </a>
          <nav class="nav" id="mainnav" aria-label="${esc(t('ui.menu'))}">${nav}</nav>
          <div class="header-actions">
            <div class="lang" id="langpick">
              <button class="lang-btn" type="button" aria-haspopup="listbox" aria-expanded="false"
                      aria-label="${esc(t('ui.language'))}">${LANG.toUpperCase()} ${ICON.chevron}</button>
              <div class="lang-menu" role="listbox" aria-label="${esc(t('ui.language'))}">${langItems}</div>
            </div>
            <a class="btn btn-primary btn-sm header-cta" href="${href('first')}">${esc(t('nav.first'))}</a>
            <button class="burger" type="button" aria-label="${esc(t('ui.menu'))}" aria-expanded="false"
                    aria-controls="mainnav"><span></span></button>
          </div>
        </div>
      </header>`;

    // Vejde se menu vedle sebe? Délka názvů se mezi jazyky liší, proto se to měří.
    fitNav();
    // Před načtením webového písma je text širší než ve výsledku — kdybychom
    // měřili jen jednou, menu by se na širokých displejích zbytečně sbalilo.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitNav).catch(() => {});
    if (!renderHeader._resize) {
      renderHeader._resize = true;
      let tid;
      window.addEventListener('resize', () => { clearTimeout(tid); tid = setTimeout(fitNav, 120); });
      window.addEventListener('load', fitNav);
    }

    // scroll efekt
    const hdr = $('#hdr');
    const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // mobilní menu
    const burger = $('.burger', host);
    burger.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    $$('#mainnav a', host).forEach((a) => a.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
    }));

    // přepínač jazyků
    const pick = $('#langpick', host);
    const btn = $('.lang-btn', pick);
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = pick.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', () => {
      pick.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
    $$('[data-set-lang]', pick).forEach((b) =>
      b.addEventListener('click', () => setLang(b.dataset.setLang))
    );
  }

  /* Rozhodne, jestli se hlavní menu vejde vedle loga, nebo se má schovat
     pod tlačítko. Nutné proto, že polské a španělské názvy jsou výrazně
     delší než české — pevná hranice v CSS by pro některý jazyk nesedla. */
  function fitNav() {
    const hdr = $('#hdr'), inner = $('.header-inner', hdr || document);
    if (!hdr || !inner) return;

    if (window.innerWidth < 900) {            // na mobilu vždy tlačítko
      document.body.classList.add('nav-compact');
      hdr.classList.remove('measuring');
      return;
    }
    hdr.classList.add('measuring');           // po dobu měření skryjeme menu
    document.body.classList.remove('nav-compact', 'menu-open');

    const nextFrame = window.requestAnimationFrame || ((fn) => setTimeout(fn, 16));
    nextFrame(() => {
      // Kontrolují se dvě věci: jestli nepřetéká celá hlavička a jestli se
      // nezúžilo samotné menu (to by se jinak schovalo za svůj vlastní okraj).
      const nav = $('#mainnav', hdr);
      const fits = inner.scrollWidth <= inner.clientWidth + 1 &&
                   (!nav || nav.scrollWidth <= nav.clientWidth + 1);
      document.body.classList.toggle('nav-compact', !fits);
      hdr.classList.remove('measuring');
      const b = $('.burger', hdr);
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }

  /* -------------------------------------------------------------- patička */
  function renderFooter() {
    const host = $('#site-footer');
    if (!host) return;
    const c = DATA.contact, s = DATA.social;

    const col = (keys) => keys.map((k) => `<li><a href="${href(k)}">${esc(t('nav.' + k))}</a></li>`).join('');

    host.innerHTML = `
      <footer class="footer">
        <div class="wrap">
          <div class="footer-grid">
            <div>
              <a class="brand" href="${href('home')}" aria-label="Sbor Víry">
                <img src="assets/img/logo-light.png" alt="Sbor Víry" width="96" height="64">
              </a>
              <p class="footer-note">${esc(t('footer.tagline'))}</p>
              <div class="socials" style="margin-top:1.5rem">
                <a href="${esc(s.youtube)}" target="_blank" rel="noopener" aria-label="YouTube">${ICON.youtube}</a>
                <a href="${esc(s.facebook)}" target="_blank" rel="noopener" aria-label="Facebook">${ICON.facebook}</a>
                <a href="${esc(s.instagram)}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.instagram}</a>
              </div>
            </div>
            <div>
              <h4>${esc(t('footer.explore'))}</h4>
              <ul>${col(['home', 'about', 'first', 'sermons'])}</ul>
            </div>
            <div>
              <h4>${esc(t('footer.connect'))}</h4>
              <ul>
                ${col(['news', 'ministries', 'give', 'contact'])}
              </ul>
            </div>
            <div>
              <h4>${esc(t('footer.visit'))}</h4>
              <ul>
                <li>${esc(c.venue)}</li>
                <li><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>
                ${c.phone ? `<li><a href="tel:${esc(c.phone.replace(/\s/g, ''))}">${esc(c.phone)}</a></li>` : ''}
                <li style="margin-top:.5rem"><a class="link-arrow" href="${href('contact')}">${esc(t('cta.directions'))}</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© ${new Date().getFullYear()} ${esc(c.orgName)} · IČO ${esc(c.ico)} · ${esc(t('footer.rights'))}</span>
            <a href="ochrana-osobnich-udaju.html${LANG === DEFAULT_LANG ? '' : '?lang=' + LANG}">${esc(t('footer.privacy'))}</a>
          </div>
        </div>
      </footer>`;
  }

  /* ------------------------------------------------- překlady v HTML kódu */
  function applyStaticText() {
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(',').forEach((pair) => {
        const [attr, key] = pair.split(':').map((x) => x.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
    // interní odkazy s data-page-link
    $$('[data-page-link]').forEach((a) => { a.href = href(a.dataset.pageLink); });

    // hlavička dokumentu
    document.documentElement.lang = LANG;
    const title = t('meta.' + PAGE + '.title');
    if (title) document.title = title;
    const desc = t('meta.' + PAGE + '.desc');
    let m = $('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m); }
    m.content = desc || '';
  }

  /* ------------------------------------------------------- dynamické bloky */
  function renderTimes() {
    const host = $('#times');
    if (!host) return;
    host.innerHTML = DATA.times.map((r) => `
      <div class="time-row">
        <span class="when">${esc(loc(r.when))}</span>
        <span class="what">${esc(loc(r.what))}</span>
        <span class="where">${esc(loc(r.where))}</span>
      </div>`).join('');
  }

  /* Tři údaje pod úvodním textem — berou se z content.js, aby se překládaly. */
  function renderHeroMeta() {
    const first = (DATA.times || [])[0];
    const set = (id, val) => { const el = $('#' + id); if (el) el.textContent = val; };
    if (first) {
      set('hero-time', loc(first.when));
      set('hero-place', loc(first.where));
    }
    const yt = (DATA.social.youtube || '').replace(/^https?:\/\/(www\.)?youtube\.com\//, '');
    set('hero-online', yt ? 'YouTube ' + yt : '');
  }

  function formatDate(iso) {
    try {
      return new Date(iso + 'T00:00:00').toLocaleDateString(DATE_LOCALE[LANG] || 'cs-CZ',
        { day: 'numeric', month: 'long', year: 'numeric' });
    } catch (e) { return iso; }
  }

  function newsCard(item) {
    const media = item.image
      ? `<img src="${esc(item.image)}" alt="${esc(loc(item.title))}" loading="lazy">`
      : `<div class="ph">${esc(t('ui.photoPlaceholder'))}</div>`;
    const inner = `
      <div class="media ratio-16-9">${media}</div>
      <div>
        <span class="post-date">${esc(formatDate(item.date))}</span>
        ${item.tag ? ` &middot; <span class="tag">${esc(loc(item.tag))}</span>` : ''}
      </div>
      <h3>${esc(loc(item.title))}</h3>
      <p class="muted">${esc(loc(item.text))}</p>
      ${item.link ? `<span class="link-arrow">${esc(t('news.readMore'))}</span>` : ''}`;
    return item.link
      ? `<a class="post" href="${esc(item.link)}" target="_blank" rel="noopener">${inner}</a>`
      : `<article class="post">${inner}</article>`;
  }

  function renderNews() {
    const grids = $$('[data-news]');
    if (!grids.length) return;
    grids.forEach((g) => {
      const limit = parseInt(g.dataset.news, 10);
      const items = (DATA.news || []).slice(0, isNaN(limit) ? undefined : limit);
      g.innerHTML = items.length
        ? items.map(newsCard).join('')
        : `<p class="muted">${esc(t('news.empty'))}</p>`;
    });
  }

  function renderYouTube() {
    const host = $('#yt');
    if (!host) return;
    const vid = (DATA.youtubeVideoId || '').trim();
    const playlist = (DATA.youtubePlaylistId || '').trim();

    // Video se nenačítá hned — nejdřív se ukáže náhled a teprve po kliknutí
    // se vloží přehrávač. Stránka se tím načte rychleji a YouTube do té doby
    // o návštěvníkovi nic neví.
    if (vid || playlist) {
      // Je-li vyplněné video i playlist, přehraje se video a divák pak
      // plynule pokračuje dalšími kázáními ze stejného playlistu.
      const src = vid
        ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(vid)}?rel=0&autoplay=1`
          + (playlist ? `&list=${encodeURIComponent(playlist)}` : '')
        : `https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(playlist)}&rel=0&autoplay=1`;
      const thumb = vid ? `https://i.ytimg.com/vi/${encodeURIComponent(vid)}/maxresdefault.jpg` : '';

      host.innerHTML = `
        <button class="media ratio-16-9 yt-facade" type="button" aria-label="${esc(t('sermons.playBtn'))}">
          ${thumb ? `<img src="${esc(thumb)}" alt="" loading="lazy"
                          onerror="this.src='https://i.ytimg.com/vi/${esc(vid)}/hqdefault.jpg'">` : ''}
          <span class="yt-play" aria-hidden="true">
            <svg viewBox="0 0 68 48"><path d="M66.5 7.7a8.6 8.6 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.7a8.6 8.6 0 0 0-6 6A90 90 0 0 0 0 24a90 90 0 0 0 1.5 16.3 8.6 8.6 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.7a8.6 8.6 0 0 0 6-6A90 90 0 0 0 68 24a90 90 0 0 0-1.5-16.3z" fill="#f00"/><path d="M27 34l17.5-10L27 14z" fill="#fff"/></svg>
          </span>
        </button>`;

      $('.yt-facade', host).addEventListener('click', function () {
        this.outerHTML = `<div class="media ratio-16-9">
          <iframe src="${esc(src)}" title="Sbor Víry — YouTube" allowfullscreen
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>`;
      });
    } else {
      host.innerHTML = `<a class="media ratio-16-9" href="${esc(DATA.social.youtube)}" target="_blank" rel="noopener"
        style="text-decoration:none">
        <div class="ph" style="gap:.9rem;display:grid;place-items:center">
          <span style="width:64px;height:64px;border-radius:50%;background:var(--red);color:#fff;display:grid;place-items:center">
            <span style="width:26px;height:26px;display:block">${ICON.youtube}</span>
          </span>
          <span style="text-transform:none;letter-spacing:0;font-size:.98rem;font-weight:500">${esc(t('home.watch.fallback'))}</span>
        </div></a>`;
    }
  }

  function renderContactInfo() {
    const host = $('#contact-info');
    if (!host) return;
    const c = DATA.contact, L = 'contact.labels.';
    const row = (icon, label, value, link) => `
      <div>
        <span class="card-icon ink" style="width:44px;height:44px;border-radius:13px">${icon}</span>
        <div>
          <dt>${esc(label)}</dt>
          <dd>${link ? `<a href="${esc(link)}">${esc(value)}</a>` : esc(value)}</dd>
        </div>
      </div>`;
    host.innerHTML = `<dl class="info-list">
      ${row(ICON.pin, t(L + 'venue'), c.venue)}
      ${row(ICON.mail, t(L + 'email'), c.email, 'mailto:' + c.email)}
      ${DATA.social.facebook ? row(ICON.facebook, t(L + 'messenger'), 'facebook.com/sborviry.org', DATA.social.facebook) : ''}
      ${c.phone ? row(ICON.phone, t(L + 'phone'), c.phone, 'tel:' + c.phone.replace(/\s/g, '')) : ''}
      ${row(ICON.user, t(L + 'pastor'), c.pastor)}
      ${row(ICON.id, t('about.legal.orgLabel'), c.orgName + ' · IČO ' + c.ico)}
    </dl>`;
  }

  function renderMap() {
    const host = $('#map');
    if (!host) return;
    const c = DATA.contact;
    const d = 0.004;
    const bbox = [c.lon - d, c.lat - d / 2, c.lon + d, c.lat + d / 2].join('%2C');
    host.innerHTML = `
      <div class="media ratio-16-9">
        <iframe title="Mapa" loading="lazy"
          src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&amp;layer=mapnik&amp;marker=${c.lat}%2C${c.lon}"></iframe>
      </div>
      <div class="btn-row" style="margin-top:1.25rem">
        <a class="btn btn-ghost btn-sm" target="_blank" rel="noopener"
           href="https://www.google.com/maps/dir/?api=1&destination=${c.lat},${c.lon}">${esc(t('cta.directions'))}</a>
        ${c.googleMapsUrl ? `<a class="btn btn-ghost btn-sm" target="_blank" rel="noopener"
           href="${esc(c.googleMapsUrl)}">Google Maps</a>` : ''}
        <a class="btn btn-ghost btn-sm" target="_blank" rel="noopener"
           href="https://mapy.com/zakladni?x=${c.lon}&y=${c.lat}&z=18&source=coor&id=${c.lon}%2C${c.lat}">Mapy.cz</a>
      </div>`;
  }

  function renderGiving() {
    const host = $('#giving');
    if (!host) return;
    const g = DATA.giving, L = 'give.bank.';
    const rows = [
      [t(L + 'owner'), g.accountName],
      [t(L + 'bank'), g.bank],
      [t(L + 'account'), g.accountNumber],
      [t(L + 'iban'), g.iban],
      [t(L + 'swift'), g.swift],
      [t(L + 'vs'), g.variableSymbol]
    ].filter((r) => r[1]);

    if (rows.length <= 1) {
      host.innerHTML = `<div class="card"><p class="muted">${esc(t(L + 'todo'))}</p></div>`;
      return;
    }
    host.innerHTML = `<div class="times">
      ${rows.map((r) => `<div class="time-row">
        <span class="what" style="min-width:170px">${esc(r[0])}</span>
        <span class="display" style="font-size:1.15rem;color:var(--ink);letter-spacing:-.01em">${esc(r[1])}</span>
      </div>`).join('')}
    </div><p class="muted small mt-1">${esc(t(L + 'hint'))}</p>`;
  }

  /* Fotogalerie — sekce se skryje, dokud v content.js nejsou žádné fotky. */
  function renderGallery() {
    const sec = $('#gallery-section');
    if (!sec) return;
    const list = (DATA.gallery || []).filter(Boolean);
    if (!list.length) { sec.classList.add('hide'); return; }
    sec.classList.remove('hide');

    const track = $('#gallery', sec);

    // Fotky se vykreslují jen jednou. Při změně jazyka se mění pouze popisky —
    // kdyby se galerie překreslovala celá, obsluha kliknutí by se hromadila.
    if (track.dataset.built !== '1') {
      track.innerHTML = list.map((item) => {
        const src = typeof item === 'string' ? item : item.src;
        return `<figure class="media ratio-1-1" role="group" data-photo="${esc(src)}"></figure>`;
      }).join('');
      track.dataset.built = '1';
      initCarousel(sec);
    }
    updateGalleryLabels(sec, list);
  }

  /* Přeloží popisky fotek i ovládacích prvků. Volá se při každé změně jazyka. */
  function updateGalleryLabels(sec, list) {
    const track = $('#gallery', sec);
    const n = list.length;
    $$('figure', track).forEach((fig, i) => {
      const item = list[i];
      const alt = typeof item === 'string' ? t('gallery.alt') : (loc(item.alt) || t('gallery.alt'));
      fig.dataset.photoAlt = alt;                       // popisek obrázku (alt)
      fig.setAttribute('aria-label', t('gallery.slide').replace('%1', i + 1).replace('%2', n));
    });
    track.setAttribute('aria-label', t('gallery.h2'));

    const ctl = $('#gallery-controls', sec);
    if (!ctl) return;
    const set = (sel, key) => { const el = $(sel, ctl); if (el) el.setAttribute('aria-label', t(key)); };
    set('[data-go="-1"]', 'gallery.prev');
    set('[data-go="1"]', 'gallery.next');
    const dots = $$('[data-dot]', ctl);
    dots.forEach((d, i) => d.setAttribute('aria-label',
      t('gallery.page').replace('%1', i + 1).replace('%2', dots.length)));
    const play = $('#gallery-play', ctl);
    if (play) play.setAttribute('aria-label',
      t(play.getAttribute('aria-pressed') === 'true' ? 'gallery.play' : 'gallery.pause'));
  }

  /* Karusel: nativní rolování se „zacvakáváním“ + šipky, tečky a šetrné
     automatické posouvání. Bez knihoven, funguje na dotyku i klávesnici. */
  function initCarousel(sec) {
    const track = $('#gallery', sec);
    const ctl = $('#gallery-controls', sec);
    if (!track || !ctl) return;

    const slides = Array.from(track.children);
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let pages = 1, page = 0, timer = null, paused = false, userPaused = false, visible = true;

    const perView = () => {
      const w = slides[0] ? slides[0].getBoundingClientRect().width : 1;
      return Math.max(1, Math.round(track.clientWidth / (w + parseFloat(getComputedStyle(track).gap || 0))));
    };

    ctl.innerHTML = `
      <button class="carousel-btn" type="button" data-go="-1">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="carousel-dots" id="gallery-dots" role="tablist" aria-label="${esc(t('gallery.eyebrow'))}"></div>
      <button class="carousel-btn" type="button" data-go="1">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <button class="carousel-btn" type="button" id="gallery-play" style="margin-left:.5rem"></button>`;

    const dotsBox = $('#gallery-dots', ctl);
    const playBtn = $('#gallery-play', ctl);
    const ICON_PAUSE = '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6.5" y="5" width="4" height="14" rx="1.2"/><rect x="13.5" y="5" width="4" height="14" rx="1.2"/></svg>';
    const ICON_PLAY  = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.2v13.6a1 1 0 0 0 1.5.87l11-6.8a1 1 0 0 0 0-1.74l-11-6.8A1 1 0 0 0 8 5.2Z"/></svg>';

    function buildDots() {
      const per = perView();
      pages = Math.max(1, Math.ceil(slides.length / per));
      dotsBox.innerHTML = Array.from({ length: pages }, (_, i) =>
        `<button type="button" role="tab" data-dot="${i}"></button>`).join('');
      ctl.classList.toggle('hide', pages < 2);   // jedna stránka → ovládání netřeba
      updateGalleryLabels(sec, DATA.gallery || []);
      syncFromScroll();
    }

    function goTo(p, smooth) {
      const per = perView();
      page = ((p % pages) + pages) % pages;
      const target = slides[Math.min(page * per, slides.length - 1)];
      if (!target) return;
      track.scrollTo({ left: target.offsetLeft - slides[0].offsetLeft,
                       behavior: (smooth === false || reduced) ? 'auto' : 'smooth' });
      markDots();
    }

    function markDots() {
      $$('button', dotsBox).forEach((d, i) => d.setAttribute('aria-current', String(i === page)));
    }

    function syncFromScroll() {
      const per = perView();
      const step = slides[0] ? slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 0) : 1;
      page = Math.min(pages - 1, Math.round(track.scrollLeft / (step * per)));
      markDots();
    }

    /* --- automatické posouvání --- */
    function tick() { if (!paused && !userPaused && visible) goTo(page + 1); }
    function start() {
      stop();
      if (reduced || userPaused || pages < 2) return;
      timer = setInterval(tick, 5000);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function setPlayBtn() {
      const off = userPaused;
      playBtn.innerHTML = off ? ICON_PLAY : ICON_PAUSE;
      playBtn.setAttribute('aria-label', t(off ? 'gallery.play' : 'gallery.pause'));
      playBtn.setAttribute('aria-pressed', String(off));
    }

    // pozastavení při najetí myší, dotyku nebo práci s klávesnicí
    ['pointerenter', 'focusin', 'pointerdown'].forEach((e) =>
      sec.addEventListener(e, () => { paused = true; }));
    ['pointerleave', 'focusout'].forEach((e) =>
      sec.addEventListener(e, () => { paused = false; }));
    document.addEventListener('visibilitychange', () => { paused = document.hidden; });

    // neposouvat, když sekce není na obrazovce (typicky při čtení jinde)
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((en) => { visible = en[0].isIntersecting; },
        { threshold: 0.25 }).observe(sec);
    }

    ctl.addEventListener('click', (e) => {
      const go = e.target.closest('[data-go]');
      const dot = e.target.closest('[data-dot]');
      if (go) goTo(page + Number(go.dataset.go));
      else if (dot) goTo(Number(dot.dataset.dot));
      else if (e.target.closest('#gallery-play')) {
        userPaused = !userPaused; setPlayBtn(); userPaused ? stop() : start();
      }
    });

    // ovládání šipkami na klávesnici (a dálkovým ovladačem u televizí)
    track.tabIndex = 0;
    track.setAttribute('role', 'region');
    track.setAttribute('aria-label', t('gallery.h2'));
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { goTo(page + 1); e.preventDefault(); }
      if (e.key === 'ArrowLeft')  { goTo(page - 1); e.preventDefault(); }
    });

    let sTid;
    track.addEventListener('scroll', () => { clearTimeout(sTid); sTid = setTimeout(syncFromScroll, 90); }, { passive: true });

    let rTid;
    window.addEventListener('resize', () => { clearTimeout(rTid); rTid = setTimeout(() => { buildDots(); goTo(page, false); }, 150); });

    buildDots(); setPlayBtn(); start();
  }

  function renderSocials() {
    const host = $('#socials');
    if (!host) return;
    const s = DATA.social;
    host.innerHTML = `
      <a class="btn btn-ghost" href="${esc(s.youtube)}" target="_blank" rel="noopener">${ICON.youtube} YouTube</a>
      <a class="btn btn-ghost" href="${esc(s.facebook)}" target="_blank" rel="noopener">${ICON.facebook} Facebook</a>
      <a class="btn btn-ghost" href="${esc(s.instagram)}" target="_blank" rel="noopener">${ICON.instagram} Instagram</a>`;
  }

  /* Strukturovaná data (Schema.org) — pomáhají vyhledávačům i AI asistentům
     jednoznačně rozpoznat, o kterou organizaci jde. Klíčové je IČO
     a odkazy na oficiální profily; podle nich nás nespletou s jinými sbory. */
  function renderSchema() {
    const c = DATA.contact, s = DATA.social;
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Church',
      name: 'Sbor Víry',
      alternateName: ['Sbor Víry Třinec', 'Sbor Víry, z. s.'],
      legalName: c.orgName,
      description: t('meta.home.desc'),
      inLanguage: LANG,
      email: c.email,
      identifier: { '@type': 'PropertyValue', propertyID: 'IČO', value: c.ico },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hraniční 213',
        postalCode: '739 61',
        addressLocality: 'Třinec',
        addressRegion: 'Moravskoslezský kraj',
        addressCountry: 'CZ'
      },
      geo: { '@type': 'GeoCoordinates', latitude: c.lat, longitude: c.lon },
      sameAs: [s.youtube, s.facebook, s.instagram].filter(Boolean)
    };
    if (c.phone) data.telephone = c.phone;
    if (c.googleMapsUrl) data.hasMap = c.googleMapsUrl;
    if (DATA.founded) data.foundingDate = DATA.founded;
    if (c.pastor) data.employee = { '@type': 'Person', name: c.pastor, jobTitle: t('about.lead.role') };

    let el = $('#schema-org');
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = 'schema-org';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data, null, 2);
  }

  function renderIcons() {
    $$('[data-icon]').forEach((el) => { el.innerHTML = ICON[el.dataset.icon] || ''; });
  }

  function renderSubjectOptions() {
    const sel = $('#f-subject');
    if (!sel) return;
    const opts = t('contact.form.subjectOptions') || [];
    sel.innerHTML = opts.map((o) => `<option>${esc(o)}</option>`).join('');
  }

  /* Kontaktní formulář — bez serveru otevře e-mailový klient.
     Chcete-li odesílat přímo z webu, přečtěte si README (Formspree). */
  function bindForm() {
    const form = $('#contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      if (form.dataset.mode === 'endpoint') return; // vlastní endpoint → nechat proběhnout
      e.preventDefault();
      const v = (id) => (($('#' + id) || {}).value || '').trim();
      const body = [
        t('contact.form.name') + ': ' + v('f-name'),
        t('contact.form.email') + ': ' + v('f-email'),
        t('contact.form.phone') + ': ' + v('f-phone'),
        '', v('f-message')
      ].join('\n');
      location.href = 'mailto:' + DATA.contact.email +
        '?subject=' + encodeURIComponent('[web] ' + v('f-subject')) +
        '&body=' + encodeURIComponent(body);
    });
  }

  /* ------------------------------------------------------ hero pozadí/foto */
  function renderPlaceholders() {
    $$('[data-photo]').forEach((el) => {
      const src = el.dataset.photo;
      const ph = () => { el.innerHTML = `<div class="ph">${esc(t('ui.photoPlaceholder'))}</div>`; };
      // popisek buď přímo v data-photo-alt, nebo přes klíč v data-photo-alt-key (překládá se)
      const altText = () => el.dataset.photoAltKey ? t(el.dataset.photoAltKey) : (el.dataset.photoAlt || '');

      // Není zadaná cesta, nebo se soubor už dřív nepodařilo načíst → zástupný obrázek.
      // (Text se překládá, proto se vykresluje při každé změně jazyka znovu.)
      if (!src || el.dataset.missing === '1') { ph(); return; }
      if (el.dataset.done === '1') {
        const cur = el.querySelector('img');       // fotka už je vložená —
        if (cur) cur.alt = altText();              // stačí přeložit její popisek
        return;
      }

      const img = new Image();
      img.alt = altText();
      img.loading = 'lazy';
      img.onerror = () => {
        // Soubor ve složce assets/img/ zatím není — web se nerozbije.
        el.dataset.missing = '1';
        el.dataset.done = '';
        if (el.classList.contains('hero-bg')) el.remove(); else ph();
      };
      img.src = src;
      el.innerHTML = '';
      el.appendChild(img);
      el.dataset.done = '1';
    });
  }

  /* ---------------------------------------------------- animace při scrollu */
  let observer;
  function initReveal() {
    if (observer) observer.disconnect();
    if (!('IntersectionObserver' in window)) {
      $$('[data-reveal]').forEach((el) => el.classList.add('in'));
      return;
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); observer.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });

    $$('[data-reveal]').forEach((el, i) => {
      el.style.transitionDelay = Math.min(i % 6, 5) * 70 + 'ms';
      observer.observe(el);
    });
  }

  /* ---------------------------------------------------------- přepnutí jazyka */
  function setLang(lang) {
    if (!LANGS.includes(lang) || lang === LANG) return;
    LANG = lang;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    const url = new URL(location.href);
    if (lang === DEFAULT_LANG) url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    history.replaceState({}, '', url);
    renderAll();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function renderAll() {
    renderHeader();
    renderFooter();
    applyStaticText();
    renderSchema();
    renderIcons();
    renderHeroMeta();
    renderTimes();
    renderNews();
    renderYouTube();
    renderContactInfo();
    renderMap();
    renderGiving();
    renderGallery();
    renderSocials();
    renderSubjectOptions();
    renderPlaceholders();
    bindForm();
    initReveal();
  }

  /* --------------------------------------------------------------- start */
  try { localStorage.setItem(STORE_KEY, LANG); } catch (e) {}
  document.addEventListener('DOMContentLoaded', renderAll);

  // pro případné rozšíření
  window.SborViry = { t, loc, setLang, get lang() { return LANG; } };
})();
