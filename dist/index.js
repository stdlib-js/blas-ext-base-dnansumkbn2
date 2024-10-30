"use strict";var d=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var m=d(function(H,p){
var l=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist');function O(a,r,t,E){var e,c,v,n,q,s,i,u,o;if(e=0,a<=0)return e;if(v=E,t===0)return l(r[v])?e:r[v]*a;for(c=0,n=0,o=0;o<a;o++)s=r[v],l(s)===!1&&(i=e+s,f(e)>=f(s)?u=e-i+s:u=s-i+e,e=i,i=n+u,f(n)>=f(u)?q=n-i+u:q=u-i+n,n=i,c+=q),v+=t;return e+n+c}p.exports=O
});var k=d(function(I,y){
var g=require('@stdlib/strided-base-stride2offset/dist'),h=m();function w(a,r,t){return h(a,r,t,g(a,t))}y.exports=w
});var R=d(function(J,x){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=k(),A=m();z(j,"ndarray",A);x.exports=j
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=R(),b,_=C(B(__dirname,"./native.js"));D(_)?b=F:b=_;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
