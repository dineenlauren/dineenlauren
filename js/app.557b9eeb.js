(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var i=s[o];0!==r[i]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},o={app:0},r={app:0},n=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2af92db5"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s={about:1};o[t]?e.push(o[t]):0!==o[t]&&s[t]&&e.push(o[t]=new Promise((function(e,s){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"26685632"}[t]+".css",r=c.p+a,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var l=n[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,n=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete o[t],d.parentNode.removeChild(d),s(n)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=n);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,s[1](p)}r[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"1ddf":function(t,e,s){"use strict";s("5608")},"44af":function(t,e,s){"use strict";s("c504")},"4f7c":function(t,e,s){},5608:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("SiteNav",{attrs:{id:"nav"}}),s("div",{staticClass:"profile-bg"},[s("b-img",{staticClass:"profile-img",attrs:{src:t.image,alt:"profile photo"}})],1),s("b-row",[s("b-col",{attrs:{cols:"12",lg:"4"}},[s("div",{staticClass:"title-text"},[s("h1",[t._v("Dineen")]),s("h1",[t._v("Lauren")]),s("h4",[t._v("Web")]),s("h4",[t._v("Developement")])])]),s("b-col",{attrs:{cols:"12",lg:"8"}},[s("div",{staticClass:"transition-container"},[s("transition",{attrs:{name:"view",mode:"out-in"}},[s("router-view")],1)],1)])],1)],1)},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("b-navbar",{attrs:{toggleable:"sm",type:"light",variant:"light",fixed:"top"}},[s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-navbar-brand",{attrs:{to:"/"}},[s("img",{staticClass:"logo-img",attrs:{src:t.logo}})]),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto",attrs:{fixed:"top"}},[s("b-nav-item",{attrs:{to:"/about"}},[t._v("About")]),s("b-nav-item",{attrs:{to:"/projects"}},[t._v("Projects")])],1),s("b-navbar-nav",{staticClass:"ml-auto"})],1)],1)],1)},i=[],c={name:"SiteNav",data:function(){return{logo:s("cf05")}}},l=c,u=(s("44af"),s("2877")),p=Object(u["a"])(l,n,i,!1,null,"2f95ad21",null),d=p.exports,m={components:{SiteNav:d},data:function(){return{tabIndex:0,image:s("c3e7")}}},f=m,b=(s("034f"),Object(u["a"])(f,o,r,!1,null,null,null)),v=b.exports,h=(s("d3b7"),s("8c4f")),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-up",mode:"out-in"}},[s("div",{staticClass:"r-fullscreen-overlay"},[s("div",{staticClass:"r-fullscreen-overlay__body"},[s("h1",{staticClass:"offset-1"},[t._v("Dineen")]),s("h1",{staticClass:"offset-2"},[t._v("Lauren")]),s("p",{staticClass:"offset-3"},[t._v("Web Developement")]),s("router-link",{staticClass:"button",attrs:{to:"about"}},[t._v("View")])],1)])])},y=[],_={name:"Home",data:function(){return{}}},C=_,w=(s("1ddf"),Object(u["a"])(C,g,y,!1,null,"4d694cf4",null)),j=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"pg-section"},[a("h1",{staticClass:"p-4"},[t._v("Projects")]),a("b-container",{staticClass:"content-container relative",attrs:{fluid:"sm"}},[a("div",{staticClass:"project-title"},[a("h3",[t._v("RSVP App")])]),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticClass:"video-gif",attrs:{cols:"10"}},[a("b-embed",{attrs:{type:"video",aspect:"4by3",loop:"true",muted:"",playsinline:"",controls:""}},[a("source",{attrs:{src:s("e262"),type:"video/webm"}}),a("source",{attrs:{src:s("6ff7"),type:"video/mp4"}})])],1),a("b-col",{staticClass:"project-text",attrs:{cols:"10"}},[a("p",[a("span",{staticClass:"emphasis"},[t._v("Tech: ")]),t._v(" Vue | Firestore | Firebase")]),a("p",[a("span",{staticClass:"emphasis"},[t._v("What it is: ")]),t._v(" A RSVP website allowing users to login and update their RSVP status. ")]),a("p",[a("span",{staticClass:"emphasis"},[t._v("The cool thing about it: ")]),t._v("This is a replica of a real wedding website I created for a friend's wedding. They needed to restrict their guest count, so important points to accomodate: ")]),a("b-row",{attrs:{cols:"1"}},[a("b-col",[a("p",{staticClass:"emphasis-sm"},[t._v(" Eliminate the ability for guests to sign themselves up ")]),a("p"),a("p")]),a("b-col",{staticClass:"mt-3"},[a("p",{staticClass:"emphasis-sm"},[t._v(" Add restrictions for adding guests ")]),a("p")])],1)],1)],1)],1),a("b-container",{staticClass:"mt-5 content-container relative",attrs:{fluid:"sm"}},[a("div",{staticClass:"project-title"},[a("h3",[t._v("RSVP App")])]),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticClass:"video-gif",attrs:{cols:"12",lg:"11"}},[a("b-embed",{attrs:{type:"video",aspect:"4by3",autoplay:"true",loop:"true",muted:"",playsinline:""}},[a("source",{attrs:{src:s("ea32"),type:"video/webm"}}),a("source",{attrs:{src:s("6b70"),type:"video/mp4"}})])],1),a("b-col",{staticClass:"project-text",attrs:{cols:"12"}},[a("p",[a("span",{staticClass:"emphasis"},[t._v("Tech: ")]),t._v(" Words, words, words, words")]),a("p",[a("span",{staticClass:"emphasis"},[t._v("What it is: ")]),t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),a("p",[a("span",{staticClass:"emphasis"},[t._v("The cool thing about it: ")]),t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")])])],1)],1)],1)},P=[],S={name:"projects"},O=S,T=(s("f995"),Object(u["a"])(O,x,P,!1,null,"0061ce67",null)),A=T.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"pg-section"},[a("h3",{staticClass:"p-4"},[t._v("Projects")]),a("b-container",{staticClass:"content-container",attrs:{fluid:"sm"}},[a("b-row",[a("b-col",{staticClass:"p-0",attrs:{cols:"12"}},[a("b-embed",{attrs:{type:"video",aspect:"4by3",autoplay:"true",loop:"true",muted:"",playsinline:""}},[a("source",{attrs:{src:s("ea32"),type:"video/webm"}}),a("source",{attrs:{src:s("6b70"),type:"video/mp4"}})])],1),a("b-col",{staticClass:"project-text",attrs:{cols:"12","offset-md":"2"}},[a("h5",{staticClass:"m-0"},[t._v("RSVP App")]),a("p",[a("span",{staticClass:"emphasis"},[t._v("Tech: ")]),t._v(" Words, words, words, words")]),a("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")])])],1)],1),a("b-container",{staticClass:"content-container",attrs:{fluid:"sm"}},[a("b-row",[a("b-col",{staticClass:"p-0",attrs:{cols:"12"}},[a("b-embed",{attrs:{type:"video",aspect:"4by3",autoplay:"true",loop:"true",muted:"",playsinline:""}},[a("source",{attrs:{src:s("ea32"),type:"video/webm"}}),a("source",{attrs:{src:s("6b70"),type:"video/mp4"}})])],1),a("b-col",{staticClass:"project-text",attrs:{cols:"12","offset-md":"2"}},[a("h5",{staticClass:"m-0"},[t._v("RSVP App")]),a("p",[a("span",{staticClass:"emphasis"},[t._v("Tech: ")]),t._v(" Words, words, words, words")]),a("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")])])],1)],1),a("b-container",{staticClass:"content-container",attrs:{fluid:"sm"}},[a("b-row",[a("b-col",{staticClass:"p-0",attrs:{cols:"12"}},[a("b-embed",{attrs:{type:"video",aspect:"4by3",autoplay:"true",loop:"true",muted:"",playsinline:""}},[a("source",{attrs:{src:s("ea32"),type:"video/webm"}}),a("source",{attrs:{src:s("6b70"),type:"video/mp4"}})])],1),a("b-col",{staticClass:"project-text",attrs:{cols:"12","offset-md":"2"}},[a("h5",{staticClass:"m-0"},[t._v("RSVP App")]),a("p",[a("span",{staticClass:"emphasis"},[t._v("Tech: ")]),t._v(" Words, words, words, words")]),a("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")])])],1)],1)],1)},L=[],k={name:"projects"},V=k,N=(s("a27f"),Object(u["a"])(V,E,L,!1,null,"dae2d6c6",null)),W=N.exports;a["a"].use(h["a"]);var q=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/projects",name:"Projects",component:A},{path:"/projects2",name:"Projects2",component:W}],R=new h["a"]({mode:"history",base:"",routes:q}),D=R,$=s("2f62");a["a"].use($["a"]);var M=new $["a"].Store({state:{},mutations:{},actions:{},modules:{}}),B=s("498a"),F=s("f9bc"),H=s("0025"),I=(s("f9e3"),s("2dd8"),s("edbf")),J=s("bdc5");a["a"].use(I["a"]),a["a"].use(B["a"]),a["a"].use(J["a"]),a["a"].use(H["a"]),a["a"].use(F["a"]),a["a"].config.productionTip=!1,new a["a"]({router:D,store:M,render:function(t){return t(v)}}).$mount("#app")},"6b70":function(t,e,s){t.exports=s.p+"media/rsvp.ffeb9353.mp4"},"6ff7":function(t,e,s){t.exports=s.p+"media/rsvp-firestore-app.ca1535ce.mp4"},"85ec":function(t,e,s){},"983a":function(t,e,s){},a27f:function(t,e,s){"use strict";s("4f7c")},c3e7:function(t,e,s){t.exports=s.p+"img/profile.3518da15.png"},c504:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.c0e6c3d5.png"},e262:function(t,e,s){t.exports=s.p+"media/rsvp-firestore-app.389a3dc4.webm"},ea32:function(t,e,s){t.exports=s.p+"media/rsvp.8d5e373b.webm"},f995:function(t,e,s){"use strict";s("983a")}});
//# sourceMappingURL=app.557b9eeb.js.map