define([], function () {
  return {
    // 列表页进详情页渲染：
    renderDetails: function () {
      let sid = location.search.substring(1).split('=')[1];
      $.ajax({
        type: 'get',
        url: 'http://localhost/homework-JS/youyiku/php/getsid.php',
        data: {
          sid: sid
        },
        dataType: 'json'
      }).done(function (data) {
        $('.wrap .left img').attr('src', data.url);
        $('.wrap .center1 img').attr('src', data.url);
        $('.wrap .center2 img').attr('src', data.url);
        $('.wrap .right .goods-title').html(data.title);
        $('.wrap .right .goods .goods-price1').html('¥' + data.price);
        $('.wrap .right .goods .goods-price3').html('¥' + data.price);
        $('.wrap .right .color li img').eq(0).attr('src', data.color1);
        $('.wrap .right .color li img').eq(1).attr('src', data.color2);
        $('.wrap .right .color li img').eq(2).attr('src', data.color3);
        $('.wrap .right .color li img').eq(3).attr('src', data.color4);
        $('.wrap .right .color li img').eq(4).attr('src', data.color5);
        $('.wrap .right .color li img').eq(5).attr('src', data.color6);
      });
    },

    // 点击添加数量：
    goodsNumber: function () {
      let $btn = $('.wrap .right .number button');
      let $number = $('#count').val();
      $btn.eq(1).on('click', function () {
        $number++;
        $('#count').val($number);
        if ($number < 0) {
          $number = 0;
          $('#count').val($number);
        }
      });
      $btn.eq(0).on('click', function () {
        $number--;
        $('#count').val($number);
        if ($number < 0) {
          $number = 0;
          $('#count').val($number);
        }
      });
    },

    // 放大镜效果:
    bigGlass: function () {
      class Scale {
        constructor() {
          this.center1 = $('.wrap .center1');
          this.smallpic = $('.wrap .center1 img');
          this.bigpic = $('.wrap .center2 img');
          this.smallbox = $('.wrap .center1 .smallbox');
          this.bigbox = $('.wrap .center2');
          this.uparrow = $('.wrap .left .icon-up3');
          this.downarrow = $('.wrap .left .icon-aroow');
          this.leftarrow = $('.wrap .leftarrow');
          this.rightarrow = $('.wrap .rightarrow');
          this.len = 0;
        }
        init() {
          this.center1.hover(() => {
            this.smallbox.css('visibility', 'visible');
            this.bigbox.css('visibility', 'visible');
            this.smallbox.width(this.center1.width() * this.bigbox.width() / this.bigpic.width());
            this.smallbox.height(this.center1.height() * this.bigbox.height() / this.bigpic.height());
            this.bili = this.bigpic.width() / this.center1.width();
            this.center1.on('mousemove', (ev) => {
              let $left = ev.pageX - this.center1.offset().left - this.smallbox.width() / 2;
              let $top = ev.pageY - this.center1.offset().top - this.smallbox.height() / 2;
              if ($left <= 0) {
                $left = 0;
              } else if ($left >= this.center1.width() - this.smallbox.width()) {
                $left = this.center1.width() - this.smallbox.width()
              };
              if ($top <= 0) {
                $top = 0;
              } else if ($top >= this.center1.height() - this.smallbox.height()) {
                $top = this.center1.height() - this.smallbox.height()
              };
              this.smallbox.css({
                left: $left,
                top: $top
              })
              this.bigpic.css({
                left: -this.bili * $left,
                top: -this.bili * $top
              })
            })
          }, () => {
            this.smallbox.css('visibility', 'hidden');
            this.bigbox.css('visibility', 'hidden');
          })
        }
      }
      new Scale().init();
    },

    // 添加至购物车：
    shopping: function () {
      let sid = location.search.substring(1).split('=')[1];
      let arrsid = [];
      let arrnum = [];
      function cookietoarray() {
        if ($.cookie('cookiesid') && $.cookie('cookienum')) {
          arrsid = $.cookie('cookiesid').split(',');
          arrnum = $.cookie('cookienum').split(',');
        } else {
          arrsid = [];
          arrnum = [];
        }
      }
      $('.wrap .right .buy button').eq(1).on('click', function () {''
        cookietoarray();
        if ($.inArray(sid, arrsid) === -1) {
          arrsid.push(sid);
          arrnum.push($('#count').val());
          $.cookie('cookiesid', arrsid, {
            expires: 7,
            path: '/'
          });
          $.cookie('cookienum', arrnum, {
            expires: 7,
            path: '/'
          });
        } else {
          arrnum[$.inArray(sid, arrsid)] = parseInt(arrnum[$.inArray(sid, arrsid)]) + parseInt($('#count').val());
          $.cookie('cookienum',arrnum,{
            expires:7,
            path:'/'
          });
        }
        alert('已将当前商品添加至购物车');
      })
    }
  }
});