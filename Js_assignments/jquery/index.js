//1
//Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible

//on clicking the class with .one, tag with p will get .hide();
$('.firstB').click(function(){
    $("p").hide();    
});

$('.secondB').click(function(){
    $("p").toggle();
});

//2
//Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page

$('.ajax').click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/todos/12",
        type:"GET",
        success:function(data){//success is the function name. and data is the parameter
            console.log(data);//data is the value coming from the url and displaying using innerHtml
            document.getElementsByTagName("p")[0].innerHTML = data.title;//
        }
    })
})