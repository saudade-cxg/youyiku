require.config({
  paths: {
    'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min',
    'lazyload': 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min',
    'pagination': 'http://localhost/homework-JS/youyiku/src/script/jquery.pagination.js'
  },
  shim: {
    'lazyload': ['jquery'],
    'jquery.pagination': ['jquery']
  }
});

require(['jquery', 'lazyload', 'jquery.pagination'], function ($) {
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
      // modlist.renderList();
      // modlist.renderPage();
      modlist.renderSort();
    });
  }
});