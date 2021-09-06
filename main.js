var messenger=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setup=void 0;const n={};t.setup=({html:e,styled:t,createElement:r,useRef:a})=>(n.html||(n.html=e,n.styled=t,n.createElement=r,n.useRef=a),n);var a=n;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={palette:{primary:"#F03F29",secondary:"#1EA7FD",background:"smokewhite",surface:"#F0F0F0",onPrimary:"white",onSecondary:"white",onBackground:"black",onSurface:"gray",disabledText:"lightGrey",border:"#EAEAEA"},fonts:[],font:{family:"sans-serif",size:"16px",style:"normal",weight:"400"},spacing:8,radius:12,smallRadius:4,shadow:"rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",messenger:{width:"500px",height:"600px"},message:{radius:16,smallRadius:4,shadow:"none"}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"friendlyDate",{enumerable:!0,get:function(){return a.friendlyDate}}),Object.defineProperty(t,"deepCopy",{enumerable:!0,get:function(){return o.default}});var n,a=r(17),o=(n=r(18))&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRef=t.render=t.createElement=t.html=void 0;var n=r(2),a=r(9);t.html=()=>{};t.createElement=(e,t,...r)=>{let a;e.element?(a=(0,n.deepCopy)({},e),a.props=(0,n.deepCopy)({},a.props,t)):(a={props:{}},a.element=e,t&&(a.props=t));let o=r;return 1===r.length&&Array.isArray(r[0])&&([o]=r),a.children=o.filter(e=>void 0!==e),a};const o=(e,t,r={},s)=>{if(!e)return;if("string"==typeof e){return void(t.innerText=e)}let{children:i}=e;if("string"==typeof e.element){const l=document.createElement(e.element);if(e.props&&Object.keys(e.props).forEach(t=>{const r=e.props[t],n=typeof r,a="string"===n||"number"===n||"boolean"===n;"ref"===t?r.setCurrent(l):"className"===t?l.className=r:"function"===n?"on"===t.substring(0,2)&&l.addEventListener(t.substring(2).toLowerCase(),r):a&&l.setAttribute(t,r)}),e.styled){const t={...e.defaultProps},o=r.theme||{},s=(0,n.deepCopy)(t,e.props,{theme:o});let i=(0,a.genClassRules)(e.styled,s,t);e.props.className&&(i+=" "+e.props.className),l.className=i}e.props&&e.props.dangerouslySetInnerHTML&&(l.innerHTML=e.props.dangerouslySetInnerHTML.__html),i&&i.forEach(e=>{o(e,l,r)}),s&&s.before?t.insertBefore(l,s.before):t.appendChild(l)}else if("function"==typeof e){const n=e({...e.props,children:i,styled:e.styled});o(n,t,r),i=null}else if(e.element&&"function"==typeof e.element){const n=e.element({...e.props,children:i});e.styled&&(n.styled=[...e.styled,...n.styled]),o(n,t,r),i=null}};t.render=o;t.useRef=e=>{const t={current:e,setCurrent:e=>{t.current=e}};return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);var a=async({listener:e,messages:t})=>{let r=[];t&&t.forEach(e=>{const t=(0,n.deepCopy)(e);t.created_time||(t.created_time=Date.now()),r.push(t)});return[e=>r.push((0,n.deepCopy)(e)),async()=>(0,n.deepCopy)(r),(e,t,...r)=>({from:e,text:t,...r,created_time:Date.now()}),void 0,async t=>{"#reset"===t?(e({type:"resetMessages"}),r=[]):e({type:"unknownCommand"})}]};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Interface",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"setup",{enumerable:!0,get:function(){return n.setup}}),t.default=void 0;var n=o(r(0));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}var s=async()=>{const e=await Promise.resolve().then(()=>o(r(21))),t=await Promise.resolve().then(()=>o(r(6))),n=await Promise.resolve().then(()=>o(r(38)));return{Messenger:e.default,Message:t.default,FAButton:n.default}};t.default=s},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(31))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(5))&&n.__esModule?n:{default:n};let o;var s=async()=>(o||(o=await(0,a.default)()),o);t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const[r,n]=(0,a.default)(()=>{try{const r=window.localStorage.getItem(e);return r?JSON.parse(r):t}catch(e){return t}});return[r,t=>{try{const a=t instanceof Function?t(r):t;n(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(e){}}]};var n,a=(n=r(40))&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.genClassRules=t.genStyle=void 0;const a="abcdefghijklmnopqrstuvwxyz",o=(e,t)=>{let r="";return e&&Array.isArray(e.styles)&&e.styles.forEach((n,a)=>{r+=n,e.parameters[a]&&(r+=e.parameters[a](t))}),r};t.genStyle=o;const s=(e,t)=>{const r=e;if(0===t.trim().length)return;let n=0,a=t.indexOf("@",n);for(;a>-1;){r.main+=t.substring(n,a).trim();const e=t.indexOf("@",a+1);n=-1!==e?e:t.lastIndexOf("}")+1,r.medias.push(t.substring(a,n)),a=e}r.main+=t.substring(n).trim()};t.genClassRules=(e,t,r={})=>{const i=(()=>{if(!n){const e=document.createElement("style");e.type="text/css",e.title="MainCSS",document.getElementsByTagName("head")[0].appendChild(e),n=e.sheet}return n})();let l="";return e.forEach(e=>{const n=r.selector||[...Array(5)].map(()=>a[~~(Math.random()*a.length)]).join(""),d={main:"",sub:[],medias:[]};if(((e,t,r)=>{const n=o(t,r);let a=0,i=n.indexOf("&",a);if(-1===i)s(e,n);else{for(;i>-1;)s(e,n.substring(a,i)),a=n.indexOf("}",i+2),e.sub.push(n.substring(i+1,a+1)),a+=1,i=n.indexOf("&",a);s(e,n.substring(a))}})(d,e,t),d.main&&d.main.length>0){let e=`.${n} { ${d.main} }`;i.insertRule(e),d.sub.forEach(t=>{e=`.${n}${t}`,i.insertRule(e)}),d.medias.forEach(e=>{i.insertRule(e)}),l+=n+" "}}),l.trim()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"genStyle",{enumerable:!0,get:function(){return a.genStyle}}),t.styled=void 0;var n=r(3),a=r(9);t.styled=(e,t,...r)=>(a,...o)=>{const s=e,i=(0,n.createElement)(s,t,...r);return i.styled?i.styled.unshift({styles:a,parameters:o}):i.styled=[{styles:a,parameters:o}],i}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSelector=t.default=void 0;var n,a=(n=r(8))&&n.__esModule?n:{default:n};let o;var s=function(e){const[t,r]=(0,a.default)("store",{...e});return o=t,[o,r]};t.default=s;t.useSelector=e=>e({...o})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(13)),a=r(2),o=s(r(20));function s(e){return e&&e.__esModule?e:{default:e}}var i=async(e={},t,r=document.body)=>{let{config:s}=e;const{configFile:i="./config.json"}=e;let l;if(!s&&i)try{const e=await fetch(i);s=await e.json()}catch(e){}s||(s={});const d={...s,...e};if(d.messenger||(d.messenger={}),d.dataset){if(d.dataset.src){l=[];const e=Array.isArray(d.dataset.src)?d.dataset.src:[d.dataset.src];for(const t of e)try{const e=await fetch(t),r=await e.json();let n;r.intents&&(n=(0,a.deepCopy)(l.intents,r.intents)),l=(0,a.deepCopy)(l,r),n&&(l.intents=n)}catch(e){}}else({dataset:l}=d);l&&l.intents&&(l=l.intents)}else if(d.intents)if(d.intents.src)try{const e=await fetch(d.intents.src);l=await e.json()}catch(e){}else l=d.intents;const u=l?"dialog":void 0,c=await(0,n.default)(u),[f,p,m,h,g,y]=await(0,o.default)({state:d,messaging:c,root:r,messageListener:t,dataset:l,messages:d.messages,actions:d.actions});return window.ziiircom={name:"Ziiircom",store:f,getMessages:p,createMessage:m,sendMessage:h,commands:g,handleEventMessage:y},[f,p,m,h,g,y]};t.default=i},function(e,t,r){"use strict";function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=a?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=async e=>{let t;if("dialog"===e)try{t=(await Promise.resolve().then(()=>a(r(14)))).default}catch(e){}if(!t)try{t=(await Promise.resolve().then(()=>a(r(19)))).default}catch(e){}return t};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(15)),a=r(2),o=s(r(4));function s(e){return e&&e.__esModule?e:{default:e}}var i=async({listener:e,dataset:t,messages:r,contexts:s={},options:i,actions:l})=>{const[d,u,c,,f]=await(0,o.default)({listener:e,messages:r}),p=(0,a.deepCopy)(s),[m,h]=(0,n.default)(t,p,i);return[u,c,async t=>{d(t),await e({type:"newMessage",message:(0,a.deepCopy)(t)});const r=m(t),{response:n,quick_replies:o,template:s,actions:i,userId:u}=h(r),f=[];if(n.forEach((e,t)=>{const r=c("bot",e);r.to=u,t===n.length-1&&o&&(r.quick_replies=(0,a.deepCopy)(o)),t===n.length-1&&s&&(r.template=(0,a.deepCopy)(s)),d(r),f.push((0,a.deepCopy)(r))}),await e({type:"newMessage",message:f}),i){const t=i.map(e=>{let t=e;t.type||(t=(0,a.deepCopy)(l[t.name]));const r={};return Object.keys(t.variables).forEach(e=>{r[e]=p[u][e]||t.variables[e]}),{...t,variables:r,userId:u}});await e({type:"newAction",message:t})}},async e=>("#reset"===e&&Object.keys(p).forEach(e=>{delete p[e]}),f(e))]};t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(16))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);const a=(e,t)=>{let r=e;return"*"===r&&([{value:r}]=t),r},o=e=>e.replace(/https?:\/\/\S*|\[(.*?)\]\((.*?)\)/gi,(e,t,r)=>{let n=e,a=n;t&&(a=t,n=r);let o=n.match(/\.(jpg|jpeg|gif|png|svg)$/gi)?n:void 0;return!o&&a.match(/\.(jpg|jpeg|gif|png|svg)$/gi)&&(o=a,a=a.substring(a.lastIndexOf("/")+1,a.lastIndexOf("."))),o?`<a href="${n}" target="_blank" rel="noopener noreferrer"><img src="${o}" alt="${a}" /></a>`:`<a href="${n}" target="_blank" rel="noopener noreferrer">${a}</a>`}),s=(e,t)=>!e||0===e.length||e.findIndex(e=>e.name&&t[e.name]===e.value)>-1,i=(e,t,r,n)=>{const a=[];let o,i=t;var l;return s(r,n)&&("*"===e?(a.push({type:"any",value:i,offset:0}),o=!0):e.indexOf("{{")>-1?e.replace(/{{\s*([\w.]*)\s*(=?)\s*@(any|email)\s*}}/g,(e,t,r,n,s)=>{s>0&&(i=void 0),("any"===n||"email"===n&&i&&i.match(/\b(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})\b/gi))&&(o=!0),o&&a.push({name:t,type:n,value:i,offset:s})}):(l=t,o=e.toLowerCase()===l.toLowerCase(),o&&a.push({type:"all",value:i,offset:0}))),[o,a]},l=(e,t)=>{const{intent:r}=e,{entities:n}=e;let o=t;const s=[];let i,l,d;r.set&&(o={...o,...r.set});let{output:u}=r;if(Array.isArray(u)&&u.forEach(e=>{if("condition"===e.type){let t;u=null,e.children.forEach(e=>{u&&t||e.value!==o[e.name]&&e.value||(({value:t}=e),u=e)})}}),u){let e=u;u.text&&({text:e}=u),i=u.quick_replies,l=u.template,({actions:d}=u),n.forEach(e=>{e.name&&(o[e.name]=e.value)}),Array.isArray(e)||(e=[e]),e.forEach(e=>{let t=e;t.text&&(t=t.text);const r=((e,t,r)=>{const n={};return{response:e.replace(/(<<|{{)\s*([\w.]+)\s*(=\s*(.+?)\s*)*(}}|>>)/g,(e,o,s,i,l)=>{const d=s.trim();if("<<"===o)return n[d]=a(l,r),"";i&&(n[d]=a(l,r));return n[d]||t[d]||""}),set:n}})(t,o,n);s.push(r.response),Object.keys(r.set).length&&(o={...o,...r.set});(Array.isArray(u)?u:[u]).forEach(e=>{e.set&&Object.keys(e.set).forEach(t=>{o[t]=a(e.set[t],n)})})})}return[s,o,i,l,n,d]};var d=(e,t,r={fallback:"I don't understand"})=>{let a;const d=t||{},u=({matchs:e,userId:t="user",context:a=d[t]||{}},s=o)=>{let i=(0,n.deepCopy)(a),u=0;e&&e.length>1&&e.find((e,t)=>!(!(e.intent.conditions&&e.intent.conditions.length>0)&&e.any||e.intent.topic!==i.topic)&&(u=t,!0));let c,f,p,m,h=[];e[u]&&([h,i,f,p,c,m]=l(e[u],i),d[t]=i),0===h.length&&h.push(r.fallback),h=h.map(e=>s(e));const g={response:h,context:i,entities:c,userId:t};return f&&(g.quick_replies=f),p&&(g.template=p),m&&(g.actions=m),g};if(e&&Array.isArray(e)&&e.length){const t=e;let r,n;a=[(e,a="user")=>{const o=d[a]||{};let l=[];return t.forEach(t=>{let a=Array.isArray(t.input)&&s(t.conditions,o)?t.input.findIndex(t=>([r,n]=i(t,e.text),r)):-1;-1===a&&"string"==typeof t.input&&([r,n]=i(t.input,e.text,t.conditions,o),a=r?0:-1),a>=0&&(r={intent:t,inputIndex:a,entities:n},1===n.length&&"any"===n[0].type&&(r.any=!0),l.push(r))}),l=l.sort((e,t)=>e.intent.conditions&&e.intent.conditions.length>0&&(!t.intent.conditions||0===t.intent.conditions.length)?-1:(e.intent.order||0)-(t.intent.order||0)),{matchs:l,context:o,userId:a}},u]}return a};t.default=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.friendlyDate=void 0;t.friendlyDate=(e,t)=>{let r=.001*(Date.now()-e);const n=Math.floor(r/31557600);r-=31557600*n;const a=Math.floor(r/2629800);r-=2629800*a;const o=Math.floor(r/86400);if(r-=86400*o,a||n||o>6)return new Date(e).toLocaleString(t);if(o>1)return new Date(e).toLocaleString(t);if(1===o)return"yesterday";const s=Math.floor(r/3600);if(r-=3600*s,s>1)return s+" hours ago";if(1===s)return s+" hour ago";const i=Math.floor(r/60);return r-=60*i,i>1?i+" mins ago":1===i?i+" min ago":r>10?r+" secs ago":"just now"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(...e)=>{const t=[],r=(...e)=>{let n;return e.forEach(e=>{Array.isArray(e)?(n||(n=[]),e.forEach(e=>{n.push(r(e))})):e instanceof Date?n=new Date(e.getTime()):e&&"object"==typeof e?(t.push(e),n||(n={}),t.push(e),Object.keys(e).forEach(a=>{const o=e[a];-1!==t.indexOf(o)?n[a]=o:n[a]=r(n[a],o)}),t.pop()):null!=e&&(n=e)}),n};return r(...e)};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(2),o=(n=r(4))&&n.__esModule?n:{default:n};var s=async({listener:e,messages:t})=>{const[r,n,s,,i]=await(0,o.default)({listener:e,messages:t});return[n,s,async t=>{r(t),await e({type:"newMessage",message:(0,a.deepCopy)(t)});const n=s("bot","You say : "+t.text);r(n),await e({type:"newMessage",message:n})},i]};t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(5),a=c(r(7)),o=c(r(8)),s=r(3),i=r(10),l=c(r(41)),d=c(r(11)),u=c(r(42));function c(e){return e&&e.__esModule?e:{default:e}}var f=async({state:e,messaging:t,root:r,messageListener:c=(({type:e,message:t})=>({type:e,message:t})),dataset:f,messages:p,actions:m})=>{(0,n.setup)({html:s.html,createElement:s.createElement,styled:i.styled,useRef:s.useRef});const h=await(0,a.default)(),[g,y]=(0,d.default)(e),v=g.messenger.personas||{},b=e=>{let{avatar:t}=e;return t||(t=v[e.from]),t};let x,_,w=p,M=()=>{};if(g.messenger.localStorage){const[e,t]=(0,o.default)("messages");Array.isArray(e)&&e.length>0&&(w=e),M=t}const k=(t,r,n)=>{const a=document.getElementsByClassName("ziiir-conversation")[0],o=(0,s.createElement)(h.Message,{key:t.created_time,createdtime:t.created_time,avatar:b(t),fromUser:"user"===t.from,onAction:x,hideDate:e.messenger.hideDate,hasPrevious:r,hasNext:n,quickReplies:t.quick_replies,template:t.template},t.text);let i;for(const e of a.children){const r=parseInt(e.getAttribute("created-time"),10);if(t.created_time<r){i={before:e};break}}(0,s.render)(o,a,{...g},i)},P=async({type:e,message:t})=>{const r=document.getElementsByClassName("ziiir-conversation")[0];if("newMessage"===e)Array.isArray(t)?t.forEach((e,t,r)=>{const n=r[t-1],a=!!n&&n.from===e.from&&e.created_time-n.created_time<2e3,o=r[t+1],s=!!o&&o.from===e.from&&o.created_time-e.created_time<2e3;k(e,a,s)}):k(t),r.scrollTop=r.scrollHeight,(async()=>{const e=await _();M(e)})();else if("resetMessages"===e){for(;r.firstChild;)r.firstChild.remove();(async()=>{M([])})()}else"newAction"===e&&t.forEach(e=>{"postform"===e.type&&((e,t,r,n={})=>{const a=Object.keys(r).map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[r[e]])}`).join("&");fetch(e,{method:"POST",headers:{...n,"Content-Type":"application/x-www-form-urlencoded"},body:a})})(e.url,e.variables,e.params,e.headers)});c({type:e,message:t})},[O,$,j,E]=await t({listener:P,messages:w,dataset:f,contexts:e.contexts,options:e.messenger.dialogOptions,actions:m});_=O;x=(e,t)=>{if("BUTTON"===e){const e=$("user",t);j(e)}else"TOGGLE_MESSENGER"===e&&(g.messenger.isOpen=t,y(g))};let C=await _();C=C.map(e=>{const t=e;return t.avatar=b(t),t});const A=await(0,u.default)(C,e=>{if("#"===e.charAt(0))E(e);else{const t=$("user",e);j(t)}},x,e.messenger.hideDate);return(0,s.render)(A,r,{...g}),(0,l.default)(e.theme,"ziiircom-messenger-frame"),[g,_,$,j,E,P]};t.default=f},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(22))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(0)),a=c(r(23)),o=c(r(25)),s=c(r(27)),i=c(r(29)),l=c(r(6)),d=c(r(36)),u=c(r(1));function c(e){return e&&e.__esModule?e:{default:e}}const f=n.default.styled(a.default)`
  color: ${e=>e.theme.palette.onSurface};
  font-family: ${e=>e.theme.font.family};
  font-size: ${e=>e.theme.font.size};
  font-style: ${e=>e.theme.font.style};
  font-weight: ${e=>e.theme.font.weight};
  line-height: 1.1;
  overflow-wrap: break-word;
  padding: 0px;
  width: ${e=>e.theme.messenger.width};
  height: ${e=>e.theme.messenger.height};
  display: flex;
  border-radius: ${e=>e.theme.radius+"px"};
  flex-direction: column;
  box-shadow: ${e=>e.theme.shadow};

  & > p {
    font-size: 13px;
    line-height: 14px;
    text-align: end;
    padding-right: 16px;
    margin: 4px 0;

  }

  &.isexpanded .ziiir-conversation {
    animation: 0.675s cubic-bezier(0.4, 0, 0.2, 1) 0.45s 1 normal both running enterConversation;
    animation-delay: 0.45s;
    animation-fill-mode: both;
  }

  & .ziiir-conversation {
    padding: 16px;
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    overflow-x: hidden;
  }

  & .ziiir-conversation > div {
    webkit-flex: 0 0 100%;
  }

  @keyframes enterConversation {
    0% {
      height: 0;
      padding: 0;
      opacity: 0;
    }
  
    50% {
      opacity: 0;
    }
  
    100% {
      height: 100%;
      padding: 16px;
      opacity: 1;
    }
  }
