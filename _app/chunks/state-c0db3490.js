var S=Object.defineProperty,b=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var u=(t,e,a)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,i=(t,e)=>{for(var a in e||(e={}))v.call(e,a)&&u(t,a,e[a]);if(d)for(var a of d(e))C.call(e,a)&&u(t,a,e[a]);return t},o=(t,e)=>b(t,k(e));import{D as m,L,M as O,N as _,O as D,P as l,Q as N}from"./vendor-0937b0aa.js";import{_ as g}from"./preload-helper-1db36302.js";const T={loading:!1},f=m(T),B=async(t,e)=>{f.set({loading:!0,message:t});const a=await e;return f.set({loading:!1}),a};let n;const G=async()=>{if(!n)try{const{Analytics:t}=await g(()=>import("./analytics.browser.es-3a37d114.js"),[]),e=await g(()=>import("./analytics-plugin-ga.browser.es-1cdb0512.js"),[]);n=t({app:"mermaid-live-editor",plugins:[e.init({trackingId:"UA-153180559-1"})]})}catch{console.info("Analytics blocked ;)")}},w=t=>t.replace(/^\s*%%.*\n/g,`
`).trimStart().split(" ")[0];let p;const A=t=>{n&&(clearTimeout(p),p=setTimeout(function(){const e=w(t);console.debug("ga:","send","event","render",e),n.track("render",{graphType:e})},5e3))},E={code:`graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
  `,mermaid:JSON.stringify({theme:"default"},null,2),updateEditor:!1,autoSync:!0,updateDiagram:!0},J=`graph TD
    A[Loading URL failed. We can try to figure out why.] -->|Decode JSON| B(Please check the console to see the JSON and error details.)
    B --> C{Is the JSON correct?}
    C -->|Yes| D(Please Click here to Raise an issue in github.<br/>Including the broken link in the issue <br/> will speed up the fix.)
    C -->|No| E{Did someone <br/>send you this link?}
    E -->|Yes| F[Ask them to send <br/>you the complete link]
    E -->|No| G{Did you copy <br/> the complete URL?}
    G --> |Yes| D
    G --> |"No :("| H(Try using the Timeline tab in History <br/>from same browser you used to create the diagram.)
    click D href "https://github.com/mermaid-js/mermaid-live-editor/issues/new?assignees=&labels=bug&template=bug_report.md&title=Broken%20link" "Raise issue"`,s=L(m(E),O(),"codeStore"),P=_([s],([t],e)=>{e(D(JSON.stringify(t),!0))}),U=t=>{let e;try{const a=N(t);console.log(`Trying to load state: ${a}`),e=JSON.parse(a);const r=typeof e.mermaid=="string"?JSON.parse(e.mermaid):e.mermaid;r.securityLevel&&r.securityLevel!=="strict"&&confirm(`Removing "securityLevel":"${r.securityLevel}" from the config for safety.
Click Cancel if you trust the source of this Diagram.`)&&delete r.securityLevel,e.mermaid=JSON.stringify(r,null,2)}catch(a){e=l(s),t&&(console.error("Init error",a),e.code=J)}y(o(i({},e),{updateEditor:!0}))},y=t=>{s.update(e=>i(i({},e),t))};let h=!1;const F=(t,e,a=!1)=>{if(A(t),(t.match(/\n/g)||"").length+1>50&&!h&&l(s).autoSync){const c=confirm("Long diagram detected. Turn off Auto Sync? Click the sync logo to manually sync.");h=!0,c&&y({autoSync:!1})}s.update(c=>o(i({},c),{code:t,updateEditor:e,updateDiagram:a}))},Y=(t,e)=>{s.update(a=>o(i({},a),{mermaid:t,updateEditor:e}))},$=t=>{s.update(e=>{const a=JSON.parse(e.mermaid);return(!a.theme||["dark","default"].includes(a.theme))&&(a.theme=t?"dark":"default"),o(i({},e),{mermaid:JSON.stringify(a,null,2),updateEditor:!0})})},x=()=>{P.subscribe(t=>{history.replaceState(void 0,void 0,`#${t}`)})},H=()=>JSON.stringify(l(s));export{n as a,P as b,s as c,Y as d,E as e,y as f,H as g,x as h,B as i,G as j,U as k,f as l,$ as t,F as u};
