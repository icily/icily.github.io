$(".other-project").on("click", function () {
  $(".modal-mask").css("display", "none");
  $(".modal-popup").css("display", "none");
	$($(this).parents().children()[1]).toggle();       
	$($(this).parents().children()[2]).toggle();
  
  $(document).keyup(function(e) {
	  if (e.keyCode == 27) {
  		$(".modal-mask").css("display", "none");
	    $(".modal-popup").css("display", "none");
  	}   // esc
	});
});

$(".modal-mask").on("click", function(){
  $(".modal-mask").css("display", "none");
  $(".modal-popup").css("display", "none");
});

$(".close").on("click", function(){
  $(".modal-mask").css("display", "none");
  $(".modal-popup").css("display", "none");
});
