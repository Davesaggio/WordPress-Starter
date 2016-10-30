$(document).ready(function () {

  if($('#tourpmi_mappa').length>0) {
    initMap();
  }

});

/**
* TOURPMI MAPPA INIT
*/

var map;
var myLatLng;
var mapZoom = 6;
function initMap() {

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
  map = new google.maps.Map(document.getElementById('tourpmi_mappa'),mapOptions);

  // posiziono i marker
  var markers = [];
  for (var i = 0; i < tourpmi_markers.length; i++) {
    markers[i] = new google.maps.Marker({
      position: new google.maps.LatLng(tourpmi_markers[i].Lat,tourpmi_markers[i].Lng),
      icon: new google.maps.MarkerImage(theme_url + 'img/tourpmi/placeholder.png', null, null, null, new google.maps.Size(40,44)),
      draggable: false,
      map: map
    });

    // aggiungo i dati al marker
    enrichMarker(markers[i],tourpmi_markers[i]);
  }

  // carico il marker con i dati extra
  function enrichMarker(marker,data) {

    var selectedMarker = new google.maps.MarkerImage(theme_url + 'img/tourpmi/placeholder_selected.png', null, null, null, new google.maps.Size(70,77));
    var defaultMarker = new google.maps.MarkerImage(theme_url + 'img/tourpmi/placeholder.png', null, null, null, new google.maps.Size(40,44));

    var $extradata = $('.tourpmi_mappa_extradata');
    var $mappa_title = $extradata.find('.tourpmi_mappa_extradata_title');
    var $mappa_description = $extradata.find('.tourpmi_mappa_extradata_description');
    var $mappa_foto = $extradata.find('.tourpmi_mappa_extradata_foto');
    var $mappa_uri = $extradata.find('.tourpmi_mappa_extradata_uri');
    marker.addListener('click', function(e) {
      // popolo il box
      if($extradata.hasClass('animated')) {
        $extradata.addClass('pulse');
      } else {
        $extradata.addClass('animated in slideInRight');
      }


      for (var i = 0; i < tourpmi_markers.length; i++) {
        markers[i].setIcon(defaultMarker);
      }
      marker.setIcon(selectedMarker);

      $mappa_title.text(data.mappa_title);
      $mappa_description.text(data.mappa_description);
      $mappa_foto.css({backgroundImage:'url(' + data.mappa_foto + ')'});
      $mappa_uri.attr('href',data.mappa_uri);

      setTimeout("$('.tourpmi_mappa_extradata').removeClass('pulse slideInRight')",1000);
    });
  }

}
