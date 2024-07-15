import{q as I,r as s,g as d,o as l,c as u,a as e,z as n,A as i,t as m,B as c,C as M,y as B,p as T,e as z,_ as F}from"./CimYUvUS.js";import{b as L}from"./CqVxg62a.js";const r=p=>(T("data-v-6c571631"),p=p(),z(),p),P={class:"donation-container"},Z=r(()=>e("h1",null,"Donation",-1)),$={class:"form-group"},j=r(()=>e("label",{for:"name"},"Name",-1)),G={key:0,class:"error-message"},H={class:"form-group"},J=r(()=>e("label",{for:"surname"},"Surname",-1)),K={key:0,class:"error-message"},O={class:"form-group"},Q=r(()=>e("label",{for:"labelName"},"Label Name",-1)),R={key:0,class:"error-message"},W={class:"form-group"},X=r(()=>e("label",{for:"cardNumber"},"Card Number",-1)),ee={key:0,class:"error-message"},te={class:"form-group"},ae=r(()=>e("label",{for:"expiryDate"},"Expiry Date",-1)),oe={key:0,class:"error-message"},se={class:"form-group"},re=r(()=>e("label",{for:"cvv"},"CVV",-1)),ne={key:0,class:"error-message"},le={class:"form-group"},ue=r(()=>e("label",{for:"donationAmount"},"Donation Amount (€)",-1)),ie={class:"form-group terms"},de=r(()=>e("label",{for:"acceptTerms"},"I accept the informativity",-1)),me=r(()=>e("button",{type:"submit"},"Donate",-1)),ce=I({__name:"donate",setup(p){const Y=L();Y.value.length=0;const _=s(""),b=s(""),f=s(""),h=s(""),y=s(""),v=s(""),k=s(!1),g=s(""),x=s(""),N=s(""),V=s(""),D=s(""),E=s("");d(_,w),d(b,C),d(f,S),d(h,U),d(y,A),d(v,o=>{const t=o.replace(/\D/g,"");v.value=t.slice(0,3),D.value=t.length!==3?"CVV must be exactly 3 digits":""});const q=()=>{if(g.value||x.value||N.value||V.value||D.value){alert("Please fix the errors before submitting.");return}k.value?console.log("Form Submitted:",{name:_.value,surname:b.value,labelName:f.value,cardNumber:h.value,expiryDate:y.value,cvv:v.value}):alert("You must accept the terms and conditions to proceed.")};function w(o){g.value=/\d/.test(o)?"You can't write numbers here":""}function C(o){x.value=/\d/.test(o)?"You can't write numbers here":""}function S(o){N.value=/\d/.test(o)?"You can't write numbers here":""}function U(o){V.value=/[a-zA-Z]/.test(o)?"You can't write letters here":""}function A(o){E.value=/^\d{2}\/\d{4}$/.test(o)?"":"Expiry date must be in the format MM/YYYY"}return(o,t)=>(l(),u("div",P,[Z,e("form",{onSubmit:B(q,["prevent"])},[e("div",$,[j,n(e("input",{id:"name","onUpdate:modelValue":t[0]||(t[0]=a=>_.value=a),type:"text",required:""},null,512),[[i,_.value]]),g.value?(l(),u("span",G,m(g.value),1)):c("",!0)]),e("div",H,[J,n(e("input",{id:"surname","onUpdate:modelValue":t[1]||(t[1]=a=>b.value=a),type:"text",required:""},null,512),[[i,b.value]]),x.value?(l(),u("span",K,m(x.value),1)):c("",!0)]),e("div",O,[Q,n(e("input",{id:"labelName","onUpdate:modelValue":t[2]||(t[2]=a=>f.value=a),type:"text",required:""},null,512),[[i,f.value]]),N.value?(l(),u("span",R,m(N.value),1)):c("",!0)]),e("div",W,[X,n(e("input",{id:"cardNumber","onUpdate:modelValue":t[3]||(t[3]=a=>h.value=a),type:"text",required:""},null,512),[[i,h.value]]),V.value?(l(),u("span",ee,m(V.value),1)):c("",!0)]),e("div",te,[ae,n(e("input",{id:"expiryDate","onUpdate:modelValue":t[4]||(t[4]=a=>y.value=a),type:"month",required:""},null,512),[[i,y.value]]),E.value?(l(),u("span",oe,m(E.value),1)):c("",!0)]),e("div",se,[re,n(e("input",{id:"cvv","onUpdate:modelValue":t[5]||(t[5]=a=>v.value=a),type:"text",required:""},null,512),[[i,v.value]]),D.value?(l(),u("span",ne,m(D.value),1)):c("",!0)]),e("div",le,[ue,n(e("input",{id:"donationAmount","onUpdate:modelValue":t[6]||(t[6]=a=>o.donationAmount=a),type:"number",required:""},null,512),[[i,o.donationAmount,void 0,{number:!0}]])]),e("div",ie,[n(e("input",{id:"acceptTerms","onUpdate:modelValue":t[7]||(t[7]=a=>k.value=a),type:"checkbox"},null,512),[[M,k.value]]),de]),me],32)]))}}),_e=F(ce,[["__scopeId","data-v-6c571631"]]);export{_e as default};
