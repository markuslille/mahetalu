window.onload = initMap()

window.onscroll = function(){
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('.header-container').style.opacity = '0' 
  } else {
      document.querySelector('.header-container').style.opacity = '1'
  }
/*   var scrollTop = $window.scrollTop();
  instances.forEach(function(inst){
    inst.update(scrollTop);
  }); */
}
s
function initMap() {
  document.querySelector('.year').innerHTML = `Mahetalu ${new Date().getFullYear()}`;
  const location = {lat: 59.2659 ,lng: 25.1181 }
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: location
  })

  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}


