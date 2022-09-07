$('#downSub').click(function () {
    $("#item2").hide();
})

$('#item2').hide();
$(".list").hide();  
$(".addItem").click(function(){
    $(".list").toggle();  
    // $(".parent").toggle();
    
    // $(".list").toggle();
    // document.getElementsByClassName("task")[0].style.filter="blur(2px)" ; 
    // document.getElementsByClassName("addItem")[0].style.filter="blur(2px)" ; 
   
    // document.getElementsByClassName("p1")[0].style.filter="blur(2px)" ; 
  
});

// $('.b1').click(function(){
   
// }
$('.b2').click(function(){
    // document.getElementsByClassName("list")[0].style.visibility="hidden" ; 
   $(".list").hide();

//    document.getElementsByClassName("task")[0].style.filter="blur(0px)" ; 
//     document.getElementsByClassName("addItem")[0].style.filter="blur(0px)" ; 
//     document.getElementsByClassName("parent")[0].style.filter="blur(0px)" ; 
});

const listText = document.getElementById("text");
const flex = document.getElementById("div-container");

const addCard = document.querySelector(".b1");
const divContainer = document.getElementById("div-container")










const listOfTasks = [];
const addTask = () => {
    // document.querySelector("div.container").style.filter = "blur(0px)";
    const element1 = document.getElementById("text").value ; 
    const cardOperation = {   
        //we created a object to store value of given input and each time a new value comes and it will operate on itd
        id : Date.now(), //added time is saved
        taskname : element1 
    }
    listOfTasks.push(cardOperation);
    // document.getElementById("").value = "";
    if (element1 ===''){
        $("#items").show();
    }
    else{
        addToTheScreen();
    }
    console.log(listOfTasks); //this will print the added or deleted card

   
    $(".list").hide();
    
    // window.open("css.html")

}
function addToTheScreen() {
    $("#items").hide();

    const element2 = document.createElement("div");//card
//element 2 is element created for child
    const element3 = document.getElementById("parent");
    element3.appendChild(element2);//
    
//adding data to the child
    element2.setAttribute("class","child")
    //adding paragraph to child
    const heading = document.createElement("p");
    heading.classList.add("head");
    element2.append(heading)



    //creating horizontal line
    const horizontal = document.createElement("hr");
    horizontal.classList.add("hori");
    element2.append(horizontal)





    //create image for remove

    const removeButton = document.createElement("img");
    removeButton.setAttribute("src", "trash.png")
    removeButton.classList.add("removebutton")//to add the class name of removeButton element
    element2.append(removeButton)


    //creating image for adding item
    const addButton = document.createElement("img")
    addButton.setAttribute("src","add.png")
    addButton.classList.add("addbutton")
    element2.append(addButton)


    //to print heading with the added line
    heading.innerText = listOfTasks[listOfTasks.length-1].taskname;


    //function to delete the task
removeButton.addEventListener('click',function() {
    element2.remove();
    const noOfCards = document.getElementsByClassName("child").length;
    if(noOfCards == 0) {
        $(".p1").show();
    }
});
// addEventListener('feature', execution code)


addButton.addEventListener('click', function(){
    $('#item2').show();
    $("#addSub").unbind('click');
    $('#addSub').click(function (){
      const uniqeId = Date.now();
      const val = document.getElementById('pText');
     
      const containerDiv = document.createElement("div");
      containerDiv.setAttribute("class", "container-div");
      element2.append(containerDiv);

      const para = document.createElement("p");
      para.setAttribute("class", "paraText");
      para.setAttribute("id", 'p-' + uniqeId);
      para.innerText = val.value;
      containerDiv.append(para);

      const btn = document.createElement("button");
      btn.innerText = "Mark done";
      btn.setAttribute("id", uniqeId);
      btn.setAttribute("class", "btnStyle")

      containerDiv.append(btn);

      $('#item2').hide();
      // btn.addEventListener('click', function () {
      btn.addEventListener('click', function (event) {
        const paragraph = document.getElementById('p-' + event.currentTarget.id);
        paragraph.setAttribute("class", "paraText strike-through");
        $('#' + event.currentTarget.id).hide();
          // const def = document.createElement("p")
          // def.setAttribute("id",'wheel');
          // const abc = document.getElementById("p-");
          // def.innerText = abc.value;
        //  btn.hide();
      });
      
    });
  })

   


    
}
//this is called inside add click function
