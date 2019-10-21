//Creer le tableau des prénoms
    	let tab = ["Amina", "Camden", "Theodore", "Amos", "Alice", "Kathleen", "Kuame", "Martin", "Omar", "Sloane"];
  		//tableau des prénoms commenÇant par la lettre a
    	var tab2=[];

    	// Fonction qui rempli le tab2 par les prénoms souhaités
    	function CreateTab(){
        	tab.forEach(function(elmnt){
			    if (elmnt.substring(0,1)=='A'){
                     tab2.push(elmnt);
			    }
			});
    	}
    	CreateTab();
    	//le nombre de collonnes de tab2
    	var nbrColoumn = tab2.length;
    	//Créer et Tracer le tab2 
    	function makeTable(nbrColoumn) {
	        var out="<table border='1' >\n \t <tr> \n";
	            for(var j=0;j<nbrColoumn;j++){
	                out+="\t \t <td> " + tab2[j] + "</td> \n";
	            }
	        return out+="\t </tr>\n </table>";
        }
        //Ajouter le tab2 à la div d'html
        var button = document.getElementById("button"); 
			button.addEventListener("click", function(event){
			    console.log("L'événement " + event + " a été déclenché");
			    document.querySelector("#tab").innerHTML = makeTable(nbrColoumn);
			});
        
    	//afficher tab2 à la console
    	console.log(tab2);