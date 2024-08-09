"use strict";(self.webpackChunkair_docs=self.webpackChunkair_docs||[]).push([[2634,1651],{4983:(e,t,s)=>{s.d(t,{A:()=>a});var i=s(8718),n=s(4164),r=(s(6540),s(4824)),o=s(4848);function a(){return(0,o.jsx)("div",{className:i.A.contentBlack141414,children:(0,o.jsx)("div",{className:"w-1440",children:(0,o.jsxs)("div",{className:(0,n.A)("w-1280",i.A.header),children:[(0,o.jsxs)("a",{href:"/air/",children:[(0,o.jsx)("img",{src:"img/logo.svg"}),"Turbulence"]}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:["\u538b\u7f29",(0,o.jsx)("img",{src:"images/home/\u4e0b\u62c9\u7bad\u59341.svg",alt:""}),(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{className:i.A.on,href:"",children:"\u56fe\u50cf\u538b\u7f29"}),(0,o.jsx)("a",{href:"",children:"\u89c6\u9891\u538b\u7f29"}),(0,o.jsx)("a",{href:"",children:"\u6587\u4ef6\u538b\u7f29"}),(0,o.jsx)("a",{href:"",children:"\u97f3\u9891\u538b\u7f29"})]})]}),(0,o.jsxs)("li",{children:["\u8f6c\u6362",(0,o.jsx)("img",{src:"images/home/\u4e0b\u62c9\u7bad\u59341.svg",alt:""}),(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{className:i.A.on,href:"",children:"\u6587\u6863\u8f6c\u6362"}),(0,o.jsx)("a",{href:"",children:"\u56fe\u50cf\u8f6c\u6362"}),(0,o.jsx)("a",{href:"",children:"\u89c6\u9891\u8f6c\u6362"}),(0,o.jsx)("a",{href:"",children:"\u97f3\u9891\u8f6c\u6362"})]})]}),(0,o.jsx)("li",{children:"OCR"}),(0,o.jsx)("li",{children:"API"}),(0,o.jsx)("li",{children:"\u5b9a\u4ef7"}),(0,o.jsx)("li",{children:"\u652f\u6301"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"images/home/\u6587\u4ef6\u5939icon.svg"}),(0,o.jsx)("span",{children:"66"})]}),(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"images/home/\u8bed\u8a00icon.svg"})}),(0,o.jsx)("button",{className:i.A.homeButton,onClick:()=>{return void 0===(e=1)&&(e=1),void r.A.emit("login-popup",e);var e},children:"\u767b\u5f55"})]})]})})})}},5742:(e,t,s)=>{s.d(t,{A:()=>o});var i=s(8718),n=s(4164),r=(s(6540),s(4848));function o(){return(0,r.jsx)("div",{className:i.A.contentBlack,children:(0,r.jsxs)("ul",{className:(0,n.A)("row w-1280",i.A.contentCount),children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{style:{marginLeft:0},children:"32"}),"\u670d\u52a1\u5668"]}),(0,r.jsxs)("li",{children:["\u5df2\u5728\u7ebf\u8f6c\u6362\u6587\u4ef6",(0,r.jsx)("span",{children:"77777"}),"\u4e2a"]}),(0,r.jsxs)("li",{children:["\u5df2\u5728\u7ebf\u8f6c\u6362\u6587\u4ef6",(0,r.jsx)("span",{children:"999999"}),"GB"]})]})})}},6007:(e,t,s)=>{s.r(t),s.d(t,{Compresses:()=>z,ConversionsPicker:()=>T,default:()=>N});var i=s(6540),n=s(4415),r=s(704),o=s(5822),a=s(1710),l=s.n(a),c=s(4213);function d(e){if(!e)return 0;const t=(e.size/1024/1024).toFixed(2);return Number(t)}class h{static getFileName(e){return e.substring(0,e.lastIndexOf("."))}static getExtension(e){return e.substring(e.lastIndexOf("."))}static getExtensionName(e){return e.substring(e.lastIndexOf(".")+1)}static async getFile(e){try{return await new Promise(((t,s)=>e.file(t,s)))}catch(t){console.log(t)}}static async zipDownload(e){const t=new(l());for(const i of e)t.file(i.name,i,{base64:!0});const s=(new Date).toLocaleString(void 0,{hour12:!1}).replace(/\/|:|\s/g,"-");t.generateAsync({type:"blob"}).then((function(e){(0,c.saveAs)(e,`air-download-${s}.zip`)}))}}class p{static html(e,t){return'\n        <div id="drop_zone" style="height: 100%;border: 2px dashed #bbb;border-radius: 5px;padding: 16px;background: white;transition: border-color 0.5s;text-align: center;position: relative;overflow: hidden;">\n            <input type="file" multiple accept=".png,.jpg,.jpeg,.gif" style="position:absolute; top: -100px" id="drop_picker">\n            <div id="drop_zone_tips"\n                style="position: absolute;top: 0;left: 0;width:100%;height:100%;display: flex;align-items: center;justify-content: center;background: rgba(255, 255, 255,.9);cursor: pointer;z-index: 1;">\n                <div style="text-align: left;">\n                    <div style="color: #999;">Drag and Drop</div>\n                </div>\n            </div>\n            <div id="drop_content" style="width:100%;height: 100%;position: relative;background: transparent;"></div>\n        </div>\n        '}static readFileUint8Array(e){return new Promise((t=>{let s=new FileReader;s.onload=function(e){let s=new Uint8Array(e.target.result);t(s)},s.readAsArrayBuffer(e)}))}drop_zone;drop_zone_tips;drop_picker;drop_content;onChange;needStyle=!0;constructor(e){if(this.onChange=e.onChange||function(){},"boolean"==typeof e.needStyle&&(this.needStyle=e.needStyle),e.el&&void 0===e.theme)this.drop_zone=e.el;else if(e.el&&"simple"===e.theme)e.el.innerHTML=p.html(),e.theme="custom";else{if(!e.el||"base"!==e.theme)return;{e.el.style.position="relative";const t=document.createElement("input");t.type="file",t.multiple="true",t.accept=".png,.jpg,.jpeg,.gif",t.id="drop_picker",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.right="0",t.style.bottom="0",t.style.opacity="0",t.style.zIndex="1",t.style.cursor="pointer",t.style.display="none",e.el.appendChild(t),this.drop_zone=e.el,this.drop_picker=t}}e.el&&"custom"===e.theme&&(this.drop_zone=document.getElementById("drop_zone"),this.drop_zone_tips=document.getElementById("drop_zone_tips"),this.drop_picker=document.getElementById("drop_picker"),this.drop_content=document.getElementById("drop_content")),this.drop_zone.addEventListener("dragover",(e=>e.preventDefault()),!1),this.drop_zone.addEventListener("dragleave",(e=>this.dragleave(e)),!1),this.drop_zone.addEventListener("dragenter",(e=>this.dragenter(e)),!1),this.drop_zone.addEventListener("drop",(e=>this.dragdrop(e)),!1),this.drop_zone_tips&&this.drop_zone_tips.addEventListener("click",(e=>this.filePicker()),!1),this.drop_picker&&this.drop_picker.addEventListener("change",(e=>this.fileOpen(e)),!1)}recordDropNode;dragleave(e){this.recordDropNode===e.target&&(this.drop_zone_tips&&(this.drop_zone_tips.style.zIndex="initial"),this.drop_zone.style.border="2px dashed #bbb")}dragenter(e){this.recordDropNode=e.target,e.preventDefault(),this.drop_zone_tips&&(this.drop_zone_tips.style.zIndex="1"),this.drop_zone.style.border="2px dashed #0087F7"}dragdrop(e){this.drop_zone_tips&&(this.drop_zone_tips.style.zIndex="initial"),this.drop_zone.style.border="2px dashed #bbb",e.preventDefault(),this.getAllFiles(e).then((e=>{this.onChange(e,this.drop_content)}))}filePicker(){let e=document.createEvent("MouseEvents");e.initEvent("click",!0,!0),this.drop_picker.dispatchEvent(e)}fileOpen(e){this.needStyle&&(this.drop_zone_tips.style.zIndex="initial",this.drop_zone.style.border="2px dashed #bbb"),this.getAllFiles(e).then((e=>{this.onChange(e,this.drop_content)}))}open(){this.filePicker()}async getAllFiles(e){let t,s=[];if(void 0!==e.dataTransfer){t=e.dataTransfer.items;for(let e=0;e<t.length;e++){let i=t[e].webkitGetAsEntry(),n=await this.getFileList(i);s=s.concat(n)}}else{t=e.target.files;for(let e=0;e<t.length;e++){const i=t[e];let n=await this.getFileList(i);s=s.concat(n)}}return s}async getFileList(e){let t=[];if(e.isDirectory){let s=e.createReader(),i=await new Promise((e=>{s.readEntries((t=>e(t)))}));for(const e of i){let s=await this.getFileList(e);t=t.concat(s)}}else if("FileEntry"===e.toString().match(/\[object (.*?)\]/)[1]){const s=await h.getFile(e);t.push(s)}else t.push(e);return t}}var x=s(3660),g=s(5500),u=(s(4498),s(4983)),m=s(5742),v=s(4335);async function j(e,t,s,i,n){void 0===i&&(i={}),void 0===n&&(n={});try{const r=new FormData;r.append("file",t);for(const e in n)r.append(e,n[e]);const o=await v.A.post(e,r,{headers:Object.assign({"Content-Type":"multipart/form-data"},{...i}),onUploadProgress:e=>{const{loaded:t,total:i}=e,n=Math.round(t/i*100);console.log(`progress\uff1a${n}%`),s(n)}});return console.log(`HTTP Status Code: ${o.status}`),s(100),!0}catch(r){return r.response?(console.error(`Error: ${r.response.data}`),console.log(`HTTP Status Code: ${r.response.status}`)):console.error(`Error: ${r.message}`),null}}function b(){if("object"==typeof crypto){if("function"==typeof crypto.randomUUID)return crypto.randomUUID();if("function"==typeof crypto.getRandomValues&&"function"==typeof Uint8Array){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>{const t=Number(e);return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}}let e=(new Date).getTime(),t="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(s=>{let i=16*Math.random();return e>0?(i=(e+i)%16|0,e=Math.floor(e/16)):(i=(t+i)%16|0,t=Math.floor(t/16)),("x"===s?i:3&i|8).toString(16)}))}Object.getOwnPropertyDescriptor(Array.prototype,"isNotEmpty")||Object.defineProperty(Array.prototype,"isNotEmpty",{get:function(){return this.length>0}}),Array.prototype.removeAt||(Array.prototype.removeAt=function(e){return this.splice(e,1)[0]}),Array.prototype.addAll||(Array.prototype.addAll=function(e){return this.concat(e)}),Array.prototype.firstWhere||(Array.prototype.firstWhere=function(e){return this.find(e)}),Array.prototype.add||(Array.prototype.add=function(e){return this.push(e)}),Array.prototype.toList||(Array.prototype.toList=function(){return this}),Array.prototype.removeWhere||(Array.prototype.removeWhere=function(e){this.splice(0,this.length,...this.filter((function(t,s,i){return!e(t,s,i)})))}),Array.prototype.where||(Array.prototype.where=function(e){return this.filter(e)}),Object.getOwnPropertyDescriptor(Array.prototype,"first")||Object.defineProperty(Array.prototype,"first",{get:function(){return this[0]}});class f{autoDownload=!1;concurrencyCount=1;_totalTasks=[];_surplusTasks=[];_successTasks=[];_failTasks=[];_currentTasks=[];stream=null;start(){this._failTasks.isNotEmpty&&(this._surplusTasks.addAll(this._failTasks),this._failTasks.clear()),this._executeQueue()}startAt(e){var t=this._surplusTasks.firstWhere((t=>t.id===e));this._executeTask(t,!1)}restartAt(e){}remove(){}removeAt(e){var t=this.getTask(e);t?.cancel(),this._totalTasks.removeWhere((t=>t.id===e)),this._failTasks.removeWhere((t=>t.id===e)),this._successTasks.removeWhere((t=>t.id===e)),this._surplusTasks.removeWhere((t=>t.id===e)),this._currentTasks.removeWhere((t=>t.id===e)),this._executeQueue(),this._log()}getTask(e){var t=this._totalTasks.where((t=>t.id===e));return t.isNotEmpty?t.first:null}addTask(e){this._totalTasks.add(e),this._surplusTasks.add(e),this.autoDownload&&this._executeQueue(),this.stream&&this.stream(this._totalTasks.length),this._log()}addAllTask(){}_executeQueue(){if(this._surplusTasks.isNotEmpty)for(var e=this.concurrencyCount-this._currentTasks.length,t=0;t<e;t++)if(this._surplusTasks.isNotEmpty){var s=this._surplusTasks.removeAt(0);this._currentTasks.add(s),this._executeTask(s,!0)}}_executeTask(e,t){e.start(),e.finish.then((s=>{s?(this._successTasks.add(e),e.end()):(this._failTasks.add(e),e.error()),this._currentTasks.removeWhere((t=>t.id===e.id)),t&&this._executeQueue(),this._log()})),this._log()}_log(){console.log(`\n\u5168\u90e8\u4efb\u52a1(${this._totalTasks.length}) ${this._totalTasks.map((e=>e.id)).toList()}\n\n\u6210\u529f\u4efb\u52a1(${this._successTasks.length}) ${this._successTasks.map((e=>e.id)).toList()}\n\n\u5931\u8d25\u4efb\u52a1(${this._failTasks.length}) ${this._failTasks.map((e=>e.id)).toList()}\n\n\u5269\u4f59\u4efb\u52a1(${this._surplusTasks.length}) ${this._surplusTasks.map((e=>e.id)).toList()}\n\n\u5f53\u524d\u4efb\u52a1(${this._currentTasks.length}) ${this._currentTasks.map((e=>e.id)).toList()}\n        `)}}class y{data=null;_resolve=null;startCallback=null;endCallback=null;constructor(e,t,s){this.data=e,this.startCallback=t,this.endCallback=s,this._completer=new Promise(((e,t)=>{this._resolve=e}))}id=b();_completer;get finish(){return this._completer}start(){this.startCallback&&this.startCallback(this)}end(){this.endCallback&&this.endCallback(this)}error(){}cancel(){}successHandle(){this._resolve&&this._resolve(!0)}failHandle(){this._resolve&&this._resolve(!1)}}class w{static getBase64(e){return new Promise(((t,s)=>{const i=new FileReader;i.readAsDataURL(e),i.onload=()=>t(i.result),i.onerror=e=>s(e)}))}static download(e){const t=Date.now(),s=h.getExtensionName(e.name);(0,c.saveAs)(e,`air-download-${t}.${s}`)}}var k=s(4824),_=s(4848);const C=r.A.TabPane;function N(){return(0,_.jsx)(x.A,{children:(0,_.jsxs)(g.e3,{className:"myPageHtmlClassName",children:[(0,_.jsx)(g.be,{title:"\u9996\u9875 from ",description:"\u6b22\u8fce from "}),(0,_.jsx)(A,{})]})})}function A(){return(0,_.jsxs)("div",{className:"page",children:[(0,_.jsx)(u.A,{}),(0,_.jsx)("div",{className:"contentBlack",children:(0,_.jsx)("div",{className:"w-1000 covert-content",children:(0,_.jsx)(z,{})})}),(0,_.jsx)(m.A,{})]})}class z extends i.Component{queues=new f;state={tasks:[],tasksRefs:[],haveFiles:!1,size:0,conversionsType:"",allSwitchChecked:!0};dropUtil;componentDidMount(){this.dropUtil=new p({theme:"base",el:document.getElementById("drop_file"),needStyle:!1,onChange:async(e,t)=>{e[0];const s=[];for(let n=0;n<e.length;n++){this.state.tasksRefs[n]=i.createRef();const t=new y(e[n],(e=>{j("https://www.chatgpt5000.com/ai/select/uploadLotteryImage",e.data,(t=>{const s=this.state.tasks.findIndex((t=>t.id===e.id));s<0?console.error("\u4efb\u52a1\u53ef\u80fd\u5220\u9664\u4e86",this.state.tasks,e.id):(e.data.progress=t,console.log(`uploadFile\uff1a${t}% ${e.data.progress}`),this.state.tasks[s]=e,this.setState({}),100===t&&(e.successHandle(),setTimeout((()=>{e.data.progressHide=!0,this.setState({})}),500)))}),{sessionId:"242f2f3f496d40d6b0e038ff46767eb2"},{historyId:10})}),(e=>{console.log("\u4efb\u52a1\u5b8c\u6210")}));s.push(t),this.queues.addTask(t)}this.state.tasks=this.state.tasks.concat([...s]),this.state.haveFiles=!0,this.calcSize(),this.setState({}),this.queues.start()}})}calcSize(){this.state.size=0;for(const e of this.state.tasks)this.state.size+=d(e.data);this.state.size=this.state.size.toFixed(2)}clickRemove(e){const t=this.state.tasks.splice(e,1)[0];this.setState({}),this.queues.removeAt(t.id)}clickConversions(){this.queues=new f;const e=[];for(let t=0;t<this.state.tasks.length;t++){const s=new y(this.state.tasks[t].data,(e=>{j("https://www.chatgpt5000.com/ai/select/uploadLotteryImage",e.data,(t=>{const s=this.state.tasks.findIndex((t=>t.id===e.id));s<0?console.error("\u4efb\u52a1\u53ef\u80fd\u5220\u9664\u4e86",this.state.tasks,e.id):(e.data.progress=100,e.data.progress2=t,console.log(`uploadFile\uff1a${t}% ${e.data.progress2}`),this.state.tasks[s]=e,this.setState({}),100===t&&e.successHandle())}),{sessionId:"242f2f3f496d40d6b0e038ff46767eb2"},{historyId:10})}),(e=>{console.log("\u4efb\u52a1\u5b8c\u6210")}));e.push(s),this.queues.addTask(s)}this.state.tasks=e,this.state.haveFiles=!0,this.calcSize(),this.setState({}),this.queues.start()}downloadAll(){const e=[];for(const t of this.state.tasks)e.push(t.data);h.zipDownload(e)}onChange(e){console.log(e)}onChangeAll(e){for(const t of this.state.tasksRefs)t.current.notifyChange(e)}openLogin(e){void 0===e&&(e=1),k.A.emit("login-popup",e)}render(){return(0,_.jsxs)("div",{id:"drop_file",style:{width:"100%"},children:[0===this.state.tasks.length&&(0,_.jsxs)("div",{className:"col covert-content-box-no",children:[(0,_.jsx)("h6",{style:{height:29}}),(0,_.jsx)("h3",{children:"\u6587\u4ef6\u8f6c\u6362\u5668"}),(0,_.jsx)("h6",{style:{height:44}}),(0,_.jsxs)("div",{className:"col",children:[(0,_.jsx)("h6",{style:{height:54}}),(0,_.jsx)("button",{onClick:()=>this.dropUtil.open(),children:"\u9009\u62e9\u6587\u4ef6"}),(0,_.jsx)("h6",{style:{height:13}}),(0,_.jsxs)("p",{children:["\u6700\u591a50\u4e2a\uff0c\u6bcf\u4e2a\u6700\u592710MB\u6216 ",(0,_.jsx)("a",{style:{cursor:"pointer"},onClick:()=>this.openLogin(2),children:"\u6ce8\u518c"})]})]}),(0,_.jsx)("h6",{style:{height:97}})]}),0!==this.state.tasks.length&&(0,_.jsxs)("div",{id:"bannerCovert",className:"col w-1280 covert-content-box",children:[(0,_.jsx)("h6",{style:{height:30}}),(0,_.jsxs)("div",{className:"row covert-content-box-title",children:[(0,_.jsxs)("h3",{children:["Ready",(0,_.jsxs)("span",{children:[this.state.tasks.length," ",(0,_.jsx)("em",{children:"files"})," | ",this.state.size," MB ",(0,_.jsx)("em",{children:"TOTAL"})]})]}),(0,_.jsxs)("button",{onClick:()=>this.downloadAll(),children:[(0,_.jsx)("img",{src:"images/covert/icon_download_all.svg",alt:""}),"\u4e0b\u8f7d\u6240\u6709\u6587\u4ef6"]})]}),(0,_.jsx)("h6",{style:{height:25}}),this.state.haveFiles&&(0,_.jsx)("ul",{children:this.state.tasks.map(((e,t)=>(0,_.jsxs)("li",{children:[(0,_.jsxs)("div",{className:"covert-content-box-ul-li-content",children:[(0,_.jsx)("img",{className:"covert-content-box-ul-li-thumbnail",src:"images/covert/icon_img.svg",alt:""}),(0,_.jsxs)("div",{className:"covert-content-box-ul-div",children:[(0,_.jsx)("h4",{children:e.data.name}),(0,_.jsxs)("p",{children:[d(e.data),"MB"]})]}),100===e.data.progress&&(0,_.jsxs)("div",{className:"covert-content-box-ul-div-to",children:["\u81f3",(0,_.jsx)("div",{className:"covert-content-box-ul-div-select",children:(0,_.jsx)(T,{ref:this.state.tasksRefs[t],onChange:this.onChange})})]}),void 0===e.data.progress&&(0,_.jsx)("div",{className:"covert-content-box-ul-div-res",children:"\u5df2\u5c31\u7eea"}),void 0!==e.data.progress&&100!==e.data.progress&&(0,_.jsx)("div",{className:"covert-content-box-ul-div-res",children:"\u538b\u7f29\u4e2d"}),100===e.data.progress&&void 0===e.data.progress2&&(0,_.jsx)("div",{className:"covert-content-box-ul-div-res",children:"\u5df2\u538b\u7f29"}),100===e.data.progress&&void 0!==e.data.progress2&&100!==e.data.progress2&&(0,_.jsx)("div",{className:"covert-content-box-ul-div-res",children:"\u8f6c\u6362\u4e2d"}),100===e.data.progress2&&(0,_.jsx)("div",{className:"covert-content-box-ul-div-res",children:"\u5df2\u8f6c\u6362"}),(0,_.jsxs)("div",{className:"covert-content-box-ul-div-options",children:[(100===e.data.progress&&void 0===e.data.progress2||100===e.data.progress2)&&(0,_.jsxs)("div",{className:"covert-content-box-ul-div-num",children:["-68%",(0,_.jsx)("span",{children:"100kb"})]}),(100===e.data.progress&&void 0===e.data.progress2||100===e.data.progress2)&&(0,_.jsxs)("button",{onClick:()=>w.download(e.data),children:[(0,_.jsx)("img",{src:"images/covert/icon_download.svg",alt:""}),"PNG"]})]}),(0,_.jsx)("img",{className:"covert-content-box-ul-li-close",src:"images/covert/icon_close.svg",alt:"",onClick:()=>this.clickRemove(t)})]}),(0,_.jsx)("div",{className:"covert-content-box-ul-li-compresses",children:e.data.progressHide?null:(0,_.jsx)("span",{style:{width:`${e.data.progress}%`}})}),(0,_.jsx)("div",{className:"covert-content-box-ul-li-conversions",style:{width:`${e.data.progress2}%`}})]},t)))}),!this.state.haveFiles&&(0,_.jsx)("div",{id:"covert-content-box-drop_file"}),(0,_.jsxs)("div",{className:"row covert-content-box-footer",children:[(0,_.jsxs)("div",{className:"covert-content-box-footer-div",children:[(0,_.jsxs)("button",{className:"row covert-content-box-footer-add",onClick:()=>this.dropUtil.open(),children:[(0,_.jsx)("img",{src:"images/covert/icon_add.svg",alt:""}),"\u6dfb\u52a0\u66f4\u591a\u6587\u4ef6"]}),(0,_.jsxs)("div",{className:"covert-content-box-footer-div-share",children:[(0,_.jsx)("img",{src:"images/covert/icon_wei_bo.svg",alt:""}),(0,_.jsx)("img",{src:"images/covert/icon_wei_xin.svg",alt:""})]}),(0,_.jsx)("div",{className:"covert-content-box-footer-div-all",children:(0,_.jsxs)(T,{onChange:e=>this.onChangeAll(e),children:[(0,_.jsx)("span",{children:"\u5c06\u6240\u6709\u8f6c\u6362\u4e3a"}),(0,_.jsx)("img",{src:"images/covert/icon_arrow_down.svg",alt:"",width:13})]})}),(0,_.jsxs)("div",{className:"covert-content-box-footer-div-switch",children:[(0,_.jsx)(o.A,{checked:this.state.allSwitchChecked,onChange:e=>{this.state.allSwitchChecked=e,this.setState({})}}),(0,_.jsx)("span",{children:"\u9884\u538b\u7f29\u5934\u50cf"})]})]}),(0,_.jsx)("button",{className:"row covert-content-box-footer-submit",onClick:()=>this.clickConversions(),children:"\u8f6c \u6362"})]})]})]})}}class T extends i.Component{constructor(e){super(e)}state={visible:!1,type:""};keyword="";searchResult=[];options={"\u56fe\u50cf":["PNG","JPG","GIF","ICO"],"\u89c6\u9891":["AVI","MP4","MKV","WEBM","WEBM","WEBM","WEBM","WEBM","WEBM","WEBM","WEBM","WEBM","WEBM","WEBM","WEBM","WEBM","WEBM","WEBM"],"\u6587\u6863":["PDF","PDF","7z","ZIP","ZIP","ZIP","ZIP","ZIP","ZIP","ZIP","ZIP","ZIP"]};onChange(e){this.state.type=e,this.props.onChange(e),this.onHide()}onShow(){this.state.visible=!0,this.setState({})}onHide(){this.state.visible=!1,this.setState({})}notifyChange(e){this.onChange(e)}onInput(e){this.keyword=e.target.value,this.searchResult=[];for(const t in this.options){this.options[t].forEach((e=>{const t=e.toLowerCase(),s=this.keyword.toLowerCase();t.indexOf(s)>-1&&this.searchResult.push(e)}))}console.log(this.searchResult),this.setState({})}onCleanInput(){this.keyword="",this.searchResult=[],this.setState({})}render(){const e=i.Children.count(this.props.children)>0;return(0,_.jsx)(n.A,{popupVisible:this.state.visible,trigger:"click",className:"ConversionsPicker-btn",content:(0,_.jsxs)("div",{className:"ConversionsPicker",children:[(0,_.jsx)("div",{className:"ConversionsPicker-mask",onClick:()=>this.onHide()}),(0,_.jsxs)("div",{className:"ConversionsPicker-search",children:[(0,_.jsx)("input",{type:"text",placeholder:"\u641c\u7d22",value:this.keyword,onInput:e=>this.onInput(e)}),""!==this.keyword&&(0,_.jsx)("img",{className:"ConversionsPicker-search-close",src:"images/covert/icon_close.svg",alt:"",onClick:()=>this.onCleanInput()})]}),""!==this.keyword?(0,_.jsx)("ul",{className:"ConversionsPicker-search-result",children:this.searchResult.map((e=>(0,_.jsx)("li",{onClick:()=>this.onChange(e),children:e},e)))}):(0,_.jsx)(r.A,{tabPosition:"left",children:Object.keys(this.options).map((e=>(0,_.jsx)(C,{title:e,children:(0,_.jsx)("ul",{className:"ConversionsPicker-options-default",children:this.options[e].map((e=>(0,_.jsx)("li",{onClick:()=>this.onChange(e),children:e},e)))})},e)))},"card")]}),children:e?(0,_.jsx)("span",{className:"ConversionsPicker-custom",onClick:()=>this.onShow(),children:this.props.children}):(0,_.jsxs)("button",{className:"ConversionsPicker-btn-btn",onClick:()=>this.onShow(),children:[""!==this.state.type?this.state.type:(0,_.jsx)("span",{children:"\xb7\xb7\xb7"}),(0,_.jsx)("img",{src:"images/covert/icon_arrow_down.svg",alt:"",width:13})]})})}}},4498:(e,t,s)=>{s.r(t),s.d(t,{default:()=>A});var i=s(4164),n=s(6540),r=s(9236),o=s(8718);class a{constructor(e,t){let{start:s="50",prefix:i="beer"}=void 0===t?{}:t;if(this.start=parseInt(s)?Math.min(100,Math.max(0,parseInt(s))):50,this.prefix=i,!e||2!==e.children.length)return;if(this.element=e,this.revealContainer=this.element.children[1],this.revealContainer.children.length<1)return;this.revealElement=this.revealContainer.children[0],this.range=this.addElement("input",{type:"range",class:`${this.prefix}-range`,"aria-label":"Percent of revealed content","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":this.start,value:this.start,min:"0",max:"100"});const n=this.addElement("div",{class:`${this.prefix}-handle`}),r=document.createElement("span");r.setAttribute("class",`${this.prefix}-handle-center`),n.appendChild(r),this.handle=n,this.onImagesLoad()}init(){this.element.classList.add(`${this.prefix}-ready`),this.setImgWidth(),this.move(),this.addListeners()}loadingImg(e){return new Promise(((t,s)=>{e||t();const i=new Image;i.onload=()=>t(),i.onerror=()=>s(),i.src=e}))}loadedBoth(){const e=this.element.children[0].src||this.element.children[0].getAttribute(`data-${this.prefix}-src`),t=this.revealElement.src||this.revealElement.getAttribute(`data-${this.prefix}-src`);return Promise.all([this.loadingImg(e),this.loadingImg(t)])}onImagesLoad(){this.revealElement&&this.loadedBoth().then((()=>{this.init()}),(()=>{console.error("Some errors occurred and images are not loaded.")}))}addElement(e,t){const s=document.createElement(e);return Object.keys(t).forEach((e=>{s.setAttribute(e,t[e])})),this.element.appendChild(s),s}setImgWidth(){this.revealElement.style.width=getComputedStyle(this.element).width}addListeners(){["input","change"].forEach((e=>{this.range.addEventListener(e,(()=>{this.move()}))})),window.addEventListener("resize",(()=>{this.setImgWidth()}))}move(){this.range.value>=50?(this.revealContainer.style.width=`${this.range.value}%`,this.handle.style.left=`${this.range.value}%`,this.handle.style.right="auto"):(this.revealContainer.style.width=`${this.range.value}%`,this.handle.style.left="auto",this.handle.style.right=100-this.range.value+"%"),this.range.setAttribute("aria-valuenow",this.range.value)}}var l=s(4848);const c=function(){return(0,n.useEffect)((()=>(new a(document.getElementById("slider")),()=>{})),[]),(0,l.jsxs)("div",{id:"slider",className:"beer-slider","data-beer-label":"before",style:{borderRadius:50,overflow:"hidden",display:"block"},children:[(0,l.jsx)("img",{src:"images/home/after.png",alt:""}),(0,l.jsx)("div",{className:"beer-reveal","data-beer-label":"after",children:(0,l.jsx)("img",{src:"images/home/befor.png",alt:""})})]})};var d=s(1199),h=(s(5794),s(7542)),p=s(539),x=s(2189),g=s(3529),u=s(3919);const m=s(4335).A.create({baseURL:"http://82.157.28.128:8999",timeout:6e3}),v=e=>(e.response&&console.error(e.response),Promise.reject(e));function j(e){return function(e){return!!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}(e)||function(e){return!!/^\d{11}$/.test(e)}(e)}m.interceptors.request.use((e=>e),v),m.interceptors.response.use((e=>200===e.status?e.data:v({response:e})),v);class b{constructor(e){void 0===e&&(e=60),this.duration=e,this.timer=null,this.onTick=null,this.onComplete=null}start(){let e=this.duration;this.timer=setInterval((()=>{e--,"function"==typeof this.onTick&&this.onTick(e),e<=0&&(this.stop(),"function"==typeof this.onComplete&&this.onComplete())}),1e3)}stop(){clearInterval(this.timer)}}var f=s(4824);const y=h.DU`
    /* 这里写你的全局CSS */
    .LoginModal {
        .arco-modal-content {
            padding: 0;
            width: 100%;
            height: 100%;
        }

        .arco-checkbox {
            .arco-checkbox-mask {
                width: 15px;
                height: 15px;
                border: 2px solid var(--page-border-b2b2b2);
                border-radius: 4px;

                .arco-checkbox-mask-icon {
                    width: 13px;
                }
            }

            .arco-checkbox-text {
                margin-left: 5px;
                font-size: 13px;
            }
        }

        .arco-checkbox-checked {
            .arco-checkbox-mask {
                border: 0;
                background-color: var(--page-checkbox-000);
                padding-left: 1px;
                padding-bottom: 1px;
            }
        }

        .arco-input::placeholder {
            color: var(--page-border-b2b2b2);
        }

        .arco-input.phone::placeholder {
            color: var(--page-text-808080);
        }

        .ipt.arco-input {
            width: 270px;
            height: 38px;
            border-radius: 6px;
            border: 1px solid var(--page-border-b2b2b2);
            font-size: 15px;
            padding: 0 18px;
            outline: none;
            background-color: transparent;
        }

        .ipt-group {
            width: 270px;
            height: 38px;
            border-radius: 6px;

            .arco-input-group {
                width: 270px;
                height: 38px;
                border-radius: 6px;
                border: 1px solid var(--page-border-b2b2b2);

                .arco-input-inner-wrapper {
                    border: 0;
                    background-color: transparent;

                    .arco-input {
                        //width: 360px;
                        //height: 50px;
                        padding: 0 18px;
                        font-size: 15px;
                        outline: none !important;
                        //border-radius: 8px;
                        //border: 1px solid var(--page-border-b2b2b2);
                    }

                    .arco-input-group-suffix {
                        display: none;
                    }
                }

                .arco-input-group-addafter {
                    width: 50px;
                    background-color: transparent;
                    text-align: center;
                    font-size: 15px;
                    font-weight: bold;
                    border: 0;
                    border-left: 1px solid var(--page-border-b2b2b2);
                    cursor: pointer;
                    color: var(--page-input-icon);
                }
            }
        }

        .LoginModal-content-left-right {
            width: 270px;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            line-height: 1;

            > span {
                font-size: 12px;
            }

            > span:hover {
                text-decoration: underline;
            }
        }

        .error-tips {
            font-size: 10px;
            padding: 0 18px;
        }

    }

    .LoginModal-title {
        background-color: var(--page-text-262626)
    }

    .LoginModal-content {
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .LoginModal-content input.ipt {

    }

    .LoginModal-content button.b1 {
        width: 270px;
        height: 38px;
        border-radius: 6px;
        color: var(--page-text-FFF);
        background-color: var(--page-bg-000);
        font-size: 18px;
        cursor: pointer;
        border: 0;
    }

    .LoginModal-content button.b2 {
        width: 270px;
        height: 38px;
        border-radius: 6px;
        color: var(--page-bg-000);
        background-color: transparent;
        font-size: 18px;
        cursor: pointer;
        border: 2px solid var(--page-bg-000);
    }

    .LoginModal-content button.disabled {
        width: 270px;
        height: 38px;
        border-radius: 6px;
        color: var(--page-text-FFF);
        background-color: var(--page-btn-disabled);
        font-size: 18px;
        cursor: pointer;
        border: 0;
    }

    .LoginModal-content.reset-pwd {
        .reset-pwd-title {
            display: flex;
            flex-flow: column;
            align-items: center;
            color: #807e7e;
            font-size: 14px;
        }

        .reset-pwd-email {
            font-size: 15px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            line-height: 1;
        }

        .reset-pwd-icon {
            display: flex;
            justify-content: center;
        }

        .reset-pwd-code {
            display: flex;
            justify-content: center;

            > div {
                width: 83px;

                > input {
                    height: 30px;
                    background-color: var(--page-input-bg-code);
                    border-radius: 6px;
                    border: 1px solid #000000;
                    outline: none;
                    padding: 0 15px;
                    font-size: 15px;
                }

                > span {
                    display: block;
                    line-height: 1;
                    margin-top: 7px;
                    padding-left: 15px;
                    font-size: 12px;
                }
            }

            > span {
                width: 83px;
                height: 30px;
                background-color: var(--page-input-bg-code-btn-bg);
                border-radius: 8px;
                color: var(--page-text-808080);
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                cursor: pointer;
            }
        }
    }

    .LoginModal-content.reset-pwd-next {
        display: flex;
        flex-flow: column;
        align-items: center;

        .reset-pwd-next-email {
            font-size: 15px;
            display: flex;
            justify-content: center;
        }

        .ipt {
            width: 270px;
            height: 38px;
            border-radius: 6px;
        }

        .ipt-group,
        .arco-input-group {
            width: 270px;
            height: 38px;
            border-radius: 6px;
        }

        .b1 {
            width: 270px;
            height: 38px;
            border-radius: 6px;
        }

        .disabled {
            width: 270px;
            height: 38px;
            border-radius: 6px;
            background-color: var(--page-btn-disabled);
        }
    }

    .LoginModal-content.reset-pwd-success {
        display: flex;
        flex-flow: column;
        align-items: center;

        .reset-pwd-success-title {
            display: flex;
            justify-content: center;
            line-height: 1;
            font-size: 22px;
        }

        .reset-pwd-next-email {
            display: flex;
            justify-content: center;
            line-height: 1;
            font-size: 15px;
        }

        .reset-pwd-success-icon {
            display: flex;
            justify-content: center;
        }

        .reset-pwd-success-content {
            display: flex;
            justify-content: center;
            line-height: 1;
            font-size: 15px;
        }

        .b1 {
            width: 270px;
            height: 38px;
            border-radius: 6px;
        }
    }
`,w=(0,n.forwardRef)(((e,t)=>{const[s,i]=n.useState(!1),[r,o]=n.useState(!0),[a,c]=n.useState(1),[h,v]=n.useState(""),[w,k]=n.useState(""),[_,C]=n.useState(""),[N,A]=n.useState(""),[z,T]=n.useState(""),[E,S]=n.useState(""),[I,L]=n.useState("\u53d1\u9001\u9a8c\u8bc1\u7801"),[F,M]=n.useState(new b(60)),[B,P]=n.useState(null),[W,$]=n.useState(""),[R,D]=n.useState(""),[O,H]=n.useState(3);function U(e){u.A.error({content:e,duration:3e3})}function G(e){u.A.info({content:e,duration:3e3})}async function Q(){if(j(h)){const e=await function(e,t,s){return void 0===s&&(s=void 0),m({url:"/compress_tool/user/login",method:"post",data:{username:e,password:t,code:s}})}(h,w);null!==e.data?(localStorage.setItem("user",e.data.user),i(!1)):U(e.errmsg)}else T("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u6216\u624b\u673a\u53f7")}async function q(){if(j(h)){const e=await function(e,t){return m({url:"/compress_tool/user/register",method:"post",data:{username:e,password:t}})}(h,w);null!==e.data?c(1):U(e.errmsg)}else T("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u6216\u624b\u673a\u53f7")}async function Z(){L("\u6b63\u5728\u53d1\u9001...");const{data:e,errmsg:t}=await(s=h,m({url:"/compress_tool/user/forgotPassword",method:"post",params:{username:s}}));var s;null!=e?(P(e.code),F.onTick=e=>{L(`${e}s\u91cd\u65b0\u53d1\u9001`)},F.onComplete=()=>{L("\u53d1\u9001\u9a8c\u8bc1\u7801")},F.start()):(P(null),U(t))}async function J(){if(W===R){const{data:e,errmsg:t}=await function(e,t){return m({url:"/compress_tool/user/updatePassword",method:"post",data:{username:e,password:t}})}(h,W);if(null!=e){G("\u91cd\u7f6e\u5bc6\u7801\u6210\u529f"),c(6)}else U(t)}else U("\u60a8\u8f93\u5165\u7684\u65b0\u5bc6\u7801\u4e0d\u4e00\u81f4")}return(0,n.useEffect)((()=>{const e=e=>{console.log("\u6536\u5230\u4e8b\u4ef6\uff0c\u6570\u636e\u4e3a:",e),c(e),i(!0)};return f.A.on("login-popup",e),()=>{f.A.off("login-popup",e)}}),[]),(0,n.useImperativeHandle)(t,(()=>({open(e){void 0===e&&(e=1),c(e),i(!0)},hide(){i(!1)}}))),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y,{})," ",(0,l.jsxs)(d.A,{style:{width:450,height:"auto"},wrapClassName:"LoginModal",visible:s,title:null,footer:null,closable:!1,autoFocus:!1,onCancel:()=>{i(!1)},children:[1===a&&(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"LoginModal-title myCenter",style:{height:60},children:[(0,l.jsx)("h3",{style:{fontSize:24,fontWeight:"bold",color:"var(--page-text-FFF)"},children:"\u901a\u884c\u8bc1"}),(0,l.jsx)("span",{style:{position:"absolute",top:12,right:21,width:40,height:5,borderRadius:2.5,backgroundColor:"var(--page-modal-close)",cursor:"pointer"},onClick:()=>i(!1)})]}),(0,l.jsxs)("div",{className:"LoginModal-content",style:{width:450,height:330,margin:"auto"},children:[(0,l.jsx)("h6",{style:{height:41}}),(0,l.jsx)(x.A,{className:"ipt",placeholder:"\u7535\u5b50\u90ae\u7bb1/\u624b\u673a\u53f7",value:h,onChange:e=>v(e)}),(0,l.jsx)("h6",{style:{height:23},children:(0,l.jsx)("span",{className:"error-tips",children:z})}),(0,l.jsx)(x.A.Password,{className:"ipt-group",addAfter:"?",placeholder:"\u5bc6\u7801",value:w,onChange:e=>k(e)}),(0,l.jsx)("h6",{style:{height:8}}),(0,l.jsxs)("div",{className:"LoginModal-content-left-right",children:[(0,l.jsx)(p.A,{children:"\u8bb0\u4f4f\u8d26\u53f7"}),(0,l.jsx)("span",{onClick:()=>async function(){c(4),Z()}(),children:"\u91cd\u7f6e\u5bc6\u7801"})]}),(0,l.jsx)("h6",{style:{height:36}}),(0,l.jsx)("button",{className:"b1",onClick:()=>Q(),children:"\u767b\u5f55"}),(0,l.jsx)("h6",{style:{height:23}}),(0,l.jsx)("button",{className:"b2",onClick:()=>c(2),children:"\u6ce8\u518c"})]})]}),2===a&&(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"LoginModal-title myCenter",style:{height:60},children:[(0,l.jsx)("h3",{style:{fontSize:24,fontWeight:"bold",color:"var(--page-text-FFF)"},children:"\u6ce8\u518c"}),(0,l.jsx)("span",{style:{position:"absolute",top:12,right:21,width:40,height:5,borderRadius:2.5,backgroundColor:"var(--page-modal-close)",cursor:"pointer"},onClick:()=>i(!1)})]}),(0,l.jsxs)("div",{className:"LoginModal-content",style:{width:450,height:330,margin:"auto"},children:[(0,l.jsx)("h6",{style:{height:41}}),(0,l.jsx)("div",{className:"myCenter",style:{width:270,height:38,border:"1px solid var(--page-border-b2b2b2)",borderRadius:8,fontSize:15,color:"var(--page-text-808080)",cursor:"pointer"},onClick:()=>c(3),children:"\u624b\u673a\u53f7\u6ce8\u518c"}),(0,l.jsx)("h6",{style:{height:20}}),(0,l.jsx)("span",{className:"myCenter",style:{fontSize:15,lineHeight:1,color:"var(--page-text-b2b1b1)"},children:"\u6216"}),(0,l.jsx)("h6",{style:{height:20}}),(0,l.jsx)(x.A,{className:"ipt",placeholder:"\u7535\u5b50\u90ae\u7bb1",value:h,onChange:e=>v(e)}),(0,l.jsx)("h6",{style:{height:23},children:(0,l.jsx)("span",{className:"error-tips",children:z})}),(0,l.jsx)(x.A.Password,{className:"ipt-group",placeholder:"\u5bc6\u7801",value:w,onChange:e=>k(e)}),(0,l.jsx)("h6",{style:{height:23}}),(0,l.jsx)("button",{className:h.length>0&&w.length>0?"b1":"disabled",onClick:()=>q(),children:"\u521b\u5efa\u8d26\u6237"})]})]}),3===a&&(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"LoginModal-title myCenter",style:{height:60},children:[(0,l.jsx)("h3",{style:{fontSize:24,fontWeight:"bold",color:"var(--page-text-FFF)"},children:"\u6ce8\u518c"}),(0,l.jsx)("span",{style:{position:"absolute",top:12,right:21,width:40,height:5,borderRadius:2.5,backgroundColor:"var(--page-modal-close)",cursor:"pointer"},onClick:()=>i(!1)})]}),(0,l.jsxs)("div",{className:"LoginModal-content",style:{width:450,height:330,margin:"auto"},children:[(0,l.jsx)("h6",{style:{height:41}}),(0,l.jsxs)("div",{style:{position:"relative"},children:[(0,l.jsx)(x.A,{className:"phone",style:{width:270,height:38,backgroundColor:"var(--page-input-bg-code)",borderRadius:6,outline:"none",paddingLeft:90,fontSize:15,border:"1px solid var(--page-border-b2b2b2)"},placeholder:"\u624b\u673a\u53f7",value:_,onChange:e=>C(e)}),(0,l.jsxs)("span",{className:"myCenter",style:{position:"absolute",top:0,left:0,width:90,height:38,fontSize:15,color:"var(--page-text-808080)"},children:["+86 ",(0,l.jsx)(g.A,{style:{color:"var(--page-text-808080)",marginLeft:10}})]})]}),(0,l.jsx)("h6",{style:{height:23}}),(0,l.jsxs)("div",{className:"myRow",style:{justifyContent:"flex-start"},children:[(0,l.jsx)(x.A,{style:{width:106,height:38,backgroundColor:"var(--page-input-bg-code)",borderRadius:6,border:0,outline:"none",padding:"0 16px",fontSize:15},placeholder:"",value:N,onChange:e=>A(e)}),(0,l.jsx)("h6",{style:{width:29}}),(0,l.jsx)("span",{className:"myCenter",style:{width:106,height:38,borderRadius:6,fontSize:15,color:_.length>0?"var(--page-text-FFF)":"var(--page-text-808080)",backgroundColor:_.length>0?"var(--page-text-000)":"var(--page-input-bg-code-btn-bg)"},children:"\u53d1\u9001\u9a8c\u8bc1\u7801"}),(0,l.jsx)("h6",{style:{width:29}})]}),(0,l.jsx)("h6",{style:{height:23}}),(0,l.jsx)(x.A.Password,{className:"ipt-group",placeholder:"\u5bc6\u7801",value:w,onChange:e=>k(e)}),(0,l.jsx)("h6",{style:{height:33}}),(0,l.jsx)(p.A,{style:{lineHeight:1},children:"\u6211\u5df2\u9605\u8bfb\u5e76\u63a5\u53d7 \u7528\u6237\u534f\u8bae \u548c \u9690\u79c1\u653f\u7b56"}),(0,l.jsx)("h6",{style:{height:11}}),(0,l.jsx)("button",{className:_.length>0&&N.length>0&&w.length>0?"b1":"disabled",children:"\u521b\u5efa\u8d26\u6237"})]})]}),4===a&&(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"LoginModal-title myCenter",style:{height:60},children:[(0,l.jsx)("h3",{style:{fontSize:24,fontWeight:"bold",color:"var(--page-text-FFF)"},children:"\u91cd\u7f6e\u5bc6\u7801"}),(0,l.jsx)("span",{style:{position:"absolute",top:12,right:21,width:40,height:5,borderRadius:2.5,backgroundColor:"var(--page-modal-close)",cursor:"pointer"},onClick:()=>i(!1)})]}),(0,l.jsxs)("div",{className:"LoginModal-content reset-pwd",style:{width:450,height:330,margin:"auto"},children:[(0,l.jsx)("h6",{style:{height:33}}),(0,l.jsxs)("div",{className:"reset-pwd-title",children:[(0,l.jsx)("span",{children:"\u8bf7\u5728\u60a8\u7684\u6536\u4ef6\u7bb1\u4e2d\u67e5\u627e\u4e00\u5c01\u4ecb\u7ecd\u5982\u4f55"}),(0,l.jsx)("span",{children:"\u91cd\u7f6e\u5bc6\u7801\u7684\u7535\u5b50\u90ae\u4ef6"})]}),(0,l.jsx)("h6",{style:{height:51}}),(0,l.jsx)("div",{className:"reset-pwd-email",children:h}),(0,l.jsx)("h6",{style:{height:40}}),(0,l.jsx)("div",{className:"reset-pwd-icon",children:(0,l.jsx)("img",{className:"",src:"images/covert/icon_close.svg",alt:"",height:37})}),(0,l.jsx)("h6",{style:{height:22}}),(0,l.jsxs)("div",{className:"reset-pwd-code",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(x.A,{placeholder:"",value:N,onChange:e=>function(e){A(e),null!=B&&e.length>=6&&(e!==B?S("\u9a8c\u8bc1\u7801\u9519\u8bef"):(S(""),c(5)))}(e)}),(0,l.jsx)("span",{children:E})]}),(0,l.jsx)("h6",{style:{width:14}}),(0,l.jsx)("span",{onClick:()=>async function(){"\u53d1\u9001\u9a8c\u8bc1\u7801"===I?Z():G("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}(),children:I})]})]})]}),5===a&&(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"LoginModal-title myCenter",style:{height:60},children:[(0,l.jsx)("h3",{style:{fontSize:24,fontWeight:"bold",color:"var(--page-text-FFF)"},children:"\u91cd\u7f6e\u5bc6\u7801"}),(0,l.jsx)("span",{style:{position:"absolute",top:12,right:21,width:40,height:5,borderRadius:2.5,backgroundColor:"var(--page-modal-close)",cursor:"pointer"},onClick:()=>i(!1)})]}),(0,l.jsxs)("div",{className:"LoginModal-content reset-pwd-next",style:{width:450,height:330,margin:"auto"},children:[(0,l.jsx)("h6",{style:{height:33}}),(0,l.jsx)("div",{className:"reset-pwd-next-email",children:h}),(0,l.jsx)("h6",{style:{height:41}}),(0,l.jsx)(x.A,{className:"ipt",placeholder:"\u65b0\u5bc6\u7801",value:W,onChange:e=>$(e)}),(0,l.jsx)("h6",{style:{height:23}}),(0,l.jsx)(x.A.Password,{className:"ipt-group",placeholder:"\u786e\u8ba4\u5bc6\u7801",value:R,onChange:e=>D(e)}),(0,l.jsx)("h6",{style:{height:52}}),(0,l.jsx)("button",{className:W.length>0&&R.length>0?"b1":"disabled",onClick:W.length>0&&R.length>0?()=>J():null,children:"\u91cd\u7f6e\u5bc6\u7801"})]})]}),6===a&&(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"LoginModal-title myCenter",style:{height:60},children:[(0,l.jsx)("h3",{style:{fontSize:24,fontWeight:"bold",color:"var(--page-text-FFF)"},children:"\u91cd\u7f6e\u5bc6\u7801"}),(0,l.jsx)("span",{style:{position:"absolute",top:12,right:21,width:40,height:5,borderRadius:2.5,backgroundColor:"var(--page-modal-close)",cursor:"pointer"},onClick:()=>i(!1)})]}),(0,l.jsxs)("div",{className:"LoginModal-content reset-pwd-success",style:{width:450,height:330,margin:"auto"},children:[(0,l.jsx)("h6",{style:{height:33}}),(0,l.jsx)("div",{className:"reset-pwd-success-title",children:"\u5bc6\u7801\u5df2\u66f4\u6539"}),(0,l.jsx)("h6",{style:{height:20}}),(0,l.jsx)("div",{className:"reset-pwd-success-email",children:h}),(0,l.jsx)("h6",{style:{height:25}}),(0,l.jsx)("div",{className:"reset-pwd-success-icon",children:(0,l.jsx)("img",{className:"",src:"images/covert/icon_close.svg",alt:"",height:46})}),(0,l.jsx)("h6",{style:{height:26}}),(0,l.jsxs)("div",{className:"reset-pwd-success-content",children:[O,"s\u540e\u4e3a\u60a8\u81ea\u52a8\u8df3\u8f6c"]}),(0,l.jsx)("h6",{style:{height:38}}),(0,l.jsx)("button",{className:"b1",onClick:()=>c(1),children:"\u7ee7\u7eed"})]})]})]})]})}));var k=s(4983),_=s(5742),C=s(6007);const N=r.A.Item;function A(){(0,n.useRef)();return(0,n.useEffect)((()=>{}),[]),(0,l.jsxs)("div",{className:"page",children:[(0,l.jsx)(k.A,{}),(0,l.jsx)("div",{className:o.A.contentBlack,children:(0,l.jsxs)("div",{className:"w-1440",children:[(0,l.jsxs)("div",{className:(0,i.A)("w-1280",o.A.contentBanner),children:[(0,l.jsx)("img",{src:"images/home/banner.jpg"}),(0,l.jsxs)("div",{className:"col",children:[(0,l.jsx)("h6",{style:{height:83}}),(0,l.jsxs)("h3",{children:[(0,l.jsx)("b",{children:"\u514d\u8d39"}),"\xa0\u8f6c\u6362\xa0\xa0\xa0\u65e0\u635f\u538b\u7f29"]}),(0,l.jsx)("h6",{style:{height:40}}),(0,l.jsx)("p",{children:"\u6211\u4eec\u81f4\u529b\u4e8e\u6570\u5b57\u683c\u5f0f\u7684\u65e0\u7f1d\u8f6c\u5316"}),(0,l.jsx)("h6",{style:{height:81}}),(0,l.jsx)("button",{onClick:()=>{return e=document.getElementById("bannerCovert").offsetTop,void window.scrollTo({top:e,behavior:"smooth"});var e},children:"\u5f00\u59cb"})]})]}),(0,l.jsx)("div",{id:"bannerCovert",className:(0,i.A)("col w-1280",o.A.contentCovert),children:(0,l.jsx)(C.Compresses,{})})]})}),(0,l.jsx)("div",{className:o.A.contentGrey,children:(0,l.jsxs)("div",{className:(0,i.A)("col w-1000",o.A.contentIntro),children:[(0,l.jsx)("h6",{style:{height:80}}),(0,l.jsx)("h3",{children:"\u5728\u7ebf\u514d\u8d39\u6587\u4ef6\u8f6c\u6362"}),(0,l.jsx)("h6",{style:{height:62}}),(0,l.jsx)("p",{children:"\u4e3a\u6240\u6709\u4eba\u514d\u8d39\u63d0\u4f9b\u4e00\u4e2a\u5feb\u6377\u4fbf\u5229\u7684\u5728\u7ebf\u6587\u4ef6\u8f6c\u6362\u5de5\u5177\uff0c\u5e76\u4e3a\u8bbe\u8ba1\u5f00\u53d1\u8005\u5b9a\u5236\u89e3\u51b3\u65b9\u6848\uff0c \u52a0\u901f\u6570\u5b57\u6587\u4ef6\u7684\u4f18\u5316\u8fdb\u7a0b\u3002"}),(0,l.jsx)("h6",{style:{height:87}}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"images/home/\u652f\u6301\u5404\u79cd\u6587\u4ef6\u683c\u5f0ficon.svg",alt:""}),(0,l.jsx)("span",{children:"\u652f\u6301\u5404\u79cd\u6587\u4ef6\u683c\u5f0f"})]}),(0,l.jsx)("p",{children:"\u6211\u4eec\u652f\u6301\u4e0d\u540c\u7684\u6587\u4ef6\u683c\u5f0f\u95f4\u591a\u79cd\u4e0d\u540c\u7684\u7075\u6d3b\u8f6c\u6362\u65b9\u5f0f\uff0c\u5305\u62ec\u5bf9\u56fe\u50cf\u548c\u6587\u4ef6\u7684\u65e0\u635f\u538b\u7f29\u8f6c\u6362\u7b49\u56fe\u50cf\u540e\u671f\u5728\u7ebf\u5904\u7406\u529f\u80fd \u3002"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"images/home/\u652f\u6301\u6240\u6709\u8bbe\u5907icon.svg",alt:""}),(0,l.jsx)("span",{children:"\u652f\u6301\u6240\u6709\u8bbe\u5907"})]}),(0,l.jsx)("p",{children:"Turbulence\u57fa\u4e8e\u6d4f\u89c8\u5668\u5e76\u652f\u6301\u6240\u6709\u5e73\u53f0\u3002\u60a8\u65e0\u9700\u4e0b\u8f7d\u4e0e\u5b89\u88c5\u4efb\u4f55\u8f6f\u4ef6\u3002"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"images/home/\u4e91\u7aef\u5904\u7406icon.svg",alt:""}),(0,l.jsx)("span",{children:"\u4e91\u7aef\u5904\u7406"})]}),(0,l.jsx)("p",{children:"\u6240\u6709\u8f6c\u6362\u90fd\u5728\u4e91\u7aef\u8fdb\u884c\uff0c\u4e0d\u4f1a\u6d88\u8017\u60a8\u8ba1\u7b97\u673a\u7684\u8d44\u6e90\u3002"})]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"images/home/\u5b89\u5168\u4fdd\u969cicon.svg",alt:""}),(0,l.jsx)("span",{children:"\u5b89\u5168\u4fdd\u969c"})]}),(0,l.jsx)("p",{children:"\u6211\u4eec\u5c06\u7acb\u5373\u5220\u9664\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6\uff0c\u5e76\u5728 24 \u5c0f\u65f6\u540e\u5220\u9664\u5df2\u8f6c\u6362\u7684\u6587\u4ef6\u3002\u4efb\u4f55\u4eba\u90fd\u65e0\u6cd5\u8bbf\u95ee\u60a8\u7684\u6587\u4ef6\uff0c\u6211\u4eec\u53ef\u786e\u4fdd\u60a8\u7684\u9690\u79c1100%\u5b89\u5168\u3002"})]})})]}),(0,l.jsx)("h6",{style:{height:75}})]})}),(0,l.jsxs)("div",{className:(0,i.A)("col",o.A.contentShowImage),children:[(0,l.jsx)("h6",{style:{height:80}}),(0,l.jsx)("h3",{children:"\u4f60\u80fd\u627e\u51fa\u5b83\u4eec\u7684\u4e0d\u540c\u5417?"}),(0,l.jsx)("h6",{style:{height:56}}),(0,l.jsx)("p",{children:"\u62d6\u52a8\u6ed1\u5757\uff0c\u60a8\u53ef\u4ee5\u5c06\u538b\u7f29\u524d\u540e\u7684\u56fe\u50cf\u8fdb\u884c\u6bd4\u8f83,\u4ee4\u4eba\u60ca\u5947\u7684\u662f\u6587\u4ef6\u5927\u5c0f\u51cf\u5c11\u4e8685%\u4ee5\u4e0a\uff01"}),(0,l.jsx)("h6",{style:{height:50}}),(0,l.jsx)("div",{children:(0,l.jsx)(c,{})}),(0,l.jsx)("h6",{style:{height:100}})]}),(0,l.jsxs)("div",{className:o.A.contentBlack,children:[(0,l.jsx)("h6",{style:{height:70}}),(0,l.jsx)("div",{className:(0,i.A)(o.A.contentOptimize),children:(0,l.jsxs)("div",{className:"col",children:[(0,l.jsx)("h6",{style:{height:36}}),(0,l.jsx)("p",{children:"\u8bd5\u8bd5\u6211\u4eec\u53ef\u4ee5"}),(0,l.jsx)("h6",{style:{height:14}}),(0,l.jsx)("h3",{children:"\u4f18\u5316\u60a8\u7f51\u7ad9\u7684\u6027\u80fd"}),(0,l.jsx)("h6",{style:{height:32}}),(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("label",{htmlFor:"",children:[(0,l.jsx)("img",{src:"images/home/\u7f51\u5740\u56fe\u6807.svg"}),(0,l.jsx)("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u4f60\u7684\u7f51\u5740"})]}),(0,l.jsx)("h6",{style:{width:20}}),(0,l.jsx)("button",{children:"\u7acb\u5373\u5206\u6790"})]}),(0,l.jsx)("h6",{style:{height:55}})]})}),(0,l.jsx)("h6",{style:{height:70}})]}),(0,l.jsx)("div",{className:(0,i.A)(o.A.contentGrey),children:(0,l.jsxs)("div",{className:(0,i.A)("col",o.A.contentFAQ),children:[(0,l.jsx)("h6",{style:{height:46}}),(0,l.jsx)("h3",{children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54(FAQ)"}),(0,l.jsx)("h6",{style:{height:40}}),(0,l.jsx)("div",{className:"contentFAQ",children:(0,l.jsxs)(r.A,{accordion:!0,bordered:!1,children:[(0,l.jsx)(N,{header:(0,l.jsxs)("div",{children:["Bturbulence\u7684\u7528\u9014\u662f\u4ec0\u4e48\uff1f",(0,l.jsx)("img",{src:"images/home/\u95ee\u7b54\u4e0b\u62c9\u7bad\u5934.svg",alt:""})]}),name:"1",children:"Beijing Toutiao Technology Co., Ltd."}),(0,l.jsx)(N,{header:(0,l.jsxs)("div",{children:["Bturbulence\u7684\u7528\u9014\u662f\u4ec0\u4e48\uff1f",(0,l.jsx)("img",{src:"images/home/\u95ee\u7b54\u4e0b\u62c9\u7bad\u5934.svg",alt:""})]}),name:"2",children:"Beijing Toutiao Technology Co., Ltd."}),(0,l.jsx)(N,{header:(0,l.jsxs)("div",{children:["Bturbulence\u7684\u7528\u9014\u662f\u4ec0\u4e48\uff1f",(0,l.jsx)("img",{src:"images/home/\u95ee\u7b54\u4e0b\u62c9\u7bad\u5934.svg",alt:""})]}),name:"3",children:"Beijing Toutiao Technology Co., Ltd."})]})}),(0,l.jsx)("h6",{style:{height:26}}),(0,l.jsxs)("h4",{children:["\u67e5\u770b\u66f4\u591a ",(0,l.jsx)("img",{src:"images/home/\u95ee\u7b54\u4e0b\u62c9\u7bad\u5934.svg",alt:""})]}),(0,l.jsx)("h6",{style:{height:46}})]})}),(0,l.jsxs)("div",{className:o.A.contentBlack222,children:[(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{})]}),(0,l.jsx)(_.A,{}),(0,l.jsx)(w,{})]})}},192:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var i=s(4498),n=s(3660),r=s(5500),o=s(4586),a=s(4848);function l(){const{siteConfig:e}=(0,o.A)(),t=`\u9996\u9875 from ${e.title}`,s=`\u6b22\u8fce from ${e.tagline}`;return(0,a.jsx)(n.A,{children:(0,a.jsxs)(r.e3,{className:"myPageHtmlClassName",children:[(0,a.jsx)(r.be,{title:t,description:s}),(0,a.jsx)(i.default,{})]})})}},4824:(e,t,s)=>{s.d(t,{A:()=>i});const i=new(s(4486).b)},8718:(e,t,s)=>{s.d(t,{A:()=>i});const i={contentBlack141414:"contentBlack141414_mcqp",header:"header_JTkG",on:"on_JEwW",homeButton:"homeButton_Ej81",contentBlack:"contentBlack_JAar",contentBanner:"contentBanner_MAb3",contentCovert:"contentCovert_Nwek",contentGrey:"contentGrey_eJdu",contentIntro:"contentIntro_UKql",contentShowImage:"contentShowImage_nWNR",contentOptimize:"contentOptimize_QIBD",contentFAQ:"contentFAQ_W77N",contentBlack222:"contentBlack222_scJT",contentCount:"contentCount_XmM9"}}}]);