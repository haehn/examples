var beerImageTag = "<img src=\"http://www.freestockphotos.biz/pictures/11/11913/beer.png\" height=\"100\">";

/*
JQuery - http://bit.ly/TxePc
If you want an event to work on your page, you should call it inside the $(document).ready() function. Everything inside it will load as soon as the DOM is loaded and before the page contents are loaded.
*/
$(document).ready(function() {
    
  $("#table").droppable({
    drop: function(event, ui) {
      ui.draggable.fadeOut();
      $("#table").removeClass("overDropBox");
    },
    over: function(event, ui){
      $("#table").addClass("overDropBox");
    },
  });
    
  $("#beerButton").on("click", function(e) {
    for (i = 0; i < $("#numberOfBeers").val(); i++) {
      $("#bar ul").append("<li>" + beerImageTag + "</li>");
      $("#barList li").last().draggable();
    }
  });
    
});