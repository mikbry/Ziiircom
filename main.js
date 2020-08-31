var messenger=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setup=void 0;const n={};t.setup=({html:e,styled:t,createElement:r,useRef:a})=>(n.html||(n.html=e,n.styled=t,n.createElement=r,n.useRef=a),n);var a=n;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={palette:{primary:"#F03F29",secondary:"#1EA7FD",background:"smokewhite",surface:"#F0F0F0",onPrimary:"white",onSecondary:"white",onBackground:"dark",onSurface:"gray",disabledText:"lightGrey",border:"#EAEAEA"},fonts:[],font:{family:"sans-serif",size:"16px",style:"normal",weight:"400"},spacing:8,radius:12,smallRadius:4,shadow:"rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",messenger:{width:"500px",height:"600px"},message:{radius:16,smallRadius:4,shadow:"none"}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"friendlyDate",{enumerable:!0,get:function(){return a.friendlyDate}}),Object.defineProperty(t,"deepCopy",{enumerable:!0,get:function(){return s.default}});var n,a=r(16),s=(n=r(17))&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRef=t.render=t.createElement=t.html=void 0;var n=r(2),a=r(8);t.html=()=>{};t.createElement=(e,t,...r)=>{let a;e.element?(a=(0,n.deepCopy)({},e),a.props=(0,n.deepCopy)({},a.props,t)):(a={props:{}},a.element=e,t&&(a.props=t));let s=r;return 1===r.length&&Array.isArray(r[0])&&([s]=r),a.children=s.filter(e=>void 0!==e),a};const s=(e,t,r={},o)=>{if(!e)return;if("string"==typeof e){return void(t.innerText=e)}let{children:i}=e;if("string"==typeof e.element){const l=document.createElement(e.element);if(e.props&&Object.keys(e.props).forEach(t=>{const r=e.props[t],n=typeof r,a="string"===n||"number"===n||"boolean"===n;"ref"===t?r.setCurrent(l):"className"===t?l.className=r:"function"===n?"on"===t.substring(0,2)&&l.addEventListener(t.substring(2).toLowerCase(),r):a&&l.setAttribute(t,r)}),e.styled){const t={...e.defaultProps},s=r.theme||{},o=(0,n.deepCopy)(t,e.props,{theme:s});let i=(0,a.genClassRules)(e.styled,o,t);e.props.className&&(i+=" "+e.props.className),l.className=i}e.props&&e.props.dangerouslySetInnerHTML&&(l.innerHTML=e.props.dangerouslySetInnerHTML.__html),i&&i.forEach(e=>{s(e,l,r)}),o&&o.before?t.insertBefore(l,o.before):t.appendChild(l)}else if("function"==typeof e){const n=e({...e.props,children:i,styled:e.styled});s(n,t,r),i=null}else if(e.element&&"function"==typeof e.element){const n=e.element({...e.props,children:i});e.styled&&(n.styled=[...e.styled,...n.styled]),s(n,t,r),i=null}};t.render=s;t.useRef=e=>{const t={current:e,setCurrent:e=>{t.current=e}};return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);var a=async({listener:e,messages:t})=>{let r=[];t&&t.forEach(e=>{const t=(0,n.deepCopy)(e);t.created_time||(t.created_time=Date.now()),r.push(t)});return[e=>r.push((0,n.deepCopy)(e)),async()=>(0,n.deepCopy)(r),(e,t,...r)=>({from:e,text:t,...r,created_time:Date.now()}),void 0,async t=>{"#reset"===t?(e({type:"resetMessages"}),r=[]):e({type:"unknownCommand"})}]};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Interface",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"setup",{enumerable:!0,get:function(){return n.setup}}),t.default=void 0;var n=s(r(0));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}var o=async()=>{const e=await Promise.resolve().then(()=>s(r(20))),t=await Promise.resolve().then(()=>s(r(6))),n=await Promise.resolve().then(()=>s(r(33)));return{Messenger:e.default,Message:t.default,FAButton:n.default}};t.default=o},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(30))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(5))&&n.__esModule?n:{default:n};let s;var o=async()=>(s||(s=await(0,a.default)()),s);t.default=o},function(e,t,r){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.genClassRules=t.genStyle=void 0;const a="abcdefghijklmnopqrstuvwxyz",s=(e,t)=>{let r="";return e&&Array.isArray(e.styles)&&e.styles.forEach((n,a)=>{r+=n,e.parameters[a]&&(r+=e.parameters[a](t))}),r};t.genStyle=s;const o=(e,t)=>{const r=e;if(0===t.trim().length)return;let n=0,a=t.indexOf("@",n);for(;a>-1;){r.main+=t.substring(n,a).trim();const e=t.indexOf("@",a+1);n=-1!==e?e:t.lastIndexOf("}")+1,r.medias.push(t.substring(a,n)),a=e}r.main+=t.substring(n).trim()};t.genClassRules=(e,t,r={})=>{const i=(()=>{if(!n){const e=document.createElement("style");e.type="text/css",e.title="MainCSS",document.getElementsByTagName("head")[0].appendChild(e),n=e.sheet}return n})();let l="";return e.forEach(e=>{const n=r.selector||[...Array(5)].map(()=>a[~~(Math.random()*a.length)]).join(""),d={main:"",sub:[],medias:[]};if(((e,t,r)=>{const n=s(t,r);let a=0,i=n.indexOf("&",a);if(-1===i)o(e,n);else{for(;i>-1;)o(e,n.substring(a,i)),a=n.indexOf("}",i+2),e.sub.push(n.substring(i+1,a+1)),a+=1,i=n.indexOf("&",a);o(e,n.substring(a))}})(d,e,t),d.main&&d.main.length>0){let e=`.${n} { ${d.main} }`;i.insertRule(e),d.sub.forEach(t=>{e=`.${n}${t}`,i.insertRule(e)}),d.medias.forEach(e=>{i.insertRule(e)}),l+=n+" "}}),l.trim()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"genStyle",{enumerable:!0,get:function(){return a.genStyle}}),t.styled=void 0;var n=r(3),a=r(8);t.styled=(e,t,...r)=>(a,...s)=>{const o=e,i=(0,n.createElement)(o,t,...r);return i.styled?i.styled.unshift({styles:a,parameters:s}):i.styled=[{styles:a,parameters:s}],i}},function(e,t,r){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.useSelector=t.default=void 0;t.default=e=>(n={...e},n);t.useSelector=e=>e({...n})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(12)),a=r(2),s=o(r(19));function o(e){return e&&e.__esModule?e:{default:e}}var i=async(e={},t,r=document.body)=>{let o,i;try{const e=await fetch("./config.json");o=await e.json()}catch(e){}o||(o={});const l={...o,...e};if(l.messenger||(l.messenger={}),l.dataset){if(l.dataset.src){i=[];const e=Array.isArray(l.dataset.src)?l.dataset.src:[l.dataset.src];for(const t of e)try{const e=await fetch(t),r=await e.json();let n;r.intents&&(n=(0,a.deepCopy)(i.intents,r.intents)),i=(0,a.deepCopy)(i,r),n&&(i.intents=n)}catch(e){}}else({dataset:i}=l);i&&i.intents&&(i=i.intents)}else if(l.intents)if(l.intents.src)try{const e=await fetch(l.intents.src);i=await e.json()}catch(e){}else i=l.intents;const d=i?"dialog":void 0,u=await(0,n.default)(d),[c,f,p,m,h,g]=await(0,s.default)({state:l,messaging:u,root:r,messageListener:t,dataset:i,messages:l.messages});return window.ziiircom={name:"Ziiircom",store:c,getMessages:f,createMessage:p,sendMessage:m,commands:h,handleEventMessage:g},[c,f,p,m,h,g]};t.default=i},function(e,t,r){"use strict";function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=a?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=async e=>{let t;if("dialog"===e)try{t=(await Promise.resolve().then(()=>a(r(13)))).default}catch(e){}if(!t)try{t=(await Promise.resolve().then(()=>a(r(18)))).default}catch(e){}return t};t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(14)),a=r(2),s=o(r(4));function o(e){return e&&e.__esModule?e:{default:e}}var i=async({listener:e,dataset:t,messages:r,contexts:o={},options:i})=>{const[l,d,u,,c]=await(0,s.default)({listener:e,messages:r}),f=(0,a.deepCopy)(o),[p,m]=(0,n.default)(t,f,i);return[d,u,async t=>{l(t),await e({type:"newMessage",message:(0,a.deepCopy)(t)});const r=p(t),{response:n,quick_replies:s}=m(r),o=[];n.forEach((e,t)=>{const r=u("bot",e);t===n.length-1&&s&&(r.quick_replies=(0,a.deepCopy)(s)),l(r),o.push((0,a.deepCopy)(r))}),await e({type:"newMessage",message:o})},async e=>("#reset"===e&&Object.keys(f).forEach(e=>{delete f[e]}),c(e))]};t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(15))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);const a=(e,t={})=>({text:e.replace(/<<\s*([\w.]+)\s*=\s*(.+?)\s*>>/g,(e,r,n)=>(t[r]=n,"")),set:t}),s=e=>{let t;if(Array.isArray(e))t=e.map(e=>s(e));else if(e.text)t=e,Array.isArray(t.text)?t.text.forEach((e,r)=>{({text:t.text[r],set:t.set}=a(e,t.set))}):({text:t.text,set:t.set}=a(t.text,t.set)),0===Object.keys(t.set).length&&delete t.set;else{const{text:r,set:n}=a(e);t=Object.keys(n).length?{text:r,set:n}:r}return t},o=(e,t)=>{let r=e;return"*"===r&&([{value:r}]=t),r},i=e=>e.replace(/https?:\/\/\S*|\[(.*?)\]\((.*?)\)/gi,(e,t,r)=>{let n=e,a=n;return t&&(a=t,n=r),n.match(/\.(jpg|jpeg|gif|png)$/gi)?`<a href="${n}" target="_blank" rel="noopener noreferrer"><img src="${n}" alt="${a}" /></a>`:`<a href="${n}" target="_blank" rel="noopener noreferrer">${a}</a>`}),l=(e,t)=>!e||0===e.length||e.findIndex(e=>e.name&&t[e.name]===e.value)>-1,d=(e,t,r,n)=>{const a=[];let s,o=t;var i;return l(r,n)&&("*"===e?(a.push({type:"any",value:o,offset:0}),s=!0):e.indexOf("{{")>-1?e.replace(/{{\s*([\w.]*)\s*(=?)\s*@(any|email)\s*}}/g,(e,t,r,n,i)=>{i>0&&(o=void 0),("any"===n||"email"===n&&o&&o.match(/\b(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})\b/gi))&&(s=!0),s&&a.push({name:t,type:n,value:o,offset:i})}):(i=t,s=e.toLowerCase()===i.toLowerCase(),s&&a.push({type:"all",value:o,offset:0}))),[s,a]},u=(e,t)=>{const{intent:r}=e,{entities:n}=e;let a=t;const s=[];let i;r.set&&(a={...a,...r.set});let{output:l}=r;if(Array.isArray(l)&&l.forEach(e=>{if("condition"===e.type){let t;l=null,e.children.forEach(e=>{l&&t||e.value!==a[e.name]&&e.value||(({value:t}=e),l=e)})}}),l){let e=l;l.text&&({text:e}=l),l.quick_replies&&(i=l.quick_replies),n.forEach(e=>{e.name&&(a[e.name]=e.value)}),Array.isArray(e)||(e=[e]),e.forEach(e=>{let t=e;t.text&&(t=t.text);const r=((e,t,r)=>{const n={};return{response:e.replace(/{{\s*([\w.]+)\s*(=\s*(.+?)\s*)*}}/g,(e,a,s,i)=>{const l=a.trim();s&&(n[l]=o(i,r));return n[l]||t[l]||""}),set:n}})(t,a,n);s.push(r.response),Object.keys(r.set).length&&(a={...a,...r.set});(Array.isArray(l)?l:[l]).forEach(e=>{e.set&&Object.keys(e.set).forEach(t=>{a[t]=o(e.set[t],n)})})})}return[s,a,i,n]};var c=(e,t,r={fallback:"I don't understand"})=>{let a;const o=t||{},c=({matchs:e,context:t={},userId:a="user"},s=i)=>{let l=(0,n.deepCopy)(t),d=0;e&&e.length>1&&e.find((e,t)=>!(!(e.intent.conditions&&e.intent.conditions.length>0)&&e.any||e.intent.topic!==l.topic)&&(d=t,!0));let c,f,p=[];e[d]&&([p,l,f,c]=u(e[d],l),o[a]=(0,n.deepCopy)(l)),0===p.length&&p.push(r.fallback),p=p.map(e=>s(e));const m={response:p,context:l,entities:c};return f&&(m.quick_replies=f),m};if(e&&Array.isArray(e)&&e.length){const t=e.map(e=>(e=>{const t=(0,n.deepCopy)(e),{output:r}=t;return Array.isArray(r)&&r.length&&"condition"===r[0].type?t.output=t.output.map(e=>({...e,children:s(e.children)})):t.output=s(r),t})(e));let r,i;a=[(e,n="user")=>{const a=o[n]||{};let s=[];return t.forEach(t=>{let n=Array.isArray(t.input)&&l(t.conditions,a)?t.input.findIndex(t=>([r,i]=d(t,e.text),r)):-1;-1===n&&"string"==typeof t.input&&([r,i]=d(t.input,e.text,t.conditions,a),n=r?0:-1),n>=0&&(r={intent:t,inputIndex:n,entities:i},1===i.length&&"any"===i[0].type&&(r.any=!0),s.push(r))}),s=s.sort((e,t)=>e.intent.conditions&&e.intent.conditions.length>0&&(!t.intent.conditions||0===t.intent.conditions.length)?-1:(e.intent.order||0)-(t.intent.order||0)),{matchs:s,context:a,userId:n}},c]}return a};t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.friendlyDate=void 0;t.friendlyDate=(e,t)=>{let r=.001*(Date.now()-e);const n=Math.floor(r/31557600);r-=31557600*n;const a=Math.floor(r/2629800);r-=2629800*a;const s=Math.floor(r/86400);if(r-=86400*s,a||n||s>6)return new Date(e).toLocaleString(t);if(s>1)return new Date(e).toLocaleString(t);if(1===s)return"yesterday";const o=Math.floor(r/3600);if(r-=3600*o,o>1)return o+" hours ago";if(1===o)return o+" hour ago";const i=Math.floor(r/60);return r-=60*i,i>1?i+" mins ago":1===i?i+" min ago":r>10?r+" secs ago":"just now"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(...e)=>{const t=[],r=(...e)=>{let n;return e.forEach(e=>{Array.isArray(e)?(n||(n=[]),e.forEach(e=>{n.push(r(e))})):e instanceof Date?n=new Date(e.getTime()):e&&"object"==typeof e?(t.push(e),n||(n={}),t.push(e),Object.keys(e).forEach(a=>{const s=e[a];-1!==t.indexOf(s)?n[a]=s:n[a]=r(n[a],s)}),t.pop()):null!=e&&(n=e)}),n};return r(...e)};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(2),s=(n=r(4))&&n.__esModule?n:{default:n};var o=async({listener:e,messages:t})=>{const[r,n,o,,i]=await(0,s.default)({listener:e,messages:t});return[n,o,async t=>{r(t),await e({type:"newMessage",message:(0,a.deepCopy)(t)});const n=o("bot","You say : "+t.text);r(n),await e({type:"newMessage",message:n})},i]};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(5),a=u(r(7)),s=r(3),o=r(9),i=u(r(35)),l=u(r(10)),d=u(r(36));function u(e){return e&&e.__esModule?e:{default:e}}var c=async({state:e,messaging:t,root:r,messageListener:u=(({type:e,message:t})=>({type:e,message:t})),dataset:c,messages:f})=>{(0,n.setup)({html:s.html,createElement:s.createElement,styled:o.styled,useRef:s.useRef});const p=await(0,a.default)(),m=(0,l.default)(e),h=m.messenger.personas||{},g=e=>{let{avatar:t}=e;return t||(t=h[e.from]),t};let y;const v=async({type:t,message:r})=>{const n=document.getElementsByClassName("ziiir-conversation")[0],a=(t,r,a)=>{const o=(0,s.createElement)(p.Message,{key:t.created_time,createdtime:t.created_time,avatar:g(t),fromUser:"user"===t.from,onAction:y,hideDate:e.messenger.hideDate,hasPrevious:r,hasNext:a,quickReplies:t.quick_replies},t.text);let i;for(const e of n.children){const r=parseInt(e.getAttribute("created-time"),10);if(t.created_time<r){i={before:e};break}}(0,s.render)(o,n,{...m},i)};if("newMessage"===t)Array.isArray(r)?r.forEach((e,t,r)=>{const n=r[t-1],s=!!n&&n.from===e.from&&e.created_time-n.created_time<2e3,o=r[t+1],i=!!o&&o.from===e.from&&o.created_time-e.created_time<2e3;a(e,s,i)}):a(r),n.scrollTop=n.scrollHeight;else if("resetMessages"===t)for(;n.firstChild;)n.firstChild.remove();u({type:t,message:r})},[b,x,_,w]=await t({listener:v,messages:f,dataset:c,contexts:e.contexts,options:e.messenger.dialogOptions});let M=await b();M=M.map(e=>{const t=e;return t.avatar=g(t),t}),y=(e,t)=>{const r=x("user",t);_(r)};const k=await(0,d.default)(M,e=>{if("#"===e.charAt(0))w(e);else{const t=x("user",e);_(t)}},y,e.messenger.hideDate);return(0,s.render)(k,r,{...m}),(0,i.default)(e.theme,"ziiircom-messenger-frame"),[m,b,x,_,w,v]};t.default=c},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(21))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(0)),a=c(r(22)),s=c(r(24)),o=c(r(26)),i=c(r(28)),l=c(r(6)),d=c(r(31)),u=c(r(1));function c(e){return e&&e.__esModule?e:{default:e}}const f=n.default.styled(a.default)`
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
`;f.defaultProps={theme:u.default};const p=n.default.styled(s.default)`
  border-bottom: ${e=>"1px solid "+e.theme.palette.border};
  border-radius: ${e=>`${e.theme.radius}px ${e.theme.radius}px 0 0`};
