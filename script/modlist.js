define([], function () {
  return {
    // 1.列表页的渲染：
    renderList: function () {
      let $goodsList = $('.wrap')
      $.ajax({
        url: 'http://localhost/homework-JS/youyiku/php/listdata.php',
        dataType: 'json'
      }).done(function (data) {
        let strhtml = '<ul>';
        $.each(data, function (index, value) {
          strhtml += `
          <a href="details.html?sid=${value.sid}" target="_blank">
            <li>
              <div class="logo">
                <img src="${value.active}" alt="">
              </div>
              <div class="pic">
                <img data-original="${value.url}" class="lazy" width="212"   height="222"/></a>
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
              <p class="type">${value.title1}<span class="size">${value.size}</span></  p>
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
          </a>
          `
        });
        // 2.懒加载
        strhtml += '</ul>';
        $goodsList.html(strhtml);
        $(function () {
          $("img.lazy").lazyload({ effect: "fadeIn" });
        });
      })
    },
    // 3.分页：
    renderPage: function () {
      let $goodsList = $('.wrap');
      $('.page').pagination({
        pageCount: 3,
        jump: true,
        prevContent: '上一页',
        nextContent: '下一页',
        callback: function (api) {
          $.ajax({
            url: 'http://localhost/homework-JS/youyiku/php/listdata.php',
            data: {
              page: api.getCurrent()
            },
            dataType: 'json'
          }).done(function (data) {
            let strhtml = '<ul>';
            $.each(data, function (index, value) {
              strhtml += `
              <a href="details.html?sid=${value.sid}" target="_blank">
              <li>
                <div class="logo">
                  <img src="${value.active}" alt="">
                </div>
                <div class="pic">
                  <img data-original="${value.url}" class="lazy" width="212"   height="222"/></a>
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
                <p class="type">${value.title1}<span class="size">${value.size}</span></  p>
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
            </a>
            `
            });
            // 2.懒加载
            strhtml += '</ul>';
            $goodsList.html(strhtml);
            $(function () {
              $("img.lazy").lazyload({ effect: "fadeIn" });
            });
          })
        }
      })
    },
    // 4.默认排序：
    renderSort: function () {
      let array_default = [];
      let array = [];
      let prev = null;
      let next = null;
      let $btn = $('.rank button');
      let $goodsList = $('.wrap')
      $.ajax({
        url: 'http://localhost/homework-JS/youyiku/php/listdata.php',
        dataType: 'json'
      }).done(function (data) {
        let strhtml = '<ul>';
        $.each(data, function (index, value) {
          strhtml += `
          <a href="details.html?sid=${value.sid}" target="_blank">
            <li>
              <div class="logo">
                <img src="${value.active}" alt="">
              </div>
              <div class="pic">
                <img data-original="${value.url}" class="lazy" width="212"     height="222"/></a>
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
              <p class="type">${value.title1}<span class="size">${value.size}</  span></  p>
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
          </a>
        `
        });
        strhtml += '</ul>';
        $goodsList.html(strhtml);
        // 2.懒加载
        $(function () {
          $("img.lazy").lazyload({ effect: "fadeIn" });
        });

        array_default = [];
        array = [];
        prev = null;
        next = null;
        $('.wrap ul>li').each(function (index, element) {
          array[index] = $(this);
          array_default[index] = $(this);
        });
      });
      $('.page').pagination({
        pageCount: 3,
        jump: true,
        prevContent: '上一页',
        nextContent: '下一页',
        callback: function (api) {
          // console.log(api.getCurrent());
          $.ajax({
            url: 'http://localhost/homework-JS/youyiku/php/listdata.php',
            data: {
              page: api.getCurrent()
            },
            dataType: 'json'
          }).done(function (data) {
            let strhtml = '<ul>';
            $.each(data, function (index, value) {
              strhtml += `
              <a href="details.html?sid=${value.sid}" target="_blank">
                <li>
                  <div class="logo">
                    <img src="${value.active}" alt="">
                  </div>
                  <div class="pic">
                    <img data-original="${value.url}" class="lazy" width="212"     height="222"/></a>
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
                  <p class="type">${value.title1}<span class="size">${value.size}</  span></  p>
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
              </a>
            `
            });
            strhtml += '</ul>';
            $goodsList.html(strhtml);
            // 2.懒加载
            $(function () {
              $("img.lazy").lazyload({ effect: "fadeIn" });
            });
            array_default = [];
            array = [];
            prev = null;
            next = null;
            $('.wrap ul>li').each(function (index, element) {
              array[index] = $(this);
              array_default[index] = $(this);
            });
          })
        }
      });
      // 默认排序：
      $btn.eq(0).on('click', function () {
        $.each(array_default, function (index, value) {
          $('.wrap>ul').append(value);
        });
        return;
      });
      // 升序：
      $btn.eq(1).on('click', function () {
        for (let i = 0; i < array.length - 1; i++) {
          for (let j = 0; j < array.length - i - 1; j++) {
            prev = parseFloat(array[j].find('.price').html().substring(1));
            next = parseFloat(array[j + 1].find('.price').html().substring(1));
            if (prev > next) {
              let temp = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temp;
            }
          }
        }
        $.each(array, function (index, value) {
          $('.wrap>ul').append(value);
        });
      });
      // 降序：
      $btn.eq(2).on('click', function () {
        for (let i = 0; i < array.length - 1; i++) {
          for (let j = 0; j < array.length - i - 1; j++) {
            prev = parseFloat(array[j].find('.price').html().substring(1));
            next = parseFloat(array[j + 1].find('.price').html().substring(1));
            if (prev < next) {
              let temp = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temp;
            }
          }
        }
        $.each(array, function (index, value) {
          $('.wrap>ul').append(value);
        });
      })
    }
  }
  // return {
  //   renderSort: function () {
  //     let array_default = [];
  //     let array = [];
  //     let prev = null;
  //     let next = null;
  //     let $goodsList = $('.wrap');
  //     let $btn = $('.rank button');
  //     $.ajax({
  //       url: 'http://localhost/homework-JS/youyiku/php/listdata.php',
  //       dataType: 'json'
  //     }).done(function (data) {
  //       let $strhtml = '<ul>';
  //       $.each(data, function (index, value) {
  //         $strhtml += `
  //           <li>
  //             <div class="logo">
  //               <img src="${value.active}" alt="">
  //             </div>
  //             <div class="pic">
  //               <a href="details.html">
  //               <img data-original="${value.url}" class="lazy" width="212" height="222"/></a>
  //             </div>
  //             <ol>
  //               <li>
  //                 <img src="${value.color1}" alt="">
  //               </li>
  //               <li>
  //                 <img src="${value.color2}" alt="">
  //               </li>
  //               <li>
  //                 <img src="${value.color3}" alt="">
  //               </li>
  //               <li>
  //                 <img src="${value.color4}" alt="">
  //               </li>
  //               <li>
  //                 <img src="${value.color5}" alt="">
  //               </li>
  //               <li>
  //                 <img src="${value.color6}" alt="">
  //               </li>
  //             </ol>
  //             <p class="type">${value.title1}<span class="size">${value.size}</span></p>
  //             <p class="clothes">${value.title2}</p>
  //             <p class="price">${value.price}</p>
  //             <div class="star">
  //               <span class="iconfont icon-wujiaoxing"></span>
  //               <span class="iconfont icon-wujiaoxing"></span>
  //               <span class="iconfont icon-wujiaoxing"></span>
  //               <span class="iconfont icon-wujiaoxing"></span>
  //               <span class="iconfont icon-wujiaoxing"></span>
  //               <span>(${value.sailnumber})</span>
  //             </div>
  //           </li>
  //         `;
  //       });
  //       $strhtml += '</ul>';
  //       $goodsList.html($strhtml);

  //       // 懒加载：
  //       $(function () {
  //         $("img.lazy").lazyload({ effect: "fadeIn" });
  //       });
  //       array_default = [];
  //       array = [];
  //       prev = null;
  //       next = null;
  //       $('.wrap ul>li').each(function (index, element) {
  //         array[index] = $(this);
  //         array_default[index] = $(this);
  //       });
  //     });
  //     $('.page').pagination({
  //       pageCount: 3,
  //       jump: true,
  //       prevContent: '上一页',
  //       nextContent: '下一页',
  //       callback: function (api) {
  //         console.log(api.getCurrent());
  //         $.ajax({
  //           url: 'http://localhost/homework-JS/youyiku/php/listdata.php',
  //           data: {
  //             page: api.getCurrent()
  //           },
  //           dataType: 'json'
  //         }).done(function (data) {
  //           let $strhtml = '<ul>';
  //           $.each(data, function (index, value) {
  //             $strhtml += `
  //               <li>
  //                 <div class="logo">
  //                   <img src="${value.active}" alt="">
  //                 </div>
  //                 <div class="pic">
  //                   <a href="details.html">
  //                   <img data-original="${value.url}" class="lazy" width="212" height="222"/></a>
  //                 </div>
  //                 <ol>
  //                   <li>
  //                     <img src="${value.color1}" alt="">
  //                   </li>
  //                   <li>
  //                     <img src="${value.color2}" alt="">
  //                   </li>
  //                   <li>
  //                     <img src="${value.color3}" alt="">
  //                   </li>
  //                   <li>
  //                     <img src="${value.color4}" alt="">
  //                   </li>
  //                   <li>
  //                     <img src="${value.color5}" alt="">
  //                   </li>
  //                   <li>
  //                     <img src="${value.color6}" alt="">
  //                   </li>
  //                 </ol>
  //                 <p class="type">${value.title1}<span class="size">${value.size}</span></p>
  //                 <p class="clothes">${value.title2}</p>
  //                 <p class="price">${value.price}</p>
  //                 <div class="star">
  //                   <span class="iconfont icon-wujiaoxing"></span>
  //                   <span class="iconfont icon-wujiaoxing"></span>
  //                   <span class="iconfont icon-wujiaoxing"></span>
  //                   <span class="iconfont icon-wujiaoxing"></span>
  //                   <span class="iconfont icon-wujiaoxing"></span>
  //                   <span>(${value.sailnumber})</span>
  //                 </div>
  //               </li>
  //             `;
  //           });
  //           $strhtml += '</ul>';
  //           $goodsList.html($strhtml);

  //           // 懒加载：
  //           $(function () {
  //             $("img.lazy").lazyload({ effect: "fadeIn" });
  //           });
  //           array_default = [];
  //           array = [];
  //           prev = null;
  //           next = null;
  //           $('.wrap ul>li').each(function (index, element) {
  //             array[index] = $(this);
  //             array_default[index] = $(this);
  //           });
  //         })
  //       }
  //     });

  //     // 默认排序
  //     $btn.eq(0).on('click', function () {
  //       $.each(array_default, function (index, value) {
  //         $('.wrap ul').append(value);
  //       });
  //       return;
  //     });
  //     // 升序：
  //     $btn.eq(1).on('click', function () {
  //       for (let i = 0; i < array.length - 1; i++) {
  //         for (let j = 0; j < array.length - i - 1; j++) {
  //           prev = parseFloat(array[j].find('.price').html().substring(1));
  //           next = parseFloat(array[j + 1].find('.price').html().substring(1));
  //           if (prev > next) {
  //             let temp = array[j];
  //             array[j] = array[j + 1];
  //             array[j + 1] = temp;
  //           }
  //         }
  //       };
  //       $.each(array, function (index, value) {
  //         $('.wrap>ul').append(value);
  //       });
  //     });

  //     // 降序：
  //     $btn.eq(2).on('click', function () {
  //       for (let i = 0; i < array.length - 1; i++) {
  //         for (let j = 0; j < array.length - i - 1; j++) {
  //           prev = parseFloat(array[j].find('.price').html().substring(1));
  //           next = parseFloat(array[j + 1].find('.price').html().substring(1));
  //           if (prev < next) {
  //             let temp = array[j];
  //             array[j] = array[j + 1];
  //             array[j + 1] = temp;
  //           }
  //         }
  //       }
  //       $.each(array, function (index, value) {
  //         $('.wrap>ul').append(value);
  //       });
  //     })
  //   }
  // }
});