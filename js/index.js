$(".other-project").on("click", function () {
  $(".modal-mask").css("display", "none");
  $(".modal-popup").css("display", "none");
//  $($(this).parents().children()[1]).toggle();       
//  $($(this).parents().children()[2]).toggle();
  $($(this).next()).toggle();
  $($(this).next().children(".modal-popup")).toggle();
  
  $(document).keyup(function(e) {
    console.log("esc");
    if (e.keyCode == 27) {
      $(".modal-mask").css("display", "none");
      $(".modal-popup").css("display", "none");
  	}   // esc
  });
  
  $(document).click(function(event) {
    if (!$(event.target).closest(".modal-popup,.other-project").length) {
      $(".modal-mask").css("display", "none");
      $(".modal-popup").css("display", "none");
    }
  });
});


$(".close").on("click", function(){
  $(".modal-mask").css("display", "none");
  $(".modal-popup").css("display", "none");
});

//$(".modal-mask").on("click", function(){
//  $(".modal-mask").css("display", "none");
//  $(".modal-popup").css("display", "none");
//});