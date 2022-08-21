var questionEl = document.getElementById('question'); 
var currentquestion= 0; //counter for the question. keeps track of where we are in the "questions"array. 
var aEL=document.getElementById('a'); 
var bEL=document.getElementById('b');
var cEL=document.getElementById('c');
var dEL=document.getElementById('d');
var timerEL=document.getElementById('timer');
var startbuttonEL=document.getElementById('startbutton');
var questionscontainerEl=document.getElementById('questionscontainer');
var answerbuttonsEl=document.getElementById("answerbuttons");




var questions = [//array of questions with answer choices. Put questions and answer choices in an array so we can use a "for loop"
    {//everyting between each set of curly brackets is one object. "question, answerchoices, and correctanswer" 
    //are properties of that object. 
        question:"whats java script", 
        answerchoices: [
            "internet language", 
            "rocket science", 
            "java", 
            "i dont know"
        ], 
        correctanswer: "a"
        
    }, 
    {
        question:"whats css", 
        answerchoices: [
            "internet language", 
            "making html pretty", 
            "java", 
            "i dont know"
        ], 
        correctanswer: "b"
    }, 
    {
        question:"whats my name?", 
        answerchoices: [
            "internet language", 
            "rocket science", 
            "daniel", 
            "i dont know"
        ], 
        correctanswer:"c"
    }

    
]








function startGame () {
    //checking to see if fn works
  
    startbuttonEL.classList.add('hide')
    
    questionscontainerEl.classList.remove('hide')

    answerbuttonsEl.classList.remove('hide')

    
   displayquestions (); 
    
}


//function for displaying questions
function displayquestions () {
    //references actual question not just order of question.
    var activequestion= questions[currentquestion] //this will cycle through actual questions array and their positions using the "currentquestion" indez value
    //for (currentquestion=0; currentquestion < currentquestion.lenght; currentquestion ++)
    console.log(activequestion, "active question")
    console.log(questions[currentquestion], "current question")
    console.log(questions[currentquestion].question)
    questionscontainerEl.textContent=activequestion.question


  
}




startbuttonEL.addEventListener('click', startGame)