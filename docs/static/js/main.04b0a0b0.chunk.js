(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{11:function(e,t,n){e.exports={root:"footer_root__2WKfi",spacer:"footer_spacer__2YWep",line:"footer_line__3_Imu",center:"footer_center__2-LPF",yclinks:"footer_yclinks__3YIlb"}},14:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a,r=n(23);!function(e){e.GET_ALL="GET_ALL",e.GET_ONE="GET_ONE",e.GET_ALL_TOP_STORIES="GET_ALL_TOP_STORIES",e.SET_PAGE="SET_PAGE",e.SET_CURRENT_ITEM="SET_CURRENT_ITEM"}(a||(a={}));var c=Object(r.a)("ITEMS",[a.GET_ALL,a.GET_ONE,a.GET_ALL_TOP_STORIES,a.SET_PAGE,a.SET_CURRENT_ITEM])},154:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(49),o=n.n(c),l=n(15),i=n(222),s=n(217),u=n(212),m=n(51),E=n.n(m),p=n(34),d=function(){return a.createElement(p.a,null,"Loading...")},h=function(e){return E()({loader:function(){return e},loading:function(){return a.createElement(d,null)},render:function(e,t){return a.createElement(e,t)}})};n(55);var _=n(24),f=Object(_.a)({}),g=Promise.all([n.e(0),n.e(2)]).then(n.bind(null,220)).then(function(e){return e.HomePage}),b=Promise.all([n.e(0),n.e(3)]).then(n.bind(null,214)).then(function(e){return e.CommentsPage}),A=n.e(4).then(n.bind(null,216)).then(function(e){return e.Error404Page}),L=Promise.all([n.e(0),n.e(5)]).then(n.bind(null,215)).then(function(e){return e.ShowPage}),w=Promise.all([n.e(0),n.e(6)]).then(n.bind(null,219)).then(function(e){return e.NewPage}),T=Promise.all([n.e(0),n.e(7)]).then(n.bind(null,221)).then(function(e){return e.NewsPage}),v=Promise.all([n.e(0),n.e(8)]).then(n.bind(null,218)).then(function(e){return e.AskPage}),y=function(){return a.createElement(a.Suspense,{fallback:a.createElement(d,null)},a.createElement(i.a,{history:f},a.createElement(s.a,null,a.createElement(u.a,{exact:!0,path:"/",component:h(g)}),a.createElement(u.a,{path:"/item",component:h(b)}),a.createElement(u.a,{exact:!0,path:"/show",component:h(L)}),a.createElement(u.a,{exact:!0,path:"/news",component:h(T)}),a.createElement(u.a,{exact:!0,path:"/newest",component:h(w)}),a.createElement(u.a,{exact:!0,path:"/ask",component:h(v)}),a.createElement(u.a,{component:h(A)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(7),N=n(56),S=n(60),P=n(57),I=n(33),j=n(38),G=Object(O.c)({items:I.a,comments:j.a}),k=Object(P.createLogger)({}),C=[N.a,Object(S.a)()];"production"!==Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_ENV&&C.push(k);var R=Object(O.e)(G,Object(O.d)(O.a.apply(void 0,C))),F=(n(154),r.a.createElement(l.a,{store:R},r.a.createElement(y,null)));o.a.render(F,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e,t){return t.reduce(function(t,n){return t[n]="".concat(e,"/").concat(n),t["".concat(n,"_PENDING")]="".concat(e,"/").concat(n,"_PENDING"),t["".concat(n,"_FULFILLED")]="".concat(e,"/").concat(n,"_FULFILLED"),t["".concat(n,"_REJECTED")]="".concat(e,"/").concat(n,"_REJECTED"),t},{})}},25:function(e,t,n){"use strict";var a=n(5),r=n(58),c=n.n(r),o=function(e,t){var n=e.type;return n.endsWith("_".concat(t))?n:""},l=function(e){e.state,e.action;return{isLoading:e.isLoading}},i=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(!n.type.includes(e))return t;switch(n.type){case o(n,"PENDING"):return function(e){var t=e.state,n=e.action;return Object(a.a)({},t,{error:""},l({state:t,action:n,isLoading:!0}))}({state:t,action:n});case o(n,"FULFILLED"):return function(e){var t=e.state,n=e.action;return Object(a.a)({},t,l({state:t,action:n,isLoading:!1}))}({state:t,action:n});case o(n,"REJECTED"):return function(e){var t=e.state,n=e.action,r=c()(n,"payload.response.data.error",!0);return r||console.warn("Missing Error Handler: ",{action:n.payload}),Object(a.a)({},t,{error:r},l({state:t,action:n,isLoading:!1}))}({state:t,action:n});default:return t}}};n.d(t,"a",function(){return i})},32:function(e,t,n){e.exports={root:"site-wrapper_root__34zVQ",pagespace:"site-wrapper_pagespace__SgKch"}},33:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(5),r=n(22),c=n(14),o=n(25),l={itemsById:{},page:1,pageSize:30,currentItem:{}},i=Object(r.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.a.GET_ALL_FULFILLED:var n=t.payload.flatMap(function(e){return e.data}).reduce(function(e,t){return e[t.id]=t,e},{});return Object(a.a)({},e,{itemsById:n});case c.a.SET_PAGE:var r=t.payload.page;return Object(a.a)({},e,{page:r});case c.a.SET_CURRENT_ITEM_FULFILLED:var o=t.payload.data;return Object(a.a)({},e,{currentItem:o});default:return e}},Object(o.a)("ITEMS"))},34:function(e,t,n){"use strict";var a=n(0),r=n(77),c=n(213),o=n(8),l=n.n(o),i=n(15),s=n(52),u=n.n(s),m=Object(i.b)(function(e){return{}})(function(e){var t={color:"white"};return a.createElement("table",{className:l.a.root,cellPadding:0,cellSpacing:0},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{className:l.a.logoWrapper},a.createElement(r.a,{to:"/"},a.createElement("img",{className:l.a.logo,src:u.a}))),a.createElement("td",{className:l.a.nav},a.createElement("span",{className:l.a.pageTop},a.createElement("b",{className:l.a.title},a.createElement(r.a,{to:"/news"},"Hacker News")),a.createElement(c.a,{activeStyle:t,to:"/newest"},"new")," | ",a.createElement("a",{href:"https://news.ycombinator.com/newcomments"},"comments")," | ",a.createElement(c.a,{activeStyle:t,to:"/ask"},"ask")," | ",a.createElement(c.a,{activeStyle:t,to:"/show"},"show")," | ",a.createElement("a",{href:"https://news.ycombinator.com/jobs"},"jobs")," | ",a.createElement("a",{href:"https://news.ycombinator.com/submit"},"submit"))))))}),E=n(32),p=n.n(E),d=n(59),h=n(54),_=n.n(h),f=function(){var e=a.useState(""),t=Object(d.a)(e,2),n=t[0],r=t[1];return a.createElement("form",{className:_.a.root,method:"get",action:"//hn.algolia.com/"},"Search:"," ",a.createElement("input",{type:"text",name:"q",value:n,onChange:function(e){var t=e.target.value;r(t)},size:17,autoCorrect:"off",autoCapitalize:"off"}))},g=n(11),b=n.n(g),A=function(){return a.createElement(a.Fragment,null,a.createElement("table",{className:b.a.root,cellSpacing:"0",cellPadding:"1"},a.createElement("tbody",null,a.createElement("tr",{className:b.a.spacer}),a.createElement("tr",null,a.createElement("td",{className:b.a.line})))),a.createElement("br",null),a.createElement("div",{className:b.a.center},a.createElement("span",{className:b.a.yclinks},a.createElement("a",{href:"https://news.ycombinator.com/newsguidelines.html"},"Guidelines")," | ",a.createElement("a",{href:"https://news.ycombinator.com/newsfaq.html"},"FAQ")," | ",a.createElement("a",{href:"mailto:hn@ycombinator.com"},"Support")," | ",a.createElement("a",{href:"https://github.com/HackerNews/API"},"API")," | ",a.createElement("a",{href:"https://news.ycombinator.com/security.html"},"Security")," | ",a.createElement("a",{href:"https://news.ycombinator.com/lists.html"},"Lists")," | ",a.createElement("a",{href:"https://news.ycombinator.com/bookmarklet.html"},"Bookmarklet")," | ",a.createElement("a",{href:"https://www.ycombinator.com/legal"},"Legal")," | ",a.createElement("a",{href:"https://www.ycombinator.com/apply"},"Apply to YC")," | ",a.createElement("a",{href:"mailto:hn@ycombinator.com"},"Contact")),a.createElement("br",null),a.createElement("br",null),a.createElement(f,null)))},L=function(e){var t=e.children;return a.createElement("table",{className:p.a.root,cellSpacing:0,cellPadding:0},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement(m,null))),a.createElement("tr",{className:p.a.pagespace}),a.createElement("tr",null,a.createElement("td",null,t)),a.createElement("tr",null,a.createElement("td",null,a.createElement(A,null)))))};n.d(t,"a",function(){return L})},35:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a,r=n(23);!function(e){e.GET_ALL="GET_ALL",e.GET_ONE="GET_ONE"}(a||(a={}));var c=Object(r.a)("COMMENTS",[a.GET_ALL,a.GET_ONE])},38:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(5),r=n(22),c=n(35),o=n(25),l={commentsById:{}},i=Object(r.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.a.GET_ALL_FULFILLED:var n=t.payload.data.reduce(function(e,t){return t.parent?(e[t.parent]||(e[t.parent]=[]),e[t.parent].push(t),e):e},{});return Object(a.a)({},e,{commentsById:n});default:return e}},Object(o.a)("COMMENTS"))},52:function(e,t){e.exports="data:image/gif;base64,R0lGODlhEgASAKIAAP/jyvihV/aKLfmxc/////9mAAAAAAAAACH5BAAAAAAALAAAAAASABIAAAMpWLrc/jDKOQkRy8pBhuKeRAAKQFBBxwVUYY5twXVxodV3nLd77f9ASQIAOw=="},54:function(e,t,n){e.exports={root:"site-search_root__1eMAs"}},67:function(e,t,n){e.exports=n(156)},8:function(e,t,n){e.exports={root:"header_root__HZLiS",logoWrapper:"header_logoWrapper__1-6mn",logo:"header_logo__2Qg7Z",nav:"header_nav__1ktYC",pageTop:"header_pageTop__2_BAi",title:"header_title__3LPSB"}}},[[67,10,9]]]);
//# sourceMappingURL=main.04b0a0b0.chunk.js.map