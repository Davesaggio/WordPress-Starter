$(document).ready(function () {

  if($('#filiale_mappa').length>0) {
    initMapFiliale();
  }

  $('#filiale-master-form').on({
    submit:function(e) {
      e.preventDefault();
    }
  });

});

/**
* FILIALE SEARCH MAPPA INIT
*/

var map;
var myLatLng;
var mapZoom = 5;
function initMapFiliale() {

  // init mappa
  myLatlng = new google.maps.LatLng(42.9167439,13.1871693);
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
  map = new google.maps.Map(document.getElementById('filiale_mappa'),mapOptions);

  // posiziono i marker
  var markers = [];
  for (var i = 0; i < filiale_markers.length; i++) {
      markers[i] = new google.maps.Marker({
        position: new google.maps.LatLng(filiale_markers[i].Lat,filiale_markers[i].Lng),
        icon: new google.maps.MarkerImage(theme_url + 'img/tourpmi/placeholder.png', null, null, null, new google.maps.Size(40,44)),
        draggable: false,
        map: map
      });

      // aggiungo i dati al marker
      enrichMarker(markers[i],filiale_markers[i]);
  }

  // carica altre location zoomando out
  $('#loadMoreLocations').on({
    click:function(e) {
      e.preventDefault();
      map.setZoom( Math.max(5, map.getZoom()-1) );

      google.maps.event.trigger(map, 'bounds_changed');
    }
  });



  // carico il marker con i dati extra
  function enrichMarker(marker,data) {
    var $extradata = $('.filiale_mappa_extradata');
    var $mappa_uri = $extradata.find('.filiale_mappa_extradata_uri');

    // va alla filiale
    marker.addListener('click', function() {
        window.location.href = data.mappa_uri;
    });




    var mapupdater;
    function mapSettleTime() {
     clearTimeout(mapupdater);
     mapupdater=setTimeout(getMapMarkers,100);
    }



   function getMapMarkers() {
     showList = [];
     for (var i=0; i<markers.length; i++){
         if( map.getBounds().contains(markers[i].getPosition()) ){
           showList.push(filiale_markers[i].id);
         }
     }




     // dopo tot aggiorna la vista filiali
     var showTimeout = setTimeout(function(){
       clearTimeout(showTimeout);

       $('.item_filiale').not('.locked').removeClass('in');

       for (showElement in showList) {
         $('.item_filiale[data-id='+showList[showElement]+']').not('.locked').addClass('in');
       }
     },100);
   }





    // verifico il cambio di bound mappa e ricavo elenco marker dentro il bound
    var showTimeout;
    var showList
    map.addListener('bounds_changed', mapSettleTime);

    google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
        //this part runs when the mapobject is created and rendered
        $('.item_filiale.locked').removeClass('locked'); // sblocco le location
        $('.item_filiale:lt(4)').addClass('in'); // ne mostro solo 4
        google.maps.event.addListenerOnce(map, 'tilesloaded', function(){

        });
    });

} // end init

// SEARCH INPUT: geosearchinput
(function(){
  var options = {
   // types: ['(geocodes)'],
   componentRestrictions: {country: "it"}
  };
  var input = $('#geosearchinput')[0];
  var searchBox = new google.maps.places.Autocomplete(input,options);
  // searchBox.bindTo('place', map);
  // var searchBox = new google.maps.places.SearchBox(input,options);
  google.maps.event.addListener(searchBox, 'place_changed', function () {
       var place = searchBox.getPlace();
       var centerPlace = new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng());
       map.setCenter(centerPlace);
       map.setZoom(8);
   });
})();


  /*
  // SEARCH INPUT: CITIES
  (function(){
    var options = {
     types: ['(cities)'],
     componentRestrictions: {country: "it"}
    };
    var input = $('#city')[0];
    var searchBox = new google.maps.places.Autocomplete(input,options);
    searchBox.bindTo('place', map);
    // var searchBox = new google.maps.places.SearchBox(input,options);
    google.maps.event.addListener(searchBox, 'place_changed', function () {
         var place = searchBox.getPlace();
         var centerPlace = new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng());
         map.setCenter(centerPlace);
         map.setZoom(8);
     });
  })();
  */

  /*
  // SEARCH INPUT: CAP
  (function(){
    var options = {
     // types: ['(geocodes)'],
     componentRestrictions: {country: "it"}
    };
    var input = $('#cap')[0];
    var searchBox = new google.maps.places.Autocomplete(input,options);
    searchBox.bindTo('place', map);
    // var searchBox = new google.maps.places.SearchBox(input,options);
    google.maps.event.addListener(searchBox, 'place_changed', function () {
         var place = searchBox.getPlace();
         var centerPlace = new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng());
         map.setCenter(centerPlace);
         map.setZoom(8);
     });
  })();
  */

  /*
  // SEARCH INPUT: GPS
  $('#getMyGPS').on({
    click:function(e) {
      e.preventDefault();
      getMyGPS();
    }
  });

  function getMyGPS() {
    navigator.geolocation.getCurrentPosition(function(location) {
      console.log(location.coords.latitude);
      console.log(location.coords.longitude);
      console.log(location.coords.accuracy);
    });

     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
        map.setZoom(8);
      });
     }
  }
  */
}