`;f.defaultProps={theme:u.default};const p=n.default.styled(o.default)`
  border-bottom: ${e=>"1px solid "+e.theme.palette.border};
  border-radius: ${e=>`${e.theme.radius}px ${e.theme.radius}px 0 0`};
`;p.defaultProps={theme:u.default};const m=n.default.styled(i.default)`
  border-top: ${e=>"1px solid "+e.theme.palette.border};
  border-radius: ${e=>`0 0 ${e.theme.radius}px ${e.theme.radius}px`};
  display: flex;
  flex-direction: column;

  & button:hover {
    color: ${e=>e.theme.palette.onSurface};
  }
  & button img {
    background-color: transparent;
    filter: opacity(30%);
  }
  & button:hover img {
    background-color: transparent;
    filter: opacity(70%);
  }
`;m.defaultProps={theme:u.default};const h=n.default.styled(s.default)`
  transform-origin: center bottom 0px;
  scroll-behavior: smooth;
`,g=n.default.styled("div")`
  display: flex;
  width: 100%;
  padding: 4px;
  margin: 0;
  border: none;
  outline: none;
`,y=n.default.styled(d.default)`
  width: 100%;
  padding: 4px;
  margin: 0;
  border: none;
  outline: none;
`,v=n.default.styled("button")`
  display: ${e=>e.sendButton?"block":"none"};
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  padding-right: 0;
  color: ${e=>e.theme.palette.disabledText};
  background-color: transparent;
