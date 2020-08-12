var messenger=function(e){var t={};function r(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setup=void 0;const a={};t.setup=({html:e,styled:t,createElement:r})=>(a.html||(a.html=e,a.styled=t,a.createElement=r),a);var s=a;t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={palette:{primary:"#F03F29",secondary:"#1EA7FD",background:"smokewhite",surface:"#F0F0F0",onPrimary:"white",onSecondary:"white",onBackground:"dark",onSurface:"gray",disabledText:"lightGrey",border:"#EAEAEA"},fonts:[],font:{family:"sans-serif",size:"16px",style:"normal",weight:"400"},spacing:8,radius:12,smallRadius:4,shadow:"rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",messenger:{width:"500px",height:"600px"},message:{radius:16,smallRadius:4,shadow:"none"}};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"friendlyDate",{enumerable:!0,get:function(){return s.friendlyDate}}),Object.defineProperty(t,"deepCopy",{enumerable:!0,get:function(){return n.default}});var a,s=r(16),n=(a=r(17))&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRef=t.render=t.createElement=t.html=void 0;var a=r(2),s=r(8);t.html=()=>{};t.createElement=(e,t,...r)=>{let s;e.element?(s=(0,a.deepCopy)({},e),s.props=(0,a.deepCopy)({},s.props,t)):(s={props:{}},s.element=e,t&&(s.props=t));let n=r;return 1===r.length&&Array.isArray(r[0])&&([n]=r),s.children=n.filter(e=>void 0!==e),s};const n=(e,t,r={},o)=>{if(!e)return;if("string"==typeof e){return void(t.innerText=e)}let{children:i}=e;if("string"==typeof e.element){const l=document.createElement(e.element);if(e.props&&Object.keys(e.props).forEach(t=>{const r=e.props[t],a=typeof r,s="string"===a||"number"===a||"boolean"===a;"ref"===t?r.setCurrent(l):"className"===t?l.className=r:"function"===a?"on"===t.substring(0,2)&&l.addEventListener(t.substring(2).toLowerCase(),r):s&&l.setAttribute(t,r)}),e.styled){const t={...e.defaultProps},n=r.theme||{},o=(0,a.deepCopy)(t,e.props,{theme:n});let i=(0,s.genClassRules)(e.styled,o,t);e.props.className&&(i+=" "+e.props.className),l.className=i}e.props&&e.props.dangerouslySetInnerHTML&&(l.innerHTML=e.props.dangerouslySetInnerHTML.__html),i&&i.forEach(e=>{n(e,l,r)}),o&&o.before?t.insertBefore(l,o.before):t.appendChild(l)}else if("function"==typeof e){const a=e({...e.props,children:i,styled:e.styled});n(a,t,r),i=null}else if(e.element&&"function"==typeof e.element){const a=e.element({...e.props,children:i});e.styled&&(a.styled=[...e.styled,...a.styled]),n(a,t,r),i=null}};t.render=n;t.useRef=e=>{const t={current:e,setCurrent:e=>{t.current=e}};return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(2);var s=async({listener:e,messages:t})=>{let r=[];t&&t.forEach(e=>{const t=(0,a.deepCopy)(e);t.created_time||(t.created_time=Date.now()),r.push(t)});return[e=>r.push((0,a.deepCopy)(e)),async()=>(0,a.deepCopy)(r),(e,t,...r)=>({from:e,text:t,...r,created_time:Date.now()}),void 0,async t=>{"#reset"===t?(e({type:"resetMessages"}),r=[]):e({type:"unknownCommand"})}]};t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=async function(){const e=await Promise.resolve().then(()=>n(r(20))),t=await Promise.resolve().then(()=>n(r(6))),a=await Promise.resolve().then(()=>n(r(33)));return{Messenger:e.default,Message:t.default,FAButton:a.default}},Object.defineProperty(t,"Interface",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"setup",{enumerable:!0,get:function(){return a.setup}});var a=n(r(0));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=a?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=((a=r(30))&&a.__esModule?a:{default:a}).default;t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=(a=r(5))&&a.__esModule?a:{default:a};let n;var o=async()=>(n||(n=await(0,s.default)()),n);t.default=o},function(e,t,r){"use strict";let a;Object.defineProperty(t,"__esModule",{value:!0}),t.genClassRules=t.genStyle=void 0;const s="abcdefghijklmnopqrstuvwxyz",n=(e,t)=>{let r="";return e&&Array.isArray(e.styles)&&e.styles.forEach((a,s)=>{r+=a,e.parameters[s]&&(r+=e.parameters[s](t))}),r};t.genStyle=n;const o=(e,t)=>{const r=e;if(0===t.trim().length)return;let a=0,s=t.indexOf("@",a);for(;s>-1;){r.main+=t.substring(a,s).trim();const e=t.indexOf("@",s+1);a=-1!==e?e:t.lastIndexOf("}")+1,r.medias.push(t.substring(s,a)),s=e}r.main+=t.substring(a).trim()};t.genClassRules=(e,t,r={})=>{const i=(()=>{if(!a){const e=document.createElement("style");e.type="text/css",e.title="MainCSS",document.getElementsByTagName("head")[0].appendChild(e),a=e.sheet}return a})();let l="";return e.forEach(e=>{const a=r.selector||[...Array(5)].map(()=>s[~~(Math.random()*s.length)]).join(""),u={main:"",sub:[],medias:[]};if(((e,t,r)=>{const a=n(t,r);let s=0,i=a.indexOf("&",s);if(-1===i)o(e,a);else{for(;i>-1;)o(e,a.substring(s,i)),s=a.indexOf("}",i+2),e.sub.push(a.substring(i+1,s+1)),s+=1,i=a.indexOf("&",s);o(e,a.substring(s))}})(u,e,t),u.main&&u.main.length>0){let e=`.${a} { ${u.main} }`;i.insertRule(e),u.sub.forEach(t=>{e=`.${a}${t}`,i.insertRule(e)}),u.medias.forEach(e=>{i.insertRule(e)}),l+=a+" "}}),l.trim()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"genStyle",{enumerable:!0,get:function(){return s.genStyle}}),t.styled=void 0;var a=r(3),s=r(8);t.styled=(e,t,...r)=>(s,...n)=>{const o=e,i=(0,a.createElement)(o,t,...r);return i.styled?i.styled.unshift({styles:s,parameters:n}):i.styled=[{styles:s,parameters:n}],i}},function(e,t,r){"use strict";let a;Object.defineProperty(t,"__esModule",{value:!0}),t.useSelector=t.default=void 0;t.default=e=>(a={...e},a);t.useSelector=e=>e({...a})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(12)),s=r(2),n=o(r(19));function o(e){return e&&e.__esModule?e:{default:e}}var i=async(e={},t,r=document.body)=>{let o,i;try{const e=await fetch("./config.json");o=await e.json()}catch(e){}o||(o={});const l={...o,...e};if(l.messenger||(l.messenger={}),l.dataset){if(l.dataset.src){i=[];const e=Array.isArray(l.dataset.src)?l.dataset.src:[l.dataset.src];for(const t of e)try{const e=await fetch(t),r=await e.json();i=(0,s.deepCopy)(i,r)}catch(e){}}else({dataset:i}=l);i&&i.intents&&(i=i.intents)}else if(l.intents)if(l.intents.src)try{const e=await fetch(l.intents.src);i=await e.json()}catch(e){}else i=l.intents;const u=i?"dialog":void 0,d=await(0,a.default)(u),[c,f,p,m,h,g]=await(0,n.default)({state:l,messaging:d,root:r,messageListener:t,dataset:i,messages:l.messages});return window.ziiircom={name:"Ziiircom",store:c,getMessages:f,createMessage:p,sendMessage:m,commands:h,handleEventMessage:g},[c,f,p,m,h,g]};t.default=i},function(e,t,r){"use strict";function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=s?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=async e=>{let t;if("dialog"===e)try{t=(await Promise.resolve().then(()=>s(r(13)))).default}catch(e){}if(!t)try{t=(await Promise.resolve().then(()=>s(r(18)))).default}catch(e){}return t};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(14)),s=r(2),n=o(r(4));function o(e){return e&&e.__esModule?e:{default:e}}var i=async({listener:e,dataset:t,messages:r,contexts:o={}})=>{const[i,l,u,,d]=await(0,n.default)({listener:e,messages:r}),c=(0,s.deepCopy)(o),[f,p]=(0,a.default)(t,c);return[l,u,async t=>{i(t),await e({type:"newMessage",message:(0,s.deepCopy)(t)});const r=f(t),{response:a,quick_replies:n}=p(r),o=[];a.forEach((e,t)=>{const r=u("bot",e);t===a.length-1&&n&&(r.quick_replies=(0,s.deepCopy)(n)),i(r),o.push((0,s.deepCopy)(r))}),await e({type:"newMessage",message:o})},async e=>("#reset"===e&&Object.keys(c).forEach(e=>{delete c[e]}),d(e))]};t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=((a=r(15))&&a.__esModule?a:{default:a}).default;t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(2);const s=(e,t={})=>({text:e.replace(/<<\s*([\w.]+)\s*=\s*(.+?)\s*>>/g,(e,r,a)=>(t[r]=a,"")),set:t}),n=e=>{let t;if(Array.isArray(e))t=e.map(e=>n(e));else if(e.text)t=e,Array.isArray(t.text)?t.text.forEach((e,r)=>{({text:t.text[r],set:t.set}=s(e,t.set))}):({text:t.text,set:t.set}=s(t.text,t.set)),0===Object.keys(t.set).length&&delete t.set;else{const{text:r,set:a}=s(e);t=Object.keys(a).length?{text:r,set:a}:r}return t},o=(e,t)=>{let r=e;return"*"===r&&([{value:r}]=t),r},i=e=>e.replace(/https?:\/\/\S*|\[(.*?)\]\((.*?)\)/gi,(e,t,r)=>{let a=e,s=a;return t&&(s=t,a=r),a.match(/\.(jpg|jpeg|gif|png)$/gi)?`<a href="${a}" target="_blank" rel="noopener noreferrer"><img src="${a}" alt="${s}" /></a>`:`<a href="${a}" target="_blank" rel="noopener noreferrer">${s}</a>`}),l=(e,t)=>{const r=[];let a,s=t;var n;return"*"===e?(r.push({type:"any",value:s,offset:0}),a=!0):e.indexOf("{{")>-1?e.replace(/{{\s*([\w.]*)\s*(=?)\s*@(any|email)\s*}}/g,(e,t,n,o,i)=>{i>0&&(s=void 0),("any"===o||"email"===o&&s&&s.match(/\b(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})\b/gi))&&(a=!0),a&&r.push({name:t,type:o,value:s,offset:i})}):(n=t,a=e.toLowerCase()===n.toLowerCase(),a&&r.push({type:"all",value:s,offset:0})),[a,r]};var u=(e,t)=>{let r;const s=t||{},u=({matchs:e,context:t={},userId:r},n=i)=>{let l,u,d,c=(0,a.deepCopy)(t);e&&e.length>1&&e.forEach(e=>{e.any||l||e.intent.topic!==c.topic||(l=e)}),!l&&e[0]&&([l]=e);let f,p=[];if(l){const{intent:e}=l;({entities:f}=l),e.set&&(c={...c,...e.set}),({output:u}=e),Array.isArray(u)&&u.forEach(e=>{if("condition"===e.type){let t;u=null,e.children.forEach(e=>{u&&t||e.value!==c[e.name]&&e.value||(({value:t}=e),u=e)})}});let t=u;u.text&&({text:t}=u),u.quick_replies&&(d=u.quick_replies),f.forEach(e=>{e.name&&(c[e.name]=e.value)}),Array.isArray(t)||(t=[t]),t.forEach(e=>{let t=e;t.text&&(t=t.text);const r=((e,t,r)=>{const a={};return{response:e.replace(/{{\s*([\w.]+)\s*(=\s*(.+?)\s*)*}}/g,(e,s,n,i)=>{const l=s.trim();return n&&(a[l]=o(i,r)),a[l]||t[l]||""}),set:a}})(t,c,f);p.push(r.response),Object.keys(r.set).length&&(c={...c,...r.set}),u.set&&Object.keys(u.set).forEach(e=>{c[e]=o(u.set[e],f)})})}else p.push("I don't understand");return s[r]=(0,a.deepCopy)(c),p=p.map(e=>n(e)),u={response:p,context:c,entities:f},d&&(u.quick_replies=d),u};if(e&&Array.isArray(e)&&e.length){const t=e.map(e=>(e=>{const t=(0,a.deepCopy)(e),{output:r}=t;return Array.isArray(r)&&r.length&&"condition"===r[0].type?t.output=t.output.map(e=>({...e,children:n(e.children)})):t.output=n(r),t})(e));let o,i;r=[(e,r="user")=>{const a=s[r]||{},n=[];return t.forEach(t=>{let r=Array.isArray(t.input)?t.input.findIndex(t=>([o,i]=l(t,e.text),o)):-1;-1===r&&"string"==typeof t.input&&([o,i]=l(t.input,e.text),r=o?0:-1),r>=0&&(o={intent:t,inputIndex:r,entities:i},1===i.length&&"any"===i[0].type&&(o.any=!0),n.push(o))}),{matchs:n.sort((e,t)=>(e.intent.order||0)-(t.intent.order||0)),context:a,userId:r}},u]}return r};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.friendlyDate=void 0;t.friendlyDate=(e,t)=>{let r=.001*(Date.now()-e);const a=Math.floor(r/31557600);r-=31557600*a;const s=Math.floor(r/2629800);r-=2629800*s;const n=Math.floor(r/86400);if(r-=86400*n,s||a||n>6)return new Date(e).toLocaleString(t);if(n>1)return new Date(e).toLocaleString(t);if(1===n)return"yesterday";const o=Math.floor(r/3600);if(r-=3600*o,o>1)return o+" hours ago";if(1===o)return o+" hour ago";const i=Math.floor(r/60);return r-=60*i,i>1?i+" mins ago":1===i?i+" min ago":r>10?r+" secs ago":"just now"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(...e)=>{const t=[],r=(...e)=>{let a;return e.forEach(e=>{Array.isArray(e)?(a||(a=[]),e.forEach(e=>{a.push(r(e))})):e instanceof Date?a=new Date(e.getTime()):e&&"object"==typeof e?(t.push(e),a||(a={}),t.push(e),Object.keys(e).forEach(s=>{const n=e[s];-1!==t.indexOf(n)?a[s]=n:a[s]=r(a[s],n)}),t.pop()):null!=e&&(a=e)}),a};return r(...e)};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=r(2),n=(a=r(4))&&a.__esModule?a:{default:a};var o=async({listener:e,messages:t})=>{const[r,a,o,,i]=await(0,n.default)({listener:e,messages:t});return[a,o,async t=>{r(t),await e({type:"newMessage",message:(0,s.deepCopy)(t)});const a=o("bot","You say : "+t.text);r(a),await e({type:"newMessage",message:a})},i]};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(5),s=d(r(7)),n=r(3),o=r(9),i=d(r(35)),l=d(r(10)),u=d(r(36));function d(e){return e&&e.__esModule?e:{default:e}}var c=async({state:e,messaging:t,root:r,messageListener:d=(({type:e,message:t})=>({type:e,message:t})),dataset:c,messages:f})=>{(0,a.setup)({html:n.html,createElement:n.createElement,styled:o.styled});const p=await(0,s.default)(),m=(0,l.default)(e),h=m.messenger.personas||{},g=e=>{let{avatar:t}=e;return t||(t=h[e.from]),t};let y;const v=async({type:t,message:r})=>{const a=document.getElementsByClassName("ziiir-conversation")[0],s=(t,r,s)=>{const o=(0,n.createElement)(p.Message,{key:t.created_time,createdtime:t.created_time,avatar:g(t),fromUser:"user"===t.from,onAction:y,hideDate:e.messenger.hideDate,hasPrevious:r,hasNext:s,quickReplies:t.quick_replies},t.text);let i;for(const e of a.children){const r=parseInt(e.getAttribute("created-time"),10);if(t.created_time<r){i={before:e};break}}(0,n.render)(o,a,{...m},i)};if("newMessage"===t)Array.isArray(r)?r.forEach((e,t,r)=>{const a=r[t-1],n=!!a&&a.from===e.from&&e.created_time-a.created_time<2e3,o=r[t+1],i=!!o&&o.from===e.from&&o.created_time-e.created_time<2e3;s(e,n,i)}):s(r),a.scrollTop=a.scrollHeight;else if("resetMessages"===t)for(;a.firstChild;)a.firstChild.remove();d({type:t,message:r})},[b,x,_,w]=await t({listener:v,messages:f,dataset:c,contexts:e.contexts});let M=await b();M=M.map(e=>{const t=e;return t.avatar=g(t),t}),y=(e,t)=>{const r=x("user",t);_(r)};const k=await(0,u.default)(M,e=>{if("#"===e.charAt(0))w(e);else{const t=x("user",e);_(t)}},y,e.messenger.hideDate);return(0,n.render)(k,r,{...m}),(0,i.default)(e.theme,"ziiircom-messenger-frame"),[m,b,x,_,w,v]};t.default=c},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=((a=r(21))&&a.__esModule?a:{default:a}).default;t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(r(0)),s=c(r(22)),n=c(r(24)),o=c(r(26)),i=c(r(28)),l=c(r(6)),u=c(r(31)),d=c(r(1));function c(e){return e&&e.__esModule?e:{default:e}}const f=a.default.styled(s.default)`
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
  &.isexpanded .ziiir-conversation {
    animation: 0.675s cubic-bezier(0.4, 0, 0.2, 1) 0.45s 1 normal both running enterConversation;
    animation-delay: 0.45s;
    animation-fill-mode: both;
  }
  & .ziiir-conversation {
    padding: 16px;
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
`;f.defaultProps={theme:d.default};const p=a.default.styled(n.default)`
  border-bottom: ${e=>"1px solid "+e.theme.palette.border};
  border-radius: ${e=>`${e.theme.radius}px ${e.theme.radius}px 0 0`};
`;p.defaultProps={theme:d.default};const m=a.default.styled(i.default)`
border-top: ${e=>"1px solid "+e.theme.palette.border};
border-radius: ${e=>`0 0 ${e.theme.radius}px ${e.theme.radius}px`};
`;m.defaultProps={theme:d.default};const h=a.default.styled(o.default)`
  transform-origin: center bottom 0px;
  scroll-behavior: smooth;
`,g=a.default.styled(u.default)`
  width: 100%;
  padding: 4px;
  margin: 0;
  border: none;
  outline: none;
`,y=a.default.createElement;var v=({isExpanded:e=!0,input:t={display:!0},header:r={},messages:a=[],onMessage:s,onClick:n,onAction:o,hideDate:i=!1})=>{const{text:u="",...d}=r,c=y(h,{isExpanded:e,className:"ziiir-conversation"},a.sort((e,t)=>e.created_time>t.created_time).map((e,t,r)=>{const a=r[t-1],s=!!a&&a.from===e.from&&e.created_time-a.created_time<2e3,n=r[t+1],u=!!n&&n.from===e.from&&n.created_time-e.created_time<2e3;return((e,t,r,a,s,n,o,i,u)=>y(l.default,{key:e,createdtime:e,avatar:a,fromUser:r,onAction:s,hideDate:n,hasPrevious:o,hasNext:i,quickReplies:u},t))(e.created_time,e.text,"user"===e.from,e.avatar,o,i,s,u,e.quick_replies)}));let v="ziiir.com";const b=e=>{const t=e.target.value||"";"Enter"===e.key&&t.length>0&&(s&&s(t),e.target.value="")};return t.display&&(v=y(g,{className:"ziir-input",onKeyUp:b,placeholder:t.placeholder||"Your message"})),y(f,{className:e?"isexpanded":void 0,onClick:n},y(p,d,u),c,y(m,null,v))};t.default=v},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=((a=r(23))&&a.__esModule?a:{default:a}).default;t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),s=n(r(1));function n(e){return e&&e.__esModule?e:{default:e}}const o=a.default.styled("div")`
  padding: 1.2em;
  background: ${e=>e.theme.palette.background};
  color: #292c45;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  overflow-wrap: break-word;
`;o.defaultProps={theme:s.default};var i=o;t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=((a=r(25))&&a.__esModule?a:{default:a}).default;t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),s=n(r(1));function n(e){return e&&e.__esModule?e:{default:e}}const o=a.default.styled("header")`
  color: ${e=>e.theme.palette.onPrimary};
  font-size: 1.25em;
  background: ${e=>e.theme.palette.primary};
  min-height: 64px;
  padding-top: 1.2em;
  padding-left: 1.2em;
  padding-right: 0.3em;
  display: flex;
`;o.defaultProps={theme:s.default};const i=a.default.styled("button")`
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
`,l=a.default.styled("div")`
width:16px;
height:16px;
background: transparent;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='white'%3E%3Cpath d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'/%3E%3C/g%3E%3C/svg%3E");
background-repeat:no-repeat;
background-position:50%;
background-size:cover;
cursor:pointer;
`;l.defaultProps={theme:s.default};const u=a.default.createElement;var d=({children:e,closeButton:t})=>{let r=u(o,null,e[0]);if(t){const a=u(i,{onClick:t.onClose},u(l));r=u(o,null,a,u("span",null,e[0]))}return r};t.default=d},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=((a=r(27))&&a.__esModule?a:{default:a}).default;t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),s=n(r(1));function n(e){return e&&e.__esModule?e:{default:e}}const o=a.default.styled("div")`
  padding: 0px;
  background: ${e=>e.theme.palette.background};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  & > div {
  }
`;o.defaultProps={theme:s.default};var i=o;t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=((a=r(29))&&a.__esModule?a:{default:a}).default;t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),s=n(r(1));function n(e){return e&&e.__esModule?e:{default:e}}const o=a.default.styled("div")`
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
`;o.defaultProps={theme:s.default};var i=o;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(2),s=o(r(0)),n=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const i=(e,t="none")=>e.button&&e.button.border?e.button.border:t,l=e=>e.button&&e.button.background?e.button.background:e.surface,u=e=>e.button&&e.button.color?e.button.color:e.onSurface,d=s.default.styled("div")`
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
    color: ${e=>u(e.theme.palette)};
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
`;d.defaultProps={theme:n.default};const c=s.default.styled("div")`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  & > button {
    border: ${e=>i(e.theme.palette,"1px solid "+e.theme.palette.secondary)};
    border-radius: 4px;
    min-height: 24px;
    margin: 8px 4px;
    background: ${e=>l(e.theme.palette)};
    color: ${e=>u(e.theme.palette)};
    cursor: pointer;
    font-size: 16px;
  }
`;c.defaultProps={theme:n.default};const f=s.default.styled("span")`
  z-index: 3;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-top: auto;
  margin-right: 8px;
`,p=s.default.styled("img")`
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
`,m=s.default.createElement;var h=({createdtime:e,avatar:t,fromUser:r=!0,children:s,onAction:n,hideDate:o=!1,hasPrevious:i=!1,hasNext:l=!1,quickReplies:u})=>{const h=(0,a.friendlyDate)(e);let g=s,y=s;Array.isArray(g)&&([g]=s),"string"==typeof g&&(g.indexOf("/>")>0||g.indexOf("</")>0||g.indexOf("/&gt;")>0||g.indexOf("&lt;/")>0)?(g={__html:g},y=void 0):g=void 0;return m(d,{fromUser:r,"created-time":e,hasPrevious:i,hasNext:l},t&&(l?m(f):m(p,{src:t.src,alt:t.name})),m("div",{onClick:e=>{"BUTTON"===e.target.tagName&&n(e.target.tagName,e.target.textContent)}},m("p",{dangerouslySetInnerHTML:g},y),!o&&!u&&!l&&m("span",null,h),u&&m(c,{onClick:e=>{e.target.parentNode.style.display="none"}},u.map(e=>m("button",{key:e.title},e.title)))))};t.default=h},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=((a=r(32))&&a.__esModule?a:{default:a}).default;t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),s=n(r(1));function n(e){return e&&e.__esModule?e:{default:e}}const o=a.default.styled("input")`
  font-size: 1em;
  margin: 0.6em;
  padding: 0.3em 1em;
  border-radius: 3px;

  color: ${e=>e.theme.palette.secondary};
  border: 2px solid ${e=>e.theme.palette.secondary};
`;o.defaultProps={theme:s.default};var i=o;t.default=i},function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=((a=r(34))&&a.__esModule?a:{default:a}).default;t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),s=n(r(1));function n(e){return e&&e.__esModule?e:{default:e}}const o=a.default.styled("div")`
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
`;o.defaultProps={theme:s.default};var i=o;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(e={},t)=>{const{fonts:r={}}=e,{text:a={},heading:s={}}=r,n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href",a.url||"https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"),n.setAttribute("type","text/css");const o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href",s.url||"https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"),o.setAttribute("type","text/css");const[i]=document.getElementsByTagName("head");i.appendChild(n),i.appendChild(o);const[l]=document.getElementsByClassName(t);l.style.cssText=`font-family: ${a.name&&a.name+", "||""}sans-serif;`};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=(a=r(7))&&a.__esModule?a:{default:a},n=r(9),o=r(3),i=r(10);var l=async(e,t,r,a)=>{const[l,u={},d]=(0,i.useSelector)(e=>[e.messenger.isOpen,e.messenger.header,e.messenger.input]);let c=l;const f=(0,o.useRef)(null),p=(0,o.useRef)(null),m=()=>{c=!c;const e=f.current;e.classList.toggle("isclosed"),e.classList.toggle("isopen"),e.firstChild.classList.remove("isexpanded"),p.current.classList.toggle("isactive")};u.closeButton&&(u.closeButton.onClose=m);const h=await(0,s.default)(),g=(0,n.styled)(h.Messenger,{messages:e,onMessage:e=>{t(e)},onClick:e=>{e.stopPropagation()},onAction:r,header:u,input:d,hideDate:a})`
    width: 100%;
    max-width: ${e=>e.theme.messenger.width};
    height: 80%;
    margin: 96px 48px 96px auto;
  `,y=(0,n.styled)("div",{ref:f,className:"ziiircom-messenger is"+(c?"open":"closed"),onClick:m},g)`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    flex-direction: column;
    flex-shrink: 0;

    &.isopen {
      display: flex;
    }

    &.isclosed {
      display: none;
    }
  `,v=(0,n.styled)(h.FAButton,{ref:p,className:"ziiircom-messenger-fab "+(c?"isactive":""),onClick:m,iconActive:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='-12 -12 48 48'%3E%3Cg fill='white'%3E%3Cpath d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'/%3E%3C/g%3E%3C/svg%3E"})`
    position: absolute;
    right: 32px;
    bottom: 32px;
    z-index: 9;
  `;return(0,n.styled)("div",{className:"ziiircom-messenger-frame"},y,v)``};t.default=l}]);
//# sourceMappingURL=main.js.map