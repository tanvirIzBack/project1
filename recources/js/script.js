
$(document).ready(function(){
      $('#vvv').click(function(){
        $('#menubar').css({'height' : '100%'})
      });
      $('#clos, .menu-item ul li a').click(function(){
        $('#menubar').css({'height' : '0%'})
      });
});
$(function(){
  $('.menu-item ul li a').on('click', function(){
    $('html,body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1100);
    return false;
  });
});
