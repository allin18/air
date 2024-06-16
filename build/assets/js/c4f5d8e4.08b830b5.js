"use strict";(self.webpackChunkair_docs=self.webpackChunkair_docs||[]).push([[2634,1651],{5397:(e,s,t)=>{t.r(s),t.d(s,{default:()=>b});var i=t(4164),r=t(6540),n=t(5906);const l={contentBlack141414:"contentBlack141414_mcqp",header:"header_JTkG",on:"on_JEwW",homeButton:"homeButton_Ej81",contentBlack:"contentBlack_JAar",contentBanner:"contentBanner_MAb3",contentCovert:"contentCovert_Nwek",contentGrey:"contentGrey_eJdu",contentIntro:"contentIntro_UKql",contentShowImage:"contentShowImage_nWNR",contentOptimize:"contentOptimize_QIBD",contentFAQ:"contentFAQ_W77N",contentBlack222:"contentBlack222_scJT",contentCount:"contentCount_XmM9"};class a{constructor(e,s){let{start:t="50",prefix:i="beer"}=void 0===s?{}:s;if(this.start=parseInt(t)?Math.min(100,Math.max(0,parseInt(t))):50,this.prefix=i,!e||2!==e.children.length)return;if(this.element=e,this.revealContainer=this.element.children[1],this.revealContainer.children.length<1)return;this.revealElement=this.revealContainer.children[0],this.range=this.addElement("input",{type:"range",class:`${this.prefix}-range`,"aria-label":"Percent of revealed content","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":this.start,value:this.start,min:"0",max:"100"});const r=this.addElement("div",{class:`${this.prefix}-handle`}),n=document.createElement("span");n.setAttribute("class",`${this.prefix}-handle-center`),r.appendChild(n),this.handle=r,this.onImagesLoad()}init(){this.element.classList.add(`${this.prefix}-ready`),this.setImgWidth(),this.move(),this.addListeners()}loadingImg(e){return new Promise(((s,t)=>{e||s();const i=new Image;i.onload=()=>s(),i.onerror=()=>t(),i.src=e}))}loadedBoth(){const e=this.element.children[0].src||this.element.children[0].getAttribute(`data-${this.prefix}-src`),s=this.revealElement.src||this.revealElement.getAttribute(`data-${this.prefix}-src`);return Promise.all([this.loadingImg(e),this.loadingImg(s)])}onImagesLoad(){this.revealElement&&this.loadedBoth().then((()=>{this.init()}),(()=>{console.error("Some errors occurred and images are not loaded.")}))}addElement(e,s){const t=document.createElement(e);return Object.keys(s).forEach((e=>{t.setAttribute(e,s[e])})),this.element.appendChild(t),t}setImgWidth(){this.revealElement.style.width=getComputedStyle(this.element).width}addListeners(){["input","change"].forEach((e=>{this.range.addEventListener(e,(()=>{this.move()}))})),window.addEventListener("resize",(()=>{this.setImgWidth()}))}move(){this.range.value>=50?(this.revealContainer.style.width=`${this.range.value}%`,this.handle.style.left=`${this.range.value}%`,this.handle.style.right="auto"):(this.revealContainer.style.width=`${this.range.value}%`,this.handle.style.left="auto",this.handle.style.right=100-this.range.value+"%"),this.range.setAttribute("aria-valuenow",this.range.value)}}var o=t(4848);const h=function(){return(0,r.useEffect)((()=>(new a(document.getElementById("slider")),()=>{})),[]),(0,o.jsxs)("div",{id:"slider",className:"beer-slider","data-beer-label":"before",style:{borderRadius:50,overflow:"hidden",display:"block"},children:[(0,o.jsx)("img",{src:"images/home/after.png",alt:""}),(0,o.jsx)("div",{className:"beer-reveal","data-beer-label":"after",children:(0,o.jsx)("img",{src:"images/home/befor.png",alt:""})})]})};var d=t(5067),c=(t(5794),t(9091)),x=t(539),g=t(9441),j=t(3529);const p=c.DU`
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
            font-size: 20px;
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
                        font-size: 20px;
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
                    font-size: 20px;
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
        font-size: 25px;
        cursor: pointer;
        border: 0;
    }

    .LoginModal-content button.b2 {
        border-radius: 8px;
        color: var(--page-bg-000);
        background-color: transparent;
        width: 360px;
        height: 50px;
        font-size: 25px;
        cursor: pointer;
        border: 2px solid var(--page-bg-000);
    }

    .LoginModal-content button.disabled {
        border-radius: 8px;
        color: var(--page-text-FFF);
        background-color: var(--page-btn-disabled);
        width: 360px;
        height: 50px;
        font-size: 25px;
        cursor: pointer;
        border: 0;
    }
`,m=(0,r.forwardRef)(((e,s)=>{const[t,i]=r.useState(!1),[n,l]=r.useState(!0),[a,h]=r.useState(1),[c,m]=r.useState(""),[u,b]=r.useState(""),[v,y]=r.useState(""),[f,w]=r.useState("");return(0,r.useImperativeHandle)(s,(()=>({open(e){void 0===e&&(e=1),h(e),i(!0)},hide(){i(!1)}}))),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{})," ",(0,o.jsxs)(d.A,{style:{width:600,height:520},wrapClassName:"LoginModal",visible:t,title:null,footer:null,closable:!1,autoFocus:!1,onCancel:()=>{i(!1)},children:[1===a&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"LoginModal-title myCenter",style:{height:80},children:[(0,o.jsx)("h3",{style:{fontSize:32,fontWeight:"bold",color:"var(--page-text-FFF)"},children:"\u901a\u884c\u8bc1"}),(0,o.jsx)("span",{style:{position:"absolute",top:12,right:21,width:40,height:5,borderRadius:2.5,backgroundColor:"var(--page-modal-close)",cursor:"pointer"},onClick:()=>i(!1)})]}),(0,o.jsxs)("div",{className:"LoginModal-content",style:{height:440,width:360,margin:"auto"},children:[(0,o.jsx)("h6",{style:{height:55}}),(0,o.jsx)(g.A,{className:"ipt",placeholder:"\u7535\u5b50\u90ae\u7bb1/\u624b\u673a\u53f7"}),(0,o.jsx)("h6",{style:{height:30}}),(0,o.jsx)(g.A.Password,{className:"ipt-group",addAfter:"?",placeholder:"\u5bc6\u7801"}),(0,o.jsx)("h6",{style:{height:8}}),(0,o.jsx)(x.A,{children:"\u8bb0\u4f4f\u8d26\u53f7"}),(0,o.jsx)("h6",{style:{height:47}}),(0,o.jsx)("button",{className:"b1",children:"\u5f00\u59cb"}),(0,o.jsx)("h6",{style:{height:30}}),(0,o.jsx)("button",{className:"b2",onClick:()=>h(2),children:"\u6ce8\u518c"})]})]}),2===a&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"LoginModal-title myCenter",style:{height:80},children:[(0,o.jsx)("h3",{style:{fontSize:32,fontWeight:"bold",color:"var(--page-text-FFF)"},children:"\u6ce8\u518c"}),(0,o.jsx)("span",{style:{position:"absolute",top:12,right:21,width:40,height:5,borderRadius:2.5,backgroundColor:"var(--page-modal-close)",cursor:"pointer"},onClick:()=>i(!1)})]}),(0,o.jsxs)("div",{className:"LoginModal-content",style:{height:440,width:360,margin:"auto"},children:[(0,o.jsx)("h6",{style:{height:55}}),(0,o.jsx)("div",{className:"myCenter",style:{height:50,width:360,margin:"auto",border:"2px solid var(--page-border-b2b2b2)",borderRadius:8,fontSize:22,color:"var(--page-text-808080)",cursor:"pointer"},onClick:()=>h(3),children:"\u624b\u673a\u53f7\u6ce8\u518c"}),(0,o.jsx)("h6",{style:{height:23}}),(0,o.jsx)("span",{className:"myCenter",style:{fontSize:25,lineHeight:1,color:"var(--page-text-b2b1b1)"},children:"\u6216"}),(0,o.jsx)("h6",{style:{height:25}}),(0,o.jsx)(g.A,{className:"ipt",placeholder:"\u7535\u5b50\u90ae\u7bb1",value:c,onChange:e=>m(e)}),(0,o.jsx)("h6",{style:{height:30}}),(0,o.jsx)(g.A.Password,{className:"ipt-group",placeholder:"\u5bc6\u7801",value:u,onChange:e=>b(e)}),(0,o.jsx)("h6",{style:{height:30}}),(0,o.jsx)("button",{className:c.length>0&&u.length>0?"b1":"disabled",children:"\u521b\u5efa\u8d26\u6237"})]})]}),3===a&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"LoginModal-title myCenter",style:{height:80},children:[(0,o.jsx)("h3",{style:{fontSize:32,fontWeight:"bold",color:"var(--page-text-FFF)"},children:"\u6ce8\u518c"}),(0,o.jsx)("span",{style:{position:"absolute",top:12,right:21,width:40,height:5,borderRadius:2.5,backgroundColor:"var(--page-modal-close)",cursor:"pointer"},onClick:()=>i(!1)})]}),(0,o.jsxs)("div",{className:"LoginModal-content",style:{height:440,width:360,margin:"auto"},children:[(0,o.jsx)("h6",{style:{height:55}}),(0,o.jsxs)("div",{style:{position:"relative"},children:[(0,o.jsx)(g.A,{className:"phone",style:{width:360,height:50,backgroundColor:"var(--page-input-bg-code)",borderRadius:8,outline:"none",paddingLeft:120,fontSize:20,border:"2px solid var(--page-border-b2b2b2)"},placeholder:"\u624b\u673a\u53f7",value:v,onChange:e=>y(e)}),(0,o.jsxs)("span",{className:"myCenter",style:{position:"absolute",top:0,left:0,width:100,height:50,fontSize:20,color:"var(--page-text-808080)"},children:["+86 ",(0,o.jsx)(j.A,{style:{color:"var(--page-text-808080)",marginLeft:10}})]})]}),(0,o.jsx)("h6",{style:{height:30}}),(0,o.jsxs)("div",{className:"myRow",style:{justifyContent:"flex-start"},children:[(0,o.jsx)(g.A,{style:{width:142,height:50,backgroundColor:"var(--page-input-bg-code)",borderRadius:8,border:0,outline:"none",padding:"0 16px",fontSize:20},placeholder:"",value:f,onChange:e=>w(e)}),(0,o.jsx)("h6",{style:{width:38}}),(0,o.jsx)("span",{className:"myCenter",style:{width:142,height:50,backgroundColor:"var(--page-input-bg-code-btn-bg)",borderRadius:8,fontSize:20,color:"var(--page-text-808080)"},children:"\u53d1\u9001\u9a8c\u8bc1\u7801"})]}),(0,o.jsx)("h6",{style:{height:30}}),(0,o.jsx)(g.A.Password,{className:"ipt-group",placeholder:"\u5bc6\u7801",value:u,onChange:e=>b(e)}),(0,o.jsx)("h6",{style:{height:43}}),(0,o.jsx)(x.A,{children:"\u6211\u5df2\u9605\u8bfb\u5e76\u63a5\u53d7 \u7528\u6237\u534f\u8bae \u548c \u9690\u79c1\u653f\u7b56"}),(0,o.jsx)("h6",{style:{height:14}}),(0,o.jsx)("button",{className:v.length>0&&f.length>0&&u.length>0?"b1":"disabled",children:"\u521b\u5efa\u8d26\u6237"})]})]})]})]})})),u=n.A.Item;function b(){const e=(0,r.useRef)(),s=function(s){void 0===s&&(s=1),e.current&&e.current.open(s)};return(0,o.jsxs)("div",{className:"page",children:[(0,o.jsx)("div",{className:l.contentBlack141414,children:(0,o.jsx)("div",{className:"w-1440",children:(0,o.jsxs)("div",{className:(0,i.A)("w-1280",l.header),children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"img/logo.svg"}),"Turbulence"]}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:["\u538b\u7f29",(0,o.jsx)("img",{src:"images/home/\u4e0b\u62c9\u7bad\u59341.svg",alt:""}),(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{className:l.on,href:"",children:"\u56fe\u50cf\u538b\u7f29"}),(0,o.jsx)("a",{href:"",children:"\u89c6\u9891\u538b\u7f29"}),(0,o.jsx)("a",{href:"",children:"\u6587\u4ef6\u538b\u7f29"}),(0,o.jsx)("a",{href:"",children:"\u97f3\u9891\u538b\u7f29"})]})]}),(0,o.jsxs)("li",{children:["\u8f6c\u6362",(0,o.jsx)("img",{src:"images/home/\u4e0b\u62c9\u7bad\u59341.svg",alt:""}),(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{className:l.on,href:"",children:"\u6587\u6863\u8f6c\u6362"}),(0,o.jsx)("a",{href:"",children:"\u56fe\u50cf\u8f6c\u6362"}),(0,o.jsx)("a",{href:"",children:"\u89c6\u9891\u8f6c\u6362"}),(0,o.jsx)("a",{href:"",children:"\u97f3\u9891\u8f6c\u6362"})]})]}),(0,o.jsx)("li",{children:"OCR"}),(0,o.jsx)("li",{children:"API"}),(0,o.jsx)("li",{children:"\u5b9a\u4ef7"}),(0,o.jsx)("li",{children:"\u652f\u6301"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"images/home/\u6587\u4ef6\u5939icon.svg"}),(0,o.jsx)("span",{children:"66"})]}),(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"images/home/\u8bed\u8a00icon.svg"})}),(0,o.jsx)("button",{className:l.homeButton,onClick:()=>s(1),children:"\u767b\u5f55"})]})]})})}),(0,o.jsx)("div",{className:l.contentBlack,children:(0,o.jsxs)("div",{className:"w-1440",children:[(0,o.jsxs)("div",{className:(0,i.A)("w-1280",l.contentBanner),children:[(0,o.jsx)("img",{src:"images/home/banner.jpg"}),(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)("h6",{style:{height:83}}),(0,o.jsxs)("h3",{children:[(0,o.jsx)("b",{children:"\u514d\u8d39"}),"\xa0\u8f6c\u6362\xa0\xa0\xa0\u65e0\u635f\u538b\u7f29"]}),(0,o.jsx)("h6",{style:{height:40}}),(0,o.jsx)("p",{children:"\u6211\u4eec\u81f4\u529b\u4e8e\u6570\u5b57\u683c\u5f0f\u7684\u65e0\u7f1d\u8f6c\u5316"}),(0,o.jsx)("h6",{style:{height:81}}),(0,o.jsx)("button",{children:"\u5f00\u59cb"})]})]}),(0,o.jsx)("div",{className:(0,i.A)("col w-1280",l.contentCovert),children:(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)("h6",{style:{height:29}}),(0,o.jsx)("h3",{children:"\u6587\u4ef6\u8f6c\u6362\u5668"}),(0,o.jsx)("h6",{style:{height:44}}),(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)("h6",{style:{height:54}}),(0,o.jsx)("button",{children:"\u9009\u62e9\u6587\u4ef6"}),(0,o.jsx)("h6",{style:{height:13}}),(0,o.jsxs)("p",{children:["\u6700\u591a50\u4e2a\uff0c\u6bcf\u4e2a\u6700\u592710MB\u6216 ",(0,o.jsx)("a",{style:{cursor:"pointer"},onClick:()=>s(2),children:"\u6ce8\u518c"})]})]}),(0,o.jsx)("h6",{style:{height:97}})]})})]})}),(0,o.jsx)("div",{className:l.contentGrey,children:(0,o.jsxs)("div",{className:(0,i.A)("col w-1000",l.contentIntro),children:[(0,o.jsx)("h6",{style:{height:80}}),(0,o.jsx)("h3",{children:"\u5728\u7ebf\u514d\u8d39\u6587\u4ef6\u8f6c\u6362"}),(0,o.jsx)("h6",{style:{height:62}}),(0,o.jsx)("p",{children:"\u4e3a\u6240\u6709\u4eba\u514d\u8d39\u63d0\u4f9b\u4e00\u4e2a\u5feb\u6377\u4fbf\u5229\u7684\u5728\u7ebf\u6587\u4ef6\u8f6c\u6362\u5de5\u5177\uff0c\u5e76\u4e3a\u8bbe\u8ba1\u5f00\u53d1\u8005\u5b9a\u5236\u89e3\u51b3\u65b9\u6848\uff0c \u52a0\u901f\u6570\u5b57\u6587\u4ef6\u7684\u4f18\u5316\u8fdb\u7a0b\u3002"}),(0,o.jsx)("h6",{style:{height:87}}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"images/home/\u652f\u6301\u5404\u79cd\u6587\u4ef6\u683c\u5f0ficon.svg",alt:""}),(0,o.jsx)("span",{children:"\u652f\u6301\u5404\u79cd\u6587\u4ef6\u683c\u5f0f"})]}),(0,o.jsx)("p",{children:"\u6211\u4eec\u652f\u6301\u4e0d\u540c\u7684\u6587\u4ef6\u683c\u5f0f\u95f4\u591a\u79cd\u4e0d\u540c\u7684\u7075\u6d3b\u8f6c\u6362\u65b9\u5f0f\uff0c\u5305\u62ec\u5bf9\u56fe\u50cf\u548c\u6587\u4ef6\u7684\u65e0\u635f\u538b\u7f29\u8f6c\u6362\u7b49\u56fe\u50cf\u540e\u671f\u5728\u7ebf\u5904\u7406\u529f\u80fd \u3002"})]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"images/home/\u652f\u6301\u6240\u6709\u8bbe\u5907icon.svg",alt:""}),(0,o.jsx)("span",{children:"\u652f\u6301\u6240\u6709\u8bbe\u5907"})]}),(0,o.jsx)("p",{children:"Turbulence\u57fa\u4e8e\u6d4f\u89c8\u5668\u5e76\u652f\u6301\u6240\u6709\u5e73\u53f0\u3002\u60a8\u65e0\u9700\u4e0b\u8f7d\u4e0e\u5b89\u88c5\u4efb\u4f55\u8f6f\u4ef6\u3002"})]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"images/home/\u4e91\u7aef\u5904\u7406icon.svg",alt:""}),(0,o.jsx)("span",{children:"\u4e91\u7aef\u5904\u7406"})]}),(0,o.jsx)("p",{children:"\u6240\u6709\u8f6c\u6362\u90fd\u5728\u4e91\u7aef\u8fdb\u884c\uff0c\u4e0d\u4f1a\u6d88\u8017\u60a8\u8ba1\u7b97\u673a\u7684\u8d44\u6e90\u3002"})]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"images/home/\u5b89\u5168\u4fdd\u969cicon.svg",alt:""}),(0,o.jsx)("span",{children:"\u5b89\u5168\u4fdd\u969c"})]}),(0,o.jsx)("p",{children:"\u6211\u4eec\u5c06\u7acb\u5373\u5220\u9664\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6\uff0c\u5e76\u5728 24 \u5c0f\u65f6\u540e\u5220\u9664\u5df2\u8f6c\u6362\u7684\u6587\u4ef6\u3002\u4efb\u4f55\u4eba\u90fd\u65e0\u6cd5\u8bbf\u95ee\u60a8\u7684\u6587\u4ef6\uff0c\u6211\u4eec\u53ef\u786e\u4fdd\u60a8\u7684\u9690\u79c1100%\u5b89\u5168\u3002"})]})})]}),(0,o.jsx)("h6",{style:{height:75}})]})}),(0,o.jsxs)("div",{className:(0,i.A)("col",l.contentShowImage),children:[(0,o.jsx)("h6",{style:{height:80}}),(0,o.jsx)("h3",{children:"\u4f60\u80fd\u627e\u51fa\u5b83\u4eec\u7684\u4e0d\u540c\u5417?"}),(0,o.jsx)("h6",{style:{height:56}}),(0,o.jsx)("p",{children:"\u62d6\u52a8\u6ed1\u5757\uff0c\u60a8\u53ef\u4ee5\u5c06\u538b\u7f29\u524d\u540e\u7684\u56fe\u50cf\u8fdb\u884c\u6bd4\u8f83,\u4ee4\u4eba\u60ca\u5947\u7684\u662f\u6587\u4ef6\u5927\u5c0f\u51cf\u5c11\u4e8685%\u4ee5\u4e0a\uff01"}),(0,o.jsx)("h6",{style:{height:50}}),(0,o.jsx)("div",{children:(0,o.jsx)(h,{})}),(0,o.jsx)("h6",{style:{height:100}})]}),(0,o.jsxs)("div",{className:l.contentBlack,children:[(0,o.jsx)("h6",{style:{height:110}}),(0,o.jsx)("div",{className:(0,i.A)(l.contentOptimize),children:(0,o.jsxs)("div",{className:"col",children:[(0,o.jsx)("h6",{style:{height:41}}),(0,o.jsx)("p",{children:"\u8bd5\u8bd5\u6211\u4eec\u53ef\u4ee5"}),(0,o.jsx)("h6",{style:{height:20}}),(0,o.jsx)("h3",{children:"\u4f18\u5316\u60a8\u7f51\u7ad9\u7684\u6027\u80fd"}),(0,o.jsx)("h6",{style:{height:42}}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("label",{htmlFor:"",children:[(0,o.jsx)("img",{src:"images/home/\u7f51\u5740\u56fe\u6807.svg"}),(0,o.jsx)("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u4f60\u7684\u7f51\u5740"})]}),(0,o.jsx)("h6",{style:{width:42}}),(0,o.jsx)("button",{children:"\u7acb\u5373\u5206\u6790"})]}),(0,o.jsx)("h6",{style:{height:55}})]})}),(0,o.jsx)("h6",{style:{height:110}})]}),(0,o.jsx)("div",{className:(0,i.A)(l.contentGrey),children:(0,o.jsxs)("div",{className:(0,i.A)("col",l.contentFAQ),children:[(0,o.jsx)("h6",{style:{height:46}}),(0,o.jsx)("h3",{children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54(FAQ)"}),(0,o.jsx)("h6",{style:{height:40}}),(0,o.jsx)("div",{className:"contentFAQ",children:(0,o.jsxs)(n.A,{accordion:!0,bordered:!1,children:[(0,o.jsx)(u,{header:(0,o.jsxs)("div",{children:["Bturbulence\u7684\u7528\u9014\u662f\u4ec0\u4e48\uff1f",(0,o.jsx)("img",{src:"images/home/\u95ee\u7b54\u4e0b\u62c9\u7bad\u5934.svg",alt:""})]}),name:"1",children:"Beijing Toutiao Technology Co., Ltd."}),(0,o.jsx)(u,{header:(0,o.jsxs)("div",{children:["Bturbulence\u7684\u7528\u9014\u662f\u4ec0\u4e48\uff1f",(0,o.jsx)("img",{src:"images/home/\u95ee\u7b54\u4e0b\u62c9\u7bad\u5934.svg",alt:""})]}),name:"2",children:"Beijing Toutiao Technology Co., Ltd."}),(0,o.jsx)(u,{header:(0,o.jsxs)("div",{children:["Bturbulence\u7684\u7528\u9014\u662f\u4ec0\u4e48\uff1f",(0,o.jsx)("img",{src:"images/home/\u95ee\u7b54\u4e0b\u62c9\u7bad\u5934.svg",alt:""})]}),name:"3",children:"Beijing Toutiao Technology Co., Ltd."})]})}),(0,o.jsx)("h6",{style:{height:26}}),(0,o.jsxs)("h4",{children:["\u67e5\u770b\u66f4\u591a ",(0,o.jsx)("img",{src:"images/home/\u95ee\u7b54\u4e0b\u62c9\u7bad\u5934.svg",alt:""})]}),(0,o.jsx)("h6",{style:{height:46}})]})}),(0,o.jsxs)("div",{className:l.contentBlack222,children:[(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]}),(0,o.jsx)("div",{className:l.contentBlack,children:(0,o.jsxs)("ul",{className:(0,i.A)("row w-1280",l.contentCount),children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{style:{marginLeft:0},children:"32"}),"\u670d\u52a1\u5668"]}),(0,o.jsxs)("li",{children:["\u5df2\u5728\u7ebf\u8f6c\u6362\u6587\u4ef6",(0,o.jsx)("span",{children:"77777"}),"\u4e2a"]}),(0,o.jsxs)("li",{children:["\u5df2\u5728\u7ebf\u8f6c\u6362\u6587\u4ef6",(0,o.jsx)("span",{children:"999999"}),"GB"]})]})}),(0,o.jsx)(m,{ref:e})]})}},192:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var i=t(5397),r=t(3660),n=t(5500),l=t(4586),a=t(4848);function o(){const{siteConfig:e}=(0,l.A)(),s=`\u9996\u9875 from ${e.title}`,t=`\u6b22\u8fce from ${e.tagline}`;return(0,a.jsx)(r.A,{children:(0,a.jsxs)(n.e3,{className:"myPageHtmlClassName",children:[(0,a.jsx)(n.be,{title:s,description:t}),(0,a.jsx)(i.default,{})]})})}}}]);