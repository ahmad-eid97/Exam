/* start loading page code */
var loadingPage = document.getElementById("load");
function loading() {
    "use strict";
    loadingPage.style.display = "none";
};
window.onload = loading;
/* end loading page code */
/* start chemistry exam code */
var startExam = document.getElementById("start-chemistry-exam"),
    startExam2 = document.getElementById("start-history-exam"),
    word = document.getElementById("word"),
    verifyPage = document.getElementById("verify");
function startChemistryExam() {
    "use strict";
    verifyPage.style.display = "block";
    goToQuestions.classList.add("chemistry");
    word.innerHTML = "الكيمياء";
};
function startHistoryExam() {
    "use strict";
    verifyPage.style.display = "block";
    goToQuestions.classList.add("history");
    word.innerHTML = "التاريخ";
};
startExam.onclick = startChemistryExam;
startExam2.onclick = startHistoryExam;
// start questions page code */
var questionPage = document.getElementById("chemistry-questions"),
    questionPage2 = document.getElementById("history-questions"),
    goToQuestions = document.getElementById("go-to-questions");
function goToQuestionsButton() {
    "use strict";
    var checkinput = document.getElementsByClassName("checkinput");
    var check = 0;
    Object.values(checkinput).forEach(function (element2) {
        var custom = element2.dataset.input;
        if (element2.value == "") {
            check++;
            document.querySelector("." + custom).style.display = "block";
        }
    })
    if (check == 0) {
        questionPage.style.display = "block";
        if (goToQuestions.classList.value.includes("chemistry")) {
            startExam("chemistry");
        } else if (goToQuestions.classList.value.includes("history")) {
            startExam("history");
        }
        chemTimer();
    }
};
goToQuestions.onclick = goToQuestionsButton;
/* start chemistry question timer */
var chemistryExamTimer = document.getElementById("chemisrty-timer"),
    minutes = 6,
    seconds = 59;
