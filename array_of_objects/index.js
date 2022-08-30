let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'Yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

          //Question 1
let names = studentRecords.map(item => item.name.toUpperCase());
//item is the objects inside the array,
console.log(names);
//Question 2
let marks = studentRecords.filter(item => item.marks>50)
console.log(marks);
//Question 3
let mark = studentRecords.filter(item => item.marks>50 && item.id>120)
console.log(mark);
//Question 4 
let total = studentRecords.reduce((acc,curr) => acc= acc+curr.marks,0 )
console.log(total);
//Question 5
let score = studentRecords.filter(item =>item.marks>50  )
let scores = score.map(item => item.name)
console.log(scores); 
//Question 6
let add = studentRecords.filter(item => item.id >120)
let adds= add.reduce((acc,curr) => acc = acc + curr.marks,0)
console.log(adds);
//Question 7



    for(let i of studentRecords){
        if(i.marks<50){ 
            i.marks = i.marks + 15;
        }
    }
    let arr5 = studentRecords.filter(x => x.marks > 50)
    console.log(arr5);




// Question 8
let studentRecord = [
    {name:"nakul",class:"4th" , rollno:"1"},
    {name:"nakul",class:"4th" , rollno:"1"},
    {name:"nakul",class:"4th" , rollno:"1"},
    {name:"nakul",class:"4th" , rollno:"1"},
    {name:"nakul",class:"4th" , rollno:"1"},
    {name:"nakul",class:"4th" , rollno:"1"}
]; 
console.log(studentRecord);