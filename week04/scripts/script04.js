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

function getPhpData(string) {
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
    
           if (string.length == 0) { 
           document.getElementById("text").innerHTML = "";
           return;
           }
 
           xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
           document.getElementById("text").innerHTML = this.responseText;
           }
           };
           xhttp.open("GET", "data.php?q="+string, true);
           xhttp.send();   
}

function getJsonData() {

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
			
           xhttp.onreadystatechange = function(){
           if (this.readyState == 4 && this.status == 200){
           var jsonObj = JSON.parse(xhttp.responseText);

           document.getElementById("Name").innerHTML = jsonObj.name;
           document.getElementById("Country").innerHTML = jsonObj.country;
           }
           };
           xhttp.open("GET", "data.json", true);
           xhttp.send();
}

function encode( s ) {
    var out = [];
    for ( var i = 0; i < s.length; i++ ) {
        out[i] = s.charCodeAt(i);
    }
    return new Uint8Array( out );
}
function addJson() {
var button = document.getElementById( 'button' );

    
    var data = encode( JSON.stringify({
        name: 'Example object',
        child: {
            name: 'Nested thing'
        }
    }, null, 4) );

    var blob = new Blob( [ data ], {
        type: 'application/octet-stream'
    });
    
    url = URL.createObjectURL( blob );
    var link = document.createElement( 'a' );
    link.setAttribute( 'href', url );
    link.setAttribute( 'download', 'example.json' );
    
    var event = document.createEvent( 'MouseEvents' );
    event.initMouseEvent( 'click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent( event );
}
