"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(n,t,e){e.r(t);var r=e(9439),c=e(1454),a=e(1544),i=e(2791),o=e(7689),u=e(4390),s=e(184);t.default=function(){var n=(0,o.UO)().movieId,t=(0,i.useState)(!0),e=(0,r.Z)(t,2),p=e[0],f=e[1],l=(0,i.useState)([]),h=(0,r.Z)(l,2),d=h[0],x=h[1];return(0,i.useEffect)((function(){n&&(0,u.uV)("/movie",n).then((function(n){x(n.cast)})).catch(u.NI).finally((function(){return f(!1)}))}),[n]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Cast:"}),p&&(0,s.jsx)(c.a,{}),0!==d.length?(0,s.jsx)(a.c0,{children:d.map((function(n){var t=n.id,e=n.name,r=n.character,c=n.profile_path;return(0,s.jsxs)(a.iH,{children:[(0,s.jsx)("b",{children:e}),(0,s.jsxs)("p",{children:["Character: ",r]}),(0,s.jsx)("img",{src:c?"http://image.tmdb.org/t/p/w185".concat(c):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:e,width:"100",height:"150"})]},t)}))}):(0,s.jsx)("p",{children:"Sorry! We don't have any information about cast"})]})}},1454:function(n,t,e){e.d(t,{a:function(){return u}});var r,c=e(2598),a=e(168),i=e(5867).ZP.div(r||(r=(0,a.Z)(["\n    text-align: center;\n    margin-top: 150px;\n"]))),o=e(184),u=function(){return(0,o.jsx)(i,{children:(0,o.jsx)(c.Z1,{height:"150",width:"150",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},1544:function(n,t,e){e.d(t,{$j:function(){return p},c0:function(){return u},iH:function(){return s}});var r,c,a,i=e(168),o=e(5867),u=o.ZP.ul(r||(r=(0,i.Z)(["\n    display: flex;\n    gap: 30px;\n    align-items: center;\n    flex-wrap: wrap;\n"]))),s=o.ZP.li(c||(c=(0,i.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 5px;\n    width: 154px;\n    max-height: 400px;\n    cursor: pointer;\n    overflow: hidden;\n"]))),p=o.ZP.div(a||(a=(0,i.Z)(["\n    min-height: 169px;\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n"])))},4390:function(n,t,e){e.d(t,{Hx:function(){return v},NI:function(){return Z},Pu:function(){return p},Y5:function(){return x},bI:function(){return h},uV:function(){return w},vw:function(){return f}});var r=e(5861),c=e(7757),a=e.n(c),i=e(5294),o=e(1686),u="https://api.themoviedb.org/3",s="3f29e277b19fc95c68f9d05af1b05d52",p={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u).concat(t,"?api_key=").concat(s),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(t,"?api_key=").concat(s,"&query=").concat(e),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(t,"/").concat(e,"?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(t,"/").concat(e,"/credits?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(t,"/").concat(e,"/reviews?api_key=").concat(s),n.next=3,i.Z.get(r);case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(){o.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",p)}}}]);
//# sourceMappingURL=247.f3466951.chunk.js.map