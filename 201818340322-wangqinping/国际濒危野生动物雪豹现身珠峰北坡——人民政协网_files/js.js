$(function(){
  $(".search_box li").hover(
     function () {
    $(this).find(".box").css("display","block");
	$(this).find("a").addClass("ahover");
     },
    function () {
    $(this).find(".box").css("display","none");
	$(this).find("a").removeClass("ahover");
     }
    );
})

	/*更换显示样式*/
function setTab(m,n){
var tli=document.getElementById("menu"+m).getElementsByTagName("a");
var mli=document.getElementById("main"+m).getElementsByTagName("ul");
for(i=0;i<tli.length;i++){
   tli[i].className=i==n?"hover":"";
   if(tli.length == mli.length){
      mli[i].style.display=i==n?"block":"none";
   }
}
}



(function(h){h.fn.hoverAccordion=function(a){function m(d,f,b){var e=h(o).find("."+a.classOpen).closest("li").find("ul:first");if(false===e.is(":animated")){if(a.keepHeight==true)b=k;if(f.hasClass(a.classOpen)==false){d.children().show();d.animate({height:b},{step:function(c){d.height(b-c)},duration:a.speed});e.animate({height:0},{step:function(c){d.height(b-c)},duration:a.speed}).children().hide();f.addClass(a.classOpen).removeClass(a.classClosed);e.closest("li").removeClass(a.classActive).find("a:first").addClass(a.classClosed).removeClass(a.classOpen)}}} a=jQuery.extend({speed:"fast",activateItem:true,keepHeight:false,onClickOnly:false,classActive:"active",classHeader:"header",classHover:"hover",classOpen:"opened",classClosed:"closed"},a);var o=this,g=window.location.href,l=0,n=0,k=0;h(this).children("li").each(function(){var d=h(this),f=false;n++;var b=d.find("a:first").addClass(a.classHeader);if(b.length>0){b.hover(function(){b.addClass(a.classHover)},function(){b.removeClass(a.classHover)});var e=b.attr("href");if(e=="#")b.click(function(){this.blur(); return false});else if(a.activateItem==true&&g.indexOf(e)>0&&g.length-g.lastIndexOf(e)==e.length){f=true;d.addClass(a.classActive);b.removeClass(a.classClosed).addClass(a.classOpen)}}var c=d.find("ul:first");if(c.length>0){var i=c.height();if(k<i)k=i;a.onClickOnly==true?b.click(function(){m(c,b,i)}):b.hover(function(){l=setInterval(function(){m(c,b,i);clearInterval(l)},400)},function(){clearInterval(l)});if(a.activateItem===true)c.children("li").each(function(){var j=h(this).find("a").attr("href"); if(j)if(g.indexOf(j)>0&&g.length-g.lastIndexOf(j)==j.length){f=true;d.addClass(a.classActive);b.removeClass(a.classClosed).addClass(a.classOpen)}});else if(parseInt(a.activateItem,10)==n){f=true;d.addClass(a.classActive);b.removeClass(a.classClosed).addClass(a.classOpen)}}if(!f){b.removeClass(a.classOpen);if(c.length>0){c.children().hide();b.addClass(a.classClosed)}}});return this}})(jQuery);



/*baiduStat*/
var _hmt=_hmt||[];
(function() {
   var hm=document.createElement("script");
   hm.src="//hm.baidu.com/hm.js?b15ab1eded7d23043d92a4d0ce2872a6";
   var s=document.getElementsByTagName("script")[0];
   s.parentNode.insertBefore(hm, s);
})();
/*baiduStat*/


/**/




/*console*/
window.console=window.console||(function() {
      var c={};
      c.log=c.warn=c.debug=c.info=c.error=c.time=c.dir=c.profile
         =c.clear=c.exception=c.trace=c.assert=function() {
      };
      return c;
   })();
/*consoleEnd*/

/*ua*/
var ua=navigator.userAgent;
var isIe=ua.match(/(MSIE)/i) ? true : false;
var mobCookie=getCookie("isMobile");
var isMobile=false;
if(mobCookie.length>0) {
   isMobile=(mobCookie==1);
   //console.warn("mobCookieNotNull");
}
else {
   //console.warn("mobCookieNull");
   isMobile=ua.match(/(iPhone|iPod|iPad|Android|ios|SymbianOS|MeeGo|Mobile)/i) ? true : false;
}
/*var isMobile=(mobCookie.length>0 ?
 (mobCookie==1) :
 (ua.match(/(iPhone|iPod|iPad|Android|ios|SymbianOS|MeeGo|Mobile)/i) ?
 true : false
 ));*/
//console.log(isMobile ? "true" : "false");
//console.warn(mobCookie);
setCookie("isMobile", isMobile ? "1" : "0", 5);
function setCookie(c_name, value, expiredays) {
   //console.warn("setCookie");
   var exdate=new Date();
   exdate.setDate(exdate.getDate()+expiredays);
   document.cookie=c_name+"="+escape(value)+
                   ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/"
}
function getCookie(c_name) {
   if(document.cookie.length>0) {
      c_start=document.cookie.indexOf(c_name+"=");
      if(c_start!= -1) {
         c_start=c_start+c_name.length+1;
         c_end=document.cookie.indexOf(";", c_start);
         if(c_end== -1) c_end=document.cookie.length;
         return unescape(document.cookie.substring(c_start, c_end))
      }
   }
   return ""
}



/**
 *
 *
 * @param {HTMLElement} el
 * @param {String} where beforeBegin、afterBegin、beforeEnd、afterEnd
 * @param {String} html
 */
function insertHTML(el, where, html) {
   if (!el) {
      return false;
   }

   where = where.toLowerCase();

   if (el.insertAdjacentHTML) {//IE
      el.insertAdjacentHTML(where, html);
   } else {
      var range = el.ownerDocument.createRange(),
          frag = null;

      switch (where) {
         case "beforebegin":
            range.setStartBefore(el);
            frag = range.createContextualFragment(html);
            el.parentNode.insertBefore(frag, el);
            return el.previousSibling;
         case "afterbegin":
            if (el.firstChild) {
               range.setStartBefore(el.firstChild);
               frag = range.createContextualFragment(html);
               el.insertBefore(frag, el.firstChild);
            } else {
               el.innerHTML = html;
            }
            return el.firstChild;
         case "beforeend":
            if (el.lastChild) {
               range.setStartAfter(el.lastChild);
               frag = range.createContextualFragment(html);
               el.appendChild(frag);
            } else {
               el.innerHTML = html;
            }
            return el.lastChild;
         case "afterend":
            range.setStartAfter(el);
            frag = range.createContextualFragment(html);
            el.parentNode.insertBefore(frag, el.nextSibling);
            return el.nextSibling;
      }
   }
}

