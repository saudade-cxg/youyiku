define([], function () {
  return {
    // 表单验证功能：
    regexp: function () {
      let $form = $('.login');
      let $username = $('.username');
      let $iphone = $('.iphone');
      let $password = $('.password');
      let $error = $('.error');

      let $usernameflag = true;
      let $iphoneflag = true;
      let $passwordflag = true;
      // 1.验证用户名：
      //中英文均可，最长14个字符或者7个汉字([\u4e00-\u9fa5])
      $username.on('focus', function () {
        $error.eq(0).html('中英文均可，最长14个字符或者7个汉字').css('color', '#D3D3D3');
      });
      $username.on('blur', function () {
        if ($(this).val() !== '') {
          let $strlen = $(this).val().replace(/[\u4e00-\u9fa5]/g, '**').length;
          // 正则表达式：
          let $reg = /^[a-zA-Z\u4e00-\u9fa5]+$/g;
          if ($strlen <= 14) {
            if ($reg.test($(this).val())) {
              $error.eq(0).html('√').css('color', 'green');
              $usernameflag = true;
            } else {
              $error.eq(0).html('X 您输入的用户名格式有误，请重新输入').css('color', 'red');
              $usernameflag = false;
            }
          } else {
            $error.eq(0).html('X 您输入的用户名格式有误，请重新输入').css('color', 'red');
            $usernameflag = false;
          }
        } else {
          $error.eq(0).html('X 用户名不能为空，请输入').css('color', 'red');
          $usernameflag = false;
        }
      });

      // 2.验证手机号码：
      $iphone.on('focus', function () {
        $error.eq(1).html('请输入11位手机号码').css('color', '#d4d4d4');
      });
      $iphone.on('blur', function () {
        if ($(this).val() !== '') {
          let $reg = /^1[3578]\d{9}$/;
          if ($reg.test($(this).val())) {
            $error.eq(1).html('√').css('color', 'green');
            $iphoneflag = true;
          } else {
            $error.eq(1).html('X 您输入的手机号码格式有误，请重新输入').css('color', 'red');
            $iphoneflag = false;
          }
        } else {
          $error.eq(1).html('X 手机号码不能为空，请输入').css('color', 'red');
          $iphoneflag = false;
        }
      });

      // 3.验证密码：
      // 密码的组成：数字,字母(大小写),特殊字符
      // 弱：一种字符。不允许注册。
      // 中：二种或者三种字符。
      // 强：四种字符。
      $password.on('focus', function () {
        $error.eq(2).html('请输入密码(字母数字特殊字符，长度6~12之间)').css('color', '#d4d4d4');
      });
      $password.on('input', function () {
        if ($(this).val().length >= 6 && $(this).val().length <= 12) {
          let $regnum = /\d+/;
          let $reglower = /[a-z]+/;
          let $regupper = /[A-Z]+/;
          let $other = /[\W\_]+/;
          let $count = 0;
          if ($regnum.test($(this).val())) {
            $count++;
          };
          if ($reglower.test($(this).val())) {
            $count++;
          };
          if ($regupper.test($(this).val())) {
            $count++;
          };
          if ($other.test($(this).val())) {
            $count++;
          };
          switch ($count) {
            case 1:
              $error.eq(2).html('密码强度为弱').css('color', 'red');
              $passwordflag = false;
              break;
            case 2:
            case 3:
              $error.eq(2).html('密码强度为中').css('color', 'orange');
              $passwordflag = true;
              break;
            case 4:
              $error.eq(2).html('密码强度为强').css('color', 'green');
              $passwordflag = true;
              break;
          }
        } else {
          $error.eq(2).html('X 您输入的密码长度有误，请重新输入').css('color', 'red');
          $passwordflag = false;
        }
      });
      $password.on('blur', function () {
        if ($(this).val() !== '') {
          if ($passwordflag) {
            $error.eq(2).html('√').css('color', 'green');
          }
        } else {
          $error.eq(2).html('X 手机号码不能为空，请输入').css('color', 'red');
          $passwordflag = false;
        }
      });

      $form.on('submit', function () {
        if ($username.val() === '') {
          $error.eq(0).html('X 用户名不能为空，请输入').css('color', 'red');
          $usernameflag = false;
        };
        if ($iphone.val() === '') {
          $error.eq(1).html('X 手机号码不能为空，请输入').css('color', 'red');
          $iphoneflag = false;
        };
        if ($username.val() === '') {
          $error.eq(2).html('X 密码不能为空，请输入').css('color', 'red');
          $passwordflag = false;
        };
        if (!$usernameflag || !$iphoneflag || !$passwordflag) {
          return false;
        }
      });
      // $('.select').prop('checked',false)||
      $('.select').on('click', function () {
        if ($('.select').prop('checked')) {
          $('.login button').css('background', 'skyblue');
        } else {
          $('.login button').css('background', '#DADADA');
        }
      });
    },

    // 和后端php验证重名：
    sameName: function () {
      let $form = $('.login');
      let $username = $('.username');
      let $error = $('.error');
      let $userlock = true;
      $username.on('blur', function () {
        if ($(this).val() != '') {
          $.ajax({
            type: 'post',
            url: 'http://localhost/homework-JS/youyiku/php/registry.php',
            data: {
              name: $username.val()
            },
            success: function (data) {
              if (data) {
                $error.eq(0).html('X 该用户名已存在').css('color', 'red');
                $userlock = false;
              } else {
                $error.eq(0).html('√').css('color', 'green');
                $userlock = true;
              }
            }
          })
        } else {
          $error.eq(0).html('X 用户名不能为空，请输入').css('color', 'red');
        }
      });
      $form.on('submit', function () {
        if ($username.val() === '') {
          alert('请输入用户名');
          $userlock = false;
        }
        if (!$userlock) {
          return false;
        }
      });
    }
  }
});