var banniere = document.getElementById('banniere');
var texte = banniere.firstElementChild;
var input = document.getElementById("input");
var tailleTexte = banniere.scrollWidth;

function defile(){
     var pos = texte.style.marginLeft.replace('px','');
     pos -= 10;
     var x = input.value;
     if(pos < -tailleTexte){
          pos = 1000;
     }
     texte.style.marginLeft = pos+"px";
     setTimeout(defile, x);
}

defile();
