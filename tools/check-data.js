// Prüft alle Daten auf kaputte Querverweise. Aufruf: node tools/check-data.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const files = [...html.matchAll(/<script src="(data\/[^"]+)"/g)].map(m => m[1]);
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
const D = ctx.window.HG;
const ids = list => new Set(list.map(x => x.id));
const A = ids(D.articles), I = ids(D.idioms), T = ids(D.themes), C = ids(D.countries), K = ids(D.continents);
const errors = [];
const dupes = (list, what) => { const s = new Set(); for (const x of list) { if (s.has(x.id)) errors.push(`doppelte ${what}-ID: ${x.id}`); s.add(x.id); } };
dupes(D.articles, 'Artikel'); dupes(D.idioms, 'Redewendung'); dupes(D.countries, 'Land');
dupes(D.talk || [], 'Gesprächsreferenz'); dupes(D.facts || [], 'Fakt');
function text(where, s) {
  for (const m of String(s || '').matchAll(/\[\[(\w):([\w-]+)\|/g)) {
    const set = { a: A, l: C, t: T }[m[1]];
    if (!set || !set.has(m[2])) errors.push(`${where}: unbekannter Link [[${m[1]}:${m[2]}]]`);
  }
  for (const m of String(s || '').matchAll(/\{\{r:([\w-]+)\}\}/g)) if (!I.has(m[1])) errors.push(`${where}: unbekannte Redewendung {{r:${m[1]}}}`);
}
const check = (where, set, id, what) => { if (id != null && !set.has(id)) errors.push(`${where}: unbekannte(r) ${what} "${id}"`); };
for (const t of D.themes) { text(`Thema ${t.id}`, t.pattern); (t.examples || []).forEach(x => text(`Thema ${t.id}`, x[2])); }
for (const i of D.idioms) { text(`Redewendung ${i.id}`, i.origin); check(`Redewendung ${i.id}`, A, i.a, 'Artikel'); (i.th || []).forEach(t => check(`Redewendung ${i.id}`, T, t, 'Thema')); }
for (const a of D.articles) {
  const w = `Artikel ${a.id}`;
  a.themes.forEach(t => check(w, T, t, 'Thema'));
  (a.countries || []).forEach(c => { if (!C.has(c)) console.warn(`Hinweis – ${w}: Land "${c}" hat (noch) keinen Zeitstrahl`); });
  (a.continents || []).forEach(k => check(w, K, k, 'Kontinent'));
  (a.related || []).forEach(r => check(w, A, r, 'verwandter Artikel'));
  (a.idioms || []).forEach(r => check(w, I, r, 'Redewendung'));
  a.sections.forEach(s => { s.p.forEach(p => text(w, p)); if (s.box) text(w, s.box.text); });
  a.keyDates.forEach(k => text(w, k[1]));
}
const TALK_CATS = ['buero', 'alltag', 'konter', 'prognose', 'politik'];
const FACT_CATS = ['perspektive', 'mythos', 'kurios', 'alltag', 'menschen'];
for (const t of D.talk || []) {
  const w = `Gesprächsreferenz ${t.id}`;
  if (!TALK_CATS.includes(t.cat)) errors.push(`${w}: unbekannte Kategorie ${t.cat}`);
  if (!t.when || !t.say || !t.story) errors.push(`${w}: when/say/story fehlt`);
  check(w, A, t.a, 'Artikel'); check(w, I, t.r, 'Redewendung');
  (t.th || []).forEach(x => check(w, T, x, 'Thema')); text(w, t.story);
}
for (const f of D.facts || []) {
  const w = `Fakt ${f.id}`;
  if (!FACT_CATS.includes(f.cat)) errors.push(`${w}: unbekannte Kategorie ${f.cat}`);
  if (!f.t || !f.d) errors.push(`${w}: Titel/Text fehlt`);
  check(w, A, f.a, 'Artikel');
  (f.th || []).forEach(x => check(w, T, x, 'Thema')); text(w, f.d);
}
const timelines = [['Welt', D.world], ...D.continents.map(k => [k.name, k]), ...D.countries.map(c => [c.name, c])];
let n = 0;
for (const [name, tl] of timelines) {
  if (tl.cont) check(name, K, tl.cont, 'Kontinent');
  for (const e of tl.events) {
    n++;
    const w = `${name} ${e.y} „${e.t}“`;
    if (typeof e.y !== 'number' || Number.isNaN(e.y)) errors.push(`${w}: Jahr fehlt`);
    if (e.end != null && e.end < e.y) errors.push(`${w}: Ende vor Beginn`);
    check(w, A, e.a, 'Artikel'); check(w, I, e.r, 'Redewendung');
    (e.th || []).forEach(t => check(w, T, t, 'Thema'));
    text(w, e.d);
  }
}
console.log(`${D.articles.length} Artikel, ${D.idioms.length} Redewendungen, ${(D.talk || []).length} Gesprächsreferenzen, ${(D.facts || []).length} Fakten, ${D.themes.length} Themen, ${D.countries.length} Länder, ${D.continents.length} Kontinente, ${n} Ereignisse`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Alle Querverweise in Ordnung ✓');
