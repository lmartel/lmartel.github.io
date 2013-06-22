$(document).ready(function(){
  highlightTab();
});

function highlightTab(){
  var special = {'' : 'home'};
  var page = window.location.pathname.split('/')[1];
  var id = (special.hasOwnProperty(page) ? special[page] : page);
  $("#nav-" + id).parent().addClass("selected");
};