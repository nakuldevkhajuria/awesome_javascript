1. Find the Prdoucts:

const Find_Prod = (array, N) => 
{
    //   let count = 1;
    // for(let i=0;i<N;i++){
    //   count = count * array[i];
    // }return count;
    let list1 = [];
   list1 = array.reduce((acc, curr) => acc*curr,1);
// console.log(list1);
return list1;
};
2. Find the Sum


 

const Find_Sum = (array, N) => 
{
  return (
    array.reduce(
      (acc,curr) => acc = acc + curr, 0
      )
    );

};
 


3.

const findCount = (N, K, Arr) => 
{
  let count = 0;
    for(let i =0; i<N; i++){
      if(K == Arr[i]){
        count++;
      }
    }return count;
};
 

4. 

const findEvenOdd = (N, Arr) => 
{
  let B = [0,0];
  // const B[0] , B[1];
  for(let i = 0; i< N;i++){
      if(Arr[i]%2 == 0){
        B[0] = B[0] + Arr[i];
      }
      else{
        B[1] = B[1] + Arr[i];
      }
    }return B;
};
 
5.

const Find_Num = (array,N,M) => 
{
  
  
  if(array.includes(M)){
    return "YES";
  }
  else{
    return "NO";
  }
  
  
};
 

6. 

const highAge = (N, Arr) => 
{
  return (
    Arr.filter(
      (item, index) =>
        item >=18
      )
    );
};
 

7. 

const Inc_Arr = (array,N) => 
{
  
array = array.map(item => item+1);


// for(let i =0;i<N; i++){
  
//   array [i] = array[i]+1;
// }
let a = array.join(' '); 
console.log(a)
};

 

8. 

const isAllPass = (N, Arr) => 
{
    let resultStu = Arr.every(result);
    // using array.every. if atleast one conditon becomes false whole
    //asnwer becomes false. to become true. every condition has to
    // be true for that
    function result(arr1){
      return arr1 >= 32;
    }
    if(resultStu) return 'YES';
    else return 'NO';
    
};
 

9. 
function Unique_Shirts (arr,N) {

    let a = arr, count = 0, repeat = 0;
    let first = true;
    a.sort();
    
    for(let i = 1; i < N; i++) {
      if(a[i] === a[i - 1]) {
        count++;
        if(first) {
          count++;
          first = false;
        }
      }
      
      else{
          first = true;
        }
      
    }
      return arr.length - count;
    }

10.
 
function arrayMin(arr) {
 

     return (arr.reduce(
       (acc,curr) => {
         return (acc > curr ? curr:acc);//doubt is value assigning to curr if its true.turnery operator
       }
       ));
    
 }

function arrayMax(arr) {
 

     return( arr.reduce(
        (acc, curr) => {
             return (acc < curr ? curr:acc);
        }
    ));

    
 }



11.
function Birthday_Game(arr,D ,M) {
    let count = 0;
    
    if (M > arr.length) {
      return 0;
    }
    for(let i = M-1; i < arr.length; i++) {
      let sum = 0
      for(let j = i; j >= i-M+1; j--) {
        sum += arr[j]
      }
      if(sum === D) {
        count++;
      }
    }
     return count;
   }