`;v.defaultProps={theme:u.default};const b=n.default.createElement;var x=({isExpanded:e=!0,input:t={display:!0},header:r={},messages:a=[],onMessage:o,onClick:s,onAction:i,hideDate:d=!1})=>{const{text:u="",...c}=r,x=n.default.useRef(null),_=b(h,{isExpanded:e,className:"ziiir-conversation"},a.sort((e,t)=>e.created_time>t.created_time).map((e,t,r)=>{const n=r[t-1],a=!!n&&n.from===e.from&&e.created_time-n.created_time<2e3,o=r[t+1],s=!!o&&o.from===e.from&&o.created_time-e.created_time<2e3;return((e,t,r,n,a,o,s,i,d,u)=>b(l.default,{key:e,createdtime:e,avatar:n,fromUser:r,onAction:a,hideDate:o,hasPrevious:s,hasNext:i,quickReplies:d,template:u},t))(e.created_time,e.text,"user"===e.from,e.avatar,i,d,a,s,e.quick_replies,e.template)}));let w="ziiir.com";const M=e=>{const t=e.target.value||"";"Enter"===e.key&&t.length>0&&(o&&o(t),e.target.value="")},k=()=>{const{value:e}=x.current;e&&e.length&&o&&(o(e),x.current.value="")};if(t.display){w=b(y,{className:"ziiir-input",onKeyUp:M,ref:x,placeholder:t.placeholder||"Your message"});let e="send";t.sendButton&&t.sendButton.icon&&(e=b("img",{src:t.sendButton.icon.src?t.sendButton.icon.src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMi4wMSAyMUwyMyAxMiAyLjAxIDMgMiAxMGwxNSAyLTE1IDJ6Ii8+PC9zdmc+"})),w=b(g,null,w,b(v,{onClick:k,className:"ziiir-send-button",sendButton:t.sendButton&&!t.sendButton.disableDesktop},e))}return b(f,{className:e?"isexpanded":void 0,onClick:s},b(p,c,u),_,b("p",null,"Powered by ",b("a",{href:"https://ziiir.com",target:"_blank"},"ziiir.com")),b(m,null,w))};t.default=x},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(24))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("div")`
  padding: 1.2em;
  background: ${e=>e.theme.palette.background};
  color: #292c45;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  overflow-wrap: break-word;
