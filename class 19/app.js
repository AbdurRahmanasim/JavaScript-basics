function signup(){

    var email = document.getElementById("email").value ;
    var password = document.getElementById("password").value ;

    var signupdata = {
      email : email ,
      password : password
    }

    var data = JSON.parse(localStorage.getItem("signupdata")) ;

    if(!data){

        localStorage.setItem("signupdata" , JSON.stringify([signupdata]))

        window.location.assign('login.html')

    }else{
        var updatedData = [ ...data , signupdata ] ;
        localStorage.setItem("signupdata" ,JSON.stringify(updatedData) )
        window.location.assign('login.html')
    }
    document.getElementById("email").value = "" ;
    document.getElementById("password").value = "" ;

}

function login(){

    var email = document.getElementById("email1").value ;
    var password = document.getElementById("password1").value ;

    var oldData = JSON.parse(localStorage.getItem("signupdata")) ;

    // console.log(oldData)
var flag = false ;
    for(var i = 0 ; i < oldData.length ; i++){

        if(email == oldData[i].email && password == oldData[i].password){
            flag = true
            window.location.assign("home.html")
        }
    }
    if(flag == false){

        alert("SignUp First")

    }



}