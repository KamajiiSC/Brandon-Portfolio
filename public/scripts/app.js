$(document).ready(function(){
  //Mouse Over bounce animation
  $(".title-start").mouseenter(() => {
    $(".title-start").stop(true, true).animate({
      'bottom': '+=10px' 
    }, 160);
    $(".title-start").stop(true, true).animate({
      'bottom': '-=10px'
    });
  });
  //Click slide up animation
  $("#title").click(() => {
    $("#title").removeClass(["title-start"]);
    $("#title").animate({
      'bottom': '180px'
    }); 
    $("#title").css("cursor", "default");

    setTimeout(() =>{
      $("#home-container").fadeIn(550);
      $("#home-container").css("display", "flex");
    }, 120);
    
  });

});