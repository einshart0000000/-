$(function(){
  //통합검색
  $('#btn-search-toggle').on('click',function(e){
    e.preventDefault();
    //클릭할 때마다 검색어 초기화
    $('#search').val('');
    $(this).toggleClass('fa-search fa-close');
    //보여주기/숨기기
    $('.search-form').toggle();
  })

  //네비게이션
  $('.gnb-nav').on('mouseenter',function(){
    $('.gnb-nav ul ul, .sub-bg').show();
  }).on('mouseleave',function(){
    $('.gnb-nav ul ul, .sub-bg').hide();
  });

  var swiper = new Swiper('.swiper-container',{
    navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    }
  });

  //공지사항 롤링
  notice=setInterval(noticeRolling,4000);
  function noticeRolling(){
    $('.notice li').first().slideUp(function(){
      $(this).appendTo($('.notice ul')).slideDown();
    })
  }

  //드롭다운메뉴
  $('.drop-down > a').on('click',function(e){
    e.preventDefault();
    $(this).next().stop().slideToggle();
  });

  $('.drop-down ul a').on('click',function(e){
    e.preventDefault();
    var value=$(this).text();
    $(this).parents('.drop-down').children('a').text(value);
    $(this).parents('ul').slideUp();
  });
})
