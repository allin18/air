"use strict";(self.webpackChunkair_docs=self.webpackChunkair_docs||[]).push([[7895,1651],{4983:(e,t,s)=>{s.d(t,{A:()=>a});var i=s(8718),r=s(4164),n=s(6540),o=s(1927),l=s(4848);function a(){const e=(0,n.useRef)();return(0,l.jsxs)("div",{className:i.A.contentBlack141414,children:[(0,l.jsx)("div",{className:"w-1440",children:(0,l.jsxs)("div",{className:(0,r.A)("w-1280",i.A.header),children:[(0,l.jsxs)("a",{href:"/air/",children:[(0,l.jsx)("img",{src:"img/logo.svg"}),"Turbulence"]}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:["\u538b\u7f29",(0,l.jsx)("img",{src:"images/home/\u4e0b\u62c9\u7bad\u59341.svg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("a",{className:i.A.on,href:"",children:"\u56fe\u50cf\u538b\u7f29"}),(0,l.jsx)("a",{href:"",children:"\u89c6\u9891\u538b\u7f29"}),(0,l.jsx)("a",{href:"",children:"\u6587\u4ef6\u538b\u7f29"}),(0,l.jsx)("a",{href:"",children:"\u97f3\u9891\u538b\u7f29"})]})]}),(0,l.jsxs)("li",{children:["\u8f6c\u6362",(0,l.jsx)("img",{src:"images/home/\u4e0b\u62c9\u7bad\u59341.svg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("a",{className:i.A.on,href:"",children:"\u6587\u6863\u8f6c\u6362"}),(0,l.jsx)("a",{href:"",children:"\u56fe\u50cf\u8f6c\u6362"}),(0,l.jsx)("a",{href:"",children:"\u89c6\u9891\u8f6c\u6362"}),(0,l.jsx)("a",{href:"",children:"\u97f3\u9891\u8f6c\u6362"})]})]}),(0,l.jsx)("li",{children:"OCR"}),(0,l.jsx)("li",{children:"API"}),(0,l.jsx)("li",{children:"\u5b9a\u4ef7"}),(0,l.jsx)("li",{children:"\u652f\u6301"})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"images/home/\u6587\u4ef6\u5939icon.svg"}),(0,l.jsx)("span",{children:"66"})]}),(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:"images/home/\u8bed\u8a00icon.svg"})}),(0,l.jsx)("button",{className:i.A.homeButton,onClick:()=>{return void 0===(t=1)&&(t=1),void(e.current&&e.current.open(t));var t},children:"\u767b\u5f55"})]})]})}),(0,l.jsx)(o.A,{ref:e})]})}},5742:(e,t,s)=>{s.d(t,{A:()=>o});var i=s(8718),r=s(4164),n=(s(6540),s(4848));function o(){return(0,n.jsx)("div",{className:i.A.contentBlack,children:(0,n.jsxs)("ul",{className:(0,r.A)("row w-1280",i.A.contentCount),children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{style:{marginLeft:0},children:"32"}),"\u670d\u52a1\u5668"]}),(0,n.jsxs)("li",{children:["\u5df2\u5728\u7ebf\u8f6c\u6362\u6587\u4ef6",(0,n.jsx)("span",{children:"77777"}),"\u4e2a"]}),(0,n.jsxs)("li",{children:["\u5df2\u5728\u7ebf\u8f6c\u6362\u6587\u4ef6",(0,n.jsx)("span",{children:"999999"}),"GB"]})]})})}},9451:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s(6540);class r{static getFileName(e){return e.substring(0,e.lastIndexOf("."))}static getExtension(e){return e.substring(e.lastIndexOf("."))}static getExtension(e){return e.substring(e.lastIndexOf(".")+1)}static async getFile(e){try{return await new Promise(((t,s)=>e.file(t,s)))}catch(t){console.log(t)}}static zipDownload(e){var t=new JSZip;for(const i in e)t.file(i,JSON.stringify(e[i],null,4));let s=(new Date).toLocaleString(void 0,{hour12:!1}).replace(/\/|:|\s/g,"-");t.generateAsync({type:"blob"}).then((function(e){saveAs(e,`i18n${s}.zip`)}))}static getBase64(e){return new Promise(((t,s)=>{const i=new FileReader;i.readAsDataURL(e),i.onload=()=>t(i.result),i.onerror=e=>s(e)}))}}class n{static html(e,t){return'\n        <div id="drop_zone" style="height: 100%;border: 2px dashed #bbb;border-radius: 5px;padding: 16px;background: white;transition: border-color 0.5s;text-align: center;position: relative;overflow: hidden;">\n            <input type="file" style="position:absolute; top: -100px" id="drop_picker">\n            <div id="drop_zone_tips"\n                style="position: absolute;top: 0;left: 0;width:100%;height:100%;display: flex;align-items: center;justify-content: center;background: rgba(255, 255, 255,.9);cursor: pointer;z-index: 1;">\n                <div style="text-align: left;">\n                    <div style="color: #999;">Drag and Drop</div>\n                </div>\n            </div>\n            <div id="drop_content" style="width:100%;height: 100%;position: relative;background: transparent;"></div>\n        </div>\n        '}static readFileUint8Array(e){return new Promise((t=>{let s=new FileReader;s.onload=function(e){let s=new Uint8Array(e.target.result);t(s)},s.readAsArrayBuffer(e)}))}drop_zone;drop_zone_tips;drop_picker;drop_content;onChange;constructor(e){if(this.onChange=e.onChange||function(){},e.el&&void 0===e.theme)this.drop_zone=e.el;else if(e.el&&"simple"===e.theme)e.el.innerHTML=n.html(),e.theme="custom";else{if(!e.el||"base"!==e.theme)return;{e.el.style.position="relative";const t=document.createElement("input");t.type="file",t.id="drop_picker",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.right="0",t.style.bottom="0",t.style.opacity="0",t.style.zIndex="1",t.style.cursor="pointer",e.el.appendChild(t),this.drop_zone=e.el,this.drop_picker=t}}e.el&&"custom"===e.theme&&(this.drop_zone=document.getElementById("drop_zone"),this.drop_zone_tips=document.getElementById("drop_zone_tips"),this.drop_picker=document.getElementById("drop_picker"),this.drop_content=document.getElementById("drop_content")),this.drop_zone.addEventListener("dragover",(e=>e.preventDefault()),!1),this.drop_zone.addEventListener("dragleave",(e=>this.dragleave(e)),!1),this.drop_zone.addEventListener("dragenter",(e=>this.dragenter(e)),!1),this.drop_zone.addEventListener("drop",(e=>this.dragdrop(e)),!1),this.drop_zone_tips&&this.drop_zone_tips.addEventListener("click",(e=>this.filePicker()),!1),this.drop_picker&&this.drop_picker.addEventListener("change",(e=>this.fileOpen(e)),!1)}recordDropNode;dragleave(e){this.recordDropNode===e.target&&(this.drop_zone_tips&&(this.drop_zone_tips.style.zIndex="initial"),this.drop_zone.style.border="2px dashed #bbb")}dragenter(e){this.recordDropNode=e.target,e.preventDefault(),this.drop_zone_tips&&(this.drop_zone_tips.style.zIndex="1"),this.drop_zone.style.border="2px dashed #0087F7"}dragdrop(e){this.drop_zone_tips&&(this.drop_zone_tips.style.zIndex="initial"),this.drop_zone.style.border="2px dashed #bbb",e.preventDefault(),this.getAllFiles(e).then((e=>{this.onChange(e,this.drop_content)}))}filePicker(){let e=document.createEvent("MouseEvents");e.initEvent("click",!0,!0),this.drop_picker.dispatchEvent(e)}fileOpen(e){this.drop_zone_tips.style.zIndex="initial",this.drop_zone.style.border="2px dashed #bbb",this.getAllFiles(e).then((e=>{this.onChange(e,this.drop_content)}))}open(){this.filePicker()}async getAllFiles(e){let t,s=[];if(void 0!==e.dataTransfer){t=e.dataTransfer.items;for(let e=0;e<t.length;e++){let i=t[e].webkitGetAsEntry(),r=await this.getFileList(i);s=s.concat(r)}}else{t=e.target.files;for(let e=0;e<t.length;e++){const i=t[e];let r=await this.getFileList(i);s=s.concat(r)}}return s}async getFileList(e){let t=[];if(e.isDirectory){let s=e.createReader(),i=await new Promise((e=>{s.readEntries((t=>e(t)))}));for(const e of i){let s=await this.getFileList(e);t=t.concat(s)}}else if("FileEntry"===e.toString().match(/\[object (.*?)\]/)[1]){const s=await r.getFile(e);t.push(s)}else t.push(e);return t}}var o=s(3660),l=s(5500),a=(s(7239),s(4983)),d=s(5742);var h=s(4848);function c(){return(0,h.jsx)(o.A,{children:(0,h.jsxs)(l.e3,{className:"myPageHtmlClassName",children:[(0,h.jsx)(l.be,{title:"\u9996\u9875 from ",description:"\u6b22\u8fce from "}),(0,h.jsx)(x,{})]})})}function x(){const[e,t]=i.useState(!1),[s,r]=i.useState([]);return(0,i.useEffect)((()=>{new n({theme:"simple",el:document.getElementById("covert-content-box-drop_file"),onChange:async(e,s)=>{e[0];const i=e.map((e=>{var t,s;return e.progress=(t=0,s=100,t=Math.ceil(t),s=Math.floor(s),Math.floor(Math.random()*(s-t+1))+t),e}));console.log(i),r(i),t(!0)}})}),[]),(0,h.jsxs)("div",{className:"page",children:[(0,h.jsx)(a.A,{}),(0,h.jsx)("div",{className:"contentBlack",children:(0,h.jsx)("div",{className:"w-1000 covert-content",children:(0,h.jsxs)("div",{id:"bannerCovert",className:"col w-1280 covert-content-box",children:[(0,h.jsx)("h6",{style:{height:30}}),(0,h.jsxs)("div",{className:"row covert-content-box-title",children:[(0,h.jsx)("h3",{children:"Ready"}),(0,h.jsx)("button",{children:"\u4e0b\u8f7d\u6240\u6709\u6587\u4ef6"})]}),(0,h.jsx)("h6",{style:{height:25}}),e&&(0,h.jsx)("ul",{children:s.map(((e,t)=>(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{className:"covert-content-box-ul-li-thumbnail",src:"images/covert/icon_img.png",alt:""}),(0,h.jsxs)("div",{className:"covert-content-box-ul-div",children:[(0,h.jsx)("h4",{children:e.name}),(0,h.jsxs)("p",{children:[e.size,"kb"]})]}),(0,h.jsx)("button",{children:"PNG"}),(0,h.jsx)("img",{className:"covert-content-box-ul-li-close",src:"images/covert/icon_close.png",alt:""})]},t)))}),!e&&(0,h.jsx)("div",{id:"covert-content-box-drop_file"}),(0,h.jsxs)("div",{className:"row covert-content-box-footer",children:[(0,h.jsxs)("div",{className:"covert-content-box-footer-div",children:[(0,h.jsx)("button",{className:"row covert-content-box-footer-add",children:"\u6dfb\u52a0\u66f4\u591a\u6587\u4ef6"}),(0,h.jsx)("img",{src:"images/covert/icon_img.png",alt:""}),(0,h.jsx)("img",{src:"images/covert/icon_img.png",alt:""})]}),(0,h.jsx)("button",{className:"row covert-content-box-footer-submit",children:"\u8f6c\u6362"})]})]})})}),(0,h.jsx)(d.A,{})]})}},1927:(e,t,s)=>{s.d(t,{A:()=>c});var i=s(6540),r=s(5067),n=(s(5794),s(9091)),o=s(539),l=s(9441),a=s(3529),d=s(4848);const h=n.DU`
    /* 这里写你的全局CSS */
    .LoginModal {
        .arco-modal-content {
            padding: 0;
            width: 100%;
            height: 100%;
        }

        .arco-checkbox{
            .arco-checkbox-mask {
                width: 15px;
                height: 15px;
                border: 2px solid var(--page-border-b2b2b2);
                border-radius: 4px;
                .arco-checkbox-mask-icon{
                    width: 13px;
                }
            }
            .arco-checkbox-text {
                margin-left: 5px;
                font-size: 13px;
            }
        }
        .arco-checkbox-checked{
            .arco-checkbox-mask{
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
            width: 360px;
            height: 50px;
            padding: 0 18px;
            font-size: 15px;
            outline: none;
            border-radius: 8px;
            border: 2px solid var(--page-border-b2b2b2);
            background-color: transparent;
        }

        .ipt-group {
            .arco-input-group {
                width: 360px;
                height: 50px;
                border-radius: 8px;
                border: 2px solid var(--page-border-b2b2b2);

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
                        //border: 2px solid var(--page-border-b2b2b2);
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
                    border-left: 2px solid var(--page-border-b2b2b2);
                    cursor: pointer;
                    color: var(--page-input-icon);
                }
            }
        }
    }

    .LoginModal-title {
        background-color: var(--page-text-262626)
    }

    .LoginModal-content {

    }

    .LoginModal-content input.ipt {
    }

    .LoginModal-content button.b1 {
        border-radius: 8px;
        color: var(--page-text-FFF);
        background-color: var(--page-bg-000);
        width: 360px;
        height: 50px;
        font-size: 18px;
        cursor: pointer;
        border: 0;
    }

    .LoginModal-content button.b2 {
        border-radius: 8px;
        color: var(--page-bg-000);
        background-color: transparent;
        width: 360px;
        height: 50px;
        font-size: 18px;
        cursor: pointer;
        border: 2px solid var(--page-bg-000);
    }

    .LoginModal-content button.disabled {
        border-radius: 8px;
        color: var(--page-text-FFF);
        background-color: var(--page-btn-disabled);
        width: 360px;
        height: 50px;
        font-size: 18px;
        cursor: pointer;
        border: 0;
    }
`,c=(0,i.forwardRef)(((e,t)=>{const[s,n]=i.useState(!1),[c,x]=i.useState(!0),[g,p]=i.useState(1),[m,j]=i.useState(""),[u,v]=i.useState(""),[b,y]=i.useState(""),[f,w]=i.useState("");return(0,i.useImperativeHandle)(t,(()=>({open(e){void 0===e&&(e=1),p(e),n(!0)},hide(){n(!1)}}))),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{})," ",(0,d.jsxs)(r.A,{style:{width:600,height:520},wrapClassName:"LoginModal",visible:s,title:null,footer:null,closable:!1,autoFocus:!1,onCancel:()=>{n(!1)},children:[1===g&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"LoginModal-title myCenter",style:{height:80},children:[(0,d.jsx)("h3",{style:{fontSize:24,fontWeight:"bold",color:"var(--page-text-FFF)"},children:"\u901a\u884c\u8bc1"}),(0,d.jsx)("span",{style:{position:"absolute",top:12,right:21,width:40,height:5,borderRadius:2.5,backgroundColor:"var(--page-modal-close)",cursor:"pointer"},onClick:()=>n(!1)})]}),(0,d.jsxs)("div",{className:"LoginModal-content",style:{height:440,width:360,margin:"auto"},children:[(0,d.jsx)("h6",{style:{height:41}}),(0,d.jsx)(l.A,{className:"ipt",placeholder:"\u7535\u5b50\u90ae\u7bb1/\u624b\u673a\u53f7"}),(0,d.jsx)("h6",{style:{height:23}}),(0,d.jsx)(l.A.Password,{className:"ipt-group",addAfter:"?",placeholder:"\u5bc6\u7801"}),(0,d.jsx)("h6",{style:{height:8}}),(0,d.jsx)(o.A,{children:"\u8bb0\u4f4f\u8d26\u53f7"}),(0,d.jsx)("h6",{style:{height:36}}),(0,d.jsx)("button",{className:"b1",children:"\u5f00\u59cb"}),(0,d.jsx)("h6",{style:{height:23}}),(0,d.jsx)("button",{className:"b2",onClick:()=>p(2),children:"\u6ce8\u518c"})]})]}),2===g&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"LoginModal-title myCenter",style:{height:80},children:[(0,d.jsx)("h3",{style:{fontSize:24,fontWeight:"bold",color:"var(--page-text-FFF)"},children:"\u6ce8\u518c"}),(0,d.jsx)("span",{style:{position:"absolute",top:12,right:21,width:40,height:5,borderRadius:2.5,backgroundColor:"var(--page-modal-close)",cursor:"pointer"},onClick:()=>n(!1)})]}),(0,d.jsxs)("div",{className:"LoginModal-content",style:{height:440,width:360,margin:"auto"},children:[(0,d.jsx)("h6",{style:{height:41}}),(0,d.jsx)("div",{className:"myCenter",style:{height:50,width:360,margin:"auto",border:"2px solid var(--page-border-b2b2b2)",borderRadius:8,fontSize:15,color:"var(--page-text-808080)",cursor:"pointer"},onClick:()=>p(3),children:"\u624b\u673a\u53f7\u6ce8\u518c"}),(0,d.jsx)("h6",{style:{height:23}}),(0,d.jsx)("span",{className:"myCenter",style:{fontSize:15,lineHeight:1,color:"var(--page-text-b2b1b1)"},children:"\u6216"}),(0,d.jsx)("h6",{style:{height:25}}),(0,d.jsx)(l.A,{className:"ipt",placeholder:"\u7535\u5b50\u90ae\u7bb1",value:m,onChange:e=>j(e)}),(0,d.jsx)("h6",{style:{height:30}}),(0,d.jsx)(l.A.Password,{className:"ipt-group",placeholder:"\u5bc6\u7801",value:u,onChange:e=>v(e)}),(0,d.jsx)("h6",{style:{height:30}}),(0,d.jsx)("button",{className:m.length>0&&u.length>0?"b1":"disabled",children:"\u521b\u5efa\u8d26\u6237"})]})]}),3===g&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"LoginModal-title myCenter",style:{height:80},children:[(0,d.jsx)("h3",{style:{fontSize:24,fontWeight:"bold",color:"var(--page-text-FFF)"},children:"\u6ce8\u518c"}),(0,d.jsx)("span",{style:{position:"absolute",top:12,right:21,width:40,height:5,borderRadius:2.5,backgroundColor:"var(--page-modal-close)",cursor:"pointer"},onClick:()=>n(!1)})]}),(0,d.jsxs)("div",{className:"LoginModal-content",style:{height:440,width:360,margin:"auto"},children:[(0,d.jsx)("h6",{style:{height:41}}),(0,d.jsxs)("div",{style:{position:"relative"},children:[(0,d.jsx)(l.A,{className:"phone",style:{width:360,height:50,backgroundColor:"var(--page-input-bg-code)",borderRadius:8,outline:"none",paddingLeft:120,fontSize:15,border:"2px solid var(--page-border-b2b2b2)"},placeholder:"\u624b\u673a\u53f7",value:b,onChange:e=>y(e)}),(0,d.jsxs)("span",{className:"myCenter",style:{position:"absolute",top:0,left:0,width:100,height:50,fontSize:15,color:"var(--page-text-808080)"},children:["+86 ",(0,d.jsx)(a.A,{style:{color:"var(--page-text-808080)",marginLeft:10}})]})]}),(0,d.jsx)("h6",{style:{height:23}}),(0,d.jsxs)("div",{className:"myRow",style:{justifyContent:"flex-start"},children:[(0,d.jsx)(l.A,{style:{width:142,height:50,backgroundColor:"var(--page-input-bg-code)",borderRadius:8,border:0,outline:"none",padding:"0 16px",fontSize:15},placeholder:"",value:f,onChange:e=>w(e)}),(0,d.jsx)("h6",{style:{width:38}}),(0,d.jsx)("span",{className:"myCenter",style:{width:142,height:50,backgroundColor:"var(--page-input-bg-code-btn-bg)",borderRadius:8,fontSize:15,color:"var(--page-text-808080)"},children:"\u53d1\u9001\u9a8c\u8bc1\u7801"})]}),(0,d.jsx)("h6",{style:{height:23}}),(0,d.jsx)(l.A.Password,{className:"ipt-group",placeholder:"\u5bc6\u7801",value:u,onChange:e=>v(e)}),(0,d.jsx)("h6",{style:{height:43}}),(0,d.jsx)(o.A,{children:"\u6211\u5df2\u9605\u8bfb\u5e76\u63a5\u53d7 \u7528\u6237\u534f\u8bae \u548c \u9690\u79c1\u653f\u7b56"}),(0,d.jsx)("h6",{style:{height:14}}),(0,d.jsx)("button",{className:b.length>0&&f.length>0&&u.length>0?"b1":"disabled",children:"\u521b\u5efa\u8d26\u6237"})]})]})]})]})}))},7239:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var i=s(4164),r=s(6540),n=s(5906),o=s(8718);class l{constructor(e,t){let{start:s="50",prefix:i="beer"}=void 0===t?{}:t;if(this.start=parseInt(s)?Math.min(100,Math.max(0,parseInt(s))):50,this.prefix=i,!e||2!==e.children.length)return;if(this.element=e,this.revealContainer=this.element.children[1],this.revealContainer.children.length<1)return;this.revealElement=this.revealContainer.children[0],this.range=this.addElement("input",{type:"range",class:`${this.prefix}-range`,"aria-label":"Percent of revealed content","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":this.start,value:this.start,min:"0",max:"100"});const r=this.addElement("div",{class:`${this.prefix}-handle`}),n=document.createElement("span");n.setAttribute("class",`${this.prefix}-handle-center`),r.appendChild(n),this.handle=r,this.onImagesLoad()}init(){this.element.classList.add(`${this.prefix}-ready`),this.setImgWidth(),this.move(),this.addListeners()}loadingImg(e){return new Promise(((t,s)=>{e||t();const i=new Image;i.onload=()=>t(),i.onerror=()=>s(),i.src=e}))}loadedBoth(){const e=this.element.children[0].src||this.element.children[0].getAttribute(`data-${this.prefix}-src`),t=this.revealElement.src||this.revealElement.getAttribute(`data-${this.prefix}-src`);return Promise.all([this.loadingImg(e),this.loadingImg(t)])}onImagesLoad(){this.revealElement&&this.loadedBoth().then((()=>{this.init()}),(()=>{console.error("Some errors occurred and images are not loaded.")}))}addElement(e,t){const s=document.createElement(e);return Object.keys(t).forEach((e=>{s.setAttribute(e,t[e])})),this.element.appendChild(s),s}setImgWidth(){this.revealElement.style.width=getComputedStyle(this.element).width}addListeners(){["input","change"].forEach((e=>{this.range.addEventListener(e,(()=>{this.move()}))})),window.addEventListener("resize",(()=>{this.setImgWidth()}))}move(){this.range.value>=50?(this.revealContainer.style.width=`${this.range.value}%`,this.handle.style.left=`${this.range.value}%`,this.handle.style.right="auto"):(this.revealContainer.style.width=`${this.range.value}%`,this.handle.style.left="auto",this.handle.style.right=100-this.range.value+"%"),this.range.setAttribute("aria-valuenow",this.range.value)}}var a=s(4848);const d=function(){return(0,r.useEffect)((()=>(new l(document.getElementById("slider")),()=>{})),[]),(0,a.jsxs)("div",{id:"slider",className:"beer-slider","data-beer-label":"before",style:{borderRadius:50,overflow:"hidden",display:"block"},children:[(0,a.jsx)("img",{src:"images/home/after.png",alt:""}),(0,a.jsx)("div",{className:"beer-reveal","data-beer-label":"after",children:(0,a.jsx)("img",{src:"images/home/befor.png",alt:""})})]})};var h=s(1927),c=s(4983),x=s(5742);const g=n.A.Item;function p(){const e=(0,r.useRef)();return(0,r.useEffect)((()=>{}),[]),(0,a.jsxs)("div",{className:"page",children:[(0,a.jsx)(c.A,{}),(0,a.jsx)("div",{className:o.A.contentBlack,children:(0,a.jsxs)("div",{className:"w-1440",children:[(0,a.jsxs)("div",{className:(0,i.A)("w-1280",o.A.contentBanner),children:[(0,a.jsx)("img",{src:"images/home/banner.jpg"}),(0,a.jsxs)("div",{className:"col",children:[(0,a.jsx)("h6",{style:{height:83}}),(0,a.jsxs)("h3",{children:[(0,a.jsx)("b",{children:"\u514d\u8d39"}),"\xa0\u8f6c\u6362\xa0\xa0\xa0\u65e0\u635f\u538b\u7f29"]}),(0,a.jsx)("h6",{style:{height:40}}),(0,a.jsx)("p",{children:"\u6211\u4eec\u81f4\u529b\u4e8e\u6570\u5b57\u683c\u5f0f\u7684\u65e0\u7f1d\u8f6c\u5316"}),(0,a.jsx)("h6",{style:{height:81}}),(0,a.jsx)("button",{onClick:()=>{return e=document.getElementById("bannerCovert").offsetTop,void window.scrollTo({top:e,behavior:"smooth"});var e},children:"\u5f00\u59cb"})]})]}),(0,a.jsx)("div",{id:"bannerCovert",className:(0,i.A)("col w-1280",o.A.contentCovert),children:(0,a.jsxs)("div",{className:"col",children:[(0,a.jsx)("h6",{style:{height:29}}),(0,a.jsx)("h3",{children:"\u6587\u4ef6\u8f6c\u6362\u5668"}),(0,a.jsx)("h6",{style:{height:44}}),(0,a.jsxs)("div",{className:"col",children:[(0,a.jsx)("h6",{style:{height:54}}),(0,a.jsx)("button",{onClick:()=>location.href="/air/convert",children:"\u9009\u62e9\u6587\u4ef6"}),(0,a.jsx)("h6",{style:{height:13}}),(0,a.jsxs)("p",{children:["\u6700\u591a50\u4e2a\uff0c\u6bcf\u4e2a\u6700\u592710MB\u6216 ",(0,a.jsx)("a",{style:{cursor:"pointer"},onClick:()=>{return void 0===(t=2)&&(t=1),void(e.current&&e.current.open(t));var t},children:"\u6ce8\u518c"})]})]}),(0,a.jsx)("h6",{style:{height:97}})]})})]})}),(0,a.jsx)("div",{className:o.A.contentGrey,children:(0,a.jsxs)("div",{className:(0,i.A)("col w-1000",o.A.contentIntro),children:[(0,a.jsx)("h6",{style:{height:80}}),(0,a.jsx)("h3",{children:"\u5728\u7ebf\u514d\u8d39\u6587\u4ef6\u8f6c\u6362"}),(0,a.jsx)("h6",{style:{height:62}}),(0,a.jsx)("p",{children:"\u4e3a\u6240\u6709\u4eba\u514d\u8d39\u63d0\u4f9b\u4e00\u4e2a\u5feb\u6377\u4fbf\u5229\u7684\u5728\u7ebf\u6587\u4ef6\u8f6c\u6362\u5de5\u5177\uff0c\u5e76\u4e3a\u8bbe\u8ba1\u5f00\u53d1\u8005\u5b9a\u5236\u89e3\u51b3\u65b9\u6848\uff0c \u52a0\u901f\u6570\u5b57\u6587\u4ef6\u7684\u4f18\u5316\u8fdb\u7a0b\u3002"}),(0,a.jsx)("h6",{style:{height:87}}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:"images/home/\u652f\u6301\u5404\u79cd\u6587\u4ef6\u683c\u5f0ficon.svg",alt:""}),(0,a.jsx)("span",{children:"\u652f\u6301\u5404\u79cd\u6587\u4ef6\u683c\u5f0f"})]}),(0,a.jsx)("p",{children:"\u6211\u4eec\u652f\u6301\u4e0d\u540c\u7684\u6587\u4ef6\u683c\u5f0f\u95f4\u591a\u79cd\u4e0d\u540c\u7684\u7075\u6d3b\u8f6c\u6362\u65b9\u5f0f\uff0c\u5305\u62ec\u5bf9\u56fe\u50cf\u548c\u6587\u4ef6\u7684\u65e0\u635f\u538b\u7f29\u8f6c\u6362\u7b49\u56fe\u50cf\u540e\u671f\u5728\u7ebf\u5904\u7406\u529f\u80fd \u3002"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:"images/home/\u652f\u6301\u6240\u6709\u8bbe\u5907icon.svg",alt:""}),(0,a.jsx)("span",{children:"\u652f\u6301\u6240\u6709\u8bbe\u5907"})]}),(0,a.jsx)("p",{children:"Turbulence\u57fa\u4e8e\u6d4f\u89c8\u5668\u5e76\u652f\u6301\u6240\u6709\u5e73\u53f0\u3002\u60a8\u65e0\u9700\u4e0b\u8f7d\u4e0e\u5b89\u88c5\u4efb\u4f55\u8f6f\u4ef6\u3002"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:"images/home/\u4e91\u7aef\u5904\u7406icon.svg",alt:""}),(0,a.jsx)("span",{children:"\u4e91\u7aef\u5904\u7406"})]}),(0,a.jsx)("p",{children:"\u6240\u6709\u8f6c\u6362\u90fd\u5728\u4e91\u7aef\u8fdb\u884c\uff0c\u4e0d\u4f1a\u6d88\u8017\u60a8\u8ba1\u7b97\u673a\u7684\u8d44\u6e90\u3002"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:"images/home/\u5b89\u5168\u4fdd\u969cicon.svg",alt:""}),(0,a.jsx)("span",{children:"\u5b89\u5168\u4fdd\u969c"})]}),(0,a.jsx)("p",{children:"\u6211\u4eec\u5c06\u7acb\u5373\u5220\u9664\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6\uff0c\u5e76\u5728 24 \u5c0f\u65f6\u540e\u5220\u9664\u5df2\u8f6c\u6362\u7684\u6587\u4ef6\u3002\u4efb\u4f55\u4eba\u90fd\u65e0\u6cd5\u8bbf\u95ee\u60a8\u7684\u6587\u4ef6\uff0c\u6211\u4eec\u53ef\u786e\u4fdd\u60a8\u7684\u9690\u79c1100%\u5b89\u5168\u3002"})]})})]}),(0,a.jsx)("h6",{style:{height:75}})]})}),(0,a.jsxs)("div",{className:(0,i.A)("col",o.A.contentShowImage),children:[(0,a.jsx)("h6",{style:{height:80}}),(0,a.jsx)("h3",{children:"\u4f60\u80fd\u627e\u51fa\u5b83\u4eec\u7684\u4e0d\u540c\u5417?"}),(0,a.jsx)("h6",{style:{height:56}}),(0,a.jsx)("p",{children:"\u62d6\u52a8\u6ed1\u5757\uff0c\u60a8\u53ef\u4ee5\u5c06\u538b\u7f29\u524d\u540e\u7684\u56fe\u50cf\u8fdb\u884c\u6bd4\u8f83,\u4ee4\u4eba\u60ca\u5947\u7684\u662f\u6587\u4ef6\u5927\u5c0f\u51cf\u5c11\u4e8685%\u4ee5\u4e0a\uff01"}),(0,a.jsx)("h6",{style:{height:50}}),(0,a.jsx)("div",{children:(0,a.jsx)(d,{})}),(0,a.jsx)("h6",{style:{height:100}})]}),(0,a.jsxs)("div",{className:o.A.contentBlack,children:[(0,a.jsx)("h6",{style:{height:70}}),(0,a.jsx)("div",{className:(0,i.A)(o.A.contentOptimize),children:(0,a.jsxs)("div",{className:"col",children:[(0,a.jsx)("h6",{style:{height:36}}),(0,a.jsx)("p",{children:"\u8bd5\u8bd5\u6211\u4eec\u53ef\u4ee5"}),(0,a.jsx)("h6",{style:{height:14}}),(0,a.jsx)("h3",{children:"\u4f18\u5316\u60a8\u7f51\u7ad9\u7684\u6027\u80fd"}),(0,a.jsx)("h6",{style:{height:32}}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("label",{htmlFor:"",children:[(0,a.jsx)("img",{src:"images/home/\u7f51\u5740\u56fe\u6807.svg"}),(0,a.jsx)("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u4f60\u7684\u7f51\u5740"})]}),(0,a.jsx)("h6",{style:{width:20}}),(0,a.jsx)("button",{children:"\u7acb\u5373\u5206\u6790"})]}),(0,a.jsx)("h6",{style:{height:55}})]})}),(0,a.jsx)("h6",{style:{height:70}})]}),(0,a.jsx)("div",{className:(0,i.A)(o.A.contentGrey),children:(0,a.jsxs)("div",{className:(0,i.A)("col",o.A.contentFAQ),children:[(0,a.jsx)("h6",{style:{height:46}}),(0,a.jsx)("h3",{children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54(FAQ)"}),(0,a.jsx)("h6",{style:{height:40}}),(0,a.jsx)("div",{className:"contentFAQ",children:(0,a.jsxs)(n.A,{accordion:!0,bordered:!1,children:[(0,a.jsx)(g,{header:(0,a.jsxs)("div",{children:["Bturbulence\u7684\u7528\u9014\u662f\u4ec0\u4e48\uff1f",(0,a.jsx)("img",{src:"images/home/\u95ee\u7b54\u4e0b\u62c9\u7bad\u5934.svg",alt:""})]}),name:"1",children:"Beijing Toutiao Technology Co., Ltd."}),(0,a.jsx)(g,{header:(0,a.jsxs)("div",{children:["Bturbulence\u7684\u7528\u9014\u662f\u4ec0\u4e48\uff1f",(0,a.jsx)("img",{src:"images/home/\u95ee\u7b54\u4e0b\u62c9\u7bad\u5934.svg",alt:""})]}),name:"2",children:"Beijing Toutiao Technology Co., Ltd."}),(0,a.jsx)(g,{header:(0,a.jsxs)("div",{children:["Bturbulence\u7684\u7528\u9014\u662f\u4ec0\u4e48\uff1f",(0,a.jsx)("img",{src:"images/home/\u95ee\u7b54\u4e0b\u62c9\u7bad\u5934.svg",alt:""})]}),name:"3",children:"Beijing Toutiao Technology Co., Ltd."})]})}),(0,a.jsx)("h6",{style:{height:26}}),(0,a.jsxs)("h4",{children:["\u67e5\u770b\u66f4\u591a ",(0,a.jsx)("img",{src:"images/home/\u95ee\u7b54\u4e0b\u62c9\u7bad\u5934.svg",alt:""})]}),(0,a.jsx)("h6",{style:{height:46}})]})}),(0,a.jsxs)("div",{className:o.A.contentBlack222,children:[(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]}),(0,a.jsx)(x.A,{}),(0,a.jsx)(h.A,{ref:e})]})}},8718:(e,t,s)=>{s.d(t,{A:()=>i});const i={contentBlack141414:"contentBlack141414_mcqp",header:"header_JTkG",on:"on_JEwW",homeButton:"homeButton_Ej81",contentBlack:"contentBlack_JAar",contentBanner:"contentBanner_MAb3",contentCovert:"contentCovert_Nwek",contentGrey:"contentGrey_eJdu",contentIntro:"contentIntro_UKql",contentShowImage:"contentShowImage_nWNR",contentOptimize:"contentOptimize_QIBD",contentFAQ:"contentFAQ_W77N",contentBlack222:"contentBlack222_scJT",contentCount:"contentCount_XmM9"}}}]);