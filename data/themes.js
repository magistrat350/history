window.HG = window.HG || {};
window.HG.articles = window.HG.articles || [];
window.HG.countries = window.HG.countries || [];

/* Wiederkehrende Themen – sie verbinden Artikel, Ereignisse und Redewendungen über alle Epochen hinweg. */
window.HG.themes = [
  {
    id: 'imperien', name: 'Aufstieg & Fall von Imperien', icon: '👑', color: '#a8792a',
    short: 'Großreiche entstehen, überdehnen sich und zerfallen – vom Akkadischen Reich bis zur Sowjetunion.',
    pattern: 'Ein Reich wächst durch militärische Überlegenheit, Organisation oder eine überlegene Idee. Mit der Größe steigen die Kosten: Grenzen müssen verteidigt, Provinzen verwaltet, Eliten zufriedengestellt werden. Irgendwann kommen innere Krisen (Thronstreit, Inflation, Steuerlast) und äußerer Druck zusammen – Historiker nennen das „imperiale Überdehnung“. Fast nie fällt ein Reich an einem Tag: {{r:rom-tag}} gilt auch umgekehrt.',
    examples: [
      ['um 2300 v. Chr.', 'Akkadisches Reich', 'Sargon von Akkad schafft das erste bekannte Großreich – es zerfällt nach rund 150 Jahren.'],
      ['476', 'Weströmisches Reich', 'Nach Jahrhunderten von Krisen wird der letzte Kaiser abgesetzt – [[a:rom|mehr im Artikel]].'],
      ['1368', 'Mongolisches Weltreich', 'Das größte zusammenhängende Landreich zerfällt in Teilreiche – [[a:mongolen|mehr]].'],
      ['1922', 'Osmanisches Reich', 'Nach über 600 Jahren endet das Sultanat.'],
      ['1991', 'Sowjetunion', 'Das letzte große Vielvölkerimperium Europas löst sich auf – [[a:kalter-krieg|mehr]].']
    ]
  },
  {
    id: 'religion', name: 'Glaube & Macht', icon: '⛪', color: '#7a4e9a',
    short: 'Religion stiftet Gemeinschaft, legitimiert Herrscher – und wird zum Anlass für Konflikte.',
    pattern: 'Herrscher suchen den Segen der Götter oder Gottes, Priester und Kirchen suchen den Schutz der Herrscher. Diese Allianz ist stark, aber spannungsreich: Wer hat das letzte Wort – Thron oder Altar? Das zeigt sich vom Pharao als Gottkönig über den {{r:canossa}} bis zur Reformation. Neue Glaubensrichtungen entstehen oft in Krisenzeiten und verbreiten sich entlang von Handelswegen.',
    examples: [
      ['um 30', 'Kreuzigung Jesu', 'Ein Wanderprediger aus Galiläa wird hingerichtet – und begründet eine Weltreligion. [[a:jesus|Artikel]]'],
      ['622', 'Hidschra', 'Mohammeds Auszug nach Medina – Beginn der islamischen Zeitrechnung. [[a:islam|Artikel]]'],
      ['1077', 'Gang nach Canossa', 'Kaiser Heinrich IV. beugt sich dem Papst. [[a:canossa|Artikel]]'],
      ['1517', 'Reformation', 'Luthers Thesen spalten die Westkirche. [[a:reformation|Artikel]]'],
      ['1648', 'Westfälischer Friede', 'Ende der großen Religionskriege in Europa. [[a:dreissigjaehriger-krieg|Artikel]]']
    ]
  },
  {
    id: 'krieg', name: 'Krieg & Frieden', icon: '⚔️', color: '#9b2c2c',
    short: 'Kriege verschieben Grenzen, Friedensschlüsse ordnen die Welt neu – oft nur bis zum nächsten Krieg.',
    pattern: 'Auffällig oft trägt ein harter Siegfrieden die Saat des nächsten Krieges in sich (Versailles 1919), während ausgewogene Ordnungen (Westfalen 1648, Wiener Kongress 1815) lange halten. Ein zweites Muster: Neue Waffentechnik – Streitwagen, Langbogen, Schießpulver, Maschinengewehr, Atombombe – verändert nicht nur Schlachten, sondern ganze Gesellschaften.',
    examples: [
      ['1274 v. Chr.', 'Schlacht bei Kadesch', 'Ägypter gegen Hethiter – danach schließen sie den ältesten bekannten Friedensvertrag.'],
      ['1618–1648', 'Dreißigjähriger Krieg', 'Verwüstet Mitteleuropa. [[a:dreissigjaehriger-krieg|Artikel]]'],
      ['1815', 'Wiener Kongress', 'Neuordnung Europas nach Napoleon. [[a:napoleon|Artikel]]'],
      ['1914–1918', 'Erster Weltkrieg', 'Die „Urkatastrophe“ des 20. Jahrhunderts. [[a:erster-weltkrieg|Artikel]]'],
      ['1939–1945', 'Zweiter Weltkrieg', 'Der verheerendste Krieg der Geschichte. [[a:zweiter-weltkrieg|Artikel]]']
    ]
  },
  {
    id: 'revolution', name: 'Revolution & Umsturz', icon: '🔥', color: '#c2410c',
    short: 'Wenn die Unzufriedenheit kippt: Völker stürzen Herrscher – und die Revolution frisst oft ihre Kinder.',
    pattern: 'Revolutionen folgen einem erstaunlich ähnlichen Ablauf: Eine Finanz- oder Versorgungskrise, eine reformunfähige Führung und neue Ideen treffen zusammen. Auf eine gemäßigte Phase folgt oft eine Radikalisierung, dann Terror oder Bürgerkrieg – und am Ende nicht selten ein starker Mann (Cromwell, Napoleon, Stalin). {{r:revolution-kinder}}',
    examples: [
      ['1642–1649', 'Englischer Bürgerkrieg', 'Ein König wird hingerichtet, Cromwell regiert.'],
      ['1776', 'Amerikanische Revolution', 'Kolonien sagen sich von Großbritannien los. [[a:amerikanische-revolution|Artikel]]'],
      ['1789', 'Französische Revolution', 'Freiheit, Gleichheit, Brüderlichkeit – und die Guillotine. [[a:franzoesische-revolution|Artikel]]'],
      ['1917', 'Russische Revolution', 'Die Bolschewiki ergreifen die Macht. [[a:russische-revolution|Artikel]]'],
      ['1989', 'Friedliche Revolution', '„Wir sind das Volk“ – ohne einen Schuss fällt die Mauer. [[a:kalter-krieg|Artikel]]']
    ]
  },
  {
    id: 'demokratie', name: 'Freiheit, Recht & Demokratie', icon: '🗳️', color: '#1d4ed8',
    short: 'Vom Codex Hammurapi bis zum Frauenwahlrecht: Der lange Weg zu Rechten für alle.',
    pattern: 'Rechte wurden selten geschenkt, sondern erkämpft – meist erst für eine kleine Gruppe (Bürger Athens, englische Barone, besitzende Männer) und dann Schritt für Schritt für immer mehr Menschen. Rückschläge gehören dazu: Demokratien können sich auch selbst abschaffen, wie Weimar 1933 zeigt.',
    examples: [
      ['um 1754 v. Chr.', 'Codex Hammurapi', 'Eine der ältesten Gesetzessammlungen – {{r:auge-um-auge}}.'],
      ['508 v. Chr.', 'Reformen des Kleisthenes', 'Geburtsstunde der attischen Demokratie. [[a:griechenland|Artikel]]'],
      ['1215', 'Magna Carta', 'Der englische König muss sich an Recht halten.'],
      ['1789', 'Menschenrechtserklärung', 'Frankreich erklärt Menschen- und Bürgerrechte. [[a:franzoesische-revolution|Artikel]]'],
      ['1918', 'Frauenwahlrecht in Deutschland', 'Frauen wählen 1919 erstmals reichsweit mit.']
    ]
  },
  {
    id: 'handel', name: 'Handel & Austausch', icon: '🐫', color: '#0f766e',
    short: 'Seidenstraße, Hanse, Gewürzroute: Mit den Waren reisen Ideen, Religionen – und Krankheiten.',
    pattern: 'Wer die Handelswege kontrolliert, wird reich: Phönizier, Venedig, die Hanse, die Niederländer, die Briten. Wird ein Weg blockiert, suchen Händler einen neuen – so führte die osmanische Kontrolle des Orienthandels mittelbar zur Suche nach dem Seeweg nach Indien und zur Entdeckung Amerikas. Handelsnetze verbreiten zudem Schrift, Glauben, Technik und leider auch Seuchen.',
    examples: [
      ['um 1000 v. Chr.', 'Phönizier', 'Seehändler im Mittelmeer – ihr Alphabet wird zum Vorfahren unseres.'],
      ['um 100 v. Chr.', 'Seidenstraße', 'Ein Netz von Karawanenwegen verbindet China und Rom.'],
      ['1356', 'Hanse', 'Der erste Hansetag in Lübeck – ein Städtebund beherrscht Nord- und Ostsee.'],
      ['1602', 'VOC', 'Die Niederländische Ostindien-Kompanie – die erste Aktiengesellschaft der Welt.'],
      ['1995', 'WTO', 'Die Welthandelsorganisation wird gegründet – Globalisierung als System.']
    ]
  },
  {
    id: 'kolonialismus', name: 'Kolonialismus & Unabhängigkeit', icon: '🗺️', color: '#854d0e',
    short: 'Europäische Mächte unterwerfen große Teile der Welt – und im 20. Jahrhundert erkämpfen sich die Kolonien ihre Freiheit.',
    pattern: 'Die Kolonisierung verlief in Wellen: Spanien und Portugal ab 1492, dann Niederländer, Briten und Franzosen, schließlich der „Wettlauf um Afrika“ ab 1880. Die Dekolonisierung folgte ebenfalls in Wellen: Amerika um 1800, Asien nach 1945, Afrika um 1960. Viele heutige Grenzen und Konflikte gehen auf willkürlich gezogene Kolonialgrenzen zurück.',
    examples: [
      ['1492', 'Kolumbus erreicht Amerika', 'Beginn der europäischen Kolonisierung Amerikas. [[a:entdeckungen|Artikel]]'],
      ['1884/85', 'Berliner Kongokonferenz', 'Europäer teilen Afrika auf dem Papier unter sich auf. [[a:kolonialismus-afrika|Artikel]]'],
      ['1947', 'Unabhängigkeit Indiens', 'Gandhis gewaltloser Widerstand führt zum Ende der britischen Herrschaft.'],
      ['1960', 'Afrikanisches Jahr', '17 afrikanische Staaten werden unabhängig.']
    ]
  },
  {
    id: 'seuchen', name: 'Seuchen & Katastrophen', icon: '🦠', color: '#4d7c0f',
    short: 'Pest, Pocken, Spanische Grippe: Krankheiten und Naturkatastrophen haben die Geschichte oft stärker geprägt als Feldherren.',
    pattern: 'Seuchen folgen den Wegen der Menschen – Handelsrouten, Heerzügen, Schiffen. Sie treffen besonders hart, wo Menschen dicht zusammenleben oder einem Erreger noch nie begegnet sind (Pocken in Amerika). Nach großen Epidemien ändern sich Gesellschaften: Arbeitskräfte werden knapp und teuer, alte Gewissheiten wanken, und fast immer werden Sündenböcke gesucht.',
    examples: [
      ['430 v. Chr.', 'Attische Seuche', 'Tötet in Athen u. a. Perikles.'],
      ['541', 'Justinianische Pest', 'Erste große Pestpandemie im Mittelmeerraum.'],
      ['1347–1353', 'Schwarzer Tod', 'Tötet ein Drittel der Europäer. [[a:pest|Artikel]]'],
      ['ab 1520', 'Pocken in Amerika', 'Eingeschleppte Krankheiten dezimieren die indigene Bevölkerung. [[a:entdeckungen|Artikel]]'],
      ['1918–1920', 'Spanische Grippe', 'Tötet weltweit wohl 25 bis 50 Millionen Menschen.']
    ]
  },
  {
    id: 'technik', name: 'Erfindungen & Fortschritt', icon: '⚙️', color: '#475569',
    short: 'Landwirtschaft, Schrift, Buchdruck, Dampfmaschine, Internet – Technik verändert, wie Menschen leben.',
    pattern: 'Große Erfindungen wirken selten sofort. Meist dauert es Jahrzehnte, bis eine Technik die Gesellschaft verändert – dann aber grundlegend. Medienrevolutionen sind besonders folgenreich: Die Schrift ermöglicht Staaten, der Buchdruck die Reformation, das Internet die globale Vernetzung. Wer neue Technik früh nutzt, verschiebt Machtverhältnisse.',
    examples: [
      ['um 9500 v. Chr.', 'Neolithische Revolution', 'Ackerbau und Viehzucht. [[a:neolithische-revolution|Artikel]]'],
      ['um 3300 v. Chr.', 'Schrift', 'Keilschrift in Mesopotamien.'],
      ['um 1450', 'Buchdruck', 'Gutenbergs bewegliche Lettern. [[a:buchdruck|Artikel]]'],
      ['1769', 'Dampfmaschine', 'James Watts verbesserte Maschine treibt die Industrialisierung an. [[a:industrialisierung|Artikel]]'],
      ['1989', 'World Wide Web', 'Tim Berners-Lee erfindet am CERN das WWW.']
    ]
  },
  {
    id: 'migration', name: 'Wanderung & Flucht', icon: '🧭', color: '#0369a1',
    short: 'Menschen waren immer unterwegs – aus Not, auf der Suche nach Land oder auf der Flucht vor Krieg.',
    pattern: 'Vom „Out of Africa“ des Homo sapiens über die Völkerwanderung bis zur Auswanderung nach Amerika: Wanderungsbewegungen werden durch Druckfaktoren (Hunger, Krieg, Verfolgung, Klima) und Sogfaktoren (Land, Arbeit, Freiheit) ausgelöst. Sie verändern Herkunfts- und Zielgebiete gleichermaßen – Sprachen, Küchen und Kulturen sind fast immer Mischprodukte.',
    examples: [
      ['vor ca. 70.000 Jahren', 'Out of Africa', 'Homo sapiens verlässt Afrika und besiedelt die Welt.'],
      ['375', 'Völkerwanderung', 'Der Hunnensturm setzt germanische Völker in Bewegung. [[a:voelkerwanderung|Artikel]]'],
      ['1685', 'Hugenotten', 'Rund 200.000 französische Protestanten fliehen, viele nach Brandenburg-Preußen.'],
      ['1845–1849', 'Große Hungersnot in Irland', 'Über eine Million Menschen wandern aus.'],
      ['1947', 'Teilung Indiens', 'Bis zu 15 Millionen Menschen werden zu Flüchtlingen.']
    ]
  },
  {
    id: 'einheit', name: 'Einheit & Spaltung', icon: '🧩', color: '#be185d',
    short: 'Reiche werden geteilt, Nationen vereint, Mauern gebaut und wieder eingerissen.',
    pattern: 'Ob China (Zeit der Streitenden Reiche → Einigung 221 v. Chr.), Deutschland (Kleinstaaterei → 1871 → Teilung 1949 → 1990) oder Korea: Phasen von Einheit und Zerfall wechseln sich ab. Einigungen geschehen oft „von oben“ durch Krieg (Bismarck: {{r:blut-eisen}}), seltener friedlich von unten wie 1989/90.',
    examples: [
      ['221 v. Chr.', 'Einigung Chinas', 'Qin Shihuangdi wird erster Kaiser.'],
      ['843', 'Vertrag von Verdun', 'Das Frankenreich wird geteilt – Keimzelle Frankreichs und Deutschlands. [[a:karl-der-grosse|Artikel]]'],
      ['1871', 'Deutsche Reichsgründung', 'Einigung „von oben“ in Versailles. [[a:reichsgruendung|Artikel]]'],
      ['1961', 'Berliner Mauer', '{{r:mauer-absicht}} [[a:kalter-krieg|Artikel]]'],
      ['1990', 'Deutsche Einheit', 'Am 3. Oktober tritt die DDR der Bundesrepublik bei.']
    ]
  },
  {
    id: 'wissen', name: 'Wissen, Kunst & Kultur', icon: '📚', color: '#6d28d9',
    short: 'Philosophie, Wissenschaft und Kunst: Wie Menschen die Welt zu verstehen und zu gestalten versuchten.',
    pattern: 'Kulturelle Blütezeiten entstehen oft dort, wo Wohlstand, Austausch und eine gewisse Freiheit zusammenkommen: im Athen des Perikles, im Bagdad der Abbasiden, im Florenz der Medici. Wissen geht dabei selten ganz verloren – es wandert: Griechische Texte überlebten in arabischen Übersetzungen und kehrten über Spanien und Byzanz nach Europa zurück.',
    examples: [
      ['5. Jh. v. Chr.', 'Klassisches Athen', 'Sokrates, Theater, Parthenon. [[a:griechenland|Artikel]]'],
      ['um 830', 'Haus der Weisheit', 'In Bagdad werden antike Werke ins Arabische übersetzt. [[a:islam|Artikel]]'],
      ['um 1500', 'Renaissance', 'Leonardo, Michelangelo, Raffael. [[a:renaissance|Artikel]]'],
      ['1687', 'Newtons Principia', 'Grundlage der klassischen Physik.'],
      ['1784', 'Was ist Aufklärung?', 'Kant: {{r:sapere-aude}}']
    ]
  }
];
