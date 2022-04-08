/*!
 * 
 *   @smtp2go/smtp2go-api v0.0.1
 *   https://github.com/smtp2go/ts-library-boilerplate-basic
 *
 *   Copyright (c) SMTP2GO (https://github.com/smtp2go) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SMTP2GOAPI=t():e.SMTP2GOAPI=t()}(global,(function(){return(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{apiClient:()=>d,service:()=>f});const r=require("@babel/runtime/helpers/asyncToGenerator");var n=e.n(r);const o=require("@babel/runtime/helpers/classCallCheck");var i=e.n(o);const a=require("@babel/runtime/helpers/createClass");var u=e.n(a);const s=require("@babel/runtime/regenerator");var c=e.n(s);const p=require("axios");var l=e.n(p),d=function(){function e(t){i()(this,e),this.apiKey=t,this.apiUrl="https://api.smtp2go.com/v3/"}var t;return u()(e,[{key:"setApiKey",value:function(e){this.apiKey=e}},{key:"consume",value:(t=n()(c().mark((function e(t){var r,n,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.buildRequestBody()).api_key=this.apiKey,e.prev=2,e.next=5,l()({method:t.getMethod(),url:this.apiUrl+t.getEndpoint(),headers:{"Content-Type":"application/json"},data:r});case 5:return n=e.sent,o=n.data,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(2),l().isAxiosError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[2,10]])}))),function(e){return t.apply(this,arguments)})}]),e}();const f=function(){function e(t,r,n){i()(this,e),this.endpoint=t,this.requestBody=r,this.method=n||"POST"}return u()(e,[{key:"getMethod",value:function(){return this.method}},{key:"getEndpoint",value:function(){return this.endpoint}},{key:"buildRequestBody",value:function(){return Object.fromEntries(this.requestBody)}}]),e}();return t})()}));
//# sourceMappingURL=index.js.map