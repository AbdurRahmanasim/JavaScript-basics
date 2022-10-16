let container = document.getElementById("container") ;


const submit = () => {

    let div = document.createElement("div") ;
    div.setAttribute("class" , "box")

    let title = document.getElementById("title").value ;
    let content = document.getElementById("content").value ;

    let h1 = document.createElement("h1") ;
    let h1Text = document.createTextNode(title)
    h1.appendChild(h1Text)

    let p = document.createElement('p') ;
    let pText = document.createTextNode(content) ;
    p.appendChild(pText)

    let editbtn = document.createElement('button') ;
    let editText = document.createTextNode("Edit") ;
    editbtn.appendChild(editText)

    let deletebtn = document.createElement('button') ;
    let deleteText = document.createTextNode("Delete") ;
    deletebtn.appendChild(deleteText)

   div.appendChild(h1)
   div.appendChild(p)
   div.appendChild(editbtn)
   div.appendChild(deletebtn)

   container.appendChild(div)

}