function chemTimer() {
    "use strict";
    var time = setInterval(function () {
        "use strict";
        if (seconds < 0) {
            minutes--;
            seconds = 59;
        } else if (minutes == 0 && seconds == 0) {
            clearInterval(time);
            chemistryExamTimer.textContent = "00 : 00";
            endMYExam();
        }
        if(seconds < 10){
            chemistryExamTimer.textContent = "0" + minutes + " : 0" + seconds;
        } else {
            chemistryExamTimer.textContent = "0" + minutes + " : " + seconds;
        }
        seconds--;
    }, 1000);
    window.time2 = time; // make variable global to use it in another function in line 190
};
/* end chemistry question timer */
/* end questions page code */
/* end chemistry exam code */
var startExam = (testType) => {
    var newArray = [];
    for (var x = 0; x < 15; x++) {
        if(testType == "history") {
            var randomQuestion = Math.floor(Math.random() * questionsH.length);
            var questionsArray = questionsH
        }
        else if(testType == "chemistry") {
            var randomQuestion = Math.floor(Math.random() * questionsC.length);            
            var questionsArray = questionsC
        }
        var dublicated = 0; // zero means false & 1 means true...
        newArray.forEach(item => {
            if (item.q === questionsArray[randomQuestion].q) {
                dublicated++;
            }
        })
        dublicated ? x-- : newArray.push(questionsArray[randomQuestion]);
        // condition ? true excuted : false excuted  => smart if condition
    }
   for (var i = 0; i < newArray.length; i++) {
     var q1 = newArray[i];
        document.querySelector(".q" + i).innerHTML = q1.q // for question element in html
        document.querySelector(".q"+ i +"ans0").innerHTML = q1.answers[0]
        document.querySelector(".q"+ i +"ans1").innerHTML = q1.answers[1]
        document.querySelector(".q"+ i +"ans2").innerHTML = q1.answers[2]
        document.querySelector(".q"+ i +"ans3").innerHTML = q1.answers[3]
        document.querySelector(".q"+ i +"ans" + q1.correct).classList.add("correct")
    }
}
var endExam = document.getElementById("end-chemistry-exam");
var goodResult = document.getElementById("good-result");
var badResult = document.getElementById("bad-result");
var examGrade = 0;
endExam.onclick = function () {
    "use strict";
    // null = empty
    // if variable is empty or not found will return null
    // that what null means
    var answer1 = document.querySelector("input[name='c1']:checked") !== null ? document.querySelector("input[name='c1']:checked").nextElementSibling : document.querySelector(".ques1");
    // ببساطة كدة .. احنا بنقلة شوف العنصر الانبوت اللى معمول علية تشيكد يعني الاجابة بتاعتك .. لو نل يعني انت ما جاوبتش اصلا و لو مش نل يبقى خلي قيمة الفاريبل هيا قيمة الاسبان اللى جمب الانبوت .. اما لو نل اللى هيا ماجاوبتش اصلا يبقى قيمة الفاريبل تساوي قيمة العنصر الاب السؤال نفسة
    var answer2 = document.querySelector("input[name='c2']:checked") !== null ? document.querySelector("input[name='c2']:checked").nextElementSibling : document.querySelector(".ques2");
    var answer3 = document.querySelector("input[name='c3']:checked") !== null ? document.querySelector("input[name='c3']:checked").nextElementSibling : document.querySelector(".ques3");
    var answer4 = document.querySelector("input[name='c4']:checked") !== null ? document.querySelector("input[name='c4']:checked").nextElementSibling : document.querySelector(".ques4");
    var answer5 = document.querySelector("input[name='c5']:checked") !== null ? document.querySelector("input[name='c5']:checked").nextElementSibling : document.querySelector(".ques5");
    var answer6 = document.querySelector("input[name='c6']:checked") !== null ? document.querySelector("input[name='c6']:checked").nextElementSibling : document.querySelector(".ques6");
    var answer7 = document.querySelector("input[name='c7']:checked") !== null ? document.querySelector("input[name='c7']:checked").nextElementSibling : document.querySelector(".ques7");
    var answer8 = document.querySelector("input[name='c8']:checked") !== null ? document.querySelector("input[name='c8']:checked").nextElementSibling : document.querySelector(".ques8");
    var answer9 = document.querySelector("input[name='c9']:checked") !== null ? document.querySelector("input[name='c9']:checked").nextElementSibling : document.querySelector(".ques9");
    var answer10 = document.querySelector("input[name='c10']:checked") !== null ? document.querySelector("input[name='c10']:checked").nextElementSibling : document.querySelector(".ques10");
    var answer11 = document.querySelector("input[name='c11']:checked") !== null ? document.querySelector("input[name='c11']:checked").nextElementSibling : document.querySelector(".ques11");
    var answer12 = document.querySelector("input[name='c12']:checked") !== null ? document.querySelector("input[name='c12']:checked").nextElementSibling : document.querySelector(".ques12");;
    var answer13 = document.querySelector("input[name='c13']:checked") !== null ? document.querySelector("input[name='c13']:checked").nextElementSibling : document.querySelector(".ques13");
    var answer14 = document.querySelector("input[name='c14']:checked") !== null ? document.querySelector("input[name='c14']:checked").nextElementSibling : document.querySelector(".ques14");
    var answer15 = document.querySelector("input[name='c15']:checked") !== null ? document.querySelector("input[name='c15']:checked").nextElementSibling : document.querySelector(".ques15");
    var arrayAnswer = [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12, answer13, answer14, answer15];
    window.arrayAnswer2 = arrayAnswer; // define the variable globally to use it in another function...
    arrayAnswer.forEach(answer => {
        if (!answer.classList.value.includes("question") && answer.classList.value.includes("correct")) {
            examGrade += 1;
        } // دي معناها ايه .. دي بنعمل بيها تشيك هل قيمة الفاريبل تساوي الانبوت او قيمة الفاريبل تساوي الديف الاب يعني بنشوف لو انت مجاوب يبقى نفذ الاف كونديشن دة اما لو مش مجاوب معناها قيمة الفاريبل الانسر دة هيا الديف مش الانبوت ف بنشوف الانسر دة عندة كلاس كويسشن ولا لا عشان نعرف منها هو الديف ولا الانبوت
    })
    if (examGrade > 7) {
        var yourGrade = document.getElementById("your-grade");
        var youNameInExam = document.getElementById("your-name");
        goodResult.style.display = "block";
    } else {
        var yourGrade = document.getElementById("your-grade2"); // redeclare the variable to not repeat your self again...
        var youNameInExam = document.getElementById("your-name2"); // redeclare the variable to not repeat your self again...
        badResult.style.display = "block";
    }
    yourGrade.innerHTML = examGrade;
    youNameInExam.innerHTML = yourName.value;
};
/* start input fields rules */
var yourName = document.getElementById("type-your-name");
var yourAge = document.getElementById("type-your-age");
var checkinput = document.getElementsByClassName("checkinput");
Object.values(checkinput).forEach(function (element) {
    element.onblur = function () {
        var custom = element.dataset.input;
        if (element.value == "") {
            document.querySelector("." + custom).style.display = "block";
        }
    }
})
/* end input fields rules */
/* start end exam button code */
var endChemistryExam = document.getElementById("end-chemistry-exam");
var endHistoryExam = document.getElementById("end-history-exam");
/* end end exam button code */
/* start knowing your faults function */
var tryAgain = document.getElementById("try-again2");
tryAgain.onclick = function () {
    location.reload(false);
}
var knowFaults = document.getElementsByClassName("know-your-faults");
Object.values(knowFaults).forEach((element) => {
    element.onclick = function knowYourFaults() {
        badResult.style.display = "none";
        goodResult.style.display = "none";
        questionPage.style.display = "block";
        var time;
        time = time2;
        clearInterval(time);
        var arrayAnswer; // define a variable..
        arrayAnswer = arrayAnswer2; // equal this variable to the variable that we made global...
        arrayAnswer.forEach(answer => {
            if (!answer.classList.value.includes("question") && answer.classList.value.includes("correct")) { // ده معناه ان الاجابه صح 
                answer.parentElement.style.backgroundColor = "green";
                answer.parentElement.style.color= "#fff";
                answer.parentElement.parentElement.parentElement.style.borderRadius = "10px";
            } else if (!answer.classList.value.includes("question")) { // وده معناه ان انت جاوبت اجابه غلط فيجيبلك الاب ؟ معناها مجاوب والاجابة غلط  ف هو كدة يعملك علامة على الديف الاب و كمان يجبلك علامة حمرا على الاجابة
                answer.parentElement.style.backgroundColor = "red";
                answer.parentElement.style.color = "#fff";
                answer.parentElement.parentElement.parentElement.style.borderRadius = "10px";
                Object.values(answer.parentElement.parentElement.parentElement.children[1].children).forEach(div => {
                    if(div.children[1].classList.value.includes("correct")) {
                        div.children[1].parentElement.style.backgroundColor = "green";
                        div.children[1].parentElement.style.color = "#fff";
                    }
                })
            } else {
                answer.style.border = "2px solid red";
                answer.style.borderRadius = "10px";
                Object.values(answer.children[1].children).forEach(div => {
                    if(div.children[1].classList.value.includes("correct")) {
                        div.children[1].parentElement.style.backgroundColor = "green";
                        div.children[1].parentElement.style.color = "#fff";
                    }
                })
            }
        })
        var endChemistryExam = document.getElementById("end-chemistry-exam");
        var endHistoryExam = document.getElementById("end-history-exam");
        endChemistryExam.setAttribute("disabled", "");
        endHistoryExam.setAttribute("disabled", "");
    }
});
/* end knowing your faults function */