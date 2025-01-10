// スワイパー
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
});

$(function () {
  const height = $(".js-header").height();
  $("main").css("margin-top", height);

  const headerHeight = $(".js-header").height();

  // ハンバーガーメニューのクリック処理
  $(".js-hamburger").click(function () {
    const isActive = $(this).hasClass("is-active");
    $(this).toggleClass("is-active");
    $(".drawer-menu").fadeToggle();

    // スクロールの制御
    $("body").css("overflow", isActive ? "auto" : "hidden");
  });

  // ドロワーメニューのリンククリック時の処理
  $('.drawer-menu a[href^="#"]').click(function () {
    const speed = 600;
    const href = $(this).attr("href");
    const target = (href === "#" || href === "") ? "html" : href;

    // ヘッダーの高さ分下げる
    const position = $(target).offset().top - headerHeight;
    
    $('.drawer-menu').fadeOut();
    $(".js-hamburger").removeClass("is-active"); // ハンバーガーを元に戻す
    $("body").css("overflow", "auto"); // スクロールを有効にする

    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // 背景クリック時の処理
  $(document).click(function (event) {
    if (!$(event.target).closest('.drawer-menu, .js-hamburger').length) {
      $(".drawer-menu").fadeOut();
      $(".js-hamburger").removeClass("is-active"); // ハンバーガーを元に戻す
      $("body").css("overflow", "auto"); // スクロールを有効にする
    }
  });
});


// メニューバーメインビュー過ぎたら背景白
$(function () {
  $(window).on('scroll' , function () {
    if ($('.mv, .contact-mv').height() < $(this).scrollTop()) {
      $('.js-header').addClass('change-color');
    } else {
      $('.js-header').removeClass('change-color');
    }
  });
});

// トップに戻るボタン
jQuery(window).on('scroll', function() {　//スクロールイベントを宣言
  if ( 300 < jQuery(this).scrollTop()) {　//thisはwindowの事
    jQuery('.back-to-top').addClass('is-show');　//to-topはHTMLのクラス名
  } else {
    jQuery('.back-to-top').removeClass('is-show');
  }
});
