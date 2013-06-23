$(document).ready(function(){
  highlightTab();
  $('.bxslider').bxSlider({
    preloadImages: 'all', // different sizes
    adaptiveHeight: true,
    slideWidth: 800,
    speed: 500,
    onSlideNext: function(){
      slideWithWrap(true);
    },
    onSlidePrev: function(){
      slideWithWrap(false);
    },
  });
});

function slideWithWrap(forward){
  $(".project-description.selected").fadeOut(150, function(){
    $(this).removeClass("selected");

    var newDesc;
    if(forward){
      newDesc = $(this).next(".project-description");
      if(newDesc.size() === 0) newDesc = $(this).parent().find(".project-description").first();
    } else {
      newDesc = $(this).prev(".project-description");
      if(newDesc.size() === 0) newDesc = $(this).parent().find(".project-description").last();
    }
    newDesc.fadeIn(350, function(){
      $(this).addClass("selected");
    })
  });
};

function highlightTab(){
  var special = {'' : 'home'};
  var page = window.location.pathname.split('/')[1];
  var id = (special.hasOwnProperty(page) ? special[page] : page);
  $("#nav-" + id).parent().addClass("selected");
};