(function(t){function e(e){for(var i,l,o=e[0],r=e[1],d=e[2],v=0,u=[];v<o.length;v++)l=o[v],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&u.push(a[l][0]),a[l]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);c&&c(e);while(u.length)u.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,o=1;o<s.length;o++){var r=s[o];0!==a[r]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=s[0]))}return t}var i={},a={app:0},n=[];function l(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=i,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(s,i,function(e){return t[e]}.bind(null,i));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/khwaaish-e-test-server/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var c=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"000a":function(t,e,s){},1074:function(t,e,s){},"18ba":function(t,e,s){"use strict";var i=s("c75a"),a=s.n(i);a.a},"36fb":function(t,e,s){"use strict";var i=s("8337"),a=s.n(i);a.a},"3dfd":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("layout")],1)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("layout-component")],1)},l=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("HeaderView"),s("router-view"),s("FooterView")],1)},r=[],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header-component")],1)},c=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("navview")],1)},u=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("center",[i("h2",[i("img",{staticClass:"img-rounded",attrs:{src:s("b189"),alt:"Cinque Terre"}})]),i("nav",{staticClass:"tabs"},[i("div",{staticClass:"selector"}),i("a",{staticClass:"active",attrs:{href:"javascript:void(0)"}},[i("i",{staticClass:"fa fa-home"}),t._v("Home")]),i("a",{attrs:{href:"javascript:void(0)"}},[i("i",{staticClass:"fa fa-shopping-basket"}),t._v("Products")]),i("a",{attrs:{href:"javascript:void(0)"}},[i("i",{staticClass:"fa fa-book"}),t._v("About")]),i("a",{attrs:{href:"javascript:void(0)"}},[i("i",{staticClass:"fa fa-phone"}),t._v("Contact Us")])])])],1)},f=[],p=(s("7db0"),s("1157")),m=s.n(p),_={name:"navview",mounted:function(){var t=m()(".tabs"),e=t.find(".active"),s=e.innerWidth();m()(".selector").css({left:e.position.left+"px",width:s+"px"}),m()(".tabs").on("click","a",(function(t){t.preventDefault(),m()(".tabs a").removeClass("active"),m()(this).addClass("active");var e=m()(this).innerWidth(),s=m()(this).position();m()(".selector").css({left:s.left+"px",width:e+"px"})}))}},C=_,b=(s("36fb"),s("2877")),w=Object(b["a"])(C,h,f,!1,null,null,null),g=w.exports,x={name:"header-component",props:{msg:String},components:{navview:g}},k=x,y=Object(b["a"])(k,v,u,!1,null,"a961a336",null),j=y.exports,S={name:"HeaderView",components:{HeaderComponent:j}},T=S,R=Object(b["a"])(T,d,c,!1,null,null,null),$=R.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("footer-component")],1)},L=[],H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("footerview")],1)},E=[],N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("footer",{staticClass:"page-footer font-small cyan darken-3"},[s("div",{staticClass:"content"},[s("h1",[t._v("Follow Us On")]),s("div",{staticClass:"icons"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-github"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-twitter"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-codepen"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-instagram"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-dribbble"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-behance"})]),s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-linkedin"})]),s("br"),s("div",[t._v(" © 2020 Copyright: "),s("span",[t._v(" Khaaish-e.com")])])])])])])}],A={name:"footerview"},P=A,M=(s("3e3e"),Object(b["a"])(P,N,z,!1,null,"16065f4e",null)),W=M.exports,F={name:"footer-component",components:{footerview:W}},D=F,q=Object(b["a"])(D,H,E,!1,null,null,null),I=q.exports,V={name:"FooterView",components:{FooterComponent:I}},X=V,B=Object(b["a"])(X,O,L,!1,null,null,null),J=B.exports,U={name:"layout-component",components:{HeaderView:$,FooterView:J}},K=U,Q=Object(b["a"])(K,o,r,!1,null,null,null),G=Q.exports,Y={name:"layout",components:{LayoutComponent:G}},Z=Y,tt=Object(b["a"])(Z,n,l,!1,null,null,null),et=tt.exports,st={components:{Layout:et}},it=st,at=Object(b["a"])(it,i,a,!1,null,null,null);e["a"]=at.exports},"3e3e":function(t,e,s){"use strict";var i=s("1074"),a=s.n(i);a.a},4360:function(t,e,s){"use strict";var i=s("2b0e"),a=s("2f62");i["a"].use(a["a"]),e["a"]=new a["a"].Store({state:{},mutations:{},actions:{},modules:{}})},"56d7":function(t,e,s){"use strict";s.r(e),function(t){s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=s("3dfd"),a=s("a18c"),n=s("4360"),l=s("1157"),o=s.n(l);s("4989"),s("ab8b");t.jQuery=o.a,t.$=o.a,e["a"].config.productionTip=!1,new e["a"]({router:a["a"],store:n["a"],render:function(t){return t(i["a"])}}).$mount("#app")}.call(this,s("c8ba"))},5840:function(t,e,s){"use strict";var i=s("8382"),a=s.n(i);a.a},"5fdf":function(t,e,s){},8337:function(t,e,s){},8382:function(t,e,s){},a18c:function(t,e,s){"use strict";var i=s("2b0e"),a=s("8c4f"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("home-component")],1)},l=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mainslider"),s("hotdeals"),s("newarrival"),s("popularproducts")],1)},r=[],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"wrapper"}},[s("section",{staticClass:"slideshow",attrs:{id:"js-header"}},[t._m(0),t._m(1),t._m(2),s("div",{staticClass:"c-header-home_footer"},[s("div",{staticClass:"o-container"},[s("div",{staticClass:"c-header-home_controls -nomobile o-button-group"},[s("div",{staticClass:"js-parallax is-inview",attrs:{"data-speed":"1","data-position":"top","data-target":"#js-header"}},[s("button",{staticClass:"o-button -white -square -left js-slider-home-button js-slider-home-prev",attrs:{type:"button"}},[s("span",{staticClass:"o-button_label"},[s("svg",{staticClass:"o-button_icon",attrs:{role:"img"}},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-prev"}})])])]),s("button",{staticClass:"o-button -white -square js-slider-home-button js-slider-home-next",attrs:{type:"button"}},[s("span",{staticClass:"o-button_label"},[s("svg",{staticClass:"o-button_icon",attrs:{role:"img"}},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-next"}})])])])])])])])]),s("div",[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg"}},[s("symbol",{attrs:{viewBox:"0 0 18 18",id:"arrow-next"}},[s("path",{attrs:{id:"arrow-next-arrow.svg",d:"M12.6,9L4,17.3L4.7,18l8.5-8.3l0,0L14,9l0,0l-0.7-0.7l0,0L4.7,0L4,0.7L12.6,9z"}})]),s("symbol",{attrs:{viewBox:"0 0 18 18",id:"arrow-prev"}},[s("path",{attrs:{id:"arrow-prev-arrow.svg",d:"M14,0.7L13.3,0L4.7,8.3l0,0L4,9l0,0l0.7,0.7l0,0l8.5,8.3l0.7-0.7L5.4,9L14,0.7z"}})])])])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slideshow__slide js-slider-home-slide is-current",attrs:{"data-slide":"1"}},[s("div",{staticClass:"slideshow__slide-background-parallax background-absolute js-parallax",attrs:{"data-speed":"-1","data-position":"top","data-target":"#js-header"}},[s("div",{staticClass:"slideshow__slide-background-load-wrap background-absolute"},[s("div",{staticClass:"slideshow__slide-background-load background-absolute"},[s("div",{staticClass:"slideshow__slide-background-wrap background-absolute"},[s("div",{staticClass:"slideshow__slide-background background-absolute"},[s("div",{staticClass:"slideshow__slide-image-wrap background-absolute"},[s("div",{staticClass:"slideshow__slide-image background-absolute",staticStyle:{"background-image":"url('https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920')"}})])])])])])]),s("div",{staticClass:"slideshow__slide-caption"},[s("div",{staticClass:"slideshow__slide-caption-text"},[s("div",{staticClass:"container js-parallax",attrs:{"data-speed":"2","data-position":"top","data-target":"#js-header"}},[s("h1",{staticClass:"slideshow__slide-caption-title"},[t._v("Everything broken can be repaired")]),s("a",{staticClass:"slideshow__slide-caption-subtitle -load o-hsub -link",attrs:{href:"#"}},[s("span",{staticClass:"slideshow__slide-caption-subtitle-label"},[t._v("See how")])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slideshow__slide js-slider-home-slide is-next",attrs:{"data-slide":"2"}},[s("div",{staticClass:"slideshow__slide-background-parallax background-absolute js-parallax",attrs:{"data-speed":"-1","data-position":"top","data-target":"#js-header"}},[s("div",{staticClass:"slideshow__slide-background-load-wrap background-absolute"},[s("div",{staticClass:"slideshow__slide-background-load background-absolute"},[s("div",{staticClass:"slideshow__slide-background-wrap background-absolute"},[s("div",{staticClass:"slideshow__slide-background background-absolute"},[s("div",{staticClass:"slideshow__slide-image-wrap background-absolute"},[s("div",{staticClass:"slideshow__slide-image background-absolute",staticStyle:{"background-image":"url('https://images.pexels.com/photos/110649/pexels-photo-110649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920')"}})])])])])])]),s("div",{staticClass:"slideshow__slide-caption"},[s("div",{staticClass:"slideshow__slide-caption-text"},[s("div",{staticClass:"container js-parallax",attrs:{"data-speed":"2","data-position":"top","data-target":"#js-header"}},[s("h1",{staticClass:"slideshow__slide-caption-title"},[t._v("See through the field")]),s("a",{staticClass:"slideshow__slide-caption-subtitle -load o-hsub -link",attrs:{href:"#"}},[s("span",{staticClass:"slideshow__slide-caption-subtitle-label"},[t._v("Learn more about")])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slideshow__slide js-slider-home-slide is-prev",attrs:{"data-slide":"3"}},[s("div",{staticClass:"slideshow__slide-background-parallax background-absolute js-parallax",attrs:{"data-speed":"-1","data-position":"top","data-target":"#js-header"}},[s("div",{staticClass:"slideshow__slide-background-load-wrap background-absolute"},[s("div",{staticClass:"slideshow__slide-background-load background-absolute"},[s("div",{staticClass:"slideshow__slide-background-wrap background-absolute"},[s("div",{staticClass:"slideshow__slide-background background-absolute"},[s("div",{staticClass:"slideshow__slide-image-wrap background-absolute"},[s("div",{staticClass:"slideshow__slide-image background-absolute",staticStyle:{"background-image":"url('https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920')"}})])])])])])]),s("div",{staticClass:"slideshow__slide-caption"},[s("div",{staticClass:"slideshow__slide-caption-text"},[s("div",{staticClass:"container js-parallax",attrs:{"data-speed":"2","data-position":"top","data-target":"#js-header"}},[s("h1",{staticClass:"slideshow__slide-caption-title"},[t._v("Hey, take a time to relax!")]),s("a",{staticClass:"slideshow__slide-caption-subtitle -load o-hsub -link",attrs:{href:"#"}},[s("span",{staticClass:"slideshow__slide-caption-subtitle-label"},[t._v("Everybody needs")])])])])])])}],v=(s("99af"),s("7db0"),s("d4ec")),u=s("bee2"),h=s("1157"),f=s.n(h),p={name:"main-slider",mounted:function(){var t=f()(window),e=f()("body"),s=function(){function t(){var e=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(v["a"])(this,t);var i={$el:f()(".slideshow"),showArrows:!1,showPagination:!0,duration:1e4,autoplay:!0},a=Object.assign({},i,s);this.$el=a.$el,this.maxSlide=this.$el.find(f()(".js-slider-home-slide")).length,this.showArrows=this.maxSlide>1&&a.showArrows,this.showPagination=a.showPagination,this.currentSlide=1,this.isAnimating=!1,this.animationDuration=1200,this.autoplaySpeed=a.duration,this.interval,this.$controls=this.$el.find(".js-slider-home-button"),this.autoplay=this.maxSlide>1&&a.autoplay,this.$el.on("click",".js-slider-home-next",(function(t){return e.nextSlide()})),this.$el.on("click",".js-slider-home-prev",(function(t){return e.prevSlide()})),this.$el.on("click",".js-pagination-item",(function(t){e.isAnimating||(e.preventClick(),e.goToSlide(t.target.dataset.slide))})),this.init()}return Object(u["a"])(t,[{key:"init",value:function(){if(this.goToSlide(1),this.autoplay&&this.startAutoplay(),this.showPagination){this.maxSlide;for(var t='<div class="pagination"><div class="container">',e=0;e<this.maxSlide;e++){var s='<span class="pagination__item js-pagination-item '.concat(0===e?"is-current":"",'" data-slide=').concat(e+1,">").concat(e+1,"</span>");t+=s}t+="</div></div>",this.$el.append(t)}}},{key:"preventClick",value:function(){var t=this;this.isAnimating=!0,this.$controls.prop("disabled",!0),clearInterval(this.interval),setTimeout((function(){t.isAnimating=!1,t.$controls.prop("disabled",!1),t.autoplay&&t.startAutoplay()}),this.animationDuration)}},{key:"goToSlide",value:function(t){this.currentSlide=parseInt(t),this.currentSlide>this.maxSlide&&(this.currentSlide=1),0===this.currentSlide&&(this.currentSlide=this.maxSlide);var e=this.$el.find('.js-slider-home-slide[data-slide="'+this.currentSlide+'"]'),s=1===this.currentSlide?this.$el.find(".js-slider-home-slide").last():e.prev(".js-slider-home-slide"),i=this.currentSlide===this.maxSlide?this.$el.find(".js-slider-home-slide").first():e.next(".js-slider-home-slide");this.$el.find(".js-slider-home-slide").removeClass("is-prev is-next is-current"),this.$el.find(".js-pagination-item").removeClass("is-current"),this.maxSlide>1&&(s.addClass("is-prev"),i.addClass("is-next")),e.addClass("is-current"),this.$el.find('.js-pagination-item[data-slide="'+this.currentSlide+'"]').addClass("is-current")}},{key:"nextSlide",value:function(){this.preventClick(),this.goToSlide(this.currentSlide+1)}},{key:"prevSlide",value:function(){this.preventClick(),this.goToSlide(this.currentSlide-1)}},{key:"startAutoplay",value:function(){var t=this;this.interval=setInterval((function(){t.isAnimating||t.nextSlide()}),this.autoplaySpeed)}},{key:"destroy",value:function(){this.$el.off()}}]),t}();(function(){var i=!1,a=3e3;function n(){var t={showPagination:!0};new s(t)}function l(){e.addClass("is-loaded"),setTimeout((function(){e.addClass("is-animated")}),600)}t.on("load",(function(){i||(i=!0,n())})),setTimeout((function(){i||(i=!0,n())}),a),l()})()}},m=p,_=(s("18ba"),s("2877")),C=Object(_["a"])(m,d,c,!1,null,"a08954ca",null),b=C.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"hotdeals"},[s("h1",[t._v(" Hot Deals ")])]),s("div",{staticClass:"container p8"},[s("div",{staticClass:"resCarousel",attrs:{"data-items":"2-3-4-5","data-slide":"5","data-speed":"900","data-interval":"4000","data-load":"3","data-animator":"lazy"}},[s("div",{staticClass:"resCarousel-inner",attrs:{id:"eventLoad"}},[s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("1")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("2")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("3")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("4")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("5")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("6")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("7")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("8")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("9")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("10")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("11")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("12")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("13")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("14")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])])]),s("button",{staticClass:"btn btn-default leftRs"}),s("button",{staticClass:"btn btn-default rightRs"})])])])}],x=(s("b680"),s("ac1f"),s("1276"),{name:"hotdeals",mounted:function(){function t(){i(),f()(document).on("click",".leftRs, .rightRs",(function(){a(this)})),f()(document).on("mouseenter",".ResHover",(function(){f()(this).addClass("ResHovered")})),f()(document).on("mouseleave",".ResHover",(function(){f()(this).removeClass("ResHovered")}))}function e(t){var e=f()(t).find(".rightRs"),s=f()(t).attr("data-interval");!isNaN(s)&&f()(t).addClass("ResHover")&&setInterval((function(){!e.parent().hasClass("ResHovered")&&a(e)}),+s)}function s(){function t(){console.log("resize Works"),f()(".resCarousel").each((function(){var t=f()(this).attr("data-value"),e=f()(this).find(".item").width();f()(this).find(".resCarousel-inner").scrollLeft(t*e)}))}t()}function i(){var t=performance.now();f()(".resCarousel").each((function(t){var s=f()(this).attr("data-items").split("-");f()(this).addClass("ResSlid"+t);for(var i=0;i<4;i++)if(0==i)var a=".ResSlid"+t+" .item {width: "+100/s[i]+"%}";else if(1==i)var n=".ResSlid"+t+" .item {width: "+100/s[i]+"%}";else if(2==i)var l=".ResSlid"+t+" .item {width: "+100/s[i]+"%}";else if(3==i)var o=".ResSlid"+t+" .item {width: "+100/s[i]+"%}";f()(this).attr("data-value","0");var r="@media (max-width:767px){"+a+"}@media (min-width:768px){"+n+"}@media (min-width:992px){"+l+"}@media (min-width:1200px){"+o+"}";f()(this).find("style").remove(),f()(this).append("<style>"+r+"</style>"),e(this)}));var s=performance.now();console.log("Took",(s-t).toFixed(4),"milliseconds to Size")}function a(t){var e=f()(t).parent(),s=+e.attr("data-slide"),i=e.find(".resCarousel-inner"),a=+e.attr("data-speed"),o=+e.attr("data-load"),r="",d="",c=i.find(".item").length,v=i.find(".item").outerWidth(),u=+Math.round(i.outerWidth()/v),h=f()(t).hasClass("leftRs"),p=Math.round(i.scrollLeft()/v);if(a=isNaN(a)?400:a,s=s<u?s:u,h){d=p-s,r=d*v;var m=d+s;0==p?(d=c-s,r=d*v,d=c-u,a=400):s>=m&&(d=r=0)}else{d=p+s,r=d*v;m=d+s;p+u==c?(d=r=0,a=400):c<=m-s+u&&(d=c-s,r=d*v,d=c-u)}"lazy"==e.attr("data-animator")&&l(i,h?0:1,d+1,d+u,a,s*v),isNaN(o)||(o=o>=s?o:s,c-o<=d+u&&n(i)),i.animate({scrollLeft:r},a),e.attr("data-value",d)}function n(t){f()("#"+t.attr("id")).trigger("ResCarouselLoad")}function l(t,e,s,i,a,n){var l=5;if(0==e){for(var o=s-1;o<i+1;o++)l*=2;l=-l}for(o=s-1;o<i;o++)l=0==e?l/2:2*l,t.find(".item").eq(o).css("transform","translateX("+l+"px)");setTimeout((function(){t.find(".item").attr("style","")}),a-70)}f()(document).ready((function(){t()})),f()(window).resize((function(){var t=new Date;setTimeout((function(){s(t)}),200)}))}}),k=x,y=(s("c7e3"),Object(_["a"])(k,w,g,!1,null,"50b41447",null)),j=y.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("br"),s("div",{staticClass:"container"},[s("h1",{staticClass:"animation"},[t._v(" New Arrival ")])]),s("div",{staticClass:"container p8"},[s("div",{staticClass:"resCarousel",attrs:{"data-items":"2-3-4-5","data-slide":"5","data-speed":"900","data-interval":"4000","data-load":"3","data-animator":"lazy"}},[s("div",{staticClass:"resCarousel-inner",attrs:{id:"eventLoad"}},[s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("1")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("2")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("3")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("4")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("5")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("6")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("7")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("8")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("9")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("10")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("11")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("12")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("13")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("14")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])])]),s("button",{staticClass:"btn btn-default leftRs"}),s("button",{staticClass:"btn btn-default rightRs"})])])])}],R={name:"newarrival",mounted:function(){function t(){i(),f()(document).on("click",".leftRs, .rightRs",(function(){a(this)})),f()(document).on("mouseenter",".ResHover",(function(){f()(this).addClass("ResHovered")})),f()(document).on("mouseleave",".ResHover",(function(){f()(this).removeClass("ResHovered")}))}function e(t){var e=f()(t).find(".rightRs"),s=f()(t).attr("data-interval");!isNaN(s)&&f()(t).addClass("ResHover")&&setInterval((function(){!e.parent().hasClass("ResHovered")&&a(e)}),+s)}function s(){function t(){console.log("resize Works"),f()(".resCarousel").each((function(){var t=f()(this).attr("data-value"),e=f()(this).find(".item").width();f()(this).find(".resCarousel-inner").scrollLeft(t*e)}))}t()}function i(){var t=performance.now();f()(".resCarousel").each((function(t){var s=f()(this).attr("data-items").split("-");f()(this).addClass("ResSlid"+t);for(var i=0;i<4;i++)if(0==i)var a=".ResSlid"+t+" .item {width: "+100/s[i]+"%}";else if(1==i)var n=".ResSlid"+t+" .item {width: "+100/s[i]+"%}";else if(2==i)var l=".ResSlid"+t+" .item {width: "+100/s[i]+"%}";else if(3==i)var o=".ResSlid"+t+" .item {width: "+100/s[i]+"%}";f()(this).attr("data-value","0");var r="@media (max-width:767px){"+a+"}@media (min-width:768px){"+n+"}@media (min-width:992px){"+l+"}@media (min-width:1200px){"+o+"}";f()(this).find("style").remove(),f()(this).append("<style>"+r+"</style>"),e(this)}));var s=performance.now();console.log("Took",(s-t).toFixed(4),"milliseconds to Size")}function a(t){var e=f()(t).parent(),s=+e.attr("data-slide"),i=e.find(".resCarousel-inner"),a=+e.attr("data-speed"),o=+e.attr("data-load"),r="",d="",c=i.find(".item").length,v=i.find(".item").outerWidth(),u=+Math.round(i.outerWidth()/v),h=f()(t).hasClass("leftRs"),p=Math.round(i.scrollLeft()/v);if(a=isNaN(a)?400:a,s=s<u?s:u,h){d=p-s,r=d*v;var m=d+s;0==p?(d=c-s,r=d*v,d=c-u,a=400):s>=m&&(d=r=0)}else{d=p+s,r=d*v;m=d+s;p+u==c?(d=r=0,a=400):c<=m-s+u&&(d=c-s,r=d*v,d=c-u)}"lazy"==e.attr("data-animator")&&l(i,h?0:1,d+1,d+u,a,s*v),isNaN(o)||(o=o>=s?o:s,c-o<=d+u&&n(i)),i.animate({scrollLeft:r},a),e.attr("data-value",d)}function n(t){f()("#"+t.attr("id")).trigger("ResCarouselLoad")}function l(t,e,s,i,a,n){var l=5;if(0==e){for(var o=s-1;o<i+1;o++)l*=2;l=-l}for(o=s-1;o<i;o++)l=0==e?l/2:2*l,t.find(".item").eq(o).css("transform","translateX("+l+"px)");setTimeout((function(){t.find(".item").attr("style","")}),a-70)}f()(document).ready((function(){t()})),f()(window).resize((function(){var t=new Date;setTimeout((function(){s(t)}),200)}))}},$=R,O=(s("e9e2"),Object(_["a"])($,S,T,!1,null,"44893cc2",null)),L=O.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("div",{staticClass:"hotdeals"},[s("h1",[t._v(" Trending ")])])]),s("div",{staticClass:"container p8"},[s("div",{staticClass:"resCarousel",attrs:{"data-items":"2-3-4-5","data-slide":"5","data-speed":"900","data-interval":"4000","data-load":"3","data-animator":"lazy"}},[s("div",{staticClass:"resCarousel-inner",attrs:{id:"eventLoad"}},[s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("1")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("2")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("3")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("4")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("5")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("6")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("7")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("8")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("9")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("10")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("11")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("12")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("13")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"tile"},[s("div",[s("h1",[t._v("14")])]),s("h3",[t._v("Title")]),s("p",[t._v("content")])])])]),s("button",{staticClass:"btn btn-default leftRs"}),s("button",{staticClass:"btn btn-default rightRs"})])])])}],N={name:"popularproducts",mounted:function(){function t(){i(),f()(document).on("click",".leftRs, .rightRs",(function(){a(this)})),f()(document).on("mouseenter",".ResHover",(function(){f()(this).addClass("ResHovered")})),f()(document).on("mouseleave",".ResHover",(function(){f()(this).removeClass("ResHovered")}))}function e(t){var e=f()(t).find(".rightRs"),s=f()(t).attr("data-interval");!isNaN(s)&&f()(t).addClass("ResHover")&&setInterval((function(){!e.parent().hasClass("ResHovered")&&a(e)}),+s)}function s(){function t(){console.log("resize Works"),f()(".resCarousel").each((function(){var t=f()(this).attr("data-value"),e=f()(this).find(".item").width();f()(this).find(".resCarousel-inner").scrollLeft(t*e)}))}t()}function i(){var t=performance.now();f()(".resCarousel").each((function(t){var s=f()(this).attr("data-items").split("-");f()(this).addClass("ResSlid"+t);for(var i=0;i<4;i++)if(0==i)var a=".ResSlid"+t+" .item {width: "+100/s[i]+"%}";else if(1==i)var n=".ResSlid"+t+" .item {width: "+100/s[i]+"%}";else if(2==i)var l=".ResSlid"+t+" .item {width: "+100/s[i]+"%}";else if(3==i)var o=".ResSlid"+t+" .item {width: "+100/s[i]+"%}";f()(this).attr("data-value","0");var r="@media (max-width:767px){"+a+"}@media (min-width:768px){"+n+"}@media (min-width:992px){"+l+"}@media (min-width:1200px){"+o+"}";f()(this).find("style").remove(),f()(this).append("<style>"+r+"</style>"),e(this)}));var s=performance.now();console.log("Took",(s-t).toFixed(4),"milliseconds to Size")}function a(t){var e=f()(t).parent(),s=+e.attr("data-slide"),i=e.find(".resCarousel-inner"),a=+e.attr("data-speed"),o=+e.attr("data-load"),r="",d="",c=i.find(".item").length,v=i.find(".item").outerWidth(),u=+Math.round(i.outerWidth()/v),h=f()(t).hasClass("leftRs"),p=Math.round(i.scrollLeft()/v);if(a=isNaN(a)?400:a,s=s<u?s:u,h){d=p-s,r=d*v;var m=d+s;0==p?(d=c-s,r=d*v,d=c-u,a=400):s>=m&&(d=r=0)}else{d=p+s,r=d*v;m=d+s;p+u==c?(d=r=0,a=400):c<=m-s+u&&(d=c-s,r=d*v,d=c-u)}"lazy"==e.attr("data-animator")&&l(i,h?0:1,d+1,d+u,a,s*v),isNaN(o)||(o=o>=s?o:s,c-o<=d+u&&n(i)),i.animate({scrollLeft:r},a),e.attr("data-value",d)}function n(t){f()("#"+t.attr("id")).trigger("ResCarouselLoad")}function l(t,e,s,i,a,n){var l=5;if(0==e){for(var o=s-1;o<i+1;o++)l*=2;l=-l}for(o=s-1;o<i;o++)l=0==e?l/2:2*l,t.find(".item").eq(o).css("transform","translateX("+l+"px)");setTimeout((function(){t.find(".item").attr("style","")}),a-70)}f()(document).ready((function(){t()})),f()(window).resize((function(){var t=new Date;setTimeout((function(){s(t)}),200)}))}},z=N,A=(s("5840"),Object(_["a"])(z,H,E,!1,null,"59257c4c",null)),P=A.exports,M={name:"home-component",props:{msg:String},components:{mainslider:b,hotdeals:j,newarrival:L,popularproducts:P}},W=M,F=Object(_["a"])(W,o,r,!1,null,"723e3612",null),D=F.exports,q={name:"Home",components:{HomeComponent:D}},I=q,V=Object(_["a"])(I,n,l,!1,null,null,null),X=V.exports;i["a"].use(a["a"]);var B=[{path:"/",name:"Home",component:X}],J=new a["a"]({mode:"history",base:"/khwaaish-e-test-server/",routes:B});e["a"]=J},b189:function(t,e,s){t.exports=s.p+"img/logo1.1921f2b5.png"},c75a:function(t,e,s){},c7e3:function(t,e,s){"use strict";var i=s("5fdf"),a=s.n(i);a.a},e9e2:function(t,e,s){"use strict";var i=s("000a"),a=s.n(i);a.a}});
//# sourceMappingURL=app.78c4c9dc.js.map