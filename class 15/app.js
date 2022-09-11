


// var a = document.getElementsByTagName("h1")

// console.log(a[2].innerHTML)



// var dom = document.childNodes[1].childNodes[1] ;

// console.log(dom.firstChild)




// var dom = document.childNodes[1].childNodes[1] ;

// console.log(dom.firstChild.nextSibling)




// var dom = document.childNodes[1].childNodes[1].childNodes[1] ;

// console.log(dom.previousSibling)



// var dom = document.childNodes[1].childNodes[1].childNodes[1] ;

// console.log(dom.parentNode)




// var dom = document.childNodes[1].childNodes[1].childNodes[1]

// console.log(dom.lastChild.parentNode)

























// STOP WATCH



var hr = 00 ;

var min = 00 ;

var sec = 00 ;

var msec = 00 ;





var hrtag = document.getElementById("hr") ;
var mintag = document.getElementById("min");
var sectag = document.getElementById("sec");
var msectag = document.getElementById("msec");


var Interval;


function timer(){

    msec++

    msectag.innerHTML = msec ;

    if(msec >= 99){

        sec++
        sectag.innerHTML = sec ;

        msec = 00 ;
    }
    else if(sec >= 60){

        min++ 
        
        mintag.innerHTML = min ;
        sec = 00;

    }

    else if(min >= 60){

        hr++

        hrtag.innerHTML = hr ;
        min = 00

    }

}

function start(){

    Interval = setInterval(timer , 10)

    var start = document.getElementById("start")

    start.style.visibility = "hidden"

}


function stop(){

    clearInterval(Interval)

    var start = document.getElementById("start")

    start.style.visibility = "visible"

}

function reset(){

     hr = "00" ;

     min = "00" ;
    
     sec = "00" ;
    
     msec = "00" ;



     msectag.innerHTML = msec ;
     sectag.innerHTML = sec ;
     mintag.innerHTML = min ;
     hrtag.innerHTML = hr ;

     stop()


     var start = document.getElementById("start")

     start.style.visibility = "visible"

}


