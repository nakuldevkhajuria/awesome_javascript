1.


var Minimal_Angle = (h, m) => 
{
     h = h % 12;
     hh = (h * 360) / 12 + (m* 360) / (12 * 60);
     mm = (m * 360) / (60);
    var angle = Math.abs(hh - mm);
    if (angle > 180) {
        angle = 360 - angle;
    }
 
    return angle;

};
 


2.

 
var Check_Leap = (year) => 
{
 
if(year%400 ===0){
  return 'Leap Year';
}
else if(year%100 ===0){
  return 'Non Leap Year';
}
else if(year%4 ===0){
  return 'Leap Year';
}
else{return 'Non Leap Year'}

};
 


3.

 
var Perfect_Check = (N) => 
{
  let flag ='NO';
  let a = 0;
      for(let i=1;i<=N/2;i++){
        if(N%i ==0){
          a = a + i;
         
        }
        if(N === a){
            flag = 'YES';
          }
        
      }return flag;
        
};
 


4.

 
var Reverse_Number = (N) => 
{
return(parseFloat(N.toString().split('').reverse().join('')));


};
 


5.


var Substring_Check = (S1, S2) => 
{
     return(S1.includes(S2) ? 'YES':'NO');
};
 
