$(document).ready(function() {
  
  $(window).scroll(function () {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    scrollPercent = (s / (d-c)) * 100;
    var position = scrollPercent.toFixed(2);

    $('.progress-bar').width(position + '%');
  });
  
});