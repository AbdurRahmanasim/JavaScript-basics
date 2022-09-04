// calculator

// function getNumber(num){

//     var result = document.getElementById("result") 
//     result.value += num

// }

// function clearAll(){

//     var result = document.getElementById("result") 

//     result.value = "0" ;

// }

// function del(){

//     var result = document.getElementById("result")
//     result.value = result.value.slice(0,-1)
// }

// function result(){

//     var result = document.getElementById("result")
//     result.value = eval(result.value)

// }

























// Parking Lot




var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var p3 = document.getElementById('p3')

var parkings = [p1,p2,p3]
console.log(parkings)



function park(){

    var flag = false
    for(var i = 0; i < parkings.length ; i++){

        if(parkings[i].innerHTML === "Available" ){

            var txt  = prompt("Enter Your Car Number")

parkings[i].innerHTML =  txt
parkings[i].style.color = "red"

flag = true

break;

        }

    } 

    if(flag === false){

        alert("No parking Available")
    }


}


function checkout(){
    var carNumber = prompt("Enter Car Number")
    var flag = false
    for(var j = 0 ; j < parkings.length ; j++){

        if(carNumber === parkings[j].innerHTML){

            parkings[j].innerHTML = "Available"
            parkings[j].style.color = "green"
            flag = true
            break;
        }
    }
    if(flag === false){

        alert("No car is Available with this Number")
    }
}









