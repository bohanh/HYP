import{_ as d}from"./BImBAHsU.js";import{c as m,u}from"./ClyRsWLc.js";import{q as h,v as f,o,c as p,a as t,F as v,s as x,x as g,G as k,w,t as n,p as B,e as S,_ as y}from"./Fa9-ECkD.js";const i=s=>(B("data-v-c4ad7fef"),s=s(),S(),s),I={class:"container"},C=i(()=>t("div",{class:"header"},"THE TEAM",-1)),E=i(()=>t("div",{class:"title"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis. ",-1)),F={class:"person-cards"},L=["src","alt"],N=h({__name:"people",async setup(s){let a,c,{data:l}=([a,c]=f(()=>u("/api/people","$rhd9Y9KrkQ")),a=await a,c(),a);const r=m(JSON.parse(l.value.people));return(P,b)=>{const _=d;return o(),p("div",I,[C,E,t("div",F,[(o(!0),p(v,null,x(g(r),e=>(o(),k(_,{key:e.id,class:"person-card",to:"/people/"+e.id},{default:w(()=>[t("img",{class:"person-thumb",src:"/HYP/people/"+e.id+".jpg",alt:"Photo of "+e.name},null,8,L),t("h2",null,n(e.name),1),t("p",null,n(e.description),1)]),_:2},1032,["to"]))),128))])])}}}),Y=y(N,[["__scopeId","data-v-c4ad7fef"]]);export{Y as default};
