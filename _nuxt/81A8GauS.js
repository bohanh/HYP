import{_ as C}from"./DMnE7ZnF.js";import{c as F,a as O,b as V,u as h}from"./BtODG4xH.js";import{b as Y}from"./CimUvg91.js";import{n as E,E as f,u as g,o as c,c as d,a as e,F as v,q as b,v as i,t as r,b as H,w as N,d as A,G as J,B as k,p as L,e as T,_ as Z}from"./TUfbI2ks.js";const I=u=>(L("data-v-47b34dac"),u=u(),T(),u),R={class:"service-container"},q={class:"breadcrumbs"},D={class:"breadcrumb"},G=I(()=>e("p",{style:{margin:"0","margin-inline":"5px"}}," > ",-1)),M={style:{margin:"0"}},Q=["src","alt"],U={id:"title"},K={style:{color:"var(--header-button-color)","font-size":"150%","font-weight":"bold","font-variant":"all-petite-caps"}},W={id:"parts"},X={class:"part"},ee={id:"words"},te=["src","alt"],se={style:{width:"60%","margin-right":"50px"}},oe={id:"testimonials-container"},ae=I(()=>e("p",{style:{color:"var(--header-button-color)","font-size":"150%","font-weight":"bold","font-variant":"all-petite-caps"}}," TESTIMONIALS ",-1)),ie={id:"testimonials"},re={class:"testimonial"},ne=["src","alt"],ce={class:"testimonial-person-info"},le={style:{"font-size":"120%"}},de={key:1,class:"testimonial-person"},pe=["src","alt"],_e={class:"testimonial-person-info"},ue={style:{"font-size":"120%"}},me=E({__name:"[id]",async setup(u){let o,p;const w=f().params.id,_=Y(),S="/services/"+w;S!==_.value[_.value.length-1]&&_.value.push(S);let{data:P}=([o,p]=g(()=>h("/api/people","$O0VAaFSmZZ")),o=await o,p(),o),{data:$}=([o,p]=g(()=>h("/api/projects","$0tRFyUbxEc")),o=await o,p(),o),{data:z}=([o,p]=g(()=>h("/api/services","$ZIQ66YC45y")),o=await o,p(),o);const y=F(JSON.parse(P.value.people)),B=O(JSON.parse($.value.projects)),x=V(JSON.parse(z.value.services));let l;for(let n of x)n.id.toString()===w&&(l=n);function j(n){let a=n.split(" ");if(a.length>1)switch(a[0]){case"people":for(let s of y)if(s.id.toString()===a[1])return s.name;break;case"projects":for(let s of B)if(s.id.toString()===a[1])return s.name;break;case"services":for(let s of x)if(s.id.toString()===a[1])return s.name}return n}function m(n){if(n<100){for(let a of y)if(a.id.toString()===n.toString())return a.name}else{let a="???";return h("/api/people/"+n.toString(),"$we5z2mwpmw").then(s=>{a=s.data.value.person}),a}return"----"}return(n,a)=>{const s=C;return c(),d("div",R,[e("div",q,[(c(!0),d(v,null,b(i(_).slice(0,-1),t=>(c(),d("div",D,[H(s,{to:t,style:{margin:"0","text-decoration":"underline",color:"#999999"},tabindex:"0"},{default:N(()=>[A(r(j(t.replace(/^\/|\/$/g,"").replace(/\//g," "))),1)]),_:2},1032,["to"]),G]))),256)),e("p",M,r(j(i(_).at(-1).replace(/^\/|\/$/g,"").replace(/\//g," "))),1)]),e("img",{id:"hero",src:"/HYP/image/services/"+i(f)().params.id+".jpg",alt:"photo of the service "+i(l).name},null,8,Q),e("div",U,[e("p",K,r(i(l).name),1),e("h2",null,r(i(l).description),1)]),e("div",W,[(c(!0),d(v,null,b(i(l).sections,t=>(c(),d("div",X,r(t),1))),256))]),e("div",ee,[e("img",{id:"words-image",src:"/HYP/image/services/"+i(f)().params.id+"+.jpg",alt:"photo of the service "+i(l).name},null,8,te),e("p",se,r(i(l).words),1)]),e("div",oe,[ae,e("div",ie,[(c(!0),d(v,null,b(i(l).testimonials,t=>(c(),d("div",re,[e("p",null,r(t.words),1),t.id<100?(c(),J(s,{key:0,class:"testimonial-person",to:"/people/"+t.id,tabindex:"0"},{default:N(()=>[e("img",{class:"testimonial-person-img",src:"/HYP/image/people/"+t.id+".jpg",alt:"photo of "+m(t.id)},null,8,ne),e("div",ce,[e("p",le,r(m(t.id)),1),e("p",null,r(t.role),1)])]),_:2},1032,["to"])):k("",!0),t.id>=100?(c(),d("div",de,[e("img",{class:"testimonial-person-img",src:"/HYP/image/people/"+t.id+".jpg",alt:"photo of "+m(t.id)},null,8,pe),e("div",_e,[e("p",ue,r(m(t.id)),1),e("p",null,r(t.role),1)])])):k("",!0)]))),256))])])])}}}),be=Z(me,[["__scopeId","data-v-47b34dac"]]);export{be as default};
