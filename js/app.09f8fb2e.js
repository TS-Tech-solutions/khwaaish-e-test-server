(function(t){function s(s){for(var a,l,o=s[0],r=s[1],d=s[2],v=0,u=[];v<o.length;v++)l=o[v],Object.prototype.hasOwnProperty.call(e,l)&&e[l]&&u.push(e[l][0]),e[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);c&&c(s);while(u.length)u.shift()();return n.push.apply(n,d||[]),i()}function i(){for(var t,s=0;s<n.length;s++){for(var i=n[s],a=!0,o=1;o<i.length;o++){var r=i[o];0!==e[r]&&(a=!1)}a&&(n.splice(s--,1),t=l(l.s=i[0]))}return t}var a={},e={app:0},n=[];function l(s){if(a[s])return a[s].exports;var i=a[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=a,l.d=function(t,s,i){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)l.d(i,a,function(s){return t[s]}.bind(null,a));return i},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="/khwaaish-e-test-server/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=s,o=o.slice();for(var d=0;d<o.length;d++)s(o[d]);var c=r;n.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"000a":function(t,s,i){},"05e6":function(t,s,i){"use strict";var a=i("80c9"),e=i.n(a);e.a},"18ba":function(t,s,i){"use strict";var a=i("c75a"),e=i.n(a);e.a},"2aba":function(t,s,i){"use strict";var a=i("a629"),e=i.n(a);e.a},"36fb":function(t,s,i){"use strict";var a=i("8337"),e=i.n(a);e.a},"3dfd":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("layout")],1)},e=[],n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("layout-component")],1)},l=[],o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("HeaderView"),i("router-view"),i("FooterView")],1)},r=[],d=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("header-component")],1)},c=[],v=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("navview")],1)},u=[],h=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("center",[a("h2",[a("img",{staticClass:"img-rounded",attrs:{src:i("b189"),alt:"Cinque Terre"}})]),a("nav",{staticClass:"tabs"},[a("div",{staticClass:"selector"}),a("a",{staticClass:"active",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fa fa-home"}),t._v("Home")]),a("a",{attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fa fa-shopping-basket"}),t._v("Products")]),a("a",{attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fa fa-book"}),t._v("About")]),a("a",{attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"fa fa-phone"}),t._v("Contact Us")])])])],1)},f=[],p=(i("7db0"),i("1157")),m=i.n(p),_={name:"navview",mounted:function(){var t=m()(".tabs"),s=t.find(".active"),i=s.innerWidth();m()(".selector").css({left:s.position.left+"px",width:i+"px"}),m()(".tabs").on("click","a",(function(t){t.preventDefault(),m()(".tabs a").removeClass("active"),m()(this).addClass("active");var s=m()(this).innerWidth(),i=m()(this).position();m()(".selector").css({left:i.left+"px",width:s+"px"})}))}},C=_,b=(i("36fb"),i("2877")),g=Object(b["a"])(C,h,f,!1,null,null,null),w=g.exports,x={name:"header-component",props:{msg:String},components:{navview:w}},y=x,j=Object(b["a"])(y,v,u,!1,null,"a961a336",null),k=j.exports,S={name:"HeaderView",components:{HeaderComponent:k}},T=S,R=Object(b["a"])(T,d,c,!1,null,null,null),$=R.exports,O=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("footer-component")],1)},E=[],L=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("footerview")],1)},H=[],N=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("footer",{staticClass:"page-footer font-small cyan darken-3"},[i("div",{staticClass:"content"},[i("h1",[t._v("Follow Us On")]),i("div",{staticClass:"icons"},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa fa-github"})]),i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa fa-twitter"})]),i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa fa-codepen"})]),i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa fa-instagram"})]),i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa fa-dribbble"})]),i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa fa-behance"})]),i("a",{attrs:{href:"#"}},[i("i",{staticClass:"fa fa-linkedin"})]),i("br"),i("div",[t._v(" © 2020 Copyright: "),i("span",[t._v(" Khaaish-e.com")])])])])])])}],z={name:"footerview"},M=z,A=(i("a585"),Object(b["a"])(M,N,P,!1,null,"9c6816c0",null)),W=A.exports,F={name:"footer-component",components:{footerview:W}},B=F,I=Object(b["a"])(B,L,H,!1,null,null,null),q=I.exports,D={name:"FooterView",components:{FooterComponent:q}},V=D,K=Object(b["a"])(V,O,E,!1,null,null,null),J=K.exports,U={name:"layout-component",components:{HeaderView:$,FooterView:J}},X=U,Q=Object(b["a"])(X,o,r,!1,null,null,null),G=Q.exports,Y={name:"layout",components:{LayoutComponent:G}},Z=Y,tt=Object(b["a"])(Z,n,l,!1,null,null,null),st=tt.exports,it={components:{Layout:st}},at=it,et=Object(b["a"])(at,a,e,!1,null,null,null);s["a"]=et.exports},"41e5":function(t,s,i){},4360:function(t,s,i){"use strict";var a=i("2b0e"),e=i("2f62");a["default"].use(e["a"]),s["a"]=new e["a"].Store({state:{},mutations:{},actions:{},modules:{}})},"56d7":function(t,s,i){"use strict";i.r(s),function(t){i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=i("3dfd"),e=i("a18c"),n=i("4360"),l=i("1157"),o=i.n(l),r=i("7212"),d=i.n(r);i("a7a3"),i("4989"),i("ab8b");s["default"].use(d.a),t.jQuery=o.a,t.$=o.a,s["default"].config.productionTip=!1,new s["default"]({router:e["a"],store:n["a"],render:function(t){return t(a["a"])}}).$mount("#app")}.call(this,i("c8ba"))},5840:function(t,s,i){"use strict";var a=i("8382"),e=i.n(a);e.a},"5fdf":function(t,s,i){},"6c58":function(t,s,i){"use strict";var a=i("41e5"),e=i.n(a);e.a},"80c9":function(t,s,i){},8337:function(t,s,i){},8382:function(t,s,i){},"98a8":function(t,s,i){t.exports=i.p+"img/1.095daf3e.jpg"},a18c:function(t,s,i){"use strict";var a=i("2b0e"),e=i("8c4f"),n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"home"},[i("home-component")],1)},l=[],o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("mainslider"),i("hotdeals"),i("newarrival"),i("popularproducts")],1)},r=[],d=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{attrs:{id:"wrapper"}},[i("section",{staticClass:"slideshow",attrs:{id:"js-header"}},[t._m(0),t._m(1),t._m(2),i("div",{staticClass:"c-header-home_footer"},[i("div",{staticClass:"o-container"},[i("div",{staticClass:"c-header-home_controls -nomobile o-button-group"},[i("div",{staticClass:"js-parallax is-inview",attrs:{"data-speed":"1","data-position":"top","data-target":"#js-header"}},[i("button",{staticClass:"o-button -white -square -left js-slider-home-button js-slider-home-prev",attrs:{type:"button"}},[i("span",{staticClass:"o-button_label"},[i("svg",{staticClass:"o-button_icon",attrs:{role:"img"}},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-prev"}})])])]),i("button",{staticClass:"o-button -white -square js-slider-home-button js-slider-home-next",attrs:{type:"button"}},[i("span",{staticClass:"o-button_label"},[i("svg",{staticClass:"o-button_icon",attrs:{role:"img"}},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-next"}})])])])])])])])]),i("div",[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg"}},[i("symbol",{attrs:{viewBox:"0 0 18 18",id:"arrow-next"}},[i("path",{attrs:{id:"arrow-next-arrow.svg",d:"M12.6,9L4,17.3L4.7,18l8.5-8.3l0,0L14,9l0,0l-0.7-0.7l0,0L4.7,0L4,0.7L12.6,9z"}})]),i("symbol",{attrs:{viewBox:"0 0 18 18",id:"arrow-prev"}},[i("path",{attrs:{id:"arrow-prev-arrow.svg",d:"M14,0.7L13.3,0L4.7,8.3l0,0L4,9l0,0l0.7,0.7l0,0l8.5,8.3l0.7-0.7L5.4,9L14,0.7z"}})])])])])])},c=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"slideshow__slide js-slider-home-slide is-current",attrs:{"data-slide":"1"}},[i("div",{staticClass:"slideshow__slide-background-parallax background-absolute js-parallax",attrs:{"data-speed":"-1","data-position":"top","data-target":"#js-header"}},[i("div",{staticClass:"slideshow__slide-background-load-wrap background-absolute"},[i("div",{staticClass:"slideshow__slide-background-load background-absolute"},[i("div",{staticClass:"slideshow__slide-background-wrap background-absolute"},[i("div",{staticClass:"slideshow__slide-background background-absolute"},[i("div",{staticClass:"slideshow__slide-image-wrap background-absolute"},[i("div",{staticClass:"slideshow__slide-image background-absolute",staticStyle:{"background-image":"url('https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920')"}})])])])])])]),i("div",{staticClass:"slideshow__slide-caption"},[i("div",{staticClass:"slideshow__slide-caption-text"},[i("div",{staticClass:"container js-parallax",attrs:{"data-speed":"2","data-position":"top","data-target":"#js-header"}},[i("h1",{staticClass:"slideshow__slide-caption-title"},[t._v("Everything broken can be repaired")]),i("a",{staticClass:"slideshow__slide-caption-subtitle -load o-hsub -link",attrs:{href:"#"}},[i("span",{staticClass:"slideshow__slide-caption-subtitle-label"},[t._v("See how")])])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"slideshow__slide js-slider-home-slide is-next",attrs:{"data-slide":"2"}},[i("div",{staticClass:"slideshow__slide-background-parallax background-absolute js-parallax",attrs:{"data-speed":"-1","data-position":"top","data-target":"#js-header"}},[i("div",{staticClass:"slideshow__slide-background-load-wrap background-absolute"},[i("div",{staticClass:"slideshow__slide-background-load background-absolute"},[i("div",{staticClass:"slideshow__slide-background-wrap background-absolute"},[i("div",{staticClass:"slideshow__slide-background background-absolute"},[i("div",{staticClass:"slideshow__slide-image-wrap background-absolute"},[i("div",{staticClass:"slideshow__slide-image background-absolute",staticStyle:{"background-image":"url('https://images.pexels.com/photos/110649/pexels-photo-110649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920')"}})])])])])])]),i("div",{staticClass:"slideshow__slide-caption"},[i("div",{staticClass:"slideshow__slide-caption-text"},[i("div",{staticClass:"container js-parallax",attrs:{"data-speed":"2","data-position":"top","data-target":"#js-header"}},[i("h1",{staticClass:"slideshow__slide-caption-title"},[t._v("See through the field")]),i("a",{staticClass:"slideshow__slide-caption-subtitle -load o-hsub -link",attrs:{href:"#"}},[i("span",{staticClass:"slideshow__slide-caption-subtitle-label"},[t._v("Learn more about")])])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"slideshow__slide js-slider-home-slide is-prev",attrs:{"data-slide":"3"}},[i("div",{staticClass:"slideshow__slide-background-parallax background-absolute js-parallax",attrs:{"data-speed":"-1","data-position":"top","data-target":"#js-header"}},[i("div",{staticClass:"slideshow__slide-background-load-wrap background-absolute"},[i("div",{staticClass:"slideshow__slide-background-load background-absolute"},[i("div",{staticClass:"slideshow__slide-background-wrap background-absolute"},[i("div",{staticClass:"slideshow__slide-background background-absolute"},[i("div",{staticClass:"slideshow__slide-image-wrap background-absolute"},[i("div",{staticClass:"slideshow__slide-image background-absolute",staticStyle:{"background-image":"url('https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920')"}})])])])])])]),i("div",{staticClass:"slideshow__slide-caption"},[i("div",{staticClass:"slideshow__slide-caption-text"},[i("div",{staticClass:"container js-parallax",attrs:{"data-speed":"2","data-position":"top","data-target":"#js-header"}},[i("h1",{staticClass:"slideshow__slide-caption-title"},[t._v("Hey, take a time to relax!")]),i("a",{staticClass:"slideshow__slide-caption-subtitle -load o-hsub -link",attrs:{href:"#"}},[i("span",{staticClass:"slideshow__slide-caption-subtitle-label"},[t._v("Everybody needs")])])])])])])}],v=(i("99af"),i("7db0"),i("d4ec")),u=i("bee2"),h=i("1157"),f=i.n(h),p={name:"main-slider",mounted:function(){var t=f()(window),s=f()("body"),i=function(){function t(){var s=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(v["a"])(this,t);var a={$el:f()(".slideshow"),showArrows:!1,showPagination:!0,duration:1e4,autoplay:!0},e=Object.assign({},a,i);this.$el=e.$el,this.maxSlide=this.$el.find(f()(".js-slider-home-slide")).length,this.showArrows=this.maxSlide>1&&e.showArrows,this.showPagination=e.showPagination,this.currentSlide=1,this.isAnimating=!1,this.animationDuration=1200,this.autoplaySpeed=e.duration,this.interval,this.$controls=this.$el.find(".js-slider-home-button"),this.autoplay=this.maxSlide>1&&e.autoplay,this.$el.on("click",".js-slider-home-next",(function(t){return s.nextSlide()})),this.$el.on("click",".js-slider-home-prev",(function(t){return s.prevSlide()})),this.$el.on("click",".js-pagination-item",(function(t){s.isAnimating||(s.preventClick(),s.goToSlide(t.target.dataset.slide))})),this.init()}return Object(u["a"])(t,[{key:"init",value:function(){if(this.goToSlide(1),this.autoplay&&this.startAutoplay(),this.showPagination){this.maxSlide;for(var t='<div class="pagination"><div class="container">',s=0;s<this.maxSlide;s++){var i='<span class="pagination__item js-pagination-item '.concat(0===s?"is-current":"",'" data-slide=').concat(s+1,">").concat(s+1,"</span>");t+=i}t+="</div></div>",this.$el.append(t)}}},{key:"preventClick",value:function(){var t=this;this.isAnimating=!0,this.$controls.prop("disabled",!0),clearInterval(this.interval),setTimeout((function(){t.isAnimating=!1,t.$controls.prop("disabled",!1),t.autoplay&&t.startAutoplay()}),this.animationDuration)}},{key:"goToSlide",value:function(t){this.currentSlide=parseInt(t),this.currentSlide>this.maxSlide&&(this.currentSlide=1),0===this.currentSlide&&(this.currentSlide=this.maxSlide);var s=this.$el.find('.js-slider-home-slide[data-slide="'+this.currentSlide+'"]'),i=1===this.currentSlide?this.$el.find(".js-slider-home-slide").last():s.prev(".js-slider-home-slide"),a=this.currentSlide===this.maxSlide?this.$el.find(".js-slider-home-slide").first():s.next(".js-slider-home-slide");this.$el.find(".js-slider-home-slide").removeClass("is-prev is-next is-current"),this.$el.find(".js-pagination-item").removeClass("is-current"),this.maxSlide>1&&(i.addClass("is-prev"),a.addClass("is-next")),s.addClass("is-current"),this.$el.find('.js-pagination-item[data-slide="'+this.currentSlide+'"]').addClass("is-current")}},{key:"nextSlide",value:function(){this.preventClick(),this.goToSlide(this.currentSlide+1)}},{key:"prevSlide",value:function(){this.preventClick(),this.goToSlide(this.currentSlide-1)}},{key:"startAutoplay",value:function(){var t=this;this.interval=setInterval((function(){t.isAnimating||t.nextSlide()}),this.autoplaySpeed)}},{key:"destroy",value:function(){this.$el.off()}}]),t}();(function(){var a=!1,e=3e3;function n(){var t={showPagination:!0};new i(t)}function l(){s.addClass("is-loaded"),setTimeout((function(){s.addClass("is-animated")}),600)}t.on("load",(function(){a||(a=!0,n())})),setTimeout((function(){a||(a=!0,n())}),e),l()})()}},m=p,_=(i("18ba"),i("2877")),C=Object(_["a"])(m,d,c,!1,null,"a08954ca",null),b=C.exports,g=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"hotdeals"},[i("h1",[t._v(" Hot Deals ")])]),i("div",{staticClass:"container p8"},[i("div",{staticClass:"resCarousel",attrs:{"data-items":"2-3-4-5","data-slide":"5","data-speed":"900","data-interval":"4000","data-load":"3","data-animator":"lazy"}},[i("div",{staticClass:"resCarousel-inner",attrs:{id:"eventLoad"}},[i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("1")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("2")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("3")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("4")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("5")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("6")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("7")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("8")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("9")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("10")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("11")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("12")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("13")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("14")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])])]),i("button",{staticClass:"btn btn-default leftRs"}),i("button",{staticClass:"btn btn-default rightRs"})])])])}],x=(i("b680"),i("ac1f"),i("1276"),{name:"hotdeals",mounted:function(){function t(){a(),f()(document).on("click",".leftRs, .rightRs",(function(){e(this)})),f()(document).on("mouseenter",".ResHover",(function(){f()(this).addClass("ResHovered")})),f()(document).on("mouseleave",".ResHover",(function(){f()(this).removeClass("ResHovered")}))}function s(t){var s=f()(t).find(".rightRs"),i=f()(t).attr("data-interval");!isNaN(i)&&f()(t).addClass("ResHover")&&setInterval((function(){!s.parent().hasClass("ResHovered")&&e(s)}),+i)}function i(){function t(){console.log("resize Works"),f()(".resCarousel").each((function(){var t=f()(this).attr("data-value"),s=f()(this).find(".item").width();f()(this).find(".resCarousel-inner").scrollLeft(t*s)}))}t()}function a(){var t=performance.now();f()(".resCarousel").each((function(t){var i=f()(this).attr("data-items").split("-");f()(this).addClass("ResSlid"+t);for(var a=0;a<4;a++)if(0==a)var e=".ResSlid"+t+" .item {width: "+100/i[a]+"%}";else if(1==a)var n=".ResSlid"+t+" .item {width: "+100/i[a]+"%}";else if(2==a)var l=".ResSlid"+t+" .item {width: "+100/i[a]+"%}";else if(3==a)var o=".ResSlid"+t+" .item {width: "+100/i[a]+"%}";f()(this).attr("data-value","0");var r="@media (max-width:767px){"+e+"}@media (min-width:768px){"+n+"}@media (min-width:992px){"+l+"}@media (min-width:1200px){"+o+"}";f()(this).find("style").remove(),f()(this).append("<style>"+r+"</style>"),s(this)}));var i=performance.now();console.log("Took",(i-t).toFixed(4),"milliseconds to Size")}function e(t){var s=f()(t).parent(),i=+s.attr("data-slide"),a=s.find(".resCarousel-inner"),e=+s.attr("data-speed"),o=+s.attr("data-load"),r="",d="",c=a.find(".item").length,v=a.find(".item").outerWidth(),u=+Math.round(a.outerWidth()/v),h=f()(t).hasClass("leftRs"),p=Math.round(a.scrollLeft()/v);if(e=isNaN(e)?400:e,i=i<u?i:u,h){d=p-i,r=d*v;var m=d+i;0==p?(d=c-i,r=d*v,d=c-u,e=400):i>=m&&(d=r=0)}else{d=p+i,r=d*v;m=d+i;p+u==c?(d=r=0,e=400):c<=m-i+u&&(d=c-i,r=d*v,d=c-u)}"lazy"==s.attr("data-animator")&&l(a,h?0:1,d+1,d+u,e,i*v),isNaN(o)||(o=o>=i?o:i,c-o<=d+u&&n(a)),a.animate({scrollLeft:r},e),s.attr("data-value",d)}function n(t){f()("#"+t.attr("id")).trigger("ResCarouselLoad")}function l(t,s,i,a,e,n){var l=5;if(0==s){for(var o=i-1;o<a+1;o++)l*=2;l=-l}for(o=i-1;o<a;o++)l=0==s?l/2:2*l,t.find(".item").eq(o).css("transform","translateX("+l+"px)");setTimeout((function(){t.find(".item").attr("style","")}),e-70)}f()(document).ready((function(){t()})),f()(window).resize((function(){var t=new Date;setTimeout((function(){i(t)}),200)}))}}),y=x,j=(i("c7e3"),Object(_["a"])(y,g,w,!1,null,"50b41447",null)),k=j.exports,S=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("br"),i("div",{staticClass:"container"},[i("h1",{staticClass:"animation"},[t._v(" New Arrival ")])]),i("div",{staticClass:"container p8"},[i("div",{staticClass:"resCarousel",attrs:{"data-items":"2-3-4-5","data-slide":"5","data-speed":"900","data-interval":"4000","data-load":"3","data-animator":"lazy"}},[i("div",{staticClass:"resCarousel-inner",attrs:{id:"eventLoad"}},[i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("1")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("2")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("3")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("4")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("5")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("6")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("7")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("8")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("9")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("10")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("11")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("12")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("13")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("14")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])])]),i("button",{staticClass:"btn btn-default leftRs"}),i("button",{staticClass:"btn btn-default rightRs"})])])])}],R={name:"newarrival",mounted:function(){function t(){a(),f()(document).on("click",".leftRs, .rightRs",(function(){e(this)})),f()(document).on("mouseenter",".ResHover",(function(){f()(this).addClass("ResHovered")})),f()(document).on("mouseleave",".ResHover",(function(){f()(this).removeClass("ResHovered")}))}function s(t){var s=f()(t).find(".rightRs"),i=f()(t).attr("data-interval");!isNaN(i)&&f()(t).addClass("ResHover")&&setInterval((function(){!s.parent().hasClass("ResHovered")&&e(s)}),+i)}function i(){function t(){console.log("resize Works"),f()(".resCarousel").each((function(){var t=f()(this).attr("data-value"),s=f()(this).find(".item").width();f()(this).find(".resCarousel-inner").scrollLeft(t*s)}))}t()}function a(){var t=performance.now();f()(".resCarousel").each((function(t){var i=f()(this).attr("data-items").split("-");f()(this).addClass("ResSlid"+t);for(var a=0;a<4;a++)if(0==a)var e=".ResSlid"+t+" .item {width: "+100/i[a]+"%}";else if(1==a)var n=".ResSlid"+t+" .item {width: "+100/i[a]+"%}";else if(2==a)var l=".ResSlid"+t+" .item {width: "+100/i[a]+"%}";else if(3==a)var o=".ResSlid"+t+" .item {width: "+100/i[a]+"%}";f()(this).attr("data-value","0");var r="@media (max-width:767px){"+e+"}@media (min-width:768px){"+n+"}@media (min-width:992px){"+l+"}@media (min-width:1200px){"+o+"}";f()(this).find("style").remove(),f()(this).append("<style>"+r+"</style>"),s(this)}));var i=performance.now();console.log("Took",(i-t).toFixed(4),"milliseconds to Size")}function e(t){var s=f()(t).parent(),i=+s.attr("data-slide"),a=s.find(".resCarousel-inner"),e=+s.attr("data-speed"),o=+s.attr("data-load"),r="",d="",c=a.find(".item").length,v=a.find(".item").outerWidth(),u=+Math.round(a.outerWidth()/v),h=f()(t).hasClass("leftRs"),p=Math.round(a.scrollLeft()/v);if(e=isNaN(e)?400:e,i=i<u?i:u,h){d=p-i,r=d*v;var m=d+i;0==p?(d=c-i,r=d*v,d=c-u,e=400):i>=m&&(d=r=0)}else{d=p+i,r=d*v;m=d+i;p+u==c?(d=r=0,e=400):c<=m-i+u&&(d=c-i,r=d*v,d=c-u)}"lazy"==s.attr("data-animator")&&l(a,h?0:1,d+1,d+u,e,i*v),isNaN(o)||(o=o>=i?o:i,c-o<=d+u&&n(a)),a.animate({scrollLeft:r},e),s.attr("data-value",d)}function n(t){f()("#"+t.attr("id")).trigger("ResCarouselLoad")}function l(t,s,i,a,e,n){var l=5;if(0==s){for(var o=i-1;o<a+1;o++)l*=2;l=-l}for(o=i-1;o<a;o++)l=0==s?l/2:2*l,t.find(".item").eq(o).css("transform","translateX("+l+"px)");setTimeout((function(){t.find(".item").attr("style","")}),e-70)}f()(document).ready((function(){t()})),f()(window).resize((function(){var t=new Date;setTimeout((function(){i(t)}),200)}))}},$=R,O=(i("e9e2"),Object(_["a"])($,S,T,!1,null,"44893cc2",null)),E=O.exports,L=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",[i("div",{staticClass:"hotdeals"},[i("h1",[t._v(" Trending ")])])]),i("div",{staticClass:"container p8"},[i("div",{staticClass:"resCarousel",attrs:{"data-items":"2-3-4-5","data-slide":"5","data-speed":"900","data-interval":"4000","data-load":"3","data-animator":"lazy"}},[i("div",{staticClass:"resCarousel-inner",attrs:{id:"eventLoad"}},[i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("1")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("2")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("3")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("4")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("5")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("6")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("7")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("8")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("9")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("10")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("11")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("12")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("13")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"tile"},[i("div",[i("h1",[t._v("14")])]),i("h3",[t._v("Title")]),i("p",[t._v("content")])])])]),i("button",{staticClass:"btn btn-default leftRs"}),i("button",{staticClass:"btn btn-default rightRs"})])])])}],N={name:"popularproducts",mounted:function(){function t(){a(),f()(document).on("click",".leftRs, .rightRs",(function(){e(this)})),f()(document).on("mouseenter",".ResHover",(function(){f()(this).addClass("ResHovered")})),f()(document).on("mouseleave",".ResHover",(function(){f()(this).removeClass("ResHovered")}))}function s(t){var s=f()(t).find(".rightRs"),i=f()(t).attr("data-interval");!isNaN(i)&&f()(t).addClass("ResHover")&&setInterval((function(){!s.parent().hasClass("ResHovered")&&e(s)}),+i)}function i(){function t(){console.log("resize Works"),f()(".resCarousel").each((function(){var t=f()(this).attr("data-value"),s=f()(this).find(".item").width();f()(this).find(".resCarousel-inner").scrollLeft(t*s)}))}t()}function a(){var t=performance.now();f()(".resCarousel").each((function(t){var i=f()(this).attr("data-items").split("-");f()(this).addClass("ResSlid"+t);for(var a=0;a<4;a++)if(0==a)var e=".ResSlid"+t+" .item {width: "+100/i[a]+"%}";else if(1==a)var n=".ResSlid"+t+" .item {width: "+100/i[a]+"%}";else if(2==a)var l=".ResSlid"+t+" .item {width: "+100/i[a]+"%}";else if(3==a)var o=".ResSlid"+t+" .item {width: "+100/i[a]+"%}";f()(this).attr("data-value","0");var r="@media (max-width:767px){"+e+"}@media (min-width:768px){"+n+"}@media (min-width:992px){"+l+"}@media (min-width:1200px){"+o+"}";f()(this).find("style").remove(),f()(this).append("<style>"+r+"</style>"),s(this)}));var i=performance.now();console.log("Took",(i-t).toFixed(4),"milliseconds to Size")}function e(t){var s=f()(t).parent(),i=+s.attr("data-slide"),a=s.find(".resCarousel-inner"),e=+s.attr("data-speed"),o=+s.attr("data-load"),r="",d="",c=a.find(".item").length,v=a.find(".item").outerWidth(),u=+Math.round(a.outerWidth()/v),h=f()(t).hasClass("leftRs"),p=Math.round(a.scrollLeft()/v);if(e=isNaN(e)?400:e,i=i<u?i:u,h){d=p-i,r=d*v;var m=d+i;0==p?(d=c-i,r=d*v,d=c-u,e=400):i>=m&&(d=r=0)}else{d=p+i,r=d*v;m=d+i;p+u==c?(d=r=0,e=400):c<=m-i+u&&(d=c-i,r=d*v,d=c-u)}"lazy"==s.attr("data-animator")&&l(a,h?0:1,d+1,d+u,e,i*v),isNaN(o)||(o=o>=i?o:i,c-o<=d+u&&n(a)),a.animate({scrollLeft:r},e),s.attr("data-value",d)}function n(t){f()("#"+t.attr("id")).trigger("ResCarouselLoad")}function l(t,s,i,a,e,n){var l=5;if(0==s){for(var o=i-1;o<a+1;o++)l*=2;l=-l}for(o=i-1;o<a;o++)l=0==s?l/2:2*l,t.find(".item").eq(o).css("transform","translateX("+l+"px)");setTimeout((function(){t.find(".item").attr("style","")}),e-70)}f()(document).ready((function(){t()})),f()(window).resize((function(){var t=new Date;setTimeout((function(){i(t)}),200)}))}},P=N,z=(i("5840"),Object(_["a"])(P,L,H,!1,null,"59257c4c",null)),M=z.exports,A={name:"home-component",props:{msg:String},components:{mainslider:b,hotdeals:k,newarrival:E,popularproducts:M}},W=A,F=(i("2aba"),Object(_["a"])(W,o,r,!1,null,"98f53984",null)),B=F.exports,I={name:"Home",components:{HomeComponent:B}},q=I,D=Object(_["a"])(q,n,l,!1,null,null,null),V=D.exports,K=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"productdetails"},[i("productdetails-component")],1)},J=[],U=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._m(0),i("center",[i("span",{staticClass:"tag"},[t._v("Price - Rs. 500 /- ")])]),i("h1",[t._v("Description")]),i("div",{staticClass:"description"},[t._v(" Flipkart is an Indian e-commerce company based in Bangalore, Karnataka, India. It was founded by Sachin Bansal and Binny Bansal in 2007. Wikipedia Customer service: 1800 208 9898 Founded: October 2007 CEO: Kalyan Krishnamurthy (Jan 2017–) Subsidiaries: Myntra, Ekart, PhonePe, Upstream Commerce Ltd., MORE Founders: Sachin Bansal, Binny Bansal Parent organization: Walmart ")]),t._m(1)],1)},X=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("ul",{staticClass:"slides"},[a("li",{attrs:{id:"slide1"}},[a("img",{attrs:{src:i("98a8"),alt:""}})]),a("li",{attrs:{id:"slide2"}},[a("img",{attrs:{src:i("ffd7"),alt:""}})]),a("li",{attrs:{id:"slide3"}},[a("img",{attrs:{src:"https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg",alt:""}})]),a("li",{attrs:{id:"slide4"}},[a("img",{attrs:{src:"https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg",alt:""}})]),a("li",{attrs:{id:"slide5"}},[a("img",{attrs:{src:"https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg",alt:""}})])]),a("ul",{staticClass:"thumbnails"},[a("li",[a("a",{attrs:{href:"#slide1"}},[a("img",{attrs:{src:i("98a8")}})])]),a("li",[a("a",{attrs:{href:"#slide2"}},[a("img",{attrs:{src:i("ffd7")}})])]),a("li",[a("a",{attrs:{href:"#slide3"}},[a("img",{attrs:{src:"https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg"}})])]),a("li",[a("a",{attrs:{href:"#slide4"}},[a("img",{attrs:{src:"https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg"}})])]),a("li",[a("a",{attrs:{href:"#slide5"}},[a("img",{attrs:{src:"https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg"}})])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("button",{staticClass:"btn btn-default btn-lg",attrs:{type:"button","data-toggle":"modal","data-target":"#myModal"}},[t._v("Order Now")]),i("div",{staticClass:"modal fade",attrs:{id:"myModal",role:"dialog"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("button",{staticClass:"close",staticStyle:{"margin-right":"60%"},attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")]),i("h4",{staticClass:"modal-title"},[t._v("Put your details")])]),i("div",{staticClass:"modal-body"},[i("form",[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"email"}},[t._v("Email:")]),i("input",{staticClass:"form-control",attrs:{type:"text",id:"email",required:"required"}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"phn"}},[t._v("Phone No:")]),i("input",{staticClass:"form-control",attrs:{type:"number",id:"phn",placeholder:"Optional"}})]),i("button",{staticClass:"btn btn-default btn-lg",staticStyle:{"margin-top":"3%"}},[t._v("Submit")])])]),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])])])}],Q={name:"productdetails",mounted:function(){}},G=Q,Y=(i("6c58"),i("05e6"),Object(_["a"])(G,U,X,!1,null,"58fb9368",null)),Z=Y.exports,tt={name:"productdetails",components:{ProductdetailsComponent:Z}},st=tt,it=Object(_["a"])(st,K,J,!1,null,null,null),at=it.exports;function et(){return[{path:"/",name:"Home",component:V},{path:"/productdetails",name:"productdetails",component:at}]}a["default"].use(e["a"]);var nt=new e["a"]({mode:"hash",scrollBehavior:function(){return{y:0}},routes:et()});s["a"]=nt},a585:function(t,s,i){"use strict";var a=i("ad72"),e=i.n(a);e.a},a629:function(t,s,i){},ad72:function(t,s,i){},b189:function(t,s,i){t.exports=i.p+"img/logo1.1921f2b5.png"},c75a:function(t,s,i){},c7e3:function(t,s,i){"use strict";var a=i("5fdf"),e=i.n(a);e.a},e9e2:function(t,s,i){"use strict";var a=i("000a"),e=i.n(a);e.a},ffd7:function(t,s,i){t.exports=i.p+"img/4.c426cf8b.jpg"}});
//# sourceMappingURL=app.09f8fb2e.js.map