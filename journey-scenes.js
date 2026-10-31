(() => {
  const scenes = {
    en: {
      river: {
        label: "The river crossing",
        title: ["A boat at", "first light"],
        text: "At the edge of the Ganga, the forest falls quiet. Nishada chief Guha offers the exiles a boat and a place by the fire. Beyond the water lies an unknown road; behind them, Ayodhya is already a memory.",
        prompt: "How will Rama honor this first kindness?",
        characterIds: ["rama", "sita", "lakshmana"],
        choices: [
          { text: "Thank Guha as a friend, and share a moment before the crossing.", quality: "compassion", result: "Guha's welcome turns a lonely departure into a fellowship. At dawn, the boat carries not strangers, but friends." },
          { text: "Accept the boat and keep moving while the morning is clear.", quality: "resolve", result: "The river opens before them. With a steady pace and a grateful farewell, the exiles begin the long forest road." }
        ]
      },
      jatayu: {
        label: "The witness in the forest",
        title: ["A voice", "beneath the trees"],
        text: "Rama and Lakshmana find the wounded Jatayu beneath the trees. Though his strength is fading, the great bird tells them where Ravana has taken Sita. His final gift is a direction—and the proof that she was not alone.",
        prompt: "What should Rama do before following the trail?",
        characterIds: ["rama", "lakshmana"],
        choices: [
          { text: "Stay beside Jatayu, honor his courage, and give him a dignified farewell.", quality: "compassion", result: "Rama grieves for a friend and honors Jatayu's brave heart. The brothers carry his final message with them." },
          { text: "Memorize the southern trail, then carry Jatayu's message onward.", quality: "resolve", result: "The brothers hold fast to every clue Jatayu gives. His courage becomes their compass as they set out south." }
        ]
      },
      envoy: {
        label: "A final embassy",
        title: ["One last", "open door"],
        text: "The bridge is behind them; Lanka's gates rise ahead. Before the first arrow flies, Rama sends Angada to Ravana with one final offer: return Sita, and let the city choose peace. In Ravana's court, every eye turns to the messenger.",
        prompt: "What should Angada carry into the court?",
        characterIds: ["rama", "hanuman", "ravana"],
        choices: [
          { text: "A clear offer of peace, with dignity left open for Ravana.", quality: "compassion", result: "Angada speaks without insult and leaves a path to peace. Ravana refuses, but the choice—and its cost—belongs to him." },
          { text: "A firm boundary: Sita must be freed, and the allies will not abandon her.", quality: "resolve", result: "Angada's message is unmistakable. The allies stand united, ready to protect Sita and one another." }
        ]
      },
      reunion: {
        label: "After the storm",
        title: ["The quiet", "after victory"],
        text: "The battle is over. Amid the hush after the storm, Rama and Sita see one another again, while their companions gather close. Victory is not only the fall of a fortress; it is the chance to begin again with care.",
        prompt: "What should this homecoming remember?",
        characterIds: ["rama", "sita", "hanuman", "bharata"],
        choices: [
          { text: "Give thanks to every ally whose courage carried the journey.", quality: "compassion", result: "The reunion becomes a moment of shared gratitude. No one who helped along the road is forgotten." },
          { text: "Turn toward Ayodhya and the promise of rebuilding together.", quality: "resolve", result: "The companions set their sights on home. They carry the lessons of the road into the work of peace." }
        ]
      }
    },
    hi: {
      river: {
        label: "गंगा का पार",
        title: ["प्रभात में", "एक नाव"],
        text: "गंगा के तट पर वन शांत हो जाता है। निषादराज गुह वनवासियों को नाव और अग्नि के पास स्थान देते हैं। जल के उस पार अनजाना मार्ग है; पीछे अयोध्या स्मृति बनती जा रही है।",
        prompt: "राम इस पहली सद्भावना का सम्मान कैसे करें?",
        characterIds: ["rama", "sita", "lakshmana"],
        choices: [
          { text: "गुह को मित्र मानकर धन्यवाद दें और पार जाने से पहले कुछ पल साथ बिताएँ।", quality: "compassion", result: "गुह का स्वागत अकेली विदाई को मित्रता में बदल देता है। भोर में नाव पर अजनबी नहीं, मित्र सवार होते हैं।" },
          { text: "नाव स्वीकार कर साफ सुबह रहते यात्रा आगे बढ़ाएँ।", quality: "resolve", result: "नदी का मार्ग खुलता है। दृढ़ कदमों और कृतज्ञ विदाई के साथ वनवासी लंबी यात्रा पर निकलते हैं।" }
        ]
      },
      jatayu: {
        label: "वन का साक्षी",
        title: ["वृक्षों के नीचे", "एक स्वर"],
        text: "राम और लक्ष्मण वृक्षों के नीचे घायल जटायु को पाते हैं। क्षीण होती शक्ति के बावजूद जटायु बताते हैं कि रावण सीता को कहाँ ले गया। उनका अंतिम उपहार है सही दिशा—और यह विश्वास कि सीता अकेली नहीं थीं।",
        prompt: "आगे बढ़ने से पहले राम क्या करें?",
        characterIds: ["rama", "lakshmana"],
        choices: [
          { text: "जटायु के पास ठहरें, उनके साहस का सम्मान करें और उन्हें गरिमापूर्ण विदाई दें।", quality: "compassion", result: "राम मित्र के लिए शोक करते और जटायु के साहस को प्रणाम करते हैं। दोनों भाई उनका अंतिम संदेश साथ ले चलते हैं।" },
          { text: "दक्षिण का मार्ग याद रखें और जटायु का संदेश आगे पहुँचाएँ।", quality: "resolve", result: "दोनों भाई जटायु के हर संकेत को मन में रखते हैं। उनका साहस दक्षिण की यात्रा का दिशासूचक बनता है।" }
        ]
      },
      envoy: {
        label: "अंतिम दूत",
        title: ["शांति का", "एक अवसर"],
        text: "सेतु पीछे है और लंका के द्वार सामने। पहला बाण चलने से पहले राम अंगद को रावण के पास अंतिम प्रस्ताव देकर भेजते हैं: सीता को लौटा दें और लंका को शांति चुनने दें। राजसभा की हर दृष्टि दूत पर टिक जाती है।",
        prompt: "अंगद राजसभा में क्या संदेश ले जाएँ?",
        characterIds: ["rama", "hanuman", "ravana"],
        choices: [
          { text: "शांति का स्पष्ट प्रस्ताव, जिसमें रावण के लिए सम्मानजनक मार्ग खुला रहे।", quality: "compassion", result: "अंगद बिना अपमान के बात रखते हैं और शांति का रास्ता खुला छोड़ते हैं। रावण मना करता है; निर्णय और उसका परिणाम उसी का है।" },
          { text: "दृढ़ सीमा: सीता मुक्त होंगी, और साथी उनका साथ नहीं छोड़ेंगे।", quality: "resolve", result: "अंगद का संदेश स्पष्ट है। सीता और एक-दूसरे की रक्षा के लिए साथी एकजुट खड़े रहते हैं।" }
        ]
      },
      reunion: {
        label: "तूफ़ान के बाद",
        title: ["विजय के बाद", "शांति का क्षण"],
        text: "युद्ध थम गया है। तूफ़ान के बाद की निस्तब्धता में राम और सीता फिर एक-दूसरे को देखते हैं; उनके साथी पास आ जुटते हैं। विजय केवल दुर्ग का पतन नहीं—यह देखभाल के साथ नई शुरुआत का अवसर है।",
        prompt: "घर वापसी में किस बात को याद रखना चाहिए?",
        characterIds: ["rama", "sita", "hanuman", "bharata"],
        choices: [
          { text: "उन सभी साथियों का आभार मानें जिनके साहस ने यह यात्रा सँभाली।", quality: "compassion", result: "पुनर्मिलन साझा कृतज्ञता का क्षण बनता है। यात्रा में साथ देने वाला कोई भी भुलाया नहीं जाता।" },
          { text: "अयोध्या और मिलकर नया निर्माण करने के संकल्प की ओर बढ़ें।", quality: "resolve", result: "साथी घर की ओर कदम बढ़ाते हैं। वे शांति के नए कार्य में यात्रा की सीख साथ ले जाते हैं।" }
        ]
      }
    },
    de: {
      river: {
        label: "Die Überquerung des Flusses",
        title: ["Ein Boot", "im ersten Licht"],
        text: "Am Ufer des Ganges wird der Wald still. Guha, Fürst der Nishada, bietet den Verbannten ein Boot und einen Platz am Feuer. Jenseits des Wassers wartet ein unbekannter Weg; Ayodhya liegt schon hinter ihnen.",
        prompt: "Wie erwidert Rama diese erste Freundlichkeit?",
        characterIds: ["rama", "sita", "lakshmana"],
        choices: [
          { text: "Guha wie einen Freund danken und vor der Überfahrt einen Augenblick verweilen.", quality: "compassion", result: "Guhas Gastfreundschaft verwandelt einen einsamen Abschied in Freundschaft. Bei Tagesanbruch sitzen Freunde im Boot." },
          { text: "Das Boot annehmen und den klaren Morgen für den Aufbruch nutzen.", quality: "resolve", result: "Der Fluss gibt den Weg frei. Mit festem Schritt und dankbarem Abschied beginnt die lange Reise durch den Wald." }
        ]
      },
      jatayu: {
        label: "Der Zeuge im Wald",
        title: ["Eine Stimme", "unter Bäumen"],
        text: "Rama und Lakshmana finden den verwundeten Jatayu unter den Bäumen. Obwohl seine Kräfte schwinden, berichtet der große Vogel, wohin Ravana Sita gebracht hat. Sein letztes Geschenk ist eine Richtung – und die Gewissheit, dass Sita nicht allein war.",
        prompt: "Was soll Rama tun, bevor er der Spur folgt?",
        characterIds: ["rama", "lakshmana"],
        choices: [
          { text: "Bei Jatayu bleiben, seinen Mut ehren und ihn würdevoll verabschieden.", quality: "compassion", result: "Rama trauert um einen Freund und ehrt Jatayus mutiges Herz. Die Brüder nehmen seine letzte Botschaft mit." },
          { text: "Sich den Weg nach Süden einprägen und Jatayus Nachricht weitertragen.", quality: "resolve", result: "Die Brüder halten jede Spur fest, die Jatayu ihnen gibt. Sein Mut wird zum Kompass für ihren Weg nach Süden." }
        ]
      },
      envoy: {
        label: "Eine letzte Gesandtschaft",
        title: ["Eine letzte", "offene Tür"],
        text: "Die Brücke liegt hinter ihnen; vor ihnen ragen Lankas Tore auf. Bevor der erste Pfeil fliegt, sendet Rama Angada mit einem letzten Angebot zu Ravana: Sita zurückgeben und der Stadt den Frieden lassen. Im Hof richten sich alle Blicke auf den Gesandten.",
        prompt: "Was soll Angada in den Hof tragen?",
        characterIds: ["rama", "hanuman", "ravana"],
        choices: [
          { text: "Ein klares Friedensangebot, das Ravana einen würdevollen Weg offenlässt.", quality: "compassion", result: "Angada spricht ohne Beleidigung und lässt einen Weg zum Frieden offen. Ravana lehnt ab – die Entscheidung und ihre Folgen liegen bei ihm." },
          { text: "Eine feste Grenze: Sita muss frei sein, und die Verbündeten lassen sie nicht im Stich.", quality: "resolve", result: "Angadas Botschaft ist unmissverständlich. Die Verbündeten stehen vereint, um Sita und einander zu schützen." }
        ]
      },
      reunion: {
        label: "Nach dem Sturm",
        title: ["Die Stille", "nach dem Sieg"],
        text: "Die Schlacht ist vorbei. In der Stille nach dem Sturm sehen Rama und Sita einander wieder; ihre Gefährten kommen hinzu. Ein Sieg bedeutet mehr als den Fall einer Festung: Er eröffnet die Möglichkeit, mit Achtsamkeit neu zu beginnen.",
        prompt: "Woran soll die Heimkehr erinnern?",
        characterIds: ["rama", "sita", "hanuman", "bharata"],
        choices: [
          { text: "Allen Verbündeten danken, deren Mut die Reise getragen hat.", quality: "compassion", result: "Das Wiedersehen wird zu einem gemeinsamen Moment der Dankbarkeit. Niemand, der unterwegs geholfen hat, wird vergessen." },
          { text: "Ayodhya entgegengehen und gemeinsam den Wiederaufbau beginnen.", quality: "resolve", result: "Die Gefährten wenden sich der Heimat zu. Die Lehren des Weges nehmen sie mit in die Arbeit für den Frieden." }
        ]
      }
    },
    ru: {
      river: {
        label: "Переправа через Гангу",
        title: ["Лодка", "на рассвете"],
        text: "У берегов Ганги лес затихает. Гуха, вождь нишадов, предлагает изгнанникам лодку и место у огня. За водой лежит незнакомый путь, а Айодхья уже становится воспоминанием.",
        prompt: "Как Раме ответить на эту первую доброту?",
        characterIds: ["rama", "sita", "lakshmana"],
        choices: [
          { text: "Поблагодарить Гуху как друга и разделить с ним минуту перед переправой.", quality: "compassion", result: "Гостеприимство Гухи превращает одинокое прощание в дружбу. На рассвете в лодку садятся уже не чужие, а друзья." },
          { text: "Принять лодку и воспользоваться ясным утром, чтобы продолжить путь.", quality: "resolve", result: "Река открывает дорогу. С твёрдым шагом и благодарным прощанием изгнанники начинают долгий путь через лес." }
        ]
      },
      jatayu: {
        label: "Свидетель в лесу",
        title: ["Голос", "под кронами"],
        text: "Рама и Лакшмана находят раненого Джатаю под деревьями. Слабея, могучая птица рассказывает, куда Равана увёз Ситу. Последний дар Джатаю — указать путь и дать понять: Сита не была одна.",
        prompt: "Что Раме сделать, прежде чем идти по следу?",
        characterIds: ["rama", "lakshmana"],
        choices: [
          { text: "Остаться рядом с Джатаю, почтить его храбрость и проститься с ним достойно.", quality: "compassion", result: "Рама скорбит о друге и чтит храброе сердце Джатаю. Братья берут с собой его последнее послание." },
          { text: "Запомнить путь на юг и передать послание Джатаю дальше.", quality: "resolve", result: "Братья сохраняют каждую подсказку Джатаю. Его мужество становится их компасом на юг." }
        ]
      },
      envoy: {
        label: "Последнее посольство",
        title: ["Последняя", "открытая дверь"],
        text: "Мост остался позади, впереди возвышаются ворота Ланки. До первого выстрела Рама отправляет Ангаду к Раване с последним предложением: вернуть Ситу и дать городу выбрать мир. В царском зале все взгляды обращены к посланнику.",
        prompt: "Что Ангаде передать во дворце?",
        characterIds: ["rama", "hanuman", "ravana"],
        choices: [
          { text: "Ясное предложение мира, оставив Раване возможность сохранить достоинство.", quality: "compassion", result: "Ангад говорит без оскорблений и оставляет путь к миру открытым. Равана отказывается; решение и его цена — на нём." },
          { text: "Твёрдое условие: Сита должна быть свободна, союзники её не оставят.", quality: "resolve", result: "Послание Ангада предельно ясно. Союзники стоят вместе, готовые защищать Ситу и друг друга." }
        ]
      },
      reunion: {
        label: "После бури",
        title: ["Тишина", "после победы"],
        text: "Битва закончилась. В тишине после бури Рама и Сита снова видят друг друга, а рядом собираются их спутники. Победа — это не только падение крепости, но и возможность начать заново с заботой друг о друге.",
        prompt: "Что важно помнить, возвращаясь домой?",
        characterIds: ["rama", "sita", "hanuman", "bharata"],
        choices: [
          { text: "Поблагодарить каждого союзника, чья смелость помогла пройти этот путь.", quality: "compassion", result: "Встреча становится общей минутой благодарности. Никто из тех, кто помогал в пути, не забыт." },
          { text: "Повернуть к Айодхье и вместе начать восстанавливать жизнь.", quality: "resolve", result: "Спутники направляются домой. Уроки пути они несут с собой в работу ради мира." }
        ]
      }
    },
    ja: {
      river: {
        label: "ガンジス川を渡る",
        title: ["夜明けの", "小舟"],
        text: "ガンジス川のほとりで、森が静まり返ります。ニシャーダ族の長グハは、追放された一行に舟と焚き火のそばの場所を差し出します。川の向こうには未知の道、背後には思い出になりつつあるアヨーディヤーがあります。",
        prompt: "ラーマは最初の親切にどう応えるでしょう？",
        characterIds: ["rama", "sita", "lakshmana"],
        choices: [
          { text: "友としてグハに礼を伝え、渡る前のひとときを共に過ごす。", quality: "compassion", result: "グハのもてなしが、孤独な別れを友情に変えます。夜明けの舟に乗るのは、もう見知らぬ者同士ではありません。" },
          { text: "舟を借り、穏やかな朝のうちに旅を続ける。", quality: "resolve", result: "川の向こうに道が開けます。確かな足取りと感謝の別れとともに、長い森の旅が始まります。" }
        ]
      },
      jatayu: {
        label: "森の証言者",
        title: ["木々の下の", "声"],
        text: "ラーマとラクシュマナは、木々の下で傷ついたジャターユを見つけます。力尽きる前に、大鷲はラーヴァナがシーターを連れ去った先を伝えます。道しるべと、彼女が決して孤独ではなかったという証が、最後の贈り物です。",
        prompt: "手がかりを追う前に、ラーマはどうするでしょう？",
        characterIds: ["rama", "lakshmana"],
        choices: [
          { text: "ジャターユのそばに留まり、その勇気をたたえて丁重に別れる。", quality: "compassion", result: "ラーマは友を悼み、ジャターユの勇敢な心をたたえます。兄弟はその最後の言葉を胸に刻みます。" },
          { text: "南への道を心に留め、ジャターユの知らせを次へつなぐ。", quality: "resolve", result: "兄弟はジャターユの手がかりを一つも忘れません。その勇気が南への道を示す羅針盤になります。" }
        ]
      },
      envoy: {
        label: "最後の使節",
        title: ["最後に残る", "開かれた扉"],
        text: "橋を渡り終え、ランカーの門が目の前にそびえます。矢が放たれる前に、ラーマはアンガダをラーヴァナのもとへ送り、最後の提案を伝えます。シーターを返し、都に平和を選ばせてほしい。宮廷中の視線が使者に集まります。",
        prompt: "アンガダは何を宮廷へ伝えるでしょう？",
        characterIds: ["rama", "hanuman", "ravana"],
        choices: [
          { text: "ラーヴァナが尊厳を保てる余地を残した、明確な和平の提案。", quality: "compassion", result: "アンガダは侮辱することなく語り、平和への道を残します。ラーヴァナは拒みます。その選択と代償は彼のものです。" },
          { text: "明確な一線を伝える。シーターを解放し、仲間は彼女を見捨てない。", quality: "resolve", result: "アンガダの言葉に曖昧さはありません。仲間たちはシーターと互いを守るため、心を一つに立ちます。" }
        ]
      },
      reunion: {
        label: "嵐のあとに",
        title: ["勝利のあとの", "静けさ"],
        text: "戦いは終わりました。嵐のあとの静けさの中で、ラーマとシーターは再び互いを見つめ、仲間たちがそばに集まります。勝利とは城が落ちることだけではなく、思いやりをもってやり直す機会でもあります。",
        prompt: "帰郷のとき、何を心に留めましょう？",
        characterIds: ["rama", "sita", "hanuman", "bharata"],
        choices: [
          { text: "旅を支えた勇気ある仲間たち一人ひとりに感謝する。", quality: "compassion", result: "再会のひとときは、皆で感謝を分かち合う時間になります。道中で助けてくれた人を誰も忘れません。" },
          { text: "アヨーディヤーへ向かい、ともに新しい日々を築く。", quality: "resolve", result: "仲間たちは故郷を目指します。旅で得た学びを、平和を築く力に変えていきます。" }
        ]
      }
    }
  };

  const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"];
  for (const [language, chapters] of Object.entries(scenes)) {
    const locale = window.ramayanaLocales[language];
    locale.chapters.splice(1, 0, chapters.river);
    const panchavatiIndex = locale.chapters.findIndex((chapter) => chapter.characterIds.includes("lakshmana") && chapter.label.includes("III"));
    locale.chapters.splice(panchavatiIndex + 1, 0, chapters.jatayu);
    locale.chapters.splice(locale.chapters.length - 1, 0, chapters.envoy);
    locale.chapters.push(chapters.reunion);
    locale.chapters.forEach((chapter, index) => {
      chapter.label = `${numerals[index]} · ${chapter.label.replace(/^(?:[IVX]+ · )/, "")}`;
    });
    locale.ending.label = locale.ending.label.replace(/^[IVX]+(?= ·)/, numerals[locale.chapters.length]);
  }
})();