`;p.defaultProps={theme:u.default};const m=n.default.styled(i.default)`
  border-top: ${e=>"1px solid "+e.theme.palette.border};
  border-radius: ${e=>`0 0 ${e.theme.radius}px ${e.theme.radius}px`};
  display: flex;
  flex-direction: column;
  & button {
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    padding-right: 0;
    color: ${e=>e.theme.palette.disabledText};
    background-color: transparent;
  }
  & button:hover {
    color: ${e=>e.theme.palette.onSurface};
  }
  & button img {
    background-color: transparent;
    filter: opacity(30%);
  }
  & button:hover img {
    background-color: transparent;
    filter: opacity(50%);
  }
`;m.defaultProps={theme:u.default};const h=n.default.styled(o.default)`
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
`,v=n.default.createElement;var b=({isExpanded:e=!0,input:t={display:!0},header:r={},messages:a=[],onMessage:s,onClick:o,onAction:i,hideDate:d=!1})=>{const{text:u="",...c}=r,b=n.default.useRef(null),x=v(h,{isExpanded:e,className:"ziiir-conversation"},a.sort((e,t)=>e.created_time>t.created_time).map((e,t,r)=>{const n=r[t-1],a=!!n&&n.from===e.from&&e.created_time-n.created_time<2e3,s=r[t+1],o=!!s&&s.from===e.from&&s.created_time-e.created_time<2e3;return((e,t,r,n,a,s,o,i,d)=>v(l.default,{key:e,createdtime:e,avatar:n,fromUser:r,onAction:a,hideDate:s,hasPrevious:o,hasNext:i,quickReplies:d},t))(e.created_time,e.text,"user"===e.from,e.avatar,i,d,a,o,e.quick_replies)}));let _="ziiir.com";const w=e=>{const t=e.target.value||"";"Enter"===e.key&&t.length>0&&(s&&s(t),e.target.value="")},M=()=>{const{value:e}=b.current;e&&e.length&&s&&(s(e),b.current.value="")};if(t.display&&(_=v(y,{className:"ziir-input",onKeyUp:w,ref:b,placeholder:t.placeholder||"Your message"}),t.sendButton)){let e="send";t.sendButton.icon&&(e=v("img",{src:t.sendButton.icon.src?t.sendButton.icon.src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMi4wMSAyMUwyMyAxMiAyLjAxIDMgMiAxMGwxNSAyLTE1IDJ6Ii8+PC9zdmc+"})),_=v(g,null,_,v("button",{onClick:M},e))}return v(f,{className:e?"isexpanded":void 0,onClick:o},v(p,c,u),x,v("p",null,"Powered by ",v("a",{href:"https://ziiir.com",target:"_blank"},"ziiir.com")),v(m,null,_))};t.default=b},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(23))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(0)),a=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=n.default.styled("div")`
  padding: 1.2em;
  background: ${e=>e.theme.palette.background};
  color: #292c45;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  overflow-wrap: break-word;
