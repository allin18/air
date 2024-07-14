import FileUtil from "./FileUtil";

export default class DropUtil{
    static html(langCode,langDataMap){
        return `
        <div id="drop_zone" style="height: 100%;border: 2px dashed #bbb;border-radius: 5px;padding: 16px;background: white;transition: border-color 0.5s;text-align: center;position: relative;overflow: hidden;">
            <input type="file" multiple accept=".png,.jpg,.jpeg,.gif" style="position:absolute; top: -100px" id="drop_picker">
            <div id="drop_zone_tips"
                style="position: absolute;top: 0;left: 0;width:100%;height:100%;display: flex;align-items: center;justify-content: center;background: rgba(255, 255, 255,.9);cursor: pointer;z-index: 1;">
                <div style="text-align: left;">
                    <div style="color: #999;">Drag and Drop</div>
                </div>
            </div>
            <div id="drop_content" style="width:100%;height: 100%;position: relative;background: transparent;"></div>
        </div>
        `
    }
    static readFileUint8Array(file){
        return new Promise(resolve => {
            let reader = new FileReader();
            reader.onload = function (e) {
                let data = new Uint8Array(e.target.result);
                resolve(data);
            };
            reader.readAsArrayBuffer(file);
        })
    }

    drop_zone;
    drop_zone_tips;
    drop_picker;
    drop_content;
    onChange;
    needStyle = true; // 是否需要默认样式
    constructor(opt) {
        this.onChange = opt.onChange || function (){};
        if(typeof opt.needStyle === 'boolean'){
            this.needStyle = opt.needStyle
        }
        /// 获取节点 设置内容
        if(opt.el && opt.theme === undefined){
            /// 无样式 仅支持拖拽 不支持点击
            /// 只有el 没有主题配置 说明el就是壳 不需要其他的事件绑定
            this.drop_zone = opt.el;
        }  else if(opt.el && opt.theme === 'simple'){
            /// 简单自定义
            opt.el.innerHTML = DropUtil.html();
            opt.theme = 'custom';
        } else if(opt.el && opt.theme === 'base'){
            /// 无样式 带点击
            opt.el.style.position = 'relative';
            const ipt =  document.createElement('input');
            ipt.type = 'file';
            ipt.multiple = 'true';
            ipt.accept = '.png,.jpg,.jpeg,.gif'
            ipt.id  = 'drop_picker';
            ipt.style.position = 'absolute';
            ipt.style.top = '0';
            ipt.style.left = '0';
            ipt.style.right = '0';
            ipt.style.bottom = '0';
            ipt.style.opacity = '0';
            ipt.style.zIndex = '1';
            ipt.style.cursor = 'pointer';
            ipt.style.display = 'none';
            opt.el.appendChild(ipt);
            this.drop_zone = opt.el;
            this.drop_picker = ipt;
        } else {
            return;
        }
        /// 自定义 公共获取元素 也适应用于simple
        if(opt.el && opt.theme === 'custom') {
            /// 自定义
            /// 1 自定义拖拽的dom
            /// 2 有主题配置的实例 绑定多个dom事件 为后续调用
            this.drop_zone = document.getElementById("drop_zone");
            this.drop_zone_tips = document.getElementById("drop_zone_tips");
            this.drop_picker = document.getElementById("drop_picker");
            this.drop_content = document.getElementById("drop_content");
        }
        // 此事件是必须的，且要阻止默认事件
        this.drop_zone.addEventListener("dragover",     (e) => e.preventDefault()/*阻止浏览器读取文件*/, false);
        this.drop_zone.addEventListener('dragleave',    (e) => this.dragleave(e), false);
        this.drop_zone.addEventListener('dragenter',    (e) => this.dragenter(e), false);
        this.drop_zone.addEventListener("drop",         (e) => this.dragdrop(e), false);
        // drop_zone_tips 是虚拟点击触发 而不是 代理了input
        this.drop_zone_tips && this.drop_zone_tips.addEventListener("click",   (e) => this.filePicker(), false);
        this.drop_picker && this.drop_picker.addEventListener("change",     (e) => this.fileOpen(e), false);
    }
    //如果你绑定事件的容器，包含子节点，那么你的子节点都会触发dragenter，而你的dragleave，触发的是上次移入的那个节点
    //把最后一次移入的节点，记录下来，然后每次触发后，做比较，移入和移除元素相同才触发。
    recordDropNode;
    dragleave(e) {
        if(this.recordDropNode===e.target){
            // console.log('dragleave')
            if(this.drop_zone_tips){
                this.drop_zone_tips.style.zIndex = 'initial';
            }
            this.drop_zone.style.border = '2px dashed #bbb';
        }
    }
    dragenter(e) {
        this.recordDropNode=e.target;
        e.preventDefault();
        // console.log('dragenter')
        if(this.drop_zone_tips){
            this.drop_zone_tips.style.zIndex = '1';
        }
        this.drop_zone.style.border = '2px dashed #0087F7';
    }
    dragdrop(event) {
        // console.log('dragdrop')
        if(this.drop_zone_tips){
            this.drop_zone_tips.style.zIndex = 'initial';
        }
        this.drop_zone.style.border = '2px dashed #bbb';
        event.preventDefault();//阻止浏览器读取文件

        this.getAllFiles(event).then(fs=>{
            this.onChange(fs,this.drop_content);
        });
    }
    filePicker(){
        let e = document.createEvent("MouseEvents");
        e.initEvent('click', true, true);
        this.drop_picker.dispatchEvent(e)
    }
    fileOpen(event){
        if(this.needStyle){
            // if(this.drop_zone_tips){} TODO 等一个需要这个的实例出现 再加
            this.drop_zone_tips.style.zIndex = 'initial';
            this.drop_zone.style.border = '2px dashed #bbb';
        }
         this.getAllFiles(event).then(fs=>{
             this.onChange(fs,this.drop_content);
         });
    }
    open(){
       this.filePicker();
    }

