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
    },

    // 渲染楼层女装：
    renderWomen: function () {
      let $goodsList = $('.type-clothes-women');
      $.ajax({
        url: 'http://10.31.163.14/homework-JS/youyiku/php/indexdata.php',
        dataType: 'json',
      }).done(function (data) {
        let strhtml = '<ul>';
        $.each(data.api1, function (index, value) {
          strhtml += `
          <li>
            <div class="logo">
              <img src="${value.active}" alt="">
            </div>
            <div class="pic">
              <a href="details.html">
                <img data-original="${value.url}" class="lazy" width="212" height="222"/></a>
            </div>
            <ol>
              <li>
                <img src="${value.color1}" alt="">
              </li>
              <li>
                <img src="${value.color2}" alt="">
              </li>
              <li>
                <img src="${value.color3}" alt="">
              </li>
              <li>
                <img src="${value.color4}" alt="">
              </li>
              <li>
                <img src="${value.color5}" alt="">
              </li>
              <li>
                <img src="${value.color6}" alt="">
              </li>
            </ol>
            <p class="type">${value.title1}<span class="size">${value.size}XL</span></p>
            <p class="clothes">${value.title2}</p>
            <p class="price">${value.price}</p>
            <div class="star">
              <span class="iconfont icon-wujiaoxing"></span>
              <span class="iconfont icon-wujiaoxing"></span>
              <span class="iconfont icon-wujiaoxing"></span>
              <span class="iconfont icon-wujiaoxing"></span>
              <span class="iconfont icon-wujiaoxing"></span>
              <span>(${value.sailnumber})</span>
            </div>
          </li>
          `
        });
        strhtml += '</ul>';
        $goodsList.html(strhtml);
        // 添加懒加载：
        $(function () {
          $("img.lazy").lazyload({ effect: "fadeIn" });
        });
      });
    },

    // 渲染楼层男装：
    renderMan: function () {
      let $goodsList = $('.type-clothes-man');
      $.ajax({
        url: 'http://10.31.163.14/homework-JS/youyiku/php/indexdata.php',
        dataType: 'json',
      }).done(function (data) {
        let strhtml = '<ul>';
        $.each(data.api2, function (index, value) {
          strhtml += `
          <li>
            <div class="logo">
              <img src="${value.active}" alt="">
            </div>
            <div class="pic">
              <a href="details.html">
                <img data-original="${value.url}" class="lazy" width="212" height="222"/></a>
            </div>
            <ol>
              <li>
                <img src="${value.color1}" alt="">
              </li>
              <li>
                <img src="${value.color2}" alt="">
              </li>
              <li>
                <img src="${value.color3}" alt="">
              </li>
              <li>
                <img src="${value.color4}" alt="">
              </li>
              <li>
                <img src="${value.color5}" alt="">
              </li>
              <li>
                <img src="${value.color6}" alt="">
              </li>
            </ol>
            <p class="type">${value.title1}<span class="size">${value.size}XL</span></p>
            <p class="clothes">${value.title2}</p>
            <p class="price">${value.price}</p>
            <div class="star">
              <span class="iconfont icon-wujiaoxing"></span>
              <span class="iconfont icon-wujiaoxing"></span>
              <span class="iconfont icon-wujiaoxing"></span>
              <span class="iconfont icon-wujiaoxing"></span>
              <span class="iconfont icon-wujiaoxing"></span>
              <span>(${value.sailnumber})</span>
            </div>
          </li>
          `
        });
        strhtml += '</ul>';
        $goodsList.html(strhtml);
        // 添加懒加载：
        $(function () {
          $("img.lazy").lazyload({ effect: "fadeIn" });
        });
      });
    }
  }
});