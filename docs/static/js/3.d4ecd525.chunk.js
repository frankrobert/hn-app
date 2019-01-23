(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{157:function(e,t,n){e.exports={voter:"item-title_voter__qViTL",domain:"item-title_domain__16bfZ",link:"item-title_link__1laQf"}},159:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(173),a=n(174),c=n(175),o=n.n(c).a.create(),i=new(function(){function e(t){var n=t.url;Object(r.a)(this,e),this.url=n,this.endpoints={}}return Object(a.a)(e,[{key:"createEntity",value:function(e){this.endpoints[e.name]=this.createDefaultEndpoints(e),Object.assign(this.endpoints,this.setOtherEndpoints())}},{key:"createDefaultEndpoints",value:function(e){var t={},n="".concat(this.url,"/").concat(e.name);return t.getAll=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.get(n,{params:e})},t.getOne=function(e,t){return o.get("".concat(n,"/").concat(e,".json"),{params:t})},t.create=function(e){return o.post(n,e)},t.update=function(e,t){return o.put("".concat(n,"/").concat(e),t)},t.delete=function(e){return o.delete("".concat(n,"/").concat(e))},t}},{key:"getResourceUrl",value:function(e){return"".concat(this.url,"/").concat(e)}},{key:"setOtherEndpoints",value:function(){var e=this;return{TOP_STORIES:{GET_ALL:function(){return o.get("".concat(e.getResourceUrl("topstories.json")))}},NEWS_STORIES:{GET_ALL:function(){return o.get("".concat(e.getResourceUrl("beststories.json")))}},NEW_STORIES:{GET_ALL:function(){return o.get("".concat(e.getResourceUrl("newstories.json")))}},SHOW_STORIES:{GET_ALL:function(){return o.get("".concat(e.getResourceUrl("showstories.json")))}},JOB_STORIES:{GET_ALL:function(){return o.get("".concat(e.getResourceUrl("jobstories.json")))}},ASK_STORIES:{GET_ALL:function(){return o.get("".concat(e.getResourceUrl("askstories.json")))}}}}}]),e}())({url:"https://hacker-news.firebaseio.com/v0"})},162:function(e,t,n){e.exports={details:"item-details_details__2ZwlC"}},164:function(e,t,n){"use strict";var r=n(0),a=n(157),c=n.n(a),o=n(77);function i(e){return e?new URL(e).hostname.replace("www.",""):""}var u=function(e){var t=e.item,n=e.index;return r.createElement("tr",null,r.createElement("td",{align:"right"},r.createElement("span",null,n&&"".concat(n,"."))),r.createElement("td",null,r.createElement("a",{href:"https://news.ycombinator.com/vote?id=".concat(t.id,"&how=up")},r.createElement("div",{className:c.a.voter}))),r.createElement("td",null,t.url?r.createElement("a",{target:"_blank",href:t.url},t.title):r.createElement(o.a,{to:"/item?id=".concat(t.id)},t.title)," ",r.createElement("span",{className:c.a.domain},t.url&&r.createElement(r.Fragment,null,"(",r.createElement("a",{className:c.a.link,href:"https://news.ycombinator.com/from?site=".concat(i(t.url))},i(t.url)),")"))))},l=n(169),s=n(162),m=n.n(s),d=function(e){var t=e.item,n=e.setCurrentItem,a=e.index;return r.createElement("tr",null,r.createElement("td",{colSpan:2}),r.createElement("td",{className:m.a.details},r.createElement("span",null,t.score," points")," by ",r.createElement("a",{href:"https://news.ycombinator.com/user?id=".concat(t.by)},t.by)," ",r.createElement("span",null,r.createElement(o.a,{onClick:n,to:"/item?id=".concat(t.id)},Object(l.format)(t.time,(new Date).toString())))," | ",r.createElement("a",{href:"https://news.ycombinator.com/hide?id=".concat(t.id)},"hide")," | ",!a&&r.createElement(r.Fragment,null,r.createElement("a",{href:"https://hn.algolia.com/?query=".concat(t.title,"&sort=byDate&dateRange=all&type=story&storyText=false&prefix&page=0")},"past")," | ",r.createElement("a",{href:"https://hn.algolia.com/?search=".concat(t.title)},"web")," | ",r.createElement("a",{href:"https://news.ycombinator.com/fave?id=".concat(t.id)},"favorite")," | "),r.createElement(o.a,{onClick:n,to:"/item?id=".concat(t.id)},t.descendants," comments")))},f=function(e){var t=e.index,n=e.item,a=e.setCurrentItem;return r.createElement(r.Fragment,null,r.createElement(u,{item:n,index:t}),r.createElement(d,{setCurrentItem:a,item:n,index:t}),r.createElement("tr",{className:c.a.spacer}))};n.d(t,"a",function(){return f})},165:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"getAllStoriesByType",function(){return s}),n.d(r,"setPage",function(){return m}),n.d(r,"setCurrentItem",function(){return d});var a={};n.r(a),n.d(a,"currentItemSelector",function(){return p}),n.d(a,"pageSelector",function(){return E}),n.d(a,"itemsSelector",function(){return h}),n.d(a,"isLoadingSelector",function(){return v});var c=n(170),o=n.n(c),i=n(171),u=n(14),l=n(159);l.a.createEntity({name:"item"});var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var n=Object(i.a)(o.a.mark(function n(r,a){var c,i,s,m,d;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c=a(),i=c.items.pageSize,n.next=4,l.a.endpoints["".concat(e.toUpperCase(),"_STORIES")].GET_ALL();case 4:return s=n.sent,m=s.data.filter(function(e){return!e.deleted&&!e.dead}).slice(t*i-i,t*i),d=m.map(function(e){return l.a.endpoints.item.getOne(e)}),n.abrupt("return",r({type:u.a.GET_ALL,payload:Promise.all(d)}));case 8:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}()},m=function(e){return{type:u.a.SET_PAGE,payload:{page:e}}},d=function(e){return function(t,n){var r,a=n().items.itemsById;return r=e?a[e]?new Promise(function(t){return t({data:a[e]})}):l.a.endpoints.item.getOne(e):new Promise(function(e){return e({data:null})}),t({type:u.a.SET_CURRENT_ITEM,payload:r})}},f=n(172),p=function(e){return e.items.currentItem},E=function(e){return e.items.page},h=Object(f.a)([function(e){return e.items.itemsById}],function(e){return Object.values(e)}),v=Object(f.a)([function(e){return e.items}],function(e){return e.isLoading});n(33);n.d(t,"a",function(){return b});var b={actions:r,actionTypes:u.a,selectors:a}},208:function(e,t,n){e.exports={root:"comment_root__3SPDu",voter:"comment_voter__2oV-e",title:"comment_title__1c5Bm",comment:"comment_comment__B8IGG",valign:"comment_valign__3pMLr"}},214:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getAllById",function(){return E});var a={};n.r(a),n.d(a,"commentsSelector",function(){return v}),n.d(a,"isLoadingSelector",function(){return b});var c=n(158),o=n.n(c),i=n(0),u=n(15),l=n(165),s=n(170),m=n.n(s),d=n(171),f=n(35),p=n(159),E=function(e){return function(){var t=Object(d.a)(m.a.mark(function t(n){var r,a,c,i;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=function(){return(i=Object(d.a)(m.a.mark(function e(t){var n,r,i,u,l,s,d,f;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,r=!1,i=void 0,e.prev=3,u=t[Symbol.iterator]();case 5:if(n=(l=u.next()).done){e.next=22;break}if(s=l.value,!o()(s.kids)){e.next=9;break}return e.abrupt("continue",19);case 9:return d=s.kids.map(function(e){return p.a.endpoints.item.getOne(e)}),e.next=12,Promise.all(d);case 12:if(e.t0=function(e){return e.data},f=e.sent.map(e.t0),a=a.concat(f),!f.every(function(e){return o()(e.kids)})){e.next=17;break}return e.abrupt("continue",19);case 17:return e.next=19,c(f);case 19:n=!0,e.next=5;break;case 22:e.next=28;break;case 24:e.prev=24,e.t1=e.catch(3),r=!0,i=e.t1;case 28:e.prev=28,e.prev=29,n||null==u.return||u.return();case 31:if(e.prev=31,!r){e.next=34;break}throw i;case 34:return e.finish(31);case 35:return e.finish(28);case 36:case"end":return e.stop()}},e,this,[[3,24,28,36],[29,,31,35]])}))).apply(this,arguments)},c=function(e){return i.apply(this,arguments)},e){t.next=4;break}return t.abrupt("return",n({type:f.a.GET_ALL,payload:new Promise(function(e){return e({data:[]})})}));case 4:return r=e.map(function(e){return p.a.endpoints.item.getOne(e)}),t.next=7,Promise.all(r);case 7:return t.t0=function(e){return e.data},a=t.sent.map(t.t0),t.next=11,c(a);case 11:return a=a.filter(function(e){return!e.deleted&&!e.dead}),t.abrupt("return",n({type:f.a.GET_ALL,payload:new Promise(function(e){return e({data:a})})}));case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},h=n(172),v=Object(h.a)([function(e){return e.comments.commentsById}],function(e){return Object.values(e).flatMap(function(e){return e})}),b=Object(h.a)([function(e){return e.comments}],function(e){return e.isLoading}),g=(n(38),{actions:r,actionTypes:f.a,selectors:a}),y=n(34),_=n(164),w=function(e){var t=e.item,n=e.onGoTo;return i.createElement("table",null,i.createElement("tbody",null,i.createElement(_.a,{item:t,setCurrentItem:function(){return null}}),i.createElement("tr",null,i.createElement("td",{colSpan:2}),i.createElement("td",null,i.createElement("textarea",{name:"text",rows:6,cols:60}),i.createElement("br",null),i.createElement("br",null),i.createElement("input",{onClick:n,type:"submit",value:"add comment"})))))},S=n(208),L=n.n(S),O=n(169),k=function(e){var t=e.comment,n=e.item;return i.createElement("table",{className:L.a.root},i.createElement("tbody",null,i.createElement("tr",null,i.createElement("td",null,i.createElement("img",{height:1,width:0})),i.createElement("td",{className:L.a.valign},i.createElement("a",{href:"https://news.ycombinator.com/vote?id=".concat(n.id,"&how=up")},i.createElement("div",{className:L.a.voter}))),i.createElement("td",null,i.createElement("div",{className:L.a.title},i.createElement("a",{href:"https://news.ycombinator.com/user?id=".concat(t.by)},t.by)," ",i.createElement("span",null,i.createElement("a",{href:"https://news.ycombinator.com/item?id=".concat(t.id)},Object(O.format)(t.time,(new Date).toString())))," ",i.createElement("a",{href:"javascript:void(0)"},"[-]")),i.createElement("br",null),i.createElement("div",{className:L.a.comment},i.createElement("span",{dangerouslySetInnerHTML:{__html:t.text}}),i.createElement("div",null,i.createElement("p",null,i.createElement("u",null,i.createElement("a",{href:"https://news.ycombinator.com/reply?id=".concat(n.id)},"reply")))))))))},T=function(e){var t=e.comments,n=e.item;return i.createElement("table",null,i.createElement("tbody",null,t.map(function(e){return i.createElement("tr",{key:e.id},i.createElement("td",null,i.createElement(k,{comment:e,item:n})))})))},x=function(e){e.preventDefault(),e.stopPropagation(),window.location.href="https://news.ycombinator.com/comment"},I=Object(u.b)(function(e){return{item:l.a.selectors.currentItemSelector(e),isLoading:l.a.selectors.isLoadingSelector(e),comments:g.selectors.commentsSelector(e)}})(function(e){var t=e.item,n=e.dispatch,r=e.isLoading,a=e.comments;return i.useEffect(function(){var e=new URL(window.location.href),t=new URLSearchParams(e.search).get("id");if(t)return n(l.a.actions.setCurrentItem(Number(t))),function(){return n(l.a.actions.setCurrentItem(null))}},[]),i.useEffect(function(){if(!o()(t))return n(g.actions.getAllById(t.kids)),function(){return n(g.actions.getAllById(null))}},[t]),i.createElement(y.a,null,r||o()(t)?i.createElement("div",null,"Loading..."):i.createElement(i.Fragment,null,i.createElement(w,{item:t,onGoTo:x}),i.createElement("br",null),i.createElement("br",null),r||o()(a)?i.createElement("div",null,"Loading..."):i.createElement(T,{comments:a,item:t}),i.createElement("br",null),i.createElement("br",null)))});n.d(t,"CommentsPage",function(){return I})}}]);
//# sourceMappingURL=3.d4ecd525.chunk.js.map