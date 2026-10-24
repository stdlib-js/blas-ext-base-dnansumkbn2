"use strict";var b=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var k=b(function(I,p){
var o=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-abs/dist');function O(a,r,i,E){var n,q,l,u,t,m,e,v,f,s;if(a<=0)return 0;if(u=E,i===0)return o(r[u])?0:r[u]*a;for(s=0;s<a&&(e=r[u],o(e)!==!1);s++)u+=i;if(s===a)return 0;if(n=e,u+=i,s+=1,n===0)for(;s<a;s++){if(e=r[u],o(e)===!1){if(e!==0){l=!0;break}n+=e}u+=i}else l=!0;for(q=0,t=0;s<a;s++)e=r[u],o(e)===!1&&(v=n+e,c(n)>=c(e)?f=n-v+e:f=e-v+n,n=v,v=t+f,c(t)>=c(f)?m=t-v+f:m=f-v+t,t=v,q+=m),u+=i;return l?n+t+q:n}p.exports=O
});var j=b(function(J,y){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=k();function z(a,r,i){return w(a,r,i,h(a,i))}y.exports=z
});var g=b(function(K,_){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=j(),B=k();A(R,"ndarray",B);_.exports=R
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=g(),d,x=D(C(__dirname,"./native.js"));F(x)?d=G:d=x;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
