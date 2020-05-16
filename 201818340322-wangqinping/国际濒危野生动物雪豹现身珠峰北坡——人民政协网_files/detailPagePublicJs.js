/**
 * Created by shen on 2015/5/7.
 */


/*baidu zhudongtuisong*/
(function() {
	var bp=document.createElement('script');
	bp.src='//push.zhanzhang.baidu.com/push.js';
	var s=document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(bp, s);
})();
/**/
/*switch page in detail page start*/
function keyUpRmzxw(e) {
	var currKey=0, eve=e||event;
	currKey=eve.keyCode||eve.which||eve.charCode;
	switch(currKey) {
		case 37:
			switchPageRmzxw(-1);
			break;
		case 39:
			switchPageRmzxw(1);
			break;
		default :
			break;
	}
}
function switchPageRmzxw(target) {
	var pageDivs=document.getElementsByClassName("Paging");
	if(pageDivs.length==0)return null;
	else {
		var pageDiv=pageDivs[0];
		var pagesT=pageDiv.childNodes;
		var pages=new Array();
		var pagesCount=0;
		for(var ia=0; ia<pagesT.length; ia++) {
			if(pagesT[ia].nodeName.toLowerCase()=="a") {
				pages[pagesCount]=pagesT[ia];
				pagesCount++;
			}
		}
		var currentPageNo=0;
		for(var ib=0; ib<pages.length; ib++) {
			if(pages[ib].className.toLowerCase().indexOf("a")!= -1) {
				currentPageNo=ib;
				break;
			}
		}
		var targetPageNo=currentPageNo+target;
		if(targetPageNo<0||targetPageNo>=pages.length)return null;
		else {
			self.location.href=pages[targetPageNo].href;
		}
	}
}
/*监听器*/
if(window.attachEvent) {
	window.attachEvent(
		"onkeydown", function(e) {
			e=e||window.event;
			keyUpRmzxw(e);
		}
	);
}
else {
	window.addEventListener(
		"keydown", function(e) {
			e=e||window.event;
			keyUpRmzxw(e);
		}
	);
}
/*switch page in detail page end*/
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?7dd9028205f42ce083a21da5c0c8e8f6";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();