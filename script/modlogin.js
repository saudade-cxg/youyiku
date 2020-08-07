define([], function () {
  return {
    // 登录验证数据库匹配：
    loginSuccess: function () {
      let $username = $('.username');
      let $iphone = $('.iphone');
      let $password = $('.password');
      let $btn = $('.btn');
      $btn.on('click', function () {
        $.ajax({
          type: 'post',
          url: 'http://10.31.163.14/homework-JS/youyiku/php/login.php',
          data: {
            user: $username.val(),
            iphone: $iphone.val(),
            pass: hex_sha1($password.val())
          },
          success: function (data) {
            if (data) {
              location.href = 'index.html';
              localStorage.setItem('xingming', $username.value);
            } else {
              alert('用户名或者密码错误');
              $password.val('');
            }
          }
        })
      });
    }
  }
});