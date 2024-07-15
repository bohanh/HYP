import{_ as E}from"./DINWDEc5.js";import{c as G,a as R,b as T,u as j}from"./CjXLg8MX.js";import{_ as D}from"./SE2wAE4E.js";import{b as F}from"./CqVxg62a.js";import{q as V,E as q,v as b,o as _,c as m,b as f,a as o,F as x,s as I,x as i,t as l,w as h,d as S,G as A,p as L,e as M,_ as z}from"./CimYUvUS.js";const N=u=>(L("data-v-646dc1cf"),u=u(),M(),u),H={class:"project-container"},K={class:"breadcrumbs"},Q={class:"breadcrumb"},U=N(()=>o("p",{style:{margin:"0","margin-inline":"5px"}}," > ",-1)),W={style:{margin:"0"}},X={id:"project-texts"},Y={style:{color:"var(--header-button-color)"}},Z={style:{"font-size":"80%"}},ee={id:"leader"},te={id:"leader-left"},oe=["src","alt"],se={style:{width:"70%"}},ae={id:"more"},re=N(()=>o("h2",{style:{color:"var(--header-button-color)"}},"OTHER PROJECTS",-1)),ie={id:"projects"},ce={class:"violet-text"},ne=["src","alt"],le=V({__name:"[id]",async setup(u){let r,d;const g=q().params.id,p=F(),y="/projects/"+g;y!==p.value[p.value.length-1]&&p.value.push(y);let{data:$}=([r,d]=b(()=>j("/api/people","$KgGOI3QGxW")),r=await r,d(),r),{data:O}=([r,d]=b(()=>j("/api/projects","$ebG6aysTeJ")),r=await r,d(),r),{data:J}=([r,d]=b(()=>j("/api/services","$rvSa1vPDUq")),r=await r,d(),r);const w=G(JSON.parse($.value.people)),c=R(JSON.parse(O.value.projects)),P=T(JSON.parse(J.value.services));let n;for(let s of c)s.id.toString()===g&&(n=s);let v;for(let s of w)s.id===n.leader&&(v=s);const B=`background-image: url('/projects/${g}.jpg');')`;function k(s){let t=s.split(" ");if(t.length>1)switch(t[0]){case"people":for(let e of w)if(e.id.toString()===t[1])return e.name;break;case"projects":for(let e of c)if(e.id.toString()===t[1])return e.name;break;case"services":for(let e of P)if(e.id.toString()===t[1])return e.name}return s}function C(){let s;if(c.length<4)s=c;else{let t=Array.from({length:c.length},(e,a)=>a);for(let e=t.length-1;e>0;e--){const a=Math.floor(Math.random()*(e+1));[t[e],t[a]]=[t[a],t[e]]}s=[c[t[0]],c[t[1]],c[t[2]],c[t[3]]]}for(let t in s)s[t].id.toString()===n.id.toString()&&s.splice(parseInt(t,10),1);return s.slice(0,3)}return(s,t)=>{const e=E;return _(),m(x,null,[f(D),o("div",H,[o("div",K,[(_(!0),m(x,null,I(i(p).slice(0,-1),a=>(_(),m("div",Q,[f(e,{to:a,style:{margin:"0","text-decoration":"underline",color:"#999999"}},{default:h(()=>[S(l(k(a.replace(/^\/|\/$/g,"").replace(/\//g," "))),1)]),_:2},1032,["to"]),U]))),256)),o("p",W,l(k(i(p).at(-1).replace(/^\/|\/$/g,"").replace(/\//g," "))),1)]),o("div",{id:"project",style:B},[o("div",X,[o("h2",Y,l(i(n).name),1),o("p",Z,l(i(n).description),1)])]),o("div",ee,[o("div",te,[o("img",{id:"leader-image",src:"/people/"+i(n).id+".jpg",alt:"photo of the leader of project "+i(n).name+", "+i(v).name},null,8,oe),o("h2",null,l(i(v).name),1),f(e,{to:"/people/"+i(n).leader,class:"read-more"},{default:h(()=>[S("Read more")]),_:1},8,["to"])]),o("p",se,l(i(n).longDes),1)]),o("div",ae,[re,o("div",ie,[(_(!0),m(x,null,I(C(),a=>(_(),A(e,{key:a.id,class:"project-card",to:"/projects/"+a.id},{default:h(()=>[o("h2",ce,[f(e,{to:"/projects/"+a.id},{default:h(()=>[S(l(a.name),1)]),_:2},1032,["to"])]),o("p",null,l(a.description),1),o("img",{class:"project-thumb",src:"/projects/"+a.id+".jpg",alt:"Photo of "+a.name},null,8,ne)]),_:2},1032,["to"]))),128))])])])],64)}}}),fe=z(le,[["__scopeId","data-v-646dc1cf"]]);export{fe as default};