`;o.defaultProps={theme:a.default};var i=o;t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(25))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(0)),a=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=n.default.styled("header")`
  color: ${e=>e.theme.palette.onPrimary};
  font-size: 1.25em;
  background: ${e=>e.theme.palette.primary};
  min-height: 64px;
  padding-top: 1.2em;
  padding-bottom: 1.2em;
  padding-left: 1.2em;
  padding-right: 0.3em;
  display: flex;
`;o.defaultProps={theme:a.default};const i=n.default.styled("button")`
width:24px;
height:24px;
margin: 0.6em 1.2em 1.2em -0.6em;
padding: 4px;
border: none;
border-radius:100%;
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
`;l.defaultProps={theme:a.default};const d=n.default.createElement;var u=({children:e,closeButton:t})=>{let r=d(o,null,e[0]);if(t){const n=d(i,{onClick:t.onClose},d(l));r=d(o,null,n,d("span",null,e[0]))}return r};t.default=u},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(27))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(0)),a=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=n.default.styled("div")`
  padding: 0px;
  background: ${e=>e.theme.palette.background};
  overflow-y: auto;
`;o.defaultProps={theme:a.default};var i=o;t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(29))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(0)),a=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=n.default.styled("div")`
  color: ${e=>e.theme.palette.disabledText};
  font-size: 1em;
  line-height: 36px;
  min-height: 36px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  margin-top: auto;
  & > button {
    align-self: flex-end;
    line-height: 24px;
  }
