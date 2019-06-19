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

// Make the DIV element draggable:
dragElement(document.getElementById("overlay"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}