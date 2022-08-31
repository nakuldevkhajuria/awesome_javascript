
//Question 1
const parent = {
    name : "nakul",
    city : "jaipur",
    

        printDetails: function() {
            console.log(`name is ${this.name} and city is ${this.city}`);
        }
    }


let child = {
    name: "Raju",
    city: "delhi"
    
}


parent.printDetails();


parent.printDetails.call(child)


//Output  name is Raju and city is delhi


//Question 2

child.__proto__ = parent;// these two lines can also inherit the parent methods to child.
child.printDetails()
console.log(child);
console.log(child.__proto__);// this shows the prototype of its parent object.
console.log(child.__proto__.__proto__);// this will show its object constructor
console.log(child.__proto__.__proto__.__proto__);//null
console.log(child.printDetails.__proto__);// this gives function constructor
console.log(child.printDetails.__proto__.__proto__);// object constructor. cause everything in javascript is a object

//Question 3

const sumArray = {
    addElements : function (arr) {
        let sum  = 0;
        for(let i = 0; i < arr.length; i++) {
            sum+= arr[i];
        }
        console.log(sum);
    }
}

Array.__proto__ = sumArray;

//Array is a array constuctor which can be used to create new arrays by only inheriting from the parent.
//like this we can also use function constructor to create new function

arr1 = [1, 2, 3, -1,2, 6, 7, 8];
arr2 = [3, -6, -9];
arr3 = [3, -44, 23, 89, 3, -1];

Array.addElements(arr1); // 28
Array.addElements(arr2); // -12
Array.addElements(arr3); // 73

//Question 4

var keys = [];
var keyss = [];
for (const key in child) // we use "in" to iterate through child using key as variable.
{keys.push(key);}       // but to iterate through a object we use "of"
console.log(keys);

for (const key of Object.keys(child)) {
    console.log(`${key}`);
  }
  // another way using for of, but function is not fethched using it.
//output: ['name1', 'id', 'printDetails']