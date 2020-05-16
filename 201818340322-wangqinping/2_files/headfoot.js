// JavaScript Document
$(document).ready(function () {

    // top 会员菜单
    $(".user-login").hover(function () {
        $(this).toggleClass("s-l-hover");
    });

    // footer 二维码
    $(".f-td-n").hover(function () {
        $(this).next('.f-td-ew ').toggleClass('none');
    });

    // 快捷入口
    $(".sk-saix").click(function() {
        $(this).toggleClass("sk-saix-click");
        $(".sk-lei").toggleClass("none");
    });

    // 发需求
    $(".fa-xq").hover(function() {
        $(this).find(".down-list").toggleClass("none");
    });

    // 主导航
    $(".g-nv li").hover(function () {
        $(this).addClass("ft-nv-hover");
        $(this).find(".down-list").removeClass("none");
    }, function () {
        $(this).removeClass("ft-nv-hover");
        $(this).find(".down-list").addClass("none");
    });

    // 主导航 二维码
    $(".i-nv-er").hover(function() {
        $(this).next(".nv-er-pop").removeClass("none");
    }, function() {
        $(this).next(".nv-er-pop").addClass("none");
    });

    $(".sk-k").hover(function () {
        $(".sk-tip").toggleClass("none");
    });

    // 2017 头部 新年广告
    setTimeout(actMove, 5000);
    function actMove() {
        $('.bg-act').find('.act-img').animate({
            height: 0
        }, 500, function () {
            $('.bg-act').removeClass('bg-act-unfold');
            $('.bg-act').find('.act-tips').fadeIn(200);
            // console.log(parent.hasClass('bg-act-unfold'));
        });
    }

    $('.bg-act').on('click', '.act-tips-close', function () {
        $(this).parent('.act-tips').fadeOut(200);
    }).on('click', '.act-btn', function () {
        var parent = $(this).parents('.bg-act');

        if (parent.hasClass('bg-act-unfold')) {
            $(this).prevAll('.act-img').animate({
                height: 0
            }, 500, function () {
                parent.removeClass('bg-act-unfold');
                parent.find('.act-tips').fadeIn(200);
                // console.log(parent.hasClass('bg-act-unfold'));
            });
        } else {
            $(this).prevAll('.act-img').animate({
                height: 240
            }, 500, function () {
                parent.addClass('bg-act-unfold');
                // console.log(parent.hasClass('bg-act-unfold'));
            });
        }
    });
    //地区切换
    $('.s-diqu-box').hover(function () {
        if ($(this).hasClass('s-diqu-hover')) {
            $(this).removeClass('s-diqu-hover');
            $(this).find('.s-n-more').hide();
        } else {
            $(this).addClass('s-diqu-hover');
            $(this).find('.s-n-more').show();
        }
    });
    $(".s-n-tab span").hover(function () {
        $(this).addClass("tab-click").siblings().removeClass("tab-click");
        var index = $(this).index();
        $(".s-n-citylist").eq(index).removeClass('none').siblings().addClass('none');
    });
    
    //网站导航
    $('.s-n-down').hover(function () {
        $(this).toggleClass('s-n-hover');
    });

    //19年网站

    // topBar 地区切换
    var _sTArr = [];
    $('.top_bar').on('mouseenter',
        '.t_location',
        function () {
            $('.popup_district', this).fadeIn(200).find('.h400').scrollTop(0);
            $('.popup_district .tab_nav span').eq(0).addClass('cur').siblings().removeClass('cur');
            var $item = $('.top_bar').find('.t_location .popup_district .h400 .item');
            $item.each(function (i, el) {
                var _sT = $(el).position().top;
                _sTArr.push(_sT);
            });
        }).on('mouseleave',
        '.t_location',
        function () {
            $('.popup_district', this).hide();
            _sTArr = [];
        }).on('mouseenter',
        '.popup_district .tab_nav span',
        function () {
            var i = $(this).index();
            $(this).addClass('cur').siblings().removeClass('cur');
            $('.h400').stop().animate({ 'scrollTop': _sTArr[i] }, 300);
        });

    // topBar 右侧
    $('.top_bar').on('mouseenter',
        '.r_nav .down',
        function () {
            $(this).addClass('show');
            $('.d_pop', this).fadeIn(200);
        }).on('mouseleave',
        '.r_nav .down',
        function () {
            $('.d_pop', this).hide();
            $(this).removeClass('show');
        });

    // logoBar 搜索框
    var $searchBar = $('.header_bar').find('.search_bar');
    $searchBar.on('mouseenter',
        function () {
            $(this).addClass('search_focus');
        }).on('mouseleave',
        function () {
            $(this).removeClass('search_focus');
        }).on('keyup',
        '.tx',
        function () {
            var _t = $(this).val();
            if (_t !== '') {
                $(this).prev().hide();
                $(this).next().addClass('s_c');
            } else {
                $(this).prev().show();
                $(this).next().removeClass('s_c');
            }
        });

    // 主导航 main_nav
    var $mainNav = $('.header_bar').find('.main_nav');
    $mainNav.on('mouseenter',
        'li.down',
        function () {
            $('.dn_more', this).fadeIn(200);
        }).on('mouseleave',
        'li.down',
        function () {
            $('.dn_more', this).hide();
        });

    // footer_bar 友链切换
    $('.ft_tab').on('mouseenter',
        '.tab_nav span',
        function () {
            var i = $(this).index();
            $(this).addClass('cur').siblings().removeClass('cur');
            $(this).parents('.ft_tab').find('.tab_item').eq(i).removeClass('none').siblings().addClass('none');
        });


    /*2019-12-12 顶部搜索按钮*/
    $('.search_bar').on('click', 'button', function () {
        var searchtxt = $(this).siblings('.tx').val();
        if (searchtxt.length <= 0) {
            window.showMsg('请填写搜索内容');
            return;
        }
        window.open('http://so.64365.com/cse/search?q=' + searchtxt + '&s=2146768754797879512&nsid=1');
    });

});