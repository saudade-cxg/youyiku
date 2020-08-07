define([], function () {
  return {
    // 购物车的渲染：
    shopping: function () {
      // 获取cookie
      if ($.cookie('cookiesid') && $.cookie('cookienum')) {
        // 商品若存在，显示购物车列表
        $('.nocar').css('display', 'none');
        $('.cartop').css('display', 'block');
        $('.carbottom').css('display', 'block');
        $('.pay').css('display', 'block');
        arrsid = $.cookie('cookiesid').split(',');
        arrnum = $.cookie('cookienum').split(',');
        for (let i = 0; i < arrsid.length; i++) {
          rendercart(arrsid[i], arrnum[i]);
        }
      } else {
        // 商品不存在，显示无购物车列表
        $('.nocar').css('display', 'block');
        $('.cartop').css('display', 'none');
        $('.carbottom').css('display', 'none');
        $('.pay').css('display', 'none');
      }
      // 商品存在，获取数据，渲染购物车列表
      function rendercart(sid, num) {
        $.ajax({
          url: 'http://10.31.163.14/homework-JS/youyiku/php/listdata.php',
          data: {
            sid: sid,
            num: num
          },
          dataType: 'json'
        }).done(function (data) {
          let $strhtml = '';
          $.each(data, function (index, value) {
            if (value.sid == sid) {
              $strhtml += `
              <table>             
                <tr class="shoplist">
                  <td width="40">
                    <input type="checkbox" class="input2 singleselect" >
                  </td>
                  <td class="way" width="120">
                    <p class="color">修改配送方式</p>
                  </td>
                  <td class="info" width="370">
                    <img src="${value.url}">
                    <a href="">
                      <p>${value.title1} ${value.title2}</p>
                    </a>
                    <span>支持30天无理由退换货</span>
                  </td>
                  <td width="270">
                    <p class="size">尺码：160/70A/L</p>
                    <p>颜色：30 浅米色</p>
                  </td>
                  <td width="120">
                    <p class="size" style="color: red;">¥${value.price}</p>
                    <p class="color">初上市价格</p>
                    <p class="color">¥${value.price}</p>
                  </td>
                  <td width="120">
                    <div class="addnum">
                      <button>-</button>              
                      <span>${num}</span>
                      <button>+</button>         
                    </div>
                    
                  </td>
                  <td width="120">
                    <p class="size singleprice" style="color:#FF0000">¥${value.price * num}.00</p>
                  </td>
                  <td class="size" width="120">
                    <p>移入收藏夹</p>
                    <p class="del">删除</p>
                    <p>查找相似<span class="iconfont icon-arrow"></span></p>
                  </td>
                </tr>  
              </table>                            
              `;
            }
          });
          $('.carlist').get(0).innerHTML += $strhtml;
          let $del = $('.size .del');
          let $all = $('.allselect');
          let $inputs = $('.singleselect').not('.allselect');
          let $singleprice = $('.singleprice');
          let $totalprice = $('.totalprice');
          let $buybtn = $('.pay button');
          // 点击删除，删除当前商品
          $del.on('click', function () {
            $(this).parent().parent().parent().parent().remove();
            let $table = $('.carlist table');
            if ($table.length == 0) {
              $('.nocar').css('display', 'block');
              $('.cartop').css('display', 'none');
              $('.carbottom').css('display', 'none');
              $('.pay').css('display', 'none');
            }
          });
          // 全选按钮，所有商品按钮被选中或不被选中
          $all.on('click', function () {
            $all.prop('checked', $(this).prop('checked'));
            $inputs.prop('checked', $(this).prop('checked'));
            // 点击全选后的删除，删除所有商品
            let $alldel = $('.pay .left .alldel');
            $alldel.on('click', function () {
              $('.carlist table').remove();
              $('.nocar').css('display', 'block');
              $('.cartop').css('display', 'none');
              $('.carbottom').css('display', 'none');
              $('.pay').css('display', 'none');
            })
            allprice();
          });
          // 全选按钮，若所有商品全被选中，则全选按钮选中
          $inputs.on('click', function () {
            if ($inputs.length === $('.singleselect:checked').not('.allselect').size()) {
              $all.prop('checked', true);
            } else {
              $all.prop('checked', false);
            }
            allprice();
          });
          // 计算总价：
          function allprice() {
            var sum = 0;
            $inputs.each(function () {
              if ($(this).is(':checked')) {
                sum += parseFloat($($(this).parent().next().next().next().next().next().next().children()[0]).html().substring(1));
              }
            });
            $totalprice.html('¥' + sum.toFixed(2));
            if ($totalprice.html().substring(1) > 0) {
              $buybtn.css('background', '#FF0000');
            } else {
              $buybtn.css('background', '#DADADA');
            };
          };
        });
      }
    }
  }
});