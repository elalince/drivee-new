document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".start"); // кнопка Start
    const questionsBlock = document.querySelector(".questions-block");
    const questionElem = questionsBlock.querySelector(".question");
    const answersBlock = questionsBlock.querySelector(".answers");
    const finalBlock = document.querySelector(".final-block");
    const restartBtn = finalBlock.querySelector(".restart");

    let currentQuestion = 0;
    let answersCount = { rational: 0, emotional: 0 };

    const questions = [
        {
            counter: "1/10",
            title: "Звонок судьбы",
            imgDesktop: "img/question-1.webp",
            imgMobile: "img/question-1-mobile.webp",
            text: "Твои действия?",
            answers: [
                { text: "Позвонить HR – собеседование ждет, шанс года!", img: "img/answer-1.webp", type: "rational" },
                { text: "Закрыть телефон – лечу на рыбалку и пусть весь мир подождет!", img: "img/answer-2.webp", type: "emotional" }
            ]
        },
        // Добавляем остальные вопросы аналогично
        {
            counter: "2/10",
            title: "Выбор коня",
            imgDesktop: "img/question-1.webp",
            imgMobile: "img/question-1-mobile.webp",
            text: "Твои действия?",
            answers: [
                { text: "Седан бизнес-класса: кондиционер, кожа, много места для заднего пассажира. Прямо маленький офис класса А на колесах.", img: "img/answer-1.webp", type: "rational" },
                { text: "Кабриолет с харизмой и ветром в волосах. Можно постоять в пробке как настоящая суперзвезда.", img: "img/answer-2.webp", type: "emotional" }
            ]
        },
        {
            counter: "3/10",
            title: "Час до встречи",
            imgDesktop: "img/question-1.webp",
            imgMobile: "img/question-1-mobile.webp",
            text: "Твои действия?",
            answers: [
                { text: "Вызываю такси – по пути можно еще раз повторить свою блестящую речь.", img: "img/answer-1.webp", type: "rational" },
                { text: "Еду на своей машине –  еду в своем ритме, чувствую драйв от вождения и сам отвечаю за свое время.", img: "img/answer-2.webp", type: "emotional" }
            ]
        },
        {
            counter: "4/10",
            title: "На свидание",
            imgDesktop: "img/question-1.webp",
            imgMobile: "img/question-1-mobile.webp",
            text: "Твои действия?",
            answers: [
                { text: "На своей машине – можно все контролировать и заодно показать свои навыки вождения в час пик в пробке.", img: "img/answer-1.webp", type: "rational" },
                { text: "На такси  – можно расслабиться и не думать о парковке, к тому же неизвестно, где вас застанет ночь.", img: "img/answer-2.webp", type: "emotional" }
            ]
        },
        {
            counter: "5/10",
            title: "Важные документы",
            imgDesktop: "img/question-1.webp",
            imgMobile: "img/question-1-mobile.webp",
            text: "Твои действия?",
            answers: [
                { text: "Отправить курьерской доставкой <a href='https://drivee.onelink.me/MfzP/y2op2jyu'>Drivee</a>. В приложении сервиса выбираем «Курьер», договариваемся с исполнителем о стоимости и делегируем эту задачу профессионалам.", img: "img/answer-1.webp", type: "rational" },
                { text: "ЗОтвезти лично на своем автомобиле – заодно можно подключиться к Bluetooth и по пути врубить плейлист с любимыми треками.", img: "img/answer-2.webp", type: "emotional" }
            ]
        },
        {
            counter: "6/10",
            title: "Назначьте свою цену",
            imgDesktop: "img/question-1.webp",
            imgMobile: "img/question-1-mobile.webp",
            text: "Твои действия?",
            answers: [
                { text: "Зачем платить больше? Предложу рекомендуемую стоимость (ее можно увидеть в приложении Drivee) и попробую договориться с водителями на эту цену.", img: "img/answer-1.webp", type: "rational" },
                { text: "В час пик водители и так нарасхват. Не люблю ждать, поэтому дам побольше, чтобы побыстрее уехать.", img: "img/answer-2.webp", type: "emotional" }
            ]
        },
        {
            counter: "7/10",
            title: "ЗВодитель на выбор",
            imgDesktop: "img/question-1.webp",
            imgMobile: "img/question-1-mobile.webp",
            text: "Твои действия?",
            answers: [
                { text: "Тихий профессионал –  едет, как тень. Ни слова. Можно работать, думать о вечном или просто беззастенчиво читать Maximonline.ru до полного разряда батареи.", img: "img/answer-1.webp", type: "rational" },
                { text: "Веселый собеседник – будет рассказывать истории так, что полчаса в дороге пролетят, как одна минута, а ты уже знаешь, как он встретил жену и где самые вкусные чебуреки в городе.", img: "img/answer-2.webp", type: "emotional" }
            ]
        },
        {
            counter: "8/10",
            title: "Ливень стеной",
            imgDesktop: "img/question-1.webp",
            imgMobile: "img/question-1-mobile.webp",
            text: "Твои действия?",
            answers: [
                { text: "Машина с подогревом сидений – садишься, и через минуту чувствуешь себя котом, который нашел теплую батарею.", img: "img/answer-1.webp", type: "rational" },
                { text: "Развернусь и пойду домой. Закажу доставку и буду смотреть новый сериал. А дела подождут до завтра.", img: "img/answer-2.webp", type: "emotional" }
            ]
        },
        {
            counter: "9/10",
            title: "Аэропорт",
            imgDesktop: "img/question-1.webp",
            imgMobile: "img/question-1-mobile.webp",
            text: "Твои действия?",
            answers: [
                { text: "Универсал – все поместится, и не придется держать чемодан  на коленях.", img: "img/answer-1.webp", type: "rational" },
                { text: "Премиум-седан – дорога домой превращается в маленький роскошный вояж, где единственное, чего не хватает – бокала шампанского.", img: "img/answer-2.webp", type: "emotional" }
            ]
        },
        {
            counter: "10/10",
            title: "Путешествие между городами",
            imgDesktop: "img/question-1.webp",
            imgMobile: "img/question-1-mobile.webp",
            text: "Твои действия?",
            answers: [
                { text: "По классике поеду поездом –  сел, открыл ноутбук, через несколько часов уже пьешь кофе в другом городе. Практично, надежно, без пробок.", img: "img/answer-1.webp", type: "rational" },
                { text: "Междугороднее такси. Настоящее приключение в стиле роад-муви: можно поиграть в водителем в города, остановиться выпить кофе на заправке и ни о чем не думать и смотреть в окно, пока дорога не приведет в пункт назначение.", img: "img/answer-2.webp", type: "emotional" }
            ]
        },

    ];

    const finalResults = {
        rational: {
            img: "img/final-image-1.webp",
            title: "Рационалист",
            text: "Вы выбираете просто и с умом. Для вас важнее всего, чтобы было быстро, функционально и без лишних затрат. Вы привыкли полагаться на собственную логику, поэтому для вас сервис <a href='https://drivee.onelink.me/MfzP/y2op2jyu'>Drivee</a> подходит идеально. Здесь можно выбирать с кем ехать и за какую стоимость. Вместо бездушного алгоритма только вы решаете, сколько платить за поездку.",
            drivee: "<a href='https://drivee.onelink.me/MfzP/y2op2jyu'>Drivee</a> надежный сервис с четким маршрутом и водителем, который привезет вас точно к цели, без лишних спецэффектов."
        },
        emotional: {
            img: "img/final-image-1.webp",
            title: "Охотник за эмоциями",
            text: "Вы живете моментом. Для вас поездка – это часть приключения: кабриолет с ветром в волосах, неоновые огни, спонтанные маршруты. Выбирайте пункт назначения, ставьте свою цену и вперед на поиски приключений. Тут можно договориться с водителем даже о поездке в другой город — эмоций хватит надолго. Главное, не забудьте указать свои пожелания в комментариях при заказе такси и получите именно то, что нужно вам.",
            drivee: "С <a href='https://drivee.onelink.me/MfzP/y2op2jyu'>Drivee</a> путешествовать и передвигаться по городу становится очень легко, так как цену за поездку устанавливаете вы, а не алгоритмы."
        }
    };

    function setDisplay(element, type) {
        if (window.innerWidth <= 425) { // мобильная версия
            element.style.display = type === "grid" ? "flex" : type;
        } else { // десктоп
            element.style.display = type;
        }
    }

    function loadQuestion(index) {
        const q = questions[index];
        questionElem.querySelector(".question__counter").textContent = q.counter;
        questionElem.querySelector(".question__title").textContent = q.title;
        questionElem.querySelector(".question__text").textContent = q.text;

        const picture = questionElem.querySelector("picture");
        picture.querySelector("source").srcset = q.imgMobile;
        picture.querySelector("img").src = q.imgDesktop;
        picture.querySelector("img").alt = q.title;
        picture.querySelector("img").title = q.title;

        const answerDivs = answersBlock.querySelectorAll(".answer");
        answerDivs.forEach((div, i) => {
            div.dataset.answer = q.answers[i].type;
            div.querySelector("img").src = q.answers[i].img;
            div.querySelector(".answer__text div").innerHTML = q.answers[i].text;
        });

        setDisplay(questionsBlock, "block");
        setDisplay(finalBlock, "none");

        questionsBlock.scrollIntoView({ behavior: "smooth", block: "start" });
    }


    function showFinal() {
        const resultType = answersCount.rational >= answersCount.emotional ? "rational" : "emotional";
        const result = finalResults[resultType];

        finalBlock.querySelector(".final-block__image img").src = result.img;
        finalBlock.querySelector(".final-block__title div").innerHTML = result.title;
        finalBlock.querySelector(".final-block__text").innerHTML = result.text;
        finalBlock.querySelector(".drivee__text").innerHTML = result.drivee;

        setDisplay(questionsBlock, "none");
        setDisplay(finalBlock, "grid");
    }


    startBtn.addEventListener("click", () => {
        currentQuestion = 0;
        answersCount = { rational: 0, emotional: 0 };
        loadQuestion(currentQuestion);
    });

    answersBlock.addEventListener("click", (e) => {
        const answerDiv = e.target.closest(".answer");
        if (!answerDiv) return;

        const answerType = answerDiv.dataset.answer;
        answersCount[answerType]++;

        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion(currentQuestion);
        } else {
            showFinal();
        }
    });

    restartBtn.addEventListener("click", () => {
        currentQuestion = 0;
        answersCount = { rational: 0, emotional: 0 };
        loadQuestion(currentQuestion);
    });
});
