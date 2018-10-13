$(window).resize(function () {
    var winH   = $(window).height(),
    navH = $(".navbar").innerHeight();
    $(".slide,.carousel-item").height(winH -(navH));
   });
   $('.work').click(function(){
    $('html,body').animate({
      scrollTop: $('#work').offset().top
    },2000);
  }); 
  $('.blog').click(function(){
    $('html,body').animate({
      scrollTop: $('#blog').offset().top
    },2000);
  });
  $('.contact').click(function(){
    $('html,body').animate({
      scrollTop: $('#contact').offset().top
    },2000);
  });

$(function(){
    $('.featured_work  ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('filter')=== 'all'){
            $('.featured_work-img .col-sm').show();
        }
        else {
          $('.featured_work-img .col-sm').hide();
          var selector = $(this).data('filter');
          $('.'+selector).show();
        }
      });
      
});

/*
$('.featured_work ul li').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
  var selector = $(this).data('filter');
  if($(this).data('filter') == 'all'){
      $('.featured_work-img').hasClass('show-all');
      $('.featured_work-img > div').show();
  } else {
      if($('.featured_work-img').hasClass('show-all')) {
          $('.featured_work-img > div:not('+selector+')').hide();
          $('.featured_work-img').removeClass('show-all');
      } else {
          $('.featured_work-img >div >div').hide();
          $('.'+selector).show();
      }
  }
});
*/