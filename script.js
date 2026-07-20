function login(){

const username=document.getElementById("username").value.trim().toLowerCase();

const box=document.querySelector(".container");

if(username==="margaux"){

document.getElementById("login").style.display="none";

document.getElementById("secondLogin").style.display="block";

document.getElementById("name").textContent="Margaux";

document.getElementById("message").textContent="";

}

else{

box.classList.add("shake");

setTimeout(function(){

box.classList.remove("shake");

},350);

document.getElementById("message").textContent="Utilisateur inconnu.";

}

}

function checkKey(){

const key=document.getElementById("key").value.trim().toLowerCase();

const box=document.querySelector(".container");

if(key==="apollo"){

document.getElementById("message").style.color="#74d874";

document.getElementById("message").textContent="Archive 1 débloquée !";

}

else{

box.classList.add("shake");

setTimeout(function(){

box.classList.remove("shake");

},350);

document.getElementById("message").style.color="#ff8c8c";

document.getElementById("message").textContent="Clé d'accès invalide.";

}

}
