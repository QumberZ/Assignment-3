//1) Select the section with an id of container without using querySelector.
//const id = document.getElementById("container")
//console.log(id)
//2) Select the section with an id of container using querySelector.
//let sect = document.querySelector("#container")
//seconsole.log(sect)
//3) Select all of the list items with a class of "second".
//const elements = document.getElementsByClassName('second')
//console.log(elements)
//4) Select a list item with a class of third, but only the list item inside of the ol tag.
 //let ol = document.querySelector("ol .third")
//console.log(ol)
//5) Give the section with an id of container the text "Hello!".
//let sect = document.querySelector("#container")
//sect.innerText = "Hello!"
//console.log(sect)

//6) Add the class main to the div with a class of footer.
//let foot = document.querySelector(".footer")
//foot.classList.add("main")
//console.log(foot)

//7) Remove the class main on the div with a class of footer.
let foot = document.querySelector(".footer")
foot = document.querySelector(".footer")
foot.classList.remove("main")
console.log(foot)


//8) Create a new li element.
//const ElementLi = document.createElement("li")
//console.log(ElementLi)

//9) Give the li the text "four".
//const ElementLi = document.createElement("li")
//ElementLi.innerText = "four"
//console.log(ElementLi)
//10) Append the li to the ul element.
//const ElementLi = document.createElement("li")
//ElementLi.append("ul")
//console.log(ElementLi)
//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
//let loopLi = document.querySelectorAll("ol li")
//for(let i = 0; i < loopLi.length; i++)
//loopLi[i].style.backgroundColor = "green" 
//console.log(loopLi)
//13) Remove the div with a class of footer.
let div = document.querySelector(".footer")
div.remove()
console.log(div)