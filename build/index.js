/*!
 * 
 *   smtp2go-nodejs v0.3.0
 *   https://github.com/smtp2go-oss/nodejs
 *
 *   Copyright (c) SMTP2GO (https://github.com/smtp2go-oss) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["smtp2go-nodejs"]=t():e["smtp2go-nodejs"]=t()}(global,(()=>(()=>{var e={969:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var s=r(591),n=r.n(s),i=r(537),o=r.n(i),a=r(765),u=r.n(a),c=r(779),d=r.n(c),h=r(307),l=r.n(h);const f=require("axios");var p=r.n(f);const m="0.3.0";function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(){function e(t){o()(this,e),d()(this,"apiKey",void 0),d()(this,"apiUrl","https://api.smtp2go.com/v3/"),d()(this,"headers",{}),this.apiKey=t}var t;return u()(e,[{key:"setApiKey",value:function(e){this.apiKey=e}},{key:"setHeaders",value:function(e){this.headers=e}},{key:"getHeaders",value:function(){var e={"Content-Type":"application/json","X-Smtp2go-Api":"smtp2go-nodejs","X-Smtp2go-Api-Version":m};return v(v({},this.headers),e)}},{key:"consume",value:(t=n()(l().mark((function e(t){var r,s,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.buildRequestBody();case 2:return(r=e.sent).api_key=this.apiKey,e.prev=4,e.next=7,p()({method:t.getMethod(),url:this.apiUrl+t.getEndpoint(),headers:this.getHeaders(),data:r});case 7:return s=e.sent,n=s.data,e.abrupt("return",n);case 12:return e.prev=12,e.t0=e.catch(4),e.abrupt("return",e.t0.response);case 15:case"end":return e.stop()}}),e,this,[[4,12]])}))),function(e){return t.apply(this,arguments)})}]),e}()},773:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var s=r(765),n=r.n(s),i=r(537),o=r.n(i),a=r(370),u=r.n(a),c=r(548),d=r.n(c),h=r(761),l=r.n(h);function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=l()(e);if(t){var n=l()(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return d()(this,r)}}var p=function(e){u()(r,e);var t=f(r);function r(e,s){var n;return o()(this,r),(n=t.call(this,s)).filename=e,n}return n()(r)}(r(796).Z)},796:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var s=r(591),n=r.n(s),i=r(537),o=r.n(i),a=r(765),u=r.n(a),c=r(779),d=r.n(c),h=r(307),l=r.n(h),f=r(147).promises,p=r(514),m=r(17),y=function(){function e(t){o()(this,e),d()(this,"filepath",void 0),d()(this,"filename",void 0),d()(this,"fileblob",void 0),d()(this,"mimetype",void 0),this.filepath=t,this.mimetype=p.lookup(this.filepath),this.filename=m.basename(this.filepath),this.fileblob=""}var t;return u()(e,[{key:"setFileBlob",value:function(e){return this.fileblob=e,this}},{key:"readFileBlob",value:(t=n()(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==this.fileblob){e.next=2;break}return e.abrupt("return",this);case 2:return e.next=4,f.readFile(this.filepath,{encoding:"base64"}).catch((function(e){throw e}));case 4:return this.fileblob=e.sent,e.abrupt("return",this);case 6:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"forSend",value:function(){return{filename:this.filename,fileblob:this.fileblob,mimetype:this.mimetype}}}]),e}()},893:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var s=r(591),n=r.n(s);const i=require("@babel/runtime/helpers/toConsumableArray");var o=r.n(i),a=r(537),u=r.n(a),c=r(765),d=r.n(c);const h=require("@babel/runtime/helpers/assertThisInitialized");var l=r.n(h);const f=require("@babel/runtime/helpers/get");var p=r.n(f),m=r(370),y=r.n(m),v=r(548),b=r.n(v),A=r(761),x=r.n(A),k=r(779),g=r.n(k),q=r(307),O=r.n(q),B=r(796);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=x()(e);if(t){var n=x()(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return b()(this,r)}}var w=function(e){y()(s,e);var t,r=j(s);function s(){var e;return u()(this,s),e=r.call(this,"email/send"),g()(l()(e),"htmlBody",void 0),g()(l()(e),"textBody",void 0),g()(l()(e),"fromAddress",void 0),g()(l()(e),"toAddress",void 0),g()(l()(e),"ccAddress",void 0),g()(l()(e),"bccAddress",void 0),g()(l()(e),"subjectLine",void 0),g()(l()(e),"templateId",void 0),g()(l()(e),"templateData",void 0),g()(l()(e),"customHeaders",void 0),g()(l()(e),"attachments",void 0),g()(l()(e),"inlines",void 0),["toAddress","ccAddress","bccAddress","customHeaders","attachments","inlines"].forEach((function(t){return e[t]=[]})),e}return d()(s,[{key:"addAddress",value:function(e,t){switch(t){case"cc":this.ccAddress.push(e);break;case"bcc":this.bccAddress.push(e);break;default:this.toAddress.push(e)}return this}},{key:"html",value:function(e){return this.htmlBody=e,this}},{key:"text",value:function(e){return this.textBody=e,this}},{key:"from",value:function(e){return this.fromAddress=e,this}},{key:"template",value:function(e,t){return this.templateId=e,this.templateData=t,this}},{key:"to",value:function(e){return this._addAddressOfType(e,"to"),this}},{key:"cc",value:function(e){return this._addAddressOfType(e,"cc"),this}},{key:"bcc",value:function(e){return this._addAddressOfType(e,"bcc"),this}},{key:"_addAddressOfType",value:function(e,t){var r=this;return Array.isArray(e)?e.map((function(e){return r.addAddress(e,t)})):this.addAddress(e,t),this}},{key:"headers",value:function(e){var t;Array.isArray(e)?(t=this.customHeaders).push.apply(t,o()(e)):this.customHeaders.push(e);return this}},{key:"subject",value:function(e){return this.subjectLine=e,this}},{key:"attach",value:function(e){if("string"==typeof e)this.attachments.push(new B.Z(e));else if(Array.isArray(e)){var t;(t=this.attachments).push.apply(t,o()(e))}else this.attachments.push(e);return this}},{key:"inline",value:function(e,t){var r=new B.Z(t);return r.filename=e,this.inlines.push(r),this}},{key:"getFormattedAddresses",value:function(e){return this[e+"Address"].map(this.formatAddress)}},{key:"formatAddress",value:function(e){return null!=e&&e.name?"".concat(e.name," <").concat(e.email,">").trim():"<".concat(e.email,">").trim()}},{key:"buildRequestBody",value:(t=n()(O().mark((function e(){var t,r,n,i=this;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.requestBody=new Map,this.requestBody.set("html_body",this.htmlBody),this.textBody&&this.requestBody.set("text_body",this.textBody||""),!this.toAddress.length){e.next=7;break}this.requestBody.set("to",this.getFormattedAddresses("to")),e.next=8;break;case 7:throw Error('At least one "to" address is required.');case 8:if(this.ccAddress.length&&this.requestBody.set("cc",this.getFormattedAddresses("cc")),this.bccAddress.length&&this.requestBody.set("bcc",this.getFormattedAddresses("bcc")),null===(t=this.fromAddress)||void 0===t||!t.email){e.next=14;break}this.requestBody.set("sender",this.formatAddress(this.fromAddress)),e.next=15;break;case 14:throw Error("A from email address is required.");case 15:if(this.requestBody.set("subject",this.subjectLine),this.customHeaders.length&&this.requestBody.set("custom_headers",this.customHeaders),this.templateId&&this.requestBody.set("template_id",this.templateId),(null===(r=this.templateData)||void 0===r?void 0:r.size)>0&&this.requestBody.set("template_data",Object.fromEntries(this.templateData)),!this.attachments.length&&!this.inlines.length){e.next=24;break}return n=[],["attachments","inlines"].forEach((function(e){i[e].forEach((function(e){n.push(e.readFileBlob())}))})),e.next=24,Promise.all(n).then((function(){["attachments","inlines"].forEach((function(e){i[e].length&&i.requestBody.set(e,i[e].map((function(e){return e.forSend()})))}))}));case 24:return e.next=26,p()(x()(s.prototype),"buildRequestBody",this).call(this);case 26:return e.abrupt("return",e.sent);case 27:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),s}(r(415).Z)},415:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var s=r(591),n=r.n(s),i=r(537),o=r.n(i),a=r(765),u=r.n(a),c=r(779),d=r.n(c),h=r(307),l=r.n(h);const f=function(){function e(t,r,s){o()(this,e),d()(this,"method",void 0),d()(this,"endpoint",void 0),d()(this,"requestBody",void 0),this.endpoint=t,this.requestBody=r||new Map,this.method=s||"POST"}var t;return u()(e,[{key:"getMethod",value:function(){return this.method}},{key:"getEndpoint",value:function(){return this.endpoint}},{key:"buildRequestBody",value:(t=n()(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(Object.fromEntries(this.requestBody));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),e}()},1:()=>{},583:()=>{},5:()=>{},591:e=>{"use strict";e.exports=require("@babel/runtime/helpers/asyncToGenerator")},537:e=>{"use strict";e.exports=require("@babel/runtime/helpers/classCallCheck")},765:e=>{"use strict";e.exports=require("@babel/runtime/helpers/createClass")},779:e=>{"use strict";e.exports=require("@babel/runtime/helpers/defineProperty")},761:e=>{"use strict";e.exports=require("@babel/runtime/helpers/getPrototypeOf")},370:e=>{"use strict";e.exports=require("@babel/runtime/helpers/inherits")},548:e=>{"use strict";e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},307:e=>{"use strict";e.exports=require("@babel/runtime/regenerator")},514:e=>{"use strict";e.exports=require("mime-types")},147:e=>{"use strict";e.exports=require("fs")},17:e=>{"use strict";e.exports=require("path")}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";r.r(s),r.d(s,{ApiClient:()=>e.Z,InlineAttachment:()=>o.Z,MailAttachment:()=>i.Z,MailService:()=>n.Z,Service:()=>t.Z,default:()=>h});var e=r(969),t=r(415),n=r(893),i=r(796),o=r(773),a=r(1),u={};for(const e in a)["default","ApiClient","Service","MailService","MailAttachment","InlineAttachment"].indexOf(e)<0&&(u[e]=()=>a[e]);r.d(s,u);var c=r(583);u={};for(const e in c)["default","ApiClient","Service","MailService","MailAttachment","InlineAttachment"].indexOf(e)<0&&(u[e]=()=>c[e]);r.d(s,u);var d=r(5);u={};for(const e in d)["default","ApiClient","Service","MailService","MailAttachment","InlineAttachment"].indexOf(e)<0&&(u[e]=()=>d[e]);function h(r){return{service:function(e){return new t.Z(e)},mail:function(){return new n.Z},client:function(){return new e.Z(r)}}}r.d(s,u)})(),s})()));
//# sourceMappingURL=index.js.map