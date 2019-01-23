(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{157:function(e,t,n){e.exports={voter:"item-title_voter__qViTL",domain:"item-title_domain__16bfZ",link:"item-title_link__1laQf"}},159:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(173),a=n(174),c=n(175),i=n.n(c).a.create(),o=new(function(){function e(t){var n=t.url;Object(r.a)(this,e),this.url=n,this.endpoints={}}return Object(a.a)(e,[{key:"createEntity",value:function(e){this.endpoints[e.name]=this.createDefaultEndpoints(e),Object.assign(this.endpoints,this.setOtherEndpoints())}},{key:"createDefaultEndpoints",value:function(e){var t={},n="".concat(this.url,"/").concat(e.name);return t.getAll=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.get(n,{params:e})},t.getOne=function(e,t){return i.get("".concat(n,"/").concat(e,".json"),{params:t})},t.create=function(e){return i.post(n,e)},t.update=function(e,t){return i.put("".concat(n,"/").concat(e),t)},t.delete=function(e){return i.delete("".concat(n,"/").concat(e))},t}},{key:"getResourceUrl",value:function(e){return"".concat(this.url,"/").concat(e)}},{key:"setOtherEndpoints",value:function(){var e=this;return{TOP_STORIES:{GET_ALL:function(){return i.get("".concat(e.getResourceUrl("topstories.json")))}},NEWS_STORIES:{GET_ALL:function(){return i.get("".concat(e.getResourceUrl("beststories.json")))}},NEW_STORIES:{GET_ALL:function(){return i.get("".concat(e.getResourceUrl("newstories.json")))}},SHOW_STORIES:{GET_ALL:function(){return i.get("".concat(e.getResourceUrl("showstories.json")))}},JOB_STORIES:{GET_ALL:function(){return i.get("".concat(e.getResourceUrl("jobstories.json")))}},ASK_STORIES:{GET_ALL:function(){return i.get("".concat(e.getResourceUrl("askstories.json")))}}}}}]),e}())({url:"https://hacker-news.firebaseio.com/v0"})},162:function(e,t,n){e.exports={details:"item-details_details__2ZwlC"}},164:function(e,t,n){"use strict";var r=n(0),a=n(157),c=n.n(a),i=n(77);function o(e){return e?new URL(e).hostname.replace("www.",""):""}var s=function(e){var t=e.item,n=e.index;return r.createElement("tr",null,r.createElement("td",{align:"right"},r.createElement("span",null,n&&"".concat(n,"."))),r.createElement("td",null,r.createElement("a",{href:"https://news.ycombinator.com/vote?id=".concat(t.id,"&how=up")},r.createElement("div",{className:c.a.voter}))),r.createElement("td",null,t.url?r.createElement("a",{target:"_blank",href:t.url},t.title):r.createElement(i.a,{to:"/item?id=".concat(t.id)},t.title)," ",r.createElement("span",{className:c.a.domain},t.url&&r.createElement(r.Fragment,null,"(",r.createElement("a",{className:c.a.link,href:"https://news.ycombinator.com/from?site=".concat(o(t.url))},o(t.url)),")"))))},u=n(169),l=n(162),m=n.n(l),d=function(e){var t=e.item,n=e.setCurrentItem,a=e.index;return r.createElement("tr",null,r.createElement("td",{colSpan:2}),r.createElement("td",{className:m.a.details},r.createElement("span",null,t.score," points")," by ",r.createElement("a",{href:"https://news.ycombinator.com/user?id=".concat(t.by)},t.by)," ",r.createElement("span",null,r.createElement(i.a,{onClick:n,to:"/item?id=".concat(t.id)},Object(u.format)(t.time,(new Date).toString())))," | ",r.createElement("a",{href:"https://news.ycombinator.com/hide?id=".concat(t.id)},"hide")," | ",!a&&r.createElement(r.Fragment,null,r.createElement("a",{href:"https://hn.algolia.com/?query=".concat(t.title,"&sort=byDate&dateRange=all&type=story&storyText=false&prefix&page=0")},"past")," | ",r.createElement("a",{href:"https://hn.algolia.com/?search=".concat(t.title)},"web")," | ",r.createElement("a",{href:"https://news.ycombinator.com/fave?id=".concat(t.id)},"favorite")," | "),r.createElement(i.a,{onClick:n,to:"/item?id=".concat(t.id)},t.descendants," comments")))},f=function(e){var t=e.index,n=e.item,a=e.setCurrentItem;return r.createElement(r.Fragment,null,r.createElement(s,{item:n,index:t}),r.createElement(d,{setCurrentItem:a,item:n,index:t}),r.createElement("tr",{className:c.a.spacer}))};n.d(t,"a",function(){return f})},165:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"getAllStoriesByType",function(){return l}),n.d(r,"setPage",function(){return m}),n.d(r,"setCurrentItem",function(){return d});var a={};n.r(a),n.d(a,"currentItemSelector",function(){return p}),n.d(a,"pageSelector",function(){return E}),n.d(a,"itemsSelector",function(){return g}),n.d(a,"isLoadingSelector",function(){return h});var c=n(170),i=n.n(c),o=n(171),s=n(14),u=n(159);u.a.createEntity({name:"item"});var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var n=Object(o.a)(i.a.mark(function n(r,a){var c,o,l,m,d;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c=a(),o=c.items.pageSize,n.next=4,u.a.endpoints["".concat(e.toUpperCase(),"_STORIES")].GET_ALL();case 4:return l=n.sent,m=l.data.filter(function(e){return!e.deleted&&!e.dead}).slice(t*o-o,t*o),d=m.map(function(e){return u.a.endpoints.item.getOne(e)}),n.abrupt("return",r({type:s.a.GET_ALL,payload:Promise.all(d)}));case 8:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}()},m=function(e){return{type:s.a.SET_PAGE,payload:{page:e}}},d=function(e){return function(t,n){var r,a=n().items.itemsById;return r=e?a[e]?new Promise(function(t){return t({data:a[e]})}):u.a.endpoints.item.getOne(e):new Promise(function(e){return e({data:null})}),t({type:s.a.SET_CURRENT_ITEM,payload:r})}},f=n(172),p=function(e){return e.items.currentItem},E=function(e){return e.items.page},g=Object(f.a)([function(e){return e.items.itemsById}],function(e){return Object.values(e)}),h=Object(f.a)([function(e){return e.items}],function(e){return e.isLoading});n(33);n.d(t,"a",function(){return v});var v={actions:r,actionTypes:s.a,selectors:a}},166:function(e,t,n){e.exports={root:"item-list_root__1ZD8i",spacer:"item-list_spacer__1KJ56"}},168:function(e,t,n){"use strict";var r=n(158),a=n.n(r),c=n(0),i=n(164),o=n(166),s=n.n(o),u=n(77),l=function(e){var t=e.items,n=e.page,r=e.onClick,o=e.pageSize,l=e.setCurrentItem;return a()(t)?null:c.createElement("table",{className:s.a.root,cellSpacing:0,cellPadding:0},c.createElement("tbody",null,t.map(function(e,t){var r=t+1+o*(n-1);return c.createElement(i.a,{setCurrentItem:l,key:e.id,item:e,index:r})}),c.createElement("tr",{className:s.a.spacer}),c.createElement("tr",null,c.createElement("td",{colSpan:2}),c.createElement("td",null,c.createElement(u.a,{onClick:r,to:"?page=".concat(n+1)},"More")))))};n.d(t,"a",function(){return l})},220:function(e,t,n){"use strict";n.r(t);var r=n(158),a=n.n(r),c=n(0),i=n(34),o=n(15),s=n(168),u=n(165),l=Object(o.b)(function(e){return{items:u.a.selectors.itemsSelector(e),isLoading:u.a.selectors.isLoadingSelector(e),page:u.a.selectors.pageSelector(e),pageSize:e.items.pageSize}})(function(e){var t=e.items,n=e.isLoading,r=e.dispatch,o=e.page,l=e.pageSize;c.useEffect(function(){var e=new URL(window.location.href),t=new URLSearchParams(e.search).get("page");t&&r(u.a.actions.setPage(Number(t)))},[]),c.useEffect(function(){r(u.a.actions.getAllStoriesByType("top",o))},[o]);return c.createElement(i.a,null,n||a()(t)?c.createElement("div",null,"Loading..."):c.createElement(s.a,{items:t,page:o,pageSize:l,onClick:function(){r(u.a.actions.setPage(o+1))},setCurrentItem:function(){return function(e){r(u.a.actions.setCurrentItem(e))}}}))});n.d(t,"HomePage",function(){return l})}}]);
//# sourceMappingURL=2.d3372053.chunk.js.map