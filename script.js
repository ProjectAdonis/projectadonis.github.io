$(document).ready( function() {
  $('.page').scroll( function (){
    if ($(window).width() < 378) {
      $('.nav').css("background-color","rgba(243,191,2,0.98)");
      $('.nav').css("border-bottom","1px solid #f3bf02");
      return;
    }
    if ($(this).scrollTop() > 70) {
      $('.nav').css("background-color","rgba(243,191,2,0.98)");
      $('.nav').css("border-bottom","1px solid #f3bf02");
    } else {
      $('.nav').css("background-color","transparent");
      $('.nav').css("border-bottom","none");
    }
    if ($(this).scrollTop() > 340) {
      $('.button-nav-cta').css("display","block");
      $(".button-nav-cta").removeClass("anim_fadeInLeft");
      $(".button-nav-cta").addClass("anim_fadeInRight");
    } else {
      $('.button-nav-cta').css("display","none");
      $(".button-nav-cta").removeClass("anim_fadeInLeft");
      $(".button-nav-cta").addClass("anim_fadeInRight");
    }
  });
  
  $('#scrollup').on('click', function () {
    $('.page').animate({ scrollTop: 0 }, 800);
  });
  
  $('.page').animate({ scrollTop: 2200 }, 0).animate({ scrollTop: 0 }, 4000);
});

function jump(h){
  var container = $('.page'), scrollTo = $('#'+h);
  container.animate({ scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 70 }, 800);
}

var $bg = $('body');

  const checkbox = document.getElementById("checkbox");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      $bg.css({ 'background': '#41424C' });
    } else {
      $bg.css({ 'background': '#FFFBE9' });
    }
  });