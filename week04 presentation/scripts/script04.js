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
           document.getElementById("Address").innerHTML = jsonObj.address;
           }
           };
           xhttp.open("GET", "data.json", true);
           xhttp.send();
}