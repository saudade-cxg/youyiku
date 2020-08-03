define([], function () {
  return {
    // 通知栏轮播图：
    noticeBanner: function () {
      let $left = $('.notice .left');
      let $right = $('.notice .right');
      let $picList = $('.notice .banner ul li');
      let $uList = $('.notice .banner ul');
      let $liWidth = $picList.eq(0).width();
      let index = 0;
      let timer = null;
      let $notice = $('.notice');
      // 点击右箭头
      $right.on('click', function () {
        tabSwitch();
      });
      // 点击左箭头
      $left.on('click', function () {
        index -= 2;
        tabSwitch();
      });
      // 自动轮播
      timer = setInterval(function () {
        $right.click();
      }, 3000);
      // 鼠标移入暂停轮播，移出自动轮播
      $notice.hover(function () {
        clearTimeout(timer);
      }, function () {
        timer = setInterval(function () {
          $right.click();
        }, 3000);
      });
      // 轮播：
      function tabSwitch() {
        index++;
        if (index === $picList.length) {
          $uList.css('left', '0px');
          index = 1;
        }
        if (index === -1) {
          $uList.css('left', -$liWidth * ($picList.length - 1));
          index = $picList.length - 2;
        }
        $uList.stop(true).animate({
          left: -$liWidth * index
        })
      };
    },

    // 商品栏轮播：
    goodsBanner: function () {
      let $goods = $('.goods-banner .goods');
      let $uList = $('.goods-banner .goods ul');
      let $picList = $('.goods-banner .goods ul li');
      let $left = $('.goods-banner .left');
      let $right = $('.goods-banner .right');
      let $btnList = $('.goods-banner ol li');
      let index = 0;
      let timer = null;
      let $liWidth = $picList.eq(0).width();
      // 点击圆圈按钮
      $btnList.on('click', function () {
        index = $(this).index() - 1;
        tabSwitch();
      });
      // 点击右箭头
      $right.on('click', function () {
        tabSwitch();
      });
      // 点击左箭头
      $left.on('click', function () {
        index -= 2;
        tabSwitch();
      });
      // 自动轮播
      timer = setInterval(function () {
        $right.click();
      }, 3000);
      // 鼠标移入暂停轮播，移出自动轮播
      $goods.hover(function () {
        clearTimeout(timer);
      }, function () {
        timer = setInterval(function () {
          $right.click();
        }, 3000);
      });
      // 轮播：
      function tabSwitch() {
        index++;
        if (index === $picList.length) {
          $uList.css('left', '0px');
          index = 1;
        };
        if (index === -1) {
          $uList.css('left', -$liWidth * ($picList.length - 1));
          index = $picList.length - 2;
        };
        // 被点击的小圆圈属性
        if (index === $btnList.length) {
          $btnList.eq(0).addClass('active').siblings('ol li').removeClass('active');
        } else {
          $btnList.eq(index).addClass('active').siblings('ol li').removeClass('active');
        };
        $uList.stop(true).animate({
          left: -$liWidth * index
        });
      };
    }
  }
});