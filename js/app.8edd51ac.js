(function(t){function e(e){for(var n,c,i=e[0],s=e[1],l=e[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},o={app:0},r=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09aa":function(t,e,a){},"1c1d":function(t,e,a){},"2f6e":function(t,e,a){"use strict";var n={info:{title:"孟按钮",info:"信息",null:"空",audioStaff:"音频剪辑: 魔球群:1129436805",toGithub:"请在Github参与翻译、增补音频或提出建议",notOfficial:"本站为爱好者作品，和VirtuaReal官方没有关联",overlapTips:"重叠播放无法暂停，而且会创建大量线程，玩够了最好刷新一下"},action:{toggleNavbar:"切换导航栏",close:"关闭",copy:"复制",control:"操作控制",stopvoice:"停止",randomplay:"帮我选一个",overlap:"允许声音重叠",autoplay:"播放不要停下来",playing:"正在播放：",noplay:"暂无播放"},lang:{"zh-CN":"简体中文"}};e["a"]=n},"3dfd":function(t,e,a){"use strict";var n,o,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Modal"),a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-navbar-collapse","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[t._v(t._s(t.$t("action.toggleNavbar")))]),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})]),a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(t._s(t.$t("info.title")))])],1),t._m(0)])]),a("div",{staticClass:"container-fluid main-content"},[a("HomePage")],1),a("footer",{staticClass:"footer"},[a("div",{staticClass:"container-fluid footer-content"},[a("div",{staticClass:"pull-right"},[t._m(1),a("div",{staticClass:"text-right"},[t._v("本项目"),a("a",{attrs:{href:"https://github.com/xuziang111/mahiru-button-src",target:"_blank"}},[t._v(t._s(t.$t("info.toGithub")))])]),a("div",{staticClass:"text-right"},[t._v(t._s(t.$t("info.notOfficial")))])]),a("div",[t._v(t._s(t.$t("info.audioStaff")))])])])],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-navbar-collapse"}},[a("ul",{staticClass:"nav navbar-nav"},[a("li",[a("a",{attrs:{href:"https://space.bilibili.com/477306079/",target:"_blank"}},[a("img",{attrs:{src:"resources/bilibili.svg",height:"18"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-right"},[a("a",{attrs:{href:"https://github.com/zyzsdy/aqua-button",target:"_blank"}},[t._v("原项目")])])}],i=(a("2b45"),a("fc58"),a("1462")),s=a("a340"),l=a("bb06"),u=a("3114"),p=a("198d"),f=a("a593"),d=a("60ae"),h=a.n(d),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[t._m(0),a("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v(t._s(t.$t(t.title)))])]),a("div",{staticClass:"modal-body"},[t._v(" "+t._s(t.$t(t.msg))+" ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("action.close")))])])])])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],m=a("b9d0"),y=a("ce3c"),C=a("a336"),g=a.n(C);function k(t){var e=_();return function(){var a,n=Object(p["a"])(t);if(e){var o=Object(p["a"])(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(u["a"])(this,a)}}function _(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var O,j,N=h()((o=function(t){Object(l["a"])(a,t);var e=k(a);function a(){var t;Object(i["a"])(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o)),Object(y["a"])(Object(m["a"])(t),"title","info.info"),Object(y["a"])(Object(m["a"])(t),"msg","info.null"),t}return Object(s["a"])(a,[{key:"created",value:function(){var t=this;this.$gConst.globalbus.$on("send-info",(function(e){t.msg=e,t.showModal()}))}},{key:"showModal",value:function(){g()("#myModal").modal()}}]),a}(f["default"]),n=o))||n,z=N,$=z,w=(a("b338"),a("9ca4")),x=Object(w["a"])($,v,b,!1,null,null,null),P=x.exports,S=a("c3b0");function A(t){var e=M();return function(){var a,n=Object(p["a"])(t);if(e){var o=Object(p["a"])(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(u["a"])(this,a)}}function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var R=(O=h()({components:{Modal:P,HomePage:S["a"]}}),O(j=function(t){Object(l["a"])(a,t);var e=A(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(s["a"])(a,[{key:"created",value:function(){console.log("Produced by MoewSound Idols"),this.$i18n.locale=localStorage.getItem("lang")||this.$i18n.locale}},{key:"chlang",value:function(t){this.$i18n.locale=t,localStorage.setItem("lang",t)}},{key:"currentLang",get:function(){return this.$i18n.locale}}]),a}(f["default"]))||j),D=R,E=D,I=(a("5c0b"),Object(w["a"])(E,r,c,!1,null,null,null));e["a"]=I.exports},"41cb":function(t,e,a){"use strict";var n=a("a593"),o=a("3211"),r=a("c3b0");n["default"].use(o["a"]),e["a"]=new o["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:r["a"]}]})},"56d7":function(t,e,a){"use strict";a.r(e),function(t){a("6d57"),a("309f"),a("0b53"),a("06a2"),a("ec25"),a("cc57"),a("2b45"),a("e44b"),a("6648"),a("5f54"),a("f0e6");var e=a("a593"),n=a("3ddb"),o=a("41cb"),r=a("3dfd"),c=a("2f6e"),i=a("a336"),s=a.n(i),l=(a("cace"),a("898e")),u=a("da57");function p(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=f(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,i=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return c=t.done,t},e:function(t){i=!0,r=t},f:function(){try{c||null==a.return||a.return()}finally{if(i)throw r}}}}function f(t,e){if(t){if("string"===typeof t)return d(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}t.jQuery=t.$=s.a;var h,v={voice:{},voicecategory:{}},b=p(u.voices);try{for(b.s();!(h=b.n()).done;){var m=h.value;void 0!==m.categoryDescription&&void 0!==m.categoryDescription["zh-CN"]&&(v.voicecategory[m.categoryName]=m.categoryDescription["zh-CN"]);var y,C=p(m.voiceList);try{for(C.s();!(y=C.n()).done;){var g=y.value;void 0!==g.description&&void 0!==g.description["zh-CN"]&&(v.voice[g.name]=g.description["zh-CN"])}}catch(N){C.e(N)}finally{C.f()}}}catch(N){b.e(N)}finally{b.f()}var k=Object.assign(c["a"],v);e["default"].config.productionTip=!1,e["default"].use(n["a"]),e["default"].use(l["a"]);var _={"zh-CN":k},O="zh-CN",j=new n["a"]({locale:O,messages:_});new e["default"]({router:o["a"],i18n:j,render:function(t){return t(r["a"])}}).$mount("#app")}.call(this,a("532c"))},"5c0b":function(t,e,a){"use strict";var n=a("09aa"),o=a.n(n);o.a},"898e":function(t,e,a){"use strict";var n=a("1462"),o=a("a340"),r=a("a593"),c=function(){function t(){Object(n["a"])(this,t)}return Object(o["a"])(t,[{key:"install",value:function(t){t.prototype.$gConst={globalbus:new r["default"]}}}]),t}();e["a"]=new c},"96e4":function(t,e,a){},b338:function(t,e,a){"use strict";var n=a("1c1d"),o=a.n(n);o.a},c3b0:function(t,e,a){"use strict";var n,o,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",[a("div",{staticClass:"cate-header"},[t._v(t._s(t.$t("action.control")))]),a("div",{staticClass:"cate-body"},[a("button",{staticClass:"btn btn-info",on:{click:t.random}},[t._v(t._s(t.$t("action.randomplay")))]),a("button",{staticClass:"btn btn-info",on:{click:t.stopPlay}},[t._v(t._s(t.$t("action.stopvoice")))]),a("button",{staticClass:"btn btn-info",class:{disabled:t.autoCheck},attrs:{title:t.$t("info.overlapTips")},on:{click:t.overlap}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.overlapCheck,expression:"overlapCheck"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.overlapCheck)?t._i(t.overlapCheck,null)>-1:t.overlapCheck},on:{change:function(e){var a=t.overlapCheck,n=e.target,o=!!n.checked;if(Array.isArray(a)){var r=null,c=t._i(a,r);n.checked?c<0&&(t.overlapCheck=a.concat([r])):c>-1&&(t.overlapCheck=a.slice(0,c).concat(a.slice(c+1)))}else t.overlapCheck=o}}}),a("span",[t._v(t._s(t.$t("action.overlap")))])]),a("button",{staticClass:"btn btn-info",class:{disabled:t.overlapCheck},on:{click:t.autoPlay}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.autoCheck,expression:"autoCheck"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.autoCheck)?t._i(t.autoCheck,null)>-1:t.autoCheck},on:{change:function(e){var a=t.autoCheck,n=e.target,o=!!n.checked;if(Array.isArray(a)){var r=null,c=t._i(a,r);n.checked?c<0&&(t.autoCheck=a.concat([r])):c>-1&&(t.autoCheck=a.slice(0,c).concat(a.slice(c+1)))}else t.autoCheck=o}}}),a("span",[t._v(t._s(t.$t("action.autoplay")))])])]),a("div",{staticClass:"cate-body"},[a("span",[t._v(t._s(t.voice.name?t.$t("action.playing")+t.$t("voice."+t.voice.name):t.$t("action.noplay")))])]),a("audio",{attrs:{id:"player"},on:{ended:function(e){return t.voiceEnd(!1)}}})]),t._l(t.voices,(function(e){return a("div",{key:e.categoryName},[a("div",{staticClass:"cate-header"},[t._v(t._s(t.$t("voicecategory."+e.categoryName)))]),a("div",{staticClass:"cate-body"},t._l(e.voiceList,(function(e){return a("button",{key:e.name,staticClass:"btn btn-new",on:{click:function(a){return t.play(e)}}},[t._v(" "+t._s(t.$t("voice."+e.name))+" ")])})),0)])}))],2)},c=[],i=(a("2b45"),a("fc58"),a("1462")),s=a("a340"),l=a("b9d0"),u=a("bb06"),p=a("3114"),f=a("198d"),d=a("ce3c"),h=a("a593"),v=a("60ae"),b=a.n(v),m=a("da57");function y(t){var e=C();return function(){var a,n=Object(f["a"])(t);if(e){var o=Object(f["a"])(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(p["a"])(this,a)}}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var g=b()((o=function(t){Object(u["a"])(a,t);var e=y(a);function a(){var t;Object(i["a"])(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o)),Object(d["a"])(Object(l["a"])(t),"voices",m.voices),Object(d["a"])(Object(l["a"])(t),"autoCheck",!1),Object(d["a"])(Object(l["a"])(t),"overlapCheck",!1),Object(d["a"])(Object(l["a"])(t),"voice",{}),t}return Object(s["a"])(a,[{key:"play",value:function(t){if(this.overlapCheck){var e=new Audio("voices/"+t.path);this.voice=t,e.play()}else{this.stopPlay();var a=document.getElementById("player");a.src="voices/"+t.path,this.voice=t,a.play()}}},{key:"stopPlay",value:function(){var t=document.getElementById("player");t.pause(),this.voiceEnd(!0)}},{key:"voiceEnd",value:function(t){!0!==t&&this.autoCheck?this.random():this.voice={}}},{key:"random",value:function(){var t=this.voices[this._randomNum(0,this.voices.length-1)];this.play(t.voiceList[this._randomNum(0,t.voiceList.length-1)])}},{key:"autoPlay",value:function(){this.overlapCheck||(this.autoCheck=!this.autoCheck)}},{key:"overlap",value:function(){this.autoCheck||(this.overlapCheck=!this.overlapCheck)}},{key:"_randomNum",value:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}}]),a}(h["default"]),n=o))||n,k=g,_=k,O=(a("e472"),a("9ca4")),j=Object(O["a"])(_,r,c,!1,null,"350f3eb2",null);e["a"]=j.exports},da57:function(t){t.exports=JSON.parse('{"voices":[{"categoryName":"voice","categoryDescription":{"zh-CN":"音声"},"voiceList":[{"name":"八爪鱼","path":"八爪鱼.mp3","description":{"zh-CN":"八爪鱼"}},{"name":"伸懒腰","path":"伸懒腰.mp3","description":{"zh-CN":"伸懒腰"}},{"name":"这合理吗","path":"这合理吗.mp3","description":{"zh-CN":"这合理吗"}}]},{"categoryName":"actmoe","categoryDescription":{"zh-CN":"念诗"},"voiceList":[{"name":"別有幽愁闇恨生此時無聲勝有聲","path":"別有幽愁闇恨生此時無聲勝有聲.mp3","description":{"zh-CN":"別有幽愁闇恨生此時無聲勝有聲"}},{"name":"出師表","path":"出師表.mp3","description":{"zh-CN":"出師表"}},{"name":"春眠不覺曉","path":"春眠不覺曉.mp3","description":{"zh-CN":"春眠不覺曉"}},{"name":"遊蕩的孤高靈魂是不需要羈絆之地的","path":"遊蕩的孤高靈魂是不需要羈絆之地的.mp3","description":{"zh-CN":"遊蕩的孤高靈魂是不需要羈絆之地的"}},{"name":"謫居臥病潯陽城","path":"謫居臥病潯陽城.mp3","description":{"zh-CN":"謫居臥病潯陽城"}}]},{"categoryName":"common","categoryDescription":{"zh-CN":"通用"},"voiceList":[{"name":"不錯嘛miki作為工具人你做得還是可以的","path":"不錯嘛miki作為工具人你做得還是可以的.mp3","description":{"zh-CN":"不錯嘛miki作為工具人你做得還是可以的"}},{"name":"蟲群摧毀了我們的家園","path":"蟲群摧毀了我們的家園.mp3","description":{"zh-CN":"蟲群摧毀了我們的家園"}},{"name":"到了30歲","path":"到了30歲.mp3","description":{"zh-CN":"到了30歲"}},{"name":"鋼板一樣的身材","path":"鋼板一樣的身材.mp3","description":{"zh-CN":"鋼板一樣的身材"}},{"name":"看起來和我一樣不能打","path":"看起來和我一樣不能打.mp3","description":{"zh-CN":"看起來和我一樣不能打"}},{"name":"亮劍台詞","path":"亮劍台詞.mp3","description":{"zh-CN":"亮劍台詞2"}},{"name":"沒有早安之吻就起不來了嗎","path":"沒有早安之吻就起不來了嗎.mp3","description":{"zh-CN":"沒有早安之吻就起不來了嗎"}},{"name":"男人爬","path":"男人爬.mp3","description":{"zh-CN":"男人爬"}},{"name":"你的眼圈看起來有點發紅","path":"你的眼圈看起來有點發紅.mp3","description":{"zh-CN":"你的眼圈看起來有點發紅"}},{"name":"你怎麼睡得著覺太沒出息了","path":"你怎麼睡得著覺太沒出息了.mp3","description":{"zh-CN":"你怎麼睡得著覺太沒出息了"}},{"name":"錢隨時打人隨時爬","path":"錢隨時打人隨時爬.mp3","description":{"zh-CN":"錢隨時打人隨時爬"}},{"name":"弱さは罪","path":"弱さは罪.mp3","description":{"zh-CN":"弱さは罪"}},{"name":"他們又開始在房間裡燒烤了","path":"他們又開始在房間裡燒烤了.mp3","description":{"zh-CN":"他們又開始在房間裡燒烤了"}},{"name":"我的媽我的肌肉長這麼大給你摸一摸","path":"我的媽我的肌肉長這麼大給你摸一摸.mp3","description":{"zh-CN":"我的媽我的肌肉長這麼大給你摸一摸"}},{"name":"我加了些牛奶趁熱喝吧","path":"我加了些牛奶趁熱喝吧.mp3","description":{"zh-CN":"我加了些牛奶趁熱喝吧"}},{"name":"現充爆炸吧","path":"現充爆炸吧.mp3","description":{"zh-CN":"現充爆炸吧"}},{"name":"explosion","path":"explosion.mp3","description":{"zh-CN":"explosion"}}]}]}')},e472:function(t,e,a){"use strict";var n=a("96e4"),o=a.n(n);o.a}});
//# sourceMappingURL=app.8edd51ac.js.map