
var mymap = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic3VwZXJwaWthciIsImEiOiI0MGE3NGQ2OWNkMzkyMzFlMzE4OWU5Yjk0ZmYzMGMwOCJ9.3bGFHjoSXB8yVA3KeQoOIw', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


var latitude;
var longitude;
var altitude;
navigator.geolocation.getCurrentPosition(function (position) {
	console.log('ca prend un peu de temps');
    latitude= position.coords.latitude ; 
    longitude= position.coords.longitude;
    altitude= position.coords.altitude;
    console.log(position.coords.latitude, position.coords.longitude, position.coords.altitude);

});

var button = document.getElementById('button');
button.addEventListener('click', function(event){
                console.log("L'événement " + event + " a été déclenché");
                var newView = mymap.setView([latitude, longitude], 13);
                var marker = L.marker([latitude, longitude]).addTo(mymap);
            });
var checkBox = document.getElementById('myCheck');
var divCoords=document.getElementById('coords');

mymap.on('mousemove', addCoordsDiv);
function addCoordsDiv(event){
     if(checkBox.checked == true){
     	var latlong=event.latlng;
     	divCoords.innerHTML = latlong.toString();
     	divCoords.style.display = "block";
     }else{
     	divCoords.innerHTML='';
     }
}




let form=document.getElementById('form');
let recherche=document.getElementById('recherche');
form.addEventListener('submit',onSubmit);

function onSubmit(ev){
	ev.preventDefault();
	let search= recherche.value;
	let url ='http://api-adresse.data.gouv.fr/search/?q='+search;
	fetch(url).then(function(result){
		return result.json()
	}).then(handleJson);
}
markersLayer= L.featureGroup().addTo(mymap);
function handleJson(json){
	 markersLayer.clearLayers();
   for(let i=0;i< json.features.length;i++){
	   	let el=json.features[i];
	   	let coords= el.geometry.coordinates.reverse();
	   	//let popup= el.propreties.label +'/'+ el.properties.context;
	   	//L.marker(coords).bindPopup(popup).addTo(markersLayer);
      L.marker(coords).addTo(markersLayer);
   }
   var bounds = markersLayer.getBounds(); 
   mymap.fitBounds(bounds);
}



