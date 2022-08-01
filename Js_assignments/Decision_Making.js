								    	   	Decision Making
1.	Calculator
	
	
	const Calculator = (A, B, C) => 
	{
	let result;
		switch(A){
		  case '+' : result=B+C ;
		   break;
	   
	 	   case '-':
     	 result = B - C;
    	  break;

    	  case '*':
   	   result = B * C;
   	   break;

     	 // case '/':
     	 // result = B / C;
     	 // break;

     	 default:
     	 result = "invalid operator";
     	 break;
		}return result;
    
	};

2.	Check whether the condition is fulfilled or not?
	
	
	sconst Check_divisibility = (N) => {
    
	ssif((N%6==0) && (N%9==0)){
	  return('Divisible by both');
	}
	else{
  	return('Not Divisible by both');
	}
    
	};

3.	Eligible Voter
	const isEligible = (A) => {
  
	  if(A>=18){
  	  return('Eligible for Voting');
 	 }
  	else{
  	  return('Not Eligible for Voting');
	  }
	};
	//we canot use console.log in place of return. why?
	// showing undefined when i use console.log

4.	Find Relation
	
	
	const findRelation = (x,y) => {
 	 if(x<y){
  	  return(x +' is smaller than '+y);
 	 }
 	 else if(x>y){
  	  return(x + ' is greater than '+y);
 	 }
 	 else{
	    return(x +' is equal to '+y);
 	 }
	};

5.	Find Grades
		
	
const findGrades = (a) => {
    
    switch(true) {
       	 case a<=10:return 'E';
       	 break;
      	  case a>=11 && a<=20:return 'D';
      	  break;
     	   case a>=21 && a<=30:return 'C';
     	   break;
      	  case a>=31 && a<=40:return 'B';
     	   break;
     	   case a>=41 && a<=50:return 'A';
     	   break;
  	  }

    
	};


6.	Get Value
	
	const getValue = (a) => {
 	 switch(a){
  	  case 'P':return 'PrepBytes';break;
   	 case 'p':return 'PrepBytes';break;
   	 case 'Z':return 'Zenith';break;
   	 case 'z':return 'Zenith';break;
   	 case "E":return 'Expert Coder';break;
  	  case "e":return 'Expert Coder';break;
  	  case 'D':return 'Data structure';break;
  	  case 'd':return 'Data structure';break;
    
  	}
	};

7. 	Find the maximum out of three numbers.

	
	const Max_out_of_three = (A,B,C) => {
  	  let max_num = 0;
  	  if(A>B && A>C){
  	    max_num = A;
 	   }
 	   else if(C>A && C>B){
   	   max_num = C;
      
  	  }
   	 else if(B>A && B>C){
   	   max_num = B;
  	  }
  	  else{
  	    return '-1';
  	  }
  	 return max_num;

	};



8.	Second Smallest
	 
	
	const findSndSmallest = (x,y,z) => {
   	 let snd_num=0;
    
  	  if(x>y && x<z || x<y && x>z ){
  	   snd_num= x;
  	  }
   	 else if(y>x && y<z || y<x && y>z){
  	   snd_num=y;
  	  }
  	  else{
  	   snd_num=z;
  	  }
   	 // else{
  	  //   return 'some number is equal to another'
  	  // }
 	   return snd_num;
    
	};

9. 	Check whether the triangle is Acute or Obtuse

	
	const Triangle_Check = (A,B,C) => {
    
  	if(A>90 || B>90 || C>90){
   	 return "obtuse";
  	}
  	else{
  	  return "acute";
	  }
    
	};


	

	

