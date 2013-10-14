$(document).ready(function(){
  highlightTab();
  setUpProjects();
});

function setUpProjects(){
  var index = getProjectIndexFromUrl();
  $(".project-headers .project-description").eq(index).addClass("selected");
  $(".project-bodies .project-description").eq(index).addClass("selected");
  $('.bxslider').bxSlider({
    preloadImages: 'all', // different sizes
    startSlide: index,
    adaptiveHeight: true,
    slideWidth: 800,
    speed: 500,
    onSlideNext: function(){
      slideWithWrap(true);
    },
    onSlidePrev: function(){
      slideWithWrap(false);
    },
    onSliderLoad: function(){
      $('.bx-pager-item').on("click", function(){
        var index = $(this).index();
        switchToProject(".project-headers .project-description", index);
        switchToProject(".project-bodies .project-description", index);
      });
    }
  });  
}

function switchToProject(selector, index){
  $(selector).each(function(i, elem){
    var next = $(elem);
    if(i === index && !next.hasClass("selected")){
      $(selector + ".selected").fadeOut(150, function(){
        $(this).removeClass("selected");
        next.fadeIn(350, function(){
          $(this).addClass("selected");
        });
      });
    }
  });
}

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
    window.location.hash = newDesc.attr("data-project");
    newDesc.fadeIn(350, function(){
      $(this).addClass("selected");
    })
  });
};

function highlightTab(){
  var special = {'' : 'home'}; // hash of relative path => tab name if different
  var page = window.location.pathname.split('/')[1];
  var id = (special.hasOwnProperty(page) ? special[page] : page);
  $("#nav-" + id).parent().addClass("selected");
};

function getProjectIndexFromUrl(){
  var project = window.location.hash.replace("#", "");
  if(project.length === 0) return 0; // default index
  projectObj = $('.project-description[data-project="' + project + '"]');
  return Math.max(0, projectObj.index()); // returns 0 instead of -1 on not-found
}

function projectsUpdateToUrl(){
  var project = $(".project-headers .project-description.selected").attr("data-project");
}