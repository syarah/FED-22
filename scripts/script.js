// JavaScript Document


// Drop down uitklap 

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


// Menu button sesamOpenDicht

// Menu SesamOpen
var menuOpenButton = document.querySelector("header nav ul li:nth-of-type(1) button:nth-of-type(1)");

menuOpenButton.addEventListener("click", menuSesamOpen);

function menuSesamOpen() {

    var sideNav = document.querySelector("nav:nth-of-type(2)");
    sideNav.classList.add("openNu");
}


//Menu SesamDicht

var menuSluitButton = document.querySelector("nav:nth-of-type(2) button:first-of-type")

menuSluitButton.addEventListener("click", menuSesamSluit);

function menuSesamSluit() {

    var sideNav = document.querySelector("nav:nth-of-type(2)")
    sideNav.classList.remove("openNu")
}