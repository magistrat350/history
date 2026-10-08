/* Länder-Zeitstrahlen: Nord-, Mittel- und Südamerika sowie Ozeanien */
window.HG.countries.push(
  {
    id: 'us', name: 'USA', flag: '🇺🇸', cont: 'nordamerika',
    intro: 'Von den indigenen Völkern über 13 britische Kolonien zur Supermacht: Die USA sind ein Einwanderungsland, das auf den Ideen der Aufklärung gegründet wurde – und mit dem Widerspruch der Sklaverei rang.',
    facts: ['Hauptstadt: Washington, D.C.', 'Unabhängig seit 1776', 'Älteste geltende Verfassung (1787)'],
    events: [
      { y: 1050, approx: true, t: 'Cahokia', d: 'Die größte Stadt nördlich von Mexiko mit bis zu 20.000 Einwohnern und riesigen Erdhügeln.', th: ['technik'] },
      { y: 1607, t: 'Jamestown', d: 'Erste dauerhafte englische Siedlung.', th: ['kolonialismus'] },
      { y: 1619, t: 'Erste versklavte Afrikaner in Virginia', d: '', th: ['kolonialismus'] },
      { y: 1620, t: 'Mayflower', d: '', th: ['migration', 'religion'] },
      { y: 1773, t: 'Boston Tea Party', d: '', th: ['revolution'], a: 'amerikanische-revolution' },
      { y: 1776, t: 'Unabhängigkeitserklärung', d: '', th: ['revolution', 'demokratie'], a: 'amerikanische-revolution' },
      { y: 1787, t: 'Verfassung', d: '', th: ['demokratie'], a: 'amerikanische-revolution' },
      { y: 1803, t: 'Louisiana Purchase', d: 'Napoleon verkauft ein riesiges Gebiet – die USA verdoppeln ihre Fläche.', th: ['imperien'], a: 'napoleon' },
      { y: 1830, t: 'Indian Removal Act', d: 'Vertreibung der Ureinwohner; „Pfad der Tränen“ der Cherokee.', th: ['migration', 'kolonialismus'] },
      { y: 1848, t: 'Goldrausch in Kalifornien', d: '', th: ['migration', 'handel'] },
      { y: 1861, end: 1865, t: 'Bürgerkrieg', d: 'Lincoln: Ende der Sklaverei (13. Zusatzartikel). 1865 wird Lincoln ermordet.', th: ['krieg', 'einheit', 'demokratie'] },
      { y: 1869, t: 'Transkontinentale Eisenbahn', d: '', th: ['technik'] },
      { y: 1892, end: 1954, t: 'Ellis Island', d: 'Rund 12 Millionen Einwanderer kommen hier an, viele aus Deutschland, Irland und Italien.', th: ['migration'] },
      { y: 1903, t: 'Erster Motorflug', d: 'Die Brüder Wright in Kitty Hawk.', th: ['technik'] },
      { y: 1917, t: 'Kriegseintritt', d: '', th: ['krieg'], a: 'erster-weltkrieg' },
      { y: 1920, t: 'Frauenwahlrecht', d: '19. Zusatzartikel.', th: ['demokratie'] },
      { y: 1929, t: 'Börsenkrach', d: 'Great Depression; Roosevelt antwortet mit dem New Deal.', th: ['handel'], a: 'weimar-ns' },
      { y: 1941, t: 'Pearl Harbor', d: '', th: ['krieg'], a: 'zweiter-weltkrieg' },
      { y: 1945, t: 'Atombombe', d: 'Manhattan-Projekt; Hiroshima und Nagasaki.', th: ['technik', 'krieg'], a: 'zweiter-weltkrieg' },
      { y: 1955, t: 'Rosa Parks', d: 'Busboykott von Montgomery.', th: ['demokratie'] },
      { y: 1963, t: '„I Have a Dream“ / Kennedy ermordet', d: '', th: ['demokratie'], r: 'traum' },
      { y: 1964, t: 'Civil Rights Act', d: 'Verbot der Rassendiskriminierung.', th: ['demokratie'] },
      { y: 1969, t: 'Mondlandung', d: '', th: ['technik'], a: 'kalter-krieg', r: 'kleiner-schritt' },
      { y: 1974, t: 'Watergate', d: 'Präsident Nixon tritt zurück.', th: ['demokratie'] },
      { y: 2001, t: '11. September', d: '', th: ['krieg'] },
      { y: 2009, t: 'Erster schwarzer Präsident', d: 'Barack Obama.', th: ['demokratie'] }
    ]
  },
  {
    id: 'ca', name: 'Kanada', flag: '🇨🇦', cont: 'nordamerika',
    intro: 'Das zweitgrößte Land der Erde – Heimat der First Nations und Inuit, geprägt vom Wettstreit zwischen Frankreich und Großbritannien.',
    facts: ['Hauptstadt: Ottawa', 'Selbstständig seit 1867', 'Volle Souveränität: 1982'],
    events: [
      { y: 1000, approx: true, t: 'Wikinger in Neufundland', d: 'L’Anse aux Meadows.', th: ['migration'], a: 'wikinger' },
      { y: 1534, t: 'Jacques Cartier', d: 'Der Franzose erkundet den Sankt-Lorenz-Strom.', th: ['kolonialismus'] },
      { y: 1608, t: 'Québec', d: 'Samuel de Champlain gründet die Stadt.', th: ['kolonialismus'] },
      { y: 1670, t: 'Hudson’s Bay Company', d: 'Pelzhandel – eines der ältesten Unternehmen der Welt.', th: ['handel'] },
      { y: 1759, t: 'Schlacht auf der Abraham-Ebene', d: 'Großbritannien erobert Neufrankreich.', th: ['krieg', 'kolonialismus'] },
      { y: 1867, t: 'Dominion of Canada', d: '', th: ['einheit'] },
      { y: 1885, t: 'Canadian Pacific Railway', d: 'Von Küste zu Küste.', th: ['technik'] },
      { y: 1982, t: 'Constitution Act', d: 'Vollständige verfassungsrechtliche Unabhängigkeit.', th: ['demokratie'] },
      { y: 1999, t: 'Nunavut', d: 'Ein eigenes Territorium für die Inuit.', th: ['demokratie'] }
    ]
  },
  {
    id: 'mx', name: 'Mexiko', flag: '🇲🇽', cont: 'nordamerika',
    intro: 'Heimat der Olmeken, Maya und Azteken, 300 Jahre spanische Kolonie, und ein Land, das 1910 die erste große soziale Revolution des 20. Jahrhunderts erlebte.',
    facts: ['Hauptstadt: Mexiko-Stadt', 'Unabhängig seit 1821'],
    events: [
      { y: -7000, approx: true, t: 'Mais', d: 'Domestizierung des Mais aus dem Wildgras Teosinte.', th: ['technik'], a: 'neolithische-revolution' },
      { y: -1200, approx: true, t: 'Olmeken', d: '', th: ['wissen'] },
      { y: 100, approx: true, t: 'Teotihuacán', d: 'Sonnenpyramide; eine der größten Städte der Welt um 500.', th: ['religion'] },
      { y: 600, approx: true, t: 'Maya-Blüte', d: 'Palenque und später Chichén Itzá.', th: ['wissen'] },
      { y: 1325, t: 'Tenochtitlan', d: '', th: ['imperien'] },
      { y: 1519, t: 'Cortés landet', d: '', th: ['kolonialismus'], a: 'entdeckungen' },
      { y: 1521, t: 'Fall Tenochtitlans', d: '', th: ['kolonialismus'], a: 'entdeckungen' },
      { y: 1531, t: 'Jungfrau von Guadalupe', d: 'Marienerscheinung – bis heute Nationalsymbol.', th: ['religion'] },
      { y: 1810, t: 'Grito de Dolores', d: 'Priester Hidalgo ruft zum Aufstand.', th: ['revolution'] },
      { y: 1846, end: 1848, t: 'Krieg mit den USA', d: 'Mexiko verliert die Hälfte seines Territoriums.', th: ['krieg'] },
      { y: 1864, end: 1867, t: 'Kaiser Maximilian', d: 'Ein Habsburger wird von Napoleon III. eingesetzt und erschossen.', th: ['kolonialismus'] },
      { y: 1910, end: 1920, t: 'Mexikanische Revolution', d: '', th: ['revolution'] },
      { y: 1968, t: 'Massaker von Tlatelolco', d: 'Kurz vor den Olympischen Spielen.', th: ['demokratie'] }
    ]
  },
  {
    id: 'cu', name: 'Kuba', flag: '🇨🇺', cont: 'nordamerika',
    intro: 'Die „Perle der Antillen“: Zuckerinsel, letzte große spanische Kolonie in Amerika, sozialistischer Staat und 1962 Auslöser der gefährlichsten Krise des Kalten Krieges.',
    facts: ['Hauptstadt: Havanna', 'Unabhängig seit 1902'],
    events: [
      { y: 1492, t: 'Kolumbus landet', d: '', th: ['kolonialismus'], a: 'entdeckungen' },
      { y: 1511, t: 'Spanische Eroberung', d: 'Der Taíno-Häuptling Hatuey wird verbrannt.', th: ['kolonialismus'] },
      { y: 1886, t: 'Ende der Sklaverei', d: '', th: ['demokratie'] },
      { y: 1898, t: 'Spanisch-Amerikanischer Krieg', d: 'Die USA übernehmen die Kontrolle; Guantánamo.', th: ['kolonialismus', 'krieg'] },
      { y: 1959, t: 'Revolution', d: 'Fidel Castro und Che Guevara stürzen Batista.', th: ['revolution'] },
      { y: 1961, t: 'Schweinebucht', d: 'Eine US-gestützte Invasion scheitert.', th: ['krieg'] },
      { y: 1962, t: 'Kubakrise', d: '', th: ['krieg'], a: 'kalter-krieg' },
      { y: 2016, t: 'Tod Fidel Castros', d: '', th: ['revolution'] }
    ]
  },
  {
    id: 'ht', name: 'Haiti', flag: '🇭🇹', cont: 'nordamerika',
    intro: 'Die einst reichste Kolonie der Welt erkämpfte sich als einziges Land durch einen Sklavenaufstand die Freiheit – und musste dafür einen hohen Preis zahlen.',
    facts: ['Hauptstadt: Port-au-Prince', 'Unabhängig seit 1804'],
    events: [
      { y: 1492, t: 'Kolumbus auf Hispaniola', d: 'Sein Flaggschiff Santa María läuft hier auf Grund.', th: ['kolonialismus'], a: 'entdeckungen' },
      { y: 1697, t: 'Saint-Domingue', d: 'Französische Zuckerkolonie mit fast 500.000 Versklavten.', th: ['kolonialismus'] },
      { y: 1791, t: 'Sklavenaufstand', d: 'Unter Toussaint Louverture.', th: ['revolution'] },
      { y: 1804, t: 'Unabhängigkeit', d: 'Erste schwarze Republik der Welt.', th: ['revolution', 'kolonialismus'] },
      { y: 1825, t: 'Die „Unabhängigkeitsschuld“', d: 'Frankreich erzwingt 150 Millionen Francs „Entschädigung“ – Haiti zahlt bis 1947.', th: ['kolonialismus'] },
      { y: 2010, t: 'Erdbeben', d: 'Über 200.000 Tote.', th: ['seuchen'] }
    ]
  },
  {
    id: 'br', name: 'Brasilien', flag: '🇧🇷', cont: 'suedamerika',
    intro: 'Das größte Land Südamerikas und das einzige portugiesischsprachige – einst Kaiserreich, Zielland von Millionen Versklavten und Einwanderern.',
    facts: ['Hauptstadt: Brasília', 'Unabhängig seit 1822', 'Republik seit 1889'],
    events: [
      { y: 1500, t: 'Cabral landet', d: '', th: ['kolonialismus'], a: 'entdeckungen' },
      { y: 1530, approx: true, t: 'Zuckerplantagen', d: 'Rund 40 % aller nach Amerika verschleppten Afrikaner kommen nach Brasilien.', th: ['kolonialismus'] },
      { y: 1695, t: 'Goldrausch in Minas Gerais', d: '', th: ['handel'] },
      { y: 1808, t: 'Portugiesischer Hof in Rio', d: '', th: ['migration'], a: 'napoleon' },
      { y: 1822, t: 'Unabhängigkeit', d: '„Ich bleibe!“ – Pedro I. wird Kaiser.', th: ['kolonialismus'] },
      { y: 1824, t: 'Deutsche Einwanderer', d: 'Gründung von São Leopoldo; später Blumenau und Pomerode.', th: ['migration'] },
      { y: 1888, t: 'Lei Áurea', d: 'Abschaffung der Sklaverei.', th: ['demokratie'] },
      { y: 1889, t: 'Republik', d: '', th: ['revolution'] },
      { y: 1960, t: 'Brasília', d: 'Die neue Hauptstadt im Landesinneren.', th: ['technik'] },
      { y: 1964, end: 1985, t: 'Militärdiktatur', d: '', th: ['demokratie'] },
      { y: 2014, t: '1:7', d: 'Deutschland besiegt Brasilien im WM-Halbfinale – eine nationale Tragödie, das „Mineirazo“.', th: ['wissen'] }
    ]
  },
  {
    id: 'ar', name: 'Argentinien', flag: '🇦🇷', cont: 'suedamerika',
    intro: 'Ein Einwanderungsland am Río de la Plata – Heimat des Tangos, Perón und Evitas, aber auch einer brutalen Militärdiktatur.',
    facts: ['Hauptstadt: Buenos Aires', 'Unabhängig seit 1816'],
    events: [
      { y: 1536, t: 'Gründung von Buenos Aires', d: '1580 neu gegründet.', th: ['kolonialismus'] },
      { y: 1816, t: 'Unabhängigkeit', d: 'Erklärung von Tucumán.', th: ['kolonialismus'] },
      { y: 1817, t: 'San Martín überquert die Anden', d: 'Befreiung Chiles und Perus.', th: ['krieg'] },
      { y: 1880, end: 1930, t: 'Masseneinwanderung', d: 'Millionen Italiener und Spanier.', th: ['migration'] },
      { y: 1946, t: 'Juan Perón', d: 'Mit seiner Frau Evita.', th: ['demokratie'] },
      { y: 1976, end: 1983, t: 'Militärdiktatur', d: '„Mütter der Plaza de Mayo“.', th: ['demokratie'] },
      { y: 1982, t: 'Falklandkrieg', d: '', th: ['krieg'] },
      { y: 2013, t: 'Papst Franziskus', d: 'Erster Papst aus Amerika.', th: ['religion'] }
    ]
  },
  {
    id: 'pe', name: 'Peru', flag: '🇵🇪', cont: 'suedamerika',
    intro: 'Hier entstand die älteste Stadt Amerikas, hier lag das Zentrum des Inkareiches – und hier entdeckte die Welt 1911 Machu Picchu.',
    facts: ['Hauptstadt: Lima', 'Unabhängig seit 1821'],
    events: [
      { y: -2600, approx: true, t: 'Caral', d: '', th: ['wissen'] },
      { y: -500, approx: true, t: 'Nazca', d: '', th: ['religion'] },
      { y: 1438, t: 'Pachacútec', d: 'Expansion des Inkareiches von Cusco aus.', th: ['imperien'] },
      { y: 1450, approx: true, t: 'Machu Picchu', d: 'Bergresidenz des Inka-Herrschers.', th: ['wissen'] },
      { y: 1532, t: 'Pizarro nimmt Atahualpa gefangen', d: '', th: ['kolonialismus'], a: 'entdeckungen' },
      { y: 1535, t: 'Gründung Limas', d: 'Hauptstadt des Vizekönigreichs.', th: ['kolonialismus'] },
      { y: 1780, t: 'Túpac Amaru II.', d: '', th: ['revolution'] },
      { y: 1821, t: 'Unabhängigkeit', d: '', th: ['kolonialismus'] },
      { y: 1911, t: 'Machu Picchu „wiederentdeckt“', d: 'Hiram Bingham macht es weltbekannt.', th: ['wissen'] }
    ]
  },
  {
    id: 'cl', name: 'Chile', flag: '🇨🇱', cont: 'suedamerika',
    intro: 'Ein schmaler Streifen zwischen Anden und Pazifik, über 4.000 Kilometer lang – mit einer der ältesten Siedlungen Amerikas und einer bewegten politischen Geschichte.',
    facts: ['Hauptstadt: Santiago', 'Unabhängig seit 1818'],
    events: [
      { y: -12500, yd: 'vor ca. 14.500 Jahren', t: 'Monte Verde', d: '', th: ['migration'] },
      { y: 1541, t: 'Gründung Santiagos', d: 'Die Mapuche leisten über 300 Jahre Widerstand.', th: ['kolonialismus'] },
      { y: 1818, t: 'Unabhängigkeit', d: 'Bernardo O’Higgins.', th: ['kolonialismus'] },
      { y: 1879, end: 1884, t: 'Salpeterkrieg', d: 'Gegen Peru und Bolivien – Bolivien verliert seinen Meerzugang.', th: ['krieg'] },
      { y: 1960, t: 'Valdivia-Erdbeben', d: 'Das stärkste je gemessene Erdbeben (Magnitude 9,5).', th: ['seuchen'] },
      { y: 1973, t: 'Pinochet-Putsch', d: 'Am 11. September.', th: ['demokratie'] },
      { y: 1988, t: 'Plebiszit', d: 'Die Chilenen stimmen gegen Pinochet.', th: ['demokratie'] },
      { y: 2010, t: 'Rettung der 33 Bergleute', d: 'Nach 69 Tagen unter Tage.', th: ['technik'] }
    ]
  },
  {
    id: 'co', name: 'Kolumbien', flag: '🇨🇴', cont: 'suedamerika',
    intro: 'Das Land des El-Dorado-Mythos, Simón Bolívars Großkolumbien und Gabriel García Márquez’ „Hundert Jahre Einsamkeit“.',
    facts: ['Hauptstadt: Bogotá', 'Unabhängig seit 1810/1819'],
    events: [
      { y: 1000, approx: true, t: 'Muisca und El Dorado', d: 'Ein Häuptling, mit Goldstaub bedeckt, opferte Gold im Guatavita-See.', th: ['religion'] },
      { y: 1538, t: 'Gründung Bogotás', d: '', th: ['kolonialismus'] },
      { y: 1819, t: 'Großkolumbien', d: 'Bolívar siegt bei Boyacá.', th: ['revolution', 'einheit'] },
      { y: 1903, t: 'Abspaltung Panamas', d: 'Mit US-Unterstützung – wegen des Kanals.', th: ['einheit'] },
      { y: 1948, end: 1958, t: 'La Violencia', d: 'Bürgerkrieg zwischen Liberalen und Konservativen.', th: ['krieg'] },
      { y: 1982, t: 'Nobelpreis für García Márquez', d: '', th: ['wissen'] },
      { y: 2016, t: 'Frieden mit der FARC', d: 'Nach über 50 Jahren Konflikt.', th: ['krieg'] }
    ]
  },
  {
    id: 'au', name: 'Australien', flag: '🇦🇺', cont: 'ozeanien',
    intro: 'Seit über 60.000 Jahren Heimat der Aborigines und Torres-Strait-Insulaner – 1788 britische Sträflingskolonie, heute ein Einwanderungsland.',
    facts: ['Hauptstadt: Canberra', 'Bundesstaat seit 1901'],
    events: [
      { y: -65000, yd: 'vor ca. 65.000 Jahren', t: 'Erste Menschen', d: '', th: ['migration'] },
      { y: 1606, t: 'Willem Janszoon', d: 'Erster dokumentierter Europäer in Australien.', th: ['kolonialismus'] },
      { y: 1770, t: 'James Cook', d: 'Botany Bay.', th: ['kolonialismus'] },
      { y: 1788, t: 'First Fleet', d: 'Gründung von Sydney am 26. Januar – heute „Australia Day“, für viele Aborigines „Invasion Day“.', th: ['kolonialismus', 'migration'] },
      { y: 1851, t: 'Goldrausch', d: '', th: ['migration'] },
      { y: 1901, t: 'Commonwealth of Australia', d: 'Gleichzeitig „White Australia Policy“.', th: ['einheit'] },
      { y: 1915, t: 'Gallipoli', d: '', th: ['krieg'], a: 'erster-weltkrieg' },
      { y: 1967, t: 'Referendum', d: 'Aborigines werden bei Volkszählungen berücksichtigt.', th: ['demokratie'] },
      { y: 1973, t: 'Opernhaus Sydney', d: '', th: ['wissen'] },
      { y: 1992, t: 'Mabo-Urteil', d: 'Anerkennung indigener Landrechte.', th: ['kolonialismus'] }
    ]
  },
  {
    id: 'nz', name: 'Neuseeland', flag: '🇳🇿', cont: 'ozeanien',
    intro: 'Aotearoa – die letzte große Landmasse, die Menschen besiedelten, und Vorreiterin beim Frauenwahlrecht.',
    facts: ['Hauptstadt: Wellington', 'Vertrag von Waitangi: 1840'],
    events: [
      { y: 1280, approx: true, t: 'Ankunft der Māori', d: '', th: ['migration'] },
      { y: 1642, t: 'Abel Tasman', d: '', th: ['kolonialismus'] },
      { y: 1769, t: 'James Cook', d: '', th: ['kolonialismus'] },
      { y: 1840, t: 'Vertrag von Waitangi', d: '', th: ['kolonialismus'] },
      { y: 1845, end: 1872, t: 'Neuseelandkriege', d: 'Konflikte um Land zwischen Māori und Kolonialregierung.', th: ['krieg', 'kolonialismus'] },
      { y: 1893, t: 'Frauenwahlrecht', d: 'Als erstes Land der Welt.', th: ['demokratie'] },
      { y: 1953, t: 'Mount Everest', d: 'Edmund Hillary und Tenzing Norgay erreichen den Gipfel.', th: ['wissen'] },
      { y: 1987, t: 'Atomwaffenfreie Zone', d: '', th: ['krieg'] }
    ]
  }
);
