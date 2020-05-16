
//加载顶部搜索
$(function () {
    $(".c8c").each(function () {
        $(this).data("value", $(this).val()).focus(function() {
            if ($(this).val() == $(this).data("value")) {
                $(this).val('');
            }
        }).blur(function() {
            if ($(this).val()=='') {
                $(this).val($(this).data("value"));
            }
        }).keydown(function (e) {
            if (e.keyCode == 13) {
                $(this).next(".s-btn").trigger("click");
            }
        });
    });

    $(".s-btn").unbind("click").bind("click", function () {
        var text = $(this).prev(".c8c").val();
        doPostSearch("http://so.64365.com/cse/search?q=" + text + "&s=2146768754797879512", [], true);
    });

});

function doPostSearch(url, val, ispost) {
    var mye = $('#_searchform');
    var item = "";
    for (var i = 0; i < val.length; i++) {
        item += "<input id=\"" + val[i][0] + "\" name=\"" + val[i][0] + "\"  value=\"" + val[i][1] + "\" type=\"text\">";
    }
    if (mye.length == 0) {
        $('body').append('<form action="' + url + '" id="_searchform" style="display:none;" ' + (ispost ? 'method = "post"' : '') + ' target="_blank">' + item + '</form>');

        mye = $('#_searchform');
    }
    else {
        mye.attr("action", url).html(item);
    }
    mye.submit();
}
function post(url, data, callback, type) {
    $.ajax({
        type: "POST",
        cache: true,
        url: url,
        data: data,
        dataType: type || 'json',
        success: callback
    });
};
    
    