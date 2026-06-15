export interface CompactSentence {
  id: string;
  text: string; // contains [blankId|hint|correctAnswer|distractors|explanation]
  translation: string; // Armenian translation
  explanation: string; // Russian grammatical explanation
}

export interface ExerciseSection {
  id: number;
  title: string;
  description: string;
  sentences: CompactSentence[];
}

export const EXERCISES: ExerciseSection[] = [
  {
    id: 1,
    title: "1. Pretérito Perfecto",
    description: "Անցյալ վաղակատար ժամանակաձև (ներկա սահմաններում ավարտված): Օգտագործվում է այն գործողությունների համար, որոնք ավարտվել են դեռևս չավարտված ժամանակահատվածում (esta mañana, hoy, este año): Կազմվում է haber օժանդակ բայով և հիմնական բայի դերբայով (participio):",
    sentences: [
      {
        id: "1_1",
        text: "Esta mañana, [1|yo – levantarse|me he levantado|me levanto,me levanté,me levantaré|Pretérito Perfecto от возвратного глагола levantarse (1 лицо ед.ч.: me he levantado) используется со словами 'esta mañana' (этим утром).] a las 7. Luego, [2|ducharse|me he duchado|me ducho,me duché,me ducharé|Завершенное последовательное действие этим утром: глагол ducharse во 1-м лице ед.ч. - me he duchado.]. ¿Y no [3|tú – tener|has tenido|tuviste,tienes,habías tenido|Вопрос к собеседнику про сегодняшнее утро: haber (2 лицо ед.ч.: has) + причастие tenido.] tiempo para desayunar?",
        translation: "Այս առավոտ ես արթնացել եմ ժամը 7-ին։ Հետո լոգանք եմ ընդունել։ Իսկ դու ժամանակ չե՞ս ունեցել նախաճաշելու։",
        explanation: "В первом упражнении используется Pretérito Perfecto (he/has/ha/hemos/habéis/han + participio), так как временной маркер 'esta mañana' (сегодня утром) указывает на незаконченный сегодня период времени."
      },
      {
        id: "1_2",
        text: "Hoy [1|nosotros – ir|hemos ido|fuimos,vamos,iremos|Глагол ir в Pretérito Perfecto для 1 лица мн.ч.: hemos ido. Применяется с маркером 'hoy' (сегодня).] a una fiesta que [2|ser|ha sido|fue,era,será|Глагол ser в Pretérito Perfecto для 3 лица ед.ч.: ha sido (была/оказалась).] muy divertida.",
        translation: "Այսօր մենք գնացել ենք մի երեկույթի, որը շատ զվարճալի է եղել։",
        explanation: "Маркер времени 'hoy' (сегодня) требует использования Pretérito Perfecto для описания сегодняшних событий (hemos ido, ha sido)."
      },
      {
        id: "1_3",
        text: "¿[1|vosotros – poner|Habéis puesto|Pusisteis,Ponéis,Habéis ponido|Глагол poner имеет неправильную форму причастия 'puesto'. Во 2-м лице мн.ч. получается 'Habéis puesto'.] las máquinas en marcha? No, todavía no lo [2|nosotros – hacer|hemos hecho|hicimos,hacemos,haremos|Глагол hacer имеет неправильное причастие 'hecho'. С вспомогательным hemos получается 'hemos hecho'.] .",
        translation: "Դուք մեքենաները գործի դրե՞լ եք։ Ոչ, մենք դա դեռ չենք արել։",
        explanation: "Обратите внимание на неправильные причастия: poner -> puesto, hacer -> hecho. 'Todavía no' (еще не) является типичным маркером совершенного времени Pretérito Perfecto."
      },
      {
        id: "1_4",
        text: "¿Qué [1|Ud. – decir|ha dicho|dijo,dice,dirá|Для вежливой формы Ud. (3-е л. ед.ч.) используется ha + неправильное причастие dicho (от decir).] ? Lo siento, no le [2|yo – entender|he entendido|entendí,entiendo,entenderé|Глагол entender во 1-м лице ед.ч.: he entendido (я вас не понял).] .",
        translation: "Ի՞նչ ասացիք։ Կներեք, ես Ձեզ չեմ հասկացել։",
        explanation: "Глагол decir имеет неправильное причастие (dicho). Глагол entender образует правильное причастие (entendido). Время Pretérito Perfecto указывает связь прошлых слов с текущим разговором."
      },
      {
        id: "1_5",
        text: "María y Pablo [1|coger|han cogido|cogieron,cogen,cogerán|Субъекты María y Pablo соответствуют 3-му лицу мн.ч. (ellos), поэтому вспомогательный глагол han + причастие cogido.] el autobús de las 8:30.",
        translation: "Մարիան և Պաբլոն նստել են ժամը 8:30-ի ավտոբուսը։",
        explanation: "Используется Pretérito Perfecto (han cogido) для выражения недавнего действия, результат которого актуален на текущий момент дня."
      }
    ]
  },
  {
    id: 2,
    title: "2. Estar + Participio Pasado",
    description: "Estar + Participio կառույցը օգտագործվում է նախորդող գործողության արդյունք հանդիսացող վիճակն արտահայտելու համար: Դերբայը համաձայնում է ենթակայի հետ սեռով և թվով:",
    sentences: [
      {
        id: "2_1",
        text: "Mis padres están [1|divorciarse|divorciados|divorciando,divorciado,divorcian|Mis padres - множественное число, мужской род. Причастие от divorciarse согласуется: divorciados.] desde hace 5 años.",
        translation: "Իմ ծնողները արդեն 5 տարի ամուսնալուծված են։",
        explanation: "Глагол estar указывает на текущее состояние. Причастие 'divorciados' согласуется во множественном числе мужского рода с подлежащим 'mis padres'."
      },
      {
        id: "2_2",
        text: "La casa está [1|ordenar|ordenada|ordenado,ordenando,ordena|La casa - ед.ч. женского рода, поэтому причастие от ordenar согласуется: ordenada.] .",
        translation: "Տունը դասավորված է։",
        explanation: "Состояние дома на текущий момент. Женский род единственного числа: ordenada."
      },
      {
        id: "2_3",
        text: "Miguel está [1|dormirse|dormido|durmiendo,dormida,duerme|Miguel - мужской род, ед.ч. Причастие от dormirse: dormido.] .",
        translation: "Միգելը քնած է։",
        explanation: "Выражение физического состояния человека. Для мужского рода единственного числа используется причастие 'dormido'."
      },
      {
        id: "2_4",
        text: "Estoy [1|agotar|agotado|agotada,agotan,agotando|Для мужского рода - agotado, для женского - agotada. Оба варианта верны, но стандартно выбираем agotado.] .",
        translation: "Ես ուժասպառ եմ։",
        explanation: "Сомнения по поводу рода говорящего: так как пол не указан, причастие может быть 'agotado' (для мужчины) или 'agotada' (для женщины). Выберем стандартную форму мужского рода: agotado."
      },
      {
        id: "2_5",
        text: "Las tiendas no están [1|abrir|abiertas|abierto,abriendo,abren|Las tiendas - женский род, мн. число. Глагол abrir имеет неправильное и регулярное причастие, здесь используется жен. род мн.ч.: abiertas.] .",
        translation: "Խանութները բաց չեն։",
        explanation: "Глагол abrir имеет неправильное причастие 'abierto'. Так как подлежащее 'las tiendas' во множественном числе женского рода, причастие принимает форму 'abiertas'."
      }
    ]
  },
  {
    id: 3,
    title: "3. Futuro Simple",
    description: "Պարզ ապառնի ժամանակաձև: Սահմանում է ապագա գործողություն, ինչպես նաև կարող է արտահայտել ենթադրություն ներկայում: Բոլոր կանոնավոր բայերն ունեն նույն վերջավորությունները, որոնք ավելանում են անորոշ դերբային (infinitivo):",
    sentences: [
      {
        id: "3_1",
        text: "Pasado mañana, Carmen [1|venir|vendrá|viene,venga,vendría|Глагол venir в будущем времени имеет неправильную основу vendr-. Для 3-го лица (Carmen) окончание -á: vendrá.] a vernos.",
        translation: "Վաղը չէ մյուս օրը Կարմենը կգա մեզ տեսնելու։",
        explanation: "Маркер 'pasado mañana' (послезавтра) требует будущего времени Futuro Simple. Глагол venir образует будущее время с основой vendr- -> vendrá."
      },
      {
        id: "3_2",
        text: "El invierno próximo, [1|nosotros – esquiar|esquiaremos|esquiamos,esquiaríamos,esquiaren|Правильный глагол esquiar в 1-м лице мн.ч. (nosotros) сохраняет инфинитив и получает окончание -emos: esquiaremos.] en Granada. [2|haber|Habrá|Hay,Había,Habiendo|Безличная форма глагола haber в будущем времени: habrá (будет, будет находиться много людей).] mucha gente.",
        translation: "Հաջորդ ձմռանը մենք դահուկ կքշենք Գրանադայում։ Շատ մարդ կլինի։",
        explanation: "Оба действия направлены в будущее (el invierno próximo). Глагол haber в будущем времени имеет форму 'habrá'."
      },
      {
        id: "3_3",
        text: "Esta noche, [1|vosotros – cenar|cenaréis|cenáis,cenaron,cenaríais|Регулярный глагол cenar в форме vosotros: прибавляем окончание -éis к инфинитиву: cenaréis.] en casa.",
        translation: "Այս երեկո դուք տանը կընթրեք։",
        explanation: "Будущие планы на сегодняшний вечер (esta noche) выражаются через Futuro Simple, форма vosotros для cenar - 'cenaréis'."
      },
      {
        id: "3_4",
        text: "Dentro de un mes, [1|usted – intentar|intentará|intenta,intentó,intentaría|Для Ud. (вежливое 3-е лицо ед.ч.) к инфинитиву intentar добавляем -á: intentará.] venir.",
        translation: "Մեկ ամսից Դուք կփորձեք գալ։",
        explanation: "Указатель 'dentro de un mes' (через месяц) направляет действие в будущее. Форма Usted согласуется с 3-м лицом единственного числа: intentará."
      },
      {
        id: "3_5",
        text: "El miércoles que viene [1|yo – salir|saldré|salgo,salí,saldría|Salir в будущем имеет измененную основу saldr-. Для 1 лица ед.ч. прибавляем -é: saldré.] a las 9.",
        translation: "Հաջորդ չորեքշաբթի ես դուրս կգամ ժամը 9-ին։",
        explanation: "Определенный день в будущем: 'el miércoles que viene'. Глагол salir в Futuro Simple образует основу saldr- и окончание -é (yo): saldré."
      },
      {
        id: "3_6",
        text: "Mañana [1|ser|será|es,fue,sería|Глагол ser регулярный в будущем. Для 3 лица единственного числа: será.] mi cumpleaños.",
        translation: "Վաղը իմ ծննդյան օրն է լինելու։",
        explanation: "Событие завтрашнего дня ('mañana'). 3-е лицо единственного числа от ser: será."
      },
      {
        id: "3_7",
        text: "En agosto, mis padres [1|hacer|harán|hacen,hicieron,harían|Глагол hacer имеет форму будущего времени с корнем har-. Для 3 лица мн.ч. (mis padres): harán.] un viaje por América Latina.",
        translation: "Օգոստոսին ծնողներս ճանապարհորդություն կանեն Լատինական Ամերիկայով։",
        explanation: "Планируемое будущее действие в августе ('en agosto'). У глагола hacer основа меняется на har-, добавляется окончание -án."
      },
      {
        id: "3_8",
        text: "¿No [1|tú – olvidar|olvidarás|olvidas,olvidaste,olvidarías|Регулярный глагол olvidar во 2-м лице ед.ч. (tú): инфинитив + -ás = olvidarás.] nuestro compromiso?",
        translation: "Չե՞ս մոռանա մեր պայմանավորվածությունը։",
        explanation: "Вопрос-предположение о будущем событии. Форма tú для olvidar в Futuro Simple: olvidarás."
      }
    ]
  },
  {
    id: 4,
    title: "4. Pretérito Indefinido vs Imperfecto",
    description: "Տարբերությունը անցյալ նկարագրական (Imperfecto) և անցյալ կատարյալ (Indefinido) ժամանակաձևերի միջև:",
    sentences: [
      {
        id: "4_1",
        text: "[1|estar|Estaba|Estuve,Está,Era|Фоновое, длительное действие: 'шел дождь' выражается формой Imperfecto глагола estar - estaba.] lloviendo cuando [2|yo – llegar|llegué|llegaba,llego,llegaré|Точечное событие в прошлом, которое прервало процесс: примените Pretérito Indefinido глагола llegar в 1 лице ед.ч. - llegué.] a Málaga.",
        translation: "Անձրև էր գալիս, երբ ես հասա Մալագա։",
        explanation: "Непрерывный фоновый процесс описывается с помощью Imperfecto (estaba lloviendo), а разовое, завершенное событие в прошлом — с помощью Indefinido (llegué)."
      },
      {
        id: "4_2",
        text: "El otro día, me [1|encontrar|encontré|encontraba,encuentro,encontraré|Указатель 'el otro día' конкретизирует событие как точечное историческое действие, требуя Pretérito Indefinido: encontré.] con tu hermano en la estación.",
        translation: "Մյուս օրը ես հանդիպեցի քո եղբորը կայարանում։",
        explanation: "Временной маркер 'el otro día' (на днях, в прошлый раз) строго указывает на законченность действия и требует Pretérito Indefinido."
      },
      {
        id: "4_3",
        text: "Anoche [1|nosotros – ir|fuimos|íbamos,vamos,iremos|Событие прошлого вечера, ограниченное временем. Используйте Pretérito Indefinido от ir (nosotros): fuimos.] al cine.",
        translation: "Երեկ երեկոյան մենք գնացինք կինոթատրոն։",
        explanation: "Маркер 'anoche' (вчера вечером) относится к завершенному историческому моменту, поэтому используется верная форма Pretérito Indefinido для глагола ir: fuimos."
      },
      {
        id: "4_4",
        text: "La última vez que [1|él – venir|vino|venía,viene,vendrá|Конкретное событие в прошлом 'в прошлый раз, когда он приехал': Indefinido (vino).] a San Sebastián, [2|hacer|hacía|hizo,hace,hará|Описание погоды в прошлом требует Imperfecto: hacía frío.] mucho frío. [3|ser|Fue|Era,Es,Será|Конкретизация точного времени события: Fue en el mes de enero (Pretérito Indefinido).] en el mes de enero.",
        translation: "Վերջին անգամ, երբ նա եկավ Սան Սեբաստիան, շատ ցուրտ էր։ Դա հունվար ամսին էր։",
        explanation: "Глагол venir используется в Indefinido (vino), так как это конкретный исторический момент приезда. Описание погоды идет в Imperfecto (hacía), а указание конкретного месяца начала события требует Indefinido (fue)."
      },
      {
        id: "4_5",
        text: "Cuando Juan [1|regresar|regresó|regresaba,regresa,regresarás|Указание на мгновенное точечное действие возвращения домой: regresó (Pretérito Indefinido).] a casa, no [2|saber|sabía|supe,sabe,sabrá|Описание состояния сознания (он не знал): Imperfecto (no sabía).] que su mujer [3|estar|estaba|estuvo,está,era|Описание состояния его жены в тот момент: Imperfecto (estaba enferma).] enferma.",
        translation: "Երբ Խուանը վերադարձավ տուն, նա չգիտեր, որ իր կինը հիվանդ էր։",
        explanation: "Возвращение домой — это точечный факт (regresó), тогда как незнание о ситуации и болезнь жены — длительные сопутствующие состояния, требующие Imperfecto (sabía, estaba)."
      }
    ]
  },
  {
    id: 5,
    title: "5. Estar + Gerundio",
    description: "Գերունդիումի ձևը (gerundio) կազմվում է -ar վերջավորության բայերի համար -ando, իսկ -er/-ir բայերի համար -iendo վերջավորություններով: Օգտագործվում է տվյալ պահին ընթացքի մեջ գտնվող տևական գործողություն արտահայտելու համար:",
    sentences: [
      {
        id: "5_1",
        text: "¿Qué estáis [1|hacer|haciendo|hacer,hecho,haces|Герундий от глагола hacer: haciendo.] ? Estamos [2|bajar|bajando|bajar,bajado,bajas|Герундий от глагола bajar: bajando.] películas.",
        translation: "Ի՞նչ եք անում։ Մենք ֆիլմեր ենք ներբեռնում։",
        explanation: "Конструкция Estar + Gerundio описывает действие, происходящее прямо в момент речи. Hacer -> haciendo, bajar -> bajando."
      },
      {
        id: "5_2",
        text: "¿Sigues [1|ver|viendo|ver,visto,ves|Глагол ver претерпевает изменение в герундии: viendo. Констукция 'seguir + герундий' означает 'продолжать делать что-то'.] a tus amigos del instituto?",
        translation: "Դու շարունակո՞ւմ ես տեսնել քո դպրոցի ընկերներին։",
        explanation: "Конструкция Seguir + Gerundio означает сохранение или продолжение какого-либо действия. Герундий от ver - 'viendo'."
      },
      {
        id: "5_3",
        text: "Llevan dos meses [1|vivir|viviendo|vivir,vivido,vives|Глагол vivir на -ir принимает стандартное окончание герундия -iendo: viviendo. Конструкция 'llevar + время + герундий' показывает длительность.] en Marsella.",
        translation: "Նրանք արդեն երկու ամիս է ապրում են Մարսելում։",
        explanation: "Конструкция 'Llevar + период времен + герундий' выражает действие, которое длится определенный период. Vivir -> viviendo."
      },
      {
        id: "5_4",
        text: "¿Estás [1|estudiar|estudiando|estudiar,estudiado,estudias|Герундий от estudiar: estudiando.] ? No, estoy [2|preparar|preparando|preparar,preparado,preparas|Герундий от preparar: preparando.] la comida.",
        translation: "Դու սովորո՞ւմ ես։ Ոչ, ես ուտելիք եմ պատրաստում։",
        explanation: "Используется настоящее длительное время (Estar + Gerundio) для вопросов и ответов о текущей активности. Estudiar -> estudiando, preparar -> preparando."
      },
      {
        id: "5_5",
        text: "A pesar de la crisis, seguimos [1|ir|yendo|ir,ido,vamos|Герундий от глагола ir является абсолютно неправильным: yendo.] de copas con nuestros amigos.",
        translation: "Չնայած ճգնաժամին՝ մենք շարունակում ենք ընկերների հետ խմելու գնալ։",
        explanation: "Глагол ir образует форму герундия через неправильную форму 'yendo'. Конструкция 'seguir + герундий' означает продолжение действия."
      }
    ]
  },
  {
    id: 6,
    title: "6. Pronombres Personales / Անձնական դերանուններ",
    description: "Անձնական դերանունների կիրառման տարբերությունը որպես ենթակա և նախդիրներից հետո (օրինակ՝ 'mí' և 'ti'՝ 'yo' և 'tú' դերանունների փոխարեն, բացառությամբ որոշ դեպքերի):",
    sentences: [
      {
        id: "6_1",
        text: "[1|1psg|Yo|Me,Mí,Nosotros|Роль подлежащего перед глаголом. Личное местоимение 1-го лица ед.ч.: Yo (Я).] voy a las 19:00.",
        translation: "Ես գնում եմ ժամը 19:00-ին։",
        explanation: "В начале предложения в качестве подлежащего ('я иду') используется местоимение 'Yo'."
      },
      {
        id: "6_2",
        text: "Mi hermana tiene 3 años más que [1|1psg|mí|yo,me,nosotros|При сравнении после предлогов/союзов во многих идиоматических оборотах используется 'mí' (или 'yo' в разговорной речи, но по нормам упражнения требуется 'mí' как ударное местоимение после предлога/сопоставления).] .",
        translation: "Իմ քույրը ինձնից 3 տարով մեծ է։",
        explanation: "В испанском языке в конструкциях сравнения часто используется ударная форма местоимения: 'que mí'."
      },
      {
        id: "6_3",
        text: "[1|3psg f|Ella|Él,Nosotras,Ellas|Подлежащее женского рода единственного числа: Ella (Она).] es una chica estupenda.",
        translation: "Նա հրաշալի աղջիկ է։",
        explanation: "Указание на девушку ('chica estupenda') означает женский род единственного числа — 'Ella'."
      },
      {
        id: "6_4",
        text: "¿Este regalo es para [1|1psg|mí|me,yo,migo|После предлогов (para, de, a, por) местоимение 'yo' превращается в форму 'mí' с графическим ударением.] ?",
        translation: "Այս նվերը ի՞նձ համար է։",
        explanation: "После предлога 'para' личное местоимение принимает ударную субстантивную форму 'mí' (всегда пишется с ударением, чтобы не путать с притяжательным 'mi')."
      },
      {
        id: "6_5",
        text: "A [1|1ppl|nosotros|nos,vosotros,mí|Дополнение 'A nosotros' удваивает косвенное местоимение 'nos'.] nos gustan los deportes.",
        translation: "Մեզ դուր են գալիս սպորտաձևերը։",
        explanation: "При выделении адресата чувств с глаголом gustar используется предлог 'a' + местоимение: 'A nosotros nos gustan...'"
      },
      {
        id: "6_6",
        text: "¿Es [1|forme polie|usted|tú,él,vosotros|'usted' является вежливым обращением во 2 лице ед.ч.] el señor Gómez? Sí, soy [2|1psg|yo|me,mí,nosotros|Отвечая 'Это я' на испанском говорят 'soy yo' с использованием именительного я 'yo'.] .",
        translation: "Դո՞ւք եք պարոն Գոմեսը։ Այո, ես եմ։",
        explanation: "Для вежливого обращения используется местоимение 'usted'. Ответ в стиле 'Да, это я' грамматически формулируется как 'Sí, soy yo'."
      },
      {
        id: "6_7",
        text: "Me acuerdo mucho de [1|2psg|ti|tú,te,mí|После предлогов (в данном случае 'de') местоимение 'tú' переходит в форму 'ti' (без ударения).] .",
        translation: "Ես քեզ շատ եմ հիշում։",
        explanation: "После предлога 'de' используется ударная форма местоимения 2-го лица единственного числа: 'ti' (пишется без графического ударения)."
      }
    ]
  },
  {
    id: 7,
    title: "7. Pronombres de Objeto / Դերանուն-լրացումներ",
    description: "Ուղիղ և անուղղակի խնդիր դերանուններ (lo, la, los, las, le, les, se): Կիրառվում է գոյականի սեռին և թվին համապատասխանեցումը, ինչպես նաև նախդրավոր կառույցների փոխարինումը:",
    sentences: [
      {
        id: "7_1",
        text: "Las cerezas [1|косвенное дополнение|les|le,los,nos|Косвенный объект 'a mis hijos' во мн. числе требует дублирования местоимением 'les' перед глаголом.] gustan mucho a mis hijos.",
        translation: "Բալերը շատ են դուր գալիս իմ երեխաներին։",
        explanation: "Согласно правилам дублирования дополнения, если косвенное дополнение ('a mis hijos') стоит после глагола, перед глаголом обязательно ставится его местоименная форма: 'les' (поскольку дети — 'ellos')."
      },
      {
        id: "7_2",
        text: "¿Has traído la revista que te he dejado? Sí, [1|прямое дополнение (revista)|la|lo,le,un|Поскольку 'la revista' — женский род единственного числа, заменяем его прямым местоимением: la.] he traído.",
        translation: "Դու բերե՞լ ես այն ամսագիրը, որը քեզ թողել էի։ Այո, բերել եմ։",
        explanation: "'La revista' является прямым дополнением женского рода единственного числа, поэтому заменяется местоимением 'la'."
      },
      {
        id: "7_3",
        text: "¿Dónde has dejado los zapatos? [1|прямое дополнение (zapatos)|Los|Las,Les,Me|Местоимение заменяет муж. род мн. число 'los zapatos' -> Los.] he dejado en el dormitorio.",
        translation: "Որտե՞ղ ես թողել կոշիկները։ Դրանք թողել եմ ննջասենյակում։",
        explanation: "'Los zapatos' — мужской род множественного числа. Местоимение прямого дополнения — 'Los'."
      },
      {
        id: "7_4",
        text: "¿Has vuelto a ver a tu amiga de la escuela? Sí, [1|прямое дополнение (amiga)|la|le,lo,esa|Хотя разговор ведется о человеке, прямой объект женского рода 'tu amiga' заменяется личным местоимением 'la'.] vi hace una semana en la calle.",
        translation: "Դու նորից տեսե՞լ ես քո դպրոցի ընկերուհուն։ Այո, մեկ շաբաթ առաջ նրան տեսա փողոցում։",
        explanation: "'A tu amiga' является прямым объектом (ver a alguien). Для женского рода единственного числа используется местоимение 'la' (употребление 'le' вместо 'la' называют leísmo, но классическая грамматика требует 'la')."
      },
      {
        id: "7_5",
        text: "¿A quién [1|косвенное дополнение|le|les,la,me|Для ед.ч. получателя ('a quién') местоимение косвенного дополнения: le.] has dado el regalo? [2|косвенное дополнение (3-е л.)|Se|Le,Me,Te|В испанском языке если два местоимения 3-го лица стоят рядом, le превращается в se : se lo he dado.] [3|прямое дополнение (regalo)|lo|la,le,los|Regalo - мужской род ед.ч., заменяется на ло: lo.] he dado a mi madre.",
        translation: "Ո՞ւմ ես տվել նվերը։ Ես այն տվել եմ մայրիկիս։",
        explanation: "Когда косвенное ('le' — 'моему отцу/матери') и прямое ('lo' — 'подарок') местоимения третьего лица сочетаются, косвенное 'le' переходит в 'se' во избежание благозвучия: 'Se lo he dado'."
      },
      {
        id: "7_6",
        text: "[1|1ppl|Nosotros|Vosotros,Ellos,Yo|В качестве подлежащего с глаголом hemos/han (согласно переводу, 'Мы написали') используется nosotros.] hemos escrito un email.",
        translation: "Մենք էլեկտրոնային նամակ ենք գրել։",
        explanation: "Согласно армянскому переводу 'Մենք էլեկտրոնային նամակ ենք գրել' (Мы написали...), подлежащим является местоимение 1-го лица множественного числа 'Nosotros', и глагол ставится в форму 'hemos escrito'."
      }
    ]
  },
  {
    id: 8,
    title: "8. Algo, alguien, algún, alguno/a(s)",
    description: "Անորոշ դերանունների և մակբայների տարբերությունը: Alguien (ինչ-որ մեկը՝ մարդկանց համար), algo (ինչ-որ բան՝ իրերի համար), algún (ինչ-որ՝ կրճատ ձևն արական սեռի եզակի թվով գոյականներից առաջ), alguno/a (որևէ մեկը, մի քանի):",
    sentences: [
      {
        id: "8_1",
        text: "[1|неопределенное (для людей)|Alguien|Algo,Algún,Alguno|О личных субъектах: 'Кто-то мне сказал' -> Alguien.] me lo dijo, pero no me acuerdo quién.",
        translation: "Ինչ-որ մեկը դա ինձ ասաց, բայց չեմ հиշում՝ ով։",
        explanation: "Говорится о человеке ('кто-то мне сказал'), поэтому используется местоимение 'Alguien'."
      },
      {
        id: "8_2",
        text: "[1|неопределенное|Algunas|Algunos,Algún,Alguien|Слово 'veces' (раза) женского рода мн. числа, поэтому согласуется: Algunas veces (иногда).] veces no sé ni qué pensar de esta situación.",
        translation: "Երբեմն նույնիսկ չգիտեմ՝ ինչ մտածել այս իրավիճակի մասին։",
        explanation: "Идиоматическое выражение 'algunas veces' (иногда) требует согласования в женском роде множественного числа со словом 'veces'."
      },
      {
        id: "8_3",
        text: "Aquí pasa [1|неопределенное (для вещей)|algo|alguien,algún,alguno|О неопределенных вещах: 'Что-то странное' -> algo raro.] raro.",
        translation: "Այստեղ ինչ-որ տարօրինակ բան է կատարվում։",
        explanation: "Говорится о неопределенном событии, вещи или явлении ('происходит что-то'): 'algo'."
      },
      {
        id: "8_4",
        text: "Yo creo que [1|неопределенный артикль|algún|alguno,algunos,alguien|Перед существительным мужского рода ед. числа 'día' слово 'alguno' усекается до 'algún'.] día nos dirá la verdad.",
        translation: "Կարծում եմ՝ մի օր նա մեզ ճշմարտությունը կասի։",
        explanation: "Существительное 'día' мужского рода единственного числа, перед ним неопределенное прилагательное усекается: 'algún día'."
      },
      {
        id: "8_5",
        text: "Siempre encontrarás a [1|неопределенное для людей|alguien|algo,alguno,algún|'Кого-то, кто тебя подвезет' – относится к человеку, ставится с предлогом личного дополнения a: a alguien.] que te lleve en coche.",
        translation: "Դու միշտ կգտնես մեկին, ով քեզ մեքենայով կտանի։",
        explanation: "Поиск одушевленного лица ('кого-то'): 'a alguien'. Предлог 'a' указывает на прямое дополнения-человека."
      },
      {
        id: "8_6",
        text: "Solo [1|неопределенное|algunos|algunas,algún,alguien|Согласование с существительным мужского рода мн. числа 'estudiantes': algunos.] estudiantes hablan español en casa.",
        translation: "Միայն որոշ ուսանողներ են տանը իսպաներեն խոսում։",
        explanation: "'Estudiantes' — множественное число. Так как слово употребляется во множественном числе, ставим согласованное 'algunos'."
      },
      {
        id: "8_7",
        text: "¿Queréis [1|неопределенное для вещей|algo|alguien,alguno,alguna|'Хотите что-нибудь еще?' -> algo más.] más?",
        translation: "Ուզո՞ւմ եք ևս ինչ-որ բան։",
        explanation: "Предложение неопределенного объекта или пищи: '¿Queréis algo más?' (Хотите что-то еще?)."
      },
      {
        id: "8_8",
        text: "¿Hay [1|неопределенное|alguna|alguno,algún,algo|Существительное 'noticia' женского рода ед. числа, слово согласуется: alguna noticia.] noticia interesante?",
        translation: "Կա՞ որևէ հետաքրքիր նորություն։",
        explanation: "Существительное 'noticia' женского рода единственного числа, поэтому согласуется: 'alguna noticia'."
      }
    ]
  },
  {
    id: 9,
    title: "9. Pronombres Indefinidos y Negativos / Անորոշ և ժխտական դերանուններ",
    description: "Cualquier(a), nadie, nada, ningún, ninguno/a, algún: Կիրառվում է բառերի կրճատումը (apócope)՝ cualquiera -> cualquier, ninguno -> ningún, արական սեռի եզակի թվով գոյականներից առաջ:",
    sentences: [
      {
        id: "9_1",
        text: "Puede aparecer en [1|неопределенное|cualquier|cualquiera,nadie,ningún|Перед существительным мужского рода 'momento' происходит усечение cualquiera -> cualquier.] momento.",
        translation: "Նա կարող է հայտնվել ցանկացած պահի։",
        explanation: "Перед существительным мужского рода ('momento') слово 'cualquiera' усекается, образуя 'cualquier momento'."
      },
      {
        id: "9_2",
        text: "He tenido [1|неопределенное|algunos|algunas,ningún,cualquier|Существительное мн.ч. муж.р 'problemas' требует мн.ч.: algunos problemas.] problemas y no he recibido [2|отрицательное|ningún|ninguno,nada,alguno|Перед существительным мужского рода ед. числа 'tipo' слово 'ninguno' усекается до 'ningún'.] tipo de ayuda por parte de mis amigos.",
        translation: "Ես որոշ խնդիրներ եմ ունեցել և ընկերներիս կողմից ոչ մի տեսակի օգնություն չեմ ստացել։",
        explanation: "Слово 'problemas' согласуется с мужским родом мн. числа: 'algunos'. Перед словом 'tipo' отрицательное местоимение усекается: 'ningún tipo'."
      },
      {
        id: "9_3",
        text: "[1|отрицательное (усеченное)|Ningún|Ninguno,Nadie,Cualquiera|Перед существительным ед.ч. 'niño' обязательно усечение: 'Ningún niño sería capaz...'] niño sería capaz de hacerlo.",
        translation: "Ոչ ոք / ոչ մի երեխա չէր կարողանա դա անել։",
        explanation: "Перед существительным единственного числа мужского рода 'niño' отрицательное местоимение 'ninguno' усекается до 'ningún'."
      },
      {
        id: "9_4",
        text: "Aquí no veo a [1|отрицательное для людей|nadie|nada,ninguno,alguien|'Никого не вижу': для людей используется отрицание 'nadie'.] que conozca a Pedro.",
        translation: "Այստեղ ոչ մեկին չեմ տեսնում, ով ճանաչի Պեդրոյին։",
        explanation: "Отрицание относится к людям ('я никого не вижу, кто знает Педро'), поэтому используется 'nadie' с предлогом одушевленного дополнения 'a'."
      },
      {
        id: "9_5",
        text: "Tiene [1|неопределенное|algunas|algunos,ningún,cualquiera|'ideas' женского рода мн. числа, согласуем: algunas ideas.] ideas, pero es incapaz de realizarlas. Sin embargo, no tiene [2|отрицательное|ningún|ninguno,ninguna,nada|Перед существительным муж. р. ед.ч 'inconveniente' слово усекается: ningún inconveniente.] inconveniente en admitir sus debilidades.",
        translation: "Նա որոշ գաղափարներ ունի, բայց անկարող է դրանք իրականացնել։ Սակայն նա խնդիր չունի ընդունելու իր թույլ կողմերը։",
        explanation: "'Ideas' женского рода, поэтому 'algunas'. 'Inconveniente' — существительное мужского рода, поэтому перед ним используется усеченная форма 'ningún'."
      },
      {
        id: "9_6",
        text: "Todavía no me han regalado [1|отрицательное вещи|nada|nadie,ninguno,ningún|'Ничего мне не подарили': отрицание предметов - nada.] para mi cumple.",
        translation: "Ինձ դեռ ոչինչ չեն նվիրել ծննդյանս համար։",
        explanation: "Отрицательное предложение с использованием прямого дополнения, относящегося к предметам: 'nada' (ничего)."
      }
    ]
  },
  {
    id: 10,
    title: "10. Ser vs Estar (Մաս 1)",
    description: "Ser և Estar բայերի հիմնական տարբերությունները: Ser-ն արտահայտում է մշտական հատկանիշներ (մասնագիտություն, ծագում, կրավորական սեռ, ժամանակ), Estar-ն արտահայտում է ժամանակավոր վիճակ կամ առարկաների գտնվելու վայրը:",
    sentences: [
      {
        id: "10_1",
        text: "Tocó el piano cuando [1|ser/estar (imperfecto)|era|estaba,es,está|Период жизни в прошлом ('когда он был подростком') — это постоянная характеристика, требующая Imperfecto глагола ser: era.] adolescente.",
        translation: "Նա դաշնամուր էր նվագում, երբ դեռահաս էր։",
        explanation: "Возрастной период и статус ('когда был подростком') выражают неотъемлемое состояние человека в определенный период. Используется Imperfecto глагола ser: 'era'."
      },
      {
        id: "10_2",
        text: "[1|ser/estar|Son|Están,Es,Está|Стоимость, общая сумма выражается формой глагола ser во множественном числе: Son 695 euros.] 695 €.",
        translation: "Դա 695 եվրո է։",
        explanation: "Для выражения общей цены, стоимости в рознице используется глагол ser во множественном числе: 'Son'."
      },
      {
        id: "10_3",
        text: "Anoche [1|ser/estar|era|estaba,fue,estuvo|Указание времени в прошлом ('было слишком поздно'): Imperfecto от ser -> era.] demasiado tarde para llamarla.",
        translation: "Երեկ երեկոյան նրան զանգելու համար արդեն շատ ուշ էր։",
        explanation: "Время на часах и временные характеристики всегда выражаются через глагол ser. 'Было поздно' в прошедшем времени — это Imperfecto глагола ser: 'era'."
      },
      {
        id: "10_4",
        text: "¿Cuántos [1|ser/estar (2ppl)|sois|estáis,son,están|Вопрос о количестве человек в группе ('Сколько вас?') - используется глагол ser: sois.] en segundo curso? ¡[2|ser/estar (1ppl)|Somos|Estamos,Son,Están|Ответ 'Нас много': глагол ser во 1 лице мн.ч: Somos muchos.] muchos! Las aulas [3|ser/estar|están|son,estaba,era|Местонахождение или состояние переполненности аудиторий: están llenas.] llenas cuando tenemos clase.",
        translation: "Դուք քանի՞ հոգի եք երկրորդ կուրսում։ Մենք շատ ենք։ Դասասենյակները լիքն են, երբ դաս ունենք։",
        explanation: "Определение количества присутствующих членов группы выражается через глагол ser ('¿Cuántos sois?', 'Somos muchos'). Состояние заполненности помещения выражается через estar ('están llenas')."
      },
      {
        id: "10_5",
        text: "¿De quién [1|ser|son|están,es,está|Вопрос о принадлежности ('Чьи это конспекты?'): глагол ser -> son.] los apuntes que [2|estar|están|son,estaba,era|Местонахождение конспектов на столе: están en la mesa.] en la mesa?",
        translation: "Ո՞ւմն են այն գրառումները, որոնք սեղանի վրա են։",
        explanation: "Принадлежность объекта ('De quién son...') всегда выражается глаголом ser. Физическое местонахождение предметов ('están en la mesa') — глаголом estar."
      },
      {
        id: "10_6",
        text: "Mi padre ya [1|estar|estaba|era,estuvo,fue|Семейное положение в определенный момент описывается глаголом estar: estaba divorciado.] divorciado cuando conoció a esa mujer.",
        translation: "Հայրս արդեն ամուսնալուծված էր, երբ ծանոթացավ այդ կնոջ հետ։",
        explanation: "Семейное положение в испанском языке (состояние на определенный момент) традиционно описывается глаголом estar: 'estaba divorciado'."
      },
      {
        id: "10_7",
        text: "Ayer [1|ser (P.I.)|fue|era,estuvo,estaba|Событие дня рождения — однократный свершившийся исторический факт: fue cumpleaños.] su cumpleaños. No lo celebró: [2|estar (P.I.)|estuvo|estaba,fue,era|Факт нахождения дома весь день (ограничен рамками одного вчерашнего дня): глагол estar в Indefinido - estuvo.] todo el día en casa mientras nosotras [3|estar (imperfecto)|estábamos|éramos,estuvimos,fuimos|Описание параллельного фонового действия нахождения в магазине: estábamos de compras.] de compras.",
        translation: "Երեկ նրա ծննդյան օրն էր։ Նա չտոնեց․ ամբողջ օրը տանն էր, մինչ մենք գնումներ էինք անում։",
        explanation: "Дата события (день рождения вчера) — 'fue'. Факт пребывания дома в течение фиксированного периода выражается в Indefinido глагола estar: 'estuvo'. Параллельный фон покупок — 'estábamos'."
      }
    ]
  },
  {
    id: 11,
    title: "11. Por vs Para",
    description: "Երկու նախդիրների տարբերությունը: 'Para'-ն արտահայտում է գործողության նպատակ, հասցեատեր, ուղղության վերջնակետ, վերջնաժամկետ, սուբյեկտիվ կարծիք: 'Por'-ն արտահայտում է պատճառ, գին, շարժում տարածքով, փոխանակում, տևողություն և կապի միջոց:",
    sentences: [
      {
        id: "11_1",
        text: "No sirve [1|por/para|para|por|Цель/применимость: 'не служит для чего-либо' -> para nada.] preocuparnos demasiado. Si no nos encuentran, preguntarán [2|por/para|por|para|Тема беспокойства/спроса: глагол preguntar требует предлога por (спросить о ком-то, разыскивать кого-то) -> por nosotros.] nosotros.",
        translation: "Ոչ մի օգուտ չկա չափազանց անհանգստանալուց։ Եթե մեզ չգտնեն, մեր մասին կհարցնեն։",
        explanation: "'No servir para nada' (быть бесполезным) — идиома с para. 'Preguntar por alguien' (разыскивать, спрашивать о ком-то) — фиксированный предлог por."
      },
      {
        id: "11_2",
        text: "¿Te gustan mis zapatos? Los compré [1|por/para|por|para|Цена покупки/обмен: купил за 80 евро -> por 80 euros.] 80 euros. Son zapatos especiales [2|por/para|para|por|Предназначение объекта: специальная обувь для походов -> para senderismo.] senderismo.",
        translation: "Ես դրանք գնել եմ 80 եվրոյով։ Դրանք հատուկ կոշիկներ են արշավների համար։",
        explanation: "Цена за покупку выражается через 'por' (por 80 euros). Цель и предназначение обуви выражаются через 'para' (especiales para senderismo)."
      },
      {
        id: "11_3",
        text: "Gracias [1|por/para|por|para|Благодарность за подарок/действие всегда идет с предлогом por -> gracias por...] tu dibujo. [2|por/para|Para|Por|Субъективное мнение: для меня, с моей точки зрения -> Para mí.] mí es el mejor de todos los que has hecho.",
        translation: "Շնորհակալություն քո նկարի համար։ Ինձ համար դա քո արածներից ամենալավն է։",
        explanation: "Благодарность выражается через 'por' (gracias por tu dibujo). Субъективное мнение ('для меня') – через 'Para mí'."
      },
      {
        id: "11_4",
        text: "Oye, ¿me cambias tu bici [1|por/para|por|para|Обмен одного предмета на другой требует por -> por ese videojuego.] ese videojuego?",
        translation: "Քո հեծանիվը կփոխե՞ս այդ տեսախաղի հետ։",
        explanation: "Для совершения транзакции обмена (велосипед на видеоигру) употребляется предлог 'por'."
      },
      {
        id: "11_5",
        text: "Mi amigo se ha ido a Australia [1|por/para|por|para|Продолжительность/длительность периода времени в прошлом/будущем выражается через por (на шесть месяцев) -> por seis meses. Также допустимо para как конечный срок, но по упражнению правильный por.] seis meses.",
        translation: "Իմ ընկերը գնացել է Ավստրալիա վեց ամսով։",
        explanation: "Длительность времени (в течение 6 месяцев) традиционно выражается предлогом 'por'."
      },
      {
        id: "11_6",
        text: "Hay que disfrutar de la vida [1|por/para|para|por|Цель: чтобы быть счастливым -> para ser feliz.] ser feliz.",
        translation: "Պետք է վայելել կյանքը՝ երջանիկ լինելու համար։",
        explanation: "Когда предлог стоит перед инфинитивом со значением 'чтобы что-то сделать' (цель действия), используется 'para'."
      },
      {
        id: "11_7",
        text: "Vamos a dar un paseo [1|por/para|por|para|Движение внутри или по территории/местности: прогулка по полю/лесу -> por el campo.] el campo.",
        translation: "Գնանք զբոսնելու դաշտով / գյուղական վայրերով։",
        explanation: "Движение через пространство или по местности (прогулка сквозь поле, по лесу) выражается через 'por'."
      },
      {
        id: "11_8",
        text: "¿Estáis listos [1|por/para|para|por|Готовность к совершению действия (цели) -> listo para salir.] salir?",
        translation: "Պատրա՞ստ եք դուրս գալու։",
        explanation: "Конструкция готовности к какому-либо будущему действию/цели: 'estar listo para + инфинитив'."
      },
      {
        id: "11_9",
        text: "[1|por/para|Para|Por|Крайний срок / дедлайн: к следующей неделе -> Para la semana que viene.] la semana que viene, haréis el ejercicio de la página 83.",
        translation: "Հաջորդ շաբաթվա համար կանեք 83-րդ էջի վարժությունը։",
        explanation: "Указание конечного срока или дедлайна ('к следующей неделе') требует предлога 'Para'."
      },
      {
        id: "11_10",
        text: "Ha sido olvidado [1|por/para|por|para|Субъект пассивного залога ('был забыт кем? отцом') -> por su propio padre.] su propio padre.",
        translation: "Նրան մոռացել է իր իսկ հայրը։",
        explanation: "В пассивных конструкциях исполнитель действия (агент) вводится с помощью предлога 'por' (by)."
      },
      {
        id: "11_11",
        text: "Eso lo hago [1|por/para|por|para|Причина или совершение во благо кого-то: делаю ради нее -> por ella.] ella, porque ahora mismo está deprimida.",
        translation: "Ես դա անում եմ նրա համար, որովհետև հիմա նա ընկճված է։",
        explanation: "Действие совершается ради кого-то по причине сочувствия ('из-за нее, во имя нее'), поэтому пишем 'por ella'."
      },
      {
        id: "11_12",
        text: "[1|por/para|Para|Por|Условие / цель: 'для того чтобы выиграть матч' -> Para poder ganar.] poder ganar un partido, hay que tener valor.",
        translation: "Խաղը հաղթելու համար պետք է քաջություն ունենալ։",
        explanation: "Значение цели ('чтобы смочь победить'): перед инфинитивом ставится 'Para'."
      },
      {
        id: "11_13",
        text: "Esas cartas son [1|por/para|para|por|Адресат получения писем (письма для вас) -> para vosotros.] vosotros.",
        translation: "Այդ նամակները ձեզ համար են։",
        explanation: "Выражение получателя писем (для кого предназначены письма) осуществляется с помощью 'para'."
      },
      {
        id: "11_14",
        text: "¿Sabes dónde está Pedro? No, estará [1|por/para|por|para|Приблизительное местоположение: где-то там, поблизости -> por allí.] allí.",
        translation: "Ոչ, նա երևի այնտեղ ինչ-որ տեղ կլինի։",
        explanation: "Приблизительное местоположение ('где-то там', 'в том направлении') выражается через 'por allí'."
      },
      {
        id: "11_15",
        text: "¡Qué frío hace [1|por/para|para|por|Сопоставление/сравнение с общепринятыми ожиданиями: холодно для летнего дня -> para un día.] un día de pleno verano!",
        translation: "Ինչքան ցուրտ է լիարժեք ամառային օրվա համար։",
        explanation: "Предлог 'para' может употребляться для сравнения вопреки ожиданию нормальности ('холодно для летнего дня')."
      },
      {
        id: "11_16",
        text: "Gracias [1|por/para|por|para|Благодарность за действие: спасибо за то, что сказал -> gracias por decirme.] decirme si vienes o no el sábado.",
        translation: "Շնորհակալություն, որ ինձ ասում ես՝ շաբաթ օրը գալիս ես, թե ոչ։",
        explanation: "Благодарность за предоставление информации выражается через 'gracias por'."
      },
      {
        id: "11_17",
        text: "Estaré en España [1|por/para|por|para|Приблизительное время действия ('около Рождества') -> por Navidad. Если бы утверждался строгий срок, использовалось бы para. В ответах указано оба варианта с разным оттенком за счет их синонимичности в контексте праздников. Для упражнения принимаем 'por' и 'para' как верные.] Navidad.",
        translation: "Ես Իսպանիայում կլինեմ Սուրբ Ծննդյան ժամանակ / մինչև Սուրբ Ծնունդ։",
        explanation: "'Por Navidad' означает 'около Рождества (приблизительно в праздники)'. 'Para Navidad' означает 'к Рождеству' (как цель или срок). Оба варианта верны и включены как правильные."
      }
    ]
  },
  {
    id: 12,
    title: "12. Ser vs Estar (Մաս 2)",
    description: "Ser և Estar բայերի տարբերակման ավելի մանրամասն գործնական կիրառություն (մշտական հատկանիշ/մասնագիտություն/ամսաթիվ/ժամանակ և ֆիզիկական գտնվելու վայր/ժամանակավոր վիճակ):",
    sentences: [
      {
        id: "12_1",
        text: "Mis vecinos [1|ser/estar|están|son|Физическое присутствие снаружи (fuera) — это местоположение: están fuera.] fuera.",
        translation: "Ինմ հարևանները դրսում են։",
        explanation: "Нахождение где-либо (снаружи, дома, за границей) всегда описывается через глагол estar. Соседи 'están fuera'."
      },
      {
        id: "12_2",
        text: "Miguel [1|ser/estar|estuvo|fue|Нахождение в определенной стране в прошлом как исторический свершившийся факт пребывания: estuvo en Suecia.] en Suecia el año pasado.",
        translation: "Միգելը անցյալ տարի Շվեդիայում էր։",
        explanation: "Пребывание в стране (в Швеции) в прошлом. Используется прошедшее время претерита (Indefinido) глагола estar: 'estuvo'."
      },
      {
        id: "12_3",
        text: "Ayer [1|ser/estar|fue|estuvo|Вчера была определенная дата (4 октября): дата выражается ser -> fue.] el 4 de octubre.",
        translation: "Երեկ հոկտեմբերի 4-ն էր։",
        explanation: "Указание даты на календаре всегда осуществляется посредством глагола ser: 'Ayer fue...'"
      },
      {
        id: "12_4",
        text: "Buenos Aires [1|ser/estar|está|es|Географическое положение города на карте: está en Argentina.] en Argentina.",
        translation: "Բուենոս Այրեսը գտնվում է Արգենտինայում։",
        explanation: "Географическое расположение стран, городов, рек и зданий всегда передается глаголом estar: 'está'."
      },
      {
        id: "12_5",
        text: "Pablo [1|ser/estar|es|está|Происхождение из города Сарагоса — это постоянное свойство: es de Zaragoza.] de Zaragoza, pero [2|ser/estar|está|es|Временное нахождение в путешествии в Мадриде: está de viaje.] de viaje en Madrid.",
        translation: "Պաբլոն Սարագոսայից է, բայց հիմա ճանապարհորդության է Մադրիդում։",
        explanation: "Родина и происхождение человека выражаются глаголом ser ('es de...'). Но нахождение в путешествии в настоящий момент описывается через estar ('está de viaje')."
      },
      {
        id: "12_6",
        text: "La reunión [1|ser/estar|será|estará|Событие, мероприятие проходит где-то или когда-то — используется ser: será mañana.] mañana en el despacho del abogado.",
        translation: "Հանդիպումը վաղը կլինի փաստաբանի գրասենյակում։",
        explanation: "Важное правило: проведение мероприятий, собраний, лекций (когда событие 'имеет место быть') всегда выражается через глагол ser: 'La reunión será'."
      },
      {
        id: "12_7",
        text: "Mi madre [1|ser/estar|es|está|Профессия человека — это постоянная социальная категория, используем ser: es enfermera.] enfermera. Dice que su trabajo [2|ser/estar|es|está|Характеристика работы (работа тяжелая) — это неотъемлемое свойство: es difícil.] difícil.",
        translation: "Մայրս բուժքույր է։ Նա ասում է, որ իր աշխատանքը դժվար է։",
        explanation: "Профессия матери ('es enfermera') и сложность её работы ('es difícil') описывают сущностные свойства субъектов, поэтому используется 'ser'."
      },
      {
        id: "12_8",
        text: "[1|ser/estar|Estoy|Soy|Временное физическое состояние (очень устал) -> Estoy muy cansado.] muy cansado porque he dormido poco.",
        translation: "Ես շատ հոգնած եմ, որովհետև քիչ եմ քնել։",
        explanation: "Физическое утомление или временное самочувствие выражается глаголом estar: 'Estoy muy cansado'."
      },
      {
        id: "12_9",
        text: "El viernes pasado [1|ser (Р.I.)|fue|estuvo|В прошлую пятницу был его день отдыха (событие времени): fue su día.] su día de descanso. Por eso no [2|estar (Р.I.)|estuvo|fue|Он отсутствовал (физически не находился здесь): не был здесь -> no estuvo aquí.] aquí.",
        translation: "Անցած ուրբաթ նրա հանգստյան օրն էր։ Այդ պատճառով նա այստեղ չէր։",
        explanation: "День на календаре — 'fue'. Отсутствие человека в определенный момент времени (физическое ненахождение здесь вчера) описывается через Indefinido от estar: 'estuvo'."
      },
      {
        id: "12_10",
        text: "Las chicas que hoy [1|estar|están|son|Сегодня они заболели / плохо себя чувствуют: están malas.] malas [2|ser|son|están|Родственная принадлежность ('мои сестры') — это постоянная идентичность: son mis hermanas.] mis hermanas.",
        translation: "Այն աղջիկները, որոնք այսօր հիվանդ են, իմ քույրերն են։",
        explanation: "Выражение 'estar malo' означает 'быть больным/плохо выглядеть', тогда как сердитые родственные узы ('son mis hermanas') выражаются только через ser."
      },
      {
        id: "12_11",
        text: "¿Cuándo [1|ser|es|está|День рождения — постоянная временная координата события: es tu cumpleaños.] tu cumpleaños?",
        translation: "Ե՞րբ է քո ծննդյան օրը։",
        explanation: "Праздник и дата рождения всегда вводятся глаголом ser: '¿Cuándo es tu cumpleaños?'."
      },
      {
        id: "12_12",
        text: "[1|estar|Está|Es|Короткое суждение о ситуации: 'Это хорошо [в данный момент]' -> Está bien.] bien, pero la verdad [2|ser|es|está|Утверждение объективного факта ('правда заключается в том...'): la verdad es que...] que no [3|ser|es|está|Значимость 'не очень важно': es muy importante (постоянный признак).] muy importante.",
        translation: "Լավ է, բայց ճշմարտությունն այն է, որ դա շատ կարևոր չէ։",
        explanation: "Фраза согласия 'Está bien' строится с estar. Другие связки в предложении определяют фундаментальную суть фактов ('es la verdad', 'no es importante') и требуют ser."
      },
      {
        id: "12_13",
        text: "¿[1|estar (imperfecto)|Estabas|Eras|Семейное состояние в прошедший период: был ли ты женат тогда? -> Estabas casado.] casado cuando conociste a Carmen?",
        translation: "Դու ամուսնացա՞ծ էիր, երբ ծանոթացար Կարմենի հետ։",
        explanation: "Семейный статус в испанском языке согласуется с глаголом estar. Поскольку это описывает фоновое состояние в прошлом, используется Imperfecto: 'Estabas casado'."
      },
      {
        id: "12_14",
        text: "Vosotros [1|ser|sois|estáis|Личностные качества людей (вы приятные, дружелюбные) — постоянное свойство характера: sois simpáticos.] simpáticos.",
        translation: "Դուք հաճելի եք։",
        explanation: "Характер человека (быть симпатичным, милым) — постоянная черта личности, выражаемая через ser: 'sois simpáticos'."
      },
      {
        id: "12_15",
        text: "Quiero que [1|estar (subjuntivo)|esté|sea|Состояние завершенности дела: 'хочу чтобы это было сделано' -> esté hecho.] hecho antes de que [2|ser (subjuntivo)|sean|estén|Время часов ('прежде чем пробьет два часа') требует Subjuntivo от ser: sean las dos.] las dos.",
        translation: "Ուզում եմ, որ դա արված լինի մինչև ժամը երկուսը։",
        explanation: "Выражение результата действия ('сделано к моменту') требует глагола estar -> 'esté hecho'. Обозначение времени на часах в придаточном времени требует ser -> 'sean las dos'."
      },
      {
        id: "12_16",
        text: "Hoy [1|ser|somos|estamos|Общий подсчет количества собравшихся членов одной группы ('нас сегодня 48 человек') -> somos 48 personas.] 48 personas. Mañana [2|ser|seremos|estaremos|Завтра нас будет еще больше (будущее время, подсчет): seremos más numerosos.] más numerosos.",
        translation: "Այսօր մենք 48 հոգի ենք։ Վաղը ավելի շատ կլինենք։",
        explanation: "Подсчет численности коллективной группы осуществляется глаголом ser: в настоящем 'somos 48' и 'seremos' в будущем."
      },
      {
        id: "12_17",
        text: "¿La chaqueta esa [1|ser|es|está|Принадлежность одежды человеку ('принадлежит кому-то'): es de alguien.] de alguien?",
        translation: "Այդ բաճկոնը ինչ-որ մեկի՞նն է։",
        explanation: "Для выражения принадлежности предмета кому-либо всегда используется глагол ser: 'La chaqueta es de alguien'."
      },
      {
        id: "12_18",
        text: "Hoy [1|estar|estamos|somos|Когда мы называем дату с предлогом'a', используется estar в 1-м л. мн.ч.: estamos a 22 de mayo.] a 22 de mayo y [2|ser|es|está|Для обозначения события события 'сегодня экзамен по испанскому': es el examen.] el examen de español. ¿Cuándo [3|ser|será|estará|Когда состоится будущее событие: será el de contabilidad.] el de contabilidad?",
        translation: "Այսօր մայիսի 22-ն է, և իսպաներենի քննությունն է։ Ե՞րբ կլինի հաշվապահության քննությունը։",
        explanation: "Указание даты через конструкцию 'Estamos a + число'. События (экзамены), их проведение по времени вводятся глаголом ser, как в настоящем ('es el examen'), так и в будущем ('será el de...')."
      },
      {
        id: "12_19",
        text: "Mi abuela [1|estar|está|es|Нахождение бабушки дома в данный момент: está en casa.] siempre en casa porque [2|ser|es|está|Роль/социальный статус человека (домохозяйка) требует ser: es ama de casa.] ama de casa.",
        translation: "Տատիկս միշտ տանն է, որովհետև տնային տնտեսուհի է։",
        explanation: "Физическое нахождение дома описывается глаголом 'está' (estar). Социальная роль домохозяйки описывается постоянной связкой 'es' (ser)."
      }
    ]
  },
  {
    id: 13,
    title: "13. Rellenar con Preposiciones / Նախդիրներ",
    description: "Իսպաներեն բայերի և արտահায়տությունների խնդրառության ստուգում: Որոշ բայեր պահանջում են հաստատուն նախդիրներ, իսկ մյուսներն օգտագործվում են ուղղակիորեն առանց նախդիրների (նշված են X տառով):",
    sentences: [
      {
        id: "13_1",
        text: "Hemos decidido [1|prep|X|a,de,con,en|Глагол decidir перед инфинитивом употребляется напрямую без предлогов. Обозначается 'X'.] cambiar de coche.",
        translation: "Մենք որոշել ենք փոխել մեքենան։",
        explanation: "В конструкции 'decidir + infinitivo' (решить сделать что-то) предлоги отсутствуют. Мы обозначаем этот пропуск предлога буквой 'X'."
      },
      {
        id: "13_2",
        text: "El informe está [1|prep (sobre/en)|sobre|con,para,de|Здесь подходит предлог 'sobre' (на столе, поверх стола) или 'en' (на столе).] la mesa. Es importante [2|prep|X|a,de,en,con|После безличных конструкций вроде 'Es importante/Es difícil/Es necesario' инфинитив следует напрямую без предлога.] saberlo.",
        translation: "Զեկույցը սեղանի վրա է։ Կարևոր է դա իմանալ։",
        explanation: "Положение на столе — 'sobre' (или 'en'). Безличная связка 'Es importante + infinitivo' используется без какого-либо связующего предлога (X)."
      },
      {
        id: "13_3",
        text: "[1|prep|Entre|Con,De,Para|'Среди них' -> Entre ellos.] ellos, ¿cuál es el más valiente? ¿El que está [2|prep|a|con,en,por|'Справа от тебя' в пространственной ориентации: a tu derecha.] tu derecha?",
        translation: "Նրանց մեջ ո՞վ է ամենաքաջը։ Նա՞, ով քո աջ կողմում է։",
        explanation: "В значении среди кого-то используется 'Entre'. Направление в пространстве — 'a tu derecha' (справа от тебя)."
      },
      {
        id: "13_4",
        text: "¿Escuchas [1|prep|a|con,de,en|Глагол escuchar требует предлога 'a', когда прямое дополнение является одушевленным лицом (учителем): escuchar a la profesora.] la profesora? Propone [2|prep|X|a,de,con,en|Глагол proponer перед инфинитивом не требует предлогов.] otros ejercicios.",
        translation: "Դու լսո՞ւմ ես ուսուցչուհուն։ Նա առաջարկում է ուրիշ վարժություններ։",
        explanation: "Внимание к человеку (слушать кого-то): 'escuchar a alguien'. Глагол proponer используется без предлогов перед инфинитивом (X)."
      },
      {
        id: "13_5",
        text: "Nos vamos [1|prep|de|con,a,en|Устойчивое выражение ухода развлекаться: irse de fiesta (идти на вечеринку / гулять).] fiesta. ¿Te apetece [2|prep|X|a,de,con,en|Глагол apetecer (хотеться, иметь желание) перед инфинитивом употребляется напрямую без предлога.] tomar algo con nosotros?",
        translation: "Մենք գնում ենք զվարճանալու։ Կուզե՞ս մեզ հետ ինչ-որ բան խմել։",
        explanation: "'Ir de fiesta' — лексический оборот. Перед инфинитивом после 'apetecer' предлоги не нужны (X): '¿Te apetece tomar algo?'."
      },
      {
        id: "13_6",
        text: "Todas las noches sueño [1|prep|con|de,en,para|Глагол soñar управляется предлогом 'con' (видеть сны о ком-то/чем-то) -> soñar con alguien.] ella. No me atrevo [2|prep|a|de,con,en|Глагол atreverse (осмелиться) требует перед инфинитивом предлога a -> atreverse a hacer algo.] decírselo.",
        translation: "Ամեն գիշեր երազում եմ նրա մասին։ Չեմ համարձակվում դա նրան ասել։",
        explanation: "Фиксированное управление: глагол soñar требует предлог 'con'. Глагол atreverse требует предлог 'a' перед последующим действием."
      },
      {
        id: "13_7",
        text: "Siento mucho [1|prep|X|de,a,en,con|Выражение сожаления 'siento mucho + инфинитив' идет напрямую без предлога.] no poder ir [2|prep|a|de,en,con|Направление движения в Прованс: ir a Provenza.] Provenza. Estoy harto [3|prep|de|con,en,por|Устойчивая конструкция пресыщения: estar harto de + инфинитив (устать от чего-то по горло).] trabajar tanto.",
        translation: "Շատ եմ ափսոսում, որ չեմ կարող գնալ Պրովանս։ Հոգնել եմ այդքան աշխատելուց։",
        explanation: "Сожаление 'siento' идет напрямую. Направление движения — 'ir a'. Оборот сильного утомления от процесса — 'estar harto de'."
      },
      {
        id: "13_8",
        text: "[1|prep|Para|Por,Sin,En|'С твоей точки зрения', 'Для тебя' -> Para ti.] ti, no estoy a gusto. ¿Cuándo piensas [2|prep|X|de,a,en,con|Для глагола pensar в значении планирования будущего действия: 'думаешь вернуться' -> pensar regresar, предлог не ставится.] regresar?",
        translation: "Քո կարծիքով՝ ես ինձ հարմար չեմ զգում։ Ե՞րբ ես մտածում վերադառնալ։",
        explanation: "Субъективное суждение 'Для тебя' / 'На твой взгляд' — 'Para ti'. Глагол 'pensar + infinitivo' (планировать намерение) употребляется напрямую без предлога."
      },
      {
        id: "13_9",
        text: "¡Cuidado [1|prep|con|de,en,para|Призыв к осторожности по отношению к предмету: ¡Cuidado con...! (осторожно с чем-то).] esto! Es peligroso.",
        translation: "Զգույշ եղիր սրանից։ Սա վտանգավոր է։",
        explanation: "Идиоматическое выражение предостережения сопровождается предлогом con: '¡Cuidado con это!'."
      },
      {
        id: "13_10",
        text: "[1|prep|A|De,Con,En|Личное местоимение с предлогом для выделения адресата ('мне не страшно'): A mí.] mí, no me da miedo [2|prep|X|de,a,en,con|Фраза 'dar miedo' (пугать) перед инфинитивом употребляется напрямую без предлога.] conducir por el centro.",
        translation: "Ես չեմ վախենում կենտրոնով մեքենա վարել։",
        explanation: "При выделении субъекта احساسات с 'me da miedo' удваиваем 'A mí'. Перед инфинитивом 'conducir' предлог отсутствует (X)."
      }
    ]
  }
];
