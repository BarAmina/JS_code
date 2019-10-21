var pi= Math.PI;
    	//la fonction qui fixe le nombre de décimales souhaitées
    	function decimales(decimales ){ 
    		return pi.toFixed(decimales);
    	}

		// entrer le nombre et afficher le resultat dans le paragraphe
    	document.getElementById("button").onclick = function() {
				var msg = prompt('Entrer le nombre :');
				var res= decimales(parseInt(msg));
				document.getElementById("result").innerHTML= "pi = "+res;
		}