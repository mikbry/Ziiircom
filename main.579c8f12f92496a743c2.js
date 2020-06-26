!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setup=void 0;const n={};t.setup=({html:e,styled:t,createElement:r})=>(n.html||(n.html=e,n.styled=t,n.createElement=r),n);var a=n;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={palette:{primary:"palevioletred",secondary:"#70DBB8",background:"smokewhite",surface:"papayawhip",onPrimary:"white",onSecondary:"white",onBackground:"dark",onSurface:"gray",disabledText:"lightGrey"},fonts:[],font:{size:"16px",style:"normal",weight:"400"},spacing:8,radius:12,smallRadius:4,shadow:"rgba(0,0,0,0.2) 0px 2px 4px -1px,rgba(0,0,0,0.14) 0px 4px 5px 0px,rgba(0,0,0,0.12) 0px 1px 10px 0px",messenger:{width:"400px",height:"600px"}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"friendlyDate",{enumerable:!0,get:function(){return a.friendlyDate}}),Object.defineProperty(t,"deepCopy",{enumerable:!0,get:function(){return o.default}});var n,a=r(16),o=(n=r(17))&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRef=t.render=t.createElement=t.html=void 0;var n=r(2),a=r(8);t.html=()=>{};t.createElement=(e,t,...r)=>{let a;e.element?(a=(0,n.deepCopy)({},e),a.props=(0,n.deepCopy)({},a.props,t)):(a={props:{}},a.element=e,t&&(a.props=t));let o=r;return 1===r.length&&Array.isArray(r[0])&&([o]=r),a.children=o.filter(e=>void 0!==e),a};const o=(e,t,r={},s)=>{if(!e)return;if("string"==typeof e){return void(t.innerText=e)}let{children:i}=e;if("string"==typeof e.element){const l=document.createElement(e.element);if(e.props&&Object.keys(e.props).forEach(t=>{const r=e.props[t],n=typeof r,a="string"===n||"number"===n||"boolean"===n;"ref"===t?r.setCurrent(l):"className"===t?l.className=r:"function"===n?"on"===t.substring(0,2)&&l.addEventListener(t.substring(2).toLowerCase(),r):a&&l.setAttribute(t,r)}),e.styled){const t={...e.defaultProps},o=r.theme||{},s=(0,n.deepCopy)(t,e.props,{theme:o});let i=(0,a.genClassRules)(e.styled,s,t);e.props.className&&(i+=" "+e.props.className),l.className=i}i&&i.forEach(e=>{o(e,l,r)}),s&&s.before?t.insertBefore(l,s.before):t.appendChild(l)}else if("function"==typeof e){const n=e({...e.props,children:i,styled:e.styled});o(n,t,r),i=null}else if(e.element&&"function"==typeof e.element){const n=e.element({...e.props,children:i});e.styled&&(n.styled=[...e.styled,...n.styled]),o(n,t,r),i=null}};t.render=o;t.useRef=e=>{const t={current:e,setCurrent:e=>{t.current=e}};return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);var a=async e=>{let t=[];return[e=>t.push((0,n.deepCopy)(e)),async()=>(0,n.deepCopy)(t),(e,t)=>({from:e,text:t,created_time:Date.now()}),void 0,async r=>{"#reset"===r?(e({type:"resetMessages"}),t=[]):e({type:"unknownCommand"})}]};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=async function(){const e=await Promise.resolve().then(()=>o(r(20))),t=await Promise.resolve().then(()=>o(r(6))),n=await Promise.resolve().then(()=>o(r(33)));return{Messenger:e.default,Message:t.default,FAButton:n.default}},Object.defineProperty(t,"Interface",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"setup",{enumerable:!0,get:function(){return n.setup}});var n=o(r(0));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(30))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(5))&&n.__esModule?n:{default:n};let o;var s=async()=>(o||(o=await(0,a.default)()),o);t.default=s},function(e,t,r){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.genClassRules=t.genStyle=void 0;const a="abcdefghijklmnopqrstuvwxyz",o=(e,t)=>{let r="";return e&&Array.isArray(e.styles)&&e.styles.forEach((n,a)=>{r+=n,e.parameters[a]&&(r+=e.parameters[a](t))}),r};t.genStyle=o;const s=(e,t)=>{const r=e;if(0===t.trim().length)return;let n=0,a=t.indexOf("@",n);for(;a>-1;){r.main+=t.substring(n,a).trim();const e=t.indexOf("@",a+1);n=-1!==e?e:t.lastIndexOf("}")+1,r.medias.push(t.substring(a,n)),a=e}r.main+=t.substring(n).trim()};t.genClassRules=(e,t,r={})=>{const i=(()=>{if(!n){const e=document.createElement("style");e.type="text/css",e.title="MainCSS",document.getElementsByTagName("head")[0].appendChild(e),n=e.sheet}return n})();let l="";return e.forEach(e=>{const n=r.selector||[...Array(5)].map(()=>a[~~(Math.random()*a.length)]).join(""),u={main:"",sub:[],medias:[]};if(((e,t,r)=>{const n=o(t,r);let a=0,i=n.indexOf("&",a);if(-1===i)s(e,n);else{for(;i>-1;)s(e,n.substring(a,i)),a=n.indexOf("}",i+2),e.sub.push(n.substring(i+1,a+1)),a+=1,i=n.indexOf("&",a);s(e,n.substring(a))}})(u,e,t),u.main&&u.main.length>0){let e=`.${n} { ${u.main} }`;i.insertRule(e),u.sub.forEach(t=>{e=`.${n}${t}`,i.insertRule(e)}),u.medias.forEach(e=>{i.insertRule(e)}),l+=n+" "}}),l.trim()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"genStyle",{enumerable:!0,get:function(){return a.genStyle}}),t.styled=void 0;var n=r(3),a=r(8);t.styled=(e,t,...r)=>(a,...o)=>{const s=e,i=(0,n.createElement)(s,t,...r);return i.styled?i.styled.unshift({styles:a,parameters:o}):i.styled=[{styles:a,parameters:o}],i}},function(e,t,r){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.useSelector=t.default=void 0;t.default=e=>(n={...e},n);t.useSelector=e=>e({...n})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.defaultClient=void 0;var n=o(r(12)),a=o(r(19));function o(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}t.defaultClient=async(e,t,o={messenger:{}})=>{let i,l;try{i=await Promise.resolve().then(()=>function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(r(36))),i=i.default}catch(e){}i||(i={});const u={...i,...o};if(u.intents)if(u.intents.src)try{const e=await fetch(u.intents.src);l=await e.json()}catch(e){}else l=u.intents;const d=l?"dialog":void 0,f=await(0,n.default)(d);return(0,a.default)({state:u,messaging:f,root:e,messageListener:t,dataset:l})};var i=a.default;t.default=i},function(e,t,r){"use strict";function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=a?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=async e=>{let t;if("dialog"===e)try{t=(await Promise.resolve().then(()=>a(r(13)))).default}catch(e){}if(!t)try{t=(await Promise.resolve().then(()=>a(r(18)))).default}catch(e){}return t};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(14)),a=r(2),o=s(r(4));function s(e){return e&&e.__esModule?e:{default:e}}var i=async(e,t)=>{const[r,s,i,,l]=await(0,o.default)(e),[u,d]=(0,n.default)(t);return[s,i,async t=>{r(t),await e({type:"newMessage",message:(0,a.deepCopy)(t)});const n=u(t),o=d(n),s=i("bot",o);r(s),await e({type:"newMessage",message:s})},l]};t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(15))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=(e,t)=>e.toLowerCase()===t.toLowerCase();var a=(e,t)=>{let r;const a=t||{},o=({matchs:e,context:t,userId:r})=>{let n,o,s=t;if(e&&e.length>1&&e.forEach(e=>{e.any||n||(n=e)}),!n&&e[0]&&([n]=e),n){const{intent:e}=n;e.set&&(s={...s,...e.set});let{output:t}=e;Array.isArray(t)&&t.forEach(e=>{if("condition"===e.type){let r;t=null,e.children.forEach(e=>{t&&r||e.value!==s[e.name]&&e.value||(({value:r}=e),t=e.text)})}else t=e}),o=((e,t)=>e.replace(/{{\s*([\w.]+)\s*}}/g,(e,r)=>t[r]||""))(t,s)}else o="I don't understand";return a[r]=s,o};if(e&&Array.isArray(e)&&e.length){r=[(t,r="user")=>{const o=a[r]||{},s=[];return e.forEach(e=>{let r=!1,a=Array.isArray(e.input)?e.input.findIndex(e=>"*"===e?(r=!0,!0):n(e,t.text)):-1;-1===a&&"string"==typeof e.input&&("*"===e.input?(r=!0,a=0):n(e.input,t.text)&&(a=0)),a>=0&&s.push({intent:e,any:r,inputIndex:a})}),{matchs:s.sort((e,t)=>(e.intent.order||0)-(t.intent.order||0)),context:o,userId:r}},o]}return r};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.friendlyDate=void 0;t.friendlyDate=(e,t)=>{let r=.001*(Date.now()-e);const n=Math.floor(r/31557600);r-=31557600*n;const a=Math.floor(r/2629800);r-=2629800*a;const o=Math.floor(r/86400);if(r-=86400*o,a||n||o>6)return new Date(e).toLocaleString(t);if(o>1)return new Date(e).toLocaleString(t);if(1===o)return"yesterday";const s=Math.floor(r/3600);if(r-=3600*s,s>1)return s+" hours ago";if(1===s)return s+" hour ago";const i=Math.floor(r/60);return r-=60*i,i>1?i+" mins ago":1===i?i+" min ago":r>10?r+" secs ago":"just now"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(...e)=>{const t=[],r=(...e)=>{let n;return e.forEach(e=>{Array.isArray(e)?(n||(n=[]),e.forEach(e=>{n.push(r(e))})):e instanceof Date?n=new Date(e.getTime()):e&&"object"==typeof e?(t.push(e),n||(n={}),t.push(e),Object.keys(e).forEach(a=>{const o=e[a];-1!==t.indexOf(o)?n[a]=o:n[a]=r(n[a],o)}),t.pop()):null!=e&&(n=e)}),n};return r(...e)};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(2),o=(n=r(4))&&n.__esModule?n:{default:n};var s=async e=>{const[t,r,n,,s]=await(0,o.default)(e);return[r,n,async r=>{t(r),await e({type:"newMessage",message:(0,a.deepCopy)(r)});const o=n("bot","You say : "+r.text);t(o),await e({type:"newMessage",message:o})},s]};t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(5),a=u(r(7)),o=r(3),s=r(9),i=u(r(10)),l=u(r(35));function u(e){return e&&e.__esModule?e:{default:e}}var d=async({state:e,messaging:t,root:r,messageListener:u=(({type:e,message:t})=>({type:e,message:t})),dataset:d})=>{(0,n.setup)({html:o.html,createElement:o.createElement,styled:s.styled});const f=await(0,a.default)(),c=(0,i.default)(e),p=async({type:e,message:t})=>{const r=document.getElementsByClassName("ziiir-conversation")[0];if("newMessage"===e){const e=(0,o.createElement)(f.Message,{key:t.created_time,createdtime:t.created_time,avatar:t.avatar,fromUser:"user"===t.from},t.text);let n;for(const e of r.children){const r=parseInt(e.getAttribute("created-time"),10);if(t.created_time<r){n={before:e};break}}(0,o.render)(e,r,void 0,n),r.scrollTop=r.scrollHeight}else if("resetMessages"===e)for(;r.firstChild;)r.firstChild.remove();u({type:e,message:t})},[m,y,g,v]=await t(p,d),h=await m(),b=await(0,l.default)(h,e=>{if("#"===e.charAt(0))v(e);else{const t=y("user",e);g(t)}});return(0,o.render)(b,r,{...c}),[c,m,y,g,v,p]};t.default=d},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(21))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(0)),a=f(r(22)),o=f(r(24)),s=f(r(26)),i=f(r(28)),l=f(r(6)),u=f(r(31)),d=f(r(1));function f(e){return e&&e.__esModule?e:{default:e}}const c=n.default.styled(a.default)`
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
`;c.defaultProps={theme:d.default};const p=n.default.styled(o.default)`
  border-radius: 12px 12px 0 0;
`,m=n.default.styled(i.default)`
  border-radius: 0 0 12px 12px;
`,y=n.default.styled(s.default)`
  transform-origin: center bottom 0px;
  scroll-behavior: smooth;
`,g=n.default.styled(u.default)`
  width: 100%;
  padding: 4px;
  margin: 0;
  border: none;
`,v=n.default.createElement;var h=({isExpanded:e=!0,input:t={display:!0},header:r={},messages:n=[],onMessage:a,onClick:o})=>{const s=v(y,{isExpanded:e,className:"ziiir-conversation"},n.sort((e,t)=>e.createdtime>t.createdtime).map(e=>((e,t,r,n)=>v(l.default,{key:e,createdtime:e,avatar:n,fromUser:r},t))(e.createdtime,e.text,"user"===e.from,e.avatar)));let i="ziiir.com";const u=e=>{const t=e.target.value||"";"Enter"===e.key&&t.length>0&&(a&&a(t),e.target.value="")};return t.display&&(i=v(g,{className:"ziir-input",onKeyUp:u,placeholder:t.placeholder||"Your message"})),v(c,{className:e?"isexpanded":void 0,onClick:o},v(p,null,r.text||""),s,v(m,null,i))};t.default=h},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(23))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("div")`
  padding: 1.2em;
  background: ${e=>e.theme.palette.background};
  color: #292c45;
  font-family: Roboto Condensed,sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  overflow-wrap: break-word;
`;s.defaultProps={theme:a.default};var i=s;t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(25))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("header")`
  color: ${e=>e.theme.palette.onPrimary};
  font-size: 1.25em;
  background: ${e=>e.theme.palette.primary};
  min-height: 64px;
  padding-top: 1.2em;
  padding-left: 1.2em;
  padding-right: 0.3em;
  display: flex;
`;s.defaultProps={theme:a.default};var i=s;t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(27))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("div")`
  padding: 0px;
  background: ${e=>e.theme.palette.background};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  & > div {
  }
`;s.defaultProps={theme:a.default};var i=s;t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(29))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("div")`
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
`;s.defaultProps={theme:a.default};var i=s;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2),a=s(r(0)),o=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const i=a.default.styled("div")`
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
`;i.defaultProps={theme:o.default};const l=a.default.styled("img")`
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
`,u=a.default.createElement;var d=({createdtime:e,avatar:t,fromUser:r=!0,children:a})=>{const o=(0,n.friendlyDate)(e);return u(i,{fromUser:r,"created-time":e},u("div",null,u("p",null,a),u("span",null,o)),t&&u(l,{src:t.src,alt:t.name}))};t.default=d},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(32))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("input")`
  font-size: 1em;
  margin: 0.6em;
  padding: 0.3em 1em;
  border-radius: 3px;

  color: ${e=>e.theme.palette.secondary};
  border: 2px solid ${e=>e.theme.palette.secondary};
`;s.defaultProps={theme:a.default};var i=s;t.default=i},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(34))&&n.__esModule?n:{default:n}).default;t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(0)),a=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=n.default.styled("div")`
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
`;s.defaultProps={theme:a.default};var i=s;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(7))&&n.__esModule?n:{default:n},o=r(9),s=r(3),i=r(10);var l=async(e,t)=>{const[r,n]=(0,i.useSelector)(e=>[e.messenger.isOpen,e.messenger.header]);let l=r;const u=(0,s.useRef)(null),d=()=>{l=!l;const e=u.current;e.classList.toggle("isclosed"),e.classList.toggle("isopen")},f=await(0,a.default)(),c=(0,o.styled)(f.Messenger,{onMessage:e=>{t(e)},onClick:e=>{e.stopPropagation()},header:n})`
    width: 100%;
    max-width: 600px;
    height: 80%;
  `,p=(0,o.styled)("div",{ref:u,className:"ziiircom-messenger is"+(l?"open":"closed"),onClick:d},c)`
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
  `,m=(0,o.styled)(f.FAButton,{className:"ziiircom-messenger-fab",onClick:d})`
    position: absolute;
    right: 32px;
    bottom: 32px;
    z-index: 9;
  `;return(0,o.styled)("div",{className:"ziiircom-messenger-frame"},p,m)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  `};t.default=l},function(e){e.exports=JSON.parse("{}")}]);
//# sourceMappingURL=main.579c8f12f92496a743c2.js.map