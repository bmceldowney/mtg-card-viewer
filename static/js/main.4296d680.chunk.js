(this["webpackJsonpmtg-card-viewer"]=this["webpackJsonpmtg-card-viewer"]||[]).push([[0],{40:function(e,a,t){e.exports=t(78)},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(12),l=t.n(c),i=t(17),o=t(10),s=t(36),u=t(8),d="FETCH_CARDS_PENDING",m="FETCH_CARDS_SUCCESS",p="FETCH_CARDS_ERROR",f="PAGE_LOADED",g="SEARCH_CRITERIA_ENTERED",h="CLEAR_CARDS",v="CHANGE_SORT";function E(e){for(var a={allIds:[],byIds:{}},t=0;t<e;t++)a.allIds.push(t),a.byIds[t]={id:t,imageUrl:"placeholder"};return console.log("built initial state"),a}var b=E(20),C={title:"Magic: the Gathering Card Viewer",loadingFromApi:!1,lastPageFetched:0,totalCardCount:0,currentSearchCriteria:{name:"",artist:"",rarity:"",setName:""},sortField:"name"},y=Object(o.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:return Object(u.a)({},e,{loadingFromApi:!1});case d:return Object(u.a)({},e,{loadingFromApi:!0});case p:return Object(u.a)({},e,{loadingFromApi:!1});case f:return Object(u.a)({},e,{lastPageFetched:a.payload.pageNumber,totalCardCount:a.payload.totalCount});case g:if(!a.payload.searchCriteria)return e;var t=e.currentSearchCriteria,r=a.payload.searchCriteria.value,n=a.payload.searchCriteria.fieldName;return t[n]=r,Object(u.a)({},e,{currentSearchCriteria:t});case h:return Object(u.a)({},e,{totalCardCount:0,lastPageFetched:0});case v:return Object(u.a)({},e,{sortField:a.payload});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:var t=Object(u.a)({},e);return t.byIds[0]&&"placeholder"===t.byIds[0].imageUrl&&(t.byIds={},t.allIds=[]),a.payload.forEach((function(a){var r=a.name,n=a.originalType,c=a.setName,l=a.id,i=a.artist,o=a.imageUrl;-1===e.allIds.indexOf(l)&&(t.byIds[l]={name:r,originalType:n,setName:c,id:l,artist:i,imageUrl:o},t.allIds.push(l))}),{}),t;case h:return E(20);default:return e}}});t(49);var N=function(e){var a=e.props,t=a.name,r=a.artist,c=a.setName,l=a.originalType,i=a.imageUrl,o=a.state,s=a.id,u=n.a.createElement("div",{className:"card placeholder"}),d=n.a.createElement("div",{className:"flip-container"},n.a.createElement("div",{className:"card"},n.a.createElement("span",{className:"title first"},t),n.a.createElement("span",{className:"set-name"},c),n.a.createElement("span",{className:"artist"},r),n.a.createElement("div",{className:"no-image-text"},n.a.createElement("span",null,"No Image Available")))),m={backgroundImage:"url(".concat(i,")")};return"placeholder"===i?u:i?n.a.createElement("div",{className:"flip-container ".concat(o),key:s},n.a.createElement("div",{className:"flipper"},n.a.createElement("div",{className:"front"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"image",style:m}))),n.a.createElement("div",{className:"back"},n.a.createElement("div",{className:"card"},n.a.createElement("span",{className:"title first"},t),n.a.createElement("span",{className:"original-type"},l),n.a.createElement("span",{className:"set-name"},c),n.a.createElement("span",{className:"artist"},r))))):d},O=t(14);t(50);var S=function(e){var a=e.children,t=e.pagedList,c=e.fetchItemsForPage,l=t.lastPageFetched,i=t.loadingFromApi,o=t.hasNextPage,s=Object(r.useRef)(),u=Object(r.useState)(1),d=Object(O.a)(u,2),m=d[0],p=d[1],f=Object(r.useCallback)((function(e){var a=e.currentTarget,t=a.scrollTop;!(a.scrollHeight-(t+a.clientHeight)<1500)||m>l||!o||i||p(m+1)}),[m,l,i,o]);return Object(r.useEffect)((function(){var e=s.current;return e.addEventListener("scroll",f),function(){return e.removeEventListener("scroll",f)}}),[f]),Object(r.useEffect)((function(){c(m)}),[m,c]),n.a.createElement("div",{ref:s,className:"paged-list"},a)};t(51);var j=function(e){var a=e.props,t=a.totalCardCount,r=a.loadedCardCount;return n.a.createElement("div",{className:"footer"},n.a.createElement("span",null,"Created by Ben McEldowney"),n.a.createElement("span",{className:"count"},r," cards loaded of ",t," total cards"))};t(52);console.log("Header imported!");var F=function(e){var a=e.props,t=a.title,r=a.loadingFromApi,c=a.currentSearchCriteria,l=e.setSearchCriteria,i=e.changeSort,o=r?"loading":"";return n.a.createElement("div",{className:"header ".concat(o)},n.a.createElement("span",null,t),n.a.createElement("span",{className:"widgets"},n.a.createElement(P,{props:{loadingFromApi:r,currentSearchCriteria:c},setSearchCriteria:l}),n.a.createElement(k,{props:{loadingFromApi:r},changeSort:i}),n.a.createElement("span",{className:"loading-indicator"},n.a.createElement("div",null))))},A=t(82),I=t(80);t(53);var P=function(e){var a=e.props,t=a.loadingFromApi,c=a.currentSearchCriteria,l=e.setSearchCriteria,i=Object(r.useState)(!1),o=Object(O.a)(i,2),s=o[0],u=o[1],d=Object.keys(c).map((function(e){return n.a.createElement("input",{"data-fieldname":e,key:e,disabled:t,type:"text",placeholder:"Search by card ".concat(e),value:c[e],onChange:m})}));function m(e){var a=e.target.dataset.fieldname,t=e.target.value;l({fieldName:a,value:t})}return n.a.createElement("div",{id:"search-box",className:"search-box"},n.a.createElement("div",{className:"toggle"}),n.a.createElement(A.a,{placement:"bottom",isOpen:s,target:"search-box",toggle:function(){return u(!s)}},n.a.createElement(I.a,null,n.a.createElement("div",{className:"search-inputs"},d))))},R=(t(74),t(81));var k=function(e){var a=e.props.loadingFromApi,t=e.changeSort,c=Object(r.useState)(!1),l=Object(O.a)(c,2),i=l[0],o=l[1];function s(e){var a=e.target.textContent;t(a)}var u=["name","color","rarity","artist"].map((function(e){return n.a.createElement(R.a,{disabled:a,key:e,onClick:s,className:"sort-field"},e)}));return n.a.createElement("div",null,n.a.createElement("div",{id:"sort-button",className:"sort-button"}),n.a.createElement(A.a,{placement:"bottom",isOpen:i,target:"sort-button",toggle:function(){return o(!i)}},n.a.createElement(I.a,null,n.a.createElement("div",{className:"sort-selector"},u))))};function T(){return{type:h,payload:null}}var w=[];function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(a,t){var r=t().app,n=r.currentSearchCriteria,c=r.sortField,l=r.loadingFromApi,i=new URL("v1/cards","https://api.magicthegathering.io");i.searchParams.set("pageSize",20),i.searchParams.set("page",e),i.searchParams.set("type","Creature"),i.searchParams.set("orderBy",c),Object.keys(n).forEach((function(e){n[e]&&i.searchParams.set(e,n[e])}));var o=i.href;if(l)w.push(e);else{var s=0;a({type:d}),fetch(o).then((function(e){return e.headers.forEach((function(e,a){"total-count"===a&&(s=e)})),e.json()})).then((function(t){if(t.error)throw t.error;var r;return a((r=t.cards,{type:m,payload:r})),a(function(e){var a=e.pageNumber,t=e.totalCount;return{type:f,payload:{pageNumber:a,totalCount:t}}}({pageNumber:e,totalCount:s})),t.products})).catch((function(e){console.log(e),a(function(e){return{type:p,error:e}}(e))})).finally((function(){if(w.length){var t=w.pop();if(t>e)return a(_(t))}}))}}}var x=function(e){return function(a){return w.length?a(_(w.pop())):a(_(e))}},L=null;var D=function(e){return function(a){a({type:g,payload:{searchCriteria:e}}),clearTimeout(L),L=null,L=setTimeout((function(){a(T()),a(x(1))}),1e3)}};var H=function(e){return function(a){a(T()),a(function(e){return{type:v,payload:e}}(e)),a(x(1))}};t(75);var U,G=Object(i.b)((function(e){var a=Object(u.a)({},e.app),t={lastPageFetched:e.app.lastPageFetched,loadingFromApi:e.app.loadingFromApi,hasNextPage:e.cards.allIds.length<e.app.totalCardCount},r=Object(u.a)({},e.app,{loadedCardCount:Object.keys(e.cards.byIds).length});return Object(u.a)({header:a,footer:r,pagedList:t},e.cards)}),(function(e){return Object(o.b)({fetchItemsForPage:function(e){return x(e)},setSearchCriteria:function(e){return D(e)},changeSort:function(e){return H(e)}},e)}))((function(e){var a=e.header,t=e.footer,c=e.pagedList,l=e.allIds,i=e.byIds,o=e.fetchItemsForPage,s=e.setSearchCriteria,u=e.changeSort,d=l.map((function(e){var a=i[e];return n.a.createElement(N,{props:a,key:a.id})}));return Object(r.useEffect)((function(){return console.log("App redrawing!")})),n.a.createElement("div",{className:"app red"},n.a.createElement(F,{props:a,setSearchCriteria:s,changeSort:u}),n.a.createElement(S,{pagedList:c,fetchItemsForPage:o},d),n.a.createElement(j,{props:t}))}));t(76),t(77);l.a.render(n.a.createElement(i.a,{store:Object(o.d)(y,U,Object(o.a)(s.a))},n.a.createElement(G,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4296d680.chunk.js.map