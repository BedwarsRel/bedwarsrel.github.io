$(document).ready(function(){
  $("#preloader").load('inc/preloader.html');
  $("header").load('inc/header.html', function() {
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();
  });
});
$(window).load(function(){
  $(".preloader-wrapper").delay(500).fadeOut();
  $("#preloader").delay(1000).fadeOut("slow");
})