

//var itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

//localStorage.setItem('items', JSON.stringify(itemsArray));
//var data = JSON.parse(localStorage.getItem('items'));

function add() {
    var it = [];
   var itemsArray = {item: ""};
   var myArray = [];
   var data = {item: ""};
   var item;
 
  var input = document.getElementById('item').value;
  
   myArray.push(input);
    
    for (i = 0; i < myArray.length; i++) {
     it.push(myArray[i] + "<br/>");
    
    }
    //document.getElementById("Div2").innerHTML = itemsArray.item;
    localStorage.setItem('items', JSON.stringify(it));
   data = JSON.parse(localStorage.getItem('items'));
   
   
 
  document.getElementById("Div1").innerHTML += data + "<br/>";
  document.getElementById('item').value = "";
}


function load() {
   var itemsArray = {item: ""};
   var data = {item: ""};
   var newItem = {item: ""};
    var myArray = [];
   var x;

    
   data = JSON.parse(localStorage.getItem('items'));
    
    
    document.getElementById("Div2").innerHTML = data + "<br/>";
   

}