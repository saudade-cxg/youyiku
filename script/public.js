define([], function () {
  return {
    // 1.导航悬浮：
    navSuspension: function () {
      let $nav = $('.nav');
      let $logo = $('.nav .logo');
      // 刷新页面，继续悬浮
      if ($(window).scrollTop() > 70) {
        $nav.css({
          'position': 'fixed',
          'top': '0px',
          'left': '34.5px',
          'box-shadow': ' 0 3px 5px rgba(4, 0, 0, .22)',
          'z-index': '10'
        })
        $logo.show();
      } else {
        $nav.css({
          'position': 'relative',
          'left': '0px',
          'box-shadow': 'none',
          'z-index': '0'
        });
        $logo.hide();
      }
      // 滑动滚轮，实现悬浮
      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
          $nav.css({
            'position': 'fixed',
            'top': '0px',
            'left': '34.5px',
            'box-shadow': ' 0 3px 5px rgba(4, 0, 0, .22)',
            'z-index': '10'
          })
          $logo.show();
        } else {
          $nav.css({
            'position': 'relative',
            'left': '0px',
            'box-shadow': 'none',
            'z-index': '0'
          });
          $logo.hide();
        }
      })
    },

    // 2.回到顶部：
    toTop: function () {
      let $toTop = $('.top');
      if ($(window).scrollTop() > 550) {
        $toTop.show()
      } else {
        $toTop.hide();
      }
      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 550) {
          $toTop.show()
        } else {
          $toTop.hide();
        }
      })
      $toTop.on('click', function () {
        $('html,body').animate({
          scrollTop: 0
        })
      });
    },

    // 3.楼梯效果：
    stairs: function () {
      let $louti = $('.sexing ul li');
      let $louceng = $('.type-clothes');
      $louti.on('click', function () {
        let $topValue = $louceng.eq($(this).index()).offset().top;
        $('html,body').animate({
          scrollTop: $topValue - 140 + 'px'
        })
      })
    },

    // 4.二级导航菜单效果：
    navMenu: function () {
      let $menubg = $('.menubg');
      let $menu = $('.menu');
      let $sexLi = $('.sex ul li');
      let $jiantou = $('.menu .jiantou')
      let $del = $('.del')
      $sexLi.on('click', function () {
        $menubg.show();
        $(this).addClass('active').siblings('li').removeClass('active');
        $jiantou.eq($(this).index()).show().siblings('.jiantou').hide();
        $menu.eq($(this).index()).show().siblings('.menu').hide();
        $del.on('click', function () {
          $menubg.hide();
          $menu.hide();
          $jiantou.hide();
          $sexLi.removeClass('active');
        })
        $(window).on('scroll', function () {
          $menubg.hide();
          $menu.hide();
          $jiantou.hide();
          $sexLi.removeClass('active');
        })
      })
    },
  }
});