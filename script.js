var aEL=document.getElementById('a'); 
var bEL=document.getElementById('b');
var cEL=document.getElementById('c');
var dEL=document.getElementById('d');
var timerEL=document.getElementById('timer');
var startbuttonEL=document.getElementById('startbutton');
var questionscontainerEl=document.getElementById('questionscontainer')

startbuttonEL.addEventListener('click', startGame)






var questions = [
    {
    question: 'what does hover do?',
    choices: [
    {datetype: 'flies away', correct: false},
    {datatype: 'nothing', correct: false},
    {datatype: 'provide feedback when hovering with mouse', correct: true},
    {datatype: 'does it matter?', correct: true}
}],

    
    {
    question:  'who invented css', 
    choices: [ 
    {datatype: 'hakon wium lie', correct: true},
    {datatype:'i dont know', correct: false},
    {datatype: 'nicholas cage', correct: false},
    {datatype: 'i dont have an idea', correct: false}
]} 




    {question: 'who invented javascript',
    choices: [
    {datatype: 'mark zuckerberg', correct: false},
    {datatype:'jeff bezos', correct: false},
    {datatype:'brendan eich', correct: true},
    {datatype:'bill gates', correct: false}
    ]}





function startGame () {
    //checking to see if fn works
    console.log('hello')
    startbuttonEL.classList.add('hide')
    questionscontainerEl.classList.remove('hide')
   
    
}



function Answers() {

}
