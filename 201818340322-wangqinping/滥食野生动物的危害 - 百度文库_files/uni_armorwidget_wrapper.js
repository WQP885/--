var passport=passport||window.passport||{};passport._modulePool=passport._modulePool||{},passport._define=passport._define||function(t,e){passport._modulePool[t]=e&&e()},passport._getModule=passport._getModule||function(t){return passport._modulePool[t]},passport.pop=passport.pop||{},passport.pop.insertScript=passport.pop.insertScript||function(t,e){var s=document,o=s.createElement("SCRIPT");o.type="text/javascript",o.charset="UTF-8",o.readyState?o.onreadystatechange=function(){("loaded"==o.readyState||"complete"==o.readyState)&&(o.onreadystatechange=null,e&&e())}:o.onload=function(){e&&e()},o.src=t,s.getElementsByTagName("head")[0].appendChild(o)},passport.pop.initForceverify=passport.pop.initForceverify||function(t){var e,s={"http:":"http://passport.baidu.com","https:":"https://passport.baidu.com"},o=s[window.location.protocol.toLowerCase()],a={uni_forceverify:"/passApi/js/uni_forceverify_4fb0af4.js",lib_rsa:"/passApi/js/lib/rsa_6ce55c4.js",idcard_validate:"/passApi/js/lib/idcard_validate.min_6738f5b.js"},p="/passApi/css/uni_forceverify_dbae99f.css",t=t||{},r=document,t=t||{},n=("_PassUni"+(new Date).getTime(),o+p);return t.cssUrlWrapper&&(n=cssUrlWrapper.join("uni_forceverify.css")),e={show:function(){return e.loadPass(),e},loadPass:function(){var t=r.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=n,t.disabled=!1,t.setAttribute("data-for","result"),r.getElementsByTagName("head")[0].appendChild(t),e.passCallback(),delete e.loadPass},passCallback:function(){if(e.components.length>0)passport.pop.insertScript(e.components.shift(),e.passCallback);else{var s=passport.pop.Forceverify;new s(t,!0,e),delete e.passCallback,delete e.components}},components:[]},e.components.push(o+a.uni_forceverify),e.components.push(o+a.lib_rsa),e.components.push(o+a.idcard_validate),t.cache&&e.loadPass(),e},passport.pop=passport.pop||{},passport.pop.insertScript||(passport.pop.insertScript=function(t,e){var s=document.createElement("SCRIPT");s.type="text/javascript",s.charset="UTF-8",s.readyState?s.onreadystatechange=function(){("loaded"===s.readyState||"complete"===s.readyState)&&(s.onreadystatechange=null,e&&e())}:s.onload=function(){e&&e()},s.src=t,document.getElementsByTagName("head")[0].appendChild(s)}),passport.pop.ArmorWidget||(passport.pop.ArmorWidget=function(t,e){if(window.passport_pop_ArmorWidget_instance)return{show:function(){}};window.passport_pop_ArmorWidget_instance=!0;var s={"http:":"http://passport.baidu.com","https:":"https://passport.baidu.com"}[window.location.protocol.toLowerCase()],o={uni_wrapper:[s,"/passApi/js/uni_wrapper.js?cdnversion=d9b222"].join(""),md5:[s,"/passApi/js/lib/md5.min_8c25c62.js"].join(""),uni_armorwidget:[s,"/passApi/js/uni/armorwidget_8e97df1.js"].join("")},a=null,e=e||{};a=e.cssDir?e.cssDir+"/uni_armorwidget.css?tt="+(new Date).getTime():[s,"/passApi/css/uni_armorwidget_c2f8a55.css"].join("");var p={show:function(){p.loadStyle(),p.loadScript()},loadStyle:function(){var t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=a,t.disabled=!1,t.setAttribute("data-for","result"),document.getElementsByTagName("head")[0].appendChild(t),delete p.loadStyle},resouses:[o.uni_wrapper,o.md5,o.uni_armorwidget,"https://passport.baidu.com/static/passpc-base/js/ld.min.js","https://wappass.baidu.com/static/waplib/moonshad.js"],loadScript:function(){p.resouses.length>0?passport.pop.insertScript(p.resouses.shift(),p.loadScript):(p.callImp(),delete p.loadScript,delete p.resouses)},callImp:function(){e.onAfterClose=function(){window.passport_pop_ArmorWidget_instance=!1};var s=passport.pop.ArmorWidgetImp;new s(t,e,!0,this)}};return e.cache&&p.loadStyle(),p});