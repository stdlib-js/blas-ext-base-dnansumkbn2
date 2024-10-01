"use strict";var b=function(s,a){return function(){return a||s((a={exports:{}}).exports,a),a.exports}};var y=b(function(H,k){
var d=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-abs/dist');function h(s,a,q){var i,n,f,v,u,t,r,e,c;if(s<=0)return 0;if(s===1||q===0)return d(a[0])?0:a[0];for(q<0?f=(1-s)*q:f=0,i=0,n=0,v=0,c=0;c<s;c++)t=a[f],d(t)===!1&&(r=i+t,l(i)>=l(t)?e=i-r+t:e=t-r+i,i=r,r=v+e,l(v)>=l(e)?u=v-r+e:u=e-r+v,v=r,n+=u),f+=q;return i+v+n}k.exports=h
});var R=b(function(I,x){
var j=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist');function w(s,a,q,i){var n,f,v,u,t,r,e,c,o;if(s<=0)return 0;if(s===1||q===0)return j(a[i])?0:a[i];for(v=i,n=0,f=0,u=0,o=0;o<s;o++)r=a[v],j(r)===!1&&(e=n+r,m(n)>=m(r)?c=n-e+r:c=r-e+n,n=e,e=u+c,m(u)>=m(c)?t=u-e+c:t=c-e+u,u=e,f+=t),v+=q;return n+u+f}x.exports=w
});var O=b(function(J,E){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=y(),A=R();z(_,"ndarray",A);E.exports=_
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=O(),p,g=C(B(__dirname,"./native.js"));D(g)?p=F:p=g;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
