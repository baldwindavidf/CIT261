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
document.getElementById("myDiv8").innerHTML += "Added <br/>"; 
    load();
    getPhpData();
    createElm();
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
        var canvas = document.getElementById("myCan");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#44ffdd";
        ctx.fillRect(0, 0, 100, 100);
        var img = document.getElementById("email");
        ctx.drawImage(img,12,8);
   var data = {item: ""};
    var x;
   var my_string = "";
   data2 = JSON.parse(localStorage.getItem('items2'));
      
    for (x = 0 ; x < data2.length; x++) {
    my_string += data2[x] + "<br/>";
    }
    document.getElementById("Div7").innerHTML = my_string.replace(/,/g, "<br/>");
    }

function getPhpData() {
    load();
           var xhttp = new XMLHttpRequest();
           try{
               // Opera 8.0+, Firefox, Chrome, Safari
               xhttp = new XMLHttpRequest();
           }catch (e){
               // Internet Explorer Browsers
               try{
                  xhttp = new ActiveXObject("Msxml2.XMLHTTP");
               }catch (e) {
				
                  try{
                     xhttp = new ActiveXObject("Microsoft.XMLHTTP");
                  }catch (e){
                     alert("Browser not supported");
                     return false;
                  }
               }
           }

           data2 = JSON.parse(localStorage.getItem('items2'));
 
           //if (string.length == 0) { 
          // document.getElementById("text").innerHTML = "";
           //return;
          // }
           xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
           document.getElementById("text").innerHTML = this.responseText;
                
            }
           
           };
         //  xhttp.open("GET", "data.php?q="+string, true);
           xhttp.open("GET", "data.php?stuff="+data2, true);
           xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
           xhttp.send();   
}

function show() {
    var x = document.getElementById("myDiv12");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function display() {
    var x = document.getElementById("Div12");
    var y = document.getElementById("Div8");
    var z = document.getElementById("buttonDis");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.innerHTML = "Search By Standard List";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.innerHTML = "Search By Drop Down List";
    }
   
}

function createElm() {
    newlink = document.createElement('a');
    newlink.innerHTML = document.getElementById("myNamef").value + " " + document.getElementById("myNamel").value ;
    newlink.setAttribute('title', newlink.innerHTML);
    newlink.setAttribute('href', 'mailto:' + document.getElementById("myEmail").value);
    breakL = document.createElement("br");
    document.body.appendChild(newlink);
    document.body.appendChild(breakL);
}

