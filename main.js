var messenger=function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setup=void 0;const a={};t.setup=({html:e,styled:t,createElement:r})=>(a.html||(a.html=e,a.styled=t,a.createElement=r),a);var n=a;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={palette:{primary:"palevioletred",secondary:"#70DBB8",background:"smokewhite",surface:"papayawhip",onPrimary:"white",onSecondary:"white",onBackground:"dark",onSurface:"gray",disabledText:"lightGrey"},fonts:[],font:{size:"16px",style:"normal",weight:"400"},spacing:8,radius:12,smallRadius:4,shadow:"rgba(0,0,0,0.2) 0px 2px 4px -1px,rgba(0,0,0,0.14) 0px 4px 5px 0px,rgba(0,0,0,0.12) 0px 1px 10px 0px",messenger:{width:"400px",height:"600px"}};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"friendlyDate",{enumerable:!0,get:function(){return n.friendlyDate}}),Object.defineProperty(t,"deepCopy",{enumerable:!0,get:function(){return s.default}});var a,n=r(16),s=(a=r(17))&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRef=t.render=t.createElement=t.html=void 0;var a=r(2),n=r(8);t.html=()=>{};t.createElement=(e,t,...r)=>{let n;e.element?(n=(0,a.deepCopy)({},e),n.props=(0,a.deepCopy)({},n.props,t)):(n={props:{}},n.element=e,t&&(n.props=t));let s=r;return 1===r.length&&Array.isArray(r[0])&&([s]=r),n.children=s.filter(e=>void 0!==e),n};const s=(e,t,r={},o)=>{if(!e)return;if("string"==typeof e){return void(t.innerText=e)}let{children:i}=e;if("string"==typeof e.element){const l=document.createElement(e.element);if(e.props&&Object.keys(e.props).forEach(t=>{const r=e.props[t],a=typeof r,n="string"===a||"number"===a||"boolean"===a;"ref"===t?r.setCurrent(l):"className"===t?l.className=r:"function"===a?"on"===t.substring(0,2)&&l.addEventListener(t.substring(2).toLowerCase(),r):n&&l.setAttribute(t,r)}),e.styled){const t={...e.defaultProps},s=r.theme||{},o=(0,a.deepCopy)(t,e.props,{theme:s});let i=(0,n.genClassRules)(e.styled,o,t);e.props.className&&(i+=" "+e.props.className),l.className=i}e.props&&e.props.dangerouslySetInnerHTML&&(l.innerHTML=e.props.dangerouslySetInnerHTML.__html),i&&i.forEach(e=>{s(e,l,r)}),o&&o.before?t.insertBefore(l,o.before):t.appendChild(l)}else if("function"==typeof e){const a=e({...e.props,children:i,styled:e.styled});s(a,t,r),i=null}else if(e.element&&"function"==typeof e.element){const a=e.element({...e.props,children:i});e.styled&&(a.styled=[...e.styled,...a.styled]),s(a,t,r),i=null}};t.render=s;t.useRef=e=>{const t={current:e,setCurrent:e=>{t.current=e}};return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(2);var n=async({listener:e,messages:t})=>{let r=[];t&&t.forEach(e=>{const t=(0,a.deepCopy)(e);t.created_time||(t.created_time=Date.now()),r.push(t)});return[e=>r.push((0,a.deepCopy)(e)),async()=>(0,a.deepCopy)(r),(e,t,...r)=>({from:e,text:t,...r,created_time:Date.now()}),void 0,async t=>{"#reset"===t?(e({type:"resetMessages"}),r=[]):e({type:"unknownCommand"})}]};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=async function(){const e=await Promise.resolve().then(()=>s(r(20))),t=await Promise.resolve().then(()=>s(r(6))),a=await Promise.resolve().then(()=>s(r(33)));return{Messenger:e.default,Message:t.default,FAButton:a.default}},Object.defineProperty(t,"Interface",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"setup",{enumerable:!0,get:function(){return a.setup}});var a=s(r(0));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=a?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(30))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(5))&&a.__esModule?a:{default:a};let s;var o=async()=>(s||(s=await(0,n.default)()),s);t.default=o},function(e,t,r){"use strict";let a;Object.defineProperty(t,"__esModule",{value:!0}),t.genClassRules=t.genStyle=void 0;const n="abcdefghijklmnopqrstuvwxyz",s=(e,t)=>{let r="";return e&&Array.isArray(e.styles)&&e.styles.forEach((a,n)=>{r+=a,e.parameters[n]&&(r+=e.parameters[n](t))}),r};t.genStyle=s;const o=(e,t)=>{const r=e;if(0===t.trim().length)return;let a=0,n=t.indexOf("@",a);for(;n>-1;){r.main+=t.substring(a,n).trim();const e=t.indexOf("@",n+1);a=-1!==e?e:t.lastIndexOf("}")+1,r.medias.push(t.substring(n,a)),n=e}r.main+=t.substring(a).trim()};t.genClassRules=(e,t,r={})=>{const i=(()=>{if(!a){const e=document.createElement("style");e.type="text/css",e.title="MainCSS",document.getElementsByTagName("head")[0].appendChild(e),a=e.sheet}return a})();let l="";return e.forEach(e=>{const a=r.selector||[...Array(5)].map(()=>n[~~(Math.random()*n.length)]).join(""),u={main:"",sub:[],medias:[]};if(((e,t,r)=>{const a=s(t,r);let n=0,i=a.indexOf("&",n);if(-1===i)o(e,a);else{for(;i>-1;)o(e,a.substring(n,i)),n=a.indexOf("}",i+2),e.sub.push(a.substring(i+1,n+1)),n+=1,i=a.indexOf("&",n);o(e,a.substring(n))}})(u,e,t),u.main&&u.main.length>0){let e=`.${a} { ${u.main} }`;i.insertRule(e),u.sub.forEach(t=>{e=`.${a}${t}`,i.insertRule(e)}),u.medias.forEach(e=>{i.insertRule(e)}),l+=a+" "}}),l.trim()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"genStyle",{enumerable:!0,get:function(){return n.genStyle}}),t.styled=void 0;var a=r(3),n=r(8);t.styled=(e,t,...r)=>(n,...s)=>{const o=e,i=(0,a.createElement)(o,t,...r);return i.styled?i.styled.unshift({styles:n,parameters:s}):i.styled=[{styles:n,parameters:s}],i}},function(e,t,r){"use strict";let a;Object.defineProperty(t,"__esModule",{value:!0}),t.useSelector=t.default=void 0;t.default=e=>(a={...e},a);t.useSelector=e=>e({...a})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(r(12)),n=s(r(19));function s(e){return e&&e.__esModule?e:{default:e}}var o=async(e={},t,r=document.body)=>{let s,o;try{const e=await fetch("./config.json");s=await e.json()}catch(e){}s||(s={});const i={...s,...e};if(i.messenger||(i.messenger={}),i.dataset){if(i.dataset.src)try{const e=await fetch(i.dataset.src);o=await e.json()}catch(e){}else({dataset:o}=i);o&&o.intents&&(o=o.intents)}else if(i.intents)if(i.intents.src)try{const e=await fetch(i.intents.src);o=await e.json()}catch(e){}else o=i.intents;const l=o?"dialog":void 0,u=await(0,a.default)(l);return(0,n.default)({state:i,messaging:u,root:r,messageListener:t,dataset:o,messages:i.messages})};t.default=o},function(e,t,r){"use strict";function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=async e=>{let t;if("dialog"===e)try{t=(await Promise.resolve().then(()=>n(r(13)))).default}catch(e){}if(!t)try{t=(await Promise.resolve().then(()=>n(r(18)))).default}catch(e){}return t};t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(14)),n=r(2),s=o(r(4));function o(e){return e&&e.__esModule?e:{default:e}}var i=async({listener:e,dataset:t,messages:r,contexts:o={}})=>{const[i,l,u,,d]=await(0,s.default)({listener:e,messages:r}),c=(0,n.deepCopy)(o),[f,p]=(0,a.default)(t,c);return[l,u,async t=>{i(t),await e({type:"newMessage",message:(0,n.deepCopy)(t)});const r=f(t),{response:a,quick_replies:s}=p(r),o=[];a.forEach((e,t)=>{const r=u("bot",e);t===a.length-1&&s&&(r.quick_replies=(0,n.deepCopy)(s)),i(r),o.push((0,n.deepCopy)(r))}),await e({type:"newMessage",message:o})},async e=>("#reset"===e&&Object.keys(c).forEach(e=>{delete c[e]}),d(e))]};t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(15))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(2);const n=(e,t={})=>({text:e.replace(/<<\s*([\w.]+)\s*=\s*(.+?)\s*>>/g,(e,r,a)=>(t[r]=a,"")),set:t}),s=e=>{let t;if(Array.isArray(e))t=e.map(e=>s(e));else if(e.text)t=e,Array.isArray(t.text)?t.text.forEach((e,r)=>{({text:t.text[r],set:t.set}=n(e,t.set))}):({text:t.text,set:t.set}=n(t.text,t.set)),0===Object.keys(t.set).length&&delete t.set;else{const{text:r,set:a}=n(e);t=Object.keys(a).length?{text:r,set:a}:r}return t},o=(e,t)=>{let r=e;return"*"===r&&([{value:r}]=t),r},i=e=>e.replace(/https?:\/\/\S*|\[(.*?)\]\((.*?)\)/gi,(e,t,r)=>{let a=e,n=a;return t&&(n=t,a=r),a.match(/\.(jpg|jpeg|gif|png)$/gi)?`<a href="${a}" target="_blank" rel="noopener noreferrer"><img src="${a}" alt="${n}" /></a>`:`<a href="${a}" target="_blank" rel="noopener noreferrer">${n}</a>`}),l=(e,t)=>{const r=[];let a,n=t;var s;return"*"===e?(r.push({type:"any",value:n,offset:0}),a=!0):e.indexOf("{{")>-1?e.replace(/{{\s*([\w.]*)\s*(=?)\s*@(any|email)\s*}}/g,(e,t,s,o,i)=>{i>0&&(n=void 0),("any"===o||"email"===o&&n&&n.match(/\b(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})\b/gi))&&(a=!0),a&&r.push({name:t,type:o,value:n,offset:i})}):(s=t,a=e.toLowerCase()===s.toLowerCase(),a&&r.push({type:"all",value:n,offset:0})),[a,r]};var u=(e,t)=>{let r;const n=t||{},u=({matchs:e,context:t={},userId:r},s=i)=>{let l,u,d,c=(0,a.deepCopy)(t);e&&e.length>1&&e.forEach(e=>{e.any||l||e.intent.topic!==c.topic||(l=e)}),!l&&e[0]&&([l]=e);let f,p=[];if(l){const{intent:e}=l;({entities:f}=l),e.set&&(c={...c,...e.set}),({output:u}=e),Array.isArray(u)&&u.forEach(e=>{if("condition"===e.type){let t;u=null,e.children.forEach(e=>{u&&t||e.value!==c[e.name]&&e.value||(({value:t}=e),u=e)})}});let t=u;u.text&&({text:t}=u),u.quick_replies&&(d=u.quick_replies),f.forEach(e=>{e.name&&(c[e.name]=e.value)}),Array.isArray(t)||(t=[t]),t.forEach(e=>{let t=e;t.text&&(t=t.text);const r=((e,t,r)=>{const a={};return{response:e.replace(/{{\s*([\w.]+)\s*(=\s*(.+?)\s*)*}}/g,(e,n,s,i)=>{const l=n.trim();return s&&(a[l]=o(i,r)),a[l]||t[l]||""}),set:a}})(t,c,f);p.push(r.response),Object.keys(r.set).length&&(c={...c,...r.set}),u.set&&Object.keys(u.set).forEach(e=>{c[e]=o(u.set[e],f)})})}else p.push("I don't understand");return n[r]=(0,a.deepCopy)(c),p=p.map(e=>s(e)),u={response:p,context:c,entities:f},d&&(u.quick_replies=d),u};if(e&&Array.isArray(e)&&e.length){const t=e.map(e=>(e=>{const t=(0,a.deepCopy)(e),{output:r}=t;return Array.isArray(r)&&r.length&&"condition"===r[0].type?t.output=t.output.map(e=>({...e,children:s(e.children)})):t.output=s(r),t})(e));let o,i;r=[(e,r="user")=>{const a=n[r]||{},s=[];return t.forEach(t=>{let r=Array.isArray(t.input)?t.input.findIndex(t=>([o,i]=l(t,e.text),o)):-1;-1===r&&"string"==typeof t.input&&([o,i]=l(t.input,e.text),r=o?0:-1),r>=0&&(o={intent:t,inputIndex:r,entities:i},1===i.length&&"any"===i[0].type&&(o.any=!0),s.push(o))}),{matchs:s.sort((e,t)=>(e.intent.order||0)-(t.intent.order||0)),context:a,userId:r}},u]}return r};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.friendlyDate=void 0;t.friendlyDate=(e,t)=>{let r=.001*(Date.now()-e);const a=Math.floor(r/31557600);r-=31557600*a;const n=Math.floor(r/2629800);r-=2629800*n;const s=Math.floor(r/86400);if(r-=86400*s,n||a||s>6)return new Date(e).toLocaleString(t);if(s>1)return new Date(e).toLocaleString(t);if(1===s)return"yesterday";const o=Math.floor(r/3600);if(r-=3600*o,o>1)return o+" hours ago";if(1===o)return o+" hour ago";const i=Math.floor(r/60);return r-=60*i,i>1?i+" mins ago":1===i?i+" min ago":r>10?r+" secs ago":"just now"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(...e)=>{const t=[],r=(...e)=>{let a;return e.forEach(e=>{Array.isArray(e)?(a||(a=[]),e.forEach(e=>{a.push(r(e))})):e instanceof Date?a=new Date(e.getTime()):e&&"object"==typeof e?(t.push(e),a||(a={}),t.push(e),Object.keys(e).forEach(n=>{const s=e[n];-1!==t.indexOf(s)?a[n]=s:a[n]=r(a[n],s)}),t.pop()):null!=e&&(a=e)}),a};return r(...e)};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=r(2),s=(a=r(4))&&a.__esModule?a:{default:a};var o=async({listener:e,messages:t})=>{const[r,a,o,,i]=await(0,s.default)({listener:e,messages:t});return[a,o,async t=>{r(t),await e({type:"newMessage",message:(0,n.deepCopy)(t)});const a=o("bot","You say : "+t.text);r(a),await e({type:"newMessage",message:a})},i]};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(5),n=d(r(7)),s=r(3),o=r(9),i=d(r(35)),l=d(r(10)),u=d(r(36));function d(e){return e&&e.__esModule?e:{default:e}}var c=async({state:e,messaging:t,root:r,messageListener:d=(({type:e,message:t})=>({type:e,message:t})),dataset:c,messages:f})=>{(0,a.setup)({html:s.html,createElement:s.createElement,styled:o.styled});const p=await(0,n.default)(),m=(0,l.default)(e),y=m.messenger.personas||{},h=e=>{let{avatar:t}=e;return t||(t=y[e.from]),t};let g;const v=async({type:t,message:r})=>{const a=document.getElementsByClassName("ziiir-conversation")[0],n=(t,r,n)=>{const o=(0,s.createElement)(p.Message,{key:t.created_time,createdtime:t.created_time,avatar:h(t),fromUser:"user"===t.from,onAction:g,hideDate:e.messenger.hideDate,hasPrevious:r,hasNext:n,quickReplies:t.quick_replies},t.text);let i;for(const e of a.children){const r=parseInt(e.getAttribute("created-time"),10);if(t.created_time<r){i={before:e};break}}(0,s.render)(o,a,{...m},i)};if("newMessage"===t)Array.isArray(r)?r.forEach((e,t,r)=>{const a=r[t-1],s=!!a&&a.from===e.from&&e.created_time-a.created_time<2e3,o=r[t+1],i=!!o&&o.from===e.from&&o.created_time-e.created_time<2e3;n(e,s,i)}):n(r),a.scrollTop=a.scrollHeight;else if("resetMessages"===t)for(;a.firstChild;)a.firstChild.remove();d({type:t,message:r})},[x,b,_,w]=await t({listener:v,messages:f,dataset:c,contexts:e.contexts});let M=await x();M=M.map(e=>{const t=e;return t.avatar=h(t),t}),g=(e,t)=>{const r=b("user",t);_(r)};const O=await(0,u.default)(M,e=>{if("#"===e.charAt(0))w(e);else{const t=b("user",e);_(t)}},g,e.messenger.hideDate);return(0,s.render)(O,r,{...m}),(0,i.default)(e.theme,"ziiircom-messenger-frame"),[m,x,b,_,w,v]};t.default=c},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(21))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(r(0)),n=c(r(22)),s=c(r(24)),o=c(r(26)),i=c(r(28)),l=c(r(6)),u=c(r(31)),d=c(r(1));function c(e){return e&&e.__esModule?e:{default:e}}const f=a.default.styled(n.default)`
  color: ${e=>e.theme.palette.onSurface};
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
`;f.defaultProps={theme:d.default};const p=a.default.styled(s.default)`
  border-radius: 12px 12px 0 0;
`,m=a.default.styled(i.default)`
  border-radius: 0 0 12px 12px;
`,y=a.default.styled(o.default)`
  transform-origin: center bottom 0px;
  scroll-behavior: smooth;
`,h=a.default.styled(u.default)`
  width: 100%;
  padding: 4px;
  margin: 0;
  border: none;
  outline:none;
`,g=a.default.createElement;var v=({isExpanded:e=!0,input:t={display:!0},header:r={},messages:a=[],onMessage:n,onClick:s,onAction:o,hideDate:i=!1})=>{const u=g(y,{isExpanded:e,className:"ziiir-conversation"},a.sort((e,t)=>e.createdtime>t.createdtime).map((e,t,r)=>{const a=r[t-1],n=!!a&&a.from===e.from&&e.created_time-a.created_time<2e3,s=r[t+1],u=!!s&&s.from===e.from&&s.created_time-e.created_time<2e3;return((e,t,r,a,n,s,o,i,u)=>g(l.default,{key:e,createdtime:e,avatar:a,fromUser:r,onAction:n,hideDate:s,hasPrevious:o,hasNext:i,quickReplies:u},t))(e.created_time,e.text,"user"===e.from,e.avatar,o,i,n,u,e.quick_replies)}));let d="ziiir.com";const c=e=>{const t=e.target.value||"";"Enter"===e.key&&t.length>0&&(n&&n(t),e.target.value="")};return t.display&&(d=g(h,{className:"ziir-input",onKeyUp:c,placeholder:t.placeholder||"Your message"})),g(f,{className:e?"isexpanded":void 0,onClick:s},g(p,null,r.text||""),u,g(m,null,d))};t.default=v},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(23))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(r(0)),n=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=a.default.styled("div")`
  padding: 1.2em;
  background: ${e=>e.theme.palette.background};
  color: #292c45;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  overflow-wrap: break-word;
`;o.defaultProps={theme:n.default};var i=o;t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(25))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(r(0)),n=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=a.default.styled("header")`
  color: ${e=>e.theme.palette.onPrimary};
  font-size: 1.25em;
  background: ${e=>e.theme.palette.primary};
  min-height: 64px;
  padding-top: 1.2em;
  padding-left: 1.2em;
  padding-right: 0.3em;
  display: flex;
`;o.defaultProps={theme:n.default};var i=o;t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(27))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(r(0)),n=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=a.default.styled("div")`
  padding: 0px;
  background: ${e=>e.theme.palette.background};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  & > div {
  }
`;o.defaultProps={theme:n.default};var i=o;t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(29))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(r(0)),n=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=a.default.styled("div")`
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
`;o.defaultProps={theme:n.default};var i=o;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(2),n=o(r(0)),s=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const i=n.default.styled("div")`
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
    width: 100%;
    animation: 0.3s cubic-bezier(0, 0, 0.2, 1) 0s 1 normal both running ${e=>e.fromUser?"enterMessageFromUser":"enterMessageFromBot"};
  }
  & > div > p {
    background-color: ${e=>e.fromUser?e.theme.palette.surface:e.theme.palette.secondary};
    color: ${e=>e.fromUser?e.theme.palette.onSurface:e.theme.palette.onSecondary};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
    margin-bottom: 4px;
    padding: 16px;
    border-radius: ${e=>e.fromUser?`12px ${e.hasPrevious?"4px":"12px"} ${e.hasNext?"4px":"12px 12px"}`:`${e.hasPrevious?"4px":"12px"} 12px 12px ${e.hasNext?"4px":"12px"}`};
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
    border: ${e=>e.theme.palette.button&&e.theme.palette.button.border?e.theme.palette.button.border:"none"};
    border-radius: 4px;
    height: 24px;
    margin: 8px 4px;
    background: ${e=>e.theme.palette.button&&e.theme.palette.button.background?e.theme.palette.button.background:e.theme.palette.surface};
    color: ${e=>e.theme.palette.button&&e.theme.palette.button.color?e.theme.palette.button.color:e.theme.palette.onSurface};
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
`;i.defaultProps={theme:s.default};const l=n.default.styled("span")`
  z-index: 3;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-top: auto;
  margin-right: 8px;
`,u=n.default.styled("img")`
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
`,d=n.default.createElement;var c=({createdtime:e,avatar:t,fromUser:r=!0,children:n,onAction:s,hideDate:o=!1,hasPrevious:c=!1,hasNext:f=!1,quickReplies:p})=>{const m=(0,a.friendlyDate)(e);let y=n,h=n;Array.isArray(y)&&([y]=n),"string"==typeof y&&(y.indexOf("/>")>0||y.indexOf("</")>0||y.indexOf("/&gt;")>0||y.indexOf("&lt;/")>0)?(y={__html:y},h=void 0):y=void 0;return d(i,{fromUser:r,"created-time":e,hasPrevious:c,hasNext:f},t&&(f?d(l):d(u,{src:t.src,alt:t.name})),d("div",{onClick:e=>{"BUTTON"===e.target.tagName&&s(e.target.tagName,e.target.textContent)}},d("p",{dangerouslySetInnerHTML:y},h),!o&&!f&&d("span",null,m),p&&d("div",{},p.map(e=>d("button",{key:e.title},e.title)))))};t.default=c},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(32))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(r(0)),n=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=a.default.styled("input")`
  font-size: 1em;
  margin: 0.6em;
  padding: 0.3em 1em;
  border-radius: 3px;

  color: ${e=>e.theme.palette.secondary};
  border: 2px solid ${e=>e.theme.palette.secondary};
`;o.defaultProps={theme:n.default};var i=o;t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(34))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(r(0)),n=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const o=a.default.styled("div")`
width:48px;
height:48px;
border-radius:100%;
color: ${e=>e.theme.palette.onSecondary};
font-size: 1.25em;
line-height: 64px;
background: ${e=>e.theme.palette.secondary};
background-image: ${e=>e.icon?`url("${e.icon}")`:`url("${((e,t="ffffff")=>{let r=e;"#"===r[0]&&(r=r.substring(1));let a=t;return"#"===a[0]&&(a=a.substring(1)),`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='64' height='64'%0AviewBox='0 0 172 172'%0Astyle=' fill:%23000000;'%3E%3Cg fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'%3E%3Cpath d='M0,172v-172h172v172z' fill='none'%3E%3C/path%3E%3Cg%3E%3Cpath d='M138.64141,105.21563c0,6.08047 -4.90469,10.98516 -10.98516,10.98516h-83.3125c-6.08047,0 -10.98516,-4.90469 -10.98516,-10.98516v-48.50937c0,-6.08047 4.90469,-10.98516 10.98516,-10.98516h83.3125c6.08047,0 10.98516,4.90469 10.98516,10.98516z' fill='%23${a}'%3E%3C/path%3E%3Cpath d='M113.21094,130.98203c-0.87344,0.87344 -2.25078,0.87344 -3.12422,0l-10.51484,-14.88203c-0.87344,-0.87344 -0.87344,-2.25078 0,-3.12422h24.1875c0.87344,0.87344 0.87344,2.25078 0,3.12422z' fill='%23${a}'%3E%3C/path%3E%3Cg fill='%23${r}'%3E%3Cpath d='M122.58359,64.36562c0,2.21719 -1.78047,3.99766 -3.99766,3.99766h-65.44063c-2.21719,0 -3.99766,-1.78047 -3.99766,-3.99766v0c0,-2.21719 1.78047,-3.99766 3.99766,-3.99766h65.47422c2.18359,0.03359 3.96406,1.81406 3.96406,3.99766zM122.58359,80.35625c0,2.21719 -1.78047,3.99766 -3.99766,3.99766h-65.44063c-2.21719,0 -3.99766,-1.78047 -3.99766,-3.99766v0c0,-2.21719 1.78047,-3.99766 3.99766,-3.99766h65.47422c2.18359,0 3.96406,1.78047 3.96406,3.99766zM122.58359,96.31328c0,2.21719 -1.78047,3.99766 -3.99766,3.99766h-65.44063c-2.21719,0 -3.99766,-1.78047 -3.99766,-3.99766v0c0,-2.21719 1.78047,-3.99766 3.99766,-3.99766h65.47422c2.18359,0 3.96406,1.78047 3.96406,3.99766z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A`})(e.theme.palette.secondary,e.theme.palette.bubbleColor)}")`};
background-repeat:no-repeat;
background-position:50%;
background-size:cover;
box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12);
cursor:pointer;
`;o.defaultProps={theme:n.default};var i=o;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(e={},t)=>{const{fonts:r={}}=e,{text:a={},heading:n={}}=r,s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href",a.url||"https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"),s.setAttribute("type","text/css");const o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href",n.url||"https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"),o.setAttribute("type","text/css");const[i]=document.getElementsByTagName("head");i.appendChild(s),i.appendChild(o);const[l]=document.getElementsByClassName(t);l.style.cssText=`font-family: ${a.name&&a.name+", "||""}sans-serif;`};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(7))&&a.__esModule?a:{default:a},s=r(9),o=r(3),i=r(10);var l=async(e,t,r,a)=>{const[l,u,d]=(0,i.useSelector)(e=>[e.messenger.isOpen,e.messenger.header,e.messenger.input]);let c=l;const f=(0,o.useRef)(null),p=()=>{c=!c;const e=f.current;e.classList.toggle("isclosed"),e.classList.toggle("isopen")},m=await(0,n.default)(),y=(0,s.styled)(m.Messenger,{messages:e,onMessage:e=>{t(e)},onClick:e=>{e.stopPropagation()},onAction:r,header:u,input:d,hideDate:a})`
    width: 100%;
    max-width: 600px;
    height: 80%;
  `,h=(0,s.styled)("div",{ref:f,className:"ziiircom-messenger is"+(c?"open":"closed"),onClick:p},y)`
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
  `,g=(0,s.styled)(m.FAButton,{className:"ziiircom-messenger-fab",onClick:p})`
    position: absolute;
    right: 32px;
    bottom: 32px;
    z-index: 9;
  `;return(0,s.styled)("div",{className:"ziiircom-messenger-frame"},h,g)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  `};t.default=l}]);
//# sourceMappingURL=main.js.map