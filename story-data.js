window.ramayanaLocales = {
  en: {
    lang: "en",
    documentTitle: "The Ramayana | A Journey of Courage and Compassion",
    metaDescription: "A choice-driven journey through the Ramayana.",
    brandTitle: "THE RAMAYANA",
    brandTagline: "A STORY OF COURAGE & COMPASSION",
    languageLabel: "Language",
    progressLabel: "Story progress",
    progressOpening: "Opening scene",
    continue: "Continue the journey",
    back: "Back",
    restart: "Start over",
    patternSoft: "Mantra: soft",
    patternBright: "Mantra: glow",
    musicOff: "Music: off",
    musicOn: "Music: on",
    journeyLabel: "Look back at the choices you made",
    footerStory: "A retelling inspired by the Ramayana",
    artAlt: "A colorful Indian devotional painting of Rama and Sita's coronation.",
    artCaption: "Rama and Sita's coronation",
    artCredit: "Public domain · Wikimedia Commons",
    artSceneCredit: "Original scene illustration",
    castLabel: "Meet the characters",
    meetCharacter: "Meet",
    guideClose: "Close",
    intro: {
      eyebrow: "An interactive retelling",
      title: ["The Ramayana:", "a journey home"],
      lead: "Through forest, ocean, and the gates of Lanka, follow a story shaped by duty, courage, and compassion.",
      body: "Walk beside Rama, Sita, and Lakshmana. Choose how key moments unfold, meet the allies who change the journey, and return with the family to Ayodhya.",
      begin: "Begin the journey"
    },
    chapters: [
      {
        label: "I · A promise kept",
        title: ["The forest", "begins"],
        text: "In Ayodhya, Rama accepts fourteen years in exile to honor his father's promise. Sita chooses to go beside him, and Lakshmana joins them. Before they leave, the brothers must say farewell.",
        prompt: "What should guide Rama's farewell?",
        characterIds: ["rama", "sita", "lakshmana", "bharata"],
        choices: [
          { text: "Keep his promise calmly, trusting Bharata to care for Ayodhya.", quality: "resolve", result: "Rama keeps his word. Bharata later refuses the throne for himself and rules as its caretaker, placing Rama's sandals upon the throne." },
          { text: "Speak with Bharata first, so duty and family can part in peace.", quality: "compassion", result: "The brothers part with affection. Bharata promises to protect Ayodhya and wait faithfully for Rama's return." }
        ]
      },
      {
        label: "II · Across the sea",
        title: ["A message of", "hope"],
        text: "Years pass. Ravana carries Sita away to Lanka. Rama and Lakshmana search for her, and meet Hanuman, whose courage and devotion turn grief into hope. Hanuman prepares to cross the ocean.",
        prompt: "What does Rama entrust to Hanuman?",
        characterIds: ["rama", "sita", "hanuman"],
        choices: [
          { text: "A blessing and complete trust in Hanuman's courage.", quality: "resolve", result: "Hanuman rises to the task. His journey brings news of Sita and rekindles hope among the allies." },
          { text: "His ring, so Sita will know that help is coming.", quality: "compassion", result: "Hanuman carries Rama's ring across the sea. Sita recognizes it and sends word that she still holds fast." }
        ]
      },
      {
        label: "III · The gates of Lanka",
        title: ["Before the", "battle"],
        text: "Ravana is urged to return Sita, but he will not. Vibhishana leaves Lanka and joins Rama. With the help of their allies, Rama's forces cross the ocean and reach Lanka.",
        prompt: "How should Rama meet the final challenge?",
        characterIds: ["rama", "ravana", "vibhishana", "hanuman"],
        choices: [
          { text: "Offer Ravana one last chance to make peace and return Sita.", quality: "compassion", result: "Rama offers peace once more. When Ravana rejects it, the battle begins with no doubt that a peaceful path was tried." },
          { text: "Stand firm with his allies and prepare to defend what is right.", quality: "resolve", result: "Rama and his allies face the danger together. Their trust in one another carries them through the battle." }
        ]
      }
    ],
    ending: {
      label: "IV · The return to Ayodhya",
      progress: "Homecoming",
      title: ["The long road", "ends at home"],
      text: "Ravana is defeated, and Sita is reunited with Rama. After fourteen years, the companions return to Ayodhya, where Bharata welcomes them home.",
      lessons: {
        compassion: "Courage is strongest when it leaves room for kindness.",
        resolve: "Promises and courage can guide a long road home.",
        balance: "A long road asks for both a brave heart and a compassionate one."
      },
      restart: "Begin again"
    },
    characters: {
      rama: { name: "Rama", role: "Prince of Ayodhya", detail: "His choices are guided by duty, courage, and compassion." },
      sita: { name: "Sita", role: "Rama's beloved", detail: "Steadfast and courageous through exile and captivity." },
      lakshmana: { name: "Lakshmana", role: "Rama's brother", detail: "He accompanies Rama and Sita into exile with unwavering loyalty." },
      bharata: { name: "Bharata", role: "Guardian of Ayodhya", detail: "He protects the kingdom and waits faithfully for Rama's return." },
      hanuman: { name: "Hanuman", role: "Rama's devoted ally", detail: "His strength, wisdom, and devotion carry hope across the sea." },
      ravana: { name: "Ravana", role: "King of Lanka", detail: "His refusal to return Sita brings him into conflict with Rama." },
      vibhishana: { name: "Vibhishana", role: "Ravana's brother", detail: "He leaves Lanka and joins Rama, choosing a path of righteousness." }
    }
  },
  hi: {
    lang: "hi",
    documentTitle: "रामायण | साहस और करुणा की यात्रा",
    metaDescription: "रामायण की एक सहभागी कथा-यात्रा।",
    brandTitle: "रामायण",
    brandTagline: "साहस और करुणा की कथा",
    languageLabel: "भाषा",
    progressLabel: "कथा की प्रगति",
    progressOpening: "कथा का आरंभ",
    continue: "यात्रा जारी रखें",
    back: "पीछे",
    restart: "फिर से शुरू करें",
    patternSoft: "मंत्र: हल्का",
    patternBright: "मंत्र: उजला",
    musicOff: "संगीत: बंद",
    musicOn: "संगीत: चालू",
    journeyLabel: "अपनी यात्रा के विकल्प फिर से देखें",
    footerStory: "रामायण से प्रेरित एक पुनर्कथन",
    artAlt: "राम और सीता के राज्याभिषेक का रंगीन भारतीय भक्ति-चित्र।",
    artCaption: "राम और सीता का राज्याभिषेक",
    artCredit: "सार्वजनिक डोमेन · विकिमीडिया कॉमन्स",
    artSceneCredit: "मौलिक दृश्य-चित्रण",
    castLabel: "पात्रों से मिलें",
    meetCharacter: "जानें",
    guideClose: "बंद करें",
    intro: {
      eyebrow: "एक सहभागी पुनर्कथन",
      title: ["रामायण:", "घर की ओर यात्रा"],
      lead: "वन, सागर और लंका के द्वारों से होकर धर्म, साहस और करुणा से बुनी कथा में आगे बढ़ें।",
      body: "राम, सीता और लक्ष्मण के साथ चलें। महत्वपूर्ण क्षणों के लिए अपने विकल्प चुनें, यात्रा बदलने वाले सहयोगियों से मिलें और परिवार के साथ अयोध्या लौटें।",
      begin: "यात्रा आरंभ करें"
    },
    chapters: [
      {
        label: "I · वचन का पालन",
        title: ["वन की", "शुरुआत"],
        text: "अयोध्या में राम अपने पिता के वचन की रक्षा के लिए चौदह वर्ष का वनवास स्वीकार करते हैं। सीता उनके साथ चलने का निश्चय करती हैं और लक्ष्मण भी साथ जाते हैं। प्रस्थान से पहले भाइयों को विदा लेनी है।",
        prompt: "राम की विदाई में कौन-सा भाव मार्गदर्शन करे?",
        characterIds: ["rama", "sita", "lakshmana", "bharata"],
        choices: [
          { text: "शांत मन से वचन निभाएँ और अयोध्या की देखभाल भरत पर छोड़ें।", quality: "resolve", result: "राम अपना वचन निभाते हैं। भरत स्वयं सिंहासन स्वीकार नहीं करते और राम की चरण-पादुकाएँ रखकर अयोध्या की रक्षा करते हैं।" },
          { text: "पहले भरत से बात करें, ताकि कर्तव्य और परिवार प्रेम से विदा हों।", quality: "compassion", result: "भाई स्नेह से विदा लेते हैं। भरत अयोध्या की रक्षा करने और राम की वापसी तक प्रतीक्षा करने का वचन देते हैं।" }
        ]
      },
      {
        label: "II · सागर के पार",
        title: ["आशा का", "संदेश"],
        text: "वर्ष बीतते हैं। रावण सीता को लंका ले जाता है। राम और लक्ष्मण उनकी खोज में निकलते हैं और हनुमान से मिलते हैं, जिनका साहस और भक्ति शोक को आशा में बदल देते हैं। हनुमान सागर पार करने को तैयार हैं।",
        prompt: "राम हनुमान को क्या सौंपें?",
        characterIds: ["rama", "sita", "hanuman"],
        choices: [
          { text: "आशीर्वाद और हनुमान के साहस पर पूरा विश्वास।", quality: "resolve", result: "हनुमान यह दायित्व स्वीकार करते हैं। उनकी यात्रा सीता का समाचार लाती है और साथियों में आशा जगाती है।" },
          { text: "अपनी अंगूठी, ताकि सीता जानें कि सहायता आ रही है।", quality: "compassion", result: "हनुमान राम की अंगूठी सागर पार ले जाते हैं। सीता उसे पहचानती हैं और धैर्य बनाए रखने का संदेश भेजती हैं।" }
        ]
      },
      {
        label: "III · लंका के द्वार",
        title: ["युद्ध से", "पहले"],
        text: "रावण से सीता को लौटाने का आग्रह किया जाता है, पर वह नहीं मानता। विभीषण लंका छोड़कर राम के साथ आ जाते हैं। सहयोगियों की सहायता से राम की सेना सागर पार कर लंका पहुँचती है।",
        prompt: "अंतिम चुनौती का सामना राम कैसे करें?",
        characterIds: ["rama", "ravana", "vibhishana", "hanuman"],
        choices: [
          { text: "रावण को शांति से सीता लौटाने का एक अंतिम अवसर दें।", quality: "compassion", result: "राम एक बार फिर शांति का प्रस्ताव रखते हैं। रावण के मना करने पर युद्ध शुरू होता है, यह जानते हुए कि शांतिपूर्ण मार्ग आजमाया गया।" },
          { text: "साथियों के संग अडिग रहें और धर्म की रक्षा के लिए तैयार हों।", quality: "resolve", result: "राम और उनके सहयोगी मिलकर संकट का सामना करते हैं। उनका आपसी विश्वास उन्हें युद्ध में संभालता है।" }
        ]
      }
    ],
    ending: {
      label: "IV · अयोध्या वापसी",
      progress: "घर वापसी",
      title: ["लंबी यात्रा", "घर लौटती है"],
      text: "रावण पर विजय के बाद सीता और राम का पुनर्मिलन होता है। चौदह वर्ष पूरे होने पर सभी साथी अयोध्या लौटते हैं, जहाँ भरत उनका स्वागत करते हैं।",
      lessons: {
        compassion: "साहस तभी सबसे महान होता है, जब उसमें दया के लिए भी स्थान हो।",
        resolve: "वचन और साहस घर लौटने का लंबा मार्ग दिखाते हैं।",
        balance: "लंबी यात्रा के लिए साहसी हृदय और करुणामय मन, दोनों चाहिए।"
      },
      restart: "फिर से यात्रा करें"
    },
    characters: {
      rama: { name: "राम", role: "अयोध्या के राजकुमार", detail: "उनके निर्णय धर्म, साहस और करुणा से प्रेरित होते हैं।" },
      sita: { name: "सीता", role: "राम की प्रिय", detail: "वनवास और बंदी जीवन में भी वे धैर्य और साहस बनाए रखती हैं।" },
      lakshmana: { name: "लक्ष्मण", role: "राम के भाई", detail: "वे अटूट निष्ठा से राम और सीता के साथ वनवास जाते हैं।" },
      bharata: { name: "भरत", role: "अयोध्या के संरक्षक", detail: "वे राज्य की रक्षा करते हैं और राम की वापसी की प्रतीक्षा करते हैं।" },
      hanuman: { name: "हनुमान", role: "राम के निष्ठावान सहयोगी", detail: "उनका बल, बुद्धि और भक्ति सागर पार आशा पहुँचाते हैं।" },
      ravana: { name: "रावण", role: "लंका के राजा", detail: "सीता को न लौटाने के उनके निर्णय से राम के साथ संघर्ष होता है।" },
      vibhishana: { name: "विभीषण", role: "रावण के भाई", detail: "वे लंका छोड़कर धर्म का मार्ग चुनते हुए राम के साथ आते हैं।" }
    }
  },
  de: {
    lang: "de",
    documentTitle: "Das Ramayana | Eine Reise voller Mut und Mitgefühl",
    metaDescription: "Eine interaktive Reise durch das Ramayana.",
    brandTitle: "DAS RAMAYANA",
    brandTagline: "EINE GESCHICHTE VON MUT & MITGEFÜHL",
    languageLabel: "Sprache",
    progressLabel: "Fortschritt der Geschichte",
    progressOpening: "Auftakt",
    continue: "Die Reise fortsetzen",
    back: "Zurück",
    restart: "Neu beginnen",
    patternSoft: "Mantra: sanft",
    patternBright: "Mantra: leuchtend",
    musicOff: "Musik: aus",
    musicOn: "Musik: an",
    journeyLabel: "Deine Entscheidungen noch einmal ansehen",
    footerStory: "Eine Nacherzählung nach dem Ramayana",
    artAlt: "Ein farbenfrohes indisches Andachtsbild von Ramas und Sitas Krönung.",
    artCaption: "Ramas und Sitas Krönung",
    artCredit: "Gemeinfrei · Wikimedia Commons",
    artSceneCredit: "Eigene Szenenillustration",
    castLabel: "Lerne die Figuren kennen",
    meetCharacter: "Figur",
    guideClose: "Schließen",
    intro: {
      eyebrow: "Eine interaktive Nacherzählung",
      title: ["Das Ramayana:", "eine Reise nach Hause"],
      lead: "Durch Wald und Meer bis vor die Tore Lankas: Folge einer Geschichte von Pflicht, Mut und Mitgefühl.",
      body: "Begleite Rama, Sita und Lakshmana. Entscheide an entscheidenden Wendepunkten, lerne die Verbündeten kennen und kehre mit der Familie nach Ayodhya zurück.",
      begin: "Reise beginnen"
    },
    chapters: [
      {
        label: "I · Ein gehaltenes Versprechen",
        title: ["Der Wald", "beginnt"],
        text: "In Ayodhya nimmt Rama vierzehn Jahre Verbannung an, um das Versprechen seines Vaters zu erfüllen. Sita entscheidet sich, ihn zu begleiten, und Lakshmana schließt sich ihnen an. Vor dem Aufbruch müssen sich die Brüder verabschieden.",
        prompt: "Was soll Ramas Abschied leiten?",
        characterIds: ["rama", "sita", "lakshmana", "bharata"],
        choices: [
          { text: "Das Versprechen ruhig halten und Bharata Ayodhya anvertrauen.", quality: "resolve", result: "Rama hält sein Wort. Bharata lehnt die Krone für sich ab und bewahrt das Reich, während Ramas Sandalen auf dem Thron stehen." },
          { text: "Zuerst mit Bharata sprechen, damit Pflicht und Familie in Frieden auseinandergehen.", quality: "compassion", result: "Die Brüder verabschieden sich in Liebe. Bharata verspricht, Ayodhya zu schützen und treu auf Ramas Rückkehr zu warten." }
        ]
      },
      {
        label: "II · Über das Meer",
        title: ["Eine Botschaft", "der Hoffnung"],
        text: "Jahre vergehen. Ravana bringt Sita nach Lanka. Rama und Lakshmana suchen nach ihr und begegnen Hanuman, dessen Mut und Hingabe aus Trauer neue Hoffnung machen. Hanuman bereitet sich auf die Überquerung des Meeres vor.",
        prompt: "Was vertraut Rama Hanuman an?",
        characterIds: ["rama", "sita", "hanuman"],
        choices: [
          { text: "Einen Segen und sein volles Vertrauen in Hanumans Mut.", quality: "resolve", result: "Hanuman nimmt die Aufgabe an. Seine Reise bringt Nachricht von Sita und schenkt den Verbündeten neue Hoffnung." },
          { text: "Seinen Ring, damit Sita weiß, dass Hilfe unterwegs ist.", quality: "compassion", result: "Hanuman trägt Ramas Ring über das Meer. Sita erkennt ihn und lässt ausrichten, dass sie standhaft bleibt." }
        ]
      },
      {
        label: "III · Vor den Toren Lankas",
        title: ["Vor der", "Schlacht"],
        text: "Ravana wird aufgefordert, Sita zurückzugeben, doch er weigert sich. Vibhishana verlässt Lanka und schließt sich Rama an. Mit ihren Verbündeten überquert Ramas Heer das Meer und erreicht Lanka.",
        prompt: "Wie soll Rama der letzten Herausforderung begegnen?",
        characterIds: ["rama", "ravana", "vibhishana", "hanuman"],
        choices: [
          { text: "Ravana ein letztes Mal Frieden anbieten und Sita zurückfordern.", quality: "compassion", result: "Rama bietet erneut Frieden an. Als Ravana ablehnt, beginnt der Kampf, nachdem der friedliche Weg versucht wurde." },
          { text: "Mit seinen Verbündeten standhaft bleiben und das Richtige verteidigen.", quality: "resolve", result: "Rama und seine Verbündeten stellen sich gemeinsam der Gefahr. Ihr Vertrauen trägt sie durch die Schlacht." }
        ]
      }
    ],
    ending: {
      label: "IV · Die Rückkehr nach Ayodhya",
      progress: "Heimkehr",
      title: ["Der lange Weg", "führt nach Hause"],
      text: "Ravana ist besiegt, und Sita und Rama sind wieder vereint. Nach vierzehn Jahren kehren alle nach Ayodhya zurück, wo Bharata sie willkommen heißt.",
      lessons: {
        compassion: "Mut ist am stärksten, wenn er auch Platz für Güte lässt.",
        resolve: "Versprechen und Mut können den langen Weg nach Hause weisen.",
        balance: "Ein langer Weg braucht ein mutiges und ein mitfühlendes Herz."
      },
      restart: "Noch einmal beginnen"
    },
    characters: {
      rama: { name: "Rama", role: "Prinz von Ayodhya", detail: "Seine Entscheidungen folgen Pflichtgefühl, Mut und Mitgefühl." },
      sita: { name: "Sita", role: "Ramas Gefährtin", detail: "Auch in Verbannung und Gefangenschaft bleibt sie standhaft und mutig." },
      lakshmana: { name: "Lakshmana", role: "Ramas Bruder", detail: "Mit unerschütterlicher Treue begleitet er Rama und Sita in die Verbannung." },
      bharata: { name: "Bharata", role: "Beschützer Ayodhyas", detail: "Er bewahrt das Reich und wartet treu auf Ramas Rückkehr." },
      hanuman: { name: "Hanuman", role: "Ramas treuer Verbündeter", detail: "Seine Kraft, Weisheit und Hingabe tragen Hoffnung über das Meer." },
      ravana: { name: "Ravana", role: "König von Lanka", detail: "Seine Weigerung, Sita zurückzugeben, führt zum Konflikt mit Rama." },
      vibhishana: { name: "Vibhishana", role: "Ravanas Bruder", detail: "Er verlässt Lanka und schließt sich Rama an, um dem rechten Weg zu folgen." }
    }
  },
  ru: {
    lang: "ru",
    documentTitle: "Рамаяна | Путь мужества и сострадания",
    metaDescription: "Интерактивное путешествие по Рамаяне.",
    brandTitle: "РАМАЯНА",
    brandTagline: "ИСТОРИЯ О МУЖЕСТВЕ И СОСТРАДАНИИ",
    languageLabel: "Язык",
    progressLabel: "Ход истории",
    progressOpening: "Начало",
    continue: "Продолжить путь",
    back: "Назад",
    restart: "Начать заново",
    patternSoft: "Мантра: мягко",
    patternBright: "Мантра: ярко",
    musicOff: "Музыка: выкл.",
    musicOn: "Музыка: вкл.",
    journeyLabel: "Вспомнить свои решения в пути",
    footerStory: "Пересказ по мотивам «Рамаяны»",
    artAlt: "Яркая индийская devotional-живопись с коронацией Рамы и Ситы.",
    artCaption: "Коронация Рамы и Ситы",
    artCredit: "Общественное достояние · Wikimedia Commons",
    artSceneCredit: "Авторская иллюстрация сцены",
    castLabel: "Познакомиться с героями",
    meetCharacter: "Герой",
    guideClose: "Закрыть",
    intro: {
      eyebrow: "Интерактивный пересказ",
      title: ["Рамаяна:", "путь домой"],
      lead: "Пройди через леса, океан и врата Ланки в истории о долге, мужестве и сострадании.",
      body: "Отправляйся вместе с Рамой, Ситой и Лакшманой. Выбирай, как раскрываются важные моменты, знакомься с союзниками и возвращайся с семьёй в Айодхью.",
      begin: "Начать путешествие"
    },
    chapters: [
      {
        label: "I · Верность обещанию",
        title: ["Лесное", "начало"],
        text: "В Айодхье Рама принимает четырнадцать лет изгнания, чтобы исполнить обещание отца. Сита решает отправиться с ним, а Лакшмана присоединяется к ним. Перед уходом братьям предстоит проститься.",
        prompt: "Что должно направлять прощание Рамы?",
        characterIds: ["rama", "sita", "lakshmana", "bharata"],
        choices: [
          { text: "Спокойно сдержать обещание и доверить Айодхью Бхарате.", quality: "resolve", result: "Рама держит слово. Бхарата отказывается от трона для себя и правит как хранитель, поставив сандалии Рамы на престол." },
          { text: "Сначала поговорить с Бхаратой, чтобы долг и семья расстались мирно.", quality: "compassion", result: "Братья прощаются с любовью. Бхарата обещает хранить Айодхью и верно ждать возвращения Рамы." }
        ]
      },
      {
        label: "II · Через океан",
        title: ["Весть о", "надежде"],
        text: "Проходят годы. Равана увозит Ситу на Ланку. Рама и Лакшмана отправляются на её поиски и встречают Ханумана, чьи мужество и преданность превращают скорбь в надежду. Хануман готовится пересечь океан.",
        prompt: "Что Рама доверит Хануману?",
        characterIds: ["rama", "sita", "hanuman"],
        choices: [
          { text: "Благословение и полную веру в мужество Ханумана.", quality: "resolve", result: "Хануман принимает задачу. Его путь приносит вести о Сите и возвращает надежду союзникам." },
          { text: "Своё кольцо, чтобы Сита знала: помощь уже близко.", quality: "compassion", result: "Хануман несёт кольцо Рамы через море. Сита узнаёт его и передаёт, что сохраняет стойкость." }
        ]
      },
      {
        label: "III · Врата Ланки",
        title: ["Перед", "битвой"],
        text: "Равану призывают вернуть Ситу, но он отказывается. Вибхишана покидает Ланку и присоединяется к Раме. С помощью союзников войско Рамы пересекает океан и достигает Ланки.",
        prompt: "Как Раме встретить последнее испытание?",
        characterIds: ["rama", "ravana", "vibhishana", "hanuman"],
        choices: [
          { text: "В последний раз предложить Раване мир и возвращение Ситы.", quality: "compassion", result: "Рама снова предлагает мир. Равана отказывается, и битва начинается после того, как мирный путь был испробован." },
          { text: "Стоять вместе с союзниками и защищать правое дело.", quality: "resolve", result: "Рама и его союзники встречают опасность вместе. Доверие друг к другу помогает им пройти через битву." }
        ]
      }
    ],
    ending: {
      label: "IV · Возвращение в Айодхью",
      progress: "Возвращение домой",
      title: ["Долгий путь", "ведёт домой"],
      text: "Равана повержен, и Сита вновь рядом с Рамой. Спустя четырнадцать лет спутники возвращаются в Айодхью, где их встречает Бхарата.",
      lessons: {
        compassion: "Мужество сильнее всего, когда в нём остаётся место доброте.",
        resolve: "Обещания и отвага укажут дорогу домой.",
        balance: "Долгий путь требует и смелого сердца, и сострадания."
      },
      restart: "Начать сначала"
    },
    characters: {
      rama: { name: "Рама", role: "Принц Айодхьи", detail: "Его решения направляют долг, мужество и сострадание." },
      sita: { name: "Сита", role: "Возлюбленная Рамы", detail: "Она сохраняет стойкость и мужество в изгнании и плену." },
      lakshmana: { name: "Лакшмана", role: "Брат Рамы", detail: "Он с непоколебимой преданностью сопровождает Раму и Ситу в изгнании." },
      bharata: { name: "Бхарата", role: "Хранитель Айодхьи", detail: "Он бережёт царство и верно ждёт возвращения Рамы." },
      hanuman: { name: "Хануман", role: "Преданный союзник Рамы", detail: "Его сила, мудрость и преданность несут надежду через океан." },
      ravana: { name: "Равана", role: "Царь Ланки", detail: "Отказ вернуть Ситу приводит его к конфликту с Рамой." },
      vibhishana: { name: "Вибхишана", role: "Брат Раваны", detail: "Он покидает Ланку и встаёт на сторону Рамы, выбирая праведный путь." }
    }
  },
  ja: {
    lang: "ja",
    documentTitle: "ラーマーヤナ | 勇気と思いやりの旅",
    metaDescription: "選択しながら進むラーマーヤナの物語。",
    brandTitle: "ラーマーヤナ",
    brandTagline: "勇気と思いやりの物語",
    languageLabel: "言語",
    progressLabel: "物語の進み具合",
    progressOpening: "物語のはじまり",
    continue: "旅を続ける",
    back: "戻る",
    restart: "最初から",
    patternSoft: "マントラ：ひかえめ",
    patternBright: "マントラ：あざやか",
    musicOff: "音楽：オフ",
    musicOn: "音楽：オン",
    journeyLabel: "旅の選択を振り返る",
    footerStory: "ラーマーヤナに着想を得た物語",
    artAlt: "ラーマとシーターの戴冠を描いた、色鮮やかなインドの祈りの絵。",
    artCaption: "ラーマとシーターの戴冠",
    artCredit: "パブリックドメイン · Wikimedia Commons",
    artSceneCredit: "オリジナルの場面イラスト",
    castLabel: "登場人物に会う",
    meetCharacter: "人物紹介",
    guideClose: "閉じる",
    intro: {
      eyebrow: "選択して進む物語",
      title: ["ラーマーヤナ：", "帰郷の旅"],
      lead: "森、海、ランカーの門を越えて、義務と勇気と思いやりの物語をたどります。",
      body: "ラーマ、シーター、ラクシュマナと旅をしましょう。大切な場面で選択し、旅を変える仲間たちに出会い、一家とともにアヨーディヤーへ帰ります。",
      begin: "旅を始める"
    },
    chapters: [
      {
        label: "I · 約束を守る",
        title: ["森の", "はじまり"],
        text: "アヨーディヤーで、ラーマは父の約束を守るため、十四年間の追放を受け入れます。シーターは彼とともに行くことを選び、ラクシュマナも同行します。出発の前に、兄弟は別れを告げます。",
        prompt: "ラーマの別れを導くのは、どんな思いでしょう？",
        characterIds: ["rama", "sita", "lakshmana", "bharata"],
        choices: [
          { text: "約束を静かに守り、アヨーディヤーをバラタに託す。", quality: "resolve", result: "ラーマは約束を守ります。バラタは王位を自分のものとせず、ラーマの履物を玉座に置いて国を守ります。" },
          { text: "まずバラタと話し、家族が穏やかに別れられるようにする。", quality: "compassion", result: "兄弟は深い愛情をもって別れます。バラタは国を守り、ラーマの帰りを待つと誓います。" }
        ]
      },
      {
        label: "II · 海を越えて",
        title: ["希望の", "知らせ"],
        text: "年月が過ぎ、ラーヴァナはシーターをランカーへ連れ去ります。ラーマとラクシュマナは彼女を探し、悲しみを希望へ変える勇気と信愛の持ち主、ハヌマーンに出会います。ハヌマーンは海を渡る支度をします。",
        prompt: "ラーマはハヌマーンに何を託すでしょう？",
        characterIds: ["rama", "sita", "hanuman"],
        choices: [
          { text: "祝福と、ハヌマーンの勇気への揺るぎない信頼。", quality: "resolve", result: "ハヌマーンは使命を引き受けます。その旅はシーターの消息を届け、仲間たちに希望を取り戻します。" },
          { text: "助けが来るとシーターに伝えるための指輪。", quality: "compassion", result: "ハヌマーンはラーマの指輪を海の向こうへ運びます。シーターはそれを見て、希望を失っていないと伝えます。" }
        ]
      },
      {
        label: "III · ランカーの門",
        title: ["戦いの", "前に"],
        text: "ラーヴァナはシーターを返すよう求められますが、応じません。ヴィビーシャナはランカーを離れ、ラーマの側につきます。仲間たちの助けを得て、ラーマの軍勢は海を渡りランカーへ向かいます。",
        prompt: "最後の試練に、ラーマはどう向き合うでしょう？",
        characterIds: ["rama", "ravana", "vibhishana", "hanuman"],
        choices: [
          { text: "シーターを返し、和平を結ぶ最後の機会をラーヴァナに与える。", quality: "compassion", result: "ラーマはもう一度、和平を申し出ます。ラーヴァナが拒むと、平和への道を試したうえで戦いが始まります。" },
          { text: "仲間とともに立ち、正しいことを守る覚悟を決める。", quality: "resolve", result: "ラーマと仲間たちは力を合わせて危機に立ち向かいます。互いへの信頼が戦いを支えます。" }
        ]
      }
    ],
    ending: {
      label: "IV · アヨーディヤーへの帰還",
      progress: "故郷への帰還",
      title: ["長い旅路", "故郷へ"],
      text: "ラーヴァナは倒れ、シーターはラーマと再会します。十四年の時を経て、一行はアヨーディヤーへ帰り、バラタに迎えられます。",
      lessons: {
        compassion: "優しさを忘れないとき、勇気はいっそう強くなります。",
        resolve: "約束と勇気が、長い帰り道を照らします。",
        balance: "長い旅には、勇敢な心と思いやりの心、その両方が必要です。"
      },
      restart: "もう一度旅をする"
    },
    characters: {
      rama: { name: "ラーマ", role: "アヨーディヤーの王子", detail: "義務と勇気、そして思いやりを大切にして決断します。" },
      sita: { name: "シーター", role: "ラーマの伴侶", detail: "追放や囚われの中でも、揺るがぬ心と勇気を保ちます。" },
      lakshmana: { name: "ラクシュマナ", role: "ラーマの弟", detail: "変わらぬ忠誠心でラーマとシーターに同行します。" },
      bharata: { name: "バラタ", role: "アヨーディヤーの守り手", detail: "国を守りながら、ラーマの帰りを誠実に待ちます。" },
      hanuman: { name: "ハヌマーン", role: "ラーマの忠実な仲間", detail: "力と知恵と信愛で、海の向こうへ希望を届けます。" },
      ravana: { name: "ラーヴァナ", role: "ランカーの王", detail: "シーターを返さない決断が、ラーマとの対立を招きます。" },
      vibhishana: { name: "ヴィビーシャナ", role: "ラーヴァナの弟", detail: "ランカーを離れ、正しい道を選んでラーマに加わります。" }
    }
  }
};