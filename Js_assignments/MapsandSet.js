1. 

function strRemove(a){
  let arrB = a.split('');
  let arrC = [];
  arrC = arrB.filter( (item, index) => arrB.indexOf(item)== index ) ;
  arrFinal = arrC.join('');
  console.log(arrFinal);
  // const 
}
strRemove('asasfg');

2.


function strCounts (value){
  let arrA = value.split("");
  console.log(arrA)
  // let arrC = [0];
  let arrC = arrA.filter( (item, index) => arrA.indexOf(item) == index ) ;
  //aarC array has duplicate removed array
  
   console.log(arrC)
   let lenC = arrC.length;
  for(let i =0;i<lenC;i++){
     let count = 0;
     let lenA = arrA.length;
     
  for(let j=0;j<=lenA;j++){
    if(arrC[i] == arrA[j]){
      count++;
    }
  }console.log(arrC[i] + "=" + count) ;
  
}
  
  
}
strCounts('abcadeecfb');