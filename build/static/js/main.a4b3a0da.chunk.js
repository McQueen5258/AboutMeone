(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){"use strict";var a=n(22),l=n(14),r=n(32),c=n(33),o=n(38);a.a.use(o.a).use(l.e).init({resources:{en:{translation:r},zh:{translation:c}},fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});a.a},27:function(e,t,n){},29:function(e,t,n){"use strict";var a=n(16),l=n(0),r=n.n(l),c=n(114),o=(n(24),n(2)),i=n(3),u=n(5),m=n(4),s=n(8),b=(n(27),n(11)),f=n(1),h=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null," ... ")}}]),t}(l.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(b.b,{className:"barLink",id:this.props.id,to:"/Portfolio"},this.props.text),r.a.createElement(f.a,{path:"/Portfolio",component:h}))}}]),t}(r.a.Component),d=[{href:"",id:"Home",text:"Home"},{href:"#Growth-title",id:"About",text:"About"},{href:"",id:"Portfolio",text:"Portfolio"},{href:"",id:"Contact",text:"Contact"}],p=(r.a.Component,n(39),n(53),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h1",null," Loading. . . "))}}]),t}(l.Component)),g=Object(l.lazy)(function(){return n.e(1).then(n.bind(null,110))}),O=Object(l.lazy)(function(){return n.e(2).then(n.bind(null,113))}),v=Object(l.lazy)(function(){return Promise.resolve().then(n.bind(null,6))});function j(){var e=r.a.useContext(S);e.theme,e.setTheme;return r.a.createElement("div",null,r.a.createElement(l.Suspense,{fallback:r.a.createElement(p,null)},r.a.createElement(g,{id:"basic"}),r.a.createElement(O,{className:"skills"}),r.a.createElement(v,{ThemeColor:"rgb(288, 4, 81)"})))}var k=n(6),C=(n(57),Object(l.lazy)(function(){return n.e(3).then(n.bind(null,111))}));function y(){var e=Object(c.a)(),t=Object(a.a)(e,2),n=t[0];t[1];return r.a.createElement("div",null,r.a.createElement(l.Suspense,{fallback:r.a.createElement(p,null)},r.a.createElement("div",{className:"aboutMe",style:{backgroundImage:"url(image/01151148_f90170be11.jpeg)"}},r.a.createElement("div",{className:"about-title"},r.a.createElement("h1",null,n("About Me")),r.a.createElement(C,null)),r.a.createElement("div",{className:"AboutMe-text"},r.a.createElement("p",null,n("Hello There, I'm Eric"))),r.a.createElement("div",null)),r.a.createElement(k.default,{ThemeColor:"rgb(184, 124, 94)"})))}n(64);var T=Object(l.lazy)(function(){return n.e(4).then(n.bind(null,112))});function x(){var e=Object(c.a)();e.t,e.i18n;return r.a.createElement("div",{id:"porfolioPage"},r.a.createElement(l.Suspense,{fallback:r.a.createElement(p,null)},r.a.createElement(T,null)),r.a.createElement(k.default,{ThemeColor:"rgb(57, 117, 119)"}))}n(66);var A=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(l.Suspense,{fallback:r.a.createElement(p,null)},r.a.createElement("div",{className:"contactPage",style:{backgroundImage:"url(image/WorkImg/\u6b63\u5728\u5f00\u53d1\u4e2d.png)"}})),r.a.createElement(k.default,null))}}]),t}(l.Component),I=(n(68),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"error",style:{backgroundImage:"url(image/WorkImg/404.png)"}}),r.a.createElement(k.default,{ThemeColor:"rgb(212, 219, 228)"}))}}]),t}(l.Component));n(70);function N(){var e=r.a.useContext(S),t=e.theme,n=e.setTheme;return r.a.createElement("div",{className:"theme-btn theme0btn-$(theme)",onClick:function(){return function(e,t){t("light"==e?"dark":"light")}(t,n)},style:{backgroundImage:"url(./image/themebtn/"+t+".svg)",transition:"all 1s"}})}n(72);n.d(t,"b",function(){return S});var S=Object(l.createContext)(null),H=!1;t.a=function(){var e=Object(l.useState)("light"),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(c.a)(),u=i.t,m=i.i18n;return Object(l.useEffect)(function(){H&&localStorage.setItem("lastTheme",n),H=!0},[n]),Object(l.useEffect)(function(){"null"!==localStorage.getItem("lastTheme")&&o(localStorage.getItem("lastTheme"))}),r.a.createElement(b.a,null,r.a.createElement(S.Provider,{value:{theme:n,setTheme:o}},r.a.createElement("div",{className:"".concat(n)},r.a.createElement("div",{onClick:function(){return m.changeLanguage("en"==m.language?"zh":"en")},style:{position:"fixed",top:"115px",right:"30px",zIndex:"1"}},r.a.createElement("div",{style:{backgroundImage:"url('image/translation/\u7ffb\u8bd1.svg')",backgroundSize:"100%",backgroundPosition:"center",height:"30px",width:"30px"}}),r.a.createElement("div",null)),r.a.createElement("div",{id:"bar"},r.a.createElement("div",null,r.a.createElement(b.b,{className:"barLink",to:"/"},u("Home"))),r.a.createElement("div",null,r.a.createElement(b.b,{className:"barLink",to:"/about"},u("About"))),r.a.createElement("div",null,r.a.createElement(b.b,{className:"barLink",to:"/portfolio"},u("Portfolio"))),r.a.createElement("div",null,r.a.createElement(b.b,{className:"barLink",to:"/contact"},u("Contact")))),r.a.createElement(N,{style:{position:"fixed",top:"60px",right:"10px"}}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/"},r.a.createElement(j,null)),r.a.createElement(f.a,{path:"/about"},r.a.createElement(y,null)),r.a.createElement(f.a,{path:"/portfolio"},r.a.createElement(x,null)),r.a.createElement(f.a,{path:"/contact"},r.a.createElement(A,null)),r.a.createElement(f.a,{path:"*"},r.a.createElement(I,null))))))}},32:function(e){e.exports={portfolio:"PORTFOLIO",Flowers:"Flowers",Assignment:"Assignment",CinemaTicket:"Cinema Ticket",Moments:"Moments",CarRentalWebsite:"Car rental website",KIDO_BANK:"KIDO BANK",more:"MORE",Home:"Home",About:"About",Portfolio:"Portfolio",Contact:"Contact",FormText:"In March 2019, he joined tadpole practice school. He is a student of tadpole practice school, majoring in programming.","LET'S CHAT":"LET'S CHAT","My Skills":"My Skills","About Me":"About Me","Hello There, I'm Eric":"Hello There, I'm Eric"}},33:function(e){e.exports={home:"\u9996\u9875",welcome:"\u6b22\u8fce\u6765\u9996\u9875",portfolio:"\u4f5c\u54c1\u96c6",Flowers:"\u82b1\u6735\ud83c\udf3a",Assignment:"\u5206\u914d\u8868",CinemaTicket:"\u7535\u5f71\u7968",Moments:"\u670b\u53cb\u5708",CarRentalWebsite:"\u5b9e\u52a1\u79df\u8f66\u7f51\u7ad9",KIDO_BANK:"\u874c\u86aa\u94f6\u884c",more:"\u66f4\u591a",Home:"\u4e3b\u9875",About:"\u5173\u4e8e\u6211",Portfolio:"\u4f5c\u54c1\u96c6",Contact:"\u8054\u7cfb",FormText:"2019\u5e74\u4e09\u6708\u52a0\u5165\u874c\u86aa\u5b9e\u52a1\u5b66\u5802\uff0c\u662f\u874c\u86aa\u5b9e\u52a1\u5b66\u5802\u7684\u5b66\u751f\uff0c\u5728\u5b66\u4e60\u7f16\u7a0b\u4e13\u4e1a\u3002","LET'S CHAT":"\u8054\u7cfb\u6211","My Skills":"\u6211\u7684\u6280\u80fd","About Me":"\u5173\u4e8e\u6211","Hello There, I'm Eric":"\u4f60\u597d\u5440\uff0c\u6211\u662f\u827e\u514b\u3002"}},39:function(e,t,n){},40:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(30),c=n.n(r),o=n(29);c.a.render(l.a.createElement(o.a,null),document.getElementById("root"))},53:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},6:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n(3),r=n(5),c=n(4),o=n(8),i=n(0),u=n.n(i),m=(n(55),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"footer",style:{backgroundColor:this.props.ThemeColor}},u.a.createElement("p",null,"Copyright \xa9 2020-2021"),u.a.createElement("p",null,"Eric All rights reserved."))}}]),t}(u.a.Component));t.default=m},64:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){}},[[40,12,11]]]);
//# sourceMappingURL=main.a4b3a0da.chunk.js.map