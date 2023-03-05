var wrapp = document.querySelector('.text');

//var text = "JovanaStill"
//
//function typing() {
//    var textArray = text.split("");
//    var loop = setInterval(function () {
//        if(textArray.length !== 0){
//            wrapp.innerHTML += textArray.shift();
//        }else{
//            clearInterval(loop);
//        }
//    },450)
//}
//typing();

//OVO IZNAD JE CODE ZA PISANJE SLOVO PO SLOVO RECENICE



var questions = [
    {
        text: "Da li ovo radi?",
        correctAnswer: true,
    },
        
    {
        text: "Je li sigurno radi?",
        correctAnswer: true,
    },
        
    {
        text: "Da li 100% radi?",
        correctAnswer: true,
    }
];

var questionIndex = 0;
var userScore = 0;

function askQuestion() {
    var userAnswer = confirm(questions[questionIndex].text);
    if(questions[questionIndex].correctAnswer === userAnswer){
        userScore++;
    }
    questionIndex++;
    if(questionIndex !== questions.length){
        askQuestion();
    }
   
}

//askQue;stion();
////console.log(userScore);
//alert("You answered on "+userScore + " of "+questions.length)

//let prvaStranica = document.querySelector('[href="prva-stranica"]');
//let drugaStranica = document.querySelector('[href="druga-stranica"]');
let allLinks = document.querySelectorAll('.nav-link');
let prva = document.querySelector('#prva');
let druga = document.querySelector('#druga');
let views = document.querySelectorAll('.view');



//drugaStranica.addEventListener('click',function(e){
//    e.preventDefault();
//    druga.style.display = "block";
//    prva.style.display = "none";
//})
//prvaStranica.addEventListener('click',function(e){
//    e.preventDefault();
//    druga.style.display = "none";
//    prva.style.display = "block";
//})

for(let i =0; i < allLinks.length; i++){
    allLinks[i].addEventListener('click',showView);
    this.addClass = "active";
}

function showView(e){
   e.preventDefault();
   for(let i = 0; i < views.length; i++){
    views[i].style.display = "none";
} 
    let id = `#${this.getAttribute("href")}`;
    document.querySelector(id).style.display = "block";
    id.addClass = "active";
};


//var img = document.querySelector('img');
//var counter = 4;
//var loop = setInterval(function () {
//    counter++;
//    (counter === 7) ? counter = 1 : counter = counter;
//    img.setAttribute('src','images/imgs'+counter+'.jpg');
//},2000)



const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add("active");
    });
});

const removeActiveClass = function () {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}