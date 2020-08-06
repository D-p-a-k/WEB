function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
console.log(value);
  if (parts.length === 2) return parts.pop().split(';').shift();
}


function get(){
  var username = getCookie("username");

var decrypted = CryptoJS.AES.decrypt(username, "Secret Passphrase");
var dec=decrypted.toString(CryptoJS.enc.Utf8);
 
  if (dec=="susmi---susmi123") {
 console.log(dec);
  window.location = "welcome.html";
  }
}
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "susmi" && password == "susmi123"){
 if(document.getElementById("check").checked== true)
  {
 var encrypted = CryptoJS.AES.encrypt(username+"---"+password, "Secret Passphrase");
document.cookie = "username="+encrypted+"; max-age=86400;";
}
alert ("Login successful");
window.location = "welcome.html"; // Redirecting to other page.
return false;
}
else
{	
 document.getElementById("demo").innerHTML= "Invalid Username/Password. Try again!"; 
//alert("Invalid credentials");
}
}