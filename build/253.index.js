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
"use strict";exports.id=253,exports.ids=[215,253],exports.modules={215:(e,i,t)=>{t.d(i,{default:()=>r});var s=t(116),l=t.n(s),o=t(943),a=t(904),h=t(928);class r{constructor(e){l()(this,"filepath",void 0),l()(this,"filename",void 0),l()(this,"fileblob",void 0),l()(this,"mimetype",void 0),this.filepath=e;const i=(0,a.lookup)(this.filepath);this.mimetype="string"==typeof i?i:"application/octet-stream",this.filename=(0,h.basename)(this.filepath),this.fileblob=""}setFileBlob(e){return this.fileblob=e,this}async readFileBlob(){return""!=this.fileblob||(this.fileblob=await(0,o.readFile)(this.filepath,{encoding:"base64"}).catch(e=>{throw e})),this}forSend(){return{filename:this.filename,fileblob:this.fileblob,mimetype:this.mimetype}}}},253:(e,i,t)=>{t.d(i,{default:()=>l});var s=t(215);class l extends s.default{constructor(e,i){super(i),this.filename=e}}}};
//# sourceMappingURL=253.index.js.map