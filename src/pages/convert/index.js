import clsx from 'clsx';
import React, {useState, useRef, useCallback, useEffect} from 'react';
import {Popover, Button} from '@arco-design/web-react';
import { Tabs } from '@arco-design/web-react';
const TabPane = Tabs.TabPane;
import { Switch } from '@arco-design/web-react';

import '../../css/page.scss';
import './index.scss';
import DropUtil from "../../util/DropUtil";
import LayoutProvider from "@theme/Layout/Provider";
import {HtmlClassNameProvider, PageMetadata} from "@docusaurus/theme-common";
import HomeIndex from "../home";
import Header from "../_common/_header";
import Statistic from "../_common/_statistic";
import {getRandomInt} from "../../util/RandomUtil";
import {uploadFile} from "../../util/UploadFile";
import {Queues, Task} from "../../util/Queues";
import FileUtil, {calculateFileSizeInMB} from "../../util/FileUtil";
import ImageUtil from "../../util/ImageUtil";

export default function PageCommonEntry() {
    const title = `首页 from `;
    const description = `欢迎 from `;
    return (
        <LayoutProvider>
            <HtmlClassNameProvider className={'myPageHtmlClassName'}>
                <PageMetadata title={title} description={description}/>
                <PageContent/>
            </HtmlClassNameProvider>
        </LayoutProvider>
    );
}

function PageContent() {
    return (
        <div className="page">
            <Header></Header>
            <div className={'contentBlack'}>
                <div className="w-1000 covert-content">
                    <Compresses/>
                </div>
            </div>
            <Statistic></Statistic>
        </div>
    );
}


// function Content() {
//     const [haveFiles, setHaveFiles] = React.useState(false);
//     const [files, setFiles] = React.useState([]);
//
//     useEffect(() => {
//     }, []);
//
//     useEffect(() => {
//         console.log(111)
//         console.log(files)
//         console.log(222)
//         queues.start()
//     }, [files]);
//
//     const clickRemove = (index) => {
//         const arr = [...files];
//         arr.splice(index, 1); // 从索引index开始，移除1个元素
//         setFiles(arr);
//     }
//
//     const queuesTask = () => {
//         // const fs2 = fs.map(e => {
//         //     e.progress = getRandomInt(0, 100);
//         //     return e;
//         // });
//         // console.log(fs2);
//         // setFiles(fs2);
//     }
//
// }


