function clockDisplay() {
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    const element1  = document.getElementById("hrs").innerHTML = hrs-12 + "\n"+ "Hrs" ;
   
    const element2  = document.getElementById("mins").innerHTML =  mins +"\n" + "Mins";
    const element3  = document.getElementById("secs").innerHTML =  secs + "\n" +"Secs";
}
setInterval(clockDisplay, 1000);
console.log(element1);

function myFunction() {
    let wakeUpTime = document.getElementById("wakemeup").value;
     document.getElementById("wake").innerHTML =  "Wake Up Time : " + wakeUpTime;

     let lunchTime = document.getElementById("lunchTime").value;
     document.getElementById("lunch").innerHTML =  "Lunch Time : " + lunchTime;

     let napTime = document.getElementById("napTime").value;
     document.getElementById("nap").innerHTML =  "Nap Time : " + napTime;

     let nightTime = document.getElementById("nightTime").value;
     document.getElementById("night").innerHTML =  `Night Time : ${nightTime}`;


     let time = new Date();
     let hrs = time.getHours();

     

     if(hrs == 8 || hrs ==9 || hrs ==10 || hrs == 11 ){
        const element1  = document.getElementById("texte").innerHTML = `GRAB SOME HEALTHY BREAKFAST!!!` ;
        document.getElementById("photo").src = "goodmorning.png";
        const element2  = document.getElementById("good").innerHTML = `GOOD MORNING!! WAKE UP !!` ;
        }

     else if(hrs == 15 || hrs ==16 || hrs ==17 ){
     const element1  = document.getElementById("texte").innerHTML = `LET'S HAVE SOME LUNCH !!` ;
     document.getElementById("photo").src = "lunch.png";
     const element2  = document.getElementById("good").innerHTML = `GOOD EVENING !!` ;
     }

   else if(hrs == 18 || hrs ==19 || hrs ==20 || hrs ==12 || hrs ==13){
    const element2  = document.getElementById("texte").innerHTML = `STOP YAWNING, GET SOME TEA..ITS JUST EVENING!` ;
    document.getElementById("photo").src = "yawning.png";
    const element1  = document.getElementById("good").innerHTML = `GOOD AFTERNOON !! TAKE SOME SLEEP` ;
   }

   else if(hrs == 21 || hrs ==22 || hrs ==23){
    const element3  = document.getElementById("texte").innerHTML = `CLOSE YOUR EYES AND GO TO SLEEP` ;
    document.getElementById("photo").src = "goodnight.png";
    const element1  = document.getElementById("good").innerHTML = `GOOD NIGHT !! ` ;
   }

   else{
    const element1  = document.getElementById("good").innerHTML = `HAVE A GREAT DAY` ;
   }
     
}
