!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setup=void 0;const a={};t.setup=({html:e,styled:t,createElement:r})=>(a.html||(a.html=e,a.styled=t,a.createElement=r,Object.freeze(a)),a);var n=a;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={palette:{primary:"palevioletred",secondary:"#70DBB8",background:"smokewhite",surface:"papayawhip",onPrimary:"white",onSecondary:"white",onBackground:"dark",onSurface:"gray",disabledText:"lightGrey"},fonts:[],font:{size:"16px",style:"normal",weight:"400"},spacing:8,radius:12,smallRadius:4,shadow:"rgba(0,0,0,0.2) 0px 2px 4px -1px,rgba(0,0,0,0.14) 0px 4px 5px 0px,rgba(0,0,0,0.12) 0px 1px 10px 0px",messenger:{width:"400px",height:"600px"}};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"friendlyDate",{enumerable:!0,get:function(){return n.friendlyDate}}),Object.defineProperty(t,"deepCopy",{enumerable:!0,get:function(){return o.default}});var a,n=r(24),o=(a=r(25))&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRef=t.render=t.createElement=t.html=void 0;var a=r(2),n=r(7);t.html=()=>{};t.createElement=(e,t,...r)=>{let n;e.element?(n=(0,a.deepCopy)({},e),n.props=(0,a.deepCopy)({},n.props,t)):(n={props:{}},n.element=e,t&&(n.props=t));let o=r;return 1===r.length&&Array.isArray(r[0])&&([o]=r),n.children=o.filter(e=>void 0!==e),n};const o=(e,t,r={},s)=>{if(!e)return;if("string"==typeof e){return void(t.innerText=e)}let{children:i}=e;if("string"==typeof e.element){const l=document.createElement(e.element);if(e.props&&Object.keys(e.props).forEach(t=>{const r=e.props[t],a=typeof r,n="string"===a||"number"===a||"boolean"===a;"ref"===t?r.setCurrent(l):"className"===t?l.className=r:"function"===a?"on"===t.substring(0,2)&&l.addEventListener(t.substring(2).toLowerCase(),r):n&&l.setAttribute(t,r)}),e.styled){const t={...e.defaultProps},o=r.theme||{},s=(0,a.deepCopy)(t,e.props,{theme:o});let i=(0,n.genClassRules)(e.styled,s,t);e.props.className&&(i+=" "+e.props.className),l.className=i}i&&i.forEach(e=>{o(e,l,r)}),s&&s.before?t.insertBefore(l,s.before):t.appendChild(l)}else if("function"==typeof e){const a=e({...e.props,children:i,styled:e.styled});o(a,t,r),i=null}else if(e.element&&"function"==typeof e.element){const a=e.element({...e.props,children:i});e.styled&&(a.styled=[...e.styled,...a.styled]),o(a,t,r),i=null}};t.render=o;t.useRef=e=>{const t={current:e,setCurrent:e=>{t.current=e}};return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=async function(){const e=await Promise.resolve().then(()=>o(r(13))),t=await Promise.resolve().then(()=>o(r(5))),a=await Promise.resolve().then(()=>o(r(28)));return{Messenger:e.default,Message:t.default,FAButton:a.default}},Object.defineProperty(t,"Interface",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"setup",{enumerable:!0,get:function(){return a.setup}});var a=o(r(0));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=a?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(23))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(4))&&a.__esModule?a:{default:a};let o;var s=async()=>(o||(o=await(0,n.default)()),o);t.default=s},function(e,t,r){"use strict";let a;Object.defineProperty(t,"__esModule",{value:!0}),t.genClassRules=t.genStyle=void 0;const n="abcdefghijklmnopqrstuvwxyz",o=(e,t)=>{let r="";return e&&Array.isArray(e.styles)&&e.styles.forEach((a,n)=>{r+=a,e.parameters[n]&&(r+=e.parameters[n](t))}),r};t.genStyle=o;const s=(e,t)=>{const r=e;if(0===t.trim().length)return;let a=0,n=t.indexOf("@",a);for(;n>-1;){r.main+=t.substring(a,n).trim();const e=t.indexOf("@",n+1);a=-1!==e?e:t.lastIndexOf("}")+1,r.medias.push(t.substring(n,a)),n=e}r.main+=t.substring(a).trim()};t.genClassRules=(e,t,r={})=>{const i=(()=>{if(!a){const e=document.createElement("style");e.type="text/css",e.title="MainCSS",document.getElementsByTagName("head")[0].appendChild(e),a=e.sheet}return a})();let l="";return e.forEach(e=>{const a=r.selector||[...Array(5)].map(()=>n[~~(Math.random()*n.length)]).join(""),u={main:"",sub:[],medias:[]};if(((e,t,r)=>{const a=o(t,r);let n=0,i=a.indexOf("&",n);if(-1===i)s(e,a);else{for(;i>-1;)s(e,a.substring(n,i)),n=a.indexOf("}",i+2),e.sub.push(a.substring(i+1,n+1)),n+=1,i=a.indexOf("&",n);s(e,a.substring(n))}})(u,e,t),u.main&&u.main.length>0){let e=`.${a} { ${u.main} }`;i.insertRule(e),u.sub.forEach(t=>{e=`.${a}${t}`,i.insertRule(e)}),u.medias.forEach(e=>{i.insertRule(e)}),l+=a+" "}}),l.trim()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"genStyle",{enumerable:!0,get:function(){return n.genStyle}}),t.styled=void 0;var a=r(3),n=r(7);t.styled=(e,t,...r)=>(n,...o)=>{const s=e,i=(0,a.createElement)(s,t,...r);return i.styled?i.styled.unshift({styles:n,parameters:o}):i.styled=[{styles:n,parameters:o}],i}},function(e,t,r){"use strict";let a;Object.defineProperty(t,"__esModule",{value:!0}),t.useSelector=t.default=void 0;t.default=e=>(a={...e},a);t.useSelector=e=>e({...a})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(2);var n=e=>{const t=[];return[e=>t.push((0,a.deepCopy)(e)),async()=>(0,a.deepCopy)(t),(e,t)=>({from:e,text:t,created_time:Date.now()}),void 0,async t=>{e("#reset"===t?{type:"resetMessages"}:{type:"unknownCommand"})}]};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.defaultClient=void 0;var a,n=(a=r(12))&&a.__esModule?a:{default:a};function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var s=a?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(r,n,s):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}t.defaultClient=async(e,t,a={messenger:{}})=>{let o,i,l;try{o=await Promise.resolve().then(()=>s(r(31))),o=o.default}catch(e){}o||(o={});const u={...o,...a};if(u.intents)try{i=(await Promise.resolve().then(()=>s(r(32)))).default,l=u.intents}catch(e){}if(!i)try{i=(await Promise.resolve().then(()=>s(r(35)))).default}catch(e){}return(0,n.default)({state:u,messageHook:i,root:e,messageListener:t,dataset:l})};var i=n.default;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(4),n=u(r(6)),o=r(3),s=r(8),i=u(r(9)),l=u(r(30));function u(e){return e&&e.__esModule?e:{default:e}}var d=async({state:e,messageHook:t,root:r,messageListener:u=(({type:e,message:t})=>({type:e,message:t})),dataset:d})=>{(0,a.setup)({html:o.html,createElement:o.createElement,styled:s.styled});const f=await(0,n.default)(),c=(0,i.default)(e),p=async({type:e,message:t})=>{const r=document.getElementsByClassName("ziiir-conversation")[0];if("newMessage"===e){const e=(0,o.createElement)(f.Message,{key:t.created_time,createdtime:t.created_time,avatar:t.avatar,fromUser:"user"===t.from},t.text);let a;for(const e of r.children){const r=parseInt(e.getAttribute("created-time"),10);if(t.created_time<r){a={before:e};break}}(0,o.render)(e,r,void 0,a),r.scrollTop=r.scrollHeight}else if("resetMessages"===e)for(;r.firstChild;)r.firstChild.remove();u({type:e,message:t})},[m,y,g,v]=t(p,d),h=await m(),b=await(0,l.default)(h,e=>{if("#"===e.charAt(0))v(e);else{const t=y("user",e);g(t)}});return(0,o.render)(b,r,{...c}),[c,m,y,g,v,p]};t.default=d},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(14))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(r(0)),n=f(r(15)),o=f(r(17)),s=f(r(19)),i=f(r(21)),l=f(r(5)),u=f(r(26)),d=f(r(1));function f(e){return e&&e.__esModule?e:{default:e}}const c=a.default.styled(n.default)`
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
`;c.defaultProps={theme:d.default};const p=a.default.styled(o.default)`
  border-radius: 12px 12px 0 0;
`,m=a.default.styled(i.default)`
  border-radius: 0 0 12px 12px;
`,y=a.default.styled(s.default)`
  transform-origin: center bottom 0px;
  scroll-behavior: smooth;
`,g=a.default.styled(u.default)`
  width: 100%;
  padding: 4px;
  margin: 0;
  border: none;
`,v=a.default.createElement;var h=({isExpanded:e=!0,input:t={display:!0},header:r={},messages:a=[],onMessage:n,onClick:o})=>{const s=v(y,{isExpanded:e,className:"ziiir-conversation"},a.sort((e,t)=>e.createdtime>t.createdtime).map(e=>((e,t,r,a)=>v(l.default,{key:e,createdtime:e,avatar:a,fromUser:r},t))(e.createdtime,e.text,"user"===e.from,e.avatar)));let i="ziiir.com";const u=e=>{const t=e.target.value||"";"Enter"===e.key&&t.length>0&&(n&&n(t),e.target.value="")};return t.display&&(i=v(g,{className:"ziir-input",onKeyUp:u,placeholder:t.placeholder||"Your message"})),v(c,{className:e?"isexpanded":void 0,onClick:o},v(p,null,r.text||""),s,v(m,null,i))};t.default=h},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(16))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),n=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=a.default.styled("div")`
  padding: 1.2em;
  background: ${e=>e.theme.palette.background};
  color: #292c45;
  font-family: Roboto Condensed,sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  overflow-wrap: break-word;
`;s.defaultProps={theme:n.default};var i=s;t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(18))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),n=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=a.default.styled("header")`
  color: ${e=>e.theme.palette.onPrimary};
  font-size: 1.25em;
  background: ${e=>e.theme.palette.primary};
  min-height: 64px;
  padding-top: 1.2em;
  padding-left: 1.2em;
  padding-right: 0.3em;
  display: flex;
`;s.defaultProps={theme:n.default};var i=s;t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(20))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),n=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=a.default.styled("div")`
  padding: 0px;
  background: ${e=>e.theme.palette.background};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  & > div {
  }
`;s.defaultProps={theme:n.default};var i=s;t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(22))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),n=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=a.default.styled("div")`
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
`;s.defaultProps={theme:n.default};var i=s;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(2),n=s(r(0)),o=s(r(1));function s(e){return e&&e.__esModule?e:{default:e}}const i=n.default.styled("div")`
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
`;i.defaultProps={theme:o.default};const l=n.default.styled("img")`
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
`,u=n.default.createElement;var d=({createdtime:e,avatar:t,fromUser:r=!0,children:n})=>{const o=(0,a.friendlyDate)(e);return u(i,{fromUser:r,"created-time":e},u("div",null,u("p",null,n),u("span",null,o)),t&&u(l,{src:t.src,alt:t.name}))};t.default=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.friendlyDate=void 0;t.friendlyDate=(e,t)=>{let r=.001*(Date.now()-e);const a=Math.floor(r/31557600);r-=31557600*a;const n=Math.floor(r/2629800);r-=2629800*n;const o=Math.floor(r/86400);if(r-=86400*o,n||a||o>6)return new Date(e).toLocaleString(t);if(o>1)return new Date(e).toLocaleString(t);if(1===o)return"yesterday";const s=Math.floor(r/3600);if(r-=3600*s,s>1)return s+" hours ago";if(1===s)return s+" hour ago";const i=Math.floor(r/60);return r-=60*i,i>1?i+" mins ago":1===i?i+" min ago":r>10?r+" secs ago":"just now"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(...e)=>{const t=[],r=(...e)=>{let a;return e.forEach(e=>{Array.isArray(e)?(a||(a=[]),e.forEach(e=>{a.push(r(e))})):e instanceof Date?a=new Date(e.getTime()):e&&"object"==typeof e?(t.push(e),a||(a={}),t.push(e),Object.keys(e).forEach(n=>{const o=e[n];-1!==t.indexOf(o)?a[n]=o:a[n]=r(a[n],o)}),t.pop()):null!=e&&(a=e)}),a};return r(...e)};t.default=a},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(27))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),n=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=a.default.styled("input")`
  font-size: 1em;
  margin: 0.6em;
  padding: 0.3em 1em;
  border-radius: 3px;

  color: ${e=>e.theme.palette.secondary};
  border: 2px solid ${e=>e.theme.palette.secondary};
`;s.defaultProps={theme:n.default};var i=s;t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(29))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),n=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const s=a.default.styled("div")`
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
`;s.defaultProps={theme:n.default};var i=s;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(6))&&a.__esModule?a:{default:a},o=r(8),s=r(3),i=r(9);var l=async(e,t)=>{const[r,a]=(0,i.useSelector)(e=>[e.messenger.isOpen,e.messenger.header]);let l=r;const u=(0,s.useRef)(null),d=()=>{l=!l;const e=u.current;e.classList.toggle("isclosed"),e.classList.toggle("isopen")},f=await(0,n.default)(),c=(0,o.styled)(f.Messenger,{onMessage:e=>{t(e)},onClick:e=>{e.stopPropagation()},header:a})`
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
  `};t.default=l},function(e){e.exports=JSON.parse("{}")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(r(33)),n=r(2),o=s(r(10));function s(e){return e&&e.__esModule?e:{default:e}}var i=(e,t)=>{const[r,s,i,,l]=(0,o.default)(e),[u]=(0,a.default)(t);return[s,i,async t=>{r(t),await e({type:"newMessage",message:(0,n.deepCopy)(t)});const a=u(t);let o="I don't understand";a[0]&&(o=a[0].intent.output);const s=i("bot",o);r(s),await e({type:"newMessage",message:s})},l]};t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=r(34))&&a.__esModule?a:{default:a}).default;t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const a=(e,t)=>e.toLowerCase()===t.toLowerCase();var n=e=>{let t;if(e&&Array.isArray(e)&&e.length){t=[t=>{const r=[];return e.forEach(e=>{const n=Array.isArray(e.input)?e.input.findIndex(e=>a(e,t.text)):-1;("string"==typeof e.input&&a(e.input,t.text)||n>=0)&&r.push({intent:e})}),r}]}return t};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=r(2),o=(a=r(10))&&a.__esModule?a:{default:a};var s=e=>{const[t,r,a,,s]=(0,o.default)(e);return[r,a,async r=>{t(r),await e({type:"newMessage",message:(0,n.deepCopy)(r)});const o=a("bot","You say : "+r.text);t(o),await e({type:"newMessage",message:o})},s]};t.default=s}]);
//# sourceMappingURL=main.cc0b8abf4ea5b8108368.js.map