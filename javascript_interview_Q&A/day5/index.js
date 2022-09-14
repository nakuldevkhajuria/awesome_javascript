let parent = document.getElementById('text')

document.querySelector('#headingtext').addEventListener('click',() => {
    let child = document.createElement('h1')
    child.innerText = 'MERN STACK';
    parent.appendChild(child);
})

// Question2//we can also use getelementbytagname
let parent2 = document.querySelector('h1');
console.log(parent2);//we can check the text inside h1 tag in console.


// Question3
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();






document.querySelector('#heading').addEventListener('click',() => {
    // let child = document.querySelector('#text')
    let child = document.getElementById('text2')
    child.innerText = 'Welcome to Elevation academy';
    // parent.appendChild(child);
})


$("#heading2").click(function() {
    $("#text3").toggle();
}   
)


let zerones = [0,1,0,1,1,1,1,0]
const zeros = zerones.filter(item => item==0)
const ones = zerones.filter(item => item==1)
document.getElementById('tre').innerText = 'array is ' + zerones
document.getElementById('tree').innerText = 'total zeroes are ' + zeros.length
document.getElementById('trees').innerText = 'total ones are ' + ones.length


// let a = [2,6,8,2,9,2,12]
// let even = a.reduce((acc,curr) =>{return(function(acc,curr){
//     return acc = acc + curr;
// })},0)
// // let odd = a.reduce(item2 => (item2/3)==0)
// console.log(even)
// console.log(odd.length)
let a = [2,6,8,2,9,2,12]

// function someFunction() {
//     return a.reduce(function(sum, record) {
//      return sum = sum + record ;

//     }, 0);
//   }
//   someFunction();
//   console.log(someFunction());

let even = a.filter(item => (item%2)==0)
let odd = a.filter(item => (item%2)!=0)
document.getElementById('comp').innerText  = 'array is ' + a;
document.getElementById('compu').innerText  = 'Total even no are ' + even +  ' = ' + even.length;
document.getElementById('comput').innerText  = 'Total odd no are ' + odd + ' = ' + odd.length;
console.log(even.length);
console.log(odd.length);


// /[aeiou]/ig is a regular expression that will match any vowel. It will match any of a , e , i , o , u , the i flag (/[aeiou]/ig) makes it case-insensitive and the g flag stands for "global" or in other words "don't stop after the first match".
function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}
let rod = countVowel('aeigneodhfaa');
document.getElementById('tren').innerText  =  'String is aeigneodhfaa'
document.getElementById('trend').innerText  =   rod;

let rock ={
    str : 'dfdf',
    arr: [1,4,2,4]
}
let rocke = {
    str : 'dfdf',
    arr: [2,4,2,4]
}
function check(obj1,obj2) {
    let arr1 = obj1.arr;
    let arr2 = obj2.arr;
    if(arr1.length != arr2.length){
        return false;
    }
    for(let i=0;i<=arr1.length;i++){
        if(arr1[i] != arr2[i]){
            return false;
        }

    }
    return true;
}
console.log(check(rock,rocke))