`;s.defaultProps={theme:a.default};var i=s;t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(26))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("header")`
  color: ${e=>e.theme.palette.onPrimary};
  font-size: 1.25em;
  background: ${e=>e.theme.palette.primary};
  min-height: 64px;
  padding-top: 1.2em;
  padding-bottom: 1.2em;
  padding-left: 1.2em;
  padding-right: 0.3em;
  display: flex;
  @media only screen and (max-width: 772px) {
    button:first-of-type {
      display: block !important;
    }
  }
`;s.defaultProps={theme:a.default};const i=n.default.styled("button")`
width:24px;
height:24px;
margin: 0.6em 1.2em 1.2em -0.6em;
padding: 4px;
border: none;
border-radius:100%;
display: ${e=>e.closeButton?"block":"none"};
background-color: rgba(255, 255, 255, 0.2);
&:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
`,l=n.default.styled("div")`
width:16px;
height:16px;
background: transparent;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='white'%3E%3Cpath d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'/%3E%3C/g%3E%3C/svg%3E");
background-repeat:no-repeat;
background-position:50%;
background-size:cover;
cursor:pointer;
`;l.defaultProps={theme:a.default};const d=n.default.createElement;var u=({children:e,closeButton:t,onClose:r})=>{const n=d(i,{closeButton:t,onClick:r},d(l));return d(s,null,n,d("span",null,e[0]))};t.default=u},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(28))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("div")`
  padding: 0px;
  background: ${e=>e.theme.palette.background};
  overflow-y: auto;
