require.config({
    paths: {
        'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min',
        'lazyload':'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min'
    },
    shim:{
        'lazyload':['jquery']
    }
});

require(['jquery','lazyload'], function ($) {
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
           modlist.renderWomen();
           modlist.renderMan();
        //    modlist.renderList();
        });
    }
});