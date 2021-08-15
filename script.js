
function homeList2() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('homeList').classList.toggle('in');
  }
  document.getElementById('homeList2').addEventListener('click' , function () {
  homeList2();
} );



$(function() {
  $('#homeImage').hide().fadeIn(1500);
  $('.concept1').hide().fadeIn(2500);
  $('.concept2').hide().fadeIn(2500);

  var hd_size = $('#homeLogo').innerHeight(30); //ヘッダーの高さ
  var pos = 0;
  
  $(window).on('scroll', function () {
    var current_pos = $(this).scrollTop(); //現在の位置を取得
    if (current_pos == 0) {  // 最上部
      $('#homeLogo').css({ 'top': 0 }).hide().fadeIn(500); 
    } else {
      $('#homeLogo').css({ 'top': '-' + hd_size + 'px' }).fadeOut(500);
    }
  });
});

  $(function (){
    $(window).on("scroll", function(){
      let trigger = $('.jsTrigger');

      $(trigger).each(function(){
        let scroll = $(window).scrollTop();//スクロール量を取得
        let windowHeight = $(window).height();//画面の高さを取得
        let triggerTop = $(this).offset().top;//要素のy座標を取得、画面上（document内）に配置したHTML要素の表示位置を座標で取得できるメソッド

        if(scroll > triggerTop - windowHeight / 1.5){   
          $(this).addClass("isShow");
        };
      })
  })
});

$(function (){
  $(window).on("scroll", function(){
    let trigger = $('.jsTrigger2');

    $(trigger).each(function(){
      let scroll = $(window).scrollTop();//スクロール量を取得
      let windowHeight = $(window).height();//画面の高さを取得
      let triggerTop = $(this).offset().top;//要素のy座標を取得、画面上（document内）に配置したHTML要素の表示位置を座標で取得できるメソッド

      if(scroll > triggerTop - windowHeight / 1.1 ){   
        $(this).addClass("isShow2");
      };
    })
})
});

//メニューの画像を動かす
jQuery(function ($) {
  var fadeIn = $('.fadeIn');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scrollIn");
      }
    });
  });
});