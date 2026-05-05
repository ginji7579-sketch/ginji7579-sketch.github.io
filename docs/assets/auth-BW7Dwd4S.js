var e;import{j as t}from"./radix-CL0r4W6B.js";import{r as n,R as a,I as s,P as o,M as r,H as i,S as c,N as l,a as d,b as u,T as p,U as m,L as f,c as h,X as g,d as x,e as y,f as w,h as v}from"./lucide-TOR_2FnA.js";import{r as b,_ as j,C,a as E,E as I,o as F,F as S,L as N,g as A,i as k,b as T,v as D,c as L,d as M,e as H,f as P,h as q,j as B,k as $,l as R,m as O,s as z,G as V,n as _,p as K,q as U,t as W}from"./firebase-CB8QFNH6.js";var G={exports:{}},J={},Q=n;var Y="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Z=Q.useState,X=Q.useEffect,ee=Q.useLayoutEffect,te=Q.useDebugValue;function ne(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Y(e,n)}catch(a){return!0}}var ae="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),a=Z({inst:{value:n,getSnapshot:t}}),s=a[0].inst,o=a[1];return ee(function(){s.value=n,s.getSnapshot=t,ne(s)&&o({inst:s})},[e,n,t]),X(function(){return ne(s)&&o({inst:s}),e(function(){ne(s)&&o({inst:s})})},[e]),te(n),n};J.useSyncExternalStore=void 0!==Q.useSyncExternalStore?Q.useSyncExternalStore:ae,G.exports=J;var se=G.exports;const oe=a.useInsertionEffect,re=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?n.useLayoutEffect:n.useEffect,ie=oe||re,ce=e=>{const t=n.useRef([e,(...e)=>t[0](...e)]).current;return ie(()=>{t[0]=e}),t[1]},le="pushState",de="replaceState",ue=["popstate",le,de,"hashchange"],pe=e=>{for(const t of ue)addEventListener(t,e);return()=>{for(const t of ue)removeEventListener(t,e)}},me=(e,t)=>se.useSyncExternalStore(pe,e,t),fe=()=>location.search,he=()=>location.pathname,ge=({ssrPath:e}={})=>me(he,null!=e?()=>e:he),xe=(e,{replace:t=!1,state:n=null}={})=>history[t?de:le](n,"",e),ye=Symbol.for("wouter_v3");if("undefined"!=typeof history&&void 0===window[ye]){for(const e of[le,de]){const t=history[e];history[e]=function(){const n=t.apply(this,arguments),a=new Event(e);return a.arguments=arguments,dispatchEvent(a),n}}Object.defineProperty(window,ye,{value:!0})}const we=(e="")=>"/"===e?"":e,ve=(e="",t)=>((e,t)=>t.toLowerCase().indexOf(e.toLowerCase())?"~"+t:t.slice(e.length)||"/")(be(we(e)),be(t)),be=e=>{try{return decodeURI(e)}catch(t){return e}},je={hook:(e={})=>[ge(e),xe],searchHook:({ssrSearch:e}={})=>me(fe,null!=e?()=>e:fe),parser:function(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,a,s,o,r=[],i="",c=e.split("/");for(c[0]||c.shift();s=c.shift();)"*"===(n=s[0])?(r.push(n),i+="?"===s[1]?"(?:/(.*))?":"/(.*)"):":"===n?(a=s.indexOf("?",1),o=s.indexOf(".",1),r.push(s.substring(1,~a?a:~o?o:s.length)),i+=~a&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(i+=(~a?"?":"")+"\\"+s.substring(o))):i+="/"+s;return{keys:r,pattern:new RegExp("^"+i+(t?"(?=$|/)":"/?$"),"i")}},base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:e=>e,aroundNav:(e,t,n)=>e(t,n)},Ce=n.createContext(je),Ee=()=>n.useContext(Ce),Ie={},Fe=n.createContext(Ie),Se=e=>{const[t,n]=e.hook(e);return[ve(e.base,t),ce((t,a)=>e.aroundNav(n,((e,t)=>"~"===e[0]?e.slice(1):we(t)+e)(t,e.base),a))]},Ne=()=>Se(Ee()),Ae=(e,t,n,a)=>{const{pattern:s,keys:o}=t instanceof RegExp?{keys:!1,pattern:t}:e(t||"*",a),r=s.exec(n)||[],[i,...c]=r;return void 0!==i?[!0,(()=>{const e=!1!==o?Object.fromEntries(o.map((e,t)=>[e,c[t]])):r.groups;let t={...c};return e&&Object.assign(t,e),t})(),...a?[i]:[]]:[!1,null]},ke=({children:e,...t})=>{var a,s,o;const r=Ee(),i=t.hook?je:r;let c=i;const[l,d=t.ssrSearch??""]=(null==(a=t.ssrPath)?void 0:a.split("?"))??[];l&&(t.ssrSearch=d,t.ssrPath=l),t.hrefs=t.hrefs??(null==(s=t.hook)?void 0:s.hrefs),t.searchHook=t.searchHook??(null==(o=t.hook)?void 0:o.searchHook);let u=n.useRef({}),p=u.current,m=p;for(let n in i){const e="base"===n?i[n]+(t[n]??""):t[n]??i[n];p===m&&e!==m[n]&&(u.current=m={...m}),m[n]=e,e===i[n]&&e===c[n]||(c=m)}return n.createElement(Ce.Provider,{value:c,children:e})},Te=({children:e,component:t},a)=>t?n.createElement(t,{params:a}):"function"==typeof e?e(a):e,De=({path:e,nest:t,match:a,...s})=>{const o=Ee(),[r]=Se(o),[i,c,l]=a??Ae(o.parser,e,r,t),d=(e=>{let t=n.useRef(Ie);const a=t.current;return t.current=Object.keys(e).length!==Object.keys(a).length||Object.entries(e).some(([e,t])=>t!==a[e])?e:a})({...n.useContext(Fe),...c});if(!i)return null;const u=l?n.createElement(ke,{base:l},Te(s,d)):Te(s,d);return n.createElement(Fe.Provider,{value:d,children:u})},Le=n.forwardRef((e,t)=>{const a=Ee(),[s,o]=Se(a),{to:r="",href:i=r,onClick:c,asChild:l,children:d,className:u,replace:p,state:m,transition:f,...h}=e,g=ce(t=>{t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button||(null==c||c(t),t.defaultPrevented||(t.preventDefault(),o(i,e)))}),x=a.hrefs("~"===i[0]?i.slice(1):a.base+i,a);return l&&n.isValidElement(d)?n.cloneElement(d,{onClick:g,href:x}):n.createElement("a",{...h,onClick:g,href:x,className:(null==u?void 0:u.call)?u(s===i):u,children:d,ref:t})}),Me=e=>Array.isArray(e)?e.flatMap(e=>Me(e&&e.type===n.Fragment?e.props.children:e)):[e],He=({children:e,location:t})=>{const a=Ee(),[s]=Se(a);for(const o of Me(e)){let e=0;if(n.isValidElement(o)&&(e=Ae(a.parser,o.props.path,t||s,o.props.nest))[0])return n.cloneElement(o,{match:e})}return null},Pe="@firebase/installations",qe="0.6.21",Be=1e4,$e=`w:${qe}`,Re="FIS_v2",Oe=36e5,ze=new I("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Ve(e){return e instanceof S&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Ke(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Ue(e,t){const n=(await t.json()).error;return ze.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function We({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ge(e,{refreshToken:t}){const n=We(e);return n.append("Authorization",function(e){return`${Re} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function Je(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qe(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ye=/^[cdef][\w-]{21}$/;function Ze(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return Ye.test(t)?t:""}catch{return""}}function Xe(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new Map;function tt(e,t){const n=Xe(e);nt(n,t),function(e,t){const n=function(){!at&&"BroadcastChannel"in self&&(at=new BroadcastChannel("[Firebase] FID Change"),at.onmessage=e=>{nt(e.data.key,e.data.fid)});return at}();n&&n.postMessage({key:e,fid:t});0===et.size&&at&&(at.close(),at=null)}(n,t)}function nt(e,t){const n=et.get(e);if(n)for(const a of n)a(t)}let at=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const st="firebase-installations-store";let ot=null;function rt(){return ot||(ot=F("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(st)}})),ot}async function it(e,t){const n=Xe(e),a=(await rt()).transaction(st,"readwrite"),s=a.objectStore(st),o=await s.get(n);return await s.put(t,n),await a.done,o&&o.fid===t.fid||tt(e,t.fid),t}async function ct(e){const t=Xe(e),n=(await rt()).transaction(st,"readwrite");await n.objectStore(st).delete(t),await n.done}async function lt(e,t){const n=Xe(e),a=(await rt()).transaction(st,"readwrite"),s=a.objectStore(st),o=await s.get(n),r=t(o);return void 0===r?await s.delete(n):await s.put(r,n),await a.done,!r||o&&o.fid===r.fid||tt(e,r.fid),r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e){let t;const n=await lt(e.appConfig,n=>{const a=function(e){const t=e||{fid:Ze(),registrationStatus:0};return mt(t)}(n),s=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(ze.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=_e(e),s=We(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&s.append("x-firebase-client",e)}const r={fid:n,authVersion:Re,appId:e.appId,sdkVersion:$e},i={method:"POST",headers:s,body:JSON.stringify(r)},c=await Je(()=>fetch(a,i));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Ke(e.authToken)}}throw await Ue("Create Installation",c)}(e,t);return it(e.appConfig,n)}catch(n){throw Ve(n)&&409===n.customData.serverCode?await ct(e.appConfig):await it(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:a}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ut(e)}:{installationEntry:t}}(e,a);return t=s.registrationPromise,s.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function ut(e){let t=await pt(e.appConfig);for(;1===t.registrationStatus;)await Qe(100),t=await pt(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await dt(e);return n||t}return t}function pt(e){return lt(e,e=>{if(!e)throw ze.create("installation-not-found");return mt(e)})}function mt(e){return 1===(t=e).registrationStatus&&t.registrationTime+Be<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function ft({appConfig:e,heartbeatServiceProvider:t},n){const a=function(e,{fid:t}){return`${_e(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),s=Ge(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&s.append("x-firebase-client",e)}const r={installation:{sdkVersion:$e,appId:e.appId}},i={method:"POST",headers:s,body:JSON.stringify(r)},c=await Je(()=>fetch(a,i));if(c.ok){return Ke(await c.json())}throw await Ue("Generate Auth Token",c)}async function ht(e,t=!1){let n;const a=await lt(e.appConfig,a=>{if(!xt(a))throw ze.create("not-registered");const s=a.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Oe}(e)}(s))return a;if(1===s.requestStatus)return n=async function(e,t){let n=await gt(e.appConfig);for(;1===n.authToken.requestStatus;)await Qe(100),n=await gt(e.appConfig);const a=n.authToken;return 0===a.requestStatus?ht(e,t):a}(e,t),a;{if(!navigator.onLine)throw ze.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}(a);return n=async function(e,t){try{const n=await ft(e,t),a={...t,authToken:n};return await it(e.appConfig,a),n}catch(n){if(!Ve(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n={...t,authToken:{requestStatus:0}};await it(e.appConfig,n)}else await ct(e.appConfig);throw n}}(e,t),t}});return n?await n:a.authToken}function gt(e){return lt(e,e=>{if(!xt(e))throw ze.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Be<Date.now()?{...e,authToken:{requestStatus:0}}:e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */})}function xt(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yt(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await dt(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await ht(n,t)).token}function wt(e){return ze.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="installations",bt=e=>{const t=e.getProvider("app").getImmediate(),n=E(t,vt).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:a}=await dt(t);return a?a.catch(console.error):ht(t).catch(console.error),n.fid}(n),getToken:e=>yt(n,e)}};j(new C(vt,e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw wt("App Configuration");if(!e.name)throw wt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw wt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:E(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),j(new C("installations-internal",bt,"PRIVATE")),b(Pe,qe),b(Pe,qe,"esm2020");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jt="analytics",Ct="https://www.googletagmanager.com/gtag/js",Et=new N("@firebase/analytics"),It=new I("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ft(e){if(!e.startsWith(Ct)){const t=It.create("invalid-gtag-resource",{gtagURL:e});return Et.warn(t.message),""}return e}function St(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function Nt(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:Ft}),a=document.createElement("script"),s=`${Ct}?l=${e}&id=${t}`;a.src=n?null==n?void 0:n.createScriptURL(s):s,a.async=!0,document.head.appendChild(a)}function At(e,t,n,a){return async function(s,...o){try{if("event"===s){const[a,s]=o;await async function(e,t,n,a,s){try{let o=[];if(s&&s.send_to){let e=s.send_to;Array.isArray(e)||(e=[e]);const a=await St(n);for(const n of e){const e=a.find(e=>e.measurementId===n),s=e&&t[e.appId];if(!s){o=[];break}o.push(s)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",a,s||{})}catch(o){Et.error(o)}}(e,t,n,a,s)}else if("config"===s){const[s,r]=o;await async function(e,t,n,a,s,o){const r=a[s];try{if(r)await t[r];else{const e=(await St(n)).find(e=>e.measurementId===s);e&&await t[e.appId]}}catch(i){Et.error(i)}e("config",s,o)}(e,t,n,a,s,r)}else if("consent"===s){const[t,n]=o;e("consent",t,n)}else if("get"===s){const[t,n,a]=o;e("get",t,n,a)}else if("set"===s){const[t]=o;e("set",t)}else e(s,...o)}catch(r){Et.error(r)}}}const kt=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Tt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Dt(e,t=kt,n){const{appId:a,apiKey:s,measurementId:o}=e.options;if(!a)throw It.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:a};throw It.create("no-api-key")}const r=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new Mt;return setTimeout(async()=>{i.abort()},6e4),Lt({appId:a,apiKey:s,measurementId:o},r,i,t)}async function Lt(e,{throttleEndTimeMillis:t,backoffCount:n},a,s=kt){var o;const{appId:r,measurementId:i}=e;try{await function(e,t){return new Promise((n,a)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(o),a(It.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(a,t)}catch(c){if(i)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:r,measurementId:i};throw c}try{const t=await async function(e){var t;const{appId:n,apiKey:a}=e,s={method:"GET",headers:Tt(a)},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),r=await fetch(o,s);if(200!==r.status&&304!==r.status){let e="";try{const n=await r.json();(null==(t=n.error)?void 0:t.message)&&(e=n.error.message)}catch(i){}throw It.create("config-fetch-failed",{httpStatus:r.status,responseMessage:e})}return r.json()}(e);return s.deleteThrottleMetadata(r),t}catch(c){const t=c;if(!function(e){if(!(e instanceof S&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(s.deleteThrottleMetadata(r),i)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:r,measurementId:i};throw c}const l=503===Number(null==(o=null==t?void 0:t.customData)?void 0:o.httpStatus)?L(n,s.intervalMillis,30):L(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(r,d),Et.debug(`Calling attemptFetch again in ${l} millis`),Lt(e,d,a,s)}}class Mt{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ht(e,t,n,a,s,o,r){const i=Dt(e);i.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>Et.error(e)),t.push(i);const c=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(){if(!T())return Et.warn(It.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await D()}catch(e){return Et.warn(It.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then(e=>e?a.getId():void 0),[l,d]=await Promise.all([i,c]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ct)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(o)||Nt(o,l.measurementId),s("js",new Date);const u=(null==r?void 0:r.config)??{};return u.origin="firebase",u.update=!0,null!=d&&(u.firebase_id=d),s("config",l.measurementId,u),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.app=e}_delete(){return delete qt[this.app.options.appId],Promise.resolve()}}let qt={},Bt=[];const $t={};let Rt,Ot,zt="dataLayer",Vt=!1;function _t(e,t,n){!function(){const e=[];if(k()&&e.push("This is a browser extension environment."),M()||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=It.create("invalid-analytics-context",{errorInfo:t});Et.warn(n.message)}}();const a=e.options.appId;if(!a)throw It.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw It.create("no-api-key");Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=qt[a])throw It.create("already-exists",{id:a});if(!Vt){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(zt);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,a,s){let o=function(...e){window[a].push(arguments)};return window[s]&&"function"==typeof window[s]&&(o=window[s]),window[s]=At(o,e,t,n),{gtagCore:o,wrappedGtag:window[s]}}(qt,Bt,$t,zt,"gtag");Ot=e,Rt=t,Vt=!0}qt[a]=Ht(e,Bt,$t,t,Rt,zt,n);return new Pt(e)}function Kt(e=H()){e=A(e);const t=E(e,jt);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=E(e,jt);if(n.isInitialized()){const e=n.getImmediate();if(P(t,n.getOptions()))return e;throw It.create("already-initialized")}const a=n.initialize({options:t});return a}(e)}function Ut(e,t,n){e=A(e),async function(e,t,n,a){if(a&&a.global){const t={};for(const e of Object.keys(n))t[`user_properties.${e}`]=n[e];return e("set",t),Promise.resolve()}e("config",await t,{update:!0,user_properties:n})}(Ot,qt[e.app.options.appId],t,n).catch(e=>Et.error(e))}const Wt="@firebase/analytics",Gt="0.10.21";j(new C(jt,(e,{options:t})=>_t(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),j(new C("analytics-internal",function(e){try{const t=e.getProvider(jt).getImmediate();return{logEvent:(e,n,a)=>function(e,t,n,a){e=A(e),async function(e,t,n,a,s){if(s&&s.global)e("event",n,a);else{const s=await t;e("event",n,{...a,send_to:s})}}(Ot,qt[e.app.options.appId],t,n,a).catch(e=>Et.error(e))}(t,e,n,a),setUserProperties:(e,n)=>Ut(t,e,n)}}catch(t){throw It.create("interop-component-reg-failed",{reason:t})}},"PRIVATE")),b(Wt,Gt),b(Wt,Gt,"esm2020");const Jt="AIzaSyDFXwMrwq8g_aYDzArFRlJKHwDGqAt3ZBY",Qt="dequan-m.firebaseapp.com",Yt="dequan-m",Zt="dequan-m.firebasestorage.app",Xt="562809278262",en="1:562809278262:web:7f763a60969761ba3d2d97",tn="G-VHWWJLVYTB",nn={apiKey:Jt,authDomain:Qt,projectId:Yt,appId:en};for(const[An,kn]of Object.entries(nn))null==kn||String(kn).trim();"undefined"!=typeof window&&(null==(e=Qt)||e.includes("vercel.app"));const an={apiKey:String(Jt),authDomain:String(Qt),projectId:String(Yt),storageBucket:String(Zt),messagingSenderId:String(Xt),appId:String(en),measurementId:tn},sn=0===q().length?B(an):H(),on=$(sn);"undefined"!=typeof window&&async function(){if(k())return!1;if(!M())return!1;if(!T())return!1;try{return await D()}catch(e){return!1}}().then(e=>e?Kt(sn):null);const rn="dequan_google_auth_return",cn="dequan_oauth_ret";function ln(e,t){return!e.startsWith("/")||e.startsWith("//")?t:e}function dn(e){const t=function(e){const t={path:ln(e,"/admin"),exp:Date.now()+72e4};return JSON.stringify(t)}(e);try{sessionStorage.setItem(rn,t)}catch{}try{localStorage.setItem(rn,t)}catch{}const n="undefined"!=typeof location&&"https:"===location.protocol?"; Secure":"";try{document.cookie=`${cn}=${encodeURIComponent(t)}; Path=/; Max-Age=720; SameSite=Lax${n}`}catch{}}function un(){try{sessionStorage.removeItem(rn)}catch{}try{localStorage.removeItem(rn)}catch{}const e="undefined"!=typeof location&&"https:"===location.protocol?"; Secure":"";try{document.cookie=`${cn}=; Path=/; Max-Age=0; SameSite=Lax${e}`}catch{}}function pn(e){if(!e)return;const t=function(){try{const e=sessionStorage.getItem(rn);if(e)return e}catch{}try{const e=localStorage.getItem(rn);if(e)return e}catch{}try{const e=document.cookie.match(new RegExp(`(?:^|; )${cn}=([^;]*)`));if(null==e?void 0:e[1])return decodeURIComponent(e[1])}catch{}return null}(),n=function(e){if(!e)return null;try{const t=JSON.parse(e);return"string"!=typeof(null==t?void 0:t.path)||"number"!=typeof(null==t?void 0:t.exp)||Date.now()>t.exp?null:ln(t.path,"/admin")}catch{return ln(e,"/admin")}}(t);n?(un(),window.location.pathname!==n&&window.location.replace(n)):t&&un()}const mn=n.createContext(void 0);function fn({children:e}){const[a,s]=n.useState(null),[o,r]=n.useState(!0);n.useEffect(()=>{let e=!1;const t=R(on,t=>{e||(s(t),r(!1),t&&pn(t))});(async()=>{try{const e=await O(on);(null==e?void 0:e.user)&&pn(e.user)}catch{}})();const n=window.setTimeout(()=>{e||r(!1)},12e3);return()=>{e=!0,window.clearTimeout(n),t()}},[]);const i={user:a,signup:(e,t)=>W(on,e,t),login:(e,t)=>U(on,e,t),loginWithGoogle:async(e="/admin")=>{const t=new V,n="undefined"!=typeof navigator?navigator.userAgent:"",a=/Line\/[^ ]+/i.test(n),s=/FBAN|FBAV|Instagram/i.test(n);if(a){const e=new URL(window.location.href);if(!e.searchParams.has("openExternalBrowser"))return e.searchParams.set("openExternalBrowser","1"),window.location.href=e.toString(),new Promise(()=>{})}else if(s)throw alert("為保護您的帳號安全，Google 不允許在應用程式內建的瀏覽器登入。\n\n請點擊右上角選單（⋯ 或 ⋮），選擇「以系統預設瀏覽器開啟」（例如 Safari 或 Chrome）後，再試一次登入！"),new Error("WebView not supported");try{return await _(on,t),un(),"popup"}catch(o){const n=o&&"object"==typeof o&&"code"in o?String(o.code):"";if("auth/popup-blocked"===n||"auth/operation-not-supported-in-this-environment"===n)return dn(e),await K(on,t),"redirect";throw o}},logout:()=>(un(),z(on)),isAuthenticated:Boolean(a)};return t.jsx(mn.Provider,{"data-loc":"client/src/contexts/AuthContext.tsx:243",value:i,children:!o&&e})}const hn=()=>{const e=n.useContext(mn);if(!e)throw new Error("useAuth 必須在 AuthProvider 內使用");return e},gn=[{id:"business-card",title:"名片設計",description:"單面300雙面500。",price:300},{id:"logo-design",title:"logo設計",description:"$1000。",price:1e3},{id:"ad-copy",title:"廣告文宣",description:"$500/頁",price:500},{id:"static-website",title:"靜態網站架設",description:"1-3萬",price:1e4},{id:"dynamic-website",title:"動態網站架設",description:"依照客人需求報價"},{id:"press-release",title:"新聞稿撰寫",description:"$3000",price:3e3},{id:"interview",title:"人物專訪",description:"＄6000",price:6e3},{id:"public-relations",title:"公關媒體",description:"依據客人需求報價"},{id:"integrated-marketing",title:"整合行銷",description:"依照客人需求報價"},{id:"grant-plan",title:"政府補助計畫",description:"依據客人需求報價"},{id:"rubber-export",title:"塑橡膠外銷",description:"依照客人需求報價"}],xn=[{...gn[0],icon:s},{...gn[1],icon:o},{...gn[2],icon:r},{...gn[3],icon:i},{...gn[4],icon:c},{...gn[5],icon:l},{...gn[6],icon:d},{...gn[7],icon:u},{...gn[8],icon:p},{...gn[9],icon:i},{...gn[10],icon:c}],yn="dequan-cart",wn=n.createContext(void 0);function vn(){if("undefined"==typeof window)return[];try{const e=window.localStorage.getItem(yn);return(e?JSON.parse(e):[]).map(e=>{const t=xn.find(t=>t.id===e.id);return t?{...t,quantity:Math.max(1,Math.min(Number(e.quantity)||1,99))}:null}).filter(Boolean)}catch{return[]}}function bn({children:e}){const[a,s]=n.useState(vn),[o,r]=n.useState(!1);n.useEffect(()=>{const e=a.map(({id:e,quantity:t})=>({id:e,quantity:t}));window.localStorage.setItem(yn,JSON.stringify(e))},[a]);const i=n.useMemo(()=>{const e=a.reduce((e,t)=>e+t.quantity,0),t=a.reduce((e,t)=>e+(t.price?t.price*t.quantity:0),0),n=a.filter(e=>!e.price).length;return{items:a,isCartOpen:o,totalQuantity:e,fixedSubtotal:t,quoteItemCount:n,addItem:e=>{s(t=>t.find(t=>t.id===e.id)?t.map(t=>t.id===e.id?{...t,quantity:Math.min(t.quantity+1,99)}:t):[...t,{...e,quantity:1}])},updateQuantity:(e,t)=>{s(n=>n.map(n=>n.id===e?{...n,quantity:Math.max(1,Math.min(t,99))}:n).filter(e=>e.quantity>0))},removeItem:e=>{s(t=>t.filter(t=>t.id!==e))},clearCart:()=>s([]),openCart:()=>r(!0),closeCart:()=>r(!1),setCartOpen:r}},[o,a]);return t.jsx(wn.Provider,{"data-loc":"client/src/contexts/CartContext.tsx:111",value:i,children:e})}function jn(){const e=n.useContext(wn);if(!e)throw new Error("useCart must be used within CartProvider");return e}function Cn(){const[e,a]=n.useState(!1),{openCart:s,totalQuantity:o}=jn(),{user:r,logout:i,isAuthenticated:c}=hn(),l=[{label:"首頁",href:"/"},{label:"關於我們",href:"#about"},{label:"服務項目",href:"#services"},{label:"聯絡我們",href:"#contact"}];return t.jsx("header",{"data-loc":"client/src/components/Header.tsx:20",className:"sticky top-0 z-50 bg-white shadow-sm",style:{borderBottom:"1px solid #E8E6E1"},children:t.jsxs("div",{"data-loc":"client/src/components/Header.tsx:21",className:"container",children:[t.jsxs("div",{"data-loc":"client/src/components/Header.tsx:22",className:"flex items-center justify-between h-20",children:[t.jsx(Le,{"data-loc":"client/src/components/Header.tsx:23",href:"/",children:t.jsxs("a",{"data-loc":"client/src/components/Header.tsx:24",className:"flex items-center gap-3 transition-opacity",style:{opacity:1},onMouseEnter:e=>e.currentTarget.style.opacity="0.8",onMouseLeave:e=>e.currentTarget.style.opacity="1",children:[t.jsx("img",{"data-loc":"client/src/components/Header.tsx:25",src:"https://d2xsxph8kpxj0f.cloudfront.net/310519663070144485/aSt5pv6mkSff6ez8cLV8EV/logo_ff0fe2ce.jpg",alt:"德全有限公司 Logo",loading:"lazy",decoding:"async",className:"h-12 w-auto"}),t.jsxs("div",{"data-loc":"client/src/components/Header.tsx:32",className:"hidden sm:flex flex-col",children:[t.jsx("span",{"data-loc":"client/src/components/Header.tsx:33",className:"font-bold text-lg",style:{color:"#2B8A8A"},children:"德全"}),t.jsx("span",{"data-loc":"client/src/components/Header.tsx:34",className:"text-xs",style:{color:"#2C3E50"},children:"DEQUAN-M CO.LTD"})]})]})}),t.jsxs("nav",{"data-loc":"client/src/components/Header.tsx:39",className:"hidden md:flex items-center gap-8",children:[l.map(e=>t.jsx("a",{"data-loc":"client/src/components/Header.tsx:41",href:e.href,className:"font-medium transition-colors duration-300",style:{color:"#2C3E50"},onMouseEnter:e=>e.currentTarget.style.color="#2B8A8A",onMouseLeave:e=>e.currentTarget.style.color="#2C3E50",children:e.label},e.href)),c&&t.jsx("a",{"data-loc":"client/src/components/Header.tsx:53",href:"/admin",className:"font-medium transition-colors duration-300",style:{color:"#2C3E50"},onMouseEnter:e=>e.currentTarget.style.color="#2B8A8A",onMouseLeave:e=>e.currentTarget.style.color="#2C3E50",children:"管理後台"})]}),t.jsxs("div",{"data-loc":"client/src/components/Header.tsx:65",className:"flex items-center gap-3",children:[c?t.jsxs("div",{"data-loc":"client/src/components/Header.tsx:67",className:"hidden md:flex items-center gap-3 mr-2",children:[t.jsxs("div",{"data-loc":"client/src/components/Header.tsx:68",className:"flex items-center gap-2 text-sm font-medium",style:{color:"#2C3E50"},children:[t.jsx(m,{"data-loc":"client/src/components/Header.tsx:69",className:"w-4 h-4"}),t.jsx("span",{"data-loc":"client/src/components/Header.tsx:70",children:(null==r?void 0:r.displayName)||(null==r?void 0:r.email)})]}),t.jsxs("button",{"data-loc":"client/src/components/Header.tsx:72",onClick:i,className:"flex items-center gap-1 text-sm font-medium text-red-500 hover:text-red-600 transition-colors",children:[t.jsx(f,{"data-loc":"client/src/components/Header.tsx:76",className:"w-4 h-4"}),t.jsx("span",{"data-loc":"client/src/components/Header.tsx:77",children:"登出"})]})]}):t.jsx(Le,{"data-loc":"client/src/components/Header.tsx:81",href:"/login",children:t.jsxs("a",{"data-loc":"client/src/components/Header.tsx:82",className:"hidden md:flex items-center gap-2 text-sm font-medium transition-colors px-3 py-2 rounded-lg hover:bg-[#E8E6E1]",style:{color:"#2B8A8A",backgroundColor:"#F5F1E8"},children:[t.jsx(m,{"data-loc":"client/src/components/Header.tsx:83",className:"w-4 h-4"}),t.jsx("span",{"data-loc":"client/src/components/Header.tsx:84",children:"登入 / 註冊"})]})}),t.jsxs("button",{"data-loc":"client/src/components/Header.tsx:89",className:"relative inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors",style:{backgroundColor:"#F5F1E8"},onClick:s,"aria-label":"開啟購物車",children:[t.jsx(h,{"data-loc":"client/src/components/Header.tsx:95",className:"w-5 h-5",style:{color:"#2B8A8A"}}),o>0&&t.jsx("span",{"data-loc":"client/src/components/Header.tsx:97",className:"absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#F5A623] px-1 text-xs font-bold text-white",children:o})]}),t.jsx("button",{"data-loc":"client/src/components/Header.tsx:103",className:"md:hidden p-2 rounded-lg transition-colors",style:{backgroundColor:"#F5F1E8"},onClick:()=>a(!e),"aria-label":"Toggle menu",children:e?t.jsx(g,{"data-loc":"client/src/components/Header.tsx:110",className:"w-6 h-6",style:{color:"#2B8A8A"}}):t.jsx(x,{"data-loc":"client/src/components/Header.tsx:112",className:"w-6 h-6",style:{color:"#2B8A8A"}})})]})]}),e&&t.jsxs("nav",{"data-loc":"client/src/components/Header.tsx:119",className:"md:hidden pb-4",style:{borderTop:"1px solid #E8E6E1"},children:[l.map(e=>t.jsx("a",{"data-loc":"client/src/components/Header.tsx:121",href:e.href,className:"block px-4 py-3 font-medium transition-colors",style:{color:"#2C3E50"},onMouseEnter:e=>e.currentTarget.style.backgroundColor="#F5F1E8",onMouseLeave:e=>e.currentTarget.style.backgroundColor="transparent",onClick:()=>a(!1),children:e.label},e.href)),c?t.jsxs(t.Fragment,{children:[t.jsx("a",{"data-loc":"client/src/components/Header.tsx:135",href:"/admin",className:"block px-4 py-3 font-medium transition-colors",style:{color:"#2C3E50"},onMouseEnter:e=>e.currentTarget.style.backgroundColor="#F5F1E8",onMouseLeave:e=>e.currentTarget.style.backgroundColor="transparent",onClick:()=>a(!1),children:"管理後台"}),t.jsx("button",{"data-loc":"client/src/components/Header.tsx:145",type:"button",onClick:()=>{i(),a(!1)},className:"w-full text-left block px-4 py-3 text-sm font-medium text-red-500 transition-colors hover:bg-[#F5F1E8]",children:"登出"})]}):t.jsx(Le,{"data-loc":"client/src/components/Header.tsx:157",href:"/login",children:t.jsxs("a",{"data-loc":"client/src/components/Header.tsx:158",className:"block px-4 py-3 text-sm font-medium transition-colors flex items-center gap-2",style:{color:"#2B8A8A"},onClick:()=>a(!1),children:[t.jsx(m,{"data-loc":"client/src/components/Header.tsx:163",className:"w-4 h-4"}),t.jsx("span",{"data-loc":"client/src/components/Header.tsx:164",children:"會員登入 / 註冊"})]})})]})]})})}function En(e){return t.jsx("svg",{"data-loc":"client/src/components/LineIcon.tsx:5",viewBox:"0 0 24 24",fill:"currentColor",...e,children:t.jsx("path",{"data-loc":"client/src/components/LineIcon.tsx:6",d:"M19.365 9.863c.349.0.63.285.63.631.0.345-.281.63-.63.63H17.61v1.125h1.755c.349.0.63.283.63.63.0.344-.281.629-.63.629h-2.386c-.345.0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.346.0.627.285.627.63.0.349-.281.63-.627.63H17.61v1.125h1.755zm-3.855 3.016c0 .268-.156.514-.398.608-.241.094-.52.031-.703-.158l-2.427-2.628v2.178c0 .344-.282.629-.631.629-.344.0-.629-.285-.629-.629V8.108c0-.264.156-.51.395-.604.24-.094.516-.031.701.158l2.427 2.628V8.108c0-.345.285-.63.631-.63.344.0.63.285.63.63v4.771zm-5.741.0c0 .344-.282.629-.631.629-.345.0-.629-.285-.629-.629V8.108c0-.345.284-.63.629-.63.349.0.631.285.631.63v4.771zm-2.466.0c0 .344-.285.629-.631.629H4.286c-.345.0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348.0.63.285.63.63v3.514h2.386c.346.0.63.285.63.63zM24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314z"})})}function In(e){return t.jsxs("svg",{"data-loc":"client/src/components/WeChatIcon.tsx:5",viewBox:"0 0 16 16",fill:"currentColor",...e,children:[t.jsx("path",{"data-loc":"client/src/components/WeChatIcon.tsx:6",d:"M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"}),t.jsx("path",{"data-loc":"client/src/components/WeChatIcon.tsx:7",d:"M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"})]})}function Fn(){return t.jsx("footer",{"data-loc":"client/src/components/Footer.tsx:8",style:{backgroundColor:"#2C3E50",color:"white"},children:t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:9",className:"container section-spacing",children:[t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:10",className:"grid grid-cols-1 md:grid-cols-3 gap-12 mb-12",children:[t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:11",children:[t.jsx("h3",{"data-loc":"client/src/components/Footer.tsx:12",className:"text-xl font-semibold mb-4",style:{color:"#F5A623"},children:"德全有限公司"}),t.jsx("p",{"data-loc":"client/src/components/Footer.tsx:13",className:"text-sm",style:{color:"#9CA3AF"},children:"DEQUAN-M CO.LTD"})]}),t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:16",children:[t.jsx("h3",{"data-loc":"client/src/components/Footer.tsx:17",className:"text-xl font-semibold mb-4",style:{color:"#F5A623"},children:"快速連結"}),t.jsxs("ul",{"data-loc":"client/src/components/Footer.tsx:18",className:"space-y-2",children:[t.jsx("li",{"data-loc":"client/src/components/Footer.tsx:19",children:t.jsx("a",{"data-loc":"client/src/components/Footer.tsx:20",href:"#",className:"transition-colors",style:{color:"#D1D5DB"},onMouseEnter:e=>e.currentTarget.style.color="#F5A623",onMouseLeave:e=>e.currentTarget.style.color="#D1D5DB",children:"首頁"})}),t.jsx("li",{"data-loc":"client/src/components/Footer.tsx:24",children:t.jsx("a",{"data-loc":"client/src/components/Footer.tsx:25",href:"#about",className:"transition-colors",style:{color:"#D1D5DB"},onMouseEnter:e=>e.currentTarget.style.color="#F5A623",onMouseLeave:e=>e.currentTarget.style.color="#D1D5DB",children:"關於我們"})}),t.jsx("li",{"data-loc":"client/src/components/Footer.tsx:29",children:t.jsx("a",{"data-loc":"client/src/components/Footer.tsx:30",href:"#services",className:"transition-colors",style:{color:"#D1D5DB"},onMouseEnter:e=>e.currentTarget.style.color="#F5A623",onMouseLeave:e=>e.currentTarget.style.color="#D1D5DB",children:"服務項目"})}),t.jsx("li",{"data-loc":"client/src/components/Footer.tsx:34",children:t.jsx("a",{"data-loc":"client/src/components/Footer.tsx:35",href:"#contact",className:"transition-colors",style:{color:"#D1D5DB"},onMouseEnter:e=>e.currentTarget.style.color="#F5A623",onMouseLeave:e=>e.currentTarget.style.color="#D1D5DB",children:"聯絡我們"})})]})]}),t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:42",children:[t.jsx("h3",{"data-loc":"client/src/components/Footer.tsx:43",className:"text-xl font-semibold mb-4",style:{color:"#F5A623"},children:"聯絡方式"}),t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:44",className:"space-y-3",children:[t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:45",className:"flex items-start gap-3",children:[t.jsx(y,{"data-loc":"client/src/components/Footer.tsx:46",className:"w-5 h-5 mt-0.5 flex-shrink-0",style:{color:"#F5A623"}}),t.jsx("span",{"data-loc":"client/src/components/Footer.tsx:47",style:{color:"#D1D5DB"},children:"0930137329"})]}),t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:49",className:"flex items-start gap-3",children:[t.jsx(w,{"data-loc":"client/src/components/Footer.tsx:50",className:"w-5 h-5 mt-0.5 flex-shrink-0",style:{color:"#F5A623"}}),t.jsx("a",{"data-loc":"client/src/components/Footer.tsx:51",href:"mailto:ginji7579@gmail.com",className:"transition-colors",style:{color:"#D1D5DB"},onMouseEnter:e=>e.currentTarget.style.color="#F5A623",onMouseLeave:e=>e.currentTarget.style.color="#D1D5DB",children:"ginji7579@gmail.com"})]}),t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:55",className:"flex items-start gap-3",children:[t.jsx(En,{"data-loc":"client/src/components/Footer.tsx:56",className:"w-5 h-5 mt-0.5 flex-shrink-0",style:{color:"#F5A623"}}),t.jsx("span",{"data-loc":"client/src/components/Footer.tsx:57",style:{color:"#D1D5DB"},children:"ginji7579"})]}),t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:59",className:"flex items-start gap-3",children:[t.jsx(In,{"data-loc":"client/src/components/Footer.tsx:60",className:"w-5 h-5 mt-0.5 flex-shrink-0",style:{color:"#F5A623"}}),t.jsx("span",{"data-loc":"client/src/components/Footer.tsx:61",style:{color:"#D1D5DB"},children:"ginji7579"})]}),t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:63",className:"flex items-start gap-3",children:[t.jsx(v,{"data-loc":"client/src/components/Footer.tsx:64",className:"w-5 h-5 mt-0.5 flex-shrink-0",style:{color:"#F5A623"}}),t.jsx("a",{"data-loc":"client/src/components/Footer.tsx:65",href:"https://maps.google.com/?q=台北市信義區松德路65號11樓之2",target:"_blank",rel:"noopener noreferrer",className:"transition-colors",style:{color:"#D1D5DB"},onMouseEnter:e=>e.currentTarget.style.color="#F5A623",onMouseLeave:e=>e.currentTarget.style.color="#D1D5DB",children:"台北市信義區松德路65號11樓之2"})]})]})]})]}),t.jsx("div",{"data-loc":"client/src/components/Footer.tsx:73",style:{borderTop:"1px solid #4B5563",paddingTop:"2rem"},children:t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:74",className:"flex flex-col md:flex-row justify-between items-center text-sm",style:{color:"#9CA3AF"},children:[t.jsx("p",{"data-loc":"client/src/components/Footer.tsx:75",children:"© 德全有限公司 (DEQUAN-M CO.LTD). 版權所有。"}),t.jsxs("div",{"data-loc":"client/src/components/Footer.tsx:76",className:"flex gap-6 mt-4 md:mt-0",children:[t.jsx("a",{"data-loc":"client/src/components/Footer.tsx:77",href:"#",className:"transition-colors",onMouseEnter:e=>e.currentTarget.style.color="#F5A623",onMouseLeave:e=>e.currentTarget.style.color="#9CA3AF",children:"隱私政策"}),t.jsx("a",{"data-loc":"client/src/components/Footer.tsx:80",href:"#",className:"transition-colors",onMouseEnter:e=>e.currentTarget.style.color="#F5A623",onMouseLeave:e=>e.currentTarget.style.color="#9CA3AF",children:"服務條款"})]})]})})]})})}function Sn(){const[e,a]=n.useState(""),[s,o]=n.useState(""),[r,i]=n.useState(""),[,c]=Ne(),{login:l,loginWithGoogle:d}=hn();return t.jsxs("div",{"data-loc":"client/src/pages/Login.tsx:46",className:"min-h-screen flex flex-col bg-[#FAFAFA]",children:[t.jsx(Cn,{"data-loc":"client/src/pages/Login.tsx:47"}),t.jsx("main",{"data-loc":"client/src/pages/Login.tsx:49",className:"flex-1 flex items-center justify-center p-4",children:t.jsxs("div",{"data-loc":"client/src/pages/Login.tsx:50",className:"w-full max-w-md bg-white rounded-2xl shadow-sm border border-[#E8E6E1] p-8",children:[t.jsxs("div",{"data-loc":"client/src/pages/Login.tsx:51",className:"text-center mb-8",children:[t.jsx("h1",{"data-loc":"client/src/pages/Login.tsx:52",className:"text-2xl font-bold mb-2",style:{color:"#2B8A8A"},children:"會員登入"}),t.jsx("p",{"data-loc":"client/src/pages/Login.tsx:53",className:"text-[#2C3E50] text-sm",children:"歡迎回到德全，請輸入您的帳號密碼"}),r&&t.jsx("p",{"data-loc":"client/src/pages/Login.tsx:55",className:"mt-4 text-sm text-red-600",role:"alert",children:r})]}),t.jsxs("form",{"data-loc":"client/src/pages/Login.tsx:61",onSubmit:async t=>{t.preventDefault(),i("");try{await l(e,s),c("/admin")}catch(n){i(n.message||"登入失敗，請稍後再試")}},className:"space-y-6",children:[t.jsxs("div",{"data-loc":"client/src/pages/Login.tsx:62",children:[t.jsx("label",{"data-loc":"client/src/pages/Login.tsx:63",className:"block text-sm font-medium text-[#2C3E50] mb-2",children:"電子郵件"}),t.jsx("input",{"data-loc":"client/src/pages/Login.tsx:66",type:"email",required:!0,value:e,onChange:e=>a(e.target.value),className:"w-full px-4 py-3 rounded-lg border border-[#E8E6E1] focus:outline-none focus:ring-2 focus:ring-[#2B8A8A] focus:border-transparent transition-all bg-[#FAFAFA]",placeholder:"請輸入 Email"})]}),t.jsxs("div",{"data-loc":"client/src/pages/Login.tsx:76",children:[t.jsx("label",{"data-loc":"client/src/pages/Login.tsx:77",className:"block text-sm font-medium text-[#2C3E50] mb-2",children:"密碼"}),t.jsx("input",{"data-loc":"client/src/pages/Login.tsx:80",type:"password",required:!0,value:s,onChange:e=>o(e.target.value),className:"w-full px-4 py-3 rounded-lg border border-[#E8E6E1] focus:outline-none focus:ring-2 focus:ring-[#2B8A8A] focus:border-transparent transition-all bg-[#FAFAFA]",placeholder:"請輸入密碼"})]}),t.jsx("button",{"data-loc":"client/src/pages/Login.tsx:90",type:"submit",className:"w-full py-3 px-4 rounded-lg text-white font-medium transition-transform active:scale-[0.98]",style:{backgroundColor:"#2B8A8A"},children:"登入"})]}),t.jsxs("div",{"data-loc":"client/src/pages/Login.tsx:99",className:"my-6 flex items-center gap-4",children:[t.jsx("div",{"data-loc":"client/src/pages/Login.tsx:100",className:"flex-1 h-px",style:{backgroundColor:"#E8E6E1"}}),t.jsx("span",{"data-loc":"client/src/pages/Login.tsx:101",className:"text-xs text-[#2C3E50]",children:"或"}),t.jsx("div",{"data-loc":"client/src/pages/Login.tsx:102",className:"flex-1 h-px",style:{backgroundColor:"#E8E6E1"}})]}),t.jsxs("button",{"data-loc":"client/src/pages/Login.tsx:105",type:"button",onClick:async()=>{i("");try{"popup"===await d("/admin")&&c("/admin")}catch(e){const t=(null==e?void 0:e.code)??"";i("auth/argument-error"===t?"Firebase 設定異常（常見：Vercel 缺少 VITE_FIREBASE_* 或金鑰為空）。請到 Vercel 專案 Environment Variables 檢查後重新部署。":e.message||"Google 登入失敗，請稍後再試")}},className:"w-full py-3 px-4 rounded-lg border border-[#E8E6E1] font-medium transition-colors hover:bg-[#F5F1E8] flex items-center justify-center gap-2",style:{color:"#2C3E50"},children:[t.jsxs("svg",{"data-loc":"client/src/pages/Login.tsx:111",className:"w-5 h-5",viewBox:"0 0 24 24",children:[t.jsx("path",{"data-loc":"client/src/pages/Login.tsx:112",fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),t.jsx("path",{"data-loc":"client/src/pages/Login.tsx:116",fill:"currentColor",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),t.jsx("path",{"data-loc":"client/src/pages/Login.tsx:120",fill:"currentColor",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),t.jsx("path",{"data-loc":"client/src/pages/Login.tsx:124",fill:"currentColor",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"使用 Google 登入"]}),t.jsxs("div",{"data-loc":"client/src/pages/Login.tsx:132",className:"mt-8 text-center text-sm",children:[t.jsx("span",{"data-loc":"client/src/pages/Login.tsx:133",className:"text-gray-500",children:"還沒有帳號嗎？"}),t.jsx(Le,{"data-loc":"client/src/pages/Login.tsx:134",href:"/register",children:t.jsx("a",{"data-loc":"client/src/pages/Login.tsx:135",className:"ml-2 font-medium hover:underline",style:{color:"#F5A623"},children:"立即註冊"})})]})]})}),t.jsx(Fn,{"data-loc":"client/src/pages/Login.tsx:143"})]})}function Nn(){const[e,a]=n.useState(""),[s,o]=n.useState(""),[r,i]=n.useState(""),{signup:c}=hn();return t.jsxs("form",{"data-loc":"client/src/pages/Register.tsx:22",onSubmit:async t=>{t.preventDefault(),i("");try{await c(e,s),alert("註冊成功！")}catch(n){i(n.message)}},children:[t.jsx("h2",{"data-loc":"client/src/pages/Register.tsx:23",children:"會員註冊"}),r&&t.jsx("p",{"data-loc":"client/src/pages/Register.tsx:24",style:{color:"red"},children:r}),t.jsxs("div",{"data-loc":"client/src/pages/Register.tsx:25",children:[t.jsx("label",{"data-loc":"client/src/pages/Register.tsx:26",children:"Email"}),t.jsx("input",{"data-loc":"client/src/pages/Register.tsx:27",type:"email",value:e,onChange:e=>a(e.target.value),required:!0,placeholder:"your@email.com"})]}),t.jsxs("div",{"data-loc":"client/src/pages/Register.tsx:35",children:[t.jsx("label",{"data-loc":"client/src/pages/Register.tsx:36",children:"密碼"}),t.jsx("input",{"data-loc":"client/src/pages/Register.tsx:37",type:"password",value:s,onChange:e=>o(e.target.value),required:!0,placeholder:"至少 6 碼"})]}),t.jsx("button",{"data-loc":"client/src/pages/Register.tsx:45",type:"submit",children:"註冊"})]})}export{fn as A,bn as C,Fn as F,Cn as H,Le as L,De as R,He as S,In as W,Ne as a,jn as b,Sn as c,Nn as d,En as e,xn as s,hn as u};
