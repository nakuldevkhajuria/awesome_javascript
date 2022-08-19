1.

function Check(obj1){
    obj1.setter = function () {
      console.log(this.name);
    }
 }
 

2.

function Check(obj1) {
    delete obj1.rollno;
    return obj1;
  }
  

3.

function Check(obj1) {
    if(obj1.salary > 500000) {
      return "Dream";
    }
    
    
    return "NotDream";
}

4.

function Check(obj1) {
   
    if((Object.keys(obj1)).length !== 0) {
      return true;
    } 
    
    return false;
  }
  
  

5.

function Check(obj1,obj2) {
    for(const [key, value] of Object.entries(obj2)) {
       obj1[key] = value;
    }
    
    return obj1;
}

6.

function Check(a,obj1) {
  
    obj1.id = a*obj1.id;
    obj1.houseno = a*obj1.houseno;
    
    return obj1;
  }
  

7.

function check(obj1,a,b) {
    if(obj1.name === a && obj1.id === b) {
      return true;
    }
    
    return false;
}

8.

function Check(obj1) {
    return obj1.p1 + obj1.p2 + obj1.p3;
}

