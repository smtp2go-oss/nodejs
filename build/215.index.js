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
"use strict";exports.id=215,exports.ids=[215],exports.modules={215:(i,e,t)=>{t.d(e,{default:()=>f});var s=t(116),l=t.n(s),o=t(943),h=t(904),a=t(928);class f{constructor(i){l()(this,"filepath",void 0),l()(this,"filename",void 0),l()(this,"fileblob",void 0),l()(this,"mimetype",void 0),this.filepath=i;const e=(0,h.lookup)(this.filepath);this.mimetype="string"==typeof e?e:"application/octet-stream",this.filename=(0,a.basename)(this.filepath),this.fileblob=""}setFileBlob(i){return this.fileblob=i,this}async readFileBlob(){return""!=this.fileblob||(this.fileblob=await(0,o.readFile)(this.filepath,{encoding:"base64"}).catch(i=>{throw i})),this}forSend(){return{filename:this.filename,fileblob:this.fileblob,mimetype:this.mimetype}}}}};
//# sourceMappingURL=215.index.js.map