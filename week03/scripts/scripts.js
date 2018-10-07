

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
    store(myArray);
    
    localStorage.setItem('items', JSON.stringify(it));
   data = JSON.parse(localStorage.getItem('items'));
   
   
 
  document.getElementById("Div1").innerHTML += data + "<br/>";
  document.getElementById('item').value = "";
}

var items2 = [];

function store(item_id) {
    items2.push(item_id);
    localStorage.setItem("items2", JSON.stringify(items2));
   // document.getElementById("Div3").innerHTML = items2
}

function load() {
   var data = {item: ""};
    var x;
   var my_string = "";
    
    
   data = JSON.parse(localStorage.getItem('items2'));
    for (x = 0 ; x < data.length; x++) {
    my_string += data[x] + "<br/>";
    }
    
    document.getElementById("Div2").innerHTML = my_string;
   

}