$(document).ready(function () {


  /**
  * ENQUIRE centra mappa
  */

  // cambia centro all'avvio di $ per usare $ enquire
  if(map && myLatlng && mapZoom) {
    enquire.register("screen and (min-width:100px) and (max-width:767px)", {
      match: function() {setMap100();}
    });
    function setMap100() {
      map.setCenter(myLatlng);
      map.setZoom(mapZoom-2);
    }
    /* ########################### */
    enquire.register("screen and (min-width:768px) and (max-width:991px)", {
      match: function() {setMap768();}
    });
    function setMap768() {
      map.setCenter(myLatlng);
      map.setZoom(mapZoom);
    }
    /* ########################### */
    enquire.register("screen and (min-width:992px) and (max-width:1199px)", {
      match: function() {setMap992();}
    });
    function setMap992() {
      map.setCenter(myLatlng);
      map.setZoom(mapZoom);
    }
    /* ########################### */
    enquire.register("screen and (min-width:1200px)", {
      match: function() {setMap1200();}
    });
    function setMap1200() {
      map.setCenter(myLatlng);
      map.setZoom(mapZoom);
    }
  } // map
  /* ########################### */

});
