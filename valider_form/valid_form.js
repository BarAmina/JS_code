// var name = document.getElementById('name');
// var prenom = document.getElementById('prenom');
// var telephone = document.getElementById('telephone');
// var mail = document.getElementById('mail');

var inscription = document.getElementById('inscription');

inscription.addEventListener('submit', valider);

function valider(event){
  var champ_nom = inscription.elements["nom"];
  var champ_prenom = inscription.elements["prenom"];
  var champ_telephone = inscription.elements["telephone"];
  var champ_email = inscription.elements["mail"];

  var form_OK = true;
  if (isNaN(champ_nom.value)) {
    form_OK = false;
  }
  if (isNaN(champ_prenom.value)) {
    form_OK = false;
  }
  if (champ_telephone.value.length !=10 || isNaN(champ_telephone.value)) {
    form_OK = false;
    console.log("erreur tel");
    champ_telephone.classList.add("erreur");
  }else {
    champ_telephone.classList.remove("erreur");
  }
  if (isNaN(champ_email.value)) {
    form_OK = false;
    champ_email.classList.add("erreur");
  }else {
    champ_email.classList.remove("erreur");
  }
  var regex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/ ;
  if (regex.exec(champ_email.value) == null) {
    form_OK = false;
    console.log("erreur mail");
    champ_email.classList.add("erreur");
  }else {
    champ_email.classList.remove("erreur");
  }
  if(champ_nom.value == ""){
    form_OK = false;
    champ_nom.classList.add("erreur");
  }else{
    champ_nom.classList.remove("erreur");
  }
  if(champ_prenom.value == ""){
    form_OK = false;
    champ_prenom.classList.add("erreur");
  }else{
    champ_prenom.classList.remove("erreur");
  }
  if (!form_OK) {
    event.preventDefault();

  }
}
