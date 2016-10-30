$(document).ready(function () {

  if($('#filiale_detail_mappa').length>0) {
    initMapFilialeDetail();
  }

});

/**
* FILIALE SEARCH MAPPA INIT
*/
var map;
var myLatLng;
var mapZoom = 17;
function initMapFilialeDetail() {

  // init mappa
  myLatlng = new google.maps.LatLng(41.9167439,14.1871693);
  var mapOptions = {
    zoom: mapZoom,
    center: myLatlng,
    mapTypeId: 'roadmap',
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    scrollwheel: false
  };
  map = new google.maps.Map(document.getElementById('filiale_detail_mappa'),mapOptions);

  // posiziono i marker
  var markers = [];
  for (var i = 0; i < filiale_detail_markers.length; i++) {
    markers[i] = new google.maps.Marker({
      position: new google.maps.LatLng(filiale_detail_markers[i].Lat,filiale_detail_markers[i].Lng),
      icon: new google.maps.MarkerImage(theme_url + 'img/tourpmi/placeholder.png', null, null, null, new google.maps.Size(40,44)),
      draggable: false,
      map: map
    });

    // aggiungo i dati al marker
    enrichMarker(markers[i],filiale_detail_markers[i]);

    // centro la mappa
    myLatlng = new google.maps.LatLng(filiale_detail_markers[i].Lat,filiale_detail_markers[i].Lng)

  }

  // carico il marker con i dati extra
  function enrichMarker(marker,data) {
    var $extradata = $('.filiale_detail_mappa_extradata');
    var $mappa_uri = $extradata.find('.filiale_detail_mappa_extradata_uri');

  }

}
