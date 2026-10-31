(() => {
  const source = window.ramayanaLocales.en;
  const ids = source.chapters.map((chapter) => chapter.characterIds);
  const makeChoice = (text, quality, result) => ({ text, quality, result });
  const makeChapter = (label, title, text, prompt, choices, index) => ({
    label,
    title,
    text,
    prompt,
    characterIds: ids[index],
    choices: choices.map(([choiceText, quality, result]) => makeChoice(choiceText, quality, result))
  });
  const languages = {
    es: {
      dir: "ltr",
      documentTitle: "El Ramayana | Un viaje de valor y compasión",
      metaDescription: "Un viaje interactivo por el Ramayana, guiado por tus decisiones.",
      brandTitle: "EL RAMAYANA",
      brandTagline: "UNA HISTORIA DE VALOR Y COMPASIÓN",
      languageLabel: "Idioma",
      evidenceLink: "Pruebas y Ram Setu",
      progressLabel: "Progreso de la historia",
      progressOpening: "La escena inicial",
      continue: "Continuar el viaje",
      back: "Atrás",
      restart: "Empezar de nuevo",
      patternSoft: "Mantra: suave",
      patternBright: "Mantra: resplandor",
      musicOff: "Música: desactivada",
      musicOn: "Música: activada",
      journeyLabel: "Repasa las decisiones de tu viaje",
      footerStory: "Una recreación inspirada en el Ramayana",
      artAlt: "Pintura devocional india de la coronación de Rama y Sita.",
      artCaption: "La coronación de Rama y Sita",
      artCredit: "Dominio público · Wikimedia Commons",
      artSceneCredit: "Ilustración original de la escena",
      castLabel: "Conoce a los personajes",
      meetCharacter: "Conoce a",
      guideClose: "Cerrar",
      intro: {
        eyebrow: "Una historia interactiva",
        title: ["El Ramayana:", "el camino a casa"],
        lead: "A través del bosque, el océano y las puertas de Lanka, descubre una historia de deber, valor y compasión.",
        body: "Acompaña a Rama, Sita y Lakshmana. Decide cómo se desarrollan los momentos decisivos, conoce a quienes transforman el viaje y regresa con la familia a Ayodhya.",
        begin: "Comenzar el viaje"
      },
      scenes: [
        ["I · Una promesa cumplida", ["Comienza", "el bosque"], "En Ayodhya, Rama acepta catorce años de exilio para cumplir la promesa de su padre. Sita decide acompañarlo y Lakshmana se une a ellos. Antes de partir, los hermanos deben despedirse.", "¿Qué debe guiar la despedida de Rama?", [
          ["Cumplir su promesa con serenidad y confiar en que Bharata cuidará de Ayodhya.", "resolve", "Rama cumple su palabra. Más tarde, Bharata renuncia al trono para sí y gobierna como guardián, colocando las sandalias de Rama sobre él."],
          ["Hablar primero con Bharata para que el deber y el cariño puedan despedirse en paz.", "compassion", "Los hermanos se separan con afecto. Bharata promete proteger Ayodhya y esperar fielmente el regreso de Rama."]
        ]],
        ["II · El cruce del río", ["Una barca", "al amanecer"], "A orillas del Ganges, el bosque queda en silencio. Guha, jefe de los Nishadas, ofrece a los exiliados una barca y un lugar junto al fuego. Al otro lado del agua empieza un camino desconocido; Ayodhya ya queda atrás.", "¿Cómo agradecerá Rama esta primera muestra de bondad?", [
          ["Dar las gracias a Guha como a un amigo y compartir un momento antes de cruzar.", "compassion", "La bienvenida de Guha convierte una partida solitaria en una amistad. Al amanecer, la barca lleva amigos, no desconocidos."],
          ["Aceptar la barca y aprovechar la mañana despejada para seguir adelante.", "resolve", "El río abre el camino. Con paso firme y una despedida agradecida, los exiliados comienzan su larga travesía."]
        ]],
        ["III · Las sandalias en el trono", ["Un reino", "en custodia"], "Bharata descubre que Rama se ha marchado al bosque. Lo sigue junto con los habitantes de Ayodhya y le pide que regrese. Rama mantiene la promesa hecha a su padre, así que Bharata decide gobernar solo como custodio.", "¿Qué debe llevar Bharata de vuelta a Ayodhya?", [
          ["Las sandalias de Rama, señal de que el trono sigue perteneciendo a su hermano.", "resolve", "Bharata coloca las sandalias de Rama en el trono y gobierna en su nombre hasta que transcurran los años prometidos."],
          ["La promesa de que Ayodhya recibirá a Rama cuando vuelva.", "compassion", "Bharata regresa decidido a proteger el reino y guardar un lugar para Rama en cada corazón."]
        ]],
        ["IV · El ciervo dorado", ["Un instante", "en Panchavati"], "En Panchavati, un ciervo dorado atrae la mirada de Sita. Rama va tras él y Lakshmana se queda para protegerla. Un grito del bosque también aleja a Lakshmana; entonces Ravana, disfrazado, rapta a Sita. Jatayu intenta detenerlo con valentía.", "¿Cómo debe comenzar la búsqueda?", [
          ["Seguir las últimas palabras de Jatayu y buscar hacia el sur, en dirección a Lanka.", "resolve", "El valor de Jatayu señala el rumbo. Los hermanos parten hacia el sur, decididos a encontrar a Sita."],
          ["Honrar primero a Jatayu y luego reunir cada pista que ofrece el bosque.", "compassion", "Rama honra el sacrificio de Jatayu. Con cuidado y paciencia, los hermanos reúnen las pistas que los guiarán."]
        ]],
        ["V · El testigo del bosque", ["Una voz", "bajo los árboles"], "Rama y Lakshmana encuentran a Jatayu herido bajo los árboles. Aunque sus fuerzas se apagan, el gran pájaro les cuenta adónde llevó Ravana a Sita. Su último regalo es una dirección y la certeza de que ella no estuvo sola.", "¿Qué debe hacer Rama antes de seguir el rastro?", [
          ["Quedarse junto a Jatayu, honrar su valentía y despedirlo con dignidad.", "compassion", "Rama llora a un amigo y honra el corazón valiente de Jatayu. Los hermanos llevan consigo su último mensaje."],
          ["Recordar el camino hacia el sur y llevar adelante el mensaje de Jatayu.", "resolve", "Los hermanos guardan cada pista de Jatayu. Su valor se convierte en brújula para su marcha hacia el sur."]
        ]],
        ["VI · Una alianza en Kishkindha", ["Una promesa", "entre aliados"], "Tras la desaparición de Sita, Rama y Lakshmana conocen a Hanuman en el bosque. Él los lleva ante Sugriva, que también necesita ayuda: su hermano le ha arrebatado el reino. Los dos dirigentes pueden sellar un pacto de ayuda mutua.", "¿Cómo puede Rama ganarse la confianza de Sugriva?", [
          ["Prometer ayudar a Sugriva a recuperar su reino y luego pedir apoyo para buscar a Sita.", "compassion", "Rama y Sugriva sellan su alianza. Sugriva recupera su reino y su pueblo se suma a la búsqueda de Sita."],
          ["Invitarlo a unirse de inmediato a la búsqueda con un objetivo compartido.", "resolve", "Sugriva envía a su gente en todas direcciones. La misión compartida da comienzo a una alianza duradera."]
        ]],
        ["VII · Al otro lado del océano", ["Un anillo", "surca el cielo"], "Junto con los exploradores de Sugriva, Hanuman salta el océano hasta Lanka. En el bosque de Ashoka encuentra a Sita vigilada, pero firme. Debe mostrarle que viene como mensajero de Rama y que la esperanza está cerca.", "¿Qué debe entregar Hanuman a Sita?", [
          ["El anillo de Rama y la serena promesa de que irá a rescatarla.", "compassion", "Sita reconoce el anillo y envía a Rama una señal de respuesta. Hanuman lleva su mensaje de vuelta al otro lado del mar."],
          ["La alentadora noticia de que los aliados de Rama se reúnen en la costa.", "resolve", "Hanuman cuenta a Sita que los aliados están listos para actuar. Ella recobra la esperanza y él regresa con noticias de su fortaleza."]
        ]],
        ["VIII · El puente a Lanka", ["Piedra a piedra,", "juntos"], "Los exploradores regresan con noticias de Sita. Vibhishana abandona la corte de Ravana y se une a Rama, advirtiéndole sobre las defensas de Lanka. El océano separa a los aliados de la ciudad; juntos empiezan a construir un puente.", "¿Cómo guiará Rama el cruce?", [
          ["Escuchar a Vibhishana y dar a cada aliado una tarea.", "compassion", "Cada aliado aporta algo. Gracias al esfuerzo compartido, el puente crece y el ejército cruza unido."],
          ["Animar al ejército con el compromiso de mantenerse unido en Lanka.", "resolve", "Los aliados responden a la llamada de Rama. Con un propósito firme terminan el cruce y alcanzan la costa de Lanka."]
        ]],
        ["IX · La última embajada", ["Una última", "puerta abierta"], "El puente queda atrás y ante ellos se alzan las puertas de Lanka. Antes de que vuele la primera flecha, Rama envía a Angada ante Ravana con una última oferta: devolver a Sita y permitir que la ciudad elija la paz. Todas las miradas de la corte se vuelven hacia el mensajero.", "¿Qué debe llevar Angada a la corte?", [
          ["Una oferta clara de paz que permita a Ravana conservar su dignidad.", "compassion", "Angada habla sin insultos y deja abierto el camino a la paz. Ravana se niega; la elección y su precio son suyos."],
          ["Un límite firme: Sita debe ser libre y sus aliados no la abandonarán.", "resolve", "El mensaje de Angada no deja lugar a dudas. Los aliados permanecen unidos, dispuestos a proteger a Sita y entre sí."]
        ]],
        ["X · Las puertas de Lanka", ["Antes", "de la batalla"], "Ravana recibe la petición de devolver a Sita, pero se niega. Vibhishana abandona Lanka y se une a Rama. Con la ayuda de sus aliados, el ejército de Rama cruza el océano y llega a la ciudad.", "¿Cómo debe Rama afrontar el último desafío?", [
          ["Ofrecer a Ravana una última oportunidad de hacer las paces y devolver a Sita.", "compassion", "Rama vuelve a ofrecer la paz. Cuando Ravana la rechaza, la batalla comienza sabiendo que se intentó un camino pacífico."],
          ["Mantenerse firme con sus aliados y prepararse para defender lo justo.", "resolve", "Rama y sus aliados afrontan juntos el peligro. La confianza mutua los sostiene durante la batalla."]
        ]],
        ["XI · Después de la tormenta", ["La calma", "tras la victoria"], "La batalla ha terminado. En la quietud que sigue a la tormenta, Rama y Sita vuelven a verse mientras sus compañeros se reúnen alrededor. La victoria no es solo la caída de una fortaleza: también es la oportunidad de empezar de nuevo con cuidado.", "¿Qué debe recordar este regreso a casa?", [
          ["Dar las gracias a cada aliado cuyo valor sostuvo el viaje.", "compassion", "El reencuentro se convierte en un momento de gratitud compartida. Nadie que ayudó en el camino queda en el olvido."],
          ["Volver la mirada hacia Ayodhya y el compromiso de reconstruir juntos.", "resolve", "Los compañeros ponen rumbo a casa. Llevan las lecciones del camino a la tarea de construir la paz."]
        ]]
      ],
      ending: {
        label: "XII · El regreso a Ayodhya",
        progress: "Regreso a casa",
        title: ["El largo camino", "termina en casa"],
        text: "Ravana ha sido derrotado y Sita se reúne con Rama. Tras catorce años, los compañeros vuelven a Ayodhya, donde Bharata los recibe. La ciudad vuelve a encender sus lámparas: cada decisión, cada alianza y cada acto de bondad ha formado parte del camino.",
        lessons: {
          compassion: "El valor es más fuerte cuando deja espacio a la bondad.",
          resolve: "Las promesas y el valor orientan el largo camino de regreso.",
          balance: "Un largo camino necesita un corazón valiente y compasivo."
        },
        restart: "Comenzar de nuevo"
      },
      characters: {
        rama: { name: "Rama", role: "Príncipe de Ayodhya", detail: "Sus decisiones se guían por el deber, el valor y la compasión." },
        sita: { name: "Sita", role: "Amada de Rama", detail: "Mantiene su firmeza y valor durante el exilio y el cautiverio." },
        lakshmana: { name: "Lakshmana", role: "Hermano de Rama", detail: "Acompaña a Rama y Sita al exilio con lealtad inquebrantable." },
        bharata: { name: "Bharata", role: "Guardián de Ayodhya", detail: "Protege el reino y espera fielmente el regreso de Rama." },
        hanuman: { name: "Hanuman", role: "Aliado devoto de Rama", detail: "Su fuerza, sabiduría y devoción llevan esperanza a través del mar." },
        ravana: { name: "Ravana", role: "Rey de Lanka", detail: "Su negativa a devolver a Sita lo enfrenta a Rama." },
        vibhishana: { name: "Vibhishana", role: "Hermano de Ravana", detail: "Abandona Lanka y se une a Rama, eligiendo el camino de la rectitud." }
      }
    },
    fr: {
      dir: "ltr",
      documentTitle: "Le Ramayana | Un voyage de courage et de compassion",
      metaDescription: "Un voyage interactif dans le Ramayana, façonné par vos choix.",
      brandTitle: "LE RAMAYANA",
      brandTagline: "UNE HISTOIRE DE COURAGE ET DE COMPASSION",
      languageLabel: "Langue",
      evidenceLink: "Preuves et Ram Setu",
      progressLabel: "Progression du récit",
      progressOpening: "Scène d’ouverture",
      continue: "Poursuivre le voyage",
      back: "Retour",
      restart: "Recommencer",
      patternSoft: "Mantra : doux",
      patternBright: "Mantra : lumineux",
      musicOff: "Musique : désactivée",
      musicOn: "Musique : activée",
      journeyLabel: "Revoir les choix de votre voyage",
      footerStory: "Un récit inspiré du Ramayana",
      artAlt: "Peinture dévotionnelle indienne représentant le couronnement de Rama et Sita.",
      artCaption: "Le couronnement de Rama et Sita",
      artCredit: "Domaine public · Wikimedia Commons",
      artSceneCredit: "Illustration originale de la scène",
      castLabel: "Rencontrer les personnages",
      meetCharacter: "Rencontrer",
      guideClose: "Fermer",
      intro: {
        eyebrow: "Un récit interactif",
        title: ["Le Ramayana :", "le chemin du retour"],
        lead: "À travers la forêt, l’océan et les portes de Lanka, découvrez une histoire de devoir, de courage et de compassion.",
        body: "Accompagnez Rama, Sita et Lakshmana. Choisissez le cours des moments décisifs, rencontrez les alliés qui changent le voyage et rentrez à Ayodhya avec la famille.",
        begin: "Commencer le voyage"
      },
      scenes: [
        ["I · Une promesse tenue", ["La forêt", "commence"], "À Ayodhya, Rama accepte quatorze années d’exil pour honorer la promesse de son père. Sita choisit de l’accompagner et Lakshmana les rejoint. Avant le départ, les frères doivent se dire adieu.", "Que doit guider les adieux de Rama ?", [
          ["Tenir sa promesse avec calme et faire confiance à Bharata pour protéger Ayodhya.", "resolve", "Rama tient parole. Plus tard, Bharata refuse le trône pour lui-même et gouverne comme gardien, en plaçant les sandales de Rama sur le trône."],
          ["Parler d’abord à Bharata afin que le devoir et l’affection se séparent en paix.", "compassion", "Les frères se quittent avec tendresse. Bharata promet de protéger Ayodhya et d’attendre fidèlement le retour de Rama."]
        ]],
        ["II · La traversée du fleuve", ["Une barque", "à l’aube"], "Au bord du Gange, la forêt se tait. Guha, chef des Nishadas, offre aux exilés une barque et une place près du feu. De l’autre côté commence une route inconnue ; Ayodhya est déjà derrière eux.", "Comment Rama va-t-il honorer cette première bonté ?", [
          ["Remercier Guha comme un ami et partager un instant avant la traversée.", "compassion", "L’accueil de Guha transforme un départ solitaire en amitié. À l’aube, la barque emporte des amis, non des inconnus."],
          ["Accepter la barque et profiter du matin clair pour reprendre la route.", "resolve", "Le fleuve ouvre le passage. D’un pas assuré et après des adieux reconnaissants, les exilés commencent leur longue route."]
        ]],
        ["III · Les sandales sur le trône", ["Un royaume", "en confiance"], "Bharata apprend que Rama est parti dans la forêt. Il le rejoint avec les habitants d’Ayodhya et lui demande de revenir. Rama tient sa promesse à leur père ; Bharata choisit donc de gouverner seulement comme gardien.", "Que doit rapporter Bharata à Ayodhya ?", [
          ["Les sandales de Rama, signe que le trône lui appartient toujours.", "resolve", "Bharata pose les sandales de Rama sur le trône et gouverne en son nom en attendant la fin des années promises."],
          ["La promesse qu’Ayodhya accueillera Rama à son retour.", "compassion", "Bharata revient en promettant de protéger le royaume et de garder une place pour Rama dans chaque cœur."]
        ]],
        ["IV · Le cerf d’or", ["Un instant", "à Panchavati"], "À Panchavati, un cerf d’or attire le regard de Sita. Rama le poursuit tandis que Lakshmana veille sur elle. Un cri venu de la forêt éloigne aussi Lakshmana ; Ravana, déguisé, enlève alors Sita. Jatayu tente courageusement de l’arrêter.", "Comment la recherche doit-elle commencer ?", [
          ["Suivre les dernières paroles de Jatayu et chercher au sud, vers Lanka.", "resolve", "Le courage de Jatayu indique une direction. Les frères partent vers le sud, déterminés à retrouver Sita."],
          ["Rendre hommage à Jatayu, puis recueillir chaque indice de la forêt.", "compassion", "Rama honore le sacrifice de Jatayu. Avec patience et attention, les frères rassemblent les indices qui les guideront."]
        ]],
        ["V · Le témoin de la forêt", ["Une voix", "sous les arbres"], "Rama et Lakshmana trouvent Jatayu blessé sous les arbres. Malgré ses forces qui déclinent, le grand oiseau leur révèle où Ravana a emmené Sita. Son dernier cadeau : une direction et la certitude qu’elle n’était pas seule.", "Que doit faire Rama avant de suivre la piste ?", [
          ["Rester auprès de Jatayu, honorer son courage et lui faire des adieux dignes.", "compassion", "Rama pleure un ami et honore le cœur brave de Jatayu. Les frères emportent son dernier message."],
          ["Mémoriser la piste vers le sud et transmettre le message de Jatayu.", "resolve", "Les frères retiennent chaque indice de Jatayu. Son courage devient leur boussole vers le sud."]
        ]],
        ["VI · Une alliance à Kishkindha", ["Une promesse", "entre alliés"], "Après l’enlèvement de Sita, Rama et Lakshmana rencontrent Hanuman dans la forêt. Il les conduit auprès de Sugriva, qui a lui aussi besoin d’aide : son frère lui a pris son royaume. Les deux chefs peuvent conclure un pacte d’entraide.", "Comment Rama peut-il gagner la confiance de Sugriva ?", [
          ["Promettre d’aider Sugriva à reprendre son royaume, puis demander son aide pour retrouver Sita.", "compassion", "Rama et Sugriva concluent un pacte. Sugriva retrouve son royaume et son peuple se joint à la recherche de Sita."],
          ["Inviter Sugriva à rejoindre immédiatement la recherche autour d’un objectif commun.", "resolve", "Sugriva envoie ses gens dans toutes les directions. Leur mission commune fonde une alliance durable."]
        ]],
        ["VII · De l’autre côté de l’océan", ["Un anneau", "dans le ciel"], "Avec les éclaireurs de Sugriva, Hanuman franchit l’océan jusqu’à Lanka. Dans le bosquet d’Ashoka, il trouve Sita surveillée mais inébranlable. Il doit lui montrer qu’il vient comme messager de Rama et que l’espoir approche.", "Que doit remettre Hanuman à Sita ?", [
          ["L’anneau de Rama et la promesse discrète qu’il viendra la chercher.", "compassion", "Sita reconnaît l’anneau et renvoie un signe à Rama. Hanuman rapporte son message de l’autre côté de la mer."],
          ["La nouvelle encourageante que les alliés de Rama se rassemblent sur le rivage.", "resolve", "Hanuman annonce à Sita que ses alliés sont prêts à agir. L’espoir renaît et il repart avec des nouvelles de sa force."]
        ]],
        ["VIII · Le pont vers Lanka", ["Pierre après pierre,", "ensemble"], "Les éclaireurs reviennent avec le message de Sita. Vibhishana quitte la cour de Ravana et rejoint Rama, qu’il avertit des défenses de Lanka. L’océan sépare les alliés de la ville ; ensemble, ils commencent à bâtir un pont.", "Comment Rama guidera-t-il la traversée ?", [
          ["Écouter Vibhishana et donner à chaque allié un rôle.", "compassion", "Chacun apporte sa contribution. Le pont grandit grâce à leurs efforts communs et l’armée traverse ensemble."],
          ["Rassembler l’armée autour d’un vœu clair d’unité à Lanka.", "resolve", "Les alliés répondent à l’appel de Rama. Unis par un objectif ferme, ils achèvent la traversée et atteignent Lanka."]
        ]],
        ["IX · Une dernière ambassade", ["Une dernière", "porte ouverte"], "Le pont est derrière eux ; les portes de Lanka se dressent devant. Avant le premier tir, Rama envoie Angada auprès de Ravana avec une dernière offre : rendre Sita et laisser la ville choisir la paix. Dans la cour, tous les regards se tournent vers le messager.", "Que doit apporter Angada à la cour ?", [
          ["Une offre de paix claire, qui laisse à Ravana une issue digne.", "compassion", "Angada parle sans insulte et laisse la paix possible. Ravana refuse ; le choix et son prix lui appartiennent."],
          ["Une limite ferme : Sita doit être libérée et les alliés ne l’abandonneront pas.", "resolve", "Le message d’Angada est sans équivoque. Les alliés restent unis, prêts à protéger Sita et à se protéger."]
        ]],
        ["X · Les portes de Lanka", ["Avant", "la bataille"], "Ravana est prié de rendre Sita, mais refuse. Vibhishana quitte Lanka et rejoint Rama. Avec l’aide de leurs alliés, les forces de Rama traversent l’océan et atteignent la ville.", "Comment Rama doit-il affronter l’épreuve finale ?", [
          ["Offrir à Ravana une dernière chance de faire la paix et de rendre Sita.", "compassion", "Rama propose encore la paix. Lorsque Ravana la refuse, la bataille commence après qu’une voie pacifique a été tentée."],
          ["Rester ferme avec ses alliés et se préparer à défendre ce qui est juste.", "resolve", "Rama et ses alliés affrontent le danger ensemble. Leur confiance mutuelle les soutient durant la bataille."]
        ]],
        ["XI · Après la tempête", ["Le calme", "après la victoire"], "La bataille est terminée. Dans le silence après la tempête, Rama et Sita se retrouvent tandis que leurs compagnons les rejoignent. La victoire ne signifie pas seulement la chute d’une forteresse : elle permet aussi de recommencer avec attention.", "Que doit garder en mémoire ce retour ?", [
          ["Remercier chaque allié dont le courage a porté le voyage.", "compassion", "Les retrouvailles deviennent un moment de gratitude partagée. Personne de ceux qui ont aidé en chemin n’est oublié."],
          ["Prendre la route d’Ayodhya et promettre de reconstruire ensemble.", "resolve", "Les compagnons reprennent le chemin du foyer. Ils mettent les leçons du voyage au service de la paix."]
        ]]
      ],
      ending: {
        label: "XII · Le retour à Ayodhya",
        progress: "Le retour",
        title: ["La longue route", "s’achève chez soi"],
        text: "Ravana est vaincu et Sita retrouve Rama. Après quatorze ans, les compagnons rentrent à Ayodhya, où Bharata les accueille. La ville rallume ses lampes : chaque choix, chaque alliance et chaque geste de bonté a compté sur le chemin.",
        lessons: {
          compassion: "Le courage est plus fort lorsqu’il laisse une place à la bonté.",
          resolve: "Les promesses et le courage guident le long chemin du retour.",
          balance: "Une longue route demande un cœur à la fois brave et compatissant."
        },
        restart: "Recommencer"
      },
      characters: {
        rama: { name: "Rama", role: "Prince d’Ayodhya", detail: "Ses choix sont guidés par le devoir, le courage et la compassion." },
        sita: { name: "Sita", role: "Bien-aimée de Rama", detail: "Elle reste courageuse et fidèle à elle-même dans l’exil comme dans la captivité." },
        lakshmana: { name: "Lakshmana", role: "Frère de Rama", detail: "Il accompagne Rama et Sita en exil avec une loyauté sans faille." },
        bharata: { name: "Bharata", role: "Gardien d’Ayodhya", detail: "Il protège le royaume et attend fidèlement le retour de Rama." },
        hanuman: { name: "Hanuman", role: "Allié dévoué de Rama", detail: "Sa force, sa sagesse et sa dévotion portent l’espoir au-delà de la mer." },
        ravana: { name: "Ravana", role: "Roi de Lanka", detail: "Son refus de rendre Sita le place en conflit avec Rama." },
        vibhishana: { name: "Vibhishana", role: "Frère de Ravana", detail: "Il quitte Lanka et rejoint Rama, choisissant la voie de la droiture." }
      }
    },
    pt: {
      dir: "ltr",
      documentTitle: "O Ramayana | Uma jornada de coragem e compaixão",
      metaDescription: "Uma jornada interativa pelo Ramayana, moldada pelas suas escolhas.",
      brandTitle: "O RAMAYANA",
      brandTagline: "UMA HISTÓRIA DE CORAGEM E COMPAIXÃO",
      languageLabel: "Idioma",
      evidenceLink: "Evidências e Ram Setu",
      progressLabel: "Progresso da história",
      progressOpening: "Cena de abertura",
      continue: "Continuar a jornada",
      back: "Voltar",
      restart: "Recomeçar",
      patternSoft: "Mantra: suave",
      patternBright: "Mantra: brilhante",
      musicOff: "Música: desligada",
      musicOn: "Música: ligada",
      journeyLabel: "Reveja as escolhas da sua jornada",
      footerStory: "Uma releitura inspirada no Ramayana",
      artAlt: "Pintura devocional indiana da coroação de Rama e Sita.",
      artCaption: "A coroação de Rama e Sita",
      artCredit: "Domínio público · Wikimedia Commons",
      artSceneCredit: "Ilustração original da cena",
      castLabel: "Conheça os personagens",
      meetCharacter: "Conheça",
      guideClose: "Fechar",
      intro: {
        eyebrow: "Uma história interativa",
        title: ["O Ramayana:", "o caminho de volta"],
        lead: "Pela floresta, pelo oceano e pelos portões de Lanka, acompanhe uma história de dever, coragem e compaixão.",
        body: "Caminhe ao lado de Rama, Sita e Lakshmana. Escolha como momentos decisivos se desenrolam, conheça aliados que mudam a jornada e volte com a família para Ayodhya.",
        begin: "Começar a jornada"
      },
      scenes: [
        ["I · Uma promessa cumprida", ["A floresta", "começa"], "Em Ayodhya, Rama aceita catorze anos de exílio para honrar a promessa do pai. Sita decide acompanhá-lo, e Lakshmana se junta aos dois. Antes da partida, os irmãos precisam se despedir.", "O que deve guiar a despedida de Rama?", [
          ["Manter a promessa com serenidade e confiar que Bharata cuidará de Ayodhya.", "resolve", "Rama cumpre sua palavra. Mais tarde, Bharata recusa o trono para si e governa como guardião, colocando as sandálias de Rama sobre ele."],
          ["Conversar primeiro com Bharata, para que dever e afeto se despeçam em paz.", "compassion", "Os irmãos se despedem com carinho. Bharata promete proteger Ayodhya e esperar fielmente pelo retorno de Rama."]
        ]],
        ["II · A travessia do rio", ["Um barco", "ao amanhecer"], "Às margens do Ganges, a floresta fica em silêncio. Guha, chefe dos Nishadas, oferece aos exilados um barco e um lugar perto do fogo. Do outro lado da água há um caminho desconhecido; Ayodhya já ficou para trás.", "Como Rama vai honrar essa primeira gentileza?", [
          ["Agradecer a Guha como a um amigo e compartilhar um momento antes da travessia.", "compassion", "A acolhida de Guha transforma uma partida solitária em amizade. Ao amanhecer, o barco leva amigos, não desconhecidos."],
          ["Aceitar o barco e aproveitar a manhã clara para seguir viagem.", "resolve", "O rio abre o caminho. Com passos firmes e uma despedida agradecida, os exilados começam a longa jornada."]
        ]],
        ["III · As sandálias no trono", ["Um reino", "sob cuidado"], "Bharata descobre que Rama foi para a floresta. Ele o acompanha com o povo de Ayodhya e pede que volte. Rama mantém a promessa feita ao pai, então Bharata decide governar apenas como guardião.", "O que Bharata deve levar de volta a Ayodhya?", [
          ["As sandálias de Rama, sinal de que o trono continua sendo dele.", "resolve", "Bharata coloca as sandálias de Rama no trono e governa em seu nome até o fim dos anos prometidos."],
          ["A promessa de que Ayodhya receberá Rama quando ele voltar.", "compassion", "Bharata volta decidido a proteger o reino e guardar um lugar para Rama em cada coração."]
        ]],
        ["IV · O cervo dourado", ["Um instante", "em Panchavati"], "Em Panchavati, um cervo dourado chama a atenção de Sita. Rama vai atrás dele, enquanto Lakshmana fica para protegê-la. Um grito na floresta também afasta Lakshmana; então Ravana, disfarçado, leva Sita. Jatayu tenta impedi-lo com bravura.", "Como a busca deve começar?", [
          ["Seguir as últimas palavras de Jatayu e procurar ao sul, na direção de Lanka.", "resolve", "A coragem de Jatayu aponta o caminho. Os irmãos partem para o sul, determinados a encontrar Sita."],
          ["Honrar Jatayu e depois reunir cada pista oferecida pela floresta.", "compassion", "Rama honra o sacrifício de Jatayu. Com atenção e paciência, os irmãos reúnem as pistas que os conduzem adiante."]
        ]],
        ["V · A testemunha da floresta", ["Uma voz", "sob as árvores"], "Rama e Lakshmana encontram Jatayu ferido sob as árvores. Mesmo perdendo as forças, a grande ave conta para onde Ravana levou Sita. Seu último presente é uma direção — e a certeza de que ela não estava sozinha.", "O que Rama deve fazer antes de seguir a trilha?", [
          ["Ficar ao lado de Jatayu, honrar sua coragem e despedir-se com dignidade.", "compassion", "Rama lamenta a perda de um amigo e honra o coração valente de Jatayu. Os irmãos levam consigo sua última mensagem."],
          ["Guardar o caminho para o sul e levar a mensagem de Jatayu adiante.", "resolve", "Os irmãos não esquecem nenhuma pista de Jatayu. Sua coragem se torna a bússola que os guia para o sul."]
        ]],
        ["VI · Uma aliança em Kishkindha", ["Uma promessa", "entre aliados"], "Depois que Sita é levada, Rama e Lakshmana encontram Hanuman na floresta. Ele os leva até Sugriva, que também precisa de ajuda: seu irmão tomou seu reino. Os dois líderes podem firmar um pacto de apoio mútuo.", "Como Rama pode conquistar a confiança de Sugriva?", [
          ["Prometer ajudar Sugriva a recuperar o reino e depois pedir ajuda para encontrar Sita.", "compassion", "Rama e Sugriva firmam um pacto. Sugriva recupera seu reino, e seu povo se junta à busca por Sita."],
          ["Convidar Sugriva a entrar logo na busca, unidos por um objetivo comum.", "resolve", "Sugriva envia seu povo em todas as direções. A missão compartilhada dá início a uma aliança duradoura."]
        ]],
        ["VII · Do outro lado do oceano", ["Um anel", "cruza o céu"], "Com os grupos de busca de Sugriva, Hanuman salta o oceano até Lanka. No bosque de Ashoka, encontra Sita vigiada, mas firme. Precisa mostrar que vem como mensageiro de Rama e que a esperança está próxima.", "O que Hanuman deve entregar a Sita?", [
          ["O anel de Rama e a promessa tranquila de que ele irá buscá-la.", "compassion", "Sita reconhece o anel e envia um sinal de volta para Rama. Hanuman leva sua mensagem através do mar."],
          ["A notícia animadora de que os aliados de Rama se reúnem na costa.", "resolve", "Hanuman conta a Sita que os aliados estão prontos para agir. A esperança renasce, e ele retorna com notícias de sua força."]
        ]],
        ["VIII · A ponte para Lanka", ["Pedra por pedra,", "juntos"], "Os exploradores voltam com a mensagem de Sita. Vibhishana deixa a corte de Ravana e se une a Rama, alertando-o sobre as defesas de Lanka. O oceano separa os aliados da cidade; juntos, eles começam a construir uma ponte.", "Como Rama deve conduzir a travessia?", [
          ["Ouvir Vibhishana e dar a cada aliado uma tarefa.", "compassion", "Cada aliado contribui. O esforço compartilhado faz a ponte crescer, e o exército atravessa unido."],
          ["Reunir o exército com o compromisso claro de permanecer unido em Lanka.", "resolve", "Os aliados respondem ao chamado de Rama. Com propósito firme, concluem a travessia e chegam à costa de Lanka."]
        ]],
        ["IX · A última embaixada", ["Uma última", "porta aberta"], "A ponte fica para trás; os portões de Lanka se erguem à frente. Antes da primeira flecha, Rama envia Angada até Ravana com uma última oferta: devolver Sita e deixar a cidade escolher a paz. Todos na corte voltam os olhos para o mensageiro.", "O que Angada deve levar à corte?", [
          ["Uma oferta clara de paz, deixando a Ravana uma saída digna.", "compassion", "Angada fala sem insultos e mantém aberto o caminho da paz. Ravana recusa; a escolha e o preço são dele."],
          ["Um limite firme: Sita deve ser libertada, e os aliados não a abandonarão.", "resolve", "A mensagem de Angada é inequívoca. Os aliados permanecem unidos, prontos para proteger Sita e uns aos outros."]
        ]],
        ["X · Os portões de Lanka", ["Antes", "da batalha"], "Ravana é aconselhado a devolver Sita, mas se recusa. Vibhishana deixa Lanka e se une a Rama. Com a ajuda dos aliados, as forças de Rama atravessam o oceano e chegam à cidade.", "Como Rama deve enfrentar o desafio final?", [
          ["Oferecer a Ravana uma última chance de fazer as pazes e devolver Sita.", "compassion", "Rama oferece paz mais uma vez. Quando Ravana recusa, a batalha começa sabendo que a paz foi tentada."],
          ["Manter-se firme com os aliados e preparar-se para defender o que é justo.", "resolve", "Rama e seus aliados enfrentam o perigo juntos. A confiança mútua os sustenta durante a batalha."]
        ]],
        ["XI · Depois da tempestade", ["A calma", "depois da vitória"], "A batalha terminou. No silêncio depois da tempestade, Rama e Sita se veem novamente, enquanto os companheiros se aproximam. A vitória não é apenas a queda de uma fortaleza; é também a chance de recomeçar com cuidado.", "O que esta volta para casa deve guardar na memória?", [
          ["Agradecer a cada aliado cuja coragem sustentou a jornada.", "compassion", "O reencontro se torna um momento de gratidão compartilhada. Ninguém que ajudou pelo caminho será esquecido."],
          ["Seguir para Ayodhya e assumir juntos o compromisso de reconstruir.", "resolve", "Os companheiros voltam os olhos para casa. Levam as lições da jornada para o trabalho de construir a paz."]
        ]]
      ],
      ending: {
        label: "XII · O retorno a Ayodhya",
        progress: "Volta para casa",
        title: ["A longa estrada", "termina em casa"],
        text: "Ravana é derrotado e Sita reencontra Rama. Depois de catorze anos, os companheiros retornam a Ayodhya, onde Bharata os recebe. As lâmpadas da cidade se acendem outra vez: cada escolha, aliança e gesto de bondade fez parte do caminho.",
        lessons: {
          compassion: "A coragem é mais forte quando abre espaço para a bondade.",
          resolve: "Promessas e coragem guiam o longo caminho de volta.",
          balance: "Uma longa jornada pede um coração corajoso e compassivo."
        },
        restart: "Começar de novo"
      },
      characters: {
        rama: { name: "Rama", role: "Príncipe de Ayodhya", detail: "Suas escolhas são guiadas pelo dever, pela coragem e pela compaixão." },
        sita: { name: "Sita", role: "Amada de Rama", detail: "Permanece firme e corajosa durante o exílio e o cativeiro." },
        lakshmana: { name: "Lakshmana", role: "Irmão de Rama", detail: "Acompanha Rama e Sita no exílio com lealdade inabalável." },
        bharata: { name: "Bharata", role: "Guardião de Ayodhya", detail: "Protege o reino e aguarda fielmente o retorno de Rama." },
        hanuman: { name: "Hanuman", role: "Aliado devoto de Rama", detail: "Sua força, sabedoria e devoção levam esperança para além do mar." },
        ravana: { name: "Ravana", role: "Rei de Lanka", detail: "Sua recusa em devolver Sita o coloca em conflito com Rama." },
        vibhishana: { name: "Vibhishana", role: "Irmão de Ravana", detail: "Deixa Lanka e se une a Rama, escolhendo o caminho da retidão." }
      }
    },
    zh: {
      dir: "ltr",
      documentTitle: "罗摩衍那｜勇气与慈悲的旅程",
      metaDescription: "一段由选择引领的《罗摩衍那》互动旅程。",
      brandTitle: "罗摩衍那",
      brandTagline: "一个关于勇气与慈悲的故事",
      languageLabel: "语言",
      evidenceLink: "证据与罗摩桥",
      progressLabel: "故事进度",
      progressOpening: "故事开篇",
      continue: "继续旅程",
      back: "返回",
      restart: "重新开始",
      patternSoft: "真言图案：柔和",
      patternBright: "真言图案：明亮",
      musicOff: "音乐：关闭",
      musicOn: "音乐：开启",
      journeyLabel: "回顾旅途中的选择",
      footerStory: "根据《罗摩衍那》改编的故事",
      artAlt: "描绘罗摩与悉多加冕仪式的印度虔敬画作。",
      artCaption: "罗摩与悉多加冕",
      artCredit: "公有领域 · Wikimedia Commons",
      artSceneCredit: "原创场景插画",
      castLabel: "认识故事人物",
      meetCharacter: "认识",
      guideClose: "关闭",
      intro: {
        eyebrow: "互动故事",
        title: ["罗摩衍那：", "归家的旅程"],
        lead: "穿过森林、越过海洋、走向楞伽城门，踏上一段关于责任、勇气与慈悲的旅程。",
        body: "陪伴罗摩、悉多与罗什曼那前行。在关键时刻作出选择，结识改变旅程的盟友，最后与家人一同回到阿逾陀。",
        begin: "开始旅程"
      },
      scenes: [
        ["I · 信守承诺", ["森林", "之旅开始"], "在阿逾陀，罗摩接受十四年的流放，以兑现对父亲的承诺。悉多决定陪伴他，罗什曼那也加入他们。离开之前，兄弟二人必须道别。", "罗摩的告别应以什么为指引？", [
          ["平静地信守承诺，并相信婆罗多会守护阿逾陀。", "resolve", "罗摩信守诺言。后来婆罗多拒绝为自己登基，以摄政者身份治理国家，并将罗摩的鞋履放在王座上。"],
          ["先与婆罗多谈谈，让责任与亲情都能平和地道别。", "compassion", "兄弟二人怀着深情分别。婆罗多承诺守护阿逾陀，并忠诚地等待罗摩归来。"]
        ]],
        ["II · 渡过恒河", ["黎明时分", "一叶轻舟"], "恒河岸边，森林渐渐安静下来。尼沙陀族首领古哈为流放者备好小船和炉火旁的位置。河的另一边是未知的道路；阿逾陀已成为身后的回忆。", "罗摩该如何回应这份初次的善意？", [
          ["像感谢朋友一样感谢古哈，并在渡河前与他共度片刻。", "compassion", "古哈的欢迎让孤独的离别变成友谊。黎明时，船上载着的不再是陌生人，而是朋友。"],
          ["接受小船，趁清晨天气晴朗继续赶路。", "resolve", "河流为他们让出道路。带着坚定的脚步和感激的告别，流放者开始漫长的森林之旅。"]
        ]],
        ["III · 王座上的鞋履", ["受托守护", "一个王国"], "婆罗多得知罗摩已前往森林。他与阿逾陀的百姓一同追上罗摩，请他回去。罗摩信守对父亲的承诺，因此婆罗多决定只以守护者的身份治理国家。", "婆罗多应该带什么回阿逾陀？", [
          ["带上罗摩的鞋履，表明王座仍属于他。", "resolve", "婆罗多把罗摩的鞋履放在王座上，并以他的名义治理国家，等待约定的岁月过去。"],
          ["带回阿逾陀将等待罗摩归来的承诺。", "compassion", "婆罗多承诺保护国家，并让每个人心中都为罗摩留有位置。"]
        ]],
        ["IV · 金鹿", ["潘查瓦蒂", "的一瞬"], "在潘查瓦蒂，金色的鹿吸引了悉多的目光。罗摩前去追赶，罗什曼那留下保护她。森林中的呼喊又引走罗什曼那；随后罗波那乔装现身，掳走悉多。贾塔尤勇敢地试图阻拦。", "搜寻应该从何处开始？", [
          ["遵循贾塔尤最后的指引，向南方的楞伽寻找。", "resolve", "贾塔尤的勇气指出了方向。兄弟二人决心找到悉多，踏上南行之路。"],
          ["先向贾塔尤致敬，再收集森林中的每一条线索。", "compassion", "罗摩敬重贾塔尤的牺牲。兄弟二人耐心收集线索，继续前行。"]
        ]],
        ["V · 森林中的见证者", ["树影之下", "一个声音"], "罗摩和罗什曼那在树下发现受伤的贾塔尤。尽管力量渐渐消退，这只巨鸟仍告诉他们罗波那带悉多去了哪里。他留下的最后礼物，是方向，也是悉多并非孤身一人的证明。", "跟随线索之前，罗摩应该先做什么？", [
          ["留在贾塔尤身边，敬重他的勇气，并郑重地与他告别。", "compassion", "罗摩为朋友哀悼，敬重贾塔尤勇敢的心。兄弟二人带着他最后的讯息继续前行。"],
          ["记住通往南方的路，带着贾塔尤的讯息继续寻找。", "resolve", "兄弟二人牢牢记住贾塔尤提供的每一条线索。他的勇气成为南行路上的指南。"]
        ]],
        ["VI · 吉什金达的盟约", ["盟友之间", "一个承诺"], "悉多被带往楞伽后，罗摩和罗什曼那在森林中遇见哈奴曼。他带两人去见须羯哩婆，后者也需要帮助：兄长夺走了他的王国。两位首领可以结盟，彼此扶助。", "罗摩该如何赢得须羯哩婆的信任？", [
          ["答应帮助须羯哩婆夺回王国，再请他协助寻找悉多。", "compassion", "罗摩和须羯哩婆结成盟友。须羯哩婆重获王国，他的族人也加入寻找悉多的队伍。"],
          ["以共同目标邀请须羯哩婆立即加入搜寻。", "resolve", "须羯哩婆派族人四处寻找。共同的使命开启了长久的盟约。"]
        ]],
        ["VII · 飞越海洋", ["一枚指环", "划过长空"], "哈奴曼跟随须羯哩婆的搜寻队飞越海洋，抵达楞伽。在阿育王园中，他找到被看守却不屈服的悉多。他必须让悉多相信自己是罗摩的使者，希望即将到来。", "哈奴曼应该交给悉多什么？", [
          ["罗摩的指环，以及他一定会来救她的温柔承诺。", "compassion", "悉多认出了指环，并托哈奴曼带回信物。哈奴曼携带她的消息渡海归去。"],
          ["罗摩的盟友正在海岸集结这一令人振奋的消息。", "resolve", "哈奴曼告诉悉多，盟友已经准备行动。希望重新燃起，他也带回悉多坚强不屈的消息。"]
        ]],
        ["VIII · 通往楞伽的桥", ["一块石头", "一同筑起"], "搜寻者带着悉多的消息返回。毗毗沙那离开罗波那的朝廷，加入罗摩，并提醒他楞伽的防御。海洋横在盟友与城池之间；他们开始携手建桥。", "罗摩将如何带领大家渡海？", [
          ["听取毗毗沙那的建议，为每位盟友安排一份工作。", "compassion", "每位盟友都贡献一份力量。桥梁在共同努力下延伸，军队携手渡海。"],
          ["用团结一致的誓言鼓舞军队，一同前往楞伽。", "resolve", "盟友响应罗摩的号召。目标坚定一致，他们完成渡海，抵达楞伽海岸。"]
        ]],
        ["IX · 最后的使节", ["最后一次", "敞开的机会"], "桥梁已在身后，楞伽城门就在前方。第一支箭射出之前，罗摩派遣安迦陀前往罗波那处，提出最后的条件：归还悉多，让城邦选择和平。朝廷中所有人的目光都投向使者。", "安迦陀应该带什么话进入朝廷？", [
          ["清楚地提出和平，并给罗波那留下体面的退路。", "compassion", "安迦陀没有出言侮辱，为和平留下道路。罗波那拒绝了；选择及其代价由他承担。"],
          ["坚定地表明：必须释放悉多，盟友绝不会抛下她。", "resolve", "安迦陀的讯息毫不含糊。盟友团结一致，准备守护悉多，也守护彼此。"]
        ]],
        ["X · 楞伽城门", ["大战", "之前"], "众人劝罗波那归还悉多，他却拒绝。毗毗沙那离开楞伽，加入罗摩。在盟友帮助下，罗摩的军队渡过海洋，抵达城池。", "罗摩应该如何迎接最后的挑战？", [
          ["再给罗波那最后一次机会，让他和解并归还悉多。", "compassion", "罗摩再次提出和平。罗波那拒绝后，战斗开始；和平之路已经尝试过。"],
          ["与盟友坚定地站在一起，准备守护正义。", "resolve", "罗摩和盟友共同面对危险。彼此的信任支撑他们度过战斗。"]
        ]],
        ["XI · 风暴之后", ["胜利之后", "静谧重现"], "战斗结束了。风暴后的寂静中，罗摩和悉多再次相见，伙伴们也聚拢过来。胜利不只是堡垒的陷落，也意味着可以怀着关爱重新开始。", "这次归家之旅应记住什么？", [
          ["感谢每一位以勇气支撑这段旅程的盟友。", "compassion", "重逢成为彼此感恩的时刻。没有人会忘记旅途中伸出援手的人。"],
          ["启程回到阿逾陀，共同承担重建家园的责任。", "resolve", "伙伴们朝家乡出发。他们把旅途中的领悟带入缔造和平的工作。"]
        ]]
      ],
      ending: {
        label: "XII · 返回阿逾陀",
        progress: "归家",
        title: ["漫长的道路", "终于到家"],
        text: "罗波那被击败，悉多与罗摩重逢。十四年后，伙伴们回到阿逾陀，婆罗多迎接他们。城中灯火再次点亮：每一次选择、每一份盟约、每一个善意的举动，都构成了归途。",
        lessons: {
          compassion: "勇气在为善意留有余地时，才更加强大。",
          resolve: "承诺与勇气指引漫长的归家之路。",
          balance: "漫漫旅途需要勇敢而慈悲的心。"
        },
        restart: "再走一次"
      },
      characters: {
        rama: { name: "罗摩", role: "阿逾陀王子", detail: "他的选择以责任、勇气与慈悲为指引。" },
        sita: { name: "悉多", role: "罗摩的爱人", detail: "在流放与囚禁中，她始终坚定而勇敢。" },
        lakshmana: { name: "罗什曼那", role: "罗摩的弟弟", detail: "他以坚定的忠诚陪伴罗摩与悉多流放。" },
        bharata: { name: "婆罗多", role: "阿逾陀的守护者", detail: "他守护王国，忠诚地等待罗摩归来。" },
        hanuman: { name: "哈奴曼", role: "罗摩忠诚的盟友", detail: "他的力量、智慧与虔诚将希望带过海洋。" },
        ravana: { name: "罗波那", role: "楞伽之王", detail: "他拒绝归还悉多，因此与罗摩发生冲突。" },
        vibhishana: { name: "毗毗沙那", role: "罗波那的弟弟", detail: "他离开楞伽加入罗摩，选择正直之道。" }
      }
    },
    ar: {
      dir: "rtl",
      documentTitle: "الرامايانا | رحلة الشجاعة والرحمة",
      metaDescription: "رحلة تفاعلية في حكاية الرامايانا، ترسمها اختياراتك.",
      brandTitle: "الرامايانا",
      brandTagline: "حكاية عن الشجاعة والرحمة",
      languageLabel: "اللغة",
      evidenceLink: "الأدلة ورام سيتو",
      progressLabel: "تقدّم الحكاية",
      progressOpening: "المشهد الافتتاحي",
      continue: "تابع الرحلة",
      back: "رجوع",
      restart: "ابدأ من جديد",
      patternSoft: "المانترا: هادئة",
      patternBright: "المانترا: متوهجة",
      musicOff: "الموسيقى: متوقفة",
      musicOn: "الموسيقى: تعمل",
      journeyLabel: "تأمل اختياراتك خلال الرحلة",
      footerStory: "حكاية مستوحاة من الرامايانا",
      artAlt: "لوحة هندية تعبّدية لتتويج راما وسيتا.",
      artCaption: "تتويج راما وسيتا",
      artCredit: "ملكية عامة · ويكيميديا كومنز",
      artSceneCredit: "رسم أصلي للمشهد",
      castLabel: "تعرّف إلى الشخصيات",
      meetCharacter: "تعرّف إلى",
      guideClose: "إغلاق",
      intro: {
        eyebrow: "حكاية تفاعلية",
        title: ["الرامايانا:", "طريق العودة إلى البيت"],
        lead: "عبر الغابة والمحيط وبوابات لانكا، عِش حكاية يصوغها الواجب والشجاعة والرحمة.",
        body: "رافق راما وسيتا ولاكشمانا. اختر كيف تتكشف اللحظات الحاسمة، وتعرّف إلى الحلفاء الذين يغيّرون مسار الرحلة، ثم عُد مع الأسرة إلى أيوديا.",
        begin: "ابدأ الرحلة"
      },
      scenes: [
        ["١ · الوفاء بالعهد", ["تبدأ", "رحلة الغابة"], "في أيوديا، يقبل راما أربعة عشر عاماً من المنفى وفاءً بوعد قطعه لأبيه. تختار سيتا مرافقته، وينضم إليهما لاكشمانا. وقبل الرحيل، على الأخوين أن يتبادلا الوداع.", "ما الذي ينبغي أن يوجّه وداع راما؟", [
          ["يحفظ وعده بهدوء، ويثق بأن بهاراتا سيعتني بأيوبيا.", "resolve", "يفي راما بكلمته. ويرفض بهاراتا لاحقاً العرش لنفسه، ويحكم وصياً واضعاً خفّي راما على العرش."],
          ["يتحدث أولاً مع بهاراتا كي يفترق الواجب والعائلة بسلام.", "compassion", "يفترق الأخوان بمودة. ويعد بهاراتا بحماية أيوديا وانتظار عودة راما بإخلاص."]
        ]],
        ["٢ · عبور النهر", ["قارب", "مع أول النور"], "عند ضفاف الغانج، يسكن الغاب. يعرض غوها، زعيم قبيلة نيصادة، على المنفيين قارباً ومكاناً قرب النار. وراء الماء طريق مجهول، أما أيوديا فتغدو ذكرى خلفهم.", "كيف يكرّم راما هذا اللطف الأول؟", [
          ["يشكر غوها كصديق، ويشاركه لحظة قبل عبور النهر.", "compassion", "تحوّل ضيافة غوها الوداع المنفرد إلى صداقة. وعند الفجر، يحمل القارب أصدقاء لا غرباء."],
          ["يقبل القارب ويتابع الطريق ما دام الصباح صافياً.", "resolve", "يفتح النهر الطريق أمامهم. وبخطى ثابتة ووداعٍ مشفوع بالامتنان، يبدأ المنفيون درب الغابة الطويل."]
        ]],
        ["٣ · خفّا راما على العرش", ["مملكة", "أمانة"], "يعلم بهاراتا أن راما مضى إلى الغابة، فيلحق به مع أهل أيوديا ويرجوه أن يعود. لكن راما يفي بوعده لأبيه، فيختار بهاراتا أن يحكم وصياً على المملكة لا ملكاً لنفسه.", "ماذا يحمل بهاراتا معه إلى أيوديا؟", [
          ["خفّي راما، علامة على أن العرش ما زال حقاً له.", "resolve", "يضع بهاراتا خفّي راما على العرش ويحكم باسمه حتى تنقضي السنوات الموعودة."],
          ["وعداً بأن أيوديا ستستقبل راما حين يعود.", "compassion", "يعود بهاراتا عازماً على حماية المملكة وإبقاء مكان لراما في قلب كل إنسان."]
        ]],
        ["٤ · الغزال الذهبي", ["لحظة", "في بانشافاتي"], "في بانشافاتي، يجذب غزال ذهبي نظر سيتا. يتبعه راما، ويبقى لاكشمانا لحمايتها. ثم يجذب نداء من الغابة لاكشمانا أيضاً؛ فيتنكر رافانا ويختطف سيتا. ويحاول الطائر جاتايو منعه بشجاعة.", "كيف ينبغي أن يبدأ البحث؟", [
          ["يتبع رسالة جاتايو الأخيرة ويبحث جنوباً باتجاه لانكا.", "resolve", "تشير شجاعة جاتايو إلى الطريق. وينطلق الأخوان جنوباً بعزم على العثور على سيتا."],
          ["يكرّم جاتايو أولاً، ثم يجمع كل دليل تقدمه الغابة.", "compassion", "يكرّم راما تضحية جاتايو. وبعناية وصبر، يجمع الأخوان الأدلة التي تقودهما إلى الأمام."]
        ]],
        ["٥ · شاهد الغابة", ["صوت", "تحت الأشجار"], "يعثر راما ولاكشمانا على جاتايو جريحاً تحت الأشجار. ومع أن قوته تخبو، يخبر الطائر العظيم الأخوين بالمكان الذي أخذ رافانا إليه سيتا. هديته الأخيرة طريقٌ يدلّهما ودليل على أنها لم تكن وحيدة.", "ماذا يفعل راما قبل أن يتبع الأثر؟", [
          ["يبقى إلى جوار جاتايو، ويكرّم شجاعته ويودّعه بوقار.", "compassion", "يحزن راما على صديق ويكرّم قلب جاتايو الشجاع. ويحمل الأخوان رسالته الأخيرة معهما."],
          ["يحفظ الطريق جنوباً، ويحمل رسالة جاتايو إلى الأمام.", "resolve", "يتمسك الأخوان بكل دليل تركه جاتايو. وتصبح شجاعته بوصلتهما في الطريق جنوباً."]
        ]],
        ["٦ · عهد في كيشكيندا", ["وعد", "بين الحلفاء"], "بعد أخذ سيتا، يلتقي راما ولاكشمانا هانومان في الغابة. ويقودهما إلى سوغريفا الذي يحتاج بدوره إلى العون، إذ انتزع أخوه مملكته. يستطيع القائدان أن يعقدا عهداً يتعاونان فيه.", "كيف يكسب راما ثقة سوغريفا؟", [
          ["يعد بمساعدة سوغريفا على استعادة مملكته، ثم يطلب العون للعثور على سيتا.", "compassion", "يعقد راما وسوغريفا عهداً. يستعيد سوغريفا مملكته، وينضم قومه إلى البحث عن سيتا."],
          ["يدعوه فوراً إلى الانضمام للبحث عن سيتا بهدف مشترك.", "resolve", "يرسل سوغريفا قومه في كل اتجاه. وتبدأ بمهمتهم المشتركة صداقة طويلة."]
        ]],
        ["٧ · عبر المحيط", ["خاتم", "يشق السماء"], "يقفز هانومان مع فرق البحث التابعة لسوغريفا فوق المحيط إلى لانكا. وفي بستان أشوكا يجد سيتا تحت الحراسة، لكنها لم تنكسر. عليه أن يثبت أنه رسول راما وأن الأمل بات قريباً.", "ماذا يسلّم هانومان إلى سيتا؟", [
          ["خاتم راما ووعداً هادئاً بأنه سيأتي لإنقاذها.", "compassion", "تتعرف سيتا إلى الخاتم وترسل علامة إلى راما. ويحمل هانومان رسالتها عائداً عبر البحر."],
          ["خبراً مشجعاً عن تجمع حلفاء راما على الشاطئ.", "resolve", "يخبر هانومان سيتا أن الحلفاء مستعدون للتحرك. فيعود إليها الأمل، ويحمل هو خبر صمودها."]
        ]],
        ["٨ · الجسر إلى لانكا", ["حجرٌ حجراً,", "معاً"], "يعود الباحثون برسالة سيتا. ويغادر فيبهيشانا بلاط رافانا وينضم إلى راما، محذراً إياه من دفاعات لانكا. يفصل المحيط بين الحلفاء والمدينة؛ فيبدؤون معاً ببناء جسر.", "كيف يقود راما العبور؟", [
          ["يصغي إلى نصيحة فيبهيشانا ويمنح كل حليف دوراً.", "compassion", "يسهم كل حليف بنصيبه. وينمو الجسر بالجهد المشترك، فيعبر الجيش معاً."],
          ["يشجع الجيش بعهد واضح على التماسك في لانكا.", "resolve", "يلبي الحلفاء نداء راما. وبهدف ثابت، يكملون العبور ويبلغون شاطئ لانكا."]
        ]],
        ["٩ · آخر سفارة", ["فرصة أخيرة", "للسلام"], "صار الجسر وراءهم، وارتفعت بوابات لانكا أمامهم. قبل أن ينطلق السهم الأول، يرسل راما أنغادا إلى رافانا بعرض أخير: أعد سيتا ودع المدينة تختار السلام. وتتجه أنظار البلاط كلها نحو الرسول.", "ماذا يحمل أنغادا إلى البلاط؟", [
          ["عرضاً واضحاً للسلام يترك لرافانا مخرجاً يحفظ كرامته.", "compassion", "يتحدث أنغادا بلا إهانة ويترك باب السلام مفتوحاً. يرفض رافانا، لكن القرار وعاقبته عليه."],
          ["حداً واضحاً: يجب تحرير سيتا، ولن يتخلى عنها الحلفاء.", "resolve", "لا لبس في رسالة أنغادا. يقف الحلفاء متحدين، مستعدين لحماية سيتا بعضهم لبعض."]
        ]],
        ["١٠ · بوابات لانكا", ["قبل", "المعركة"], "يُطلب من رافانا أن يعيد سيتا، لكنه يرفض. يغادر فيبهيشانا لانكا وينضم إلى راما. وبمساعدة الحلفاء، تعبر قوات راما المحيط وتبلغ المدينة.", "كيف يواجه راما التحدي الأخير؟", [
          ["يمنح رافانا فرصة أخيرة للسلام وإعادة سيتا.", "compassion", "يعرض راما السلام مرة أخرى. وحين يرفض رافانا، تبدأ المعركة بعد تجربة الطريق السلمي."],
          ["يثبت مع حلفائه ويستعد للدفاع عما هو حق.", "resolve", "يواجه راما وحلفاؤه الخطر معاً. وتعينهم الثقة المتبادلة على اجتياز المعركة."]
        ]],
        ["١١ · بعد العاصفة", ["السكون", "بعد النصر"], "انتهت المعركة. وفي هدوء ما بعد العاصفة، يرى راما وسيتا أحدهما الآخر من جديد، ويلتف رفاقهما حولهما. فالنصر ليس سقوط حصن فحسب، بل فرصة لبداية جديدة يملؤها الاهتمام.", "ما الذي ينبغي أن تذكره هذه العودة إلى الوطن؟", [
          ["يشكر كل حليف حملت شجاعته الرحلة.", "compassion", "يجتمع الرفاق على امتنان مشترك. ولا يُنسى أي شخص قدم العون في الطريق."],
          ["يتجه نحو أيوديا وعزمٍ على إعادة البناء معاً.", "resolve", "يمضي الرفاق نحو الوطن حاملين دروس الطريق معهم، ليبنوا السلام."]
        ]]
      ],
      ending: {
        label: "١٢ · العودة إلى أيوديا",
        progress: "العودة إلى الوطن",
        title: ["ينتهي الطريق الطويل", "في البيت"],
        text: "يُهزم رافانا وتلتقي سيتا براما من جديد. وبعد أربعة عشر عاماً، يعود الرفاق إلى أيوديا حيث يستقبلهم بهاراتا. وتضيء مصابيح المدينة مرة أخرى؛ فقد أسهم كل اختيار وعهد وعمل طيب في رسم طريق العودة.",
        lessons: {
          compassion: "تزداد الشجاعة قوة حين تترك مكاناً للرفق.",
          resolve: "تقود الوعود والشجاعة الطريق الطويل إلى البيت.",
          balance: "يحتاج الطريق الطويل إلى قلب شجاع ورحيم معاً."
        },
        restart: "ابدأ من جديد"
      },
      characters: {
        rama: { name: "راما", role: "أمير أيوديا", detail: "يسترشد في اختياراته بالواجب والشجاعة والرحمة." },
        sita: { name: "سيتا", role: "محبوبة راما", detail: "تحافظ على ثباتها وشجاعتها في المنفى والأسر." },
        lakshmana: { name: "لاكشمانا", role: "أخو راما", detail: "يرافق راما وسيتا في المنفى بوفاء لا يتزعزع." },
        bharata: { name: "بهاراتا", role: "حامي أيوديا", detail: "يحمي المملكة وينتظر عودة راما بإخلاص." },
        hanuman: { name: "هانومان", role: "حليف راما المخلص", detail: "تعبر قوته وحكمته وإخلاصه بالأمل فوق البحر." },
        ravana: { name: "رافانا", role: "ملك لانكا", detail: "يؤدي رفضه إعادة سيتا إلى صراعه مع راما." },
        vibhishana: { name: "فيبهيشانا", role: "أخو رافانا", detail: "يغادر لانكا وينضم إلى راما، مختاراً طريق الاستقامة." }
      }
    }
  };

  for (const [language, translation] of Object.entries(languages)) {
    const locale = { ...source, ...translation, lang: language };
    locale.chapters = translation.scenes.map((scene, index) =>
      makeChapter(scene[0], scene[1], scene[2], scene[3], scene[4], index)
    );
    delete locale.scenes;
    window.ramayanaLocales[language] = locale;
  }
})();
