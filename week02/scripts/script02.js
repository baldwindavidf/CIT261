
function addElement() {
  
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

for (i = 0; i < nameArray.length; i++) {
  textStatement1 = nameArray[i] + "<br/>";
  textStatement2 = emailArray[i] + "<br/>";
  relation.type = type + "<br/>";
}



document.getElementById("myDiv2").innerHTML += textStatement1;
document.getElementById("myDiv3").innerHTML += textStatement2;
document.getElementById("myDiv4").innerHTML += relation.type;
   


}
document.getElementById("myNamef").value = "";
document.getElementById("myNamel").value = "";
document.getElementById("myEmail").value = "";
document.getElementById("select").value = "";

}

function uppercase(x) {
  var uppercased = x.charAt(0).toUpperCase() + x.slice(1);
  return uppercased;
}
