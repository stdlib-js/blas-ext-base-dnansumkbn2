"use strict";var b=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var k=b(function(I,p){
var o=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-abs/dist');function O(a,e,s,E){var i,q,l,n,t,m,r,v,f,u;if(a<=0)return 0;if(n=E,s===0)return o(e[n])?0:e[n]*a;for(u=0;u<a&&(r=e[n],o(r)!==!1);u++)n+=s;if(u===a)return 0;if(i=r,n+=s,u+=1,i===0)for(;u<a;u++){if(r=e[n],o(r)===!1){if(r!==0){l=!0;break}i+=r}n+=s}else l=!0;for(q=0,t=0;u<a;u++)r=e[n],o(r)===!1&&(v=i+r,c(i)>=c(r)?f=i-v+r:f=r-v+i,i=v,v=t+f,c(t)>=c(f)?m=t-v+f:m=f-v+t,t=v,q+=m),n+=s;return l?i+t+q:i}p.exports=O
});var j=b(function(J,y){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=k();function z(a,e,s){return w(a,e,s,h(a,s))}y.exports=z
});var g=b(function(K,_){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=j(),B=k();A(R,"ndarray",B);_.exports=R
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=g(),d,x=D(C(__dirname,"./native.js"));F(x)?d=G:d=x;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
