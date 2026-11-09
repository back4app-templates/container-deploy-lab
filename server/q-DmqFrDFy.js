import{j as b,e as xe,s as ve,f as Ne,F as H,g as Le,c as W,i as E,u as oe,h as Re,k as ae,b as k,d as _,l as je,S as Te,m as Ae,n as O,o as Oe,p as Y,q as $,r as Be,t as Qe,w as Fe,x as be,y as P,z as Ue,A as ye,B as ze,C as ce,D as Me,E as B}from"./q-rhhiYon3.js";const ue={manifestHash:"x5qzc4",core:"q-DGixNSXh.js",preloader:"q-BKZ00VYc.js",qwikLoader:"q-naDMFAHy.js",bundleGraphAsset:"assets/DFzdVzkY-bundle-graph.json",injections:[],mapping:{s_01D2CZBcrt8:"q-CuL5zp3F.js",s_ClVP2zDOTfg:"q-D2q8vwyU.js",s_eIIX9NHZMTM:"q-B99crvbW.js",s_5LCQmdZt8P0:"q-DSmqNSV2.js",s_0gNuedzPE00:"q-YSNWROsc.js",s_0rwOtqwQDq4:"q-CDeJR8Em.js",s_P4VplBsv458:"q-DImSn0Jf.js",s_dLKwFUQnW4c:"q-Dy1RtTHT.js",s_eDqSNzsWqWI:"q-CuL5zp3F.js",s_fvYCaMUzHn8:"q-D18sBGfm.js",s_igf0lrm5O7g:"q-kbrZ9KzS.js",s_luGbx6WWbh0:"q-8fEEtzuT.js",s_yUN1OX3JY80:"q-D2q8vwyU.js",s_k1SdQUXvzH0:"q-CuL5zp3F.js",s_5qWbdv7GW4g:"q-DmFp10R4.js",s_FmEH2REx1y8:"q-CXQKwauL.js",s_aFb4IzwhoQQ:"q-paCXIGEC.js",s_l3j4bCOAP3s:"q-Kz1CgZMF.js",s_3deIlqO1asI:"q-CuL5zp3F.js",s_7N1e5wu2FJ8:"q-CuL5zp3F.js",s_8Xd1ImtGhM0:"q-D18sBGfm.js",s_Fq9ZxgV6oG8:"q-D2q8vwyU.js",s_LTHP06LiX0k:"q-8fEEtzuT.js",s_YodsHWjN6pY:"q-DImSn0Jf.js",s_ZHjlMNmB0eE:"q-8fEEtzuT.js",s_aISg0pu3d6g:"q-D18sBGfm.js",s_lf0PauMYN0k:"q-D18sBGfm.js"}};var He=!1,We="",Ge=(e,...t)=>{const n=Ke(He,e,...t);debugger;return n},Je=e=>e,Ke=(e,t,...n)=>{const r=t instanceof Error?t:new Error(t);return console.error("%cQWIK ERROR",We,r.message,...Je(n),r.stack),r},Ve=(e,...t)=>`Code(${e}) https://github.com/QwikDev/qwik/blob/main/packages/qwik/src/core/error/error.ts#L${8+e}`,Ye=11,Xe=(e,...t)=>{const n=Ve(e,...t);return Ge(n,...t)},Ze="<sync>";function ge(e,t){const n=t?.mapper,r=e.symbolMapper?e.symbolMapper:(o,a,i)=>{if(n){const l=U(o),c=n[l];if(!c){if(l===Ze)return[l,""];if(globalThis.__qwik_reg_symbols?.has(l))return[o,"_"];if(i)return[o,`${i}?qrl=${o}`];console.error("Cannot resolve symbol",o,"in",n,i)}return c}};return{isServer:!0,async importSymbol(o,a,i){const l=U(i),c=globalThis.__qwik_reg_symbols?.get(l);if(c)return c;throw Xe(Ye,i)},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(a=>{setTimeout(()=>{a(o())})}),chunkForSymbol(o,a,i){return r(o,n,i)}}}async function et(e,t){const n=ge(e,t);ve(n)}var U=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e},tt="q:instance",Z={$DEBUG$:!1,$invPreloadProbability$:.65},nt=Date.now(),rt=/\.[mc]?js$/,qe=0,st=1,ot=2,at=3,ee,te,it=(e,t)=>({$name$:e,$state$:rt.test(e)?qe:at,$deps$:_e?t?.map(n=>({...n,$factor$:1})):t,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),lt=e=>{const t=new Map;let n=0;for(;n<e.length;){const r=e[n++],s=[];let o,a=1;for(;o=e[n],typeof o=="number";)o<0?a=-o/10:s.push({$name$:e[o],$importProbability$:a,$factor$:1}),n++;t.set(r,s)}return t},we=e=>{let t=ne.get(e);if(!t){let n;if(te){if(n=te.get(e),!n)return;n.length||(n=void 0)}t=it(e,n),ne.set(e,t)}return t},ct=(e,t)=>{t&&("debug"in t&&(Z.$DEBUG$=!!t.debug),typeof t.preloadProbability=="number"&&(Z.$invPreloadProbability$=1-t.preloadProbability)),!(ee!=null||!e)&&(ee="",te=lt(e))},ne=new Map,_e,z,Se=0,j=[],ut=(...e)=>{console.log(`Preloader ${Date.now()-nt}ms ${Se}/${j.length} queued>`,...e)},ft=()=>{ne.clear(),z=!1,_e=!0,Se=0,j.length=0},dt=()=>{z&&(j.sort((e,t)=>e.$inverseProbability$-t.$inverseProbability$),z=!1)},mt=()=>{dt();let e=.4;const t=[];for(const n of j){const r=Math.round((1-n.$inverseProbability$)*10);r!==e&&(e=r,t.push(e)),t.push(n.$name$)}return t},$e=(e,t,n)=>{if(n?.has(e))return;const r=e.$inverseProbability$;if(e.$inverseProbability$=t,!(r-e.$inverseProbability$<.01)&&(ee!=null&&e.$state$<ot&&(e.$state$===qe&&(e.$state$=st,j.push(e),Z.$DEBUG$&&ut(`queued ${Math.round((1-e.$inverseProbability$)*100)}%`,e.$name$)),z=!0),e.$deps$)){n||(n=new Set),n.add(e);const s=1-e.$inverseProbability$;for(const o of e.$deps$){const a=we(o.$name$);if(a.$inverseProbability$===0)continue;let i;if(s===1||s>=.99&&re<100)re++,i=Math.min(.01,1-o.$importProbability$);else{const l=1-o.$importProbability$*s,c=o.$factor$,f=l/c;i=Math.max(.02,a.$inverseProbability$*f),o.$factor$=f}$e(a,i,n)}}},fe=(e,t)=>{const n=we(e);n&&n.$inverseProbability$>t&&$e(n,t)},re,pt=(e,t)=>{if(!e?.length)return;re=0;let n=t?1-t:.4;if(Array.isArray(e))for(let r=e.length-1;r>=0;r--){const s=e[r];typeof s=="number"?n=1-s/10:fe(s,n)}else fe(e,n)};function ht(e){const t=[],n=r=>{if(r)for(const s of r)t.includes(s.url)||(t.push(s.url),s.imports&&n(s.imports))};return n(e),t}var vt=e=>{const t=Le(),n=e?.qrls?.map(r=>{const s=r.$refSymbol$||r.$symbol$,o=r.$chunk$,a=t.chunkForSymbol(s,o,r.dev?.file);return a?a[1]:o}).filter(Boolean);return[...new Set(n)]};function bt(e,t,n){const r=t.prefetchStrategy;if(r===null)return[];if(!n?.manifest.bundleGraph)return vt(e);if(typeof r?.symbolsToPrefetch=="function")try{const o=r.symbolsToPrefetch({manifest:n.manifest});return ht(o)}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}const s=new Set;for(const o of e?.qrls||[]){const a=U(o.$refSymbol$||o.$symbol$);a&&a.length>=10&&s.add(a)}return[...s]}var yt=(e,t)=>{if(!t?.manifest.bundleGraph)return[...new Set(e)];ft();let n=.99;for(const r of e.slice(0,15))pt(r,n),n*=.85;return mt()},se=(e,t)=>{if(t==null)return null;const n=`${e}${t}`.split("/"),r=[];for(const s of n)s===".."&&r.length>0?r.pop():r.push(s);return r.join("/")},gt=(e,t,n,r,s)=>{const o=se(e,t?.manifest?.preloader),a="/"+t?.manifest.bundleGraphAsset;if(o&&a&&n!==!1){const l=typeof n=="object"?{debug:n.debug,preloadProbability:n.ssrPreloadProbability}:void 0;ct(t?.manifest.bundleGraph,l);const c=[];n?.debug&&c.push("d:1"),n?.maxIdlePreloads&&c.push(`P:${n.maxIdlePreloads}`),n?.preloadProbability&&c.push(`Q:${n.preloadProbability}`);const f=c.length?`,{${c.join(",")}}`:"",u=`let b=fetch("${a}");import("${o}").then(({l})=>l(${JSON.stringify(e)},b${f}));`;r.push(b("link",{rel:"modulepreload",href:o,nonce:s,crossorigin:"anonymous"}),b("link",{rel:"preload",href:a,as:"fetch",crossorigin:"anonymous",nonce:s}),b("script",{type:"module",async:!0,dangerouslySetInnerHTML:u,nonce:s}))}const i=se(e,t?.manifest.core);i&&r.push(b("link",{rel:"modulepreload",href:i,nonce:s}))},qt=(e,t,n,r,s)=>{if(r.length===0||n===!1)return null;const{ssrPreloads:o,ssrPreloadProbability:a}=_t(typeof n=="boolean"?void 0:n);let i=o;const l=[],c=[],f=t?.manifest.manifestHash;if(i){const d=t?.manifest.preloader,h=t?.manifest.core,g=yt(r,t);let w=4;const x=a*10;for(const v of g)if(typeof v=="string"){if(w<x)break;if(v===d||v===h)continue;if(c.push(v),--i===0)break}else w=v}const u=se(e,f&&t?.manifest.preloader);let y=c.length?`${JSON.stringify(c)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(e)}+l;document.head.appendChild(e)});`:"";return u&&(y+=`window.addEventListener('load',f=>{f=_=>import("${u}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),y&&l.push(b("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:y,nonce:s})),l.length>0?b(H,{children:l}):null},wt=(e,t,n,r,s)=>{if(n.preloader!==!1){const o=bt(t,n,r);if(o.length>0){const a=qt(e,r,n.preloader,o,n.serverData?.nonce);a&&s.push(a)}}};function _t(e){return{...St,...e}}var St={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},$t='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach(n=>e.push(...s(n,t))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach(t=>{const e=t.shadowRoot;e&&i(e)})},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach(o=>{b(o,t,e,n)})},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),b=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter(t=>t[0]===s);if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],()=>e.isConnected)(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),b=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:b,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{u("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){u("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){u("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},u=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=b(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{const s=t.readyState;if(!r&&("interactive"==s||"complete"==s)&&(o.forEach(i),r=1,u("qinit"),(e.requestIdleCallback??e.setTimeout).bind(e)(()=>u("qidle")),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),b(n.target,"",p("qvisible",n)))});t.forEach(t=>e.observe(t))}},y=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})},w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach(t=>y(t,r,q,!0)),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach(t=>y(r,t,q,!0)),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?w(...r):w("click","input")),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}',Et=`const doc = document;
const win = window;
const events = /* @__PURE__ */ new Set();
const roots = /* @__PURE__ */ new Set([doc]);
let hasInitialized;
const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
const querySelectorAll = (query) => {
  const elements = [];
  roots.forEach((root) => elements.push(...nativeQuerySelectorAll(root, query)));
  return elements;
};
const findShadowRoots = (fragment) => {
  processEventOrNode(fragment);
  nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent) => {
    const shadowRoot = parent.shadowRoot;
    shadowRoot && findShadowRoots(shadowRoot);
  });
};
const isPromise = (promise) => promise && typeof promise.then === "function";
const broadcast = (infix, ev, type = ev.type) => {
  querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el) => {
    dispatch(el, infix, ev, type);
  });
};
const resolveContainer = (containerEl) => {
  if (containerEl._qwikjson_ === void 0) {
    const parentJSON = containerEl === doc.documentElement ? doc.body : containerEl;
    let script = parentJSON.lastElementChild;
    while (script) {
      if (script.tagName === "SCRIPT" && script.getAttribute("type") === "qwik/json") {
        containerEl._qwikjson_ = JSON.parse(
          script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1")
        );
        break;
      }
      script = script.previousElementSibling;
    }
  }
};
const createEvent = (eventName, detail) => new CustomEvent(eventName, {
  detail
});
const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
  const attrName = "on" + onPrefix + ":" + eventName;
  if (element.hasAttribute("preventdefault:" + eventName)) {
    ev.preventDefault();
  }
  if (element.hasAttribute("stoppropagation:" + eventName)) {
    ev.stopPropagation();
  }
  const ctx = element._qc_;
  const relevantListeners = ctx && ctx.li.filter((li) => li[0] === attrName);
  if (relevantListeners && relevantListeners.length > 0) {
    for (const listener of relevantListeners) {
      const results = listener[1].getFn([element, ev], () => element.isConnected)(ev, element);
      const cancelBubble = ev.cancelBubble;
      if (isPromise(results)) {
        await results;
      }
      if (cancelBubble) {
        ev.stopPropagation();
      }
    }
    return;
  }
  const attrValue = element.getAttribute(attrName);
  if (attrValue) {
    const container = element.closest("[q\\\\:container]");
    const qBase = container.getAttribute("q:base");
    const qVersion = container.getAttribute("q:version") || "unknown";
    const qManifest = container.getAttribute("q:manifest-hash") || "dev";
    const base = new URL(qBase, doc.baseURI);
    for (const qrl of attrValue.split("\\n")) {
      const url = new URL(qrl, base);
      const href = url.href;
      const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
      const reqTime = performance.now();
      let handler;
      let importError;
      let error;
      const isSync = qrl.startsWith("#");
      const eventData = {
        qBase,
        qManifest,
        qVersion,
        href,
        symbol,
        element,
        reqTime
      };
      if (isSync) {
        const hash = container.getAttribute("q:instance");
        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
        if (!handler) {
          importError = "sync";
          error = new Error("sym:" + symbol);
        }
      } else {
        emitEvent("qsymbol", eventData);
        const uri = url.href.split("#")[0];
        try {
          const module = import(
                        uri
          );
          resolveContainer(container);
          handler = (await module)[symbol];
          if (!handler) {
            importError = "no-symbol";
            error = new Error(\`\${symbol} not in \${uri}\`);
          }
        } catch (err) {
          importError || (importError = "async");
          error = err;
        }
      }
      if (!handler) {
        emitEvent("qerror", {
          importError,
          error,
          ...eventData
        });
        console.error(error);
        break;
      }
      const previousCtx = doc.__q_context__;
      if (element.isConnected) {
        try {
          doc.__q_context__ = [element, ev, url];
          const results = handler(ev, element);
          if (isPromise(results)) {
            await results;
          }
        } catch (error2) {
          emitEvent("qerror", { error: error2, ...eventData });
        } finally {
          doc.__q_context__ = previousCtx;
        }
      }
    }
  }
};
const emitEvent = (eventName, detail) => {
  doc.dispatchEvent(createEvent(eventName, detail));
};
const camelToKebab = (str) => str.replace(/([A-Z])/g, (a) => "-" + a.toLowerCase());
const processDocumentEvent = async (ev) => {
  let type = camelToKebab(ev.type);
  let element = ev.target;
  broadcast("-document", ev, type);
  while (element && element.getAttribute) {
    const results = dispatch(element, "", ev, type);
    let cancelBubble = ev.cancelBubble;
    if (isPromise(results)) {
      await results;
    }
    cancelBubble || (cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type));
    element = ev.bubbles && cancelBubble !== true ? element.parentElement : null;
  }
};
const processWindowEvent = (ev) => {
  broadcast("-window", ev, camelToKebab(ev.type));
};
const processReadyStateChange = () => {
  const readyState = doc.readyState;
  if (!hasInitialized && (readyState == "interactive" || readyState == "complete")) {
    roots.forEach(findShadowRoots);
    hasInitialized = 1;
    emitEvent("qinit");
    const riC = win.requestIdleCallback ?? win.setTimeout;
    riC.bind(win)(() => emitEvent("qidle"));
    if (events.has("qvisible")) {
      const results = querySelectorAll("[on\\\\:qvisible]");
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            dispatch(entry.target, "", createEvent("qvisible", entry));
          }
        }
      });
      results.forEach((el) => observer.observe(el));
    }
  }
};
const addEventListener = (el, eventName, handler, capture = false) => {
  el.addEventListener(eventName, handler, { capture, passive: false });
};
const processEventOrNode = (...eventNames) => {
  for (const eventNameOrNode of eventNames) {
    if (typeof eventNameOrNode === "string") {
      if (!events.has(eventNameOrNode)) {
        roots.forEach(
          (root) => addEventListener(root, eventNameOrNode, processDocumentEvent, true)
        );
        addEventListener(win, eventNameOrNode, processWindowEvent, true);
        events.add(eventNameOrNode);
      }
    } else {
      if (!roots.has(eventNameOrNode)) {
        events.forEach(
          (eventName) => addEventListener(eventNameOrNode, eventName, processDocumentEvent, true)
        );
        roots.add(eventNameOrNode);
      }
    }
  }
};
if (!("__q_context__" in doc)) {
  doc.__q_context__ = 0;
  const qwikevents = win.qwikevents;
  if (qwikevents) {
    if (Array.isArray(qwikevents)) {
      processEventOrNode(...qwikevents);
    } else {
      processEventOrNode("click", "input");
    }
  }
  win.qwikevents = {
    events,
    roots,
    push: processEventOrNode
  };
  addEventListener(doc, "readystatechange", processReadyStateChange);
  processReadyStateChange();
}`;function kt(e={}){return e.debug?Et:$t}function X(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function Pt(e){let t=e.base;return typeof e.base=="function"&&(t=e.base(e)),typeof t=="string"?(t.endsWith("/")||(t+="/"),t):"/build/"}var Ct="<!DOCTYPE html>";async function It(e,t){let n=t.stream,r=0,s=0,o=0,a=0,i="",l;const c=t.streaming?.inOrder??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},f=t.containerTagName??"html",u=t.containerAttributes??{},m=n,y=X(),d=Pt(t),h=Ee(t.manifest),g=t.serverData?.nonce;function w(){i&&(m.write(i),i="",r=0,o++,o===1&&(a=y()))}function x(p){const q=p.length;r+=q,s+=q,i+=p}switch(c.strategy){case"disabled":n={write:x};break;case"direct":n=m;break;case"auto":let p=0,q=!1;const ie=c.maximunChunk??0,V=c.maximunInitialChunk??0;n={write(N){N==="<!--qkssr-f-->"?q||(q=!0):N==="<!--qkssr-pu-->"?p++:N==="<!--qkssr-po-->"?p--:x(N),p===0&&(q||r>=(o===0?V:ie))&&(q=!1,w())}};break}f==="html"?n.write(Ct):n.write("<!--cq-->"),h||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await et(t,h);const v=h?.manifest.injections,C=v?v.map(p=>b(p.tag,p.attributes??{})):[];let S=t.qwikLoader?typeof t.qwikLoader=="object"?t.qwikLoader.include==="never"?2:0:t.qwikLoader==="inline"?1:t.qwikLoader==="never"?2:0:0;const T=h?.manifest.qwikLoader;if(S===0&&!T&&(S=1),S===0)C.unshift(b("link",{rel:"modulepreload",href:`${d}${T}`,nonce:g}),b("script",{type:"module",async:!0,src:`${d}${T}`,nonce:g}));else if(S===1){const p=kt({debug:t.debug});C.unshift(b("script",{id:"qwikloader",type:"module",async:!0,nonce:g,dangerouslySetInnerHTML:p}))}gt(d,h,t.preloader,C,g);const G=X(),J=[];let A=0,I=0;await xe(e,{stream:n,containerTagName:f,containerAttributes:u,serverData:t.serverData,base:d,beforeContent:C,beforeClose:async(p,q,ie,V)=>{A=G();const N=X();l=await Ne(p,q,void 0,V);const L=[];wt(d,l,t,h,L);const De=JSON.stringify(l.state,void 0,void 0);if(L.push(b("script",{type:"qwik/json",dangerouslySetInnerHTML:xt(De),nonce:g})),l.funcs.length>0){const R=u[tt];L.push(b("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Rt(R,l.funcs),nonce:g}))}const le=Array.from(q.$events$,R=>JSON.stringify(R));if(le.length>0){const R=`(window.qwikevents||(window.qwikevents=[])).push(${le.join(",")})`;L.push(b("script",{dangerouslySetInnerHTML:R,nonce:g}))}return Nt(J,p),I=N(),b(H,{children:L})},manifestHash:h?.manifest.manifestHash||"dev"+Dt()}),f!=="html"&&n.write("<!--/cq-->"),w();const K=l.resources.some(p=>p._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:h?.manifest,size:s,isStatic:!K,timing:{render:A,snapshot:I,firstFlush:a}}}function Dt(){return Math.random().toString(36).slice(2)}function Ee(e){const t=e?{...ue,...e}:ue;if(!t||"mapper"in t)return t;if(t.mapping){const n={};return Object.entries(t.mapping).forEach(([r,s])=>{n[U(r)]=[r,s]}),{mapper:n,manifest:t,injections:t.injections||[]}}}var xt=e=>e.replace(/<(\/?script)/gi,"\\x3C$1");function Nt(e,t){for(const n of t){const r=n.$componentQrl$?.getSymbol();r&&!e.includes(r)&&e.push(r)}}var Lt='document["qFuncs_HASH"]=';function Rt(e,t){return Lt.replace("HASH",e)+`[${t.join(`,
`)}]`}async function cn(e){const t=ge({},Ee(e));ve(t)}const jt=P("qc-s"),Tt=P("qc-c"),ke=P("qc-ic"),Pe=P("qc-h"),Ce=P("qc-l"),At=P("qc-n"),Ot=P("qc-a"),Bt=P("qc-p"),Qt=Fe(Ue("s_5qWbdv7GW4g")),Ft=()=>{if(!oe("containerAttributes"))throw new Error("PrefetchServiceWorker component must be rendered on the server.");Re();const t=ae(ke);if(t.value&&t.value.length>0){const n=t.value.length;let r=null;for(let s=n-1;s>=0;s--)t.value[s].default&&(r=k(t.value[s].default,{children:r},1,"07_0"));return k(H,{children:[r,_("script",{"document:onQCInit$":Qt,"document:onQInit$":je(()=>{((s,o)=>{if(!s._qcs&&o.scrollRestoration==="manual"){s._qcs=!0;const a=o.state?._qCityScroll;a&&s.scrollTo(a.x,a.y),document.dispatchEvent(new Event("qcinit"))}})(window,history)},'()=>{((w,h)=>{if(!w._qcs&&h.scrollRestoration==="manual"){w._qcs=true;const s=h.state?._qCityScroll;if(s){w.scrollTo(s.x,s.y);}document.dispatchEvent(new Event("qcinit"));}})(window,history);}')},null,null,2,"07_1")]},1,"07_2")}return Te},Ut=W(E(Ft,"s_igf0lrm5O7g")),zt=(e,t)=>new URL(e,t.href),de=(e,t)=>e.origin===t.origin,me=e=>e.endsWith("/")?e:e+"/",Mt=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&me(e)===me(t)},Ht=(e,t)=>e.search===t.search,M=(e,t)=>Ht(e,t)&&Mt(e,t),Wt=e=>e&&typeof e.then=="function",Gt=(e,t,n,r)=>{const s=Ie(),a={head:s,withLocale:i=>ce(r,i),resolveValue:i=>{const l=i.__id;if(i.__brand==="server_loader"&&!(l in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const c=e.loaders[l];if(Wt(c))throw new Error("Loaders returning a promise can not be resolved for the head function.");return c},...t};for(let i=n.length-1;i>=0;i--){const l=n[i]&&n[i].head;l&&(typeof l=="function"?pe(s,ce(r,()=>l(a))):typeof l=="object"&&pe(s,l))}return a.head},pe=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),Q(e.meta,t.meta),Q(e.links,t.links),Q(e.styles,t.styles),Q(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},Q=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const r=e.findIndex(s=>s.key===n.key);if(r>-1){e[r]=n;continue}}e.push(n)}},Ie=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}}),Jt=()=>ae(Pe),Kt=()=>ae(Ce),Vt=()=>be(oe("qwikcity")),he={},F={navCount:0},Yt=":root{view-transition-name:none}",Xt=e=>{},Zt=async(e,t)=>{const[n,r,s,o]=ye(),{type:a="link",forceReload:i=e===void 0,replaceState:l=!1,scroll:c=!0}=typeof t=="object"?t:{forceReload:t};F.navCount++;const f=s.value.dest,u=e===void 0?f:typeof e=="number"?e:zt(e,o.url);if(he.$cbs$&&(i||typeof u=="number"||!M(u,f)||!de(u,f))){const m=F.navCount,y=await Promise.all([...he.$cbs$.values()].map(d=>d(u)));if(m!==F.navCount||y.some(Boolean)){m===F.navCount&&a==="popstate"&&history.pushState(null,"",f);return}}if(typeof u!="number"&&de(u,f)){if(!i&&M(u,f)){if(u.href!==o.url.href){const m=new URL(u.href);s.value.dest=m,o.url=m}return}return s.value={type:a,dest:u,forceReload:i,replaceState:l,scroll:c},n.value=void 0,o.isNavigating=!0,new Promise(m=>{r.r=m})}},en=({track:e})=>{const[t,n,r,s,o,a,i,l,c,f,u]=ye();async function m(){const d=e(f),h=e(t),g=ze(""),w=u.url,x=h?"form":d.type;d.replaceState;let v,C,S=null;if(v=new URL(d.dest,u.url),S=o.loadedRoute,C=o.response,S){const[T,G,J,A]=S,I=J,K=I[I.length-1];d.dest.search&&M(v,w)&&(v.search=d.dest.search),M(v,w)||(u.prevUrl=w),u.url=v,u.params={...G},f.untrackedValue={type:x,dest:v};const D=Gt(C,u,I,g);n.headings=K.headings,n.menu=A,r.value=be(I),s.links=D.links,s.meta=D.meta,s.styles=D.styles,s.scripts=D.scripts,s.title=D.title,s.frontmatter=D.frontmatter}}return m()},tn=e=>{Ae(E(Yt,"s_k1SdQUXvzH0"));const t=Vt();if(!t?.params)throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const n=oe("url");if(!n)throw new Error("Missing Qwik URL Env Data");if(t.ev.originalUrl.pathname!==t.ev.url.pathname)throw new Error('enableRequestRewrite is an experimental feature and is not enabled. Please enable the feature flag by adding `experimental: ["enableRequestRewrite"]` to your qwikVite plugin options.');const r=new URL(n),s=O({url:r,params:t.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),o={},a=Oe(O(t.response.loaders,{deep:!1})),i=Y({type:"initial",dest:r,forceReload:!1,replaceState:!1,scroll:!0}),l=O(Ie),c=O({headings:void 0,menu:void 0}),f=Y(),u=t.response.action,m=u?t.response.loaders[u]:void 0,y=Y(m?{id:u,data:t.response.formData,output:{result:m,status:t.response.status}}:void 0),d=E(Xt,"s_7N1e5wu2FJ8"),h=E(Zt,"s_3deIlqO1asI",[y,o,i,s]);return $(Tt,c),$(ke,f),$(Pe,l),$(Ce,s),$(At,h),$(jt,a),$(Ot,y),$(Bt,d),Be(E(en,"s_01D2CZBcrt8",[y,c,f,l,t,h,a,o,e,i,s])),k(Qe,null,3,"07_3")},nn=W(E(tn,"s_eDqSNzsWqWI")),un=()=>globalThis.qcAsyncRequestStore?.getStore(),rn=()=>{const e=Jt(),t=Kt();return k(H,{children:[_("title",null,null,e.title,1,null),_("link",null,{rel:"canonical",href:Me(n=>n.url.href,[t],"p0.url.href")},null,3,null),_("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),_("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),e.meta.map(n=>B("meta",{...n},null,0,n.key)),e.links.map(n=>B("link",{...n},null,0,n.key)),e.styles.map(n=>B("style",{...n.props,...n.props?.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.style}},null,0,n.key)),e.scripts.map(n=>B("script",{...n.props,...n.props?.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.script}},null,0,n.key))]},1,"Cd_0")},sn=W(E(rn,"s_0gNuedzPE00")),on=()=>k(nn,{children:[_("head",null,null,[_("meta",null,{charset:"utf-8"},null,3,null),_("link",null,{rel:"manifest",href:"/manifest.json"},null,3,"KT_0"),k(sn,null,3,"KT_1")],1,null),_("body",null,{lang:"en"},k(Ut,null,3,"KT_2"),1,null)]},1,"KT_3"),an=W(E(on,"s_0rwOtqwQDq4"));function fn(e){return It(k(an,null,3,"Dw_0"),{...e,containerAttributes:{lang:"en-us",...e.containerAttributes},serverData:{...e.serverData}})}export{un as g,fn as r,cn as s};
