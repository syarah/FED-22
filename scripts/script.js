// JavaScript Document

var deButton = document.querySelector("footer section:nth-of-type(1) button:nth-of-type(1)");
var deUl = document.querySelector("footer section:nth-of-type(1) ul")

deButton.addEventListener("click", toggleLijstje);

function toggleLijstje(){ 
    
    deUl.classList.toggle("open");

}

// kan ook volgens jeffrey // arrow function / errow operator
// deButton.addEventListener("click", () =>{
//     deSection.classList.toggle("open");
// })