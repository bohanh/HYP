import{_ as y}from"./DINWDEc5.js";import{a as N,b as S,u as h}from"./CjXLg8MX.js";import{b as w}from"./CqVxg62a.js";import{q as P,v,o as t,c as a,a as e,b as i,w as r,x as _,F as f,s as j,d as n,t as p,p as V,e as I,_ as A}from"./CimYUvUS.js";const x=d=>(V("data-v-aba57ee6"),d=d(),I(),d),B={class:"main-container"},C={class:"container"},F=x(()=>e("h2",{class:"section-title"},"Projects",-1)),J={key:0,class:"project-card"},O={key:1,class:"project-cards"},R={class:"violet-text"},E=["src","alt"],L={class:"container"},$=x(()=>e("h2",{class:"section-title"},"Services",-1)),q={key:0,class:"service-card"},z={key:1,class:"service-cards"},D={class:"violet-text"},T=["src","alt"],Y=P({__name:"index",async setup(d){let o,l;const k=w();k.value=["/all"];let{data:b}=([o,l]=v(()=>h("/api/projects","$Na6akERJzt")),o=await o,l(),o),{data:g}=([o,l]=v(()=>h("/api/services","$jk61OYm1pi")),o=await o,l(),o);const u=N(JSON.parse(b.value.projects)),m=S(JSON.parse(g.value.services));return(G,H)=>{const c=y;return t(),a("div",B,[e("section",C,[F,i(c,{to:"/projects"},{default:r(()=>[n("View All Projects")]),_:1}),_(u).length===0?(t(),a("div",J,"No projects found")):(t(),a("div",O,[(t(!0),a(f,null,j(_(u).slice(0,2),s=>(t(),a("div",{key:s.id,class:"project-card"},[e("h2",R,[i(c,{to:"/projects/"+s.id},{default:r(()=>[n(p(s.name),1)]),_:2},1032,["to"])]),e("p",null,p(s.description),1),e("img",{class:"project-thumb",src:"/projects/"+s.id+".jpg",alt:"Photo of "+s.name},null,8,E),i(c,{to:"/projects/"+s.id,class:"read-more"},{default:r(()=>[n("Read more")]),_:2},1032,["to"])]))),128))]))]),e("section",L,[$,i(c,{to:"/services"},{default:r(()=>[n("View All Services")]),_:1}),_(m).length===0?(t(),a("div",q,"No services found")):(t(),a("div",z,[(t(!0),a(f,null,j(_(m).slice(0,2),s=>(t(),a("div",{key:s.id,class:"service-card"},[e("h2",D,[i(c,{to:"/services/"+s.id},{default:r(()=>[n(p(s.name),1)]),_:2},1032,["to"])]),e("p",null,p(s.description),1),e("img",{class:"service-thumb",src:"/services/"+s.id+".jpg",alt:"Photo of "+s.name},null,8,T),i(c,{to:"/services/"+s.id,class:"read-more"},{default:r(()=>[n("Read more")]),_:2},1032,["to"])]))),128))]))])])}}}),W=A(Y,[["__scopeId","data-v-aba57ee6"]]);export{W as default};
