var storedItem = [];
var storedItems = [];
var data2 = [];
function addElement() {
    var toJson;
var textStatement1, textStatement2;
var type = document.getElementById("select").value;
var fname = document.getElementById("myNamef").value;
var lname = document.getElementById("myNamel").value;
var email = document.getElementById("myEmail").value;
var nameArray = [], emailArray = [];
var relation = {type: "", fullname: function(x, y){
          var z = uppercase(x) + " " + uppercase(y);
    return z;
  }};
    
    
   
    
if (fname === "" || lname === "" || email === "" || type === "") {
  alert("Please enter all fields");
}
else
{
var newName = relation.fullname(fname, lname);
  nameArray.push(newName);
  emailArray.push(email);
    
var i;


for (i = 0; i < nameArray.length; i++) {
  textStatement1 = nameArray[i] + "<br/>";
  textStatement2 = emailArray[i] + "<br/>";
  relation.type = type + "<br/>"; 
    toJson = nameArray[i] + " - " + emailArray[i] + " - " + type + "<br/>"
}
     
        store(toJson);
 
       
document.getElementById("myDiv2").innerHTML += textStatement1;
document.getElementById("myDiv3").innerHTML += textStatement2;
document.getElementById("myDiv4").innerHTML += relation.type;   
document.getElementById("myDiv8").innerHTML += "Added"; 
   load();
document.getElementById("myNamef").value = "";
document.getElementById("myNamel").value = "";
document.getElementById("myEmail").value = "";
document.getElementById("select").value = "";

}
}
function uppercase(x) {
  var uppercased = x.charAt(0).toUpperCase() + x.slice(1);
  return uppercased;
}

var myItem = [];

function store(item_id) {
     if (data2 != null && storedItem == "") {
         
     storedItem.push(data2); 
     
     storedItem.push(item_id);
     }
    else {
        storedItem.push(item_id);
    }
   
    localStorage.setItem("items2", JSON.stringify(storedItem));
}
    
    function load() {
   var data = {item: ""};
    var x;
   var my_string = "";
   data2 = JSON.parse(localStorage.getItem('items2'));
 
 
    for (x = 0 ; x < data2.length; x++) {
    my_string += data2[x] + "<br/>";
    }
    
    document.getElementById("Div7").innerHTML = my_string.replace(/,/g, "<br/>");

    }
