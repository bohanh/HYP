import{_ as u}from"./BzBiCdVX.js";import{c as h,u as f}from"./DvOkvcFZ.js";import{b}from"./BBFS39qQ.js";import{n as v,u as x,o as t,c,v as d,F as g,q as k,G as y,w,a as s,t as p,p as B,e as S,_ as E}from"./C7mLLJjs.js";const r=o=>(B("data-v-dc7cb1eb"),o=o(),S(),o),I={class:"container"},N=r(()=>s("div",{class:"header"},"THE TEAM",-1)),C=r(()=>s("div",{class:"title"}," Our dedicated team is here for you. Bibendum amet at molestie mattis. ",-1)),F={key:0,class:"person-card"},O={key:1,class:"person-cards"},P={class:"person-card"},A=["src","alt"],H={class:"person-name"},L={class:"person-description"},T=v({__name:"index",async setup(o){let a,n;const _=b();_.value=["/people"];let{data:l}=([a,n]=x(()=>f("/api/people","$xQuXO4Y4Et")),a=await a,n(),a);const i=h(JSON.parse(l.value.people));return(Y,j)=>{const m=u;return t(),c("div",I,[N,C,d(i).length===0?(t(),c("div",F,"No people found")):(t(),c("div",O,[(t(!0),c(g,null,k(d(i),e=>(t(),y(m,{key:e.id,class:"person-card-container",to:"/people/"+e.id,tabindex:"0"},{default:w(()=>[s("div",P,[s("img",{class:"person-thumb",src:"/HYP/image/people/"+e.id+".jpg",alt:"Photo of "+e.name},null,8,A),s("span",H,p(e.name),1),s("span",L,p(e.description.substring(0,120)+"..."),1)])]),_:2},1032,["to"]))),128))]))])}}}),M=E(T,[["__scopeId","data-v-dc7cb1eb"]]);export{M as default};
