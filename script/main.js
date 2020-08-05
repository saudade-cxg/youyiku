require.config({
  paths: {
    'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min',
    'lazyload': 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min',
    'pagination': 'http://localhost/homework-JS/youyiku/src/script/jquery.pagination.js',
    'cookie': 'https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie'
  },
  shim: {
    'lazyload': ['jquery'],
    'jquery.pagination': ['jquery'],
    'cookie': ['jquery']
  }
});

require(['jquery', 'lazyload', 'jquery.pagination', 'cookie'], function ($) {
  require(['public'], function (public) {
    public.navSuspension();
    public.toTop();
    public.stairs();
    public.navMenu();
  })
  let mod = $('#currentpage').attr('currentmod');
  if (mod == 'modfirst') {
    require([mod], function (modlist) {
      modlist.noticeBanner();
      modlist.goodsBanner();
      modlist.renderWomen();
      modlist.renderMan();
    });
  } else if (mod == 'modlist') {
    require([mod], function (modlist) {
      modlist.renderList();
      modlist.renderPage();
      modlist.renderSort();
    });
  } else if (mod == 'moddetails') {
    require([mod], function (modlist) {
      modlist.renderDetails();
      modlist.goodsNumber();
      modlist.bigGlass();
      modlist.shopping();
    });
  } else if (mod == 'modshopping') {
    require([mod], function (modlist) {
      modlist.shopping();
    });
  }
});