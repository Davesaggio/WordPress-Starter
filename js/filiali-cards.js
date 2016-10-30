$(document).ready(function () {

  /**
  * LISTA FILIALI
  * matchHeight
  */
  $(function() {
    $('.item_filiale').matchHeight({
      byRow: false,
      property: 'height',
      target: null,
      remove: false
    });
  });

});
