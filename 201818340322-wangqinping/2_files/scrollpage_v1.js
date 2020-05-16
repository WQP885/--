/*********
 * 知识详细页，猜你喜欢模块滚动加载。
 * 最大加载页数10页；每页5条数据，每页后加一个联盟广告 * 
 * 引用JS：http://image.64365.com/js/infinite-scroll.js
 *         http://image.64365.com/js/scrollpage.js
 * ********/
//联盟广告，每5条后添加一条广告
//修改#5393  改为1条广告+5条内容
$(document).ready(function () {

    var adArray = new Array(//联盟广告代码
        "<script type='text/javascript' src='//code.64365.com/common/9387g.js?g=btckjqxq'><\/script>",
        "<script type='text/javascript' src='//code.64365.com/production/s7gle.js?gbtckjqk=y'><\/script>",
        "<script type='text/javascript' src='//code.64365.com/site/api/62ohz7.js?gbtckj=kyq'><\/script>",
        "<script type='text/javascript' src='//code.64365.com/site/res/js/crde.js?kfxgonue=b'><\/script>");
    var maxpage = 5;//最大加载页数
    var page = 1;
    var pagesize = 5;//每次加载条数
    var accurate_type = $("#accurate_type").val();//文章类型

    var articleId = $("#articleId").attr("articleId");
    var title = $("#articleId").text();


    var token = "article_token_" + accurate_type;
    localStorage.removeItem(token);

    //accurate_type = 399;//for test  .zs-list2  #content-bar   
    var infScroll = new InfiniteScroll('.hot_tui_list', {
        path: function () {
            console.log(666);
            page = this.pageIndex;
            var is_Show = localStorage.getItem(token);
            if (this.pageIndex > maxpage || is_Show == "true") {
                //window.showMsg("没有更多数据加载了");
                return "";
            } else {
                return '/rpc/Accurate/GetArticleTablesList/?type=' + accurate_type + '&page=' + this.pageIndex + '&size=' + pagesize + '&articleId=' + articleId + '&title=' + title;
            }
        },
        responseType: 'json',
        //status: '.scroll-status',
        scrollThreshold: 600,//滚动条距离底部多少像素的时候开始加载
        //loadOnScroll: true,//是否启用滚动加载,默认为true
        history: false,
        debug: false,//是否启用调试
        // append: '.post',
        //loadCount:1
        //append: '.zs-list2',
        //prefill: true
    });
    var proxyElem = document.createElement('div');

    //加载上一页的数据
    infScroll.on('load', function (response) {

        if (response.isSucess) {
            var data = response.Data;
            var list = data;
            localStorage.setItem(token, "false");
            $("#like_div").removeClass("none");
            var itemHtml = "";

            //数据前面添加广告
            var num = page % adArray.length;
            if (num != 0) {
                itemHtml += "<div class='ht_item'>" + adArray[num - 1] + "</div>";
            } else {
                itemHtml += "<div class='ht_item'>" + adArray[adArray.length - 1] + "</div>";
            }

            //for (var i = 0; i < data.length; i++) {

            //    var a_cssstyle = "style='height:30px;'";
            //    var imgSrc = "";
            //    console.log(data[i]);
            //    if (data[i].imagelink != '' && data[i].imagelink) {
            //        imgSrc = "<img class='image_zs' src='//" + data[i].imagelink.replace("http://", "") + "'>";
            //        var a_cssstyle = "";

            //    }
            //    itemHtml += "<li class='testscroll'>" +
            //        "<a target='_blank' href='" + data[i].Urlstring + "' " + a_cssstyle + "> " +
            //        imgSrc +
            //        "<h3 class='tit'>" + data[i].Title + "</h3>" +
            //        "</a>" +
            //        "</li>";
            //}
            var html = itemHtml;
            for (var i in list) {
                var htmlimage = "";
                var css = {
                    content: '',
                    htmlimage: '',
                    spanContent: '',//分类
                    p_introduction: ' ',//导读
                    icon_class: 'icon-q-a-o'//图标样式
                }

                if (list[i].Table == "Ask") {
                    css.content = "咨询";

                }
                if (list[i].Table == "Tuwen") {
                    css.content = "图文";
                    if (list[i].imagelink != null && list[i].imagelink.indexOf('http') >= 0)
                    {
                        var a_image = document.createElement("a");
                        a_image.className = 'img_block video';
                        a_image.href = list[i].Urlstring;
                        a_image.target = "_blank";
                        var img = document.createElement("img");
                        img.src = list[i].imagelink;
                        img.alt = list[i].Title;
                        a_image.appendChild(img);

                        css.htmlimage = a_image;

                    }
                 
                    
                }

                if (list[i].Table == "Video" || list[i].Table == "Answer") {
                    if (list[i].Table == "Answer") {
                        css.icon_class = 'icon-voice';
                        css.content = "音频";

                    }
                    else {
                        css.icon_class = 'icon-video-o';
                        css.content = "视频";

                    }
                    css.spanContent = '已观看' + list[i].Views + '次';
                    var a_image = document.createElement("a");
                    a_image.className = 'img_block video';
                    a_image.href = list[i].Urlstring;
                    a_image.target = "_blank";
                    var img = document.createElement("img");
                    img.src = ((list[i].imagelink || '').indexOf("http") >= 0 ? '' : '//') + list[i].imagelink + (list[i].Table == 3 ? "/video_list_320_180" : "");
                    img.alt = list[i].Title;
                    if (list[i].Table == "Answer") {
                        img.style.width = "auto";
                    }
                    var i_html = document.createElement("i");
                    i_html.className = "ico_index i_20";

                    var span_html = document.createElement("span");
                    span_html.textContent = Math.floor(list[i].Duration / 60) + ': ' + list[i].Duration % 60;

                    a_image.appendChild(img);
                    a_image.appendChild(i_html);
                    a_image.appendChild(span_html);
                    css.htmlimage = a_image;
                }
                if (list[i].Table == "Article") {
                    css.content = "知识";
                    css.spanContent = list[i].Views + '人阅读';
                    css.p_introduction = list[i].introduction;
                }
                var imgHtml = (((list[i].imagelink || '').length > 0 && (list[i].Table == "Video" || list[i].Table == "Answer" || list[i].Table == "Tuwen")) ? css.htmlimage.outerHTML : '');
                html +=
                    '<div class="ht_item">'
                + imgHtml+ '<strong> <a target="_blank" href="' + list[i].Urlstring + '">' + list[i].Title + '</a></strong >\
                                        <div class="inf">\
                                            <span class="tag"><i class="iconfont '+ css.icon_class + '"></i>' + css.content + '</span>\
                                            <span><em class="s_oe">'+ css.spanContent + '</em></span>\
                                        </div></div> ';
            }
            
            ////数据末尾添加广告
            //var num = page % adArray.length;
            //if (num != 0) {
            //    itemHtml += "<li class='testscroll'>" + adArray[num - 1] + "</li>";
            //} else {
            //    itemHtml += "<li class='testscroll'>" + adArray[adArray.length - 1] + "</li>";
            //}
            proxyElem.innerHTML = html;
            var items = proxyElem.querySelectorAll('.ht_item');
            infScroll.appendItems(items);
            // $(".zs-list2").append(items);
        } else {
            localStorage.setItem(token, "true");
            $("#like_div").addClass("none");
        }

    });

});




