1. Find the number of digits

const Find_Digits = (N) => 
{
	  let count=0;
	 for(let i=0;i<=4;i++){
	   
	   
	   if(N>=1){
	   count++;
	   N = N/10;
	   }
	   else{
	     break;
	   }
	   
	 }
	 return count;
	 
};


2. Find the Fives.

// const Find_Five = (N) => 
// {
//   count=0;
// 	 for(let i=0;i<=7;i++){
	   
// 	 if(N%5===0){
	   
// 	   N= parseInt(N/10);
// 	   count++;
	   
// 	 }
// 	 else{
	   
// 	  N= parseInt(N/10);
// 	 }
	 
	
// 	 } return count;
// };

const Find_Five = (N) => {
  

let count = 0;
	 while(N !== 0){
	   let remainder = N % 10;
	   if(remainder == 5)
	    count++
	   N = parseInt(N/10)
	 }
	 return count
};

3. Find Sum


const findSum = (n) => {
    
    let count = 0;
    while(n !==0){
      remainder = n%2;
      if(remainder ==0){
        count=count + n;
      }
      n = n-1;
    } return count;
};

4. Find the sum of the digits of a given number.


const Number_Sum = (N) => 
{
  count = 0;
	while(N!==0){
	  remainder = N%10;
	  count = count + remainder;
	  N = parseInt(N/10);
	}
	return count;
};

5. Print the Odds.


const Print_Odd = (N) => 
{
	console.log('2');
	for(let i = 3;i<=N;i++){
	  if(i%2!==0){console.log(i);}
	  
	}
};

6. Print the Pattern.


const Print_pattern = (N) => 
{
  let i,j;
  for( i = 0;i<N;i++){
    let count = '' ;
    for( j=0;j<=i;j++){
      count = count +'*';
    }
    console.log(count);
  }
};



7. Check whether a Number is a prime or not.


const Prime_Check = (N) => 
{
	if (N === 1) {
    return "NO"
  }

	  else if(N%2===0 ){
	    return 'NO';
	  }
	  else if(N%3===0 ){
	    return 'NO';
	  }
	  else if(N%5===0 ){
	    return 'NO';
	  }
	  else{
	    return 'YES';
	  }
	
};
//doubt

8.  Print Numbers


const printNumbers = (n) => {
   
   let i,j;
   let str = '';
  for( i = 1;i<=n;i++){
   str = str + " " + i;
   
  } console.log(str);
};

9. Print the Table


const Print_Table = (N) => 
{
  
	for(let i =1; i<=10; i++){
	  let count = '';
	  for(let j=1; j<=i;j++){
	    count = N + ' * ' + j +" = " + N*j;
	    
	  } console.log(count);
	  
	  
	}
};

