
// var box = document.getElementById("box");


// var h2 = document.createElement("h2");

// var txt = document.createTextNode("Haniya")

// h2.appendChild(txt)

// box.appendChild(h2)



// Todo Application 


var list = document.getElementById('list') ;


function addtodo(){

    var todo_item = document.getElementById('todo-item').value ;


    var li = document.createElement('li') ;

    var litext = document.createTextNode(todo_item)

li.appendChild(litext)


var editbtn = document.createElement('button') ;
var edittext = document.createTextNode("EDIT") ;
editbtn.setAttribute("onclick" , 'editItem(this)' ) ;
editbtn.setAttribute("class" , "btn1")
editbtn.appendChild(edittext)  



var delbtn = document.createElement('button') ;
var deltext = document.createTextNode('DELETE');
delbtn.setAttribute("onclick" , "delItem(this)" )
delbtn.appendChild(deltext);

li.appendChild(editbtn)

li.appendChild(delbtn)



list.appendChild(li)


}




function deleteAll(){

list.innerHTML = ""

}



function editItem(e){
    var value = e.parentNode.firstChild.nodeValue ;

    var editedValue =prompt("Enter Your Name" , value)

    e.parentNode.firstChild.nodeValue = editedValue

}


function delItem(e){

    e.parentNode.remove()

}


