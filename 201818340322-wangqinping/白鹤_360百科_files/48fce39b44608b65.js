!function(t){"use strict";var a,n,i;t.extend({roundaboutShapes:{def:"lazySusan",lazySusan:function(t,a,n){return{x:Math.sin(t+a),y:Math.sin(t+3*Math.PI/2+a)/8*n,z:(Math.cos(t+a)+1)/2,scale:Math.sin(t+Math.PI/2+a)/2+.5}}}}),a={bearing:0,tilt:0,minZ:100,maxZ:280,minOpacity:.4,maxOpacity:1,minScale:.4,maxScale:1,duration:600,btnNext:null,btnNextCallback:function(){},btnPrev:null,btnPrevCallback:function(){},btnToggleAutoplay:null,btnStartAutoplay:null,btnStopAutoplay:null,easing:"swing",clickToFocus:!0,clickToFocusCallback:function(){},focusBearing:0,shape:"lazySusan",debug:!1,childSelector:"li",startingChild:null,reflect:!1,floatComparisonThreshold:.001,autoplay:!1,autoplayDuration:1e3,autoplayPauseOnHover:!1,autoplayCallback:function(){},autoplayInitialDelay:0,enableDrag:!1,dropDuration:600,dropEasing:"swing",dropAnimateTo:"nearest",dropCallback:function(){},dragAxis:"x",dragFactor:4,triggerFocusEvents:!0,triggerBlurEvents:!0,responsive:!1},n={autoplayInterval:null,autoplayIsRunning:!1,autoplayStartTimeout:null,animating:!1,childInFocus:-1,touchMoveStartPosition:null,stopAnimation:!1,lastAnimationStep:!1},i={init:function(e,o,r){var u;(new Date).getTime();return e="object"==typeof e?e:{},o=t.isFunction(o)?o:function(){},o=t.isFunction(e)?e:o,u=t.extend({},a,e,n),this.each(function(){var a=t(this),n=a.children(u.childSelector).length,e=360/n,l=u.startingChild&&u.startingChild>n-1?n-1:u.startingChild,s=null===u.startingChild?u.bearing:360-l*e,d="static"!==a.css("position")?a.css("position"):"relative";a.css({padding:0,position:d}).addClass("roundabout-holder").data("roundabout",t.extend({},u,{startingChild:l,bearing:s,oppositeOfFocusBearing:i.normalize.apply(null,[u.focusBearing-180]),dragBearing:s,period:e})),r?a.unbind(".roundabout").children(u.childSelector).unbind(".roundabout"):u.responsive&&t(window).bind("resize",function(){i.stopAutoplay.apply(a),i.relayoutChildren.apply(a)}),u.clickToFocus&&a.children(u.childSelector).each(function(n){t(this).bind("click.roundabout",function(){var e=i.getPlacement.apply(a,[n]);if(!i.isInFocus.apply(a,[e]))return i.stopAnimation.apply(t(this)),a.data("roundabout").animating||i.animateBearingToFocus.apply(a,[e,a.data("roundabout").clickToFocusCallback]),!1})}),u.btnNext&&t(u.btnNext).bind("click.roundabout",function(){return a.data("roundabout").animating||i.animateToNextChild.apply(a,[a.data("roundabout").btnNextCallback]),!1}),u.btnPrev&&t(u.btnPrev).bind("click.roundabout",function(){return i.animateToPreviousChild.apply(a,[a.data("roundabout").btnPrevCallback]),!1}),u.btnToggleAutoplay&&t(u.btnToggleAutoplay).bind("click.roundabout",function(){return i.toggleAutoplay.apply(a),!1}),u.btnStartAutoplay&&t(u.btnStartAutoplay).bind("click.roundabout",function(){return i.startAutoplay.apply(a),!1}),u.btnStopAutoplay&&t(u.btnStopAutoplay).bind("click.roundabout",function(){return i.stopAutoplay.apply(a),!1}),u.autoplayPauseOnHover&&a.bind("mouseenter.roundabout.autoplay",function(){i.stopAutoplay.apply(a,[!0])}).bind("mouseleave.roundabout.autoplay",function(){i.startAutoplay.apply(a)}),u.enableDrag&&(t.isFunction(a.drag)?t.isFunction(a.drop)?a.drag(function(t,n){var e=a.data("roundabout"),o="x"===e.dragAxis.toLowerCase()?"deltaX":"deltaY";i.stopAnimation.apply(a),i.setBearing.apply(a,[e.dragBearing+n[o]/e.dragFactor])}).drop(function(t){var n=a.data("roundabout"),e=i.getAnimateToMethod(n.dropAnimateTo);i.allowAnimation.apply(a),i[e].apply(a,[n.dropDuration,n.dropEasing,n.dropCallback]),n.dragBearing=n.period*i.getNearestChild.apply(a)}):u.debug&&alert("You do not have the drop plugin loaded."):u.debug&&alert("You do not have the drag plugin loaded."),a.each(function(){var a=t(this).get(0),n=t(this).data("roundabout"),e="x"===n.dragAxis.toLowerCase()?"pageX":"pageY",o=i.getAnimateToMethod(n.dropAnimateTo);a.addEventListener&&(a.addEventListener("touchstart",function(t){n.touchMoveStartPosition=t.touches[0][e]},!1),a.addEventListener("touchmove",function(a){var o=(a.touches[0][e]-n.touchMoveStartPosition)/n.dragFactor;a.preventDefault(),i.stopAnimation.apply(t(this)),i.setBearing.apply(t(this),[n.dragBearing+o])},!1),a.addEventListener("touchend",function(a){a.preventDefault(),i.allowAnimation.apply(t(this)),o=i.getAnimateToMethod(n.dropAnimateTo),i[o].apply(t(this),[n.dropDuration,n.dropEasing,n.dropCallback]),n.dragBearing=n.period*i.getNearestChild.apply(t(this))},!1))})),i.initChildren.apply(a,[o,r])})},initChildren:function(a,n){var e=t(this),o=e.data("roundabout");return a=a||function(){},e.children(o.childSelector).each(function(a){var o,r,u,l=i.getPlacement.apply(e,[a]);n&&t(this).data("roundabout")&&(o=t(this).data("roundabout").startWidth,r=t(this).data("roundabout").startHeight,u=t(this).data("roundabout").startFontSize),t(this).addClass("roundabout-moveable-item").css("position","absolute"),t(this).data("roundabout",{startWidth:o||t(this).width(),startHeight:r||t(this).height(),startFontSize:u||parseInt(t(this).css("font-size"),10),degrees:l,backDegrees:i.normalize.apply(null,[l-180]),childNumber:a,currentScale:1,parent:e})}),i.updateChildren.apply(e),o.autoplay&&(o.autoplayStartTimeout=setTimeout(function(){i.startAutoplay.apply(e)},o.autoplayInitialDelay)),e.trigger("ready"),a.apply(e),e},updateChildren:function(){return this.each(function(){var a=t(this),n=a.data("roundabout"),e=-1,o={bearing:n.bearing,tilt:n.tilt,stage:{width:Math.floor(.9*t(this).width()),height:Math.floor(.9*t(this).height())},animating:n.animating,inFocus:n.childInFocus,focusBearingRadian:i.degToRad.apply(null,[n.focusBearing]),shape:t.roundaboutShapes[n.shape]||t.roundaboutShapes[t.roundaboutShapes.def]};o.midStage={width:o.stage.width/2,height:o.stage.height/2},o.nudge={width:o.midStage.width+.05*o.stage.width,height:o.midStage.height+.05*o.stage.height},o.zValues={min:n.minZ,max:n.maxZ,diff:n.maxZ-n.minZ},o.opacity={min:n.minOpacity,max:n.maxOpacity,diff:n.maxOpacity-n.minOpacity},o.scale={min:n.minScale,max:n.maxScale,diff:n.maxScale-n.minScale},a.children(n.childSelector).each(function(r){!i.updateChild.apply(a,[t(this),o,r,function(){t(this).trigger("ready")}])||o.animating&&!n.lastAnimationStep?t(this).removeClass("roundabout-in-focus"):(e=r,t(this).addClass("roundabout-in-focus"))}),e!==o.inFocus&&(n.triggerBlurEvents&&a.children(n.childSelector).eq(o.inFocus).trigger("blur"),n.childInFocus=e,n.triggerFocusEvents&&-1!==e&&a.children(n.childSelector).eq(e).trigger("focus")),a.trigger("childrenUpdated")})},updateChild:function(a,n,e,o){var r,u=this,l=t(a),s=l.data("roundabout"),d=[],p=i.degToRad.apply(null,[360-s.degrees+n.bearing]);return o=o||function(){},p=i.normalizeRad.apply(null,[p]),r=n.shape(p,n.focusBearingRadian,n.tilt),r.scale=r.scale>1?1:r.scale,r.adjustedScale=(n.scale.min+n.scale.diff*r.scale).toFixed(4),r.width=(r.adjustedScale*s.startWidth).toFixed(4),r.height=(r.adjustedScale*s.startHeight).toFixed(4),l.css({left:(r.x*n.midStage.width*.3+n.nudge.width-r.width/2).toFixed(0)+"px",top:(r.y*n.midStage.height+n.nudge.height-r.height/2+parseInt(.006*h)).toFixed(0)+"px",width:r.width+"px",height:r.height+"px",opacity:(n.opacity.min+n.opacity.diff*r.scale).toFixed(2),zIndex:Math.round(n.zValues.min+n.zValues.diff*r.z),fontSize:(r.adjustedScale*s.startFontSize).toFixed(1)+"px"}),s.currentScale=r.adjustedScale,u.data("roundabout").debug&&(d.push('<div style="font-weight: normal; font-size: 10px; padding: 2px; width: '+l.css("width")+'; background-color: #ffc;">'),d.push('<strong style="font-size: 12px; white-space: nowrap;">Child '+e+"</strong><br />"),d.push("<strong>left:</strong> "+l.css("left")+"<br />"),d.push("<strong>top:</strong> "+l.css("top")+"<br />"),d.push("<strong>width:</strong> "+l.css("width")+"<br />"),d.push("<strong>opacity:</strong> "+l.css("opacity")+"<br />"),d.push("<strong>height:</strong> "+l.css("height")+"<br />"),d.push("<strong>z-index:</strong> "+l.css("z-index")+"<br />"),d.push("<strong>font-size:</strong> "+l.css("font-size")+"<br />"),d.push("<strong>scale:</strong> "+l.data("roundabout").currentScale),d.push("</div>"),l.html(d.join(""))),l.trigger("reposition"),o.apply(u),i.isInFocus.apply(u,[s.degrees])},setBearing:function(a,n){return n=n||function(){},a=i.normalize.apply(null,[a]),this.each(function(){var n,e=t(this),o=e.data("roundabout"),r=o.bearing;o.bearing=a,e.trigger("bearingSet"),i.updateChildren.apply(e),n=Math.abs(r-a),!o.animating||n>180||(n=Math.abs(r-a),e.children(o.childSelector).each(function(n){var e;i.isChildBackDegreesBetween.apply(t(this),[a,r])&&(e=r>a?"Clockwise":"Counterclockwise",t(this).trigger("move"+e+"ThroughBack"))}))}),n.apply(this),this},adjustBearing:function(a,n){return n=n||function(){},0===a?this:(this.each(function(){i.setBearing.apply(t(this),[t(this).data("roundabout").bearing+a])}),n.apply(this),this)},setTilt:function(a,n){return n=n||function(){},this.each(function(){t(this).data("roundabout").tilt=a,i.updateChildren.apply(t(this))}),n.apply(this),this},adjustTilt:function(a,n){return n=n||function(){},this.each(function(){i.setTilt.apply(t(this),[t(this).data("roundabout").tilt+a])}),n.apply(this),this},animateToBearing:function(a,n,e,o,r){var u=(new Date).getTime();return r=r||function(){},t.isFunction(o)?(r=o,o=null):t.isFunction(e)?(r=e,e=null):t.isFunction(n)&&(r=n,n=null),this.each(function(){var l,s,d,p=t(this),c=p.data("roundabout"),h=n||c.duration,g=e||(c.easing||"swing");if(o||(o={timerStart:u,start:c.bearing,totalTime:h}),l=u-o.timerStart,c.stopAnimation)return i.allowAnimation.apply(p),void(c.animating=!1);l<h?(c.animating||p.trigger("animationStart"),c.animating=!0,"string"==typeof t.easing.def?(s=t.easing[g]||t.easing[t.easing.def],d=s(null,l,o.start,a-o.start,o.totalTime)):d=t.easing[g](l/o.totalTime,l,o.start,a-o.start,o.totalTime),i.compareVersions.apply(null,[t().jquery,"1.7.2"])>=0&&!t.easing.easeOutBack&&(d=o.start+(a-o.start)*d),d=i.normalize.apply(null,[d]),c.dragBearing=d,i.setBearing.apply(p,[d,function(){setTimeout(function(){i.animateToBearing.apply(p,[a,h,g,o,r])},0)}])):(c.lastAnimationStep=!0,a=i.normalize.apply(null,[a]),i.setBearing.apply(p,[a,function(){p.trigger("animationEnd")}]),c.animating=!1,c.lastAnimationStep=!1,c.dragBearing=a,r.apply(p))}),this},animateToNearbyChild:function(a,n){var e=a[0],o=a[1],r=a[2]||function(){};return t.isFunction(o)?(r=o,o=null):t.isFunction(e)&&(r=e,e=null),this.each(function(){var a,u,l=t(this),s=l.data("roundabout"),d=s.reflect?s.bearing:s.bearing%360,p=l.children(s.childSelector).length;if(!s.animating)if(s.reflect&&"previous"===n||!s.reflect&&"next"===n){for(d=Math.abs(d)<s.floatComparisonThreshold?360:d,a=0;a<p;a+=1)if(u={lower:s.period*a,upper:s.period*(a+1)},u.upper=a===p-1?360:u.upper,d<=Math.ceil(u.upper)&&d>=Math.floor(u.lower)){2===p&&360===d?i.animateToDelta.apply(l,[-180,e,o,r]):i.animateBearingToFocus.apply(l,[u.lower,e,o,r]);break}}else for(d=Math.abs(d)<s.floatComparisonThreshold||360-Math.abs(d)<s.floatComparisonThreshold?0:d,a=p-1;a>=0;a-=1)if(u={lower:s.period*a,upper:s.period*(a+1)},u.upper=a===p-1?360:u.upper,d>=Math.floor(u.lower)&&d<Math.ceil(u.upper)){2===p&&360===d?i.animateToDelta.apply(l,[180,e,o,r]):i.animateBearingToFocus.apply(l,[u.upper,e,o,r]);break}})},animateToNearestChild:function(a,n,e){return e=e||function(){},t.isFunction(n)?(e=n,n=null):t.isFunction(a)&&(e=a,a=null),this.each(function(){var o=i.getNearestChild.apply(t(this));i.animateToChild.apply(t(this),[o,a,n,e])})},animateToChild:function(a,n,e,o){return o=o||function(){},t.isFunction(e)?(o=e,e=null):t.isFunction(n)&&(o=n,n=null),this.each(function(){var r,u=t(this),l=u.data("roundabout");l.childInFocus===a||l.animating||(r=u.children(l.childSelector).eq(a),i.animateBearingToFocus.apply(u,[r.data("roundabout").degrees,n,e,o]))})},animateToNextChild:function(t,a,n){return i.animateToNearbyChild.apply(this,[arguments,"next"])},animateToPreviousChild:function(t,a,n){return i.animateToNearbyChild.apply(this,[arguments,"previous"])},animateToDelta:function(a,n,e,o){return o=o||function(){},t.isFunction(e)?(o=e,e=null):t.isFunction(n)&&(o=n,n=null),this.each(function(){var r=t(this).data("roundabout").bearing+a;i.animateToBearing.apply(t(this),[r,n,e,o])})},animateBearingToFocus:function(a,n,e,o){return o=o||function(){},t.isFunction(e)?(o=e,e=null):t.isFunction(n)&&(o=n,n=null),this.each(function(){var r=t(this).data("roundabout").bearing-a;r=Math.abs(360-r)<Math.abs(r)?360-r:-r,0!==(r=r>180?-(360-r):r)&&i.animateToDelta.apply(t(this),[r,n,e,o])})},stopAnimation:function(){return this.each(function(){t(this).data("roundabout").stopAnimation=!0})},allowAnimation:function(){return this.each(function(){t(this).data("roundabout").stopAnimation=!1})},startAutoplay:function(a){return this.each(function(){var n=t(this),e=n.data("roundabout");a=a||e.autoplayCallback||function(){},clearInterval(e.autoplayInterval),e.autoplayInterval=setInterval(function(){i.animateToNextChild.apply(n,[a])},e.autoplayDuration),e.autoplayIsRunning=!0,n.trigger("autoplayStart")})},stopAutoplay:function(a){return this.each(function(){clearInterval(t(this).data("roundabout").autoplayInterval),t(this).data("roundabout").autoplayInterval=null,t(this).data("roundabout").autoplayIsRunning=!1,a||t(this).unbind(".autoplay"),t(this).trigger("autoplayStop")})},toggleAutoplay:function(a){return this.each(function(){var n=t(this),e=n.data("roundabout");a=a||e.autoplayCallback||function(){},i.isAutoplaying.apply(t(this))?i.stopAutoplay.apply(t(this),[a]):i.startAutoplay.apply(t(this),[a])})},isAutoplaying:function(){return this.data("roundabout").autoplayIsRunning},changeAutoplayDuration:function(a){return this.each(function(){var n=t(this);n.data("roundabout").autoplayDuration=a,i.isAutoplaying.apply(n)&&(i.stopAutoplay.apply(n),setTimeout(function(){i.startAutoplay.apply(n)},10))})},normalize:function(t){var a=t%360;return a<0?360+a:a},normalizeRad:function(t){for(;t<0;)t+=2*Math.PI;for(;t>2*Math.PI;)t-=2*Math.PI;return t},isChildBackDegreesBetween:function(a,n){var i=t(this).data("roundabout").backDegrees;return a>n?i>=n&&i<a:i<n&&i>=a},getAnimateToMethod:function(t){return t=t.toLowerCase(),"next"===t?"animateToNextChild":"previous"===t?"animateToPreviousChild":"animateToNearestChild"},relayoutChildren:function(){return this.each(function(){var a=t(this),n=t.extend({},a.data("roundabout"));n.startingChild=a.data("roundabout").childInFocus,i.init.apply(a,[n,null,!0])})},getNearestChild:function(){var a=t(this),n=a.data("roundabout"),i=a.children(n.childSelector).length;return n.reflect?Math.round(n.bearing/n.period)%i:(i-Math.round(n.bearing/n.period)%i)%i},degToRad:function(t){return i.normalize.apply(null,[t])*Math.PI/180},getPlacement:function(t){var a=this.data("roundabout");return a.reflect?a.period*t:360-a.period*t},isInFocus:function(t){var a,n=this,e=n.data("roundabout"),o=i.normalize.apply(null,[e.bearing]);return t=i.normalize.apply(null,[t]),(a=Math.abs(o-t))<=e.floatComparisonThreshold||a>=360-e.floatComparisonThreshold},getChildInFocus:function(){var a=t(this).data("roundabout");return a.childInFocus>-1&&a.childInFocus},compareVersions:function(t,a){var n,i=t.split(/\./i),e=a.split(/\./i),o=i.length>e.length?i.length:e.length;for(n=0;n<=o;n++){if(i[n]&&!e[n]&&0!==parseInt(i[n],10))return 1;if(e[n]&&!i[n]&&0!==parseInt(e[n],10))return-1;if(i[n]!==e[n]&&(i[n]&&e[n]))return parseInt(i[n],10)>parseInt(e[n],10)?1:-1}return 0}},t.fn.roundabout=function(a){return i[a]?i[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"==typeof a||t.isFunction(a)||!a?i.init.apply(this,arguments):void t.error("Method "+a+" does not exist for jQuery.roundabout.")}}(jQuery);