`;o.defaultProps={theme:a.default};var i=o;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2),a=o(r(0)),s=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const i=(e,t="none")=>e.button&&e.button.border?e.button.border:t,l=e=>e.button&&e.button.background?e.button.background:e.surface,d=e=>e.button&&e.button.color?e.button.color:e.onSurface,u=a.default.styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 80%;
  margin: ${e=>e.hasPrevious?"-16px":"12px"} 0px 0px;

  cursor: default;

  margin-left: ${e=>e.fromUser?"auto":0};

  &:first-child {
    margin-top: 0px;
  }

  & > div {
    margin-left: ${e=>e.fromUser?"auto":"0px"};
    animation: 0.3s cubic-bezier(0, 0, 0.2, 1) 0s 1 normal both running ${e=>e.fromUser?"enterMessageFromUser":"enterMessageFromBot"};
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
  & > div > p > button {
    border: ${e=>i(e.theme.palette)};
    border-radius: 4px;
    min-height: 24px;
    margin: 8px 4px;
    background: ${e=>l(e.theme.palette)};
    color: ${e=>d(e.theme.palette)};
    cursor: pointer;
    font-size: 16px;
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
`;u.defaultProps={theme:s.default};const c=a.default.styled("div")`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  & > button {
    border: ${e=>i(e.theme.palette,"1px solid "+e.theme.palette.secondary)};
    border-radius: 4px;
    min-height: 24px;
    margin: 8px 4px;
    background: ${e=>l(e.theme.palette)};
    color: ${e=>d(e.theme.palette)};
    cursor: pointer;
    font-size: 16px;
  }
`;c.defaultProps={theme:s.default};const f=a.default.styled("span")`
  z-index: 3;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-top: auto;
  margin-right: 8px;
`,p=a.default.styled("img")`
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
`,m=a.default.createElement;var h=({createdtime:e,avatar:t,fromUser:r=!0,children:a,onAction:s,hideDate:o=!1,hasPrevious:i=!1,hasNext:l=!1,quickReplies:d})=>{const h=(0,n.friendlyDate)(e);let g=a,y=a;Array.isArray(g)&&([g]=a),"string"==typeof g&&(g.indexOf("/>")>0||g.indexOf("</")>0||g.indexOf("/&gt;")>0||g.indexOf("&lt;/")>0)?(g={__html:g},y=void 0):g=void 0;const v=e=>{e.preventDefault();e.target.parentNode.style.display="none"};return m(u,{fromUser:r,"created-time":e,hasPrevious:i,hasNext:l},t&&(l?m(f):m(p,{src:t.src,alt:t.name})),m("div",{onClick:e=>{"BUTTON"===e.target.tagName&&s(e.target.tagName,e.target.textContent)}},m("p",{dangerouslySetInnerHTML:g},y),!o&&!d&&!l&&m("span",null,h),d&&m(c,{},d.map(e=>m("button",{key:e.title,onClick:v},e.title)))))};t.default=h},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(32))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(0)),a=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=n.default.styled("input")`
  font-size: 1em;
  margin: 0.6em;
  padding: 0.3em 1em;
  border-radius: 3px;

  color: ${e=>e.theme.palette.secondary};
  border: 2px solid ${e=>e.theme.palette.secondary};
`;o.defaultProps={theme:a.default};var i=o;t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(34))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(0)),a=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=n.default.styled("div")`
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
`;o.defaultProps={theme:a.default};var i=o;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(e={},t)=>{const{fonts:r={}}=e,{text:n={},heading:a={}}=r,s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href",n.url||"https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"),s.setAttribute("type","text/css");const o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href",a.url||"https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"),o.setAttribute("type","text/css");const[i]=document.getElementsByTagName("head");i.appendChild(s),i.appendChild(o);const[l]=document.getElementsByClassName(t);l.style.cssText=`font-family: ${n.name&&n.name+", "||""}sans-serif;`};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(7))&&n.__esModule?n:{default:n},s=r(9),o=r(3),i=r(10);var l=async(e,t,r,n)=>{const[l,d={},u]=(0,i.useSelector)(e=>[e.messenger.isOpen,e.messenger.header,e.messenger.input]);let c=l;const f=(0,o.useRef)(null),p=(0,o.useRef)(null),m=()=>{c=!c;const e=f.current;e.classList.toggle("isopen"),e.classList.contains("isclosedstart")?e.classList.remove("isclosedstart"):e.classList.toggle("isclosed"),e.firstChild.classList.remove("isexpanded");p.current.classList.toggle("isactive")};d.closeButton&&(d.closeButton.onClose=m);const h=await(0,a.default)(),g=(0,s.styled)(h.Messenger,{messages:e,onMessage:e=>{t(e)},onClick:e=>{e.stopPropagation()},onAction:r,header:d,input:u,hideDate:n})`
    width: 100%;
    max-width: ${e=>e.theme.messenger.width};
    height: 80%;
    margin: 96px 48px 96px auto;
  `,y=(0,s.styled)("div",{ref:f,className:"ziiircom-messenger is"+(c?"open":"closedstart"),onClick:m},g)`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    flex-direction: column;
    flex-shrink: 0;

    &.isopen {
      animation: slide-in 0.5s forwards;
    }

    &.isclosedstart {
      visibility: hidden;
    }

    &.isclosed {
      visibility: hidden;
      animation: slide-out 0.5s ease;
    }

    @media only screen and (max-width: 772px) {
      .isopen {
        animation: slide-up 0.5s forwards;
      }
      .isclosed {
        animation: slide-down 0.5s forwards;
      }
      .isactive {
        display: none;
      }
      .ziiircom-messenger > div {
        max-width: 100%;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        margin: auto 0 0 0;
      }
    }
    @keyframes slide-in {
      0% {
        left: 600px;
        opacity: 0;
        visibility: hidden;
      }
      100% {
        left: 0;
        opacity: 1;
        visibility: visible;
      }
    }
    @keyframes slide-out {
      0% {
        left: 0;
        opacity: 1;
        visibility: visible;
      }
      100% {
        left: 600px;
        opacity: 0;
        visibility: hidden;
      }
    }
    @keyframes slide-up {
      0% {
        top: 600px;
        opacity: 0;
        visibility: hidden;
      }
      100% {
        top: 0;
        opacity: 1;
        visibility: visible;
      }
    }
    @keyframes slide-down {
      0% {
        top: 0;
        opacity: 1;
        visibility: visible;
      }
      100% {
        top: 600px;
        opacity: 0;
        visibility: hidden;
      }
    }
  `,v=(0,s.styled)(h.FAButton,{ref:p,className:"ziiircom-messenger-fab "+(c?"isactive":""),onClick:m,iconActive:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='-12 -12 48 48'%3E%3Cg fill='white'%3E%3Cpath d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'/%3E%3C/g%3E%3C/svg%3E"})`
    position: absolute;
    right: 32px;
    bottom: 32px;
    z-index: 9;
  `;return(0,s.styled)("div",{className:"ziiircom-messenger-frame"},y,v)``};t.default=l}]);
//# sourceMappingURL=main.js.map