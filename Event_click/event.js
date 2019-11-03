
//définition de la fct
function onClick(maDiv, phrase){
  var mesPara = document.getElementsByClassName("mesPara");
  //créer l'élément paragraph avec le nom de class mesPara et contenu 'Ajouter en JS'
  var paragraph = document.createElement('p');
  paragraph.className = "mesPara";
  paragraph.innerHTML = "Ajouter en JS";
  maDiv.appendChild(paragraph);
  //afficher le nbr de paragraphes crées 
  if (mesPara.length == 1) {
    phrase.innerHTML = "Il y a 1 paragraphe.";
  }else {
    phrase.innerHTML = "Il y a " + mesPara.length + " paragraphes.";
  }
}
//Séléction des éléments html et déclenchement de l'événement 
var bouton = document.getElementById("button");
var maDiv1 = document.getElementById("maDiv");
var phrase = document.getElementById("phrase");
bouton.addEventListener('click', function() { onClick(maDiv1, phrase)});
