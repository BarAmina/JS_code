var textarea = document.getElementById("input");
var remaining = document.getElementById("remaining");
var photo = document.getElementById("photo");
var bouton = document.getElementById("tweet");

function tweet(textarea, remaining, photo){
  var nb_caract_restant = 0;
  if (photo.checked) {
    nb_caract_restant = 140 - parseInt(textarea.value.length) - 23;
    remaining.innerHTML = 140 - parseInt(textarea.value.length) - 23;
  }else {
    nb_caract_restant = 140 - parseInt(textarea.value.length);
    remaining.innerHTML = 140 - parseInt(textarea.value.length);
  }
  if (nb_caract_restant<=0) {
    remaining.style.color = 'red';
    remaining.style.fontWeight = 'bold';
  }else {
    remaining.style.color = '';
    remaining.style.fontWeight = '';
  }
  if (nb_caract_restant<23) {
    if (!photo.checked) {
      photo.disabled = true;
      photo.innerHTML = photo;
    }
  }else {
      photo.disabled = false;
      photo.innerHTML = photo;
  }
  if (nb_caract_restant <= 0) {
    bouton.disabled = "disabled";
  }else {
    bouton.disabled = "";

  }
}

textarea.addEventListener('input', function() {tweet(textarea, remaining, photo)});
photo.addEventListener('input', function() {tweet(textarea, remaining, photo)});
