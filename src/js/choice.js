document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".start"); // кнопка start
    const questionsBlock = document.querySelector(".questions-block");
    const questionElem = questionsBlock.querySelector(".question");
    const answersBlock = questionsBlock.querySelector(".answers");
    const finalBlock = document.querySelector(".final-block");
    const restartBtn = finalBlock.querySelector(".restart");

    const questions = [
        // Здесь должен быть массив объектов с вопросами
        {
            counter: "1/10",
            title: "Звонок судьбы",
            imgDesktop: "@img/question-1.webp",
            imgMobile: "img/question-1-mobile.webp",
            text: "Твои действия?",
            answers: [
                { text: "Позвонить HR – собеседование ждет, шанс года!", img: "@img/answer-1.webp", type: "rational" },
                { text: "Закрыть телефон – лечу на рыбалку и пусть весь мир подождет!", img: "@img/answer-2.webp", type: "emotional" }
            ]
        },
        // ... добавьте остальные 9 вопросов по аналогии
    ];

    const finalResults = {
        rational: {
            img: "@img/final-image-2.webp",
            title: "Ты — стратег",
            text: "Вы принимаете решения с умом..."
        },
        emotional: {
            img: "@img/final-image-1.webp",
            title: "Ты — охотник за эмоциями",
            text: "Вы живете моментом..."
        }
    };

    let currentQuestion = 0;
    let answersCount = { rational: 0, emotional: 0 };

    function loadQuestion(index) {
        const q = questions[index];
        questionElem.querySelector(".question__counter span").textContent = index + 1;
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
            div.querySelector(".answer__text div").textContent = q.answers[i].text;
        });

        questionsBlock.style.display = "block";
        finalBlock.style.display = "none";
    }

    function showFinal() {
        const resultType = answersCount.rational >= answersCount.emotional ? "rational" : "emotional";
        const result = finalResults[resultType];

        finalBlock.querySelector(".final-block__image img").src = result.img;
        finalBlock.querySelector(".final-block__title div").innerHTML = result.title;
        finalBlock.querySelector(".final-block__text").textContent = result.text;

        questionsBlock.style.display = "none";
        finalBlock.style.display = "block";
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
