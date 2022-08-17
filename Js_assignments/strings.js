1.


const countCharacters = (S) => 
{
  let B =[0,0];// we need to initiate the value of B[0] and B[1], else it will  give runtine error
  let len = S.length;
  for(let i=0;i<len;i++){
 if(S.charAt(i)=="A"){
   B[0]+=1;
 }
 else if(S.charAt(i)=="D"){
   B[1]+=1;
 }

  }
// console.log(B[0])
return B ;
};
 


2.


// var Count_Occ = (s) => 
// {
//     // we need to initiate the value of B[0] and B[1], else it will  give runtine error
//   let len = s.length;
//   let n =0;
//   let str = "ab";
 
  
//   for(let i=0;i<len;i++){
//     // let first = s.charAt(0);
//     // else if{
//     //   s.charAt(i)
//     // }
//     for(let j=i+1;j<len-1; j++){
//       if(s.charAt(j)== s.charAt(i)){
//       str[0] =s.charAt(i);
//       str[1] +=1;
      
//     }
//     }
//     // first = s.charAt();
    
  
// } return str[0];
  
  
  
// };
 
 
 
 var Count_Occ = (s) => 
{
    
    let Arr = s.split("").sort();
    var p;
    let map1 = new Map();
    for(let i =0; i<Arr.length;i++)
    {
      p=0;
      Arr.reduce((acc,val)=>
      {
        if(val == Arr[i])
        {
          p=acc+1;
        }
        return p;
      }, 0);
      map1.set(`${Arr[i]}` , p);
    }
    let z = [];
    map1.forEach((value,key)=>
    {
    if(value>1)
    {
      z.push(key + "" + value);
    }
    
    });
    return (z.join(""));
};


3.


var Count_Vowels= (S) => 
{
 
      let count=0;
      let i;
      for(i=0;i<S.length;i++){
        if(S[i]=='a' || S[i]=='e' || S[i]=='i' || S[i]=='o' || S[i]=='u'){
          count+=1;
        }
      }
      return count;
};
 


4.


var Concatenate_Strings = (S1, S2) => 
{
     return S1.concat(S2); 
};
 


5.


const findLength = (S) => 
{
  let i =0,count=0;
  while( S[i] !== undefined ){
    count +=1;
    i++;
  }return count;
    
};
 


6.

 
var Game_Winner = (S) => 
{
  let aditya =0,danish = 0;
  
  for(let i=0;i<S.length;i++){
    if(S[i] == 'A'){
       aditya +=1; 
    }
    else if(S[i] == 'D'){
       danish +=1; 
    }
  }
  if(aditya>danish){
    return 'Aditya';
  }
  else if(aditya<danish){
    return 'Danish';
  }
  else{
    return 'Draw';
  }
}
 


7.


const joinStrings = (S, P) => 
{
  // let str=''
  //   str=S+P
  //   return str
    return S.concat(P);
};
 


8.

 
var Palin_Check = (str) =>
{
  let given = 'True';
	for(let i=0;i<str.length;i++){
	  if(str[i] == str[str.length-i-1]){
	    given = 'True';
	    
	  }
	  else{
	    given = 'False';
	    break;
	  }
	}return given;
	 
};



9.


var Reverse_String = (str) => 
{
  // let item = str.split('');
     
  //   item1 = item.reverse();
  //   item2 = item1.join('');
  //   return item2;
     
     return str.split("").reverse().join('');
};
 


10.


var String_Match = (S1,S2) => 
{
      return (S1 == S2 ? 'YES' : 'NO');
};
 


11.


var Replace = (S, pattern , text) => 
{
      return (S.replace(pattern, text));//replaceAll not working here
};
 


12.


var Split_the_string = (S) => 
{
  
        return ( S.split(' '));
};
 


13.


var Count_Vowels= (S) => 
{
  let count = 0;
     for(i=0;i<S.length;i++){
        if(S[i]=='a' || S[i]=='e' || S[i]=='i' || S[i]=='o' || S[i]=='u'){
          count+=1;
        }
      }return count; 
};
var Count_Consonants= (S) => 
{
  let count1 = 0;
       for(i=0;i<S.length;i++){
        if(S[i]=='a' || S[i]=='e' || S[i]=='i' || S[i]=='o' || S[i]=='u'){
          continue;
        }
        else{
          count1+=1;
        }
      }return count1;
};
 


