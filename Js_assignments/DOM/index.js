const element1 = document.getElementById("text");
element1.style.color = "red";

const element2 = document.getElementsByTagName("h1");
element2[0].style.color = "red";


const e3 =  document.getElementsByClassName("box");
// console.log(e3[0].innerText);
// e3[0].style.color = "orange";//doubt

console.log(element2);
const changeMe = function(){
    const element4 = document.getElementsByClassName("change")
    element4[0].innerHTML = "Hello World";
    element4[0].style.color = "orange"

}

const changeDirection = function(){
    const element4 = document.getElementsByClassName("book");
    element4[0].style.flexDirection = "column";
}

const changeColor = function(){
    const element5 = document.getElementById("heading")
    element5.style.color = "red";
}
const replaceText = function(){
    const element6 = document.getElementsByClassName("inner")
    element6[0].innerHTML = "Welcome to Elevation academy"
}

function displayClock() {
    let time = new Date();
    let hrs = time.getHours();
    let mins =time.getMinutes();
    let sec  = time.getSeconds();

    // const element7 = document.getElementsByClassName("clock")
    // element7.innerHTML = `${hrs} : ${mins} : ${sec} `;
    document.getElementById("clock").innerHTML =
    `${hrs} : ${mins} : ${sec} `;
}
setInterval(displayClock,1000 );

function printvalue() {
    const year = document.getElementById("drop").value
    document.getElementById("print").innerHTML="Current Year is " + year;
}
function emailCheck() {
    let a = document.getElementById("email").value;
    if (a.endsWith("prepbytes@gmail.com")) {
        let b = document.getElementById("emailcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("emailcheck");
        b.style.display = "none";
    }
}

function numberCheck() {
    let a = document.getElementById("phoneno").value;
    if (!a.startsWith("91")) {
        let b = document.getElementById("startcheck");
        b.style.display = "inline";

    } else {
        let b = document.getElementById("startcheck");
        b.style.display = "none";
    }
    if (a.length == 10) {
        let b = document.getElementById("digitcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("digitcheck");
        b.style.display = "none";
    }
}

function bYearCheck() {
    let a = document.getElementById("byear").value;
    if (a > 1995) {
        let b = document.getElementById("byearcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("byearcheck");
        b.style.display = "none";
    }
}