var carre = document.getElementById("carre");

function sourisDown(carre){
  var x = carre.clientX;
  var y = carre.clientY;
  carre.value = x + ',' + y;
  console.log('Vous avez cliqué au point de coordonnés: ' + x + ', ' + y );
}

carre.addEventListener('mousedown', (event) => {
  var x = event.x;
  var y = event.y;
  carre.addEventListener('mousemove', (event) => {
    var dX = event.x - x;
    var dY = event.y - y;
    carre.style.left = dX + "px";
    carre.style.top = dY + "px";
  });
  carre.addEventListener('mouseup', (event) => {
    x = event.x;
    y = event.y;
    carre.removeEventListener('mousemove', (event) => {
      var dX = event.x - x;
      var dY = event.y - y;
      carre.style.left = dX + "px";
      carre.style.top = dY + "px";
    })
  })
});
