// 阅读文章计时器弹框相关js

$(function () {
    var dt = new Date();
    var dt2 = getNowFormatDate();
    var pagetop = 0;
    var pagedown = 0;
    $(document).ready(function () {
        pagetop = $('#direction-top').offset().top;
        pagedown = $('#direction-down').offset().top;
    });
    
    var n = 0;
    var n2 = 0;
    var timer2;
    var timer = setInterval(function () {
        n++;
    }, 1000);
    var cookievalue = getCookie("USERGUID");
    //判断当前cookie是否存在
    if (cookievalue != null && cookievalue.length > 0) {
        var keyvalue = cookievalue.split('&');
        if (GMTToStr(keyvalue[1]) <= dt2) {
            reckonTimer();
            //将GUID写进cookie
            var guidl = generateGuid();
            dt.setTime(dt.getTime() + 60 * 60 * 1000 * 24);
            document.cookie = "USERGUID=" + guidl + "&" + dt.toGMTString() + ";domain=64365.com; path=/; expires=" + dt.toGMTString();
        }
    } else {
        reckonTimer();
        //将GUID写进cookie
        var guid = generateGuid();
        dt.setTime(dt.getTime() + 60 * 60 * 1000 * 24);
        document.cookie = "USERGUID=" + guid + "&" + dt.toGMTString() + ";domain=64365.com; path=/; expires=" + dt.toGMTString();
    }
    //判断停留时间
    setInterval(function () {
        if (n - n2 > 30 && n2 > 0) {
            var second, reckon;
            var minute = Math.floor(n / 60);
            if (n < 60) {
                second = n;
            } else {
                second = n - minute * 60;
            }
            if (minute < 10) {
                minute = '0' + minute;
            }
            if (second < 10) {
                second = '0' + second;
            }
            reckon = minute + ' 分 ' + second + ' 秒';
            $('#popup-reckon').fadeIn('400').find('h3').html('阅读本文耗时：' + reckon);
        }
    }, 1000);
    function reckonTimer() {
        var minute, second, reckon;
        var windowHeight = $(window).height();
        var docdown = $(window).scrollTop();
        $(window).scroll(function () {
            //大于60秒出现弹窗
            if (n > 60) {
                var docTop = $(window).scrollTop();
                //向下滚屏
                if (docTop - docdown > 0) {
                    //B位置
                    if (docTop >= pagedown - windowHeight) {
                        n2 = n;
                    }
                    //A位置
                    if (docTop >= pagetop - windowHeight + 35) {
                        clearInterval(timer);
                        minute = Math.floor(n / 60);
                        if (n < 60) {
                            second = n;
                        } else {
                            second = n - minute * 60;
                        }
                        if (minute < 10) {
                            minute = '0' + minute;
                        }
                        if (second < 10) {
                            second = '0' + second;
                        }
                        reckon = minute + ' 分 ' + second + ' 秒';
                        $('#popup-reckon').fadeIn('400').find('h3').html('阅读本文耗时：' + reckon);
                    }
                } else {
                    if (docTop >= pagedown - windowHeight) {
                        clearInterval(timer);
                        minute = Math.floor(n / 60);
                        if (n < 60) {
                            second = n;
                        } else {
                            second = n - minute * 60;
                        }
                        if (minute < 10) {
                            minute = '0' + minute;
                        }
                        if (second < 10) {
                            second = '0' + second;
                        }
                        reckon = minute + ' 分 ' + second + ' 秒';
                        $('#popup-reckon').fadeIn('400').find('h3').html('阅读本文耗时：' + reckon);
                    }
                }
                docdown = docTop;
            }
        });
        $('#popup-reckon').on('click', '.pop-close', function() {
            $('#popup-reckon').remove();
        });
        $('#popup-reckon').on('click', '#readpop', function () {
            $('#popup-reckon').remove();
        });
    }

    //生成一个GUID
    function generateGuid() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };

    //获取指定名称的cookie的值
    function getCookie(objName) {
        var arrStr = document.cookie.split("; ");
        for (var i = 0; i < arrStr.length; i++) {
            var temp = arrStr[i].split("=");
            if (temp[0] == objName) return unescape(temp[1]);
        }
    }
    
    //格林时间转正常时间
    function GMTToStr(time) {
        var date = new Date(time);
        var str = date.getFullYear() + '-' +
            (date.getMonth() + 1) + '-' +
            date.getDate() + ' ' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();
        return str;
    }
    //获取当前时间标准格式
    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
        return currentdate;
    }
});