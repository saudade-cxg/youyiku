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

    }
  }
});