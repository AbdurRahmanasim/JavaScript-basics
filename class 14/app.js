// setInterval



// var print = "Hello World"


// console.log(print)


// Syntax of setInterval


// setInterval( function , time in millisecond )

// 1 second = 1000milliseconds



// var a = 1

// function print(){

    

//     a = a + 1


//     console.log(a)

// }


// setInterval( print , 2000 )







// var a = 0
// var box = document.getElementById("boxes")

// function move(){

//     a = a + 50

//     if(a >= 200){

//         clearInterval(interval)
    
//      }else{
         
//          box.style.marginLeft = a + "px" ;
//      }


// }


//  var interval =  setInterval( move , 1000 ) ;





// digital clock 



// function displayTime(){


//     var time = new Date() ;

//     var hrs = time.getHours();
//     var min = time.getMinutes();
//     var sec = time.getSeconds();



//     var session = document.getElementById("session") ;


//     if( hrs >= 12 ){


//         session.innerHTML = 'PM'
//     }
//     else{
//         session.innerHTML = 'AM'
//     }



//     if(hrs >= 12){

//         hrs = hrs - 12

//     }


//     document.getElementById("hrs").innerHTML = hrs ;
//     document.getElementById("mins").innerHTML = min ;
//     document.getElementById("sec").innerHTML = sec ;

// }

// setInterval( displayTime , 10)






// set Time Out 



var num = "Hello World" ;




function timeOut(){


    console.log(num)

}



var timeout = setTimeout( timeOut , 5000 )





function stop(){

    clearTimeout(timeout)
}