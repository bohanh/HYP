import{_ as b}from"./DINWDEc5.js";import{c as k,u as w}from"./CjXLg8MX.js";import{b as y}from"./CqVxg62a.js";import{q as N,v as S,o as e,c as s,x as d,F as l,s as _,b as B,w as E,a,t as m,p as I,e as C,_ as F}from"./CimYUvUS.js";const u=c=>(I("data-v-94a5eedd"),c=c(),C(),c),L={class:"container"},A=u(()=>a("div",{class:"header"},"THE TEAM",-1)),O=u(()=>a("div",{class:"title"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis. ",-1)),P={key:0,class:"person-card"},T={key:1,class:"person-cards"},V=["src","alt"],j={class:"person-name"},q={class:"person-description"},D=N({__name:"index",async setup(c){let n,p;const h=y();h.value=["/people"];let{data:f}=([n,p]=S(()=>w("/api/people","$xQuXO4Y4Et")),n=await n,p(),n);const r=k(JSON.parse(f.value.people));let i=[];for(let o=0;o<r.length;o+=4)i.push(r.slice(o,o+4));return(o,H)=>{const v=b;return e(),s("div",L,[A,O,d(i).length===0?(e(),s("div",P,"No people found")):(e(),s("div",T,[(e(!0),s(l,null,_(d(i),(x,g)=>(e(),s("div",{key:g,class:"person-row"},[(e(!0),s(l,null,_(x,t=>(e(),s("div",{key:t.id,class:"person-card"},[B(v,{to:"/people/"+t.id},{default:E(()=>[a("img",{class:"person-thumb",src:"/people/"+t.id+".jpg",alt:"Photo of "+t.name},null,8,V),a("h2",j,m(t.name),1),a("p",q,m(t.description),1)]),_:2},1032,["to"])]))),128))]))),128))]))])}}}),X=F(D,[["__scopeId","data-v-94a5eedd"]]);export{X as default};
