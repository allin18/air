import clsx from 'clsx';
import React, {useState, useRef, useCallback, useEffect} from 'react';

import '../../css/page.scss';
import './index.scss';
import DropUtil from "../../util/DropUtil";
import LayoutProvider from "@theme/Layout/Provider";
import {HtmlClassNameProvider, PageMetadata} from "@docusaurus/theme-common";
import HomeIndex from "../home";
import Header from "../_common/_header";
import Statistic from "../_common/_statistic";
import {getRandomInt} from "../../util/RandomUtil";

export default function PageCommonEntry() {
    const title = `首页 from `;
    const description = `欢迎 from `;
    return (
        <LayoutProvider>
            <HtmlClassNameProvider className={'myPageHtmlClassName'}>
                <PageMetadata title={title} description={description}/>
                <Content/>
            </HtmlClassNameProvider>
        </LayoutProvider>
    );
}

function Content() {
    const [haveFiles, setHaveFiles] = React.useState(false);
    const [files, setFiles] = React.useState([]);

    useEffect(() => {
        new DropUtil({
            theme: 'simple',
            el: document.getElementById('covert-content-box-drop_file'),
            onChange: async (fs, dom) => {
                // progress: 30
                // lastModified: 1720426148491
                // lastModifiedDate: 'Mon Jul 08 2024 16:09:08 GMT+0800 (中国标准时间)'
                // name: "转换器工具(1)_03.png"
                // size: 1156
                // type : "image/png"
                // webkitRelativePath: ""
                const firstFile = fs[0];
                const fs2 = fs.map(e => {
                    e.progress = getRandomInt(0, 100);
                    return e;
                });
                console.log(fs2);
                setFiles(fs2);
                setHaveFiles(true);
                // for (let i = 0; i < files.length; i++) {
                //
                // }
            }
        });
    }, []);
    return (
        <div className="page">
            <Header></Header>
            <div className={'contentBlack'}>
                <div className="w-1000 covert-content">
                    <div id={'bannerCovert'} className={'col w-1280 covert-content-box'}>
                        <h6 style={{height: 30}}></h6>
                        <div className={'row covert-content-box-title'}>
                            <h3>Ready</h3>
                            <button>下载所有文件</button>
                        </div>
                        <h6 style={{height: 25}}></h6>
                        {
                            haveFiles &&
                            <ul>
                                {files.map((item, index) => (
                                    <li key={index}>
                                        <img className={'covert-content-box-ul-li-thumbnail'}
                                             src="images/covert/icon_img.png"
                                             alt=""/>
                                        <div className={'covert-content-box-ul-div'}>
                                            <h4>{item.name}</h4>
                                            <p>{item.size}kb</p>
                                        </div>
                                        <button>PNG</button>
                                        <img className={'covert-content-box-ul-li-close'}
                                             src="images/covert/icon_close.png" alt=""/>
                                    </li>
                                ))}
                            </ul>
                        }
                        {
                            !haveFiles &&
                            <div id={'covert-content-box-drop_file'}></div>
                        }

                        <div className={'row covert-content-box-footer'}>
                            <div className={'covert-content-box-footer-div'}>
                                <button className={'row covert-content-box-footer-add'}>添加更多文件</button>
                                <img src="images/covert/icon_img.png" alt=""/>
                                <img src="images/covert/icon_img.png" alt=""/>
                            </div>
                            <button className={'row covert-content-box-footer-submit'}>转换</button>
                        </div>
                    </div>
                </div>
            </div>
            <Statistic></Statistic>
        </div>
    );
}
