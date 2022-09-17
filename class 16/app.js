


var quizQuestions = [

    {   question : "What is the capital of pakistan",
        options : [ "Karachi" , "Islamabad" , "Rawalpindi" , "Lahore"],
        answer : "Islamabad"
    } ,

    {   question : "JavaScript is a _____ Language",
        options : [ "Scripting" , "Markup" , "styling" , "semantic"],
        answer : "Scripting"
    } ,
    {   question : "_____ is used to create en object",
        options : [ "{}" , "[]" , "()" , "''"],
        answer : "{}"
    }
   
]



function showques(e){


    let ques = document.getElementById("ques")

    ques.innerHTML = `Q${e+1} )` + " " + quizQuestions[e].question ;

    var options = document.getElementsByClassName('option') ;

    for( var i = 0 ; i < options.length ; i++ ){

        options[i].innerHTML = quizQuestions[e].options[i]


    }

}

var count = 0 ;
var score = 0 ;

function next(){

    var radios = document.getElementsByClassName("radiobtn") ;
   
    calc() 
   
    if( count < quizQuestions.length - 1 ){
     
   
       for(let i = 0 ; i < radios.length ; i++ ){
   
   
           if(radios[i].checked == true ){
   
          count++
          showques(count)
   
          radios[i].checked = false
          
       }    
    }
   
   }
   else{
   
      alert(" score ====> " + score)
   
   }
   }

function calc(){

    var radios = document.getElementsByClassName('radiobtn') ;

    var options = document.getElementsByClassName('option') ;

    for( var i = 0 ; i < radios.length ; i++){

   if(radios[i].checked == true ){

    if(options[i].innerHTML == quizQuestions[count].answer ){

        score++

    }

    
   }

    }





}
























