/*!
 * 
 *   smtp2go-nodejs v1.0.0-alpha.1
 *   git+https://github.com/smtp2go-oss/nodejs.git
 *
 *   Copyright (c) SMTP2GO (https://github.com/smtp2go-oss) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
"use strict";exports.id=773,exports.ids=[773],exports.modules={773:(e,i,t)=>{t.d(i,{default:()=>o});var s=t(116),l=t.n(s);class o{constructor(e){l()(this,"file",void 0),l()(this,"filename",void 0),l()(this,"fileblob",void 0),l()(this,"mimetype",void 0),this.file=e,this.filename=e.name,this.mimetype=e.type||"application/octet-stream",this.fileblob=""}setFileBlob(e){return this.fileblob=e,this}async readFileBlob(){return""!==this.fileblob||(this.fileblob=await new Promise((e,i)=>{const t=new FileReader;t.onload=()=>{const i=t.result.split(",")[1];e(i)},t.onerror=i,t.readAsDataURL(this.file)})),this}forSend(){return{filename:this.filename,fileblob:this.fileblob,mimetype:this.mimetype}}}}};
//# sourceMappingURL=773.index.js.map