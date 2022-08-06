

// function

// A function is used to do the same thing again and again



// syntax of function

// function funcationName(){


//     console.log("haniya")


// }

// funcationName()
// funcationName()
// funcationName()
// funcationName()




// Function with parameters and arguments



// function intro(fname , lname ){


//     document.write("hello" + " " + fname + " " +  lname + "<br>" )

// }

// intro( "haniya" , "syeda"   )



// intro("Abdur Rahman" , "Asim" )


// intro("Ali" , "Ahmed" )


// we can also make templates using functions



// return keywoed in function




// return is used to take some value from function


// function check( a , b ){


//    var sum = a + b 

//    return(

//     sum


//    )




// }




// var func = check( 5 , 20 )

// console.log(func)




// default values in  function


// function check( fname = "haniya" , lname = "Syeda"  ){



//     console.log( fname , lname)



// }


// check("Abdur Rahman" , "Asim" )




// function check( a = 10 , b = 40 , c , d , e = 50 , f){



//     console.log( a + b + c + d + e + f )


// }

// check( 10 , 40 , 60 , 14 , 13 , 50 )




// default values are the values which we write in parameter not in arguments






// JavaScript String Methods


// 1) length


// var name = "Hello World I am Learning JavaScript"

// var check = name.length ;

// console.log(check)




// 2) toLowerCase()


// var name = "HANIYA"

// var check = name.toLowerCase()

// console.log(check)


// 3) toUpperCase()

// var name = "haniya"

// var check = name.toUpperCase()

// console.log(check)





// 4) includes()


// var name = "I am Learning JavaScript"

 
// var check = name.includes("am")

// console.log(check)


// var name = "I am Learning JavaScript"

 
// var check = name.includes("Am")


// console.log(check)



// 5) startsWith()



// var name = "I am Learning JavaScript"


// var check =  name.startsWith("am")

// console.log(check)



// 6) endsWith()

// var name = "I am Learning JavaScript"


// var check =  name.endsWith("JavaScript")

// console.log(check)


// var name = "I am Learning JavaScript"


// var check =  name.endsWith("t")

// console.log(check)



// 7) search()



// var name = "Haniya"


// var check = name.search("n")

// console.log(check)



// 8) match()



// var str = "i am am learning JavaScript"


// var check = str.match(/am/g)


// console.log(check)


//  var name = "I am Learning JavaScript ,  I am Here , I am studying"

//  var check = name.match(/I/g)

//  console.log(check)



// 9) indexOf()



// var name = "haniya"


// var check = name.indexOf("i")

// console.log(check)


// var name = "Jaffar"


// var check = name.indexOf("f")

// console.log(check)


// 10) lastIndexOf()



// var name = "Hello World"


// var check = name.lastIndexOf("l")

// console.log(check)



// 11) replace()



// var str = "Hello World"

// var check = str.replace("World" , "Haniya" )

// console.log(check)




// var str = "Hello World Hii"

// var check = str.replace("H" , "h" )

// console.log(check)


// var str = "Hello World Hii"

// var check = str.replace( /H/g , "h" )

// console.log(check)



// 12) trim()



// var str = "                        Hello World   "

// alert(str.trim())




// 13)charAt()



// var name = "haniya"

// var check = name.charAt(5)


// console.log(check)



// 14) charCodeAt() ===> ASCII CODE


// var name = "Haniya"

// var check = name.charCodeAt(0)


// console.log(check)



// 15) fromCharCode()



// var check = String.fromCharCode(110)


// console.log(check)


// 16)concat()





// var name1 = "Haniya"
// var name2 = "Syeda"

// var check = name1.concat(name2)

// console.log(check)




















































