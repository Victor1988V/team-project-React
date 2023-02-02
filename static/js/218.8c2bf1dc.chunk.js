"use strict";(self.webpackChunkteam_project_react_kapusta=self.webpackChunkteam_project_react_kapusta||[]).push([[218],{909:function(n,e,t){t.d(e,{Z:function(){return F}});var i,r,a,o,d,s=t(9439),c=t(2791),l=t(9434),p=t(1042),x=t(3707),u=t(6351),f=t(3449),h=t(4164),g=t(168),m=t(6444),v=m.ZP.div(i||(i=(0,g.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]))),b=m.ZP.div(r||(r=(0,g.Z)(["\n  position: fixed;\n  top: 250px;\n  left: 50%;\n  transform: translateX(-50%);\n  max-width: 280px;\n  max-height: 163px;\n  width: 100%;\n  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);\n  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n  border-radius: 30px;\n  @media screen and (min-width: 768px) {\n    max-width: 288px;\n    top: 160px;\n  }\n  @media screen and (min-width: 1280px) {\n    max-width: 288px;\n    top: 160px;\n    left: 52%;\n  }\n  &:before {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: -9%;\n    left: 20%;\n    border-left: 16px solid transparent;\n    border-right: 16px solid transparent;\n    border-bottom: 16px solid #1d346a;\n  }\n"]))),w=m.ZP.h2(a||(a=(0,g.Z)(["\n  padding-top: 40px;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.43;\n  margin-bottom: 20px;\n  color: #ffffff;\n  @media screen and (min-width: 768px) {\n    padding-left: 29px;\n    padding-right: 29px;\n  }\n"]))),Z=m.ZP.p(o||(o=(0,g.Z)(["\n  padding-bottom: 49px;\n  padding-left: 24px;\n  padding-right: 24px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.33;\n  color: #ffffff;\n  @media screen and (min-width: 768px) {\n    padding-left: 29px;\n    padding-right: 29px;\n  }\n"]))),j=t(184),y=document.querySelector("#modal-root"),k=document.querySelector("body"),P=function(){var n=(0,c.useState)(!0),e=(0,s.Z)(n,2),t=e[0],i=e[1];return(0,c.useEffect)((function(){return k.classList.add("no-scroll"),function(){return k.classList.remove("no-scroll")}}),[]),(0,h.createPortal)(t&&(0,j.jsx)(v,{onClick:function(n){n.currentTarget===n.target&&(i(!1),k.classList.remove("no-scroll"))},children:(0,j.jsxs)(b,{children:[(0,j.jsx)(w,{children:"Hello! To get started, enter the current balance of your account!"}),(0,j.jsx)(Z,{children:"You can't spend money until you have it :)"})]})}),y)},C=m.ZP.form(d||(d=(0,g.Z)(["\n  margin: 0 auto 50px;\n  padding: 0 20px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    gap: 20px;\n    align-items: baseline;\n    margin: 0;\n  }\n  @media screen and (min-width: 768px) {\n    margin: 0 auto;\n  }\n  .title {\n    color: rgba(82, 85, 95, 0.7);\n    margin-bottom: 8px;\n    font-size: 12px;\n    line-height: calc(14 / 12);\n    font-weight: 500;\n    text-align: center;\n  }\n  .inputTag {\n    font-weight: 700;\n    width: 140px;\n    padding: 12px 0px;\n    color: #52555f;\n    text-align: center;\n    border: 2px solid white;\n    border-radius: 22px 0 0 22px;\n    outline: none;\n    ::-webkit-outer-spin-button,\n    ::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    :focus {\n      background-color: #fff;\n    }\n    &::placeholder {\n      color: #000;\n      letter-spacing: 0.02em;\n      font-weight: 700;\n      font-size: 12px;\n      line-height: 1.17;\n    }\n    @media screen and (min-width: 768px) {\n      width: 125px;\n      padding: 12px 0px;\n      border-radius: 16px;\n    }\n  }\n  .btn {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12px;\n\n    width: 140px;\n    padding: 12px 18px;\n    color: rgba(82, 85, 95, 0.7);\n    text-align: left;\n    text-transform: uppercase;\n    border: 2px solid white;\n    border-left: none;\n    border-radius: 0 22px 22px 0;\n    outline: none;\n    :hover,\n    :focus {\n      color: white;\n      background-color: #ff751d;\n      border-color: #ff751d;\n    }\n    @media screen and (min-width: 768px) {\n      width: 125px;\n      padding: 12px 6px;\n      border-radius: 16px;\n      text-align: center;\n      border-left: 2px solid white;\n    }\n  }\n"]))),F=function(){var n=(0,l.v9)(u.Qb),e=(0,l.v9)(u.p9),t=(0,l.v9)(u.QM),i=(0,l.v9)(u.xU),r=(0,c.useState)(0),a=(0,s.Z)(r,2),o=a[0],d=a[1],h=(0,l.I0)(),g=(0,c.useState)(!1),m=(0,s.Z)(g,2),v=m[0],b=m[1],w=(0,c.useRef)();return(0,c.useEffect)((function(){t&&d(t)}),[t]),(0,c.useEffect)((function(){n&&(h((0,x.fp)()),d(e))}),[h,n,e]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(C,{onSubmit:function(n){n.preventDefault(),d(n.target.balance.value)},ref:w,children:[(0,j.jsx)("h2",{className:"title",children:"Balance:"}),(0,j.jsx)("input",{onChange:function(n){d(n.target.value)},className:"inputTag",type:"number",name:"balance",title:"Please, enter your balance",pattern:"[0-9, .UAH]*",placeholder:"".concat(o,".00 UAH"),required:!0}),(0,j.jsx)("button",{type:"submit",className:"btn",onClick:function(){b(!0)},children:"Confirm"})]}),!0===i&&!e&&(0,j.jsx)(P,{}),v&&(0,j.jsx)(f.Z,{changeBalance:"true",closeModal:function(){b(!1)},dispatch:function(){h((0,p.Fg)(o)),w.current.reset()},text:"SURE",balance:o,children:"Are you sure?"})]})}},2218:function(n,e,t){t.r(e),t.d(e,{default:function(){return In}});var i,r,a,o,d,s=t(2791),c=t(9439),l=t(9434),p=t(6351),x=t(4190),u=t(4904),f=t(168),h=t(6444),g=t(6399),m=h.ZP.ul(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0%;\n  padding: 0;\n  &.incomeList {\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),v=h.ZP.li(r||(r=(0,f.Z)(["\n  flex-grow: 1;\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n\n  align-items: center;\n  width: calc((100% - 20px) / 3);\n  margin: 0%;\n  padding: 20px 0;\n  gap: 5px;\n  border-bottom: 1px solid black;\n\n  &.active {\n    fill: #ff751d;\n  }\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    fill: #ff751d;\n  }\n\n  @media screen and (min-width: 768px) {\n    border: none;\n    width: calc((100% - 64px) / 6);\n  }\n  &.income {\n    max-width: 90px;\n    flex-grow: 0;\n  }\n"]))),b=h.ZP.li(a||(a=(0,f.Z)(["\n  flex-grow: 1;\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: calc((100% - 20px) / 3);\n  margin: 0%;\n  padding: 20px 0;\n  gap: 5px;\n  border-bottom: 1px solid black;\n\n  &.active {\n    fill: #ff751d;\n  }\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    fill: #ff751d;\n  }\n\n  @media screen and (min-width: 768px) {\n    border: none;\n    width: calc((100% - 64px) / 6);\n  }\n\n  max-width: 90px;\n  flex-grow: 0;\n"]))),w=h.ZP.svg(o||(o=(0,f.Z)(["\n  position: relative;\n"]))),Z=(0,h.ZP)(g.HandySvg)(d||(d=(0,f.Z)(["\n  position: absolute;\n  top: 100px;\n  width: 59px;\n  height: 46px;\n"]))),j=t(3659);var y=t.p+"static/media/bgcForSvg.9948a09e481b3d692e82a7a76990676d.svg";var k,P,C=t.p+"static/media/orangeBgc.f69281f95d47540c19ff50c7cc25e3ce.svg",F=t(184),S=function(n){var e,t=n.onChange,i=(0,l.I0)(),r=(0,s.useState)({}),a=(0,c.Z)(r,2),o=a[0],d=a[1],f=(0,s.useState)(""),h=(0,c.Z)(f,2),g=h[0],k=h[1],P=(0,l.v9)(p.jG),S=[],z=(0,s.useMemo)((function(){var n,e;return null!==(n=null===P||void 0===P||null===(e=P.expenses)||void 0===e?void 0:e.expensesData)&&void 0!==n?n:{}}),[P]),A=(0,s.useMemo)((function(){var n,e;return null!==(n=null===P||void 0===P||null===(e=P.incomes)||void 0===e?void 0:e.incomesData)&&void 0!==n?n:{}}),[P]);(0,s.useEffect)((function(){"expenses"===t?(d(null!==z&&void 0!==z?z:{}),k("")):(d(null!==A&&void 0!==A?A:{}),k(""))}),[t,z,A,k]);var D=function(n){k(n.currentTarget.id);var e=S.filter((function(e){return e[0].replace(/\s+/g,"")===n.currentTarget.id}));i((0,x.Vd)(e))},E=null!==(e=Object.entries(o))&&void 0!==e?e:[];return(0,F.jsx)("div",{children:(0,F.jsx)(m,{className:"income"===t?"incomeList":"",children:E.map((function(n){var e=n[0].replace(/\s+/g,"");return S.push(n),"expenses"===t?(0,F.jsxs)(v,{id:e,onClick:D,className:e===g?"active":"",children:[(0,F.jsxs)("p",{children:[n[1].total,".00"]}),(0,F.jsxs)(w,{width:"56",height:"56",children:[(0,F.jsx)(Z,{src:e===g?C:y,width:"59",height:"46",viewBox:"0 0 54 47","background-position":"center",className:e===g?"active":""}),(0,F.jsx)("use",{href:"".concat(j.Z,"#").concat(e)})]}),(0,F.jsx)("p",{children:(0,u.z)(n[0]).toUpperCase()})]},e):"income"===t?(0,F.jsxs)(b,{id:e,onClick:D,className:e===g?"active":"",children:[(0,F.jsxs)("p",{children:[n[1].total,".00"]}),(0,F.jsxs)(w,{width:"56",height:"56",className:e===g?"active":"",children:[(0,F.jsx)(Z,{src:e===g?C:y,width:"59",height:"46",viewBox:"0 0 54 47","background-position":"center",className:e===g?"active":""}),(0,F.jsx)("use",{href:"".concat(j.Z,"#").concat(e)})]}),(0,F.jsx)("p",{children:(0,u.z)(n[0]).toUpperCase()})]},e):(0,F.jsx)(F.Fragment,{})}))})})},z=h.ZP.div(k||(k=(0,f.Z)(["\nmargin-top: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),A=h.ZP.button(P||(P=(0,f.Z)(["\n  background-color: transparent;\n  border: transparent;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),D=function(n){var e=n.onButtonClick,t=n.children,i=function(n){var t=n.currentTarget.name;e(t)};return(0,F.jsxs)(z,{children:[(0,F.jsx)(A,{name:"decrement",onClick:i,children:(0,F.jsx)("svg",{width:"6",height:"12",children:(0,F.jsx)("use",{href:"".concat(j.Z,"#icon-prev")})})}),t,(0,F.jsx)(A,{name:"increment",onClick:i,children:(0,F.jsx)("svg",{width:"6",height:"12",children:(0,F.jsx)("use",{href:"".concat(j.Z,"#icon-next")})})})]})},E=t(3433),O=t(3077),B=t(3644),L=t(1213);function N(n,e,t){return"x"===t?{labels:n.map((function(n){return n})),datasets:[{label:"awd",data:e.map((function(n){return n})),backgroundColor:["#FF751D","#FFDAC0","#FFDAC0"],borderRadius:10,borderSkipped:"start",datalabels:{color:"#52555F",anchor:"end",align:"top",font:{size:10},formatter:function(n,e){return void 0===n||0===n?"":"".concat(n," UAH")}}}]}:"y"===t?{labels:n.map((function(n){return n})),datasets:[{label:"awd",data:e.map((function(n){return n})),backgroundColor:["#FF751D","#FFDAC0","#FFDAC0"],borderRadius:10,borderSkipped:"start",datalabels:{color:"#52555F",anchor:"end",align:"right",font:{size:10},formatter:function(n,e){return void 0===n||0===n?"":"".concat(n," UAH ")}}}]}:void 0}function U(n){return"x"===n?{maintainAspectRatio:!1,indexAxis:"x",barPercentage:.6,animations:{y:{easing:"easeInOutElastic",from:function(n){if("data"===n.type&&"default"===n.mode&&!n.dropped)return n.dropped=!0,0}}},responsive:!0,plugins:{legend:{display:!1}},scales:{x:{border:{display:!1},beginAtZero:!0,ticks:{display:!0,padding:4},grid:{display:!1,drawOnChartArea:!1}},y:{grace:"20%",border:{display:!1},beginAtZero:!0,ticks:{display:!1,count:11},grid:{lineWidth:2,color:function(n){if(9!==n.index&&10!==n.index)return"#F5F6FB"}}}}}:"y"===n?{responsive:!0,maintainAspectRatio:!1,indexAxis:"y",barPercentage:.1,animations:{y:{easing:"easeInOutElastic",from:function(n){if("data"===n.type&&"default"===n.mode&&!n.dropped)return n.dropped=!0,0}}},plugins:{legend:{display:!1}},scales:{x:{grace:"100%",border:{display:!1},beginAtZero:!0,ticks:{display:!1,padding:4},grid:{display:!1,drawOnChartArea:!1}},y:{height:400,grace:"20%",border:{display:!1},beginAtZero:!0,ticks:{font:{size:10},display:!0,mirror:!0,labelOffset:-15,count:11},grid:{display:!1,lineWidth:2,color:function(n){if(9!==n.index&&10!==n.index)return"#F5F6FB"}}}}}:void 0}var H,R,M=t(4942);function T(n){var e=Object.keys(n).sort((function(e,t){return n[t].total-n[e].total})).map((function(e){return(0,M.Z)({},e,n[e])})),t=[],i=[];return e.map((function(n){var e=Object.keys(n);t.push(e[0]);var r=Object.values(n);return i.push(r[0].total),""})),{x:t.map((function(n){return(0,u.z)(n)})),y:i}}var I=h.ZP.div(H||(H=(0,f.Z)(["\n  padding-top: 35px;\n  padding-bottom: 52px;\n  @media screen and (min-width: 768px) {\n    padding: 30px 0 80px 0;\n  }\n  @media screen and (min-width: 1280px) {\n    padding: 30px 0 85px 0;\n  }\n"]))),_=h.ZP.div(R||(R=(0,f.Z)(["\n  position: relative;\n  background-color: #fff;\n  @media screen and (min-width: 768px) {\n    border-radius: 30px;\n    height: 422px;\n    padding: 20px 30px;\n    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n  }\n  @media screen and (min-width: 1280px) {\n    padding: 20px 130px;\n  }\n"])));B.kL.register.apply(B.kL,(0,E.Z)(B.zX)),B.kL.register(L.Z);var V,q,J,W,Q,G,X,Y,$,K,nn,en,tn,rn,an,on,dn,sn,cn,ln,pn=function(n){var e,t,i=n.onChange,r=(0,s.useState)({datasets:[]}),a=(0,c.Z)(r,2),o=a[0],d=a[1],x=(0,s.useState)({}),u=(0,c.Z)(x,2),f=u[0],h=u[1],g=(0,s.useState)(!1),m=(0,c.Z)(g,2),v=m[0],b=m[1],w=(0,s.useState)(""),Z=(0,c.Z)(w,2),j=Z[0],y=Z[1],k=(0,s.useState)(""),P=(0,c.Z)(k,2),C=P[0],S=P[1],z=(0,s.useState)("income"),A=(0,c.Z)(z,2),D=A[0],E=A[1],B=(0,l.v9)(p.jG),L=(0,l.v9)(p._n),H=(0,s.useRef)(),R=(0,s.useRef)(null),V=(0,s.useRef)(),q=(0,l.v9)(p.rH);return(0,s.useEffect)((function(){var n=function(n){S(getComputedStyle(null===V||void 0===V?void 0:V.current).width),"704px"===getComputedStyle(null===V||void 0===V?void 0:V.current).width&&"x"!==j&&(y("x"),h(U("x"))),"280px"===getComputedStyle(null===V||void 0===V?void 0:V.current).width&&"y"!==j&&(y("y"),h(U("y")))};return window.addEventListener("resize",n),""===j&&window.innerWidth>=768?y("x"):""===j&&window.innerWidth<768&&y("y"),function(){return window.removeEventListener("resize",n)}}),[H,j]),(0,s.useEffect)((function(){if(D!==i&&B!==[]||!B||B!==[])if("expenses"===i){var n,e=null===B||void 0===B||null===(n=B.expenses)||void 0===n?void 0:n.expensesData;if(e&&""!==j){var t=T(e);d(N(t.x,t.y,j)),h(U(j)),E(i),b(!1)}}else if("income"===i){var r,a=null===B||void 0===B||null===(r=B.incomes)||void 0===r?void 0:r.incomesData;if(a){var o=T(a);d(N(o.x,o.y,j)),h(U(j)),E(i),b(!1)}}}),[i,null===B||void 0===B||null===(e=B.expenses)||void 0===e?void 0:e.expensesData,null===B||void 0===B||null===(t=B.incomes)||void 0===t?void 0:t.incomesData,L,j,B,D,q]),(0,s.useEffect)((function(){if(!(L.length<=0&&v)&&L.length>0){var n=function(n){var e;n[0].map((function(n){return e=Object.keys(n).sort((function(e,t){return n[t]-n[e]})).map((function(e){return(0,M.Z)({},e,n[e])}))}));var t=[],i=[];return e.map((function(n){var e=Object.values(n);i.push(e[0]);var r=Object.keys(n);return t.push(r[0]),""})),t.shift(),i.shift(),{x:t,y:i}}(L);if((null===o||void 0===o?void 0:o.datasets[0].data[0])===n.y[0]||(null===o||void 0===o?void 0:o.labels[0])===(null===n||void 0===n?void 0:n.x[0]))return;b(!0),h(U(j)),d(N(n.x,n.y,j))}}),[L,v,null===o||void 0===o?void 0:o.datasets,null===o||void 0===o?void 0:o.labels,j]),(0,s.useEffect)((function(){var n=R.current;"y"===j&&n.resize(280,480)}),[o,C,j]),(0,F.jsx)(I,{ref:V,children:(0,F.jsx)(_,{ref:H,children:(0,F.jsx)(O.$Q,{ref:R,id:"my-chart",style:{backgroundColor:"white",width:"100%",height:"100%"},data:o,options:f})})})},xn=h.ZP.ul(V||(V=(0,f.Z)(["\n  display: flex;\n  /* margin-bottom: 30px; */\n  border: 1px solid transparent;\n  border-radius: 20px;\n  background-color: var(--primary-bg-color);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]))),un=h.ZP.li(q||(q=(0,f.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  gap: 5px;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 10px 25px 10px;\n  &:nth-child(2n)::before {\n    content: '';\n    position: absolute;\n    border-left: 1px solid;\n    left: 0px;\n    bottom: 5px;\n    z-index: 1;\n    height: 90%;\n    color: #e0e5eb;\n    @media screen and (min-width: 768px) {\n      height: 80%;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    padding: 16px 0;\n    flex-direction: row;\n    &:first-child {\n      padding-right: 20px;\n      justify-content: flex-end;\n    }\n    &:last-child {\n      padding-left: 20px;\n      justify-content: flex-start;\n    }\n  }\n"]))),fn=h.ZP.p(J||(J=(0,f.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  color: #52555f;\n"]))),hn=h.ZP.span(W||(W=(0,f.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  color: #e53935;\n"]))),gn=h.ZP.span(Q||(Q=(0,f.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  color: #407946;\n"]))),mn=h.ZP.div(G||(G=(0,f.Z)(["\n  padding-top: 30px;\n  @media screen and (min-width: 768px) {\n    padding: 20px 40px;\n    margin-top: 32px;\n    border-radius: 30px;\n    background-color: #fff;\n  }\n  @media screen and (min-width: 1280px) {\n    padding: 20px 205px;\n  }\n"]))),vn=h.ZP.div(X||(X=(0,f.Z)(["\n  margin: 0 auto;\n  align-items: center;\n  display: flex;\n\n  width: 130px;\n"]))),bn=h.ZP.p(Y||(Y=(0,f.Z)(["\n  width: 120px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: #000000;\n"]))),wn=function(){var n=(0,l.I0)(),e=(0,l.v9)(p.PS),t=(0,l.v9)(p.jq),i=(0,s.useState)("expenses"),r=(0,c.Z)(i,2),a=r[0],o=r[1];return(0,F.jsxs)("div",{children:[(0,F.jsxs)(xn,{children:[(0,F.jsxs)(un,{children:[(0,F.jsx)(fn,{children:"Expenses:"}),(0,F.jsxs)(hn,{children:["- ",null!==t&&void 0!==t?t:0,".00"]})]}),(0,F.jsxs)(un,{children:[(0,F.jsx)(fn,{children:"Income:"}),(0,F.jsxs)(gn,{children:["+ ",null!==e&&void 0!==e?e:0,".00"]})]})]}),(0,F.jsxs)(mn,{children:[(0,F.jsx)(vn,{className:"Privet",children:(0,F.jsx)(D,{onButtonClick:function(){if("expenses"===a)return o("income"),void n((0,x.Vd)([]));o("expenses"),n((0,x.Vd)([]))},children:(0,F.jsx)(bn,{children:a})})}),(0,F.jsx)(S,{onChange:a})]}),(0,F.jsx)(pn,{onChange:a})]})},Zn=t(3049),jn=new Date,yn=["January","February","March","April","May","June","July","August","September","October","November","December"],kn=function(){return jn.getMonth()},Pn=t(1042),Cn=h.ZP.div($||($=(0,f.Z)(["\n  padding-top: 16px;\n  text-align: center;\n  position: relative;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 0;\n  }\n"]))),Fn=h.ZP.button(K||(K=(0,f.Z)(["\n  width: 140px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  padding: 0 5px;\n  border: none;\n  color: #000;\n"]))),Sn=h.ZP.p(nn||(nn=(0,f.Z)(["\n  color: rgba(82, 85, 95, 0.7);\n"]))),zn=function(){var n=(0,s.useState)(0),e=(0,c.Z)(n,2),t=e[0],i=e[1],r=(0,s.useState)(""),a=(0,c.Z)(r,2),o=a[0],d=a[1],p=(0,s.useState)(""),u=(0,c.Z)(p,2),f=u[0],h=u[1],g=(0,l.I0)();(0,s.useEffect)((function(){i(kn()),d(yn[kn()]),h(jn.getFullYear())}),[]),(0,s.useEffect)((function(){d(yn[t]);var n="";n=t+1<10?"0"+(t+1):t+1;var e="".concat(f,"-").concat(n);"-01"!==e&&g((0,Pn.JL)(e)),g((0,x.Lv)("".concat(f,"-").concat(n)))}),[t,f,g]);return(0,F.jsxs)(Cn,{children:[(0,F.jsx)(Sn,{children:"Current period:"}),(0,F.jsx)(D,{onButtonClick:function(n){switch(n){case"decrement":g((0,x.Vd)([])),i(t-1),0===t&&(i(11),h(f-1));break;case"increment":g((0,x.Vd)([])),i(t+1),11===t&&(i(0),h(f+1));break;default:return}},children:(0,F.jsxs)(Fn,{children:[o," ",f]})})]})},An=t(1087),Dn=(0,h.ZP)(An.rU)(en||(en=(0,f.Z)(["\n  background-color: transparent;\n  border: transparent;\n  padding: 0%;\n\n  display: flex;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    width: calc(100% / 3);\n    padding-top: 0;\n  }\n"]))),En=(h.ZP.button(tn||(tn=(0,f.Z)(["\n  @media screen and (min-width: 320px) {\n    display: none;\n  }\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n  @media screen and (min-width: 1280px) {\n    display: block;\n    font-size: 12px;\n    line-height: 1.16;\n    letter-spacing: 0.02em;\n    text-transform: uppercase;\n\n    color: rgba(82, 85, 95, 0.7);\n    padding: 12px 30px;\n    border: 2px solid white;\n    border-radius: 16px;\n    :hover,\n    :focus {\n      color: white;\n      background-color: #ff751d;\n      border-color: #ff751d;\n  }\n  }\n"]))),h.ZP.span(rn||(rn=(0,f.Z)(["\n  color: rgba(82, 85, 95, 0.7);\n  /* @media screen and (min-width: 768px) { */\n  @media screen and (min-width: 320px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-left: 15px;\n    display: block;\n  }\n"])))),On=h.ZP.div(an||(an=(0,f.Z)(["\n  padding-top: 16px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    padding-top: 40px;\n    padding-bottom: 32px;\n  }\n"]))),Bn=h.ZP.div(on||(on=(0,f.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: row-reverse;\n    width: calc((100% / 3) * 2);\n    justify-content: space-between;\n    align-items: center;\n  }\n"]))),Ln=h.ZP.div(dn||(dn=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n  }\n"]))),Nn=h.ZP.p(sn||(sn=(0,f.Z)(["\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.16;\n  align-items: center;\n  text-align: center;\n  ","\n  margin-bottom: 8px;\n  color: rgba(82, 85, 95, 0.7);\n  padding-top: 32px;\n  @media screen and (min-width: 768px) {\n    padding-top: 0;\n    margin: 0;\n    padding-left: 33px;\n  }\n  @media screen and (min-width: 768px) {\n    padding-left: 15px;\n  }\n"])),""),Un=h.ZP.p(cn||(cn=(0,f.Z)(["\n  padding: 15px 29px;\n  border: 2px solid white;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.16;\n  text-align: center;\n  ","\n  text-transform: uppercase;\n  color: #000000;\n  width: 183px;\n  margin-bottom: 32px;\n  outline: none;\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  :focus {\n    background-color: #fff;\n  }\n  &::placeholder {\n    color: #000;\n    letter-spacing: 0.02em;\n    font-weight: 700;\n    font-size: 12px;\n    line-height: 1.17;\n  }\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0;\n    padding: 12px 0;\n    width: 125px;\n    border-radius: 16px;\n  }\n"])),""),Hn=t(7689),Rn=t(909),Mn=function(){var n,e=(0,Zn.a)(),t=e.isMobile,i=e.isTablet,r=e.isDesktop,a=(0,Hn.s0)(),o=(null===(n=(0,Hn.TH)().state)||void 0===n?void 0:n.from)||"/",d=(0,l.v9)(p.p9);return(0,F.jsxs)(On,{children:[(0,F.jsxs)(Dn,{to:function(){return a(o)},children:[(0,F.jsx)("svg",{width:"24",height:"24",children:(0,F.jsx)("use",{href:"".concat(j.Z,"#icon-back")})}),(0,F.jsx)(En,{children:"Main page"})]}),(0,F.jsxs)(Bn,{children:[(0,F.jsx)(zn,{}),(0,F.jsxs)(Ln,{children:[t&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Nn,{children:"Balance:"}),(0,F.jsxs)(Un,{children:[null!==d&&void 0!==d?d:0,".00 UAH"]})]}),i&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Nn,{children:"Balance:"}),(0,F.jsxs)(Un,{children:[null!==d&&void 0!==d?d:0,".00 UAH"]})]}),r&&(0,F.jsx)(Rn.Z,{})]})]})]})},Tn=h.ZP.div(ln||(ln=(0,f.Z)(["\n  ","\n  padding: 0 20px;\n  @media screen and (min-width: 768px) {\n    /* margin: 0 32px; */\n    padding: 0 32px;\n    ","\n  }\n  @media screen and (min-width: 1280px) {\n    padding: 0 123px;\n    ","\n  }\n"])),"","","");function In(){return(0,F.jsxs)(Tn,{children:[(0,F.jsx)(Mn,{}),(0,F.jsx)(wn,{})]})}}}]);
//# sourceMappingURL=218.8c2bf1dc.chunk.js.map