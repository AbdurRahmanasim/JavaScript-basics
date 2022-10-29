var pin = 0000;


var atm_bal = 25000 ;
var card_limit = 15000 ;
var acc_bal = 10000 ;

document.getElementById('atm').innerHTML = atm_bal ;
document.getElementById('card').innerHTML = card_limit ;
document.getElementById('acc').innerHTML = acc_bal ;



function checkPin(){
    
    var val = document.getElementById('val').value ;

if(val.length > 4){
    document.getElementById("message").innerHTML = "Pin is greater than 4"
}
else if(val.length < 4){
    document.getElementById("message").innerHTML = "Pin is less than 4"
}
else if(val == pin){
    document.getElementById("message").innerHTML = "";

    document.getElementById('next').innerHTML = `<form onsubmit="withdraw(); return false">
    <h1>WITHDRAW AMOUNT</h1><br>
    <input type="number" placeholder="ENTER AMOUNT" id="amount">
    <br><br>
    <button>Submit</button>
    <br><br>
    <h4 id="inform"></h4>
</form>`


}
else if(val != pin){
    document.getElementById("message").innerHTML = "Invalid Pin"
}


}


function withdraw(){
    var amount = +document.getElementById('amount').value ;
    console.log(typeof(amount))

    if(amount > atm_bal ){
        document.getElementById('inform').innerHTML = "ATM is out of Cash";
    return;
    }
    else if(amount > card_limit){
        document.getElementById('inform').innerHTML = "Card Limit is 10,000";
    return;
       
    }
    else if(amount > acc_bal){
        document.getElementById('inform').innerHTML = "Account is out of CASH";
    return;
       
    }
    else{
    atm_bal = atm_bal -amount ;
    card_limit = card_limit - amount ;
    acc_bal = acc_bal - amount ;

    document.getElementById('atm').innerHTML = atm_bal ;
document.getElementById('card').innerHTML = card_limit ;
document.getElementById('acc').innerHTML = acc_bal ;

document.getElementById('inform').innerHTML = "SuccessFully WithDrawn";

    }
    
     
}




