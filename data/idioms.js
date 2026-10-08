/* Redewendungen, geflügelte Worte, Kalauer, Wortgeschichten und Eselsbrücken mit historischem Hintergrund.
 * kind: redewendung | zitat | kalauer | wort | merkspruch
 * y: ungefähres Bezugsjahr (für „Zur gleichen Zeit“), a: passender Artikel, th: Themen */
window.HG.idioms = [
  // ---------- Kalauer & Anspielungen ----------
  {
    id: 'nagel', kind: 'kalauer', phrase: 'Nagel mich nicht darauf fest!',
    meaning: 'Ich bin mir nicht ganz sicher – leg mich nicht darauf fest.',
    origin: 'Eine ganz normale Redewendung – die aber seit Generationen augenzwinkernd Jesus von Nazareth in den Mund gelegt wird, der bekanntlich ans Kreuz genagelt wurde. Der Witz funktioniert, weil fast jeder die Kreuzigung um das Jahr 30 kennt. Verwandt: „Ich häng mich da nicht ans Kreuz dafür.“',
    when: 'um 30 n. Chr.', y: 30, a: 'jesus', th: ['religion']
  },
  {
    id: 'kopf-verlieren', kind: 'kalauer', phrase: 'Den Kopf verlieren',
    meaning: 'Die Fassung verlieren, unüberlegt handeln.',
    origin: 'Die Redewendung ist älter, wird aber gern mit Ludwig XVI. und Marie Antoinette verknüpft, die 1793 unter der Guillotine buchstäblich ihren Kopf verloren. Wer in der Französischen Revolution „kopflos“ handelte, war oft bald auch ohne Kopf.',
    when: '1793', y: 1793, a: 'franzoesische-revolution', th: ['revolution']
  },
  {
    id: 'napoleon-klein', kind: 'kalauer', phrase: 'Klein, aber oho!',
    meaning: 'Unscheinbar, aber leistungsfähig.',
    origin: 'Gern auf Napoleon gemünzt – zu Unrecht, was die Größe angeht: Er maß etwa 1,69 m und war damit für seine Zeit durchschnittlich. Der Mythos entstand durch die Verwechslung französischer und englischer Zoll („5 pieds 2 pouces“) und britische Karikaturen, die ihn als „Little Boney“ verspotteten. Der „Napoleon-Komplex“ ist also ein Fall von Propaganda.',
    when: '1800er', y: 1804, a: 'napoleon', th: ['krieg']
  },
  {
    id: 'heisses-pflaster', kind: 'kalauer', phrase: 'Ein heißes Pflaster',
    meaning: 'Ein gefährlicher Ort.',
    origin: 'Die Wendung stammt aus dem 19. Jahrhundert, passt aber nirgends so gut wie auf Pompeji: Im Jahr 79 begrub der Vesuv die Stadt unter glühender Asche und pyroklastischen Strömen. Gerade deshalb ist sie heute eine der besterhaltenen Städte der Antike.',
    when: '79 n. Chr.', y: 79, a: 'rom', th: ['seuchen']
  },
  {
    id: 'schiefgehen', kind: 'kalauer', phrase: 'Das kann ja nur schiefgehen',
    meaning: 'Das wird bestimmt misslingen.',
    origin: 'Gern als Pisa-Witz erzählt: Der Glockenturm begann sich schon kurz nach Baubeginn 1173 zu neigen, weil der Boden zu weich war. Die Bauarbeiten zogen sich fast 200 Jahre hin – schiefgegangen ist er trotzdem nicht ganz: Seit einer Sanierung um 2000 steht er stabil.',
    when: '1173', y: 1173, th: ['technik']
  },
  {
    id: 'gut-ding', kind: 'kalauer', phrase: 'Gut Ding will Weile haben',
    meaning: 'Was gut werden soll, braucht Zeit.',
    origin: 'Ein altes Sprichwort und das inoffizielle Motto des Kölner Doms: Baubeginn 1248, dann rund 300 Jahre Baustopp (der Kran blieb als Wahrzeichen auf dem Turmstumpf stehen), Fertigstellung erst 1880. Dazu passt der Kölner Spruch: „Wenn der Dom fertig ist, geht die Welt unter.“',
    when: '1248–1880', y: 1248, th: ['wissen', 'religion']
  },
  {
    id: 'mauerbluemchen', kind: 'kalauer', phrase: 'Ein Mauerblümchen sein',
    meaning: 'Unauffällig, übersehen werden – ursprünglich beim Tanz nicht aufgefordert werden.',
    origin: 'Der Ausdruck stammt aus dem 19. Jahrhundert (Pflanzen, die an Mauern wachsen). Nach 1961 bekam er in Berlin einen bitteren Beiklang: Im Todesstreifen der Berliner Mauer wucherten tatsächlich Wildblumen – und Kaninchen lebten dort so ungestört wie nirgends sonst in der Stadt.',
    when: '1961–1989', y: 1961, a: 'kalter-krieg', th: ['einheit']
  },

  // ---------- Antike ----------
  {
    id: 'rubikon', kind: 'redewendung', phrase: 'Den Rubikon überschreiten',
    meaning: 'Eine unumkehrbare Entscheidung treffen.',
    origin: 'Der Rubikon war ein kleiner Grenzfluss zwischen der Provinz Gallia cisalpina und Italien. Wer ihn mit Truppen überschritt, brach das Gesetz. Als Gaius Julius Caesar dies im Januar 49 v. Chr. tat, begann der Bürgerkrieg gegen Pompeius – es gab kein Zurück mehr.',
    when: '49 v. Chr.', y: -49, a: 'rom', th: ['krieg', 'imperien']
  },
  {
    id: 'wuerfel', kind: 'zitat', phrase: 'Die Würfel sind gefallen',
    meaning: 'Die Entscheidung ist getroffen.',
    origin: '„Alea iacta est“ soll Caesar beim Überschreiten des Rubikon gesagt haben – laut Plutarch allerdings auf Griechisch, als Zitat des Komödiendichters Menander, und eher im Sinne von „Der Würfel soll geworfen sein!“',
    when: '49 v. Chr.', y: -49, a: 'rom', th: ['krieg']
  },
  {
    id: 'veni-vidi-vici', kind: 'zitat', phrase: 'Ich kam, sah und siegte',
    meaning: 'Etwas mühelos und schnell erreichen.',
    origin: '„Veni, vidi, vici“ – so knapp meldete Caesar 47 v. Chr. dem Senat seinen Sieg über König Pharnakes II. bei Zela (heutige Türkei). Der Feldzug hatte nur fünf Tage gedauert. Ein Meisterstück der Selbst-PR.',
    when: '47 v. Chr.', y: -47, a: 'rom', th: ['krieg']
  },
  {
    id: 'brutus', kind: 'zitat', phrase: 'Auch du, mein Sohn Brutus?',
    meaning: 'Ausruf, wenn man von einem Vertrauten verraten wird.',
    origin: 'Caesar wurde an den Iden des März (15. März) 44 v. Chr. von Senatoren erstochen, unter ihnen sein Schützling Marcus Brutus. Ob er die Worte sagte, ist unsicher: Sueton überliefert „Kai sy, teknon?“ („Auch du, Kind?“), berühmt wurde die Version „Et tu, Brute?“ durch Shakespeare.',
    when: '44 v. Chr.', y: -44, a: 'rom', th: ['imperien']
  },
  {
    id: 'pyrrhussieg', kind: 'redewendung', phrase: 'Ein Pyrrhussieg',
    meaning: 'Ein Sieg, der so teuer erkauft ist, dass er einer Niederlage gleichkommt.',
    origin: 'König Pyrrhos von Epirus besiegte die Römer 280 und 279 v. Chr., verlor dabei aber so viele erfahrene Soldaten, dass er gesagt haben soll: „Noch so ein Sieg, und wir sind verloren.“',
    when: '279 v. Chr.', y: -279, a: 'rom', th: ['krieg']
  },
  {
    id: 'hannibal', kind: 'zitat', phrase: 'Hannibal ante portas!',
    meaning: 'Gefahr im Verzug! (heute oft scherzhaft, wenn unangenehmer Besuch naht)',
    origin: 'Der karthagische Feldherr Hannibal überquerte 218 v. Chr. mit Kriegselefanten die Alpen und brachte Rom an den Rand der Niederlage. Der Schreckensruf „Hannibal vor den Toren!“ wurde sprichwörtlich, obwohl Hannibal Rom nie angriff.',
    when: '218–211 v. Chr.', y: -211, a: 'rom', th: ['krieg']
  },
  {
    id: 'ceterum-censeo', kind: 'zitat', phrase: 'Im Übrigen bin ich der Meinung, dass Karthago zerstört werden muss',
    meaning: 'Eine Forderung immer und immer wieder vorbringen.',
    origin: 'Der römische Senator Cato der Ältere soll jede Rede – egal zu welchem Thema – mit „Ceterum censeo Carthaginem esse delendam“ beendet haben. 146 v. Chr. wurde Karthago tatsächlich zerstört.',
    when: '146 v. Chr.', y: -150, a: 'rom', th: ['krieg', 'imperien']
  },
  {
    id: 'brot-spiele', kind: 'zitat', phrase: 'Brot und Spiele',
    meaning: 'Das Volk mit Essen und Unterhaltung ruhigstellen.',
    origin: 'Der Satiriker Juvenal spottete um 100 n. Chr., das römische Volk wünsche sich nur noch zwei Dinge: „panem et circenses“. Tatsächlich verteilten Kaiser kostenloses Getreide und veranstalteten gewaltige Spiele im Kolosseum (eröffnet 80 n. Chr.).',
    when: 'um 100 n. Chr.', y: 100, a: 'rom', th: ['imperien']
  },
  {
    id: 'alle-wege', kind: 'redewendung', phrase: 'Alle Wege führen nach Rom',
    meaning: 'Es gibt viele Möglichkeiten, ein Ziel zu erreichen.',
    origin: 'Das Römische Reich besaß ein Straßennetz von über 80.000 km befestigten Straßen. Auf dem Forum Romanum stand das „Milliarium Aureum“, ein vergoldeter Meilenstein, von dem aus symbolisch alle Entfernungen gemessen wurden.',
    when: '20 v. Chr.', y: -20, a: 'rom', th: ['imperien', 'handel']
  },
  {
    id: 'rom-tag', kind: 'redewendung', phrase: 'Rom wurde nicht an einem Tag erbaut',
    meaning: 'Große Dinge brauchen Zeit.',
    origin: 'Das Sprichwort ist mittelalterlich – es taucht um 1190 in einer altfranzösischen Sammlung auf („Rome ne fu pas faite toute en un jour“). Es spielt auf die tausendjährige Entwicklung Roms vom Dorf am Tiber zur Weltmetropole an.',
    when: 'um 1190', y: 1190, a: 'rom', th: ['imperien']
  },
  {
    id: 'gordischer-knoten', kind: 'redewendung', phrase: 'Den Gordischen Knoten durchschlagen',
    meaning: 'Ein schwieriges Problem mit einem kühnen Schritt lösen.',
    origin: 'In Gordion (Phrygien) hing ein kunstvoll verknoteter Streitwagen. Wer den Knoten löste, sollte über Asien herrschen. Alexander der Große soll ihn 333 v. Chr. einfach mit dem Schwert durchgehauen haben – und eroberte danach tatsächlich das Perserreich.',
    when: '333 v. Chr.', y: -333, a: 'alexander', th: ['imperien']
  },
  {
    id: 'damokles', kind: 'redewendung', phrase: 'Ein Damoklesschwert',
    meaning: 'Eine ständig drohende Gefahr.',
    origin: 'Der Höfling Damokles pries das Glück des Tyrannen Dionysios von Syrakus (4. Jh. v. Chr.). Dionysios ließ ihn daraufhin an seiner Tafel speisen – unter einem Schwert, das an einem einzigen Rosshaar hing. So zeigte er, wie bedroht das Leben eines Herrschers ist.',
    when: '4. Jh. v. Chr.', y: -380, a: 'griechenland', th: ['imperien']
  },
  {
    id: 'eulen-athen', kind: 'redewendung', phrase: 'Eulen nach Athen tragen',
    meaning: 'Etwas Überflüssiges tun.',
    origin: 'Die Eule war das Symbol der Stadtgöttin Athene und prangte auf den Athener Silbermünzen („Eulen“). In Athen gab es also Eulen – lebendige wie geprägte – im Überfluss. Die Wendung findet sich schon beim Komödiendichter Aristophanes (414 v. Chr.).',
    when: '414 v. Chr.', y: -414, a: 'griechenland', th: ['handel', 'wissen']
  },
  {
    id: 'trojanisches-pferd', kind: 'redewendung', phrase: 'Ein Trojanisches Pferd',
    meaning: 'Eine getarnte Falle; heute auch Schadsoftware („Trojaner“).',
    origin: 'Laut der griechischen Sage beendeten die Griechen den zehnjährigen Krieg um Troja mit einer List: Sie versteckten Krieger in einem riesigen Holzpferd, das die Trojaner selbst in die Stadt zogen. Troja existierte wirklich (Hisarlık, Türkei) – ob der Krieg so stattfand, ist offen.',
    when: 'um 1200 v. Chr.', y: -1200, a: 'griechenland', th: ['krieg']
  },
  {
    id: 'achillesferse', kind: 'redewendung', phrase: 'Die Achillesferse',
    meaning: 'Die einzige, aber entscheidende Schwachstelle.',
    origin: 'Die Mutter des Helden Achilleus tauchte ihn als Baby in den Unterweltfluss Styx, um ihn unverwundbar zu machen – nur die Ferse, an der sie ihn festhielt, blieb trocken. Ein Pfeil des Paris traf ihn vor Troja genau dort.',
    when: 'Sage', y: -1200, a: 'griechenland', th: ['krieg']
  },
  {
    id: 'drakonisch', kind: 'redewendung', phrase: 'Drakonische Strafen',
    meaning: 'Extrem harte Strafen.',
    origin: 'Drakon schrieb um 621 v. Chr. als Erster die Gesetze Athens auf. Fast jedes Vergehen wurde mit dem Tod bestraft – angeblich sogar Obstdiebstahl. Man sagte, seine Gesetze seien „mit Blut statt mit Tinte“ geschrieben. Trotzdem ein Fortschritt: Das Recht war erstmals für alle nachlesbar.',
    when: '621 v. Chr.', y: -621, a: 'griechenland', th: ['demokratie']
  },
  {
    id: 'spartanisch', kind: 'redewendung', phrase: 'Spartanisch leben',
    meaning: 'Sehr einfach, karg und anspruchslos leben.',
    origin: 'Die Bürger Spartas wurden ab dem 7. Lebensjahr in der „Agoge“ zu Kriegern erzogen: Hunger, Kälte, Härte. Luxus war verpönt, als Geld dienten unhandliche Eisenstäbe. Berühmt ist auch der „lakonische“ (= spartanisch knappe) Stil: Auf die Drohung „Wenn ich Lakonien erobere, werdet ihr vernichtet“ antworteten die Spartaner nur: „Wenn.“',
    when: '7.–4. Jh. v. Chr.', y: -480, a: 'griechenland', th: ['krieg']
  },
  {
    id: 'marathon', kind: 'wort', phrase: 'Marathon',
    meaning: 'Langstreckenlauf über 42,195 km; allgemein: etwas sehr Langwieriges.',
    origin: '490 v. Chr. besiegten die Athener die Perser bei Marathon. Der Legende nach lief ein Bote nach Athen, rief „Wir haben gesiegt!“ und brach tot zusammen. Die Geschichte ist erst Jahrhunderte später belegt – inspirierte aber 1896 den Lauf bei den ersten modernen Olympischen Spielen.',
    when: '490 v. Chr.', y: -490, a: 'griechenland', th: ['krieg']
  },
  {
    id: 'kroesus', kind: 'redewendung', phrase: 'Reich wie Krösus',
    meaning: 'Unermesslich reich.',
    origin: 'Kroisos war um 560–546 v. Chr. König von Lydien (heutige Westtürkei), wo die ersten Münzen der Welt geprägt wurden. Das Orakel von Delphi sagte ihm: „Wenn du den Halys überschreitest, wirst du ein großes Reich zerstören.“ Er tat es – und zerstörte sein eigenes.',
    when: '546 v. Chr.', y: -546, th: ['handel', 'imperien']
  },
  {
    id: 'mausoleum', kind: 'wort', phrase: 'Mausoleum',
    meaning: 'Prachtvolles Grabmal.',
    origin: 'Benannt nach Maussolos, einem persischen Satrapen in Karien. Sein gewaltiges Grabmal in Halikarnassos (heute Bodrum) um 350 v. Chr. zählte zu den Sieben Weltwundern der Antike.',
    when: 'um 350 v. Chr.', y: -350, th: ['wissen']
  },
  {
    id: 'kaiser', kind: 'wort', phrase: 'Kaiser & Zar',
    meaning: 'Titel des höchsten Herrschers.',
    origin: 'Beide Wörter stammen vom Familiennamen Caesar. Weil die römischen Herrscher sich nach Julius Caesar nannten, wurde der Name zum Titel – im Deutschen zum „Kaiser“, im Russischen und Bulgarischen zum „Zar“. Ein Familienname, der 2000 Jahre lang regierte.',
    when: '44 v. Chr. – 1918', y: -27, a: 'rom', th: ['imperien']
  },
  {
    id: 'auge-um-auge', kind: 'redewendung', phrase: 'Auge um Auge, Zahn um Zahn',
    meaning: 'Vergeltung mit Gleichem.',
    origin: 'Das Prinzip findet sich schon im Codex Hammurapi (Babylon, um 1754 v. Chr.) und später in der Tora. Ursprünglich war es eine Begrenzung der Rache: Nicht mehr als der erlittene Schaden durfte vergolten werden – oft durch Geldbußen statt durch Verstümmelung.',
    when: 'um 1754 v. Chr.', y: -1754, th: ['demokratie']
  },
  {
    id: 'babylon', kind: 'redewendung', phrase: 'Babylonisches Sprachgewirr',
    meaning: 'Durcheinander vieler Sprachen.',
    origin: 'Nach der Bibel wollten die Menschen in Babel einen Turm bis zum Himmel bauen; Gott verwirrte daraufhin ihre Sprache. Vorbild war wohl der Etemenanki, ein riesiger Stufentempel (Zikkurat) in Babylon – einer echten Weltstadt mit vielen Völkern.',
    when: 'um 600 v. Chr.', y: -600, th: ['religion', 'migration']
  },
  {
    id: 'salomonisch', kind: 'redewendung', phrase: 'Ein salomonisches Urteil',
    meaning: 'Eine weise, ausgleichende Entscheidung.',
    origin: 'König Salomo (um 950 v. Chr.) sollte entscheiden, welche von zwei Frauen die Mutter eines Kindes sei. Er befahl, das Kind zu teilen – die echte Mutter verzichtete lieber, um es zu retten. So erkannte er sie.',
    when: 'um 950 v. Chr.', y: -950, th: ['religion', 'demokratie']
  },

  // ---------- Bibel & Christentum ----------
  {
    id: 'haende-unschuld', kind: 'redewendung', phrase: 'Seine Hände in Unschuld waschen',
    meaning: 'Jede Verantwortung von sich weisen.',
    origin: 'Der römische Statthalter Pontius Pilatus wusch sich laut Matthäus-Evangelium vor der Menge die Hände, bevor er Jesus zur Kreuzigung freigab: „Ich bin unschuldig am Blut dieses Menschen.“ Pilatus ist auch außerhalb der Bibel belegt – durch eine Inschrift in Caesarea.',
    when: 'um 30 n. Chr.', y: 30, a: 'jesus', th: ['religion']
  },
  {
    id: 'judaskuss', kind: 'redewendung', phrase: 'Ein Judaskuss',
    meaning: 'Eine verräterische, geheuchelte Freundlichkeit.',
    origin: 'Judas Iskariot verriet Jesus für 30 Silberlinge und gab den Häschern durch einen Kuss zu erkennen, wen sie festnehmen sollten. Auch der „Judaslohn“ geht darauf zurück.',
    when: 'um 30 n. Chr.', y: 30, a: 'jesus', th: ['religion']
  },
  {
    id: 'unglaeubiger-thomas', kind: 'redewendung', phrase: 'Ein ungläubiger Thomas',
    meaning: 'Jemand, der nur glaubt, was er selbst sieht.',
    origin: 'Der Apostel Thomas wollte nicht glauben, dass Jesus auferstanden sei, bis er seine Finger in die Wundmale legen konnte (Johannes-Evangelium).',
    when: 'um 30 n. Chr.', y: 30, a: 'jesus', th: ['religion']
  },
  {
    id: 'saulus-paulus', kind: 'redewendung', phrase: 'Vom Saulus zum Paulus werden',
    meaning: 'Seine Meinung grundlegend ändern.',
    origin: 'Saulus von Tarsus verfolgte die ersten Christen, bis er vor Damaskus (um 33/35) eine Vision hatte. Als Paulus wurde er zum wichtigsten Missionar des Christentums. Ein Detail: Die Namensänderung kam in der Bibel gar nicht mit der Bekehrung – „Paulus“ war wohl sein römischer Zweitname.',
    when: 'um 35 n. Chr.', y: 35, a: 'jesus', th: ['religion']
  },
  {
    id: 'kreuz-tragen', kind: 'redewendung', phrase: 'Sein Kreuz zu tragen haben',
    meaning: 'Eine schwere Last oder ein Leid ertragen müssen.',
    origin: 'Zum Tod Verurteilte mussten bei den Römern den Querbalken ihres Kreuzes selbst zum Hinrichtungsort tragen – so laut den Evangelien auch Jesus. Die Kreuzigung war die schändlichste Strafe, vorgesehen für Sklaven und Aufrührer.',
    when: 'um 30 n. Chr.', y: 30, a: 'jesus', th: ['religion']
  },

  // ---------- Mittelalter ----------
  {
    id: 'canossa', kind: 'redewendung', phrase: 'Einen Gang nach Canossa antreten',
    meaning: 'Sich demütigen, einen Fehler eingestehen und um Verzeihung bitten.',
    origin: 'Im Januar 1077 stand König Heinrich IV. drei Tage lang im Büßergewand vor der Burg Canossa in Norditalien, bis Papst Gregor VII. den Kirchenbann von ihm nahm. 1872 griff Bismarck das Bild im Kulturkampf auf: „Nach Canossa gehen wir nicht!“',
    when: '1077', y: 1077, a: 'canossa', th: ['religion']
  },
  {
    id: 'vandalismus', kind: 'wort', phrase: 'Vandalismus',
    meaning: 'Mutwillige Zerstörung.',
    origin: 'Die germanischen Vandalen plünderten 455 Rom – allerdings nicht schlimmer als andere Eroberer. Den Begriff „vandalisme“ prägte erst 1794 der französische Bischof Henri Grégoire, um die Zerstörung von Kunstwerken durch Revolutionäre anzuprangern. Die Vandalen haben also einen ziemlich schlechten Ruf geerbt.',
    when: '455 / 1794', y: 455, a: 'voelkerwanderung', th: ['migration']
  },
  {
    id: 'hinz-kunz', kind: 'redewendung', phrase: 'Hinz und Kunz',
    meaning: 'Jedermann, irgendwer.',
    origin: '„Hinz“ (Heinrich) und „Kunz“ (Konrad) waren im Mittelalter so häufige Namen – auch dank mehrerer Könige und Kaiser namens Heinrich und Konrad –, dass sie zum Inbegriff von „jedem Beliebigen“ wurden.',
    when: 'Mittelalter', y: 1100, th: ['wissen']
  },
  {
    id: 'kerbholz', kind: 'redewendung', phrase: 'Etwas auf dem Kerbholz haben',
    meaning: 'Etwas Unrechtes getan haben.',
    origin: 'Im Mittelalter wurden Schulden auf einem Holzstab eingekerbt, der dann längs gespalten wurde: Eine Hälfte bekam der Gläubiger, eine der Schuldner. Nur zusammengelegt ergaben die Kerben einen gültigen Beleg – eine frühe Fälschungssicherung.',
    when: 'Mittelalter', y: 1200, th: ['handel']
  },
  {
    id: 'fehdehandschuh', kind: 'redewendung', phrase: 'Jemandem den Fehdehandschuh hinwerfen',
    meaning: 'Jemanden herausfordern.',
    origin: 'Ein Ritter, der einen anderen zum Kampf forderte, warf ihm seinen Panzerhandschuh vor die Füße. Hob der andere ihn auf, nahm er die Herausforderung an. Die „Fehde“ war im Mittelalter eine legale Form der Selbstjustiz – bis zum Ewigen Landfrieden 1495.',
    when: 'bis 1495', y: 1300, th: ['krieg']
  },
  {
    id: 'lanze-brechen', kind: 'redewendung', phrase: 'Eine Lanze für jemanden brechen',
    meaning: 'Sich für jemanden einsetzen.',
    origin: 'Bei Ritterturnieren konnte ein Kämpfer stellvertretend für einen anderen (oder für die Ehre einer Dame) antreten. Brach seine Lanze am Schild des Gegners, galt das als Treffer.',
    when: 'Hochmittelalter', y: 1200, th: ['krieg']
  },
  {
    id: 'im-schilde', kind: 'redewendung', phrase: 'Etwas im Schilde führen',
    meaning: 'Heimlich etwas planen.',
    origin: 'Ritter in voller Rüstung waren unter dem geschlossenen Helm nicht zu erkennen – nur das Wappen auf ihrem Schild verriet, wer da kam und ob er Freund oder Feind war.',
    when: 'Hochmittelalter', y: 1200, th: ['krieg']
  },
  {
    id: 'stegreif', kind: 'redewendung', phrase: 'Aus dem Stegreif',
    meaning: 'Ohne Vorbereitung.',
    origin: 'Der „Stegreif“ ist der Steigbügel. Wer etwas „aus dem Stegreif“ erledigte, tat es, ohne vom Pferd zu steigen – also im Vorbeireiten, schnell und unvorbereitet.',
    when: 'Mittelalter', y: 1300, th: ['wissen']
  },
  {
    id: 'pest-cholera', kind: 'redewendung', phrase: 'Die Wahl zwischen Pest und Cholera',
    meaning: 'Zwischen zwei gleich schlimmen Übeln wählen müssen.',
    origin: 'Die Pest wütete ab 1347 als „Schwarzer Tod“ in Europa, die Cholera kam erst im 19. Jahrhundert aus Indien (Hamburg 1892). Beide waren gefürchtete Massenmörder. Ähnlich alt: „jemanden meiden wie die Pest“.',
    when: '1347 / 1830er', y: 1347, a: 'pest', th: ['seuchen']
  },
  {
    id: 'quarantaene', kind: 'wort', phrase: 'Quarantäne',
    meaning: 'Zeitweise Isolation zum Schutz vor Ansteckung.',
    origin: 'Von italienisch „quaranta giorni“ – vierzig Tage. Die Hafenstadt Ragusa (Dubrovnik) verordnete 1377 Schiffen aus Pestgebieten zunächst 30 Tage Isolation, Venedig dehnte die Frist später auf 40 Tage aus.',
    when: '1377', y: 1377, a: 'pest', th: ['seuchen', 'handel']
  },
  {
    id: 'bankrott', kind: 'wort', phrase: 'Bankrott',
    meaning: 'Zahlungsunfähig, pleite.',
    origin: 'Von italienisch „banca rotta“ – zerbrochene Bank. Geldwechsler in den Handelsstädten Oberitaliens arbeiteten an Tischen („banca“). Wer zahlungsunfähig wurde, dem wurde der Tisch zerschlagen.',
    when: 'Spätmittelalter', y: 1350, th: ['handel']
  },
  {
    id: 'lange-bank', kind: 'redewendung', phrase: 'Etwas auf die lange Bank schieben',
    meaning: 'Etwas aufschieben.',
    origin: 'Wahrscheinlich aus der Gerichtspraxis: Unerledigte Akten wurden auf langen Bänken oder in Truhen („Bänken“) gestapelt. Das Reichskammergericht (ab 1495) war für seine endlos verschleppten Prozesse berüchtigt – manche dauerten über 100 Jahre.',
    when: 'ab 1495', y: 1495, th: ['demokratie']
  },
  {
    id: 'kalauer', kind: 'wort', phrase: 'Kalauer',
    meaning: 'Ein platter Wortwitz.',
    origin: 'Benannt nach der Kleinstadt Calau in der Niederlausitz: Im 19. Jahrhundert druckte die Berliner Satirezeitschrift „Kladderadatsch“ ihre albernen Witze unter der fiktiven Rubrik „Aus Calau“. Kombiniert mit dem französischen „calembour“ (Wortspiel) wurde daraus der „Kalauer“.',
    when: '19. Jh.', y: 1850, th: ['wissen']
  },

  // ---------- Frühe Neuzeit ----------
  {
    id: 'hier-stehe-ich', kind: 'zitat', phrase: 'Hier stehe ich, ich kann nicht anders',
    meaning: 'Ausdruck unerschütterlicher Überzeugung.',
    origin: 'Martin Luther soll dies 1521 auf dem Reichstag zu Worms vor Kaiser Karl V. gesagt haben, als er seine Schriften widerrufen sollte. Belegt ist nur „Gott helfe mir, Amen“ – der berühmte Satz kam wohl erst bei der Drucklegung dazu. Gutes Marketing gab es auch damals schon.',
    when: '1521', y: 1521, a: 'reformation', th: ['religion']
  },
  {
    id: 'aufs-maul', kind: 'redewendung', phrase: 'Dem Volk aufs Maul schauen',
    meaning: 'Sprechen, wie die einfachen Leute sprechen.',
    origin: 'Luther schrieb 1530 im „Sendbrief vom Dolmetschen“, man müsse „der Mutter im Hause, den Kindern auf der Gassen, dem gemeinen Mann auf dem Markt“ aufs Maul sehen. Seine Bibelübersetzung prägte so die deutsche Schriftsprache – samt Wörtern wie „Lückenbüßer“, „Machtwort“ oder „Feuereifer“.',
    when: '1530', y: 1530, a: 'reformation', th: ['religion', 'wissen']
  },
  {
    id: 'apfelbaeumchen', kind: 'zitat', phrase: 'Wenn morgen die Welt unterginge, würde ich heute noch ein Apfelbäumchen pflanzen',
    meaning: 'Trotz allem zuversichtlich bleiben.',
    origin: 'Wird fast immer Martin Luther zugeschrieben – doch der Satz ist erst 1944 nachweisbar, in einem Rundbrief der Bekennenden Kirche. Ein schönes Beispiel dafür, wie Zitate berühmten Personen „angehängt“ werden.',
    when: '1944 (angeblich 16. Jh.)', y: 1944, a: 'reformation', th: ['religion']
  },
  {
    id: 'spanisch', kind: 'redewendung', phrase: 'Das kommt mir spanisch vor',
    meaning: 'Das ist mir seltsam, verdächtig.',
    origin: 'Als der Spanier Karl V. 1519 römisch-deutscher König wurde, brachte er strenges spanisches Hofzeremoniell und fremde Moden mit. Vieles davon fanden die Deutschen merkwürdig – eben „spanisch“.',
    when: '1519', y: 1519, a: 'reformation', th: ['imperien']
  },
  {
    id: 'sonne-geht-nicht-unter', kind: 'zitat', phrase: 'In meinem Reich geht die Sonne nicht unter',
    meaning: 'Ein Reich, das die ganze Welt umspannt.',
    origin: 'Karl V. herrschte über Spanien, die Niederlande, Teile Italiens, das Heilige Römische Reich und die amerikanischen Kolonien. Der Satz wird ihm (und Philipp II.) zugeschrieben; später galt er für das Britische Empire.',
    when: '16. Jh.', y: 1530, a: 'entdeckungen', th: ['imperien', 'kolonialismus']
  },
  {
    id: 'adam-riese', kind: 'redewendung', phrase: 'Nach Adam Riese',
    meaning: 'Richtig gerechnet.',
    origin: 'Adam Ries (1492–1559) war Rechenmeister in Annaberg. Seine Rechenbücher (ab 1518) waren auf Deutsch statt Latein geschrieben und lehrten das Rechnen mit arabischen Ziffern statt mit dem Rechenbrett – ein Bestseller dank Buchdruck.',
    when: '1522', y: 1522, a: 'buchdruck', th: ['wissen', 'technik']
  },
  {
    id: 'dollar', kind: 'wort', phrase: 'Dollar',
    meaning: 'Währung der USA und vieler anderer Länder.',
    origin: 'Geht auf den „Joachimsthaler“ zurück, eine Silbermünze, die ab 1520 in Sankt Joachimsthal im Erzgebirge (heute Jáchymov, Tschechien) geprägt wurde. Aus „Taler“ wurde im Niederländischen „daler“, im Englischen „dollar“. Der US-Dollar hat also böhmische Wurzeln.',
    when: '1520', y: 1520, th: ['handel']
  },
  {
    id: 'blaues-blut', kind: 'redewendung', phrase: 'Blaues Blut haben',
    meaning: 'Adelig sein.',
    origin: 'Aus dem Spanischen „sangre azul“: Der kastilische Adel, der sich wenig in der Sonne aufhielt, war hellhäutig, sodass die Adern bläulich durchschimmerten. Damit grenzte man sich nach der Reconquista von der dunkleren Bevölkerung maurischer Abstammung ab.',
    when: 'Frühe Neuzeit', y: 1500, th: ['imperien']
  },
  {
    id: 'staat-bin-ich', kind: 'zitat', phrase: 'Der Staat bin ich',
    meaning: 'Inbegriff absolutistischer Herrschaft.',
    origin: '„L’État, c’est moi“ soll Ludwig XIV. 1655 vor dem Pariser Parlament gesagt haben. Der Satz ist nicht belegt, fasst den Absolutismus des „Sonnenkönigs“ aber treffend zusammen. Auf dem Sterbebett sagte er angeblich: „Ich gehe, aber der Staat bleibt.“',
    when: '1655', y: 1655, th: ['imperien']
  },
  {
    id: 'facon', kind: 'zitat', phrase: 'Jeder soll nach seiner Façon selig werden',
    meaning: 'Jeder soll nach seiner Art leben und glauben dürfen.',
    origin: 'Friedrich II. von Preußen schrieb 1740 an den Rand einer Akte zur Frage katholischer Schulen: „Die Religionen müssen alle toleriert werden … denn hier muss ein jeder nach seiner Façon selig werden.“',
    when: '1740', y: 1740, th: ['religion', 'demokratie']
  },
  {
    id: 'bis-in-die-puppen', kind: 'redewendung', phrase: 'Bis in die Puppen',
    meaning: 'Sehr lange, übermäßig lange.',
    origin: 'Am Großen Stern im Berliner Tiergarten ließ Friedrich II. im 18. Jahrhundert Statuen antiker Götter aufstellen, die die Berliner spöttisch „Puppen“ nannten. Damals lag der Platz weit vor der Stadt: Wer „bis in die Puppen“ spazierte, ging einen langen Weg.',
    when: '18. Jh.', y: 1750, th: ['wissen']
  },
  {
    id: 'spiessruten', kind: 'redewendung', phrase: 'Spießruten laufen',
    meaning: 'Sich vielen feindseligen Blicken oder Angriffen aussetzen müssen.',
    origin: 'Eine Militärstrafe des 17. und 18. Jahrhunderts, u. a. in Preußen: Der Verurteilte musste mit entblößtem Oberkörper durch eine Gasse von Soldaten laufen, die mit Ruten auf ihn einschlugen.',
    when: '17./18. Jh.', y: 1700, th: ['krieg']
  },
  {
    id: 'sintflut', kind: 'zitat', phrase: 'Nach mir die Sintflut',
    meaning: 'Was danach kommt, ist mir egal.',
    origin: '„Après nous le déluge“ soll Madame de Pompadour 1757 zu König Ludwig XV. nach der verlorenen Schlacht bei Roßbach gesagt haben. Rückblickend wirkt es wie eine Prophezeiung: 1789 kam die „Sintflut“ in Form der Revolution.',
    when: '1757', y: 1757, a: 'franzoesische-revolution', th: ['revolution']
  },
  {
    id: 'silhouette', kind: 'wort', phrase: 'Silhouette',
    meaning: 'Umriss, Schattenbild.',
    origin: 'Étienne de Silhouette war 1759 für wenige Monate französischer Finanzminister und verordnete harte Sparmaßnahmen. Billige Scherenschnitte statt teurer Porträts galten daraufhin spöttisch als „à la Silhouette“ – so knapp wie seine Amtszeit.',
    when: '1759', y: 1759, th: ['wissen']
  },
  {
    id: 'potemkin', kind: 'redewendung', phrase: 'Potemkinsche Dörfer',
    meaning: 'Eine schöne Fassade, hinter der nichts steckt.',
    origin: 'Fürst Potjomkin soll 1787 für Zarin Katharina II. auf ihrer Reise durch die neu eroberte Krim Kulissendörfer aufgestellt haben, um Wohlstand vorzutäuschen. Historiker halten das für eine übertriebene Verleumdung durch seine Neider – die Wendung blieb trotzdem.',
    when: '1787', y: 1787, th: ['imperien']
  },
  {
    id: 'sapere-aude', kind: 'zitat', phrase: 'Habe Mut, dich deines eigenen Verstandes zu bedienen!',
    meaning: 'Wahlspruch der Aufklärung: Denk selbst!',
    origin: 'Immanuel Kant beantwortete 1784 die Frage „Was ist Aufklärung?“ mit dem „Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit“. Sein Motto „Sapere aude“ entlieh er dem römischen Dichter Horaz.',
    when: '1784', y: 1784, th: ['wissen', 'demokratie']
  },

  // ---------- Revolution & 19. Jahrhundert ----------
  {
    id: 'kuchen', kind: 'zitat', phrase: 'Dann sollen sie doch Kuchen essen!',
    meaning: 'Sinnbild für die Weltfremdheit der Mächtigen.',
    origin: 'Angeblich Marie Antoinettes Antwort, als man ihr sagte, das Volk habe kein Brot. Doch Jean-Jacques Rousseau schrieb den Satz („Qu’ils mangent de la brioche“) einer „großen Prinzessin“ zu – als Marie Antoinette noch ein Kind in Wien war. Ein klassischer Fall von Propaganda.',
    when: 'vor 1789', y: 1789, a: 'franzoesische-revolution', th: ['revolution']
  },
  {
    id: 'revolution-kinder', kind: 'zitat', phrase: 'Die Revolution frisst ihre Kinder',
    meaning: 'Umstürze vernichten oft ihre eigenen Anführer.',
    origin: 'Der Girondist Pierre Vergniaud warnte 1793, die Revolution könne wie der Gott Saturn ihre eigenen Kinder verschlingen. Kurz darauf wurde er selbst hingerichtet – wie später Danton und Robespierre. In Georg Büchners „Dantons Tod“ (1835) wurde der Satz berühmt.',
    when: '1793', y: 1793, a: 'franzoesische-revolution', th: ['revolution']
  },
  {
    id: 'guillotine', kind: 'wort', phrase: 'Guillotine',
    meaning: 'Fallbeil.',
    origin: 'Der Arzt Joseph-Ignace Guillotin schlug 1789 vor, Todesstrafen für alle Stände gleich und möglichst schmerzlos zu vollstrecken. Er hat das Gerät weder erfunden noch wurde er damit hingerichtet – er starb 1814 friedlich und litt zeitlebens darunter, dass es seinen Namen trug.',
    when: '1792', y: 1792, a: 'franzoesische-revolution', th: ['revolution']
  },
  {
    id: 'waterloo', kind: 'redewendung', phrase: 'Sein Waterloo erleben',
    meaning: 'Eine vernichtende, endgültige Niederlage erleiden.',
    origin: 'Am 18. Juni 1815 wurde Napoleon bei Waterloo (südlich von Brüssel) von Wellington und dem preußischen Marschall Blücher endgültig geschlagen. Blücher wurde in Deutschland zum Volkshelden: „rangehen wie Blücher“ bedeutet bis heute, forsch vorzugehen.',
    when: '1815', y: 1815, a: 'napoleon', th: ['krieg']
  },
  {
    id: 'blut-eisen', kind: 'zitat', phrase: 'Durch Eisen und Blut',
    meaning: 'Durch Gewalt und Krieg statt durch Verhandlungen.',
    origin: 'Otto von Bismarck sagte 1862 als neuer preußischer Ministerpräsident: „Nicht durch Reden oder Majoritätsbeschlüsse werden die großen Fragen der Zeit entschieden … sondern durch Eisen und Blut.“ Drei Kriege später war 1871 das Deutsche Reich gegründet.',
    when: '1862', y: 1862, a: 'reichsgruendung', th: ['einheit', 'krieg']
  },
  {
    id: 'mein-name-ist-hase', kind: 'redewendung', phrase: 'Mein Name ist Hase, ich weiß von nichts',
    meaning: 'Ich habe damit nichts zu tun.',
    origin: 'Der Heidelberger Jurastudent Victor Hase half 1854/55 einem Kommilitonen, der einen Gegner im Duell erschossen hatte, mit seinem Studentenausweis zur Flucht. Vor dem Universitätsgericht sagte er: „Mein Name ist Hase, ich verneine die Generalfragen, ich weiß von nichts.“',
    when: '1855', y: 1855, th: ['wissen']
  },
  {
    id: 'boykott', kind: 'wort', phrase: 'Boykott',
    meaning: 'Gezielte Verweigerung von Zusammenarbeit oder Kauf.',
    origin: 'Charles Boycott war Gutsverwalter in Irland. Als er 1880 Pächter vertreiben wollte, weigerte sich das ganze Dorf, für ihn zu arbeiten, ihm etwas zu verkaufen oder auch nur mit ihm zu sprechen. Sein Name wurde weltweit zum Begriff.',
    when: '1880', y: 1880, th: ['kolonialismus', 'demokratie']
  },
  {
    id: 'unter-aller-kanone', kind: 'redewendung', phrase: 'Unter aller Kanone',
    meaning: 'Sehr schlecht.',
    origin: 'Eine Verballhornung aus der Schule: Leistungen, die unter jedem Maßstab lagen, wurden lateinisch als „sub omni canone“ (unter jedem Kanon = Maßstab) bewertet. Schüler machten daraus die Kanone. Ein Kalauer mit Bildungsanspruch.',
    when: '19. Jh.', y: 1850, th: ['wissen']
  },

  // ---------- 20. Jahrhundert ----------
  {
    id: 'lampen-europa', kind: 'zitat', phrase: 'In ganz Europa gehen die Lichter aus',
    meaning: 'Eine dunkle Zeit bricht an.',
    origin: 'Der britische Außenminister Edward Grey soll am 3. August 1914, am Vorabend des britischen Kriegseintritts, aus dem Fenster gesehen und gesagt haben: „The lamps are going out all over Europe; we shall not see them lit again in our lifetime.“',
    when: '1914', y: 1914, a: 'erster-weltkrieg', th: ['krieg']
  },
  {
    id: 'bahnhof', kind: 'redewendung', phrase: 'Ich verstehe nur Bahnhof',
    meaning: 'Ich verstehe gar nichts (oder: will nichts davon hören).',
    origin: 'Vermutlich aus dem Ersten Weltkrieg: Kriegsmüde Soldaten wollten nur noch eines hören – „Bahnhof“, denn von dort ging der Zug in den Heimaturlaub. Alles andere interessierte sie nicht mehr.',
    when: '1914–1918', y: 1917, a: 'erster-weltkrieg', th: ['krieg']
  },
  {
    id: 'westen-nichts-neues', kind: 'redewendung', phrase: 'Im Westen nichts Neues',
    meaning: 'Es hat sich nichts verändert.',
    origin: 'Eigentlich die Formel der deutschen Heeresberichte, wenn an der Westfront „nichts Besonderes“ geschah – während dort täglich Tausende starben. Erich Maria Remarque machte sie 1929 zum Titel seines Antikriegsromans, der von den Nazis 1933 verbrannt wurde.',
    when: '1929', y: 1929, a: 'erster-weltkrieg', th: ['krieg']
  },
  {
    id: 'blut-schweiss', kind: 'zitat', phrase: 'Blut, Mühsal, Tränen und Schweiß',
    meaning: 'Ein Versprechen harter Zeiten statt leerer Hoffnungen.',
    origin: 'Winston Churchill sagte am 13. Mai 1940, drei Tage nach seinem Amtsantritt als Premierminister, vor dem Unterhaus: „I have nothing to offer but blood, toil, tears and sweat.“ Großbritannien stand Hitler kurz darauf praktisch allein gegenüber.',
    when: '1940', y: 1940, a: 'zweiter-weltkrieg', th: ['krieg']
  },
  {
    id: 'eiserner-vorhang', kind: 'redewendung', phrase: 'Der Eiserne Vorhang',
    meaning: 'Die Grenze zwischen Ost- und Westblock.',
    origin: 'Ursprünglich ein Brandschutzvorhang im Theater. Weltberühmt machte das Bild Churchill 1946 in Fulton (USA): „Von Stettin an der Ostsee bis Triest an der Adria ist ein Eiserner Vorhang über den Kontinent niedergegangen.“',
    when: '1946', y: 1946, a: 'kalter-krieg', th: ['einheit']
  },
  {
    id: 'mauer-absicht', kind: 'zitat', phrase: 'Niemand hat die Absicht, eine Mauer zu errichten!',
    meaning: 'Sinnbild für eine dreiste politische Lüge.',
    origin: 'DDR-Staatschef Walter Ulbricht sagte dies am 15. Juni 1961 auf einer Pressekonferenz – auf eine Frage, in der von einer Mauer gar keine Rede war. Knapp zwei Monate später, am 13. August 1961, begann der Mauerbau.',
    when: '1961', y: 1961, a: 'kalter-krieg', th: ['einheit']
  },
  {
    id: 'berliner', kind: 'zitat', phrase: 'Ich bin ein Berliner',
    meaning: 'Ausdruck der Solidarität.',
    origin: 'US-Präsident John F. Kennedy sagte den Satz am 26. Juni 1963 vor dem Schöneberger Rathaus. Die Legende, er habe sich als „Pfannkuchen“ bezeichnet, ist falsch: Grammatisch war der Satz korrekt, und in Berlin heißt das Gebäck ohnehin „Pfannkuchen“.',
    when: '1963', y: 1963, a: 'kalter-krieg', th: ['einheit', 'demokratie']
  },
  {
    id: 'traum', kind: 'zitat', phrase: 'Ich habe einen Traum',
    meaning: 'Vision einer gerechteren Zukunft.',
    origin: 'Martin Luther King Jr. hielt die Rede „I Have a Dream“ am 28. August 1963 vor rund 250.000 Menschen beim Marsch auf Washington. Der berühmteste Teil war improvisiert – die Sängerin Mahalia Jackson soll ihm zugerufen haben: „Erzähl ihnen vom Traum, Martin!“',
    when: '1963', y: 1963, th: ['demokratie']
  },
  {
    id: 'kleiner-schritt', kind: 'zitat', phrase: 'Ein kleiner Schritt für einen Menschen, ein großer Sprung für die Menschheit',
    meaning: 'Ein Moment von historischer Tragweite.',
    origin: 'Neil Armstrong betrat am 21. Juli 1969 (MEZ) als erster Mensch den Mond. Eigentlich wollte er „for a man“ sagen; das „a“ ging im Funk unter oder wurde vergessen – was den Satz streng genommen widersprüchlich macht.',
    when: '1969', y: 1969, a: 'kalter-krieg', th: ['technik']
  },
  {
    id: 'zu-spaet', kind: 'zitat', phrase: 'Wer zu spät kommt, den bestraft das Leben',
    meaning: 'Wer nicht rechtzeitig handelt, verpasst seine Chance.',
    origin: 'Wird Michail Gorbatschow zugeschrieben, der im Oktober 1989 zum 40. Jahrestag der DDR in Ost-Berlin war. Wörtlich sagte er so etwas nicht – sein Sprecher fasste es so zusammen. Wenige Wochen später war Erich Honecker gestürzt und die Mauer offen.',
    when: '1989', y: 1989, a: 'kalter-krieg', th: ['revolution', 'einheit']
  },
  {
    id: 'wir-sind-das-volk', kind: 'zitat', phrase: 'Wir sind das Volk!',
    meaning: 'Ruf nach Volkssouveränität.',
    origin: 'Der Ruf der Leipziger Montagsdemonstrationen im Herbst 1989. Am 9. Oktober 1989 zogen 70.000 Menschen friedlich um den Ring – die Staatsmacht griff nicht ein. Nach dem Mauerfall wurde daraus „Wir sind ein Volk!“.',
    when: '1989', y: 1989, a: 'kalter-krieg', th: ['revolution', 'demokratie', 'einheit']
  },

  // ---------- Eselsbrücken ----------
  {
    id: 'merk-rom', kind: 'merkspruch', phrase: 'Sieben-fünf-drei – Rom kroch aus dem Ei',
    meaning: 'Sagenhaftes Gründungsjahr Roms: 753 v. Chr.',
    origin: 'Der Legende nach gründete Romulus die Stadt am 21. April 753 v. Chr. Archäologisch war der Ort schon früher besiedelt – das Datum wurde erst im 1. Jh. v. Chr. von Gelehrten errechnet.',
    when: '753 v. Chr.', y: -753, a: 'rom', th: ['imperien']
  },
  {
    id: 'merk-issos', kind: 'merkspruch', phrase: 'Drei-drei-drei – bei Issos Keilerei',
    meaning: 'Schlacht bei Issos: 333 v. Chr.',
    origin: 'Alexander der Große schlug den Perserkönig Dareios III. bei Issos im heutigen Grenzgebiet Türkei/Syrien. Dareios floh und ließ sogar seine Familie zurück. Wohl die bekannteste Eselsbrücke des Geschichtsunterrichts.',
    when: '333 v. Chr.', y: -333, a: 'alexander', th: ['krieg']
  },
  {
    id: 'merk-heinrich', kind: 'merkspruch', phrase: 'Geschieden, geköpft, gestorben – geschieden, geköpft, überlebt',
    meaning: 'Das Schicksal der sechs Ehefrauen Heinrichs VIII.',
    origin: 'Katharina von Aragón (geschieden), Anne Boleyn (geköpft), Jane Seymour (gestorben), Anna von Kleve (geschieden), Catherine Howard (geköpft), Catherine Parr (überlebt). Wegen der ersten Scheidung brach Heinrich mit Rom und gründete die Kirche von England.',
    when: '1509–1547', y: 1534, a: 'reformation', th: ['religion']
  },
  {
    id: 'merk-30', kind: 'merkspruch', phrase: '16-18 plus 30 macht 16-48',
    meaning: 'Dreißigjähriger Krieg: 1618 bis 1648.',
    origin: 'Der Name verrät die Dauer, man muss sich also nur den Anfang merken: Prager Fenstersturz 1618. Rechnen nach Adam Riese ergibt den Westfälischen Frieden 1648.',
    when: '1618–1648', y: 1618, a: 'dreissigjaehriger-krieg', th: ['krieg', 'religion']
  },
  {
    id: 'merk-kolumbus', kind: 'merkspruch', phrase: 'In fourteen hundred ninety-two, Columbus sailed the ocean blue',
    meaning: '1492 erreichte Kolumbus Amerika.',
    origin: 'Ein Merkreim aus amerikanischen Schulbüchern – „1492 segelte Kolumbus übers blaue Meer“. Auf Deutsch reimt es sich leider nicht so schön.',
    when: '1492', y: 1492, a: 'entdeckungen', th: ['kolonialismus']
  },
  {
    id: 'merk-dreikaiser', kind: 'merkspruch', phrase: 'Drei Kaiser in einem Jahr: 1888',
    meaning: 'Das Dreikaiserjahr.',
    origin: 'Merkhilfe: drei Achten, drei Kaiser. Wilhelm I. starb im März 1888, sein schwerkranker Sohn Friedrich III. regierte nur 99 Tage, dann folgte Wilhelm II. – der Kaiser, der Deutschland in den Ersten Weltkrieg führte.',
    when: '1888', y: 1888, a: 'reichsgruendung', th: ['imperien']
  },
  {
    id: 'merk-9-november', kind: 'merkspruch', phrase: 'Der 9. November – Deutschlands Schicksalstag',
    meaning: '1918, 1923, 1938 und 1989 fielen große Ereignisse auf diesen Tag.',
    origin: '1918: Ausrufung der Republik. 1923: Hitlerputsch in München. 1938: Novemberpogrome. 1989: Fall der Berliner Mauer. Deshalb ist nicht der 9. November, sondern der 3. Oktober Nationalfeiertag.',
    when: '1918–1989', y: 1938, a: 'weimar-ns', th: ['revolution', 'einheit']
  },
  {
    id: 'merk-karl', kind: 'merkspruch', phrase: 'Achthundert, Weihnachtstag – Karl, der Kaiser werden mag',
    meaning: 'Kaiserkrönung Karls des Großen am 25. Dezember 800.',
    origin: 'Eine runde Zahl und ein Feiertag: Papst Leo III. krönte Karl im Petersdom zu Rom. Laut seinem Biografen Einhard war Karl angeblich überrascht – Historiker bezweifeln das.',
    when: '800', y: 800, a: 'karl-der-grosse', th: ['imperien', 'religion']
  }
];