`;s.defaultProps={theme:a.default};var i=s;t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(30))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("div")`
  color: ${e=>e.theme.palette.disabledText};
  font-size: 1em;
  min-height: 36px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  margin-top: auto;
  & > button {
    align-self: flex-end;
    line-height: 24px;
  }
`;s.defaultProps={theme:a.default};var i=s;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2),a=i(r(0)),o=i(r(32)),s=i(r(1));function i(e){return e&&e.__esModule?e:{default:e}}const l=(e,t="none")=>e.button&&e.button.border?e.button.border:t,d=e=>e.button&&e.button.background?e.button.background:e.surface,u=e=>e.button&&e.button.color?e.button.color:e.onSurface,c=a.default.styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: ${e=>e.hasPrevious?"-16px":"12px"} 0px 0px;

  cursor: default;

  margin-left: ${e=>e.fromUser?"auto":0};

  &:first-child {
    margin-top: 0px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: ${e=>e.fromUser?"flex-end":"flex-start"};
    animation: 0.3s cubic-bezier(0, 0, 0.2, 1) 0s 1 normal both running ${e=>e.fromUser?"enterMessageFromUser":"enterMessageFromBot"};
    width: 100%;
  }
  & > div > p {
    background-color: ${e=>e.fromUser?e.theme.palette.surface:e.theme.palette.secondary};
    color: ${e=>e.fromUser?e.theme.palette.onSurface:e.theme.palette.onSecondary};
    box-shadow: ${e=>e.theme.message.shadow};
    margin-bottom: 4px;
    padding: 6px 16px;
    border-radius: ${e=>{let{smallRadius:t,radius:r}=e.theme.message;return t+="px",r+="px",e.fromUser?`${r} ${e.hasPrevious?t:r} ${e.hasNext?t:`${r} ${r}`}`:`${e.hasPrevious?t:r} ${r} ${r} ${e.hasNext?t:r}`}};
    overflow-wrap: break-word;
    line-height: 1.44;
    width: fit-content;
  }
  & > div > span {
    text-align: ${e=>e.fromUser?"right":"left"};
    display: block;
    margin: 0px 16px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    opacity: 0.5;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.66;
  }
  & > div > p > a {
    color: ${e=>e.theme.palette.link||"inherit"};
  }
  & > div > p > a > img {
    display: initial;
  }
  & > div > p > button {
    border: ${e=>l(e.theme.palette)};
    border-radius: 4px;
    min-height: 24px;
    margin: 8px 4px;
    background: ${e=>d(e.theme.palette)};
    color: ${e=>u(e.theme.palette)};
    cursor: pointer;
    font-size: 16px;
    font-family: ${e=>e.theme.font.family};
    font-weight: ${e=>e.theme.font.weight};
    padding: 1px 6px;
  }
  & > div > p > button:focus {
    outline: none !important;
  }
  @keyframes enterMessageFromUser {
    0% {
      transform: translate( 0, 20px );
      opacity: 0;
    }
  
    100% {
      transform: translate( 0, 0 );
      opacity: 1;
    }
  }

  @keyframes enterMessageFromBot {
    0% {
      transform: translate( - $message-avatar-size, 0 );
      opacity: 0;
    }
  
    100% {
      transform: translate( 0, 0 );
      opacity: 1;
    }
  }
`;c.defaultProps={theme:s.default};const f=a.default.styled("div")`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  & > button {
    border: ${e=>l(e.theme.palette,"1px solid "+e.theme.palette.secondary)};
    border-radius: 4px;
    min-height: 24px;
    margin: 8px 4px;
    background: ${e=>d(e.theme.palette)};
    color: ${e=>u(e.theme.palette)};
    cursor: pointer;
    font-size: 16px;
  }
`;f.defaultProps={theme:s.default};const p=a.default.styled("span")`
  z-index: 3;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-top: auto;
  margin-right: 8px;
`,m=a.default.styled("img")`
  z-index: 3;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-top: auto;
  margin-right: 8px;
  animation: 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s 1 normal none running enterAvatar;
  border-radius: 50%;

  @keyframes enterAvatar {
    0% {
      transform: scale( .5, .5 );
      opacity: 0;
    }
  
    30% {
      transform: scale( 1.25, 1.25 );
      opacity: 1;
    }
  
    80% {
      transform: scale( .9, .9 );
    }
  
    100% {
      transform: scale( 1, 1 );
    }
  }  
`,h=a.default.createElement;var g=({createdtime:e,avatar:t,fromUser:r=!0,children:a,onAction:s=(()=>{}),hideDate:i=!1,hasPrevious:l=!1,hasNext:d=!1,quickReplies:u,template:g})=>{const y=(0,n.friendlyDate)(e);let v=a,b=a;Array.isArray(v)&&([v]=a),"string"==typeof v&&(v.indexOf("/>")>0||v.indexOf("</")>0||v.indexOf("/&gt;")>0||v.indexOf("&lt;/")>0)?(v={__html:v},b=void 0):v=void 0;const x=e=>{e.preventDefault();e.target.parentNode.style.display="none"},_=(e,t)=>{e.stopPropagation(),e.preventDefault(),s("BUTTON",t);e.target.parentNode.parentNode.style.display="none"};let w;return u?w=h(f,{},u.map(e=>h("button",{key:e.title,onClick:x},e.title))):g?w=h(o.default,{...g,onAction:_}):i||d||(w=h("span",null,y)),h(c,{fromUser:r,"created-time":e,hasPrevious:l,hasNext:d},t&&(d?h(p):h(m,{src:t.src,alt:t.name})),h("div",{onClick:e=>{"BUTTON"===e.target.tagName&&s(e.target.tagName,e.target.textContent)}},h("p",{dangerouslySetInnerHTML:v},b),w))};t.default=g},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(33))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(0)),a=s(r(1)),o=s(r(34));function s(e){return e&&e.__esModule?e:{default:e}}const i=n.default.styled("div")`
    font-size: 1em;
    display: flex;
    width: 100%;
    flex-direction: row;
    font-family: ${e=>e.theme.font.family};
    font-weight: ${e=>e.theme.font.weight};
    margin: 0;
    padding: 0;
    & > div {
     margin-right: 0.15em;
    }
    & > div:first-of-type {
      border-top-left-radius: ${e=>e.theme.message.radius}px;
      border-bottom-left-radius: ${e=>e.theme.message.radius}px;
    }
    & > div:first-of-type > img {
      border-top-left-radius: ${e=>e.theme.message.radius}px;
    }
    & > div:last-of-type {
      border-top-right-radius: ${e=>e.theme.message.radius}px;
      border-bottom-right-radius: ${e=>e.theme.message.radius}px;
    }
    & > div:last-of-type > img {
      border-top-right-radius: ${e=>e.theme.message.radius}px;
    }
  `;i.defaultProps={theme:a.default};const l=n.default.styled("div")`
   width: 100%;
   overflow-x: auto;
`;i.defaultProps={theme:a.default};const d=n.default.createElement;var u=({elements:e,onAction:t=(()=>{})})=>{const r=[];e.forEach((e,n)=>{const a=d(o.default,{onAction:(e,r,a)=>{t(e,r,n,a)},...e});r.push(a)});const n=d(i,void 0,r);return d(l,void 0,n)};t.default=u},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(35))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("div")`
   font-size: 1em;
   display: flex;
   width: fit-content; 
   flex-direction: column;
   font-family: ${e=>e.theme.font.family};
   font-weight: ${e=>e.theme.font.weight};
   margin: 0;
   padding: 0;
   border-radius: 3px;
   color: ${e=>e.theme.palette.secondary};
   border: 1px solid ${e=>e.theme.palette.border};
   background: none;
   cursor: pointer;
   & > p {
    margin: 0.6em 0.3em;
    color: ${e=>e.theme.palette.onBackground};
   }
   & > img {
    max-width: 180px;
   }
 `;s.defaultProps={theme:a.default};const i=n.default.styled("button")`
   font-size: 1em;
   font-family: ${e=>e.theme.font.family};
   font-weight: ${e=>e.theme.font.weight};
   margin: 0;
   padding: 0.6em 1em;
   color: ${e=>e.theme.palette.secondary};
   border-top: 1px solid ${e=>e.theme.palette.border} !important;
   border: none;
   background: none;
   cursor: pointer;
   &:hover {
     color: ${e=>e.theme.palette.onSecondary};
     border-top: 1px solid ${e=>e.theme.palette.secondary};
     background: ${e=>e.theme.palette.secondary};
   }
 `;i.defaultProps={theme:a.default};const l=n.default.createElement;var d=({title:e,imageUrl:t,buttons:r=[],onAction:n=(()=>{}),defaultAction:a})=>{const o=[];r.forEach((e,t)=>{const r=l(i,{onClick:r=>n(r,e.payload,t)},e.title);o.push(r)});return l(s,{onClick:e=>{a?n(e,a):e.stopPropagation()}},l("img",{src:t}),l("p",null,e),...o)};t.default=d},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(37))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("input")`
  font-size: 1em;
  margin: 0.6em;
  padding: 0.3em 1em;
  border-radius: 3px;

  color: ${e=>e.theme.palette.secondary};
  border: 2px solid ${e=>e.theme.palette.secondary};
`;s.defaultProps={theme:a.default};var i=s;t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(39))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("div")`
width:48px;
height:48px;
border-radius:100%;
color: ${e=>e.theme.palette.onSecondary};
font-size: 1.25em;
line-height: 64px;
background: ${e=>e.theme.palette.secondary};
background-image: ${e=>e.icon?`url("${e.icon}")`:`url("${((e,t="ffffff")=>{let r=e;"#"===r[0]&&(r=r.substring(1));let n=t;return"#"===n[0]&&(n=n.substring(1)),`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='64' height='64'%0AviewBox='0 0 172 172'%0Astyle=' fill:%23000000;'%3E%3Cg fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'%3E%3Cpath d='M0,172v-172h172v172z' fill='none'%3E%3C/path%3E%3Cg%3E%3Cpath d='M138.64141,105.21563c0,6.08047 -4.90469,10.98516 -10.98516,10.98516h-83.3125c-6.08047,0 -10.98516,-4.90469 -10.98516,-10.98516v-48.50937c0,-6.08047 4.90469,-10.98516 10.98516,-10.98516h83.3125c6.08047,0 10.98516,4.90469 10.98516,10.98516z' fill='%23${n}'%3E%3C/path%3E%3Cpath d='M113.21094,130.98203c-0.87344,0.87344 -2.25078,0.87344 -3.12422,0l-10.51484,-14.88203c-0.87344,-0.87344 -0.87344,-2.25078 0,-3.12422h24.1875c0.87344,0.87344 0.87344,2.25078 0,3.12422z' fill='%23${n}'%3E%3C/path%3E%3Cg fill='%23${r}'%3E%3Cpath d='M122.58359,64.36562c0,2.21719 -1.78047,3.99766 -3.99766,3.99766h-65.44063c-2.21719,0 -3.99766,-1.78047 -3.99766,-3.99766v0c0,-2.21719 1.78047,-3.99766 3.99766,-3.99766h65.47422c2.18359,0.03359 3.96406,1.81406 3.96406,3.99766zM122.58359,80.35625c0,2.21719 -1.78047,3.99766 -3.99766,3.99766h-65.44063c-2.21719,0 -3.99766,-1.78047 -3.99766,-3.99766v0c0,-2.21719 1.78047,-3.99766 3.99766,-3.99766h65.47422c2.18359,0 3.96406,1.78047 3.96406,3.99766zM122.58359,96.31328c0,2.21719 -1.78047,3.99766 -3.99766,3.99766h-65.44063c-2.21719,0 -3.99766,-1.78047 -3.99766,-3.99766v0c0,-2.21719 1.78047,-3.99766 3.99766,-3.99766h65.47422c2.18359,0 3.96406,1.78047 3.96406,3.99766z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A`})(e.theme.palette.secondary,e.theme.palette.bubbleColor)}")`};
background-repeat:no-repeat;
background-position:50%;
background-size:cover;
box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12);
cursor:pointer;
transition: all .2s ease-in-out;
animation:spin 0.45s ease-in-out;
&:hover {
  transform: scale(1.05);
}
&.isactive {
  animation:spin 0.45s ease-in-out;
  background-image: ${e=>e.iconActive?`url("${e.iconActive}");`:void 0}
}
@keyframes spin {
  from {
    opacity: 0;
    transform: scale(0.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  } 
}
`;s.defaultProps={theme:a.default};var i=s;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dispatcher=t.default=void 0;const n={states:[],next:0,reset(){n.states=[],n.next=0},useState(e){if(n.next===n.states.length){const t={value:"function"==typeof e?e():e,setState(e){t.value=e,n.next=0}};n.states.push(t)}const t=n.states[n.next];return n.next+=1,[t.value,t.setState]}};t.dispatcher=n;var a=n.useState;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(e={},t)=>{const{fonts:r={}}=e,{text:n={},heading:a={}}=r,o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href",n.url||"https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"),o.setAttribute("type","text/css");const s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href",a.url||"https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"),s.setAttribute("type","text/css");const[i]=document.getElementsByTagName("head");i.appendChild(o),i.appendChild(s);const[l]=document.getElementsByClassName(t);l.style.cssText=`font-family: ${n.name&&n.name+", "||""}sans-serif;`};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(7))&&n.__esModule?n:{default:n},o=r(10),s=r(3),i=r(11);var l=async(e,t,r,n)=>{const[l,d={},u]=(0,i.useSelector)(e=>[e.messenger.isOpen,e.messenger.header,e.messenger.input]);let c=l;const f=(0,s.useRef)(null),p=(0,s.useRef)(null),m=()=>{c=!c;const e=f.current;e.classList.toggle("isopen"),e.classList.contains("isclosedstart")?e.classList.remove("isclosedstart"):e.classList.toggle("isclosed"),e.firstChild.classList.remove("isexpanded");p.current.classList.toggle("isactive"),r("TOGGLE_MESSENGER",c)};d.onClose=m;const h=await(0,a.default)(),g=(0,o.styled)(h.Messenger,{messages:e,onMessage:e=>{t(e)},onClick:e=>{e.stopPropagation()},onAction:r,header:d,input:u,hideDate:n})`
    position: absolute;
    overflow: hidden;
    height: 100%;
    background: ${e=>e.theme.palette.background};
  `,y=(0,o.styled)("div",{ref:f,className:"ziiircom-messenger is"+(c?"open":"closedstart"),onClick:m},g)`
    max-height: 700px;
    width: ${e=>e.theme.messenger&&e.theme.messenger.width?e.theme.messenger.width:"500px"};
    min-height: 320px;
    z-index: 10;
    position: fixed;
    height: calc(100% - 100px);
    bottom: 100px;
    right: 28px;

    &.isopen {
      animation: slide-in 0.5s forwards;
    }

    &.isclosed {
      visibility: hidden;
      animation: slide-out 0.5s ease;
    }

    &.isclosedstart {
      visibility: hidden;
    }

    @media only screen and (max-width: 772px) {
      .ziiircom-messenger {
        bottom: 0px !important;
        right: 0px !important;
        width: 100% !important;
      }
      .ziiircom-messenger.isopen {
        animation: slide-up 0.5s forwards !important;
      }
      .ziiircom-messenger.isclosed {
        animation: slide-down 0.5s forwards !important;
      }
      .isactive {
        display: none;
      }
      .ziiircom-messenger > div {
        width: 100%;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        margin: auto 0 0 0;
      }
    }
    @keyframes slide-in {
      0% {
        transform: translateX(780px);
        opacity: 0;
        visibility: hidden;
      }
      100% {
        transform: translateX(0px);
        opacity: 1;
        visibility: visible;
      }
    }
    @keyframes slide-out {
      0% {
        transform: translateX(0px);
        opacity: 1;
        visibility: visible;
      }
      100% {
        transform: translateX(780px);
        opacity: 0;
        visibility: hidden;
      }
    }
    @keyframes slide-up {
      0% {
        transform: translateY(780px);
        opacity: 0;
        visibility: hidden;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
        visibility: visible;
      }
    }
    @keyframes slide-down {
      0% {
        transform: translateY(0px);
        opacity: 1;
        visibility: visible;
      }
      100% {
        transform: translateY(780px);
        opacity: 0;
        visibility: hidden;
      }
    }
  `,v=(0,o.styled)(h.FAButton,{ref:p,className:"ziiircom-messenger-fab "+(c?"isactive":""),onClick:m,iconActive:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='-12 -12 48 48'%3E%3Cg fill='white'%3E%3Cpath d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'/%3E%3C/g%3E%3C/svg%3E"})`
    position: fixed;
    right: 32px;
    bottom: 32px;
    z-index: 9;
  `;return r("INIT"),(0,o.styled)("div",{className:"ziiircom-messenger-frame"},y,v)``};t.default=l}]);
//# sourceMappingURL=main.js.map