webpackJsonp([2],{"5zde":function(e,t,o){o("zQR9"),o("qyJz"),e.exports=o("FeBl").Array.from},Gu7T:function(e,t,o){"use strict";t.__esModule=!0;var r,n=o("c/Tr"),a=(r=n)&&r.__esModule?r:{default:r};t.default=function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return(0,a.default)(e)}},VcHo:function(e,t){},"c/Tr":function(e,t,o){e.exports={default:o("5zde"),__esModule:!0}},fBQ2:function(e,t,o){"use strict";var r=o("evD5"),n=o("X8DO");e.exports=function(e,t,o){t in e?r.f(e,t,n(0,o)):e[t]=o}},qyJz:function(e,t,o){"use strict";var r=o("+ZMJ"),n=o("kM2E"),a=o("sB3e"),s=o("msXi"),i=o("Mhyx"),c=o("QRG4"),u=o("fBQ2"),f=o("3fs2");n(n.S+n.F*!o("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,o,n,l,d=a(e),v="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,k=void 0!==b,m=0,_=f(d);if(k&&(b=r(b,h>2?arguments[2]:void 0,2)),void 0==_||v==Array&&i(_))for(o=new v(t=c(d.length));t>m;m++)u(o,m,k?b(d[m],m):d[m]);else for(l=_.call(d),o=new v;!(n=l.next()).done;m++)u(o,m,k?s(l,b,[n.value,m],!0):n.value);return o.length=m,o}})},tcnj:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("Gu7T"),n=o.n(r),a=o("Xxa5"),s=o.n(a),i=o("exGp"),c=o.n(i),u=o("gyMJ"),f={created:function(){this.getData()},data:function(){return{books:[],hasMore:!0,offset:0,isLoading:!1}},mounted:function(){var e=this.$refs.scroll;e.offsetTop;e.addEventListener("touchstart",function(e){},!1)},methods:{more:function(){this.getData()},loadMore:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){var t=e.$refs.scroll;t.scrollTop+t.clientHeight+20>t.scrollHeight&&e.getData()},60)},remove:function(e){var t=this;return c()(s.a.mark(function o(){return s.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return console.log(e),o.next=3,Object(u.e)(e);case 3:t.books=t.books.filter(function(t){return t.bookId!==e});case 4:case"end":return o.stop()}},o,t)}))()},getData:function(){var e=this;return c()(s.a.mark(function t(){var o,r,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.hasMore||e.isLoading){t.next=12;break}return e.isLoading=!0,t.next=4,Object(u.d)(e.offset);case 4:o=t.sent,r=o.hasMore,a=o.books,e.books=[].concat(n()(e.books),n()(a)),e.books=a,e.hasMore=r,e.isLoading=!1,e.offset=e.books.length;case 12:case"end":return t.stop()}},t,e)}))()}},computed:{},watch:{},components:{MHeader:o("tCy4").a}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("MHeader",[e._v("列表页")]),e._v(" "),o("div",{ref:"scroll",staticClass:"content",on:{scroll:e.loadMore}},[o("ul",e._l(e.books,function(t,r){return o("router-link",{key:r,attrs:{to:{name:"detail",params:{bid:t.bookId}},tag:"li"}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.bookCover,expression:"book.bookCover"}]}),e._v(" "),o("div",[o("h3",[e._v(e._s(t.bookName))]),e._v(" "),o("p",[e._v(e._s(t.bookInfo))]),e._v(" "),o("b",[e._v("￥"+e._s(t.bookPrice))])]),e._v(" "),o("button",{on:{click:function(o){o.stopPropagation(),e.remove(t.bookId)}}},[e._v("删除")])])}),1),e._v(" "),o("div",{staticClass:"more",on:{click:e.more}},[e._v("加载更多")])])],1)},staticRenderFns:[]};var d=o("VU/8")(f,l,!1,function(e){o("VcHo")},"data-v-79ef46b7",null);t.default=d.exports}});
//# sourceMappingURL=2.2244f25db35cab757dde.js.map