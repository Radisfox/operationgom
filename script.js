const archives=[
{
title:"Le décès de Paul Valéry",
date:"20 juillet 1945",
text:"Paul Valéry (1871–1945) est l'un des plus grands poètes et penseurs français du XXᵉ siècle. Né à Sète, il s'est distingué par une poésie raffinée, mêlant réflexion philosophique et recherche de la perfection du langage. Parmi ses œuvres les plus célèbres figurent Le Cimetière marin et La Jeune Parque. Élu à l'Académie française en 1925, il a marqué la littérature par son intelligence, sa sensibilité et son style unique. Son œuvre continue d'inspirer les amoureux de la poésie et de la pensée.",
image:"images/archive1.png",
answer:"a nos souvenirs",
hints:["Le mot de passe est le titre de cette musique."]
},
{title:"Archive 2",date:"",text:"À compléter",image:"",answer:"test2",hints:[""]},
{title:"Archive 3",date:"",text:"À compléter",image:"",answer:"test3",hints:[""]},
{title:"Archive 4",date:"",text:"À compléter",image:"",answer:"test4",hints:[""]},
{title:"Archive 5",date:"",text:"À compléter",image:"",answer:"test5",hints:[""]}
];
let current=0,h=0;
function login()function login(){

    const username = document
        .getElementById("username")
        .value
        .trim()
        .toLowerCase();

    if(username === "margaux"){

        document
            .getElementById("loginScreen")
            .classList
            .add("hidden");

        document
            .getElementById("archiveScreen")
            .classList
            .remove("hidden");

        loadArchive();

        document
            .getElementById("message")
            .textContent = "";

    }

    else{

        document
            .getElementById("message")
            .textContent =
            "Utilisateur inconnu.";

    }

}
function loadArchive(){
 let a=archives[current];
 archiveTitle.textContent=a.title;
 archiveDate.textContent=a.date;
 archiveText.textContent=a.text;
 archiveImage.src=a.image;
 progressNumber.textContent=(current+1)+" / 5";
 progressFill.style.width=((current+1)/5*100)+"%";
 hint.textContent="";
 nextKey.value="";
}
function showHint(){
 let arr=archives[current].hints;
 if(h<arr.length){hint.textContent=arr[h++];}
}
function nextArchive(){
 let ans=nextKey.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
 let correct=archives[current].answer.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
 if(ans==correct){
   current++;
   h=0;
   if(current>=archives.length){
      archiveScreen.classList.add("hidden");
      finalScreen.classList.remove("hidden");
   }else loadArchive();
 }else message.textContent="Mauvaise réponse.";
}
