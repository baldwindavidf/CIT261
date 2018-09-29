
function addElement() {
  
var textStatement1, textStatement2, textStatement3;
var name = document.getElementById("myName").value;
var email = document.getElementById("myEmail").value;
var age = document.getElementById("myAge").value;
var nameArray = [], emailArray = [], ageArray = [];

if (name === "" || email === "" || age === "") {
  alert("Please enter all fields");
}
else
{
  nameArray.push(name);
  emailArray.push(email);
  ageArray.push(age);

for (i = 0; i < nameArray.length; i++) {
  textStatement1 = nameArray + "<br/>";
  textStatement2 = emailArray + "<br/>";
  textStatement3 = ageArray + "<br/>";
}

document.getElementById("myDiv2").innerHTML += textStatement1;
document.getElementById("myDiv3").innerHTML += textStatement2;
document.getElementById("myDiv4").innerHTML += textStatement3;
}
document.getElementById("myName").value = "";
document.getElementById("myEmail").value = "";
document.getElementById("myAge").value = "";

}