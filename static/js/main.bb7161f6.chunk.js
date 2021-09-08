(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var r,c,a,o,s,i=n(1),u=n.n(i),l=n(24),d=n.n(l),b=n(7),j=n(5),p=n.n(j),m=n(8),x=n(6),f=n(3),O=n(4),h=O.b.button(r||(r=Object(f.a)(["\n  padding: ",";\n  margin-top: 10px;\n\n  outline: none;\n  cursor: pointer;\n  border: none;\n\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.accountControl?"10px 35px":"3px 35px"}),(function(e){var t=e.increment,n=e.decrement,r=e.accountControl;return t?"#1A9018":n?"#F1F1F1":r?"#186dfc":"transparent"}),(function(e){var t=e.increment,n=e.decrement,r=e.accountControl;return t?"#fff":n?"#000":r?"#fff":"#000"})),g=n(0),v=function(e){return Object(g.jsx)(h,Object(b.a)({},e))},w=O.b.div(c||(c=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  .card {\n    max-width: 200px;\n    padding: 15px;\n\n    box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.8);\n  }\n\n  img {\n    width: 100%;\n  }\n\n  .card-body {\n    text-align: center;\n    text-transform: uppercase;\n    font-family: 'Courier New', Courier, monospace;\n  }\n  .card-buttons {\n    display: flex;\n    justify-content: center;\n    gap: 4px;\n  }\n"]))),k=function(e){var t=e.increment,n=e.decrement,r=e.teams;return Object(g.jsx)(w,{children:r.length<1?Object(g.jsx)("p",{children:"Loading..."}):null===r||void 0===r?void 0:r.sort((function(e,t){return t.scores.score-e.scores.score})).map((function(e){return Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("img",{src:e.img,alt:""}),Object(g.jsx)("div",{className:"card-body",children:Object(g.jsxs)("h3",{children:["Score: ",e.scores.score]})}),Object(g.jsxs)("div",{className:"card-buttons",children:[Object(g.jsx)(v,{"data-action":"increment",onClick:function(n){return t(n,e.scores._id)},increment:!0,children:"+"}),Object(g.jsx)(v,{"data-action":"decrement",onClick:function(t){return n(t,e.scores._id)},decrement:!0,children:"-"})]})]},e._id)}))})},y=O.b.main(a||(a=Object(f.a)(["\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 40px;\n\n  .control {\n    margin-bottom: 50px;\n  }\n"]))),S=n(9),C=n.n(S),N=function(e){var t=e.children;return Object(g.jsx)("main",{children:t})},F=O.b.form(o||(o=Object(f.a)(["\n  padding: 20px;\n  box-shadow: 0 0 10px 3px rgba(40, 40, 40, 0.2);\n  max-width: fit-content;\n  margin: 20px auto;\n\n  .form-control {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n\n    label {\n      margin-bottom: 5px;\n    }\n\n    input {\n      width: fit-content;\n      padding: 6px 15px;\n      outline: none;\n      border: none;\n      background-color: #f4f4f4;\n      box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.5);\n    }\n    input[type='submit'] {\n      background-color: #186dfc;\n      color: white;\n      cursor: pointer;\n    }\n  }\n"]))),P=function(e){return Object(g.jsx)(F,Object(b.a)({},e))},U=function(){var e=Object(i.useState)(""),t=Object(x.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(""),a=Object(x.a)(c,2),o=a[0],s=a[1],u=Object(i.useState)(""),l=Object(x.a)(u,2),d=l[0],j=l[1],f=Object(i.useState)(""),O=Object(x.a)(f,2),h=O[0],v=O[1],w=Object(i.useState)(""),k=Object(x.a)(w,2),y=k[0],S=k[1],N=Object(i.useContext)(I).setUser,F=function(){var e=Object(m.a)(p.a.mark((function e(t){var r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n&&o&&d){e.next=3;break}return e.abrupt("return");case 3:if(o!==d){e.next=16;break}return e.prev=4,r={username:n,password:o},e.next=8,C.a.post("https://react-testcao.herokuapp.com/register",Object(b.a)({},r));case 8:c=e.sent,localStorage.setItem("user",JSON.stringify(c.data.user)),N(c.data.user),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),h&&y){e.next=3;break}return e.abrupt("return");case 3:return n={username:h,password:y},e.next=6,C.a.post("https://react-testcao.herokuapp.com/login",Object(b.a)({},n));case 6:r=e.sent,localStorage.setItem("user",JSON.stringify(r.data.user)),N(r.data.user);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("main",{children:[Object(g.jsxs)(P,{onSubmit:U,children:[Object(g.jsxs)("div",{className:"form-control",children:[Object(g.jsx)("label",{htmlFor:"loginUsername",children:"Username"}),Object(g.jsx)("input",{type:"text",id:"loginUsername",value:h,onChange:function(e){return v(e.target.value)}})]}),Object(g.jsxs)("div",{className:"form-control",children:[Object(g.jsx)("label",{htmlFor:"loginPassword",children:"Password"}),Object(g.jsx)("input",{type:"password",id:"loginPassword",value:y,onChange:function(e){return S(e.target.value)}})]}),Object(g.jsx)("div",{className:"form-control",children:Object(g.jsx)("input",{type:"submit",value:"Login"})})]}),Object(g.jsxs)(P,{onSubmit:F,children:[Object(g.jsxs)("div",{className:"form-control",children:[Object(g.jsx)("label",{htmlFor:"username",children:"Username"}),Object(g.jsx)("input",{type:"text",id:"username",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(g.jsxs)("div",{className:"form-control",children:[Object(g.jsx)("label",{htmlFor:"password",children:"Password"}),Object(g.jsx)("input",{type:"password",id:"password",value:o,onChange:function(e){return s(e.target.value)}})]}),Object(g.jsxs)("div",{className:"form-control",children:[Object(g.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(g.jsx)("input",{type:"password",id:"confirmPassword",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(g.jsx)("div",{className:"form-control",children:Object(g.jsx)("input",{type:"submit",value:"Register"})})]})]})},I=u.a.createContext(),J="https://react-testcao.herokuapp.com",_=function(){var e=Object(i.useState)([]),t=Object(x.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(""),a=Object(x.a)(c,2),o=a[0],s=a[1],u=Object(i.useState)(!0),l=Object(x.a)(u,2),d=l[0],j=l[1];Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));e&&(s(e),d&&Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(J,"/teams"));case 3:t=e.sent,r(t.data),j(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))())}),[o]);var f=function(){var e=Object(m.a)(p.a.mark((function e(t,n,c){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.put("".concat(J,"/team/score/").concat(t,"/").concat(o,"/").concat(c),Object(b.a)({},n));case 3:a=e.sent,r(a.data.teams),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}(),O=function(e,t){var r=n.filter((function(e){return e.scores._id===t})),c=r[0].scores.clicked;if(c||"increment"!==e.target.dataset.action){if(c&&"decrement"===e.target.dataset.action){var a={score:r[0].scores.score-1,clicked:!1};if(a<0)return;f(t,a,"decrement")}}else{console.log(r);var o={score:r[0].scores.score+1,clicked:!0};f(t,o,"increment")}};return o?Object(g.jsx)(N,{children:Object(g.jsxs)(y,{children:[Object(g.jsx)("div",{className:"control",children:Object(g.jsx)(v,{onClick:function(){localStorage.removeItem("user"),s("")},accountControl:!0,children:"Logout"})}),Object(g.jsx)(k,{teams:n,increment:O,decrement:O})]})}):Object(g.jsx)(I.Provider,{value:{setUser:s},children:Object(g.jsx)(U,{})})},L=Object(O.a)(s||(s=Object(f.a)(["\n*{\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n"])));var D=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(L,{}),Object(g.jsx)(_,{})]})};d.a.render(Object(g.jsx)(u.a.StrictMode,{children:Object(g.jsx)(D,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.bb7161f6.chunk.js.map