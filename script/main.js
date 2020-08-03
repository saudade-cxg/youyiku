require.config({
    paths: {
        'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min'
    }
});

require(['jquery'], function ($) {
    require(['public'],function(public){
        public.navSuspension();
        public.toTop();
        public.stairs();
        public.navMenu();
    })
    let mod = $('#currentpage').attr('currentmod');
    if (mod) {
        require([mod], function (modlist) {
           modlist.noticeBanner();
           modlist.goodsBanner();
        });
    }
});