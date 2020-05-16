/*
 *	soChange 1.6 - simple object change with jQuery
 *	made by bujichong 2010-10-16
 *	作者：不羁虫  2010-10-16
 * http://hi.baidu.com/bujichong/
 */
;(function($){
	$.fn.extend({
		"soChange": function(o){

		o= $.extend({
			thumbObj:null,//导航对象
			botPrev:null,//按钮上一个
			botNext:null,//按钮下一个
			changeType:'fade',//切换方式，可选：fade,slide，默认为fade
			thumbNowClass:'now',//导航对象当前的class,默认为now
			thumbOverEvent:true,//鼠标经过thumbObj时是否切换对象，默认为true，为false时，只有鼠标点击thumbObj才切换对象
			slideTime:1000,//平滑过渡时间，默认为1000ms，为0或负值时，忽略changeType方式，切换效果为直接显示隐藏
			autoChange:true,//是否自动切换，默认为true
			clickFalse:false,//导航对象如果有链接，点击是否链接无效，即是否返回return false，默认是return false链接无效，当thumbOverEvent为false时，此项必须为true，否则鼠标点击事件冲突
			overStop:true,//鼠标经过切换对象时，切换对象是否停止切换，并于鼠标离开后重启自动切换，前提是已开启自动切换false
			changeTime:4000,//自动切换时间
			delayTime:100//鼠标经过时对象切换迟滞时间，推荐值为300ms
		}, o || {});

		var _self = $(this);
		var thumbObj;
		var size = _self.size();
		var nowIndex =0; //定义全局指针
		var index;//定义全局指针
		var startRun;//预定义自动运行参数
		var delayRun;//预定义延迟运行参数

	//主切换函数
	function fadeAB () {
		if (nowIndex != index) {
			if (o.thumbObj!=null) {
			$(o.thumbObj).removeClass(o.thumbNowClass).eq(index).addClass(o.thumbNowClass);}
			if (o.slideTime <= 0) {
				_self.eq(nowIndex).hide();
				_self.eq(index).show();
			}else if(o.changeType=='fade'){
				_self.eq(nowIndex).animate({opacity:0,'z-index':"0"},o.slideTime);
				_self.eq(index).animate({opacity:1,'z-index':"1"},o.slideTime);
			}else{
				_self.eq(nowIndex).slideUp(o.slideTime);
				_self.eq(index).slideDown(o.slideTime);
			}
			nowIndex = index;
			if (o.autoChange==true) {
			clearInterval(startRun);//重置自动切换函数
			startRun = setInterval(runNext,o.changeTime);}
			}
	}
		


	//切换到下一个
	function runNext() {
		index =  (nowIndex+1)%size;
		fadeAB();
	}

	//初始化
			_self.eq(0).show().animate({opacity:1,'z-index':"1"},o.slideTime);

	//点击任一图片
		if (o.thumbObj!=null) {
		thumbObj = $(o.thumbObj);

	//初始化thumbObj
			thumbObj.removeClass(o.thumbNowClass).eq(0).addClass(o.thumbNowClass);
			thumbObj.click(function () {
				index = thumbObj.index($(this));
				fadeAB();
				if (o.clickFalse == true) {
					return false;
				}
			});
			if (o.thumbOverEvent == true) {
			thumbObj.mouseenter(function () {
				index = thumbObj.index($(this));
				delayRun = setTimeout(fadeAB,o.delayTime);
			});
			thumbObj.mouseleave(function () {
				clearTimeout(delayRun);
			});
			}
		}

	//点击上一个
		if (o.botNext!=null) {
			$(o.botNext).click(function () {
				if(_self.queue().length<1){
				runNext();}
				return false;
			});
		}

	//点击下一个
		if (o.botPrev!=null) {
			$(o.botPrev).click(function () {
				if(_self.queue().length<1){
				index = (nowIndex+size-1)%size;
				fadeAB();}
				return false;
		});
		}

	//自动运行
		if (o.autoChange==true) {
		startRun = setInterval(runNext,o.changeTime);
		if (o.overStop == true) {
			_self.mouseenter(function () {
				clearInterval(startRun);//重置自动切换函数
				
			});
			_self.mouseleave(function () {
				startRun = setInterval(runNext,o.changeTime);
			});
			}
		}

	}

	})

})(jQuery);

$(function(){ 
		//首页幻灯
		$("#sliderbox2>a>img").soChange({
			thumbObj:'#sliderbox2 .thumb-list2 li',
			thumbNowClass:'curr'
		});
		//#service-other 鼠标悬浮状态
		$("#service-other2>ul>li").hover(function(){
			$(this).css("opacity","0.8");
		}, function(){
			$(this).css("opacity","1");
		});
	});

$(function(){ 
		//首页幻灯
		$("#sliderbox3>.sliderbox").soChange({
			//thumbObj:'#sliderbox3 .thumb-list3 li',
			//thumbNowClass:'curr'
		});
		//#service-other 鼠标悬浮状态
		$("#service-other3>ul>li").hover(function(){
			$(this).css("opacity","0.8");
		}, function(){
			$(this).css("opacity","1");
		});
	});
	
$(function(){ 
		//首页幻灯
		$("#sliderbox4>.sliderbox").soChange({
			//thumbObj:'#sliderbox4 .thumb-list4 li',
			//thumbNowClass:'curr'
		});
		//#service-other 鼠标悬浮状态
		$("#service-other4>ul>li").hover(function(){
			$(this).css("opacity","0.8");
		}, function(){
			$(this).css("opacity","1");
		});
	});
	
$(function(){ 
		//首页幻灯
		$("#sliderbox5>.sliderbox").soChange({
			//thumbObj:'#sliderbox5 .thumb-list5 li',
			//thumbNowClass:'curr'
		});
		//#service-other 鼠标悬浮状态
		$("#service-other5>ul>li").hover(function(){
			$(this).css("opacity","0.8");
		}, function(){
			$(this).css("opacity","1");
		});
	});
$(function(){ 
		//首页幻灯
		$("#sliderbox6>.sliderbox").soChange({
			thumbObj:'#sliderbox6 .thumb-list6 li',
			thumbNowClass:'curr'
		});
		//#service-other 鼠标悬浮状态
		$("#service-other6>ul>li").hover(function(){
			$(this).css("opacity","0.8");
		}, function(){
			$(this).css("opacity","1");
		});
	});