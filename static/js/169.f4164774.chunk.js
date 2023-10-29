"use strict";(self.webpackChunkelecciones=self.webpackChunkelecciones||[]).push([[169],{9169:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var o=t(1413),r=t(9439),a=t(9434),s=t(890),c=t(4165),i=t(5861),u=t(754),d=t(6444),l=t(77),p=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){var n,t,o;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return n=(0,d.hJ)(l.uL,"".concat("elecciones","/elecciones/candidatos")),e.next=5,(0,d.PL)(n);case 5:return t=e.sent,o=[],t.forEach((function(e){o.push({id:e.id,codigo:e.data().codigo,nombre:e.data().nombre})})),console.log(o),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:t=e.sent,n((0,u.setCandidatos)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),v=t(2791),h=t(5705),m=t(8007),x=t(184),Z=function(e){var n=e.onSubmit,t=e.initialZona;return(0,x.jsx)("div",{children:(0,x.jsx)(h.J9,{enableReinitialize:!0,initialValues:{zona:t,puesto:"",mesa:""},onSubmit:function(e){n(e)},validationSchema:m.Ry({zona:m.Z_().max(3,"Debe de tener 3 caracteres o menos").required("Requerido"),puesto:m.Z_().max(3,"Debe de tener 3 caracteres o menos").required("Requerido"),mesa:m.Z_().max(3,"La mesa no tiene el formato valido").required("Requerido")}),children:function(e){return(0,x.jsxs)(h.l0,{children:[(0,x.jsx)("label",{htmlFor:"zona",children:"Zona"}),(0,x.jsx)(h.gN,{name:"zona",type:"text"}),(0,x.jsx)(h.Bc,{name:"zona",component:"span"}),(0,x.jsx)("label",{htmlFor:"puesto",children:"Puesto"}),(0,x.jsx)(h.gN,{name:"puesto",type:"text"}),(0,x.jsx)(h.Bc,{name:"puesto",component:"span"}),(0,x.jsx)("label",{htmlFor:"mesa",children:"Mesa"}),(0,x.jsx)(h.gN,{name:"mesa",type:"text"}),(0,x.jsx)(h.Bc,{name:"mesa",component:"span"}),(0,x.jsx)("button",{type:"submit",children:"Buscar"})]})}})})},j=t(4942),b=t(9281),g=t(5527),k=t(9836),z=t(6890),w=t(5855),y=t(3994),S=t(3382),C=t(4602),L=t(4294),R=t(3329),E=function(e){var n=e.candidatos,t=e.onSave,a=e.onCancel,s=(0,v.useState)([]),c=(0,r.Z)(s,2),i=c[0],u=c[1];(0,v.useEffect)((function(){u(n)}),[n]);var d=function(e,n){var t=e.target,r=t.name,a=t.value,s=i.map((function(e){return e.id===n?(0,o.Z)((0,o.Z)({},e),{},(0,j.Z)({},r,a)):e}));u(s)};return(0,x.jsxs)("div",{children:[(0,x.jsx)(b.Z,{component:g.Z,children:(0,x.jsxs)(k.Z,{children:[(0,x.jsx)(z.Z,{children:(0,x.jsxs)(w.Z,{children:[(0,x.jsx)(y.Z,{children:"Codigo"}),(0,x.jsx)(y.Z,{children:"Nombre"}),(0,x.jsx)(y.Z,{children:"Votos PDF"}),(0,x.jsx)(y.Z,{children:"Votos Reporte"})]})}),(0,x.jsx)(S.Z,{children:i.map((function(e){return(0,x.jsxs)(w.Z,{children:[(0,x.jsx)(y.Z,{children:e.id}),(0,x.jsxs)(y.Z,{children:[e.nombre,"-",e.votospdf,"-"]}),(0,x.jsx)(y.Z,{children:(0,x.jsx)(C.Z,{name:"votospdf",value:e.votospdf,inputProps:{maxLength:3},onChange:function(n){return d(n,e.id)}})}),(0,x.jsx)(y.Z,{children:(0,x.jsx)(C.Z,{name:"votosreporte",value:e.votosreporte,inputProps:{maxLength:3},onChange:function(n){return d(n,e.id)}})})]},e.id)}))})]})}),(0,x.jsx)(L.Z,{variant:"contained",color:"primary",startIcon:(0,x.jsx)(R.Z,{}),onClick:function(){t(i)},children:"Save"}),(0,x.jsx)(L.Z,{variant:"contained",color:"primary",startIcon:(0,x.jsx)(R.Z,{}),onClick:function(){a()},children:"cancelar"})]})},F=t(9356),N=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n,t,o){var r,a,s,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return r=(0,d.hJ)(l.uL,"".concat("elecciones","/elecciones/resultados")),a=(0,d.IO)(r,(0,d.ar)("zona","==",n),(0,d.ar)("puesto","==",t),(0,d.ar)("mesa","==",o)),e.next=6,(0,d.PL)(a);case 6:return s=e.sent,i=[],s.forEach((function(e){i.push({id:e.id,zona:e.data().zona,puesto:e.data().puesto,mesa:e.data().mesa,candidato:e.data().candidato,votospdf:e.data().votospdf,votosreporte:e.data().votosreporte})})),console.log("Resul:",i,n,t,o),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}(),q=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n,t,o,r){var a;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(t,o,r);case 3:a=e.sent,n((0,F.setResultados)(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t,o,r){return e.apply(this,arguments)}}(),J=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.id?(0,d.JU)(l.uL,"".concat("elecciones","/elecciones/resultados/").concat(n.id)):(0,d.JU)((0,d.hJ)(l.uL,"".concat("elecciones","/elecciones/resultados"))),e.next=4,(0,d.pl)(t,{zona:n.zona,puesto:n.puesto,mesa:n.mesa,candidato:n.candidato,votospdf:Number(n.votospdf),votosreporte:Number(n.votosreporte)});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),P=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),B=function(){var e=(0,a.I0)(),n=(0,v.useState)(""),t=(0,r.Z)(n,2),c=t[0],i=t[1],u=(0,v.useState)(""),d=(0,r.Z)(u,2),l=d[0],p=d[1],h=(0,v.useState)(""),m=(0,r.Z)(h,2),j=m[0],b=m[1],g=(0,v.useState)([]),k=(0,r.Z)(g,2),z=k[0],w=k[1],y=(0,a.v9)((function(e){return e.candidatos})).candidatos,S=(0,a.v9)((function(e){return e.resultados})).resultados;return(0,v.useEffect)((function(){f(e)}),[]),(0,v.useEffect)((function(){console.log("r",S),function(e){var n=[];y.forEach((function(t){var o=e.find((function(e){return e.candidato===t.id}));o?n.push({id:t.id,codigo:o.candidato,nombre:t.nombre,votospdf:o.votospdf,votosreporte:o.votosreporte,resultado:o}):n.push({id:t.id,codigo:t.id,nombre:t.nombre})})),w(n)}(S)}),[S]),(0,x.jsxs)("div",{children:[(0,x.jsx)(s.Z,{variant:"h4",children:"Voto preferente"}),c&&c.length>0?(0,x.jsx)(x.Fragment,{}):(0,x.jsx)(Z,{onSubmit:function(n){i(n.zona),p(n.puesto),b(n.mesa),n.zona&&0!=n.zona.length?(w([]),q(e,n.zona,n.puesto,n.mesa),console.log("Form submitted with values:",n)):alert("No ha seleccionado una zona")},initialZona:c}),c,"- ",z.length,"- r: ",S.length,c&&c.length>0&&z.length>0?(0,x.jsx)(E,{candidatos:z,onSave:function(e){e.forEach((function(e){var n;n=e.resultado?(0,o.Z)((0,o.Z)({},e.resultado),{},{candidato:e.id||"",votospdf:e.votospdf||0,votosreporte:e.votosreporte||0}):{zona:c,puesto:l,mesa:j,candidato:e.id||"",votospdf:e.votospdf||0,votosreporte:e.votosreporte||0},P(n),i("")})),w([])},onCancel:function(){w([]),i("")}}):(0,x.jsx)(x.Fragment,{})]})}}}]);
//# sourceMappingURL=169.f4164774.chunk.js.map