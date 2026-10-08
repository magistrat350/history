/* Chronika – Geschichte erzählt
 * Single-Page-App ohne Build-Schritt. Daten liegen in window.HG (siehe data/*.js).
 */
(() => {
  'use strict';

  const D = window.HG;
  const app = document.getElementById('app');
  const index = list => Object.fromEntries(list.map(x => [x.id, x]));
  const A = index(D.articles);
  const I = index(D.idioms);
  const T = index(D.themes);
  const C = index(D.countries);
  const K = index(D.continents);

  D.articles.sort((a, b) => a.years[0] - b.years[0]);

  /* ---------- Helfer ---------- */
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = s => String(s ?? '').toLowerCase()
    .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss')
    .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
    .normalize('NFD').replace(/[̀-ͯ]/g, '');
  const plain = s => String(s ?? '').replace(/\[\[\w:[\w-]+\|([^\]]+)\]\]/g, '$1').replace(/\{\{r:[\w-]+\}\}/g, '').replace(/\*\*/g, '');

  function yearNum(y) {
    const abs = Math.abs(y);
    return abs >= 10000 ? abs.toLocaleString('de-DE') : String(abs);
  }
  function fy(e) {
    if (e.yd) return e.yd;
    const suffix = y => (y < 0 ? ' v. Chr.' : '');
    let s;
    if (e.end != null) {
      s = (e.y < 0 && e.end < 0)
        ? `${yearNum(e.y)}–${yearNum(e.end)} v. Chr.`
        : `${yearNum(e.y)}${suffix(e.y)}–${yearNum(e.end)}${suffix(e.end)}`;
    } else {
      s = yearNum(e.y) + suffix(e.y);
      if (e.y > 0 && e.y < 300) s += ' n. Chr.';
    }
    return (e.approx ? 'um ' : '') + s;
  }
  const fyRange = ([a, b]) => fy({ y: a, end: b !== a ? b : undefined });

  /* Leichtgewichtiges Markup:
   * [[a:id|Text]] Artikel-Link · [[l:id|Text]] Länder-Zeitstrahl · [[t:id|Text]] Thema
   * {{r:id}} Redewendungs-Chip · **fett** */
  function rich(s) {
    let out = esc(s);
    out = out.replace(/\[\[a:([\w-]+)\|([^\]]+)\]\]/g, (m, id, l) => A[id] ? `<a href="#/artikel/${id}">${l}</a>` : l);
    out = out.replace(/\[\[l:([\w-]+)\|([^\]]+)\]\]/g, (m, id, l) => C[id] ? `<a href="#/zeitstrahl/l/${id}">${l}</a>` : l);
    out = out.replace(/\[\[t:([\w-]+)\|([^\]]+)\]\]/g, (m, id, l) => T[id] ? `<a href="#/themen/${id}">${l}</a>` : l);
    out = out.replace(/\{\{r:([\w-]+)\}\}/g, (m, id) => refChip(id));
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    return out;
  }
  function refChip(id) {
    const r = I[id];
    if (!r) return '';
    return `<a class="ref" href="#/redewendungen/${id}" title="${esc(r.meaning)}">💬 ${esc(r.phrase)}</a>`;
  }
  const themeChip = id => T[id] ? `<a class="chip" href="#/themen/${id}">${T[id].icon} ${esc(T[id].name)}</a>` : '';
  const themeChips = ids => (ids || []).map(themeChip).join('');

  const KIND_LABEL = { redewendung: 'Redewendung', zitat: 'Geflügeltes Wort', kalauer: 'Kalauer', wort: 'Wortgeschichte', merkspruch: 'Eselsbrücke' };

  /* ---------- Zeitstrahl-Quellen ---------- */
  const SOURCES = [
    { kind: 'w', id: 'welt', name: 'Weltgeschichte', icon: '🌍', obj: D.world },
    ...D.continents.map(k => ({ kind: 'k', id: k.id, name: k.name, icon: k.icon, obj: k })),
    ...D.countries.map(c => ({ kind: 'l', id: c.id, name: c.name, icon: c.flag, obj: c }))
  ];
  const srcHref = s => s.kind === 'w' ? '#/zeitstrahl/welt' : `#/zeitstrahl/${s.kind}/${s.id}`;
  const ALL_EVENTS = SOURCES.flatMap(s => s.obj.events.map(e => ({ ...e, src: s })));
  const srcOf = (kind, id) => SOURCES.find(s => s.kind === kind && s.id === id);

  const EPOCHS = [
    { id: 'ur', name: 'Ur- und Frühgeschichte', from: -Infinity, to: -3000, span: 'bis 3000 v. Chr.' },
    { id: 'antike', name: 'Antike', from: -3000, to: 500, span: '3000 v. Chr. – 500' },
    { id: 'mittelalter', name: 'Mittelalter', from: 500, to: 1500, span: '500 – 1500' },
    { id: 'neuzeit', name: 'Frühe Neuzeit', from: 1500, to: 1789, span: '1500 – 1789' },
    { id: 'jh19', name: 'Das lange 19. Jahrhundert', from: 1789, to: 1914, span: '1789 – 1914' },
    { id: 'weltkriege', name: 'Zeitalter der Weltkriege', from: 1914, to: 1945, span: '1914 – 1945' },
    { id: 'kk', name: 'Kalter Krieg & Dekolonisierung', from: 1945, to: 1991, span: '1945 – 1991' },
    { id: 'heute', name: 'Gegenwart', from: 1991, to: Infinity, span: 'seit 1991' }
  ];
  const epochOf = y => EPOCHS.find(e => y >= e.from && y < e.to);

  /* ---------- Speicher (nur Komfort) ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('chronika:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('chronika:' + k, JSON.stringify(v)); } catch { /* egal */ } }
  };

  /* ---------- Rendering-Bausteine ---------- */
  function articleCard(a) {
    return `<a class="card" href="#/artikel/${a.id}">
      <div class="meta">${esc(a.era)} · ${fyRange(a.years)}</div>
      <h3>${esc(a.title)}</h3>
      <p>${esc(a.teaser)}</p>
    </a>`;
  }

  function eventItem(e, opts = {}) {
    const overlay = opts.overlay;
    const parts = [];
    if (e.a && A[e.a]) parts.push(`<a class="linkbtn" href="#/artikel/${e.a}">📜 Artikel lesen</a>`);
    if (e.r && I[e.r]) parts.push(refChip(e.r));
    parts.push(themeChips(e.th));
    parts.push(`<button class="linkbtn" data-sim="${e.y}" data-src="${e.src ? e.src.kind + ':' + e.src.id : ''}">⇄ Zur gleichen Zeit</button>`);
    const srcLabel = (opts.showSrc && e.src) ? `<a class="ev-src" href="${srcHref(e.src)}">${e.src.icon} ${esc(e.src.name)}</a>` : '';
    return `<li class="ev${overlay ? ' overlay' : ''}">
      <div class="ev-body">
        <span class="ev-year">${fy(e)}</span>${srcLabel}
        <div class="ev-title">${esc(e.t)}</div>
        ${e.d ? `<p class="ev-desc">${rich(e.d)}</p>` : ''}
        <div class="ev-foot">${parts.join('')}</div>
      </div>
    </li>`;
  }

  function timelineHTML(events, opts = {}) {
    if (!events.length) return `<div class="empty">Keine Ereignisse für diese Auswahl.</div>`;
    const sorted = [...events].sort((a, b) => a.y - b.y || (a.overlay ? 1 : -1));
    const groups = new Map();
    for (const e of sorted) {
      const ep = epochOf(e.y);
      if (!groups.has(ep.id)) groups.set(ep.id, { ep, list: [] });
      groups.get(ep.id).list.push(e);
    }
    const nav = `<nav class="epoch-nav">${[...groups.values()].map(g => `<a href="javascript:void 0" data-jump="ep-${g.ep.id}">${g.ep.name}</a>`).join('')}</nav>`;
    const body = [...groups.values()].map(g => `
      <section class="epoch" id="ep-${g.ep.id}">
        <h3 class="epoch-title">${g.ep.name} <small>${g.ep.span} · ${g.list.length} Ereignisse</small></h3>
        <ol class="timeline">${g.list.map(e => eventItem(e, { overlay: e.overlay, showSrc: opts.showSrc || e.overlay })).join('')}</ol>
      </section>`).join('');
    return nav + body;
  }

  function setTitle(t) { document.title = t ? `${t} · Chronika` : 'Chronika – Geschichte erzählt'; }

  /* ---------- Ansichten ---------- */
  function viewHome() {
    setTitle();
    const day = Math.floor(Date.now() / 86400000);
    const sayings = D.idioms.filter(i => i.kind !== 'merkspruch');
    const idiom = sayings[day % sayings.length];
    const featured = D.articles.filter(a => a.featured).slice(0, 6);
    const nEvents = ALL_EVENTS.length;

    app.innerHTML = `
      <section class="hero">
        <div class="eyebrow">Geschichte erzählt</div>
        <h1>Von der Steinzeit bis heute – alles, was bleibt.</h1>
        <p class="lead">Umfassende Artikel zu den spannenden Kapiteln der Geschichte, Zeitstrahlen für jedes Land, jeden Kontinent und die ganze Welt – und dazu die Redewendungen, die bis heute in unserer Sprache stecken.</p>
        <div class="actions">
          <a class="btn" href="#/zeitstrahl/welt">🌍 Weltzeitstrahl</a>
          <a class="btn ghost" href="#/artikel">📜 Alle Artikel</a>
          <a class="btn ghost" href="#/themen">🔁 Wiederkehrende Themen</a>
        </div>
        <div class="stats">
          <div class="stat"><strong>${D.articles.length}</strong><span>Artikel</span></div>
          <div class="stat"><strong>${D.countries.length}</strong><span>Länder-Zeitstrahlen</span></div>
          <div class="stat"><strong>${nEvents}</strong><span>Ereignisse</span></div>
          <div class="stat"><strong>${D.idioms.length}</strong><span>Redewendungen & Merksprüche</span></div>
        </div>
      </section>

      <section class="section feature-row">
        <div class="card quote-card idiom-card">
          <div class="eyebrow">💬 Redewendung des Tages</div>
          <div class="phrase">„${esc(idiom.phrase)}“</div>
          <div class="meaning muted">${esc(idiom.meaning)}</div>
          <p class="origin">${rich(idiom.origin)}</p>
          <div class="foot"><a href="#/redewendungen/${idiom.id}">Mehr dazu →</a></div>
        </div>
        <div class="card" id="randomBox"></div>
      </section>

      <section class="section">
        <div class="section-head"><h2>Ausgewählte Artikel</h2><a href="#/artikel">Alle ${D.articles.length} Artikel →</a></div>
        <div class="grid">${featured.map(articleCard).join('')}</div>
      </section>

      <section class="section">
        <div class="section-head"><h2>Wiederkehrende Themen</h2><a href="#/themen">Alle Themen →</a></div>
        <p class="muted" style="max-width:70ch">Geschichte wiederholt sich nicht – aber sie reimt sich. Diese Muster tauchen in allen Epochen und auf allen Kontinenten wieder auf.</p>
        <div class="grid tight">${D.themes.map(t => `<a class="card mini" href="#/themen/${t.id}"><span class="icon">${t.icon}</span><div><strong>${esc(t.name)}</strong></div></a>`).join('')}</div>
      </section>

      <section class="section">
        <div class="section-head"><h2>Zeitstrahlen</h2><a href="#/zeitstrahl">Alle Länder →</a></div>
        <div class="grid tight">
          <a class="card mini" href="#/zeitstrahl/welt"><span class="icon">🌍</span><div><strong>Weltgeschichte</strong><span class="faint">${D.world.events.length} Ereignisse</span></div></a>
          ${D.continents.map(k => `<a class="card mini" href="#/zeitstrahl/k/${k.id}"><span class="icon">${k.icon}</span><div><strong>${esc(k.name)}</strong><span class="faint">${k.events.length} Ereignisse</span></div></a>`).join('')}
        </div>
      </section>`;
    renderRandom();
  }

  function renderRandom() {
    const box = document.getElementById('randomBox');
    if (!box) return;
    const e = ALL_EVENTS[Math.floor(Math.random() * ALL_EVENTS.length)];
    box.innerHTML = `
      <div class="eyebrow">🎲 Zufallsfund</div>
      <div class="ev-year" style="font-size:1.4rem">${fy(e)}</div>
      <h3 style="margin-top:4px">${esc(e.t)}</h3>
      <p>${rich(e.d || '')}</p>
      <div class="ev-foot" style="margin-top:12px">
        <a class="chip" href="${srcHref(e.src)}">${e.src.icon} ${esc(e.src.name)}</a>
        ${e.a && A[e.a] ? `<a class="chip" href="#/artikel/${e.a}">📜 Artikel</a>` : ''}
        <button class="btn small ghost" id="reroll">Noch einer 🎲</button>
      </div>`;
    document.getElementById('reroll').onclick = renderRandom;
  }

  function viewArticles() {
    setTitle('Artikel');
    const state = { theme: null, q: '' };
    app.innerHTML = `
      <div class="eyebrow">Bibliothek</div>
      <h1>Artikel</h1>
      <p class="lead">Ausführliche Beiträge zu den großen und den überraschenden Kapiteln der Geschichte – chronologisch sortiert.</p>
      <div class="tl-controls">
        <input class="input" id="artFilter" placeholder="Artikel filtern …">
        <div class="chips" id="artThemes">
          <button class="chip on" data-t="">Alle</button>
          ${D.themes.map(t => `<button class="chip" data-t="${t.id}">${t.icon} ${esc(t.name)}</button>`).join('')}
        </div>
      </div>
      <div id="artList"></div>`;
    const list = document.getElementById('artList');
    const draw = () => {
      const q = norm(state.q);
      const items = D.articles.filter(a =>
        (!state.theme || a.themes.includes(state.theme)) &&
        (!q || norm(a.title + ' ' + a.subtitle + ' ' + a.teaser + ' ' + a.era).includes(q)));
      const groups = new Map();
      for (const a of items) {
        const ep = epochOf(a.years[0]);
        if (!groups.has(ep.id)) groups.set(ep.id, { ep, list: [] });
        groups.get(ep.id).list.push(a);
      }
      list.innerHTML = items.length ? [...groups.values()].map(g =>
        `<section class="section"><h2>${g.ep.name} <small class="faint small">${g.ep.span}</small></h2><div class="grid">${g.list.map(articleCard).join('')}</div></section>`).join('')
        : `<div class="empty">Kein Artikel passt zu diesem Filter.</div>`;
    };
    document.getElementById('artFilter').oninput = e => { state.q = e.target.value; draw(); };
    document.getElementById('artThemes').onclick = e => {
      const b = e.target.closest('button[data-t]');
      if (!b) return;
      state.theme = b.dataset.t || null;
      document.querySelectorAll('#artThemes .chip').forEach(x => x.classList.toggle('on', x === b));
      draw();
    };
    draw();
  }

  function viewArticle(id) {
    const a = A[id];
    if (!a) return notFound();
    setTitle(a.title);
    const words = a.sections.reduce((n, s) => n + s.p.join(' ').split(/\s+/).length, 0);
    const minutes = Math.max(1, Math.round(words / 200));
    const pos = D.articles.indexOf(a);
    const prev = D.articles[pos - 1], next = D.articles[pos + 1];
    const idioms = D.idioms.filter(i => i.a === a.id || (a.idioms || []).includes(i.id));
    const related = (a.related || []).map(r => A[r]).filter(Boolean);
    const countries = (a.countries || []).map(c => C[c]).filter(Boolean);
    const conts = (a.continents || []).map(k => K[k]).filter(Boolean);

    const callout = b => b ? `<div class="callout ${b.type || ''}"><span class="callout-title">${
      { mythos: '🧐 Mythos oder Wahrheit?', merk: '🧠 Eselsbrücke', wusstest: '💡 Schon gewusst?', sprache: '💬 Steckt in unserer Sprache' }[b.type] || '💡'} ${esc(b.title || '')}</span><p>${rich(b.text)}</p></div>` : '';

    app.innerHTML = `
      <div class="crumbs"><a href="#/artikel">Artikel</a> › ${esc(a.era)}</div>
      <div class="article-wrap">
        <article>
          <header class="article-head">
            <div class="eyebrow">${esc(a.era)} · ${fyRange(a.years)}</div>
            <h1>${esc(a.title)}</h1>
            <p class="lead">${esc(a.subtitle)}</p>
            <div class="article-meta">
              <span>⏱ ${minutes} Min. Lesezeit</span>
              <button class="chip" data-sim="${a.years[0]}">⇄ Was geschah zur gleichen Zeit?</button>
            </div>
            <div class="chips">${themeChips(a.themes)}</div>
          </header>
          <div class="prose">
            ${a.sections.map((s, i) => `
              ${s.h ? `<h2 id="s${i}">${esc(s.h)}</h2>` : ''}
              ${s.p.map(p => `<p>${rich(p)}</p>`).join('')}
              ${callout(s.box)}`).join('')}
          </div>
          ${idioms.length ? `<section class="section"><h2>💬 Redewendungen & Anspielungen</h2><div class="masonry">${idioms.map(i => idiomCard(i)).join('')}</div></section>` : ''}
          ${related.length ? `<section class="section"><h2>Weiterlesen</h2><div class="grid">${related.map(articleCard).join('')}</div></section>` : ''}
          <div class="pager">
            ${prev ? `<a class="card" href="#/artikel/${prev.id}"><div class="meta">← Vorheriger Artikel</div><h3>${esc(prev.title)}</h3></a>` : '<span></span>'}
            ${next ? `<a class="card" href="#/artikel/${next.id}" style="text-align:right"><div class="meta">Nächster Artikel →</div><h3>${esc(next.title)}</h3></a>` : ''}
          </div>
        </article>
        <aside class="aside">
          <div class="card">
            <h3>📅 Merkdaten</h3>
            <ul class="keydates">${a.keyDates.map(([y, t]) => `<li><b>${typeof y === 'number' ? fy({ y }) : esc(y)}</b><span>${rich(t)}</span></li>`).join('')}</ul>
          </div>
          <div class="card">
            <h3>Inhalt</h3>
            <ul class="toc">${a.sections.map((s, i) => s.h ? `<li><a href="javascript:void 0" data-jump="s${i}">${esc(s.h)}</a></li>` : '').join('')}</ul>
          </div>
          ${countries.length || conts.length ? `<div class="card"><h3>⏳ Zeitstrahlen</h3><div class="chips">
            ${conts.map(k => `<a class="chip" href="#/zeitstrahl/k/${k.id}">${k.icon} ${esc(k.name)}</a>`).join('')}
            ${countries.map(c => `<a class="chip" href="#/zeitstrahl/l/${c.id}">${c.flag} ${esc(c.name)}</a>`).join('')}
          </div></div>` : ''}
        </aside>
      </div>`;
  }

  function viewTimelineIndex() {
    setTitle('Zeitstrahlen');
    app.innerHTML = `
      <div class="eyebrow">Zeitstrahlen</div>
      <h1>Jedes Land, jeder Kontinent, die ganze Welt</h1>
      <p class="lead">Wähle einen Zeitstrahl. In jedem Länder-Zeitstrahl kannst du die Kontinental- und Weltgeschichte einblenden – so siehst du, was gleichzeitig anderswo passierte.</p>
      <div class="section grid">
        <a class="card" href="#/zeitstrahl/welt"><span class="icon">🌍</span><h3>Weltgeschichte</h3><p>${esc(D.world.intro.slice(0, 140))}…</p><div class="meta" style="margin-top:8px">${D.world.events.length} Ereignisse</div></a>
        ${D.continents.map(k => `<a class="card" href="#/zeitstrahl/k/${k.id}"><span class="icon">${k.icon}</span><h3>${esc(k.name)}</h3><p>${esc(k.intro.slice(0, 120))}…</p><div class="meta" style="margin-top:8px">${k.events.length} Ereignisse · ${D.countries.filter(c => c.cont === k.id).length} Länder</div></a>`).join('')}
      </div>
      <h2>Länder</h2>
      <input class="input" id="countryFilter" placeholder="Land suchen …" style="max-width:360px">
      <div id="countryList"></div>`;
    const list = document.getElementById('countryList');
    const draw = q => {
      q = norm(q);
      list.innerHTML = D.continents.map(k => {
        const cs = D.countries.filter(c => c.cont === k.id && (!q || norm(c.name).includes(q))).sort((a, b) => a.name.localeCompare(b.name, 'de'));
        if (!cs.length) return '';
        return `<div class="continent-block"><h3>${k.icon} ${esc(k.name)}</h3><div class="grid tight">${cs.map(c =>
          `<a class="card mini" href="#/zeitstrahl/l/${c.id}"><span class="icon">${c.flag}</span><div><strong>${esc(c.name)}</strong><span class="faint">${c.events.length} Ereignisse</span></div></a>`).join('')}</div></div>`;
      }).join('') || `<div class="empty">Kein Land gefunden.</div>`;
    };
    document.getElementById('countryFilter').oninput = e => draw(e.target.value);
    draw('');
  }

  function viewTimeline(kind, id) {
    const src = srcOf(kind, id);
    if (!src) return notFound();
    const o = src.obj;
    setTitle(`Zeitstrahl ${src.name}`);
    const cont = kind === 'l' ? K[o.cont] : null;
    const overlayable = [];
    if (kind === 'l' && cont) overlayable.push({ key: 'k', label: `${cont.icon} ${cont.name} einblenden`, src: srcOf('k', cont.id) });
    if (kind !== 'w') overlayable.push({ key: 'w', label: '🌍 Weltgeschichte einblenden', src: srcOf('w', 'welt') });
    const state = { overlays: new Set(store.get('overlays', [])), theme: null };
    const own = o.events.map(e => ({ ...e, src }));
    const usedThemes = [...new Set(own.flatMap(e => e.th || []))].filter(t => T[t]);
    const arts = D.articles.filter(a => kind === 'w' ? a.world : kind === 'k' ? (a.continents || []).includes(id) : (a.countries || []).includes(id));
    const children = kind === 'k' ? D.countries.filter(c => c.cont === id).sort((a, b) => a.name.localeCompare(b.name, 'de')) : [];

    app.innerHTML = `
      <div class="crumbs"><a href="#/zeitstrahl">Zeitstrahlen</a>${cont ? ` › <a href="#/zeitstrahl/k/${cont.id}">${esc(cont.name)}</a>` : ''} › ${esc(src.name)}</div>
      <div class="eyebrow">Zeitstrahl</div>
      <h1>${src.icon} ${esc(src.name)}</h1>
      <p class="lead">${rich(o.intro)}</p>
      ${o.facts ? `<div class="chips" style="margin:6px 0 4px">${o.facts.map(f => `<span class="chip">${esc(f)}</span>`).join('')}</div>` : ''}
      ${children.length ? `<details style="margin:14px 0"><summary class="muted" style="cursor:pointer">🗺️ Länder in ${esc(src.name)} (${children.length})</summary><div class="chips" style="margin-top:10px">${children.map(c => `<a class="chip" href="#/zeitstrahl/l/${c.id}">${c.flag} ${esc(c.name)}</a>`).join('')}</div></details>` : ''}
      ${arts.length ? `<details style="margin:12px 0"${arts.length <= 4 ? ' open' : ''}><summary class="muted" style="cursor:pointer">📜 Passende Artikel (${arts.length})</summary><div class="chips" style="margin-top:10px">${arts.map(a => `<a class="chip" href="#/artikel/${a.id}">📜 ${esc(a.title)}</a>`).join('')}</div></details>` : ''}
      <div class="tl-controls">
        ${overlayable.length ? `<div class="row">${overlayable.map(ov => `<label class="toggle"><input type="checkbox" data-ov="${ov.key}" ${state.overlays.has(ov.key) ? 'checked' : ''}> ${esc(ov.label)}</label>`).join('')}</div>` : ''}
        <div class="chips" id="tlThemes"><button class="chip on" data-t="">Alle Themen</button>${usedThemes.map(t => `<button class="chip" data-t="${t}">${T[t].icon} ${esc(T[t].name)}</button>`).join('')}</div>
      </div>
      <div id="tl"></div>`;

    const tl = document.getElementById('tl');
    const draw = () => {
      let evs = [...own];
      for (const ov of overlayable) {
        if (state.overlays.has(ov.key)) evs.push(...ov.src.obj.events.map(e => ({ ...e, src: ov.src, overlay: true })));
      }
      if (state.theme) evs = evs.filter(e => (e.th || []).includes(state.theme));
      tl.innerHTML = timelineHTML(evs);
    };
    app.querySelectorAll('input[data-ov]').forEach(cb => cb.onchange = () => {
      cb.checked ? state.overlays.add(cb.dataset.ov) : state.overlays.delete(cb.dataset.ov);
      store.set('overlays', [...state.overlays]);
      draw();
    });
    document.getElementById('tlThemes').onclick = e => {
      const b = e.target.closest('button[data-t]');
      if (!b) return;
      state.theme = b.dataset.t || null;
      document.querySelectorAll('#tlThemes .chip').forEach(x => x.classList.toggle('on', x === b));
      draw();
    };
    draw();
  }

  function viewThemes() {
    setTitle('Wiederkehrende Themen');
    app.innerHTML = `
      <div class="eyebrow">Muster der Geschichte</div>
      <h1>Wiederkehrende Themen</h1>
      <p class="lead">Ob in Mesopotamien, im Mittelalter oder im 20. Jahrhundert: Manche Dinge passieren immer wieder. Hier verfolgst du ein Thema quer durch alle Epochen und Länder.</p>
      <div class="section grid">${D.themes.map(t => {
        const nA = D.articles.filter(a => a.themes.includes(t.id)).length;
        const nE = ALL_EVENTS.filter(e => (e.th || []).includes(t.id)).length;
        return `<a class="card theme-card" style="--c:${t.color}" href="#/themen/${t.id}"><span class="icon">${t.icon}</span><h3>${esc(t.name)}</h3><p>${esc(t.short)}</p><div class="meta" style="margin-top:10px">${nA} Artikel · ${nE} Ereignisse</div></a>`;
      }).join('')}</div>`;
  }

  function viewTheme(id) {
    const t = T[id];
    if (!t) return notFound();
    setTitle(t.name);
    const arts = D.articles.filter(a => a.themes.includes(id));
    const idioms = D.idioms.filter(i => (i.th || []).includes(id));
    const evs = ALL_EVENTS.filter(e => (e.th || []).includes(id));
    const state = { scope: 'alle' };

    app.innerHTML = `
      <div class="crumbs"><a href="#/themen">Themen</a> › ${esc(t.name)}</div>
      <div class="eyebrow">Wiederkehrendes Thema</div>
      <h1>${t.icon} ${esc(t.name)}</h1>
      <p class="lead">${esc(t.short)}</p>
      <div class="pattern" style="--c:${t.color}"><strong>Das Muster:</strong> ${rich(t.pattern)}</div>
      ${t.examples ? `<section class="section"><h2>Immer wieder: Beispiele quer durch die Zeit</h2><div class="examples">${t.examples.map(x => `<div class="card"><div class="ev-year">${esc(x[0])}</div><strong>${esc(x[1])}</strong><p class="small muted" style="margin-top:4px">${rich(x[2])}</p></div>`).join('')}</div></section>` : ''}
      ${arts.length ? `<section class="section"><h2>Artikel zum Thema</h2><div class="grid">${arts.map(articleCard).join('')}</div></section>` : ''}
      ${idioms.length ? `<section class="section"><h2>💬 Was davon in unserer Sprache blieb</h2><div class="masonry">${idioms.map(i => idiomCard(i)).join('')}</div></section>` : ''}
      <section class="section">
        <div class="section-head"><h2>Quer durch alle Zeitstrahlen (${evs.length})</h2>
          <div class="chips" id="scope">
            <button class="chip on" data-s="alle">Alle</button>
            <button class="chip" data-s="gross">Nur Welt & Kontinente</button>
          </div>
        </div>
        <div id="tl"></div>
      </section>`;
    const tl = document.getElementById('tl');
    const draw = () => tl.innerHTML = timelineHTML(state.scope === 'gross' ? evs.filter(e => e.src.kind !== 'l') : evs, { showSrc: true });
    document.getElementById('scope').onclick = e => {
      const b = e.target.closest('button[data-s]');
      if (!b) return;
      state.scope = b.dataset.s;
      document.querySelectorAll('#scope .chip').forEach(x => x.classList.toggle('on', x === b));
      draw();
    };
    draw();
  }

  function idiomCard(i, big) {
    return `<div class="card idiom-card${big ? ' big' : ''}">
      <span class="kind">${KIND_LABEL[i.kind] || ''}</span>
      <div class="phrase">„${esc(i.phrase)}“</div>
      <div class="meaning">${esc(i.meaning)}</div>
      <div class="origin">${rich(i.origin)}</div>
      <div class="foot">
        ${i.when ? `<span class="chip">🕰 ${esc(i.when)}</span>` : ''}
        ${i.a && A[i.a] ? `<a class="chip" href="#/artikel/${i.a}">📜 ${esc(A[i.a].title)}</a>` : ''}
        ${!big ? `<a href="#/redewendungen/${i.id}" class="small">Details →</a>` : ''}
      </div>
    </div>`;
  }

  function viewIdioms() {
    setTitle('Redewendungen');
    const state = { kind: '', q: '' };
    const counts = k => D.idioms.filter(i => i.kind === k).length;
    app.innerHTML = `
      <div class="eyebrow">Geschichte in der Sprache</div>
      <h1>Redewendungen, Zitate & Kalauer</h1>
      <p class="lead">„Sein Waterloo erleben“, „nach Canossa gehen“ oder „Nagel mich nicht darauf fest“ – unsere Alltagssprache steckt voller Geschichte. Hier erfährst du, woher sie kommt.</p>
      <div class="tabs" id="kinds">
        <button class="chip on" data-k="">Alle (${D.idioms.length})</button>
        ${Object.entries(KIND_LABEL).map(([k, l]) => `<button class="chip" data-k="${k}">${l} (${counts(k)})</button>`).join('')}
      </div>
      <input class="input" id="idiomFilter" placeholder="Redewendung suchen …" style="max-width:420px;margin-bottom:20px">
      <div id="idiomList" class="masonry"></div>`;
    const list = document.getElementById('idiomList');
    const draw = () => {
      const q = norm(state.q);
      const items = D.idioms.filter(i => (!state.kind || i.kind === state.kind) && (!q || norm(i.phrase + ' ' + i.meaning + ' ' + plain(i.origin)).includes(q)));
      list.innerHTML = items.map(i => idiomCard(i)).join('') || `<div class="empty">Nichts gefunden.</div>`;
    };
    document.getElementById('kinds').onclick = e => {
      const b = e.target.closest('button[data-k]');
      if (!b) return;
      state.kind = b.dataset.k;
      document.querySelectorAll('#kinds .chip').forEach(x => x.classList.toggle('on', x === b));
      draw();
    };
    document.getElementById('idiomFilter').oninput = e => { state.q = e.target.value; draw(); };
    draw();
  }

  function viewIdiom(id) {
    const i = I[id];
    if (!i) return notFound();
    setTitle(i.phrase);
    const more = D.idioms.filter(x => x.id !== id && (x.a && x.a === i.a || (x.th || []).some(t => (i.th || []).includes(t)))).slice(0, 6);
    app.innerHTML = `
      <div class="crumbs"><a href="#/redewendungen">Redewendungen</a> › ${esc(i.phrase)}</div>
      ${idiomCard(i, true)}
      ${(i.th || []).length ? `<div class="chips" style="margin-top:14px">${themeChips(i.th)}</div>` : ''}
      ${i.y != null ? `<p style="margin-top:14px"><button class="chip" data-sim="${i.y}">⇄ Was geschah sonst um ${fy({ y: i.y })}?</button></p>` : ''}
      ${more.length ? `<section class="section"><h2>Verwandte Redewendungen</h2><div class="masonry">${more.map(x => idiomCard(x)).join('')}</div></section>` : ''}`;
  }

  function viewSearch(q) {
    setTitle(`Suche: ${q}`);
    document.getElementById('searchInput').value = q;
    const n = norm(q).trim();
    if (!n) { app.innerHTML = `<h1>Suche</h1><div class="empty">Gib oben einen Suchbegriff ein – z. B. „Pest“, „1648“ oder „Canossa“.</div>`; return; }
    const terms = n.split(/\s+/);
    const hit = s => { const h = norm(s); return terms.every(t => h.includes(t)); };
    const yearQ = /^-?\d{1,4}$/.test(q.trim()) ? parseInt(q.trim(), 10) : null;

    const arts = D.articles.filter(a => hit([a.title, a.subtitle, a.teaser, a.era, ...a.sections.flatMap(s => [s.h, ...s.p].map(plain))].join(' ')));
    const ids = D.idioms.filter(i => hit(i.phrase + ' ' + i.meaning + ' ' + plain(i.origin)));
    const evs = ALL_EVENTS.filter(e => (yearQ != null && (e.y === yearQ || (e.end != null && e.y <= yearQ && yearQ <= e.end))) || hit(e.t + ' ' + plain(e.d) + ' ' + e.src.name));
    const places = SOURCES.filter(s => hit(s.name));
    const total = arts.length + ids.length + evs.length + places.length;
    const hl = s => { let out = esc(s); for (const t of q.trim().split(/\s+/).filter(x => x.length > 1)) out = out.replace(new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>'); return out; };

    app.innerHTML = `
      <div class="eyebrow">Suche</div>
      <h1>„${esc(q)}“</h1>
      <p class="muted">${total} Treffer</p>
      ${places.length ? `<section class="section"><h2>Zeitstrahlen</h2><div class="grid tight">${places.map(s => `<a class="card mini" href="${srcHref(s)}"><span class="icon">${s.icon}</span><div><strong>${esc(s.name)}</strong></div></a>`).join('')}</div></section>` : ''}
      ${arts.length ? `<section class="section"><h2>Artikel (${arts.length})</h2><div class="grid">${arts.map(articleCard).join('')}</div></section>` : ''}
      ${ids.length ? `<section class="section"><h2>Redewendungen (${ids.length})</h2><div class="result-list">${ids.map(i => `<a class="result" href="#/redewendungen/${i.id}"><div class="meta">${KIND_LABEL[i.kind]}</div><strong>„${hl(i.phrase)}“</strong> – ${hl(i.meaning)}</a>`).join('')}</div></section>` : ''}
      ${evs.length ? `<section class="section"><h2>Ereignisse (${evs.length})</h2><div class="result-list">${evs.sort((a, b) => a.y - b.y).slice(0, 200).map(e => `<a class="result" href="${srcHref(e.src)}"><div class="meta">${e.src.icon} ${esc(e.src.name)} · ${fy(e)}</div><strong>${hl(e.t)}</strong>${e.d ? `<div class="small muted">${hl(plain(e.d))}</div>` : ''}</a>`).join('')}</div></section>` : ''}
      ${!total ? `<div class="empty">Keine Treffer. Versuch es mit einem anderen Begriff oder einer Jahreszahl.</div>` : ''}`;
  }

  function notFound() {
    setTitle('Nicht gefunden');
    app.innerHTML = `<div class="empty"><h1>Verschollen wie das Bernsteinzimmer</h1><p>Diese Seite gibt es nicht. <a href="#/">Zur Startseite</a></p></div>`;
  }

  /* ---------- „Zur gleichen Zeit“ ---------- */
  const drawer = document.getElementById('drawer');
  function openSimultaneous(y, exclude) {
    const win = y < -1000 ? 250 : y < 0 ? 75 : y < 1500 ? 30 : y < 1900 ? 12 : 5;
    const evs = ALL_EVENTS.filter(e => Math.abs(e.y - y) <= win && (e.src.kind + ':' + e.src.id) !== exclude);
    const groups = new Map();
    for (const e of evs.sort((a, b) => a.y - b.y)) {
      const key = e.src.kind + ':' + e.src.id;
      if (!groups.has(key)) groups.set(key, { src: e.src, list: [] });
      groups.get(key).list.push(e);
    }
    const order = { w: 0, k: 1, l: 2 };
    const sortedGroups = [...groups.values()].sort((a, b) => order[a.src.kind] - order[b.src.kind] || a.src.name.localeCompare(b.src.name, 'de'));
    document.getElementById('drawerTitle').textContent = `Um ${fy({ y })} (± ${win} Jahre)`;
    document.getElementById('drawerBody').innerHTML = sortedGroups.length
      ? sortedGroups.map(g => `<div class="src-group"><h4><a href="${srcHref(g.src)}">${g.src.icon} ${esc(g.src.name)}</a></h4>${g.list.map(e =>
          `<div class="sim-item"><b>${fy(e)}</b>${esc(e.t)}${e.a && A[e.a] ? ` · <a href="#/artikel/${e.a}">Artikel</a>` : ''}</div>`).join('')}</div>`).join('')
      : `<div class="empty">Für diesen Zeitraum sind keine weiteren Ereignisse verzeichnet.</div>`;
    drawer.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() { drawer.hidden = true; document.body.style.overflow = ''; }
  drawer.addEventListener('click', e => {
    if (e.target.closest('[data-close]')) closeDrawer();
    if (e.target.closest('a')) closeDrawer();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !drawer.hidden) closeDrawer(); });

  app.addEventListener('click', e => {
    const sim = e.target.closest('[data-sim]');
    if (sim) { openSimultaneous(parseInt(sim.dataset.sim, 10), sim.dataset.src || ''); return; }
    const jump = e.target.closest('[data-jump]');
    if (jump) { e.preventDefault(); document.getElementById(jump.dataset.jump)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });

  /* ---------- Router ---------- */
  const routes = [
    [/^$/, viewHome],
    [/^artikel$/, viewArticles],
    [/^artikel\/([\w-]+)$/, viewArticle],
    [/^zeitstrahl$/, viewTimelineIndex],
    [/^zeitstrahl\/welt$/, () => viewTimeline('w', 'welt')],
    [/^zeitstrahl\/(k|l)\/([\w-]+)$/, viewTimeline],
    [/^themen$/, viewThemes],
    [/^themen\/([\w-]+)$/, viewTheme],
    [/^redewendungen$/, viewIdioms],
    [/^redewendungen\/([\w-]+)$/, viewIdiom],
    [/^suche$/, (_, params) => viewSearch(params.get('q') || '')]
  ];

  function route() {
    const raw = location.hash.replace(/^#\/?/, '');
    const [path, query] = raw.split('?');
    const params = new URLSearchParams(query || '');
    closeDrawer();
    for (const [re, fn] of routes) {
      const m = path.match(re);
      if (m) {
        const args = m.slice(1);
        if (re.source === '^suche$') fn(null, params); else fn(...args);
        break;
      }
      if (re === routes[routes.length - 1][0]) notFound();
    }
    const section = path.split('/')[0];
    document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === section));
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  window.addEventListener('hashchange', route);

  document.getElementById('searchForm').addEventListener('submit', e => {
    e.preventDefault();
    const q = document.getElementById('searchInput').value.trim();
    location.hash = `#/suche?q=${encodeURIComponent(q)}`;
  });

  /* ---------- Farbschema ---------- */
  const root = document.documentElement;
  const savedTheme = store.get('theme', null);
  if (savedTheme) root.dataset.theme = savedTheme;
  document.getElementById('themeToggle').onclick = () => {
    const isDark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = isDark ? 'light' : 'dark';
    store.set('theme', root.dataset.theme);
  };

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  route();
})();
