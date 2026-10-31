(() => {
  const additions = {
    en: {
      middle: {
        label: "IV · An alliance in Kishkindha",
        title: ["A promise between", "allies"],
        text: "After Sita is taken to Lanka, Rama and Lakshmana meet Hanuman in the forest. He brings them to Sugriva, who also needs help: his brother has taken his kingdom. The two leaders can make a pact and help one another.",
        prompt: "How should Rama build trust with Sugriva?",
        characterIds: ["rama", "lakshmana", "hanuman"],
        choices: [
          { text: "Promise to help Sugriva reclaim his kingdom, then ask for help finding Sita.", quality: "compassion", result: "Rama and Sugriva make a pact. Sugriva regains his kingdom, and his people join Rama's search for Sita." },
          { text: "Invite Sugriva to join the search at once, united by a common purpose.", quality: "resolve", result: "Sugriva gathers his people to search every direction. Their shared mission begins a lasting alliance." }
        ]
      },
      bharata: {
        label: "II · The sandals on the throne",
        title: ["A kingdom", "kept in trust"],
        text: "Bharata learns that Rama has gone to the forest. He follows with the people of Ayodhya and asks Rama to return. Rama keeps his promise to their father, so Bharata chooses to rule only as a caretaker.",
        prompt: "What should Bharata carry back to Ayodhya?",
        characterIds: ["rama", "bharata", "lakshmana"],
        choices: [
          { text: "Rama's sandals, a sign that the throne remains his.", quality: "resolve", result: "Bharata places Rama's sandals on the throne and governs in his name, waiting for the promised years to pass." },
          { text: "A promise that Ayodhya will welcome Rama whenever he returns.", quality: "compassion", result: "Bharata returns with a vow to protect the kingdom and keep a place for Rama in every heart." }
        ]
      },
      panchavati: {
        label: "III · The golden deer",
        title: ["A moment in", "Panchavati"],
        text: "In Panchavati, a golden deer catches Sita's eye. Rama follows it, while Lakshmana stays to guard her. A cry from the forest draws Lakshmana away; Ravana then appears in disguise and carries Sita to Lanka. Jatayu bravely tries to stop him.",
        prompt: "How should the search begin?",
        characterIds: ["rama", "sita", "lakshmana"],
        choices: [
          { text: "Follow Jatayu's final message and search south toward Lanka.", quality: "resolve", result: "Jatayu's courage gives Rama a direction. The brothers set out south, determined to find Sita." },
          { text: "Pause to honor Jatayu, then ask the forest for every clue.", quality: "compassion", result: "Rama honors Jatayu's sacrifice. With care and patience, the brothers gather the clues that lead them onward." }
        ]
      },
      hanuman: {
        label: "V · Across the ocean",
        title: ["A ring carried", "through the sky"],
        text: "With Sugriva's search parties, Hanuman leaps across the ocean to Lanka. In the Ashoka grove, he finds Sita guarded but unbroken. He must show her that he comes as Rama's messenger and that hope is near.",
        prompt: "What should Hanuman give Sita?",
        characterIds: ["hanuman", "sita"],
        choices: [
          { text: "Rama's ring, and a quiet promise that he will come for her.", quality: "compassion", result: "Sita recognizes the ring and sends Rama a token in return. Hanuman carries her message back across the sea." },
          { text: "A brave account of Rama's allies gathering on the shore.", quality: "resolve", result: "Hanuman tells Sita that an alliance is ready to act. Her hope is renewed, and he returns with news of her strength." }
        ]
      },
      bridge: {
        label: "VI · The bridge to Lanka",
        title: ["Stone by stone,", "together"],
        text: "The searchers return with Sita's message. Vibhishana leaves Ravana's court and joins Rama, warning him of Lanka's defenses. The ocean lies between the allies and the city; together, they begin building a bridge.",
        prompt: "How will Rama lead the crossing?",
        characterIds: ["rama", "hanuman", "vibhishana"],
        choices: [
          { text: "Listen to Vibhishana's counsel and give every ally a part to play.", quality: "compassion", result: "Each ally contributes. The bridge grows through shared effort, and the army crosses together." },
          { text: "Rally the army with a clear vow to stand united in Lanka.", quality: "resolve", result: "The allies answer Rama's call. With steady purpose, they complete the crossing and reach Lanka's shore." }
        ]
      },
      finalText: "At Lanka, Rama and his allies face Ravana's forces. The battle tests every promise made along the road. With Sita's freedom and the kingdom's peace at stake, Rama must choose how to meet Ravana.",
      finalLabel: "VII · The gates of Lanka",
      endingLabel: "VIII · The return to Ayodhya",
      endingProgress: "Homecoming"
    },
    hi: {
      middle: {
        label: "IV · किष्किंधा में मित्रता",
        title: ["मित्रों का", "वचन"],
        text: "सीता को लंका ले जाए जाने के बाद राम और लक्ष्मण वन में हनुमान से मिलते हैं। हनुमान उन्हें सुग्रीव के पास ले जाते हैं, जिन्हें अपने भाई से राज्य वापस पाने में सहायता चाहिए। दोनों नेता एक-दूसरे की सहायता का संकल्प ले सकते हैं।",
        prompt: "राम सुग्रीव का विश्वास कैसे जीतें?",
        characterIds: ["rama", "lakshmana", "hanuman"],
        choices: [
          { text: "सुग्रीव को उनका राज्य वापस दिलाने का वचन दें और फिर सीता की खोज में सहायता माँगें।", quality: "compassion", result: "राम और सुग्रीव मित्रता का वचन देते हैं। सुग्रीव को राज्य मिलता है और उनके साथी सीता की खोज में जुटते हैं।" },
          { text: "साझे लक्ष्य के साथ सुग्रीव को तुरंत खोज में साथ आने का निमंत्रण दें।", quality: "resolve", result: "सुग्रीव अपने साथियों को हर दिशा में खोज के लिए भेजते हैं। यह साझा लक्ष्य उनकी मित्रता को गहरा करता है।" }
        ]
      },
      bharata: {
        label: "II · सिंहासन पर चरण-पादुकाएँ",
        title: ["राज्य एक", "धरोहर"],
        text: "भरत को पता चलता है कि राम वन चले गए हैं। वे अयोध्या के लोगों के साथ राम से लौटने की विनती करने पहुँचते हैं। राम पिता को दिया वचन निभाते हैं, इसलिए भरत केवल संरक्षक बनकर राज्य चलाने का निर्णय लेते हैं।",
        prompt: "भरत अयोध्या क्या लेकर लौटें?",
        characterIds: ["rama", "bharata", "lakshmana"],
        choices: [
          { text: "राम की चरण-पादुकाएँ, यह संकेत कि सिंहासन उन्हीं का है।", quality: "resolve", result: "भरत राम की चरण-पादुकाएँ सिंहासन पर रखते हैं और उनके नाम से राज्य चलाते हुए वनवास की अवधि पूरी होने की प्रतीक्षा करते हैं।" },
          { text: "यह वचन कि अयोध्या राम की वापसी पर उनका स्वागत करेगी।", quality: "compassion", result: "भरत राज्य की रक्षा करने और हर हृदय में राम के लिए स्थान बनाए रखने का संकल्प लेकर लौटते हैं।" }
        ]
      },
      panchavati: {
        label: "III · स्वर्ण मृग",
        title: ["पंचवटी का", "एक क्षण"],
        text: "पंचवटी में स्वर्ण मृग सीता का ध्यान खींचता है। राम उसके पीछे जाते हैं और लक्ष्मण सीता की रक्षा करते हैं। वन से आती पुकार लक्ष्मण को दूर ले जाती है; तभी रावण वेश बदलकर आता है और सीता को लंका ले जाता है। जटायु उसे रोकने का साहस करते हैं।",
        prompt: "खोज की शुरुआत कैसे हो?",
        characterIds: ["rama", "sita", "lakshmana"],
        choices: [
          { text: "जटायु के अंतिम संदेश के अनुसार दक्षिण दिशा में लंका की ओर खोजें।", quality: "resolve", result: "जटायु का साहस राम को दिशा देता है। दोनों भाई सीता को खोजने के दृढ़ निश्चय के साथ दक्षिण की ओर चल पड़ते हैं।" },
          { text: "जटायु के बलिदान का सम्मान करें और वन से हर संकेत पूछें।", quality: "compassion", result: "राम जटायु के बलिदान का सम्मान करते हैं। धैर्य से दोनों भाई आगे बढ़ने के संकेत जुटाते हैं।" }
        ]
      },
      hanuman: {
        label: "V · सागर के पार",
        title: ["आकाश में", "आशा का संदेश"],
        text: "सुग्रीव के खोजी दलों के साथ हनुमान सागर लाँघकर लंका पहुँचते हैं। अशोक वाटिका में उन्हें सीता मिलती हैं, जो पहरे में होते हुए भी अडिग हैं। उन्हें बताना है कि वे राम के दूत हैं और आशा निकट है।",
        prompt: "हनुमान सीता को क्या दें?",
        characterIds: ["hanuman", "sita"],
        choices: [
          { text: "राम की अंगूठी और यह आश्वासन कि वे उन्हें लेने आएँगे।", quality: "compassion", result: "सीता अंगूठी पहचानती हैं और बदले में राम के लिए एक निशानी देती हैं। हनुमान उनका संदेश लेकर सागर पार लौटते हैं।" },
          { text: "समुद्र तट पर एकत्र हो रहे राम के साथियों का साहसी समाचार।", quality: "resolve", result: "हनुमान सीता को तैयार मित्र-सेना का समाचार देते हैं। उनका विश्वास लौटता है और हनुमान उनके धैर्य का संदेश लेकर आते हैं।" }
        ]
      },
      bridge: {
        label: "VI · लंका का सेतु",
        title: ["मिलकर रखा", "हर पत्थर"],
        text: "खोजी दल सीता का संदेश लेकर लौटते हैं। विभीषण रावण का दरबार छोड़कर राम के साथ आते हैं और लंका की रक्षा के बारे में बताते हैं। मित्रों और नगर के बीच सागर है; सब मिलकर सेतु बनाने लगते हैं।",
        prompt: "राम सेना को पार कैसे ले जाएँ?",
        characterIds: ["rama", "hanuman", "vibhishana"],
        choices: [
          { text: "विभीषण की सलाह सुनें और हर साथी को एक काम सौंपें।", quality: "compassion", result: "हर साथी अपना योगदान देता है। साझा प्रयास से सेतु बनता है और सेना साथ-साथ पार जाती है।" },
          { text: "लंका में एकजुट रहने का स्पष्ट संकल्प लेकर सेना को प्रेरित करें।", quality: "resolve", result: "सभी साथी राम के आह्वान का उत्तर देते हैं। दृढ़ निश्चय से सेतु पूरा होता है और वे लंका के तट पहुँचते हैं।" }
        ]
      },
      finalText: "लंका में राम और उनके सहयोगियों का सामना रावण की सेना से होता है। युद्ध उनकी पूरी यात्रा में किए गए वचनों की परीक्षा लेता है। सीता की मुक्ति और राज्य की शांति दाँव पर है; राम को तय करना है कि रावण का सामना कैसे करें।",
      finalLabel: "VII · लंका के द्वार",
      endingLabel: "VIII · अयोध्या वापसी",
      endingProgress: "घर वापसी"
    },
    de: {
      middle: {
        label: "IV · Ein Bündnis in Kishkindha",
        title: ["Ein Versprechen", "unter Verbündeten"],
        text: "Nachdem Sita nach Lanka gebracht wurde, begegnen Rama und Lakshmana im Wald Hanuman. Er führt sie zu Sugriva, der ebenfalls Hilfe braucht: Sein Bruder hat ihm das Königreich genommen. Die beiden Anführer können einander Beistand versprechen.",
        prompt: "Wie kann Rama Sugrivas Vertrauen gewinnen?",
        characterIds: ["rama", "lakshmana", "hanuman"],
        choices: [
          { text: "Sugriva helfen, sein Reich zurückzugewinnen, und ihn dann um Hilfe bei der Suche nach Sita bitten.", quality: "compassion", result: "Rama und Sugriva schließen ein Bündnis. Sugriva erhält sein Reich zurück, und seine Leute helfen bei der Suche nach Sita." },
          { text: "Sugriva sofort zur Suche einladen und sie mit einem gemeinsamen Ziel vereinen.", quality: "resolve", result: "Sugriva schickt seine Leute in alle Himmelsrichtungen. Ihre gemeinsame Aufgabe begründet ein dauerhaftes Bündnis." }
        ]
      },
      bharata: {
        label: "II · Die Sandalen auf dem Thron",
        title: ["Ein Reich in", "treuen Händen"],
        text: "Bharata erfährt, dass Rama in den Wald gegangen ist. Mit den Menschen Ayodhyas bittet er Rama um Rückkehr. Rama hält das Versprechen an ihren Vater; darum will Bharata nur als Hüter des Reiches regieren.",
        prompt: "Was soll Bharata nach Ayodhya mitnehmen?",
        characterIds: ["rama", "bharata", "lakshmana"],
        choices: [
          { text: "Ramas Sandalen als Zeichen, dass der Thron ihm gehört.", quality: "resolve", result: "Bharata stellt Ramas Sandalen auf den Thron und regiert in seinem Namen, bis die versprochenen Jahre vergangen sind." },
          { text: "Das Versprechen, dass Ayodhya Rama bei seiner Rückkehr willkommen heißt.", quality: "compassion", result: "Bharata kehrt mit dem Schwur zurück, das Reich zu schützen und Rama in allen Herzen einen Platz zu bewahren." }
        ]
      },
      panchavati: {
        label: "III · Das goldene Reh",
        title: ["Ein Augenblick", "in Panchavati"],
        text: "In Panchavati erregt ein goldenes Reh Sitas Aufmerksamkeit. Rama folgt ihm, während Lakshmana bei ihr bleibt. Ein Ruf aus dem Wald lockt auch Lakshmana fort; dann erscheint Ravana in Verkleidung und entführt Sita nach Lanka. Jatayu stellt sich ihm mutig entgegen.",
        prompt: "Wie soll die Suche beginnen?",
        characterIds: ["rama", "sita", "lakshmana"],
        choices: [
          { text: "Jatayus letzter Botschaft folgen und südlich in Richtung Lanka suchen.", quality: "resolve", result: "Jatayus Mut weist Rama den Weg. Die Brüder brechen entschlossen nach Süden auf, um Sita zu finden." },
          { text: "Jatayu ehren und danach im Wald jeder Spur nachgehen.", quality: "compassion", result: "Rama ehrt Jatayus Opfer. Mit Geduld sammeln die Brüder die Hinweise, die sie weiterführen." }
        ]
      },
      hanuman: {
        label: "V · Über das Meer",
        title: ["Ein Ring fliegt", "durch den Himmel"],
        text: "Mit Sugrivas Suchtrupps springt Hanuman über das Meer nach Lanka. Im Ashoka-Hain findet er Sita, bewacht und doch ungebrochen. Er muss ihr zeigen, dass er als Bote Ramas kommt und Hoffnung nahe ist.",
        prompt: "Was soll Hanuman Sita überbringen?",
        characterIds: ["hanuman", "sita"],
        choices: [
          { text: "Ramas Ring und das leise Versprechen, dass er sie holen wird.", quality: "compassion", result: "Sita erkennt den Ring und schickt Rama ein Zeichen zurück. Hanuman trägt ihre Botschaft über das Meer." },
          { text: "Die mutige Nachricht, dass Ramas Verbündete sich am Ufer sammeln.", quality: "resolve", result: "Hanuman berichtet Sita, dass ein Bündnis bereitsteht. Ihre Hoffnung kehrt zurück, und er bringt die Kunde ihrer Stärke heim." }
        ]
      },
      bridge: {
        label: "VI · Die Brücke nach Lanka",
        title: ["Stein für Stein,", "gemeinsam"],
        text: "Die Suchenden kehren mit Sitas Nachricht zurück. Vibhishana verlässt Ravanas Hof und schließt sich Rama an; er warnt vor Lankas Verteidigung. Zwischen den Verbündeten und der Stadt liegt der Ozean. Gemeinsam beginnen sie eine Brücke zu bauen.",
        prompt: "Wie soll Rama den Übergang führen?",
        characterIds: ["rama", "hanuman", "vibhishana"],
        choices: [
          { text: "Vibhishanas Rat hören und jedem Verbündeten eine Aufgabe geben.", quality: "compassion", result: "Alle tragen ihren Teil bei. Durch gemeinsame Anstrengung wächst die Brücke, und das Heer überquert sie zusammen." },
          { text: "Das Heer mit dem klaren Schwur stärken, in Lanka vereint zu bleiben.", quality: "resolve", result: "Die Verbündeten folgen Ramas Ruf. Mit festem Ziel vollenden sie den Übergang und erreichen Lankas Küste." }
        ]
      },
      finalText: "In Lanka stellen sich Rama und seine Verbündeten Ravanas Streitkräften entgegen. Die Schlacht prüft jedes Versprechen auf dem langen Weg. Sitas Freiheit und der Frieden des Reiches stehen auf dem Spiel; Rama muss entscheiden, wie er Ravana begegnet.",
      finalLabel: "VII · Vor den Toren Lankas",
      endingLabel: "VIII · Die Rückkehr nach Ayodhya",
      endingProgress: "Heimkehr"
    },
    ru: {
      middle: {
        label: "IV · Союз в Кишкиндхе",
        title: ["Обещание", "союзникам"],
        text: "После того как Ситу увезли на Ланку, Рама и Лакшмана встречают в лесу Ханумана. Он приводит их к Сугриве, которому тоже нужна помощь: брат отнял у него царство. Два предводителя могут заключить союз и помочь друг другу.",
        prompt: "Как Раме завоевать доверие Сугривы?",
        characterIds: ["rama", "lakshmana", "hanuman"],
        choices: [
          { text: "Пообещать помочь Сугриве вернуть царство, а затем попросить помочь найти Ситу.", quality: "compassion", result: "Рама и Сугрива заключают союз. Сугрива возвращает царство, а его народ помогает искать Ситу." },
          { text: "Сразу пригласить Сугриву на поиски, объединившись общей целью.", quality: "resolve", result: "Сугрива отправляет своих людей во все стороны. Общее дело становится началом крепкого союза." }
        ]
      },
      bharata: {
        label: "II · Сандалии на троне",
        title: ["Царство под", "надёжной защитой"],
        text: "Бхарата узнаёт, что Рама ушёл в лес. Вместе с жителями Айодхьи он приходит просить Раму вернуться. Рама хранит обещание, данное отцу, и Бхарата решает править лишь как хранитель царства.",
        prompt: "Что Бхарате увезти с собой в Айодхью?",
        characterIds: ["rama", "bharata", "lakshmana"],
        choices: [
          { text: "Сандалии Рамы как знак, что трон принадлежит ему.", quality: "resolve", result: "Бхарата ставит сандалии Рамы на трон и правит от его имени, пока не истекут обещанные годы." },
          { text: "Обещание, что Айодхья будет ждать возвращения Рамы.", quality: "compassion", result: "Бхарата возвращается с обещанием хранить царство и беречь место для Рамы в каждом сердце." }
        ]
      },
      panchavati: {
        label: "III · Золотой олень",
        title: ["Мгновение", "в Панчавати"],
        text: "В Панчавати Ситу привлекает золотой олень. Рама отправляется за ним, а Лакшмана остаётся её охранять. Крик из леса уводит и Лакшману; тогда Равана под видом странника похищает Ситу и увозит на Ланку. Джатаю смело пытается его остановить.",
        prompt: "С чего начать поиски?",
        characterIds: ["rama", "sita", "lakshmana"],
        choices: [
          { text: "Последовать последним словам Джатаю и искать на юге, в сторону Ланки.", quality: "resolve", result: "Мужество Джатаю указывает Раме направление. Братья отправляются на юг, решив найти Ситу." },
          { text: "Почтить Джатаю, а затем собрать все подсказки леса.", quality: "compassion", result: "Рама чтит подвиг Джатаю. Терпеливо братья собирают знаки, которые ведут их дальше." }
        ]
      },
      hanuman: {
        label: "V · Через океан",
        title: ["Кольцо летит", "через небо"],
        text: "Вместе с отрядами Сугривы Хануман перепрыгивает через океан на Ланку. В роще Ашока он находит Ситу: она под стражей, но не сломлена. Ему нужно доказать, что он пришёл как посланник Рамы и надежда близка.",
        prompt: "Что Хануману передать Сите?",
        characterIds: ["hanuman", "sita"],
        choices: [
          { text: "Кольцо Рамы и тихое обещание, что он придёт за ней.", quality: "compassion", result: "Сита узнаёт кольцо и передаёт Раме ответный знак. Хануман несёт её весть через океан." },
          { text: "Добрую весть о союзниках Рамы, собирающихся на берегу.", quality: "resolve", result: "Хануман рассказывает Сите, что союзники готовы действовать. К ней возвращается надежда, а Хануман приносит весть о её стойкости." }
        ]
      },
      bridge: {
        label: "VI · Мост на Ланку",
        title: ["Камень за камнем,", "вместе"],
        text: "Искатели возвращаются с вестью Ситы. Вибхишана покидает двор Раваны и присоединяется к Раме, предупреждая об обороне Ланки. Между союзниками и городом лежит океан; вместе они начинают строить мост.",
        prompt: "Как Раме повести союзников через океан?",
        characterIds: ["rama", "hanuman", "vibhishana"],
        choices: [
          { text: "Выслушать Вибхишану и дать каждому союзнику своё дело.", quality: "compassion", result: "Каждый вносит свой вклад. Общими усилиями мост растёт, и войско переправляется вместе." },
          { text: "Сплотить войско ясной клятвой держаться вместе на Ланке.", quality: "resolve", result: "Союзники откликаются на призыв Рамы. С твёрдой целью они завершают переправу и достигают берега Ланки." }
        ]
      },
      finalText: "На Ланке Рама и его союзники встречают войско Раваны. Битва становится испытанием всех обещаний, данных в долгом пути. На кону свобода Ситы и мир в царстве; Раме предстоит решить, как встретить Равану.",
      finalLabel: "VII · Врата Ланки",
      endingLabel: "VIII · Возвращение в Айодхью",
      endingProgress: "Возвращение домой"
    },
    ja: {
      middle: {
        label: "IV · キシュキンダーの盟約",
        title: ["仲間との", "約束"],
        text: "シーターがランカーへ連れ去られた後、ラーマとラクシュマナは森でハヌマーンに出会います。ハヌマーンは二人をスグリーヴァのもとへ案内します。兄に王国を奪われた彼も助けを必要としていました。二人の指導者は、互いに力を貸す盟約を結べます。",
        prompt: "ラーマはどうすればスグリーヴァの信頼を得られるでしょう？",
        characterIds: ["rama", "lakshmana", "hanuman"],
        choices: [
          { text: "王国を取り戻す手助けを約束し、その後シーター探しへの協力を頼む。", quality: "compassion", result: "ラーマとスグリーヴァは盟約を結びます。王国を取り戻したスグリーヴァの民は、シーター探しに加わります。" },
          { text: "共通の目的を掲げ、すぐに捜索へ加わるよう誘う。", quality: "resolve", result: "スグリーヴァは民をあらゆる方角へ送り出します。共通の使命から、長い協力関係が始まります。" }
        ]
      },
      bharata: {
        label: "II · 玉座のサンダル",
        title: ["託された", "王国"],
        text: "ラーマが森へ去ったと知ったバラタは、アヨーディヤーの人々とともに追いかけ、帰還を願います。ラーマは父との約束を守ります。そこでバラタは、王国を預かる者として治めることにします。",
        prompt: "バラタは何をアヨーディヤーへ持ち帰るでしょう？",
        characterIds: ["rama", "bharata", "lakshmana"],
        choices: [
          { text: "玉座はラーマのものだと示す、ラーマのサンダル。", quality: "resolve", result: "バラタはラーマのサンダルを玉座に置き、その名のもとに国を治めながら、約束の年月が過ぎるのを待ちます。" },
          { text: "ラーマの帰りをアヨーディヤー全体で待つという約束。", quality: "compassion", result: "バラタは国を守り、皆の心にラーマの居場所を残すと誓って帰ります。" }
        ]
      },
      panchavati: {
        label: "III · 金色の鹿",
        title: ["パンチャヴァティの", "ひととき"],
        text: "パンチャヴァティで、金色の鹿がシーターの目を引きます。ラーマが追い、ラクシュマナは彼女のそばに残ります。森から聞こえた叫びにラクシュマナも離れた隙に、ラーヴァナは姿を変えてシーターをランカーへ連れ去ります。ジャターユは勇敢に立ち向かいます。",
        prompt: "捜索をどう始めましょう？",
        characterIds: ["rama", "sita", "lakshmana"],
        choices: [
          { text: "ジャターユの最期の言葉を頼りに、南のランカーを目指して探す。", quality: "resolve", result: "ジャターユの勇気がラーマに進む方向を示します。二人はシーターを見つける決意を胸に南へ向かいます。" },
          { text: "ジャターユの犠牲を悼み、森の手がかりを一つずつ集める。", quality: "compassion", result: "ラーマはジャターユの犠牲をたたえます。二人は心を込めて手がかりを集め、次の道を見つけます。" }
        ]
      },
      hanuman: {
        label: "V · 海を越えて",
        title: ["空を渡る", "指輪"],
        text: "スグリーヴァの捜索隊とともに、ハヌマーンは海を飛び越えてランカーへ渡ります。アショーカの園で、見張られていても心を折らないシーターを見つけます。ラーマの使者であり、希望が近いことを伝えます。",
        prompt: "ハヌマーンはシーターに何を渡すでしょう？",
        characterIds: ["hanuman", "sita"],
        choices: [
          { text: "ラーマの指輪と、必ず迎えに来るという静かな約束。", quality: "compassion", result: "シーターは指輪を見てラーマのものと分かり、返事の品を託します。ハヌマーンはその知らせを携えて海を戻ります。" },
          { text: "海岸に仲間たちが集まりつつあるという力強い知らせ。", quality: "resolve", result: "仲間が行動の準備を整えていると知り、シーターに希望が戻ります。ハヌマーンは彼女の強さを伝えに帰ります。" }
        ]
      },
      bridge: {
        label: "VI · ランカーへの橋",
        title: ["石を一つずつ、", "みんなで"],
        text: "捜索隊はシーターの知らせを持ち帰ります。ヴィビーシャナはラーヴァナの宮廷を離れてラーマに加わり、ランカーの守りについて伝えます。仲間たちと都の間には海があります。皆で橋を築き始めます。",
        prompt: "ラーマはどうやって海を渡るでしょう？",
        characterIds: ["rama", "hanuman", "vibhishana"],
        choices: [
          { text: "ヴィビーシャナの助言を聞き、仲間一人ひとりに役目を託す。", quality: "compassion", result: "皆がそれぞれ力を尽くします。協力して橋を築き、軍勢はともに海を渡ります。" },
          { text: "ランカーでも力を合わせると誓い、軍勢を鼓舞する。", quality: "resolve", result: "仲間たちはラーマの呼びかけに応えます。心を一つに橋を完成させ、ランカーの岸へ渡ります。" }
        ]
      },
      finalText: "ランカーで、ラーマと仲間たちはラーヴァナの軍勢と向き合います。この戦いは、旅の中で交わした約束のすべてを試します。シーターの自由と国の平和がかかる中、ラーマはラーヴァナにどう立ち向かうかを選びます。",
      finalLabel: "VII · ランカーの門",
      endingLabel: "VIII · アヨーディヤーへの帰還",
      endingProgress: "故郷への帰還"
    }
  };

  for (const [language, scenes] of Object.entries(additions)) {
    const locale = window.ramayanaLocales[language];
    locale.chapters[1] = scenes.middle;
    locale.chapters.splice(1, 0, scenes.bharata, scenes.panchavati);
    locale.chapters.splice(locale.chapters.length - 1, 0, scenes.hanuman, scenes.bridge);
    locale.chapters[locale.chapters.length - 1].label = scenes.finalLabel;
    locale.chapters[locale.chapters.length - 1].text = scenes.finalText;
    locale.ending.label = scenes.endingLabel;
    locale.ending.progress = scenes.endingProgress;
  }
})();