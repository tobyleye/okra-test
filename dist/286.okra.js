"use strict";(self.webpackChunkokra=self.webpackChunkokra||[]).push([[286],{306:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(294),r=n(379),l=n.n(r),i=n(795),o=n.n(i),s=n(569),c=n.n(s),d=n(565),u=n.n(d),b=n(216),p=n.n(b),m=n(589),f=n.n(m),g=n(743),h={};h.styleTagTransform=f(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p();l()(g.Z,h);g.Z&&g.Z.locals&&g.Z.locals;function x(e){var t=e.children;return a.createElement("div",{className:"bottom-block"},t)}},610:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(294),r=n(33),l=n(10),i=n(379),o=n.n(i),s=n(795),c=n.n(s),d=n(569),u=n.n(d),b=n(565),p=n.n(b),m=n(216),f=n.n(m),g=n(589),h=n.n(g),x=n(457),y={};y.styleTagTransform=h(),y.setAttributes=p(),y.insert=u().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=f();o()(x.Z,y);x.Z&&x.Z.locals&&x.Z.locals;function v(e){var t=e.label,n=e.isLoading,i=e.onClick,o=e.disabled;return console.log({disabled:o}),a.createElement("button",{onClick:i,disabled:o||n,className:(0,l.Z)("btn",n&&"btn--is-loading")},a.createElement("span",{className:"btn__label"},t),a.createElement("div",{className:"btn__spinner"},a.createElement(r.Z,{size:"24",color:"white"})))}},286:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var a=n(152),r=n(294),l=n(306),i=n(610);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=n(10),d=n(379),u=n.n(d),b=n(795),p=n.n(b),m=n(569),f=n.n(m),g=n(565),h=n.n(g),x=n(216),y=n.n(x),v=n(589),Z=n.n(v),E=n(101),k={};k.styleTagTransform=Z(),k.setAttributes=h(),k.insert=f().bind(null,"head"),k.domAPI=p(),k.insertStyleElement=y();u()(E.Z,k);E.Z&&E.Z.locals&&E.Z.locals;var w=["type","label","value","onChange"];function O(e){var t=e.type,n=void 0===t?"text":t,l=e.label,i=e.value,d=void 0===i?"":i,u=e.onChange,b=s(e,w),p=d.length>0,m=(0,r.useState)(!1),f=(0,a.Z)(m,2),g=f[0],h=f[1];return r.createElement("div",{className:(0,c.Z)("text-field",{"text-field--has-value":p},{"text-field--focused":g})},r.createElement("input",o({},b,{type:n,onChange:function(e){return u(e.target.value,e)},value:d,onFocus:function(){return h(!0)},onBlur:function(){return h(!1)}})),r.createElement("label",null,l))}var N=n(321);const S={name:"TOKUNBO O. ADEDEJI",accounts:[{name:"Savings",nuban:"0123127823",balance:440520.76,currency:"ngn"},{name:"Current",nuban:"0123127824",balance:22827.3,currency:"ngn"},{name:"Domiciliary",nuban:"0123127825",balance:3000.45,currency:"usd"}]};var T=n(400),_={};_.styleTagTransform=Z(),_.setAttributes=h(),_.insert=f().bind(null,"head"),_.domAPI=p(),_.insertStyleElement=y();u()(T.Z,_);T.Z&&T.Z.locals&&T.Z.locals;function A(){var e=(0,r.useState)("xxx"),t=(0,a.Z)(e,2),n=t[0],o=t[1],s=(0,r.useState)("xxx"),c=(0,a.Z)(s,2),d=c[0],u=c[1],b=(0,r.useState)(!1),p=(0,a.Z)(b,2),m=p[0],f=p[1],g=(0,N.m)().dispatch;return r.createElement("div",{className:"bank-credentials-form"},r.createElement("p",{className:"heading"},"Type in your credentials"),r.createElement("p",{className:"sub-heading"},"By entering your GTBank credentials here, you’re authorising Okra to pay Kent Woods the agreed amount."),r.createElement("form",{onSubmit:function(e){e.preventDefault(),f(!0),setTimeout((function(){f(!1),g({type:"authenticate",payload:{userdata:S}})}),3e3)}},r.createElement("div",{className:"form-fields"},r.createElement(O,{label:"Email Address / Phone Number",required:!0,autoFocus:!0,value:n,onChange:o}),r.createElement(O,{label:"Password / PIN",type:"password",required:!0,value:d,onChange:u})),r.createElement("span",{className:"muted-text"},"Forgot password?"),r.createElement(l.Z,null,r.createElement(i.Z,{label:"Login",isLoading:m}))))}},743:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(81),r=n.n(a),l=n(645),i=n.n(l)()(r());i.push([e.id,".bottom-block{position:absolute;bottom:20px;right:0;left:0}",""]);const o=i},457:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(81),r=n.n(a),l=n(645),i=n.n(l)()(r());i.push([e.id,".btn{position:relative;border:none;background:#222c3b;color:#fff;height:40px;width:100%;font-weight:400;border-radius:5px;font-weight:700;font-size:16px;transition:.24s ease;display:flex;align-items:center;justify-content:center}.btn:hover{box-shadow:0px 3px 5px rgba(0,0,0,.22)}.btn__label{display:inline-block;transition:.24s ease}.btn__spinner{position:absolute;left:0;top:0;right:0;bottom:0;display:inline-grid;place-items:center;transform:translateY(20px);opacity:0;transition:.24s ease}.btn:disabled{opacity:.75}.btn--is-loading .btn__label{transform:scale(1.2);opacity:0}.btn--is-loading .btn__spinner{transform:translateY(0);opacity:1;transition-delay:.12s}",""]);const o=i},101:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(81),r=n.n(a),l=n(645),i=n.n(l)()(r());i.push([e.id,".text-field{position:relative;border:1px solid rgba(60,66,87,.24);border-radius:6px;margin:6px 0}.text-field input{border:none;height:45px;width:100%;position:relative;z-index:2;background:rgba(0,0,0,0);padding:0 18px}.text-field label{position:absolute;top:50%;transform:translateY(-50%);left:18px;transition:all .25s;display:inline-block;background:#fff;padding:0 2px;color:#444650;font-size:14px;line-height:24px;letter-spacing:-0.01px}.text-field--focused label,.text-field--has-value label{top:0;font-size:12px}",""]);const o=i},400:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(81),r=n.n(a),l=n(645),i=n.n(l)()(r());i.push([e.id,".bank-credentials-form .sub-heading{font-size:12px;line-height:18px;letter-spacing:.1px;margin-bottom:20px}.bank-credentials-form .form-fields{display:grid;grid-gap:5px;margin-bottom:3px}.bank-credentials-form .muted-text{font-size:14px;line-height:24px;font-weight:100;color:#222}",""]);const o=i}}]);