import{t as D,a as E,S as k,i as z}from"./index.8d286a49.js";import{D as B,s as F,f as G,g as H,h as J,d as U,j,i as K,x as q}from"./scheduler.ced3fe4a.js";function Q(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function R(e,n){D(e,1,1,()=>{n.delete(e.key)})}function T(e,n,a,t,f,o,u,x,v,A,g,C){let l=e.length,d=o.length,h=l;const y={};for(;h--;)y[e[h].key]=h;const m=[],_=new Map,S=new Map,M=[];for(h=d;h--;){const s=C(f,o,h),i=a(s);let c=u.get(i);c?t&&M.push(()=>c.p(s,n)):(c=A(i,s),c.c()),_.set(i,m[h]=c),i in y&&S.set(i,Math.abs(h-y[i]))}const p=new Set,I=new Set;function r(s){E(s,1),s.m(x,g),u.set(s.key,s),g=s.first,d--}for(;l&&d;){const s=m[d-1],i=e[l-1],c=s.key,w=i.key;s===i?(g=s.first,l--,d--):_.has(w)?!u.has(c)||p.has(c)?r(s):I.has(w)?l--:S.get(c)>S.get(w)?(I.add(c),r(s)):(p.add(w),l--):(v(i,u),l--)}for(;l--;){const s=e[l];_.has(s.key)||v(s,u)}for(;d;)r(m[d-1]);return B(M),m}function L(e){let n,a;return{c(){n=G("i"),this.h()},l(t){n=H(t,"I",{class:!0}),J(n).forEach(U),this.h()},h(){j(n,"class",a=`${e[0]} ${e[1]}`)},m(t,f){K(t,n,f)},p(t,[f]){f&3&&a!==(a=`${t[0]} ${t[1]}`)&&j(n,"class",a)},i:q,o:q,d(t){t&&U(n)}}}function N(e,n,a){let{icon:t=""}=n,{classes:f=""}=n;return e.$$set=o=>{"icon"in o&&a(0,t=o.icon),"classes"in o&&a(1,f=o.classes)},[t,f]}class V extends k{constructor(n){super(),z(this,n,N,L,F,{icon:0,classes:1})}}export{V as U,Q as e,R as o,T as u};
