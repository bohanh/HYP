import{_ as g}from"./DMnE7ZnF.js";import{a as f,u as b}from"./BtODG4xH.js";import{b as y}from"./CimUvg91.js";import{n as w,u as k,o as c,c as l,v as a,D as j,a as t,t as e,b as x,w as S,B as N,F as z,q as I,s as F,d as V,p as C,e as B,_ as L}from"./TUfbI2ks.js";const i=n=>(C("data-v-48979ff1"),n=n(),B(),n),O={class:"page-container"},P={id:"latest-project-texts"},W={style:{color:"var(--header-button-color)"}},D={style:{"font-size":"80%"}},q={id:"mission"},A=i(()=>t("h2",null,"MISSION",-1)),E=i(()=>t("p",null," Our mission is to empower women through comprehensive support, education, and advocacy. We strive to create a safe and inclusive environment where women can thrive and reach their full potential. ",-1)),H={id:"mission-list"},K={class:"mission-item"},R={class:"material-icons",style:{"font-size":"200%"}},$=i(()=>t("div",{class:"separator"},null,-1)),J={id:"history-grid"},M=i(()=>t("div",null,null,-1)),Q=i(()=>t("div",{class:"timeline"},[t("div",{style:{width:"5pt",height:"20pt","background-color":"rgba(0,0,0,0)"}}),t("div",{style:{width:"20pt",height:"20pt","border-radius":"50%","background-color":"var(--header-button-color)"}}),t("div",{style:{width:"5pt",height:"100pt","background-color":"var(--header-button-color)"}})],-1)),T={class:"history-item-right"},Y={class:"history-item-left"},G=F('<div class="timeline" data-v-48979ff1><div style="width:5pt;height:20pt;background-color:var(--header-button-color);" data-v-48979ff1></div><div style="width:20pt;height:20pt;border-radius:50%;background-color:var(--header-button-color);" data-v-48979ff1></div><div style="width:5pt;height:100pt;background-color:var(--header-button-color);" data-v-48979ff1></div></div><div data-v-48979ff1></div><div data-v-48979ff1></div><div class="timeline" data-v-48979ff1><div style="width:5pt;height:20pt;background-color:var(--header-button-color);" data-v-48979ff1></div><div style="width:20pt;height:20pt;border-radius:50%;background-color:var(--header-button-color);" data-v-48979ff1></div><div style="width:5pt;height:100pt;background-color:var(--header-button-color);" data-v-48979ff1></div></div>',4),U={class:"history-item-right"},X={class:"history-item-left"},Z=i(()=>t("div",{class:"timeline"},[t("div",{style:{width:"5pt",height:"20pt","background-color":"var(--header-button-color)"}}),t("div",{style:{width:"20pt",height:"20pt","border-radius":"50%","background-color":"var(--header-button-color)"}})],-1)),tt=i(()=>t("div",null,null,-1)),et=w({__name:"index",async setup(n){let r,h;const p=y();p.value.length=0;let{data:u}=([r,h]=k(()=>b("/api/projects","$pqtWcjQkdb")),r=await r,h(),r);const s=u.value.projects.length>0?f(JSON.parse(u.value.projects))[0]:void 0,v=s?`background-image: url('/HYP/image/projects/${s.id}.jpg')`:"",o=[{title:"Foundation",description:"Founded in 2010, our organization started with the goal of supporting women in need, offering resources and a safe space for growth and empowerment."},{title:"Expansion",description:"Over the years, we have expanded our services to include educational programs, career development workshops, and community outreach initiatives"},{title:"Recognition",description:"We have been recognized nationally for our impactful work, receiving numerous awards and grants to further our mission."},{title:"Future Vision",description:"Looking ahead, we aim to broaden our reach, touching the lives of more women and communities across the nation."}],m=[{icon:"sentiment_satisfied",number:"250+",name:"Women Helped"},{icon:"content_copy",number:"20+",name:"Completed Projects"},{icon:"local_pizza",number:"1.8K+",name:"Available Resources"},{icon:"group",number:"11K+",name:"Donors"}];return(ot,it)=>{const _=g;return c(),l("div",O,[a(s)?(c(),l("div",{key:0,id:"latest-project",style:j(a(v))},[t("div",P,[t("h2",W,e(a(s).name),1),t("p",D,e(a(s).description),1),x(_,{id:"latest-project-button",to:"/projects/"+a(s).id},{default:S(()=>[V("Learn more")]),_:1},8,["to"])])],4)):N("",!0),t("div",q,[A,E,t("div",H,[(c(),l(z,null,I(m,d=>t("div",K,[t("i",R,e(d.icon),1),t("h3",null,e(d.number),1),t("p",null,e(d.name),1)])),64))])]),$,t("div",J,[M,Q,t("div",T,[t("h2",null,e(o[0].title),1),t("p",null,e(o[0].description),1)]),t("div",Y,[t("h2",null,e(o[1].title),1),t("p",null,e(o[1].description),1)]),G,t("div",U,[t("h2",null,e(o[2].title),1),t("p",null,e(o[2].description),1)]),t("div",X,[t("h2",null,e(o[3].title),1),t("p",null,e(o[3].description),1)]),Z,tt])])}}}),dt=L(et,[["__scopeId","data-v-48979ff1"]]);export{dt as default};