export class Compresses extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    queues = new Queues();

    state = {
        tasks: [],
        tasksRefs: [],
        haveFiles: false,
        size: 0,
        conversionsType: '',
        allSwitchChecked: true,
    };

    dropUtil;

    // 组件被挂载到DOM上之后立即被调用
    componentDidMount() {
        this.dropUtil = new DropUtil({
            theme: 'base',
            el: document.getElementById('drop_file'),
            needStyle: false,
            onChange: async (fs, dom) => {
                // progress: 30
                // lastModified: 1720426148491
                // lastModifiedDate: 'Mon Jul 08 2024 16:09:08 GMT+0800 (中国标准时间)'
                // name: "转换器工具(1)_03.png"
                // size: 1156
                // type : "image/png"
                // webkitRelativePath: ""
                const firstFile = fs[0];
                const tasks = [];
                for (let i = 0; i < fs.length; i++) {
                    this.state.tasksRefs[i] = React.createRef();
                    const task = new Task(
                        fs[i],
                        (instance) => {
                            uploadFile(
                                'https://www.chatgpt5000.com/ai/select/uploadLotteryImage',
                                instance.data,
                                (percent) => {
                                    const idx = this.state.tasks.findIndex(element => element.id === instance.id);
                                    if (idx < 0) {
                                        console.error('任务可能删除了', this.state.tasks, instance.id)
                                        return;
                                    }
                                    instance.data.progress = percent;
                                    console.log(`uploadFile：${percent}% ${instance.data.progress}`);
                                    this.state.tasks[idx] = instance;
                                    this.setState({});
                                    if (percent === 100) {
                                        instance.successHandle();

                                        // 下面完成后 不显示进度线
                                        setTimeout(()=>{
                                            instance.data.progressHide = true;
                                            this.setState({});
                                        },500)
                                    }
                                },
                                {
                                    'sessionId': '242f2f3f496d40d6b0e038ff46767eb2',
                                },
                                {'historyId': 10},
                            );

                        }, (data) => {
                            console.log('任务完成')
                        },
                    );
                    tasks.push(task);
                    this.queues.addTask(task);
                }
                this.state.tasks = this.state.tasks.concat([...tasks]);
                this.state.haveFiles = true;
                this.calcSize();
                this.setState({});
                this.queues.start();
            }
        });
    }

    calcSize() {
        this.state.size = 0;
        for (const it of this.state.tasks) {
            this.state.size += calculateFileSizeInMB(it.data);
        }
        this.state.size = this.state.size.toFixed(2) // 精度问题 0.999999999997
    }

    clickRemove(index) {
        const rmEl = this.state.tasks.splice(index, 1)[0]; // 从索引index开始，移除1个元素
        this.setState({});
        this.queues.removeAt(rmEl.id);
    }

    clickConversions() {
        this.queues = new Queues();
        const tasks = [];
        for (let i = 0; i < this.state.tasks.length; i++) {
            const task = new Task(
                this.state.tasks[i].data,
                (instance) => {
                    uploadFile(
                        'https://www.chatgpt5000.com/ai/select/uploadLotteryImage',
                        instance.data,
                        (percent) => {
                            const idx = this.state.tasks.findIndex(element => element.id === instance.id);
                            if (idx < 0) {
                                console.error('任务可能删除了', this.state.tasks, instance.id)
                                return;
                            }
                            instance.data.progress = 100;
                            instance.data.progress2 = percent;
                            console.log(`uploadFile：${percent}% ${instance.data.progress2}`);
                            this.state.tasks[idx] = instance;
                            this.setState({});
                            if (percent === 100) {
                                instance.successHandle();
                            }
                        },
                        {
                            'sessionId': '242f2f3f496d40d6b0e038ff46767eb2',
                        },
                        {'historyId': 10},
                    );

                }, (data) => {
                    console.log('任务完成')
                },
            );
            tasks.push(task);
            this.queues.addTask(task);
        }
        this.state.tasks = tasks;
        this.state.haveFiles = true;
        this.calcSize();
        this.setState({});
        this.queues.start();
    }

    downloadAll() {
        const files = [];
        for (const it of this.state.tasks) {
            files.push(it.data);
        }
        FileUtil.zipDownload(files);
    }

    onChange(value) {
        console.log(value)
    }

    onChangeAll(value) {
        for (const valueElement of this.state.tasksRefs) {
            valueElement.current.notifyChange(value);
        }
    }

    render() {
        return (
            <div id={'drop_file'} style={{width: '100%'}}>
                {
                    this.state.tasks.length === 0 &&
                    <div className='col covert-content-box-no'>
                        <h6 style={{height: 29}}></h6>
                        <h3>文件转换器</h3>
                        <h6 style={{height: 44}}></h6>
                        <div className='col'>
                            <h6 style={{height: 54}}></h6>
                            <button onClick={() => this.dropUtil.open()}>选择文件</button>
                            <h6 style={{height: 13}}></h6>
                            <p>最多50个，每个最大10MB或 <a style={{cursor: 'pointer'}}
                                                          onClick={() => openLogin(2)}>注册</a>
                            </p>
                        </div>
                        <h6 style={{height: 97}}></h6>
                    </div>
                }
                {
                    this.state.tasks.length !== 0 &&
                    <div id={'bannerCovert'} className={'col w-1280 covert-content-box'}>
                        <h6 style={{height: 30}}></h6>
                        <div className={'row covert-content-box-title'}>
                            <h3>
                                Ready
                                <span>{this.state.tasks.length} <em>files</em> | {this.state.size} MB <em>TOTAL</em></span>
                            </h3>
                            <button onClick={() => this.downloadAll()}><img src="images/covert/icon_download_all.svg"
                                                                            alt=""/>下载所有文件
                            </button>
                        </div>
                        <h6 style={{height: 25}}></h6>
                        {
                            this.state.haveFiles &&
                            <ul>
                                {this.state.tasks.map((item, index) => (
                                    <li key={index}>
                                        <div className={'covert-content-box-ul-li-content'}>
                                            <img className={'covert-content-box-ul-li-thumbnail'}
                                                 src="images/covert/icon_img.svg"
                                                 alt=""/>
                                            <div className={'covert-content-box-ul-div'}>
                                                <h4>{item.data.name}</h4>
                                                <p>{calculateFileSizeInMB(item.data)}MB</p>
                                            </div>
                                            {
                                                item.data.progress === 100 &&
                                                <div className={'covert-content-box-ul-div-to'}>
                                                    至
                                                    <div className={'covert-content-box-ul-div-select'}>
                                                        <ConversionsPicker ref={this.state.tasksRefs[index]} onChange={this.onChange}></ConversionsPicker>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                item.data.progress === undefined &&
                                                <div className={'covert-content-box-ul-div-res'}>已就绪</div>
                                            }
                                            {
                                                item.data.progress !== undefined &&
                                                item.data.progress !== 100 &&
                                                <div className={'covert-content-box-ul-div-res'}>压缩中</div>
                                            }
                                            {
                                                item.data.progress === 100 &&
                                                item.data.progress2 === undefined &&
                                                <div className={'covert-content-box-ul-div-res'}>已压缩</div>
                                            }
                                            {
                                                item.data.progress === 100 &&
                                                item.data.progress2 !== undefined &&
                                                item.data.progress2 !== 100 &&
                                                <div className={'covert-content-box-ul-div-res'}>转换中</div>
                                            }
                                            {
                                                item.data.progress2 === 100 &&
                                                <div className={'covert-content-box-ul-div-res'}>已转换</div>
                                            }
                                            <div className={'covert-content-box-ul-div-options'}>
                                                {
                                                    (
                                                        (
                                                            item.data.progress === 100 &&
                                                            item.data.progress2 === undefined
                                                        ) ||
                                                        (
                                                            item.data.progress2 === 100
                                                        )
                                                    ) &&
                                                    <div className={'covert-content-box-ul-div-num'}>
                                                        -68%
                                                        <span>100kb</span>
                                                    </div>
                                                }
                                                {
                                                    (
                                                        (
                                                            item.data.progress === 100 &&
                                                            item.data.progress2 === undefined
                                                        ) ||
                                                        (
                                                            item.data.progress2 === 100
                                                        )
                                                    ) &&
                                                    <button onClick={() => ImageUtil.download(item.data)}>
                                                        <img src="images/covert/icon_download.svg" alt=""/>
                                                        PNG
                                                    </button>
                                                }
                                            </div>
                                            <img className={'covert-content-box-ul-li-close'}
                                                 src="images/covert/icon_close.svg" alt=""
                                                 onClick={() => this.clickRemove(index)}/>
                                        </div>
                                        <div className={'covert-content-box-ul-li-compresses'}>
                                            {
                                                item.data.progressHide ?
                                                    null
                                                    :
                                                    <span style={{width: `${item.data.progress}%`}}></span>
                                            }
                                        </div>
                                        <div className={'covert-content-box-ul-li-conversions'}
                                             style={{width: `${item.data.progress2}%`}}>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        }
                        {
                            !this.state.haveFiles &&
                            <div id={'covert-content-box-drop_file'}></div>
                        }

                        <div className={'row covert-content-box-footer'}>
                            <div className={'covert-content-box-footer-div'}>
                                <button className={'row covert-content-box-footer-add'}
                                        onClick={() => this.dropUtil.open()}>
                                    <img src="images/covert/icon_add.svg" alt=""/>
                                    添加更多文件
                                </button>
                                <div className={'covert-content-box-footer-div-share'}>
                                    <img src="images/covert/icon_wei_bo.svg" alt=""/>
                                    <img src="images/covert/icon_wei_xin.svg" alt=""/>
                                </div>
                                <div className={'covert-content-box-footer-div-all'}>
                                    <ConversionsPicker onChange={(value)=>this.onChangeAll(value)}>
                                        <span>将所有转换为</span>
                                        <img src="images/covert/icon_arrow_down.svg" alt="" width={13}/>
                                    </ConversionsPicker>
                                </div>
                                <div className={'covert-content-box-footer-div-switch'}>
                                <Switch checked={this.state.allSwitchChecked}
                                            onChange={(value)=>{this.state.allSwitchChecked = value;this.setState({})}}/>
                                    <span>预压缩头像</span>
                                </div>
                            </div>
                            <button className={'row covert-content-box-footer-submit'}
                                    onClick={() => this.clickConversions()}>转 换
                            </button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export class ConversionsPicker extends React.Component {
    // hideButton;
    constructor(props) {
        super(props);
        // this.hideButton = props.hideButton || false;
    }

    state = {
        visible: false,
        type: '',
    }
    keyword = ''
    searchResult = []
    options = {
        '图像': [
            'PNG',
            'JPG',
            'GIF',
            'ICO',
        ],
        '视频': [
            'AVI',
            'MP4',
            'MKV',
            'WEBM',
            'WEBM',
            'WEBM',
            'WEBM',
            'WEBM',
            'WEBM',
            'WEBM',
            'WEBM',
            'WEBM',
            'WEBM',
            'WEBM',
            'WEBM',
            'WEBM',
            'WEBM',
            'WEBM',
        ],
        '文档': [
            'PDF',
            'PDF',
            '7z',
            'ZIP',
            'ZIP',
            'ZIP',
            'ZIP',
            'ZIP',
            'ZIP',
            'ZIP',
            'ZIP',
            'ZIP',
        ],
    }
    onChange(type){
        this.state.type = type;
        this.props.onChange(type);
        this.onHide()
    }
    onShow(){
        this.state.visible = true;
        this.setState({})
    }
    onHide(){
        this.state.visible = false;
        this.setState({})
    }
    notifyChange(value){
        this.onChange(value)
    }
    onInput(event){
        this.keyword = event.target.value;
        this.searchResult = [];
        for (const key in this.options) {
            const arr = this.options[key]
            arr.forEach(item=>{
                const a = item.toLowerCase()
                const b = this.keyword.toLowerCase()
                if(a.indexOf(b) > -1){
                    this.searchResult.push(item);
                }
            })
        }
        console.log(this.searchResult)
        this.setState({})
    }
    onCleanInput(){
        this.keyword = '';
        this.searchResult = [];
        this.setState({})
    }
    render() {
        const hasChildren = React.Children.count(this.props.children) > 0;
        return (
            <Popover
                popupVisible={this.state.visible}
                trigger='click'
                className={'ConversionsPicker-btn'}
                content={
                    <div className={'ConversionsPicker'}>
                        <div className={'ConversionsPicker-mask'} onClick={()=>this.onHide()}></div>
                        <div className={'ConversionsPicker-search'}>
                            {/*<img src="images/home/网址图标.svg"/>*/}
                            <input type="text" placeholder='搜索' value={this.keyword} onInput={(event)=>this.onInput(event)}/>
                            {
                                this.keyword !== '' &&
                                <img className="ConversionsPicker-search-close" src="images/covert/icon_close.svg" alt="" onClick={()=>this.onCleanInput()}/>
                            }
                        </div>
                        {
                            this.keyword !== '' ?
                                <ul className={'ConversionsPicker-search-result'}>
                                    {this.searchResult.map(it => (
                                        <li key={it} onClick={() => this.onChange(it)}>{it}</li>
                                    ))}
                                </ul>
                                :
                                <Tabs key='card' tabPosition={'left'}>
                                    {Object.keys(this.options).map(category => (
                                        <TabPane key={category} title={category}>
                                            <ul className={'ConversionsPicker-options-default'}>
                                                {this.options[category].map(type => (
                                                    <li key={type} onClick={() => this.onChange(type)}>{type}</li>
                                                ))}
                                            </ul>
                                        </TabPane>
                                    ))}
                                </Tabs>
                        }
                    </div>
                }>
                {
                    hasChildren ?
                        <span className={'ConversionsPicker-custom'} onClick={() => this.onShow()}>
                            {this.props.children}
                        </span>
                        :
                        <button className={'ConversionsPicker-btn-btn'} onClick={()=>this.onShow()}>
                            {
                                this.state.type !== '' ? this.state.type : <span>···</span>
                            }
                            <img src="images/covert/icon_arrow_down.svg" alt="" width={13}/>
                        </button>
                }
            </Popover>
        );
    }
}