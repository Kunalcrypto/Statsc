(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(4186)}])},4186:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return d}});var r=l(5893),a=l(7294),t=l(469),n=l.n(t);function c(e){let{data:s,lowerThreshold:l,upperThreshold:a,filtered:t}=e;return(0,r.jsxs)("table",{className:"table table-hover table-sm",children:[(0,r.jsx)("thead",{className:"table-light",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",className:n().th,children:"#"}),(0,r.jsx)("th",{scope:"col",className:n().th,children:"buySellRatio"}),(0,r.jsx)("th",{scope:"col",className:n().th,children:"buyVol"}),(0,r.jsx)("th",{scope:"col",className:n().th,children:"sellVol"}),(0,r.jsx)("th",{scope:"col",className:n().th,children:"timestamp"})]})}),(0,r.jsx)("tbody",{children:s.map((e,s)=>{let{buySellRatio:n,buyVol:c,sellVol:i,timestamp:o}=e,d=n<=l,h=n>=a;if(t&&!d&&!h)return null;let m=d?"danger":h?"success":"";return(0,r.jsxs)("tr",{className:m?"table-".concat(m):"",children:[(0,r.jsx)("th",{scope:"row",children:s+1}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{className:m?"badge bg-".concat(m):"",children:n})}),(0,r.jsx)("td",{children:c}),(0,r.jsx)("td",{children:i}),(0,r.jsx)("td",{className:"small",children:"".concat(new Date(o).toLocaleTimeString().replace(":00 AM"," am").replace(":00 PM"," pm"),", ").concat(new Date(o).toLocaleDateString())})]},s)})})]})}function i(e){let{apikey:s}=e,[l,t]=(0,a.useState)(!1),[i,o]=(0,a.useState)("BTCUSDT"),[d,h]=(0,a.useState)("5m"),[m,u]=(0,a.useState)(100),[x,p]=(0,a.useState)(.8),j=(0,a.useRef)(.8),[b,N]=(0,a.useState)(1.2),v=(0,a.useRef)(1.2),[g,f]=(0,a.useState)(.5),w=(0,a.useRef)(.5),[y,T]=(0,a.useState)(0),_=(0,a.useRef)(0),S=(0,a.useRef)(null),[k,D]=(0,a.useState)(!1),[E,C]=(0,a.useState)([]),P=()=>{D(!k)},F=e=>{o(e.currentTarget.value)},O=e=>{h(e.currentTarget.value)},I=e=>{let s=Number(e.currentTarget.value);p(s),j.current=s},G=e=>{let s=Number(e.currentTarget.value);N(Number(e.currentTarget.value)),v.current=s},L=e=>{f(Number(e.currentTarget.value)),w.current=Number(e.currentTarget.value),_.current=0,T(0)},M=e=>{u(Number(e.currentTarget.value))},R=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(_.current=60*w.current,T(60*w.current)),S.current=setTimeout(()=>{let e=Math.max(_.current-1,0);0===e?(H(),T(e)):(_.current=e,T(e),R())},1e3)},U=e=>{if(!e||!e.length)return;let s=0,l=0,r=JSON.parse(JSON.stringify(e));r.forEach(e=>{let{buySellRatio:r}=e;r<=j.current?s+=1:r>=v.current&&(l+=1)}),"undefined"!=typeof document&&(document.title="".concat(i," \uD83D\uDD34").concat(s," \uD83D\uDFE2").concat(l))},H=async()=>{clearTimeout(S.current);try{t(!0);let e=await fetch("https://fapi.binance.com/futures/data/takerlongshortRatio?symbol=".concat(i,"&period=").concat(d,"&limit=").concat(m),{headers:{"X-MBX-APIKEY":s}}),l=await e.json();if(console.log(l),C(l),!l||!l.length)return;R(!0),U(l)}catch(e){console.log(e),document.write(JSON.stringify(null==e?void 0:e.message))}finally{t(!1)}},A=e=>{e.preventDefault(),H()},J=()=>{window.localStorage.removeItem("APIKEY"),window.location.reload()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("nav",{className:"navbar navbar-dark bg-dark mb-5 p-3 shadow-sm",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)("strong",{className:"navbar-brand",children:"statsb.github.io"}),(0,r.jsx)("div",{className:"d-flex",children:(0,r.jsx)("button",{className:"btn btn-outline-warning",onClick:J,children:"Logout"})})]})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm mb-5",children:(0,r.jsx)("div",{className:"card",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("h5",{className:"card-title",children:"Taker Buy/Sell Volume"}),(0,r.jsx)("h6",{className:"card-subtitle mb-4 text-muted",children:(0,r.jsx)("code",{children:"GET /futures/data/takerlongshortRatio"})}),(0,r.jsxs)("form",{onSubmit:A,children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col form-group mb-3",children:[(0,r.jsx)("label",{htmlFor:"symbol",children:"Symbol"}),(0,r.jsx)("input",{value:i,onChange:F,type:"text",className:"form-control",id:"symbol","aria-describedby":"symbolHelp",placeholder:"symbol e.g. BTCUSDT"})]}),(0,r.jsxs)("div",{className:"col form-group mb-3",children:[(0,r.jsx)("label",{htmlFor:"period",children:"Period"}),(0,r.jsxs)("select",{value:d,onChange:O,className:"form-control",id:"period",children:[(0,r.jsx)("option",{children:"1m"}),(0,r.jsx)("option",{children:"3m"}),(0,r.jsx)("option",{children:"5m"}),(0,r.jsx)("option",{children:"15m"}),(0,r.jsx)("option",{children:"30m"}),(0,r.jsx)("option",{children:"1h"}),(0,r.jsx)("option",{children:"2h"}),(0,r.jsx)("option",{children:"4h"}),(0,r.jsx)("option",{children:"6h"}),(0,r.jsx)("option",{children:"12h"}),(0,r.jsx)("option",{children:"1d"})]})]})]}),(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col form-group mb-3",children:[(0,r.jsx)("label",{htmlFor:"lowerThreshold",children:"Limit"}),(0,r.jsx)("input",{value:m,onChange:M,type:"number",className:"form-control",id:"limit","aria-describedby":"limitHelp",placeholder:"limit (30 - 500)"})]})}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col form-group mb-3",children:[(0,r.jsx)("label",{htmlFor:"lowerThreshold",children:"Lower Threshold"}),(0,r.jsx)("input",{value:x,onChange:I,type:"number",className:"form-control",id:"lowerThreshold","aria-describedby":"lowerThresholdHelp",placeholder:"lowerThreshold"})]}),(0,r.jsxs)("div",{className:"col form-group mb-3",children:[(0,r.jsx)("label",{htmlFor:"upperThreshold",children:"Upper Threshold"}),(0,r.jsx)("input",{value:b,onChange:G,type:"number",className:"form-control",id:"upperThreshold","aria-describedby":"upperThresholdHelp",placeholder:"upperThreshold"})]})]}),(0,r.jsx)("div",{className:"d-grid gap-2",children:(0,r.jsx)("button",{disabled:l,type:"submit",className:"btn btn-block btn-warning mb-2",children:"Submit"})})]})]})})}),(0,r.jsx)("div",{className:"col-sm mb-5",children:!!E.length&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col form-group mb-3",children:[(0,r.jsx)("label",{htmlFor:"gap",children:"Make requests every:"}),(0,r.jsxs)("select",{value:g,onChange:L,className:"form-control",id:"gap",children:[(0,r.jsx)("option",{value:.5,children:"30s"}),(0,r.jsx)("option",{value:1,children:"1m"}),(0,r.jsx)("option",{value:2,children:"2m"}),(0,r.jsx)("option",{value:3,children:"3m"}),(0,r.jsx)("option",{value:5,children:"5m"}),(0,r.jsx)("option",{value:15,children:"15m"}),(0,r.jsx)("option",{value:30,children:"30m"}),(0,r.jsx)("option",{value:60,children:"1h"})]})]}),(0,r.jsx)("div",{className:"col"})]}),"next request in ",(0,r.jsxs)("b",{children:["(",y,"s)"]}),":",(0,r.jsx)("div",{className:"progress mb-5",children:(0,r.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":75,"aria-valuemin":0,"aria-valuemax":100,style:{width:"".concat(Math.floor(y/(60*g)*100),"%")}})}),(0,r.jsx)("div",{className:"d-flex flex-row-reverse",children:(0,r.jsxs)("div",{className:"form-check pt-5",children:[(0,r.jsx)("input",{checked:k,onChange:P,type:"checkbox",className:n().checkbox+" form-check-input",id:"filtered"}),(0,r.jsx)("label",{className:n().biglabel+" form-check-label",htmlFor:"filtered",children:"Filtered"})]})})]})})]})}),(0,r.jsxs)("div",{className:n().relative+" container",children:[l&&(0,r.jsx)("div",{className:n().loader,children:(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("div",{className:"spinner-border",role:"status",children:(0,r.jsx)("span",{className:"sr-only"})})})}),!!E.length&&(0,r.jsx)(c,{data:E,lowerThreshold:x,upperThreshold:b,filtered:k}),!!E&&!E.length&&(0,r.jsx)("div",{className:"text-muted",children:"[No data]"})]})]})}function o(){let[e,s]=(0,a.useState)(""),[l,t]=(0,a.useState)(""),[c,i]=(0,a.useState)(!1),[o,d]=(0,a.useState)(""),h=e=>{s(e.currentTarget.value)},m=e=>{t(e.currentTarget.value)},u=async s=>{if(s.preventDefault(),d(""),i(!0),!e||!l){d("Username and Password are mandatory!"),i(!1);return}try{let s=await fetch("https://aliveapi.cyclic.app/statsblogin",{headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:l}),method:"POST"}),{success:r,error:a,key:t}=await s.json();if(r)r&&t&&(window.localStorage.setItem("APIKEY",t),window.location.reload());else{d(a+", please try again..");return}}catch(e){d((null==e?void 0:e.message)+", please try again..")}finally{i(!1)}};return(0,r.jsx)("div",{className:n().mt150+" container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-sm"}),(0,r.jsx)("div",{className:"col-sm",children:(0,r.jsxs)("form",{onSubmit:u,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),(0,r.jsx)("input",{value:e,onChange:h,type:"text",className:"form-control",id:"username","aria-describedby":"usernameHelp"})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),(0,r.jsx)("input",{value:l,onChange:m,type:"password",className:"form-control",id:"password"})]}),(0,r.jsx)("div",{className:"d-grid gap-2 mb-2",children:(0,r.jsx)("button",{type:"submit",disabled:c,className:"btn btn-warning",children:"Login"})}),!!o&&(0,r.jsx)("div",{className:"text-danger",children:o})]})}),(0,r.jsx)("div",{className:"col-sm"})]})})}function d(){let[e,s]=(0,a.useState)("PENDING"),[l,t]=(0,a.useState)("");return((0,a.useEffect)(()=>{let e=localStorage.getItem("APIKEY");e?(t(e),s("LOGGED_IN")):s("LOGGED_OUT")},[]),"PENDING"===e)?(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("div",{className:"spinner-border",role:"status",children:(0,r.jsx)("span",{className:"sr-only"})})}):"LOGGED_OUT"===e?(0,r.jsx)(o,{}):"LOGGED_IN"===e?(0,r.jsx)(i,{apikey:l}):null}},469:function(e){e.exports={relative:"Theme_relative__padMm",loader:"Theme_loader__iUKJC",checkbox:"Theme_checkbox__Dx9mp",biglabel:"Theme_biglabel__MuilI",mt150:"Theme_mt150__Pdo46",th:"Theme_th__84THv",invert:"Theme_invert___m0wY"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);