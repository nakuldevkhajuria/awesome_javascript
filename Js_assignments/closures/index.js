   
// Question 1
   function counter(){
    var counter = 0;// local variable is initiated value is 0, 

    return function IncreaseCounter() {//increasecounter is a inner function, a closure
        return counter += 1;
    };

   
}

var rounter = counter();// we are assigning the inner functon to counter
//when we assigning, in side the memory stack,, function IncreaseCounter is been
//declared, else nothing is happening in function counter(), while when we are doing
//this counter variable will remember the value of counter inside it. 
//counter = counter()
console.log(rounter());
console.log(rounter());
console.log(rounter());
console.log(rounter());//we are calling the inner function now, which we assigned(rounter)


//Question 2
let count = 0;// count : undefined
(function () {
  if (count === 0) {
    let count = 1; // count : 1 in this scope
    console.log(count); // What is logged?// count = 1
  }
  console.log(count); // What is logged?// count = 0, cause count is not in block scope where its value was changed as 1.
})();// (function(){})() to immediately start any function. and it will call it too

//Question 3
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?The reason for this is that each function executed within the loop will be executed after the entire loop has completed and all will therefore reference the last value stored in i, which was 3.
    //we need to create a unique scope for each iteration.
  }, 1000);
}
//Question 4
// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function function_that_accept_lenght(length) {

  return function(breadth) {

   return length*breadth;  
  } 
 
}

let function_that_accept_breadth = function_that_accept_lenght(2);
let final_result = function_that_accept_breadth(3);
console.log(final_result);


//Question 5
// Take a variable in outer function and create an inner function to increase the counter every time it is called

function function_with_counter() {
  let counter = 2;
  return function() {// cause inner function can use outer parameters and properties
    return counter+=1;
  }
}

let inner = function_with_counter();
console.log(inner());

console.log(inner());
console.log(inner());
console.log(inner());

// Question 6 

// Print Output

var a = 12;
(function () {
  alert(a); //12 Output
})();

//Question 7

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
// x has become the inner function. which gives alert(a)
//output is 12 on alert.

// Question 8
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" + //123 
        "innerArg = " + innerArg + "\n" +//456
        "outerVar = " + outerVar + "\n" +//a
        "innerVar = " + innerVar + "\n" +//b
        "globalVar = " + globalVar);//xyz
    
    })(456);
})(123);
//123 is the parameter and () makes it auto execute. no needto call this function.II
//IIFE IMMEDIATE INVOKING FUNCTION EXPRESSION 
//FUNCTION NAME(PARAMS){}()       -> IIFE