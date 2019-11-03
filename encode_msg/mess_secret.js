document.getElementById('encode').addEventListener('click', encode);

function encode(){
  var valeurTexte = document.getElementById('input').value;
  var texteEncode = encodeText(valeurTexte);
  document.getElementById('output').innerHTML = texteEncode;
}

function encodeText(valeurTexte){
  var code = "";
  for (var i = 0; i < valeurTexte.length; i++){
    code = code + valeurTexte.charCodeAt(i) + ".";
  }
  return code;
}


document.getElementById('decode').addEventListener('click', decode);

function decode(){
  // document.getElementById('output').innerHTML;
  var valeurTexte = document.getElementById('output').innerHTML;
  var codes = valeurTexte.split(".");
  var text = "";
  // output.innerHTML;
  for (var i = 0; i < codes.length; i++) {
    // output.innerHTML += String.fromCharCode(codes[i]);
    text += String.fromCharCode(codes[i]);
  }
  document.getElementById('output').innerHTML = text;
}