    // --------------------------------------------------------------
    async getAllFiles(event){
        let files;
        let fs = [];
        if(event.dataTransfer !== undefined){
            // 拖拽模式 拖拽（转移）的对象列表
            files = event.dataTransfer.items;
            // file 对象（按实例拖拽的内容）转换成 FileSystemFileEntry 对象 或 FileSystemDirectoryEntry 对象
            for (let i = 0; i < files.length; i++) {
                const dataTransferItem = files[i];
                let fileEntry = dataTransferItem.webkitGetAsEntry();
                let fs2 = await this.getFileList(fileEntry);
                fs = fs.concat(fs2)
            }
        }else{
            // 文件选择模式
            files = event.target.files;
            // var ext = file.name.split('.').slice(-1)[0];
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                let fs2 = await this.getFileList(file);
                fs = fs.concat(fs2)
            }
        }
        return fs;
    }

    /**
     * 递归读取文件 通过拖拽获取的是fileEntry 点击选择的是file
     */
    async getFileList(fileEntry) {
        let fileList = [];
        if (fileEntry.isDirectory){
            // 使用目录实体来创建 FileSystemDirectoryReader 实例
            let directoryReader = fileEntry.createReader();
            // 上面只是创建了 reader 实例，现在使用 reader 实例来读取 目录实体（读取目录内容）
            let entries = await new Promise(resolve => {
                directoryReader.readEntries((entries) => resolve(entries));
            })
            for (const entry of entries) {
                let l = await this.getFileList(entry);
                fileList = fileList.concat(l);
            }
        }else{
            // fileEntry instanceof FileEntry 不行
            if(fileEntry.toString().match(/\[object (.*?)\]/)[1] === "FileEntry"){
                const file = await FileUtil.getFile(fileEntry);
                fileList.push(file)
            }else{
                fileList.push(fileEntry)
            }
        }
        return fileList;
    }


}