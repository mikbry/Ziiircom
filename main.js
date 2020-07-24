var messenger=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setup=void 0;const n={};t.setup=({html:e,styled:t,createElement:r})=>(n.html||(n.html=e,n.styled=t,n.createElement=r),n);var a=n;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={palette:{primary:"palevioletred",secondary:"#70DBB8",background:"smokewhite",surface:"papayawhip",onPrimary:"white",onSecondary:"white",onBackground:"dark",onSurface:"gray",disabledText:"lightGrey"},fonts:[],font:{size:"16px",style:"normal",weight:"400"},spacing:8,radius:12,smallRadius:4,shadow:"rgba(0,0,0,0.2) 0px 2px 4px -1px,rgba(0,0,0,0.14) 0px 4px 5px 0px,rgba(0,0,0,0.12) 0px 1px 10px 0px",messenger:{width:"400px",height:"600px"}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"friendlyDate",{enumerable:!0,get:function(){return a.friendlyDate}}),Object.defineProperty(t,"deepCopy",{enumerable:!0,get:function(){return s.default}});var n,a=r(16),s=(n=r(17))&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRef=t.render=t.createElement=t.html=void 0;var n=r(2),a=r(8);t.html=()=>{};t.createElement=(e,t,...r)=>{let a;e.element?(a=(0,n.deepCopy)({},e),a.props=(0,n.deepCopy)({},a.props,t)):(a={props:{}},a.element=e,t&&(a.props=t));let s=r;return 1===r.length&&Array.isArray(r[0])&&([s]=r),a.children=s.filter(e=>void 0!==e),a};const s=(e,t,r={},o)=>{if(!e)return;if("string"==typeof e){return void(t.innerText=e)}let{children:i}=e;if("string"==typeof e.element){const l=document.createElement(e.element);if(e.props&&Object.keys(e.props).forEach(t=>{const r=e.props[t],n=typeof r,a="string"===n||"number"===n||"boolean"===n;"ref"===t?r.setCurrent(l):"className"===t?l.className=r:"function"===n?"on"===t.substring(0,2)&&l.addEventListener(t.substring(2).toLowerCase(),r):a&&l.setAttribute(t,r)}),e.styled){const t={...e.defaultProps},s=r.theme||{},o=(0,n.deepCopy)(t,e.props,{theme:s});let i=(0,a.genClassRules)(e.styled,o,t);e.props.className&&(i+=" "+e.props.className),l.className=i}e.props&&e.props.dangerouslySetInnerHTML&&(l.innerHTML=e.props.dangerouslySetInnerHTML.__html),i&&i.forEach(e=>{s(e,l,r)}),o&&o.before?t.insertBefore(l,o.before):t.appendChild(l)}else if("function"==typeof e){const n=e({...e.props,children:i,styled:e.styled});s(n,t,r),i=null}else if(e.element&&"function"==typeof e.element){const n=e.element({...e.props,children:i});e.styled&&(n.styled=[...e.styled,...n.styled]),s(n,t,r),i=null}};t.render=s;t.useRef=e=>{const t={current:e,setCurrent:e=>{t.current=e}};return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);var a=async({listener:e,messages:t})=>{let r=[];t&&t.forEach(e=>{const t=(0,n.deepCopy)(e);t.created_time||(t.created_time=Date.now()),r.push(t)});return[e=>r.push((0,n.deepCopy)(e)),async()=>(0,n.deepCopy)(r),(e,t)=>({from:e,text:t,created_time:Date.now()}),void 0,async t=>{"#reset"===t?(e({type:"resetMessages"}),r=[]):e({type:"unknownCommand"})}]};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=async function(){const e=await Promise.resolve().then(()=>s(r(20))),t=await Promise.resolve().then(()=>s(r(6))),n=await Promise.resolve().then(()=>s(r(33)));return{Messenger:e.default,Message:t.default,FAButton:n.default}},Object.defineProperty(t,"Interface",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"setup",{enumerable:!0,get:function(){return n.setup}});var n=s(r(0));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(30))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(5))&&n.__esModule?n:{default:n};let s;var o=async()=>(s||(s=await(0,a.default)()),s);t.default=o},function(e,t,r){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.genClassRules=t.genStyle=void 0;const a="abcdefghijklmnopqrstuvwxyz",s=(e,t)=>{let r="";return e&&Array.isArray(e.styles)&&e.styles.forEach((n,a)=>{r+=n,e.parameters[a]&&(r+=e.parameters[a](t))}),r};t.genStyle=s;const o=(e,t)=>{const r=e;if(0===t.trim().length)return;let n=0,a=t.indexOf("@",n);for(;a>-1;){r.main+=t.substring(n,a).trim();const e=t.indexOf("@",a+1);n=-1!==e?e:t.lastIndexOf("}")+1,r.medias.push(t.substring(a,n)),a=e}r.main+=t.substring(n).trim()};t.genClassRules=(e,t,r={})=>{const i=(()=>{if(!n){const e=document.createElement("style");e.type="text/css",e.title="MainCSS",document.getElementsByTagName("head")[0].appendChild(e),n=e.sheet}return n})();let l="";return e.forEach(e=>{const n=r.selector||[...Array(5)].map(()=>a[~~(Math.random()*a.length)]).join(""),u={main:"",sub:[],medias:[]};if(((e,t,r)=>{const n=s(t,r);let a=0,i=n.indexOf("&",a);if(-1===i)o(e,n);else{for(;i>-1;)o(e,n.substring(a,i)),a=n.indexOf("}",i+2),e.sub.push(n.substring(i+1,a+1)),a+=1,i=n.indexOf("&",a);o(e,n.substring(a))}})(u,e,t),u.main&&u.main.length>0){let e=`.${n} { ${u.main} }`;i.insertRule(e),u.sub.forEach(t=>{e=`.${n}${t}`,i.insertRule(e)}),u.medias.forEach(e=>{i.insertRule(e)}),l+=n+" "}}),l.trim()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"genStyle",{enumerable:!0,get:function(){return a.genStyle}}),t.styled=void 0;var n=r(3),a=r(8);t.styled=(e,t,...r)=>(a,...s)=>{const o=e,i=(0,n.createElement)(o,t,...r);return i.styled?i.styled.unshift({styles:a,parameters:s}):i.styled=[{styles:a,parameters:s}],i}},function(e,t,r){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.useSelector=t.default=void 0;t.default=e=>(n={...e},n);t.useSelector=e=>e({...n})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(12)),a=s(r(19));function s(e){return e&&e.__esModule?e:{default:e}}var o=async(e={messenger:{}},t,r=document.body)=>{let s,o;try{const e=await fetch("./config.json");s=await e.json()}catch(e){}s||(s={});const i={...s,...e};if(i.dataset){if(i.dataset.src)try{const e=await fetch(i.dataset.src);o=await e.json()}catch(e){}else({dataset:o}=i);o&&o.intents&&(o=o.intents)}else if(i.intents)if(i.intents.src)try{const e=await fetch(i.intents.src);o=await e.json()}catch(e){}else o=i.intents;const l=o?"dialog":void 0,u=await(0,n.default)(l);return(0,a.default)({state:i,messaging:u,root:r,messageListener:t,dataset:o,messages:i.messages})};t.default=o},function(e,t,r){"use strict";function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=a?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=async e=>{let t;if("dialog"===e)try{t=(await Promise.resolve().then(()=>a(r(13)))).default}catch(e){}if(!t)try{t=(await Promise.resolve().then(()=>a(r(18)))).default}catch(e){}return t};t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(14)),a=r(2),s=o(r(4));function o(e){return e&&e.__esModule?e:{default:e}}var i=async({listener:e,dataset:t,messages:r,contexts:o={}})=>{const[i,l,u,,d]=await(0,s.default)({listener:e,messages:r}),c=(0,a.deepCopy)(o),[f,p]=(0,n.default)(t,c);return[l,u,async t=>{i(t),await e({type:"newMessage",message:(0,a.deepCopy)(t)});const r=f(t),{response:n}=p(r),s=u("bot",n);i(s),await e({type:"newMessage",message:s})},async e=>("#reset"===e&&Object.keys(c).forEach(e=>{delete c[e]}),d(e))]};t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(15))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);const a=(e,t={})=>({text:e.replace(/<<\s*([\w.]+)\s*=\s*(.+?)\s*>>/g,(e,r,n)=>(t[r]=n,"")),set:t}),s=(e,t)=>{let r=e;return"*"===r&&([{value:r}]=t),r},o=e=>e.replace(/https?:\/\/\S*|\[(.*?)\]\((.*?)\)/gi,(e,t,r)=>{let n=e,a=n;return t&&(a=t,n=r),n.match(/\.(jpg|jpeg|gif|png)$/gi)?`<a href="${n}" target="_blank" rel="noopener noreferrer"><img src="${n}" alt="${a}" /></a>`:`<a href="${n}" target="_blank" rel="noopener noreferrer">${a}</a>`}),i=(e,t)=>{const r=[];let n,a=t;var s;return"*"===e?(r.push({type:"any",value:a,offset:0}),n=!0):e.indexOf("{{")>-1?e.replace(/{{\s*([\w.]*)\s*(=?)\s*@(any|email)\s*}}/g,(e,t,s,o,i)=>{i>0&&(a=void 0),("any"===o||"email"===o&&a&&a.match(/\b(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})\b/gi))&&(n=!0),n&&r.push({name:t,type:o,value:a,offset:i})}):(s=t,n=e.toLowerCase()===s.toLowerCase(),n&&r.push({type:"all",value:a,offset:0})),[n,r]};var l=(e,t)=>{let r;const l=t||{},u=({matchs:e,context:t={},userId:r},a=o)=>{let i,u,d,c=(0,n.deepCopy)(t);if(e&&e.length>1&&e.forEach(e=>{e.any||i||e.intent.topic!==c.topic||(i=e)}),!i&&e[0]&&([i]=e),i){const{intent:e}=i;({entities:d}=i),e.set&&(c={...c,...e.set});let t,{output:r}=e;Array.isArray(r)&&r.forEach(e=>{if("condition"===e.type){let t;r=null,e.children.forEach(e=>{r&&t||e.value!==c[e.name]&&e.value||(({value:t}=e),r=e)})}else r=e});let n=r;r.text&&({text:n}=r),d.forEach(e=>{e.name&&(c[e.name]=e.value)}),({response:u,set:t}=((e,t,r)=>{const n={};return{response:e.replace(/{{\s*([\w.]+)\s*(=\s*(.+?)\s*)*}}/g,(e,a,o,i)=>{const l=a.trim();return o&&(n[l]=s(i,r)),n[l]||t[l]||""}),set:n}})(n,c,d)),Object.keys(t).length&&(c={...c,...t}),r.set&&Object.keys(r.set).forEach(e=>{c[e]=s(r.set[e],d)})}else u="I don't understand";return l[r]=(0,n.deepCopy)(c),u=a(u),{response:u,context:c,entities:d}};if(e&&Array.isArray(e)&&e.length){const t=e.map(e=>(e=>{const t=(0,n.deepCopy)(e),{output:r}=t;if(Array.isArray(r))r.forEach((e,r)=>{if("condition"===e.type)e.children.forEach((e,n)=>{const{text:s,set:o}=a(e.text,e.set);0===Object.keys(o).length?t.output[r].children[n]={...e,text:s}:t.output[r].children[n]={...e,set:o,text:s}});else{const{text:n,set:s}=a(e);t.output[r]={set:s},0===Object.keys(s).length?t.output[r]=n:t.output[r]={set:s,text:n}}});else{const{text:e,set:n}=a(r);0===Object.keys(n).length?t.output=e:t.output={set:n,text:e}}return t})(e));let s,o;r=[(e,r="user")=>{const n=l[r]||{},a=[];return t.forEach(t=>{let r=Array.isArray(t.input)?t.input.findIndex(t=>([s,o]=i(t,e.text),s)):-1;-1===r&&"string"==typeof t.input&&([s,o]=i(t.input,e.text),r=s?0:-1),r>=0&&(s={intent:t,inputIndex:r,entities:o},1===o.length&&"any"===o[0].type&&(s.any=!0),a.push(s))}),{matchs:a.sort((e,t)=>(e.intent.order||0)-(t.intent.order||0)),context:n,userId:r}},u]}return r};t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.friendlyDate=void 0;t.friendlyDate=(e,t)=>{let r=.001*(Date.now()-e);const n=Math.floor(r/31557600);r-=31557600*n;const a=Math.floor(r/2629800);r-=2629800*a;const s=Math.floor(r/86400);if(r-=86400*s,a||n||s>6)return new Date(e).toLocaleString(t);if(s>1)return new Date(e).toLocaleString(t);if(1===s)return"yesterday";const o=Math.floor(r/3600);if(r-=3600*o,o>1)return o+" hours ago";if(1===o)return o+" hour ago";const i=Math.floor(r/60);return r-=60*i,i>1?i+" mins ago":1===i?i+" min ago":r>10?r+" secs ago":"just now"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(...e)=>{const t=[],r=(...e)=>{let n;return e.forEach(e=>{Array.isArray(e)?(n||(n=[]),e.forEach(e=>{n.push(r(e))})):e instanceof Date?n=new Date(e.getTime()):e&&"object"==typeof e?(t.push(e),n||(n={}),t.push(e),Object.keys(e).forEach(a=>{const s=e[a];-1!==t.indexOf(s)?n[a]=s:n[a]=r(n[a],s)}),t.pop()):null!=e&&(n=e)}),n};return r(...e)};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(2),s=(n=r(4))&&n.__esModule?n:{default:n};var o=async({listener:e,messages:t})=>{const[r,n,o,,i]=await(0,s.default)({listener:e,messages:t});return[n,o,async t=>{r(t),await e({type:"newMessage",message:(0,a.deepCopy)(t)});const n=o("bot","You say : "+t.text);r(n),await e({type:"newMessage",message:n})},i]};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(5),a=u(r(7)),s=r(3),o=r(9),i=u(r(10)),l=u(r(35));function u(e){return e&&e.__esModule?e:{default:e}}var d=async({state:e,messaging:t,root:r,messageListener:u=(({type:e,message:t})=>({type:e,message:t})),dataset:d,messages:c})=>{(0,n.setup)({html:s.html,createElement:s.createElement,styled:o.styled});const f=await(0,a.default)(),p=(0,i.default)(e);let m;const y=async({type:e,message:t})=>{const r=document.getElementsByClassName("ziiir-conversation")[0];if("newMessage"===e){const e=(0,s.createElement)(f.Message,{key:t.created_time,createdtime:t.created_time,avatar:t.avatar,fromUser:"user"===t.from,onAction:m},t.text);let n;for(const e of r.children){const r=parseInt(e.getAttribute("created-time"),10);if(t.created_time<r){n={before:e};break}}(0,s.render)(e,r,void 0,n),r.scrollTop=r.scrollHeight}else if("resetMessages"===e)for(;r.firstChild;)r.firstChild.remove();u({type:e,message:t})},[g,h,v,x]=await t({listener:y,messages:c,dataset:d,contexts:e.contexts}),b=await g();m=(e,t)=>{const r=h("user",t);v(r)};const _=await(0,l.default)(b,e=>{if("#"===e.charAt(0))x(e);else{const t=h("user",e);v(t)}},m);return(0,s.render)(_,r,{...p}),[p,g,h,v,x,y]};t.default=d},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(21))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(0)),a=c(r(22)),s=c(r(24)),o=c(r(26)),i=c(r(28)),l=c(r(6)),u=c(r(31)),d=c(r(1));function c(e){return e&&e.__esModule?e:{default:e}}const f=n.default.styled(a.default)`
  color: ${e=>e.theme.palette.onSurface};
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  overflow-wrap: break-word;

  padding: 0px;
  width: 400px;
  height: 600px;
  display: flex;
  border-radius: 12px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  &.isexpanded .ziiir-conversation {
    animation: 0.675s cubic-bezier(0.4, 0, 0.2, 1) 0.45s 1 normal both running enterConversation;
    animation-delay: 0.45s;
    animation-fill-mode: both;
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
`;f.defaultProps={theme:d.default};const p=n.default.styled(s.default)`
  border-radius: 12px 12px 0 0;
`,m=n.default.styled(i.default)`
  border-radius: 0 0 12px 12px;
`,y=n.default.styled(o.default)`
  transform-origin: center bottom 0px;
  scroll-behavior: smooth;
`,g=n.default.styled(u.default)`
  width: 100%;
  padding: 4px;
  margin: 0;
  border: none;
  outline:none;
`,h=n.default.createElement;var v=({isExpanded:e=!0,input:t={display:!0},header:r={},messages:n=[],onMessage:a,onClick:s,onAction:o})=>{const i=h(y,{isExpanded:e,className:"ziiir-conversation"},n.sort((e,t)=>e.createdtime>t.createdtime).map(e=>((e,t,r,n,a)=>h(l.default,{key:e,createdtime:e,avatar:n,fromUser:r,onAction:a},t))(e.created_time,e.text,"user"===e.from,e.avatar,o)));let u="ziiir.com";const d=e=>{const t=e.target.value||"";"Enter"===e.key&&t.length>0&&(a&&a(t),e.target.value="")};return t.display&&(u=h(g,{className:"ziir-input",onKeyUp:d,placeholder:t.placeholder||"Your message"})),h(f,{className:e?"isexpanded":void 0,onClick:s},h(p,null,r.text||""),i,h(m,null,u))};t.default=v},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(23))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(0)),a=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=n.default.styled("div")`
  padding: 1.2em;
  background: ${e=>e.theme.palette.background};
  color: #292c45;
  font-family: Roboto Condensed,sans-serif;
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
  padding-left: 1.2em;
  padding-right: 0.3em;
  display: flex;
`;o.defaultProps={theme:a.default};var i=o;t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(27))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(0)),a=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=n.default.styled("div")`
  padding: 0px;
  background: ${e=>e.theme.palette.background};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  & > div {
  }
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
`;o.defaultProps={theme:a.default};var i=o;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2),a=o(r(0)),s=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const i=a.default.styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 80%;
  margin: 12px 0px 0px;

  cursor: default;

  margin-left: ${e=>e.fromUser?"auto":0};

  &:first-child {
    margin-top: 0px;
  }

  & > div {
    width: 100%;
    animation: 0.3s cubic-bezier(0, 0, 0.2, 1) 0s 1 normal both running ${e=>e.fromUser?"enterMessageFromUser":"enterMessageFromBot"};
  }
  & > div > p {
    background-color: ${e=>e.fromUser?e.theme.palette.secondary:e.theme.palette.surface};
    color: ${e=>e.fromUser?e.theme.palette.onSecondary:e.theme.palette.onSurface};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
    margin-bottom: 4px;
    padding: 16px;
    border-radius: ${e=>e.fromUser?"12px 12px 4px 12px":"12px 12px 12px 4px"};
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
  & > div > p > button {
    border: none;
    border-radius: 12px;
    height: 24px;
    margin: 2px 4px;
    background: ${e=>e.theme.palette.secondary};
    color: ${e=>e.theme.palette.onSecondary};
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
`;i.defaultProps={theme:s.default};const l=a.default.styled("img")`
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
`,u=a.default.createElement;var d=({createdtime:e,avatar:t,fromUser:r=!0,children:a,onAction:s})=>{const o=(0,n.friendlyDate)(e);let d=a,c=a;Array.isArray(d)&&([d]=a),"string"==typeof d&&(d.indexOf("/>")>0||d.indexOf("</")>0||d.indexOf("/&gt;")>0||d.indexOf("&lt;/")>0)?(d={__html:d},c=void 0):d=void 0;return u(i,{fromUser:r,"created-time":e},u("div",{onClick:e=>{"BUTTON"===e.target.tagName&&s(e.target.tagName,e.target.textContent)}},u("p",{dangerouslySetInnerHTML:d},c),u("span",null,o)),t&&u(l,{src:t.src,alt:t.name}))};t.default=d},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(32))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(0)),a=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=n.default.styled("input")`
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
`;o.defaultProps={theme:a.default};var i=o;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(7))&&n.__esModule?n:{default:n},s=r(9),o=r(3),i=r(10);var l=async(e,t,r)=>{const[n,l,u]=(0,i.useSelector)(e=>[e.messenger.isOpen,e.messenger.header,e.messenger.input]);let d=n;const c=(0,o.useRef)(null),f=()=>{d=!d;const e=c.current;e.classList.toggle("isclosed"),e.classList.toggle("isopen")},p=await(0,a.default)(),m=(0,s.styled)(p.Messenger,{messages:e,onMessage:e=>{t(e)},onClick:e=>{e.stopPropagation()},onAction:r,header:l,input:u})`
    width: 100%;
    max-width: 600px;
    height: 80%;
  `,y=(0,s.styled)("div",{ref:c,className:"ziiircom-messenger is"+(d?"open":"closed"),onClick:f},m)`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    &.isopen {
      display: flex;
    }

    &.isclosed {
      display: none;
    }
  `,g=(0,s.styled)(p.FAButton,{className:"ziiircom-messenger-fab",onClick:f})`
    position: absolute;
    right: 32px;
    bottom: 32px;
    z-index: 9;
  `;return(0,s.styled)("div",{className:"ziiircom-messenger-frame"},y,g)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  `};t.default=l}]);
//# sourceMappingURL=main.js.map