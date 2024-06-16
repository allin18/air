import clsx from 'clsx';
import React, { useState, useRef, useCallback } from 'react';

import { Collapse } from '@arco-design/web-react';
const CollapseItem = Collapse.Item;

import '../../css/page.scss';
import './index.scss';
import styles from './index.module.scss';
import ImageComparisonSlider from "./_ImageComparisonSlider";
import LoginModal from "./_LoginModal";

export default function Home() {
  const refLoginModal = useRef();

  const openLogin = (mode = 1) => {
    if (refLoginModal.current) {
      refLoginModal.current.open(mode); // 调用子组件的方法
    }
  };

  return (
      <div className="page">
        <div className={styles.contentBlack141414}>
          <div className="w-1440">
            <div className={clsx('w-1280', styles.header)}>
              <div>
                <img src="img/logo.svg"/>
                Turbulence
              </div>
              <ul>
                <li>
                  压缩
                  <img src="images/home/下拉箭头1.svg" alt=""/>
                  <div>
                    <a className={styles.on} href="">图像压缩</a>
                    <a href="">视频压缩</a>
                    <a href="">文件压缩</a>
                    <a href="">音频压缩</a>
                  </div>
                </li>
                <li>
                  转换
                  <img src="images/home/下拉箭头1.svg" alt=""/>
                  <div>
                    <a className={styles.on} href="">文档转换</a>
                    <a href="">图像转换</a>
                    <a href="">视频转换</a>
                    <a href="">音频转换</a>
                  </div>
                </li>
                <li>OCR</li>
                <li>API</li>
                <li>定价</li>
                <li>支持</li>
              </ul>
              <div>
                <div>
                  <img src="images/home/文件夹icon.svg"/>
                  <span>66</span>
                </div>
                <div>
                  <img src="images/home/语言icon.svg"/>
                </div>
                <button className={styles.homeButton} onClick={() => openLogin(1)}>登录</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentBlack}>
          <div className="w-1440">
            <div className={clsx('w-1280', styles.contentBanner)}>
              <img src="images/home/banner.jpg"/>
              <div className='col'>
                <h6 style={{height: 83}}></h6>
                <h3>
                  <b>免费</b>&nbsp;转换&nbsp;&nbsp;&nbsp;无损压缩
                </h3>
                <h6 style={{height: 40}}></h6>
                <p>我们致力于数字格式的无缝转化</p>
                <h6 style={{height: 81}}></h6>
                <button>开始</button>
              </div>
            </div>
            <div className={clsx('col w-1280', styles.contentCovert)}>
              <div className='col'>
                <h6 style={{height: 29}}></h6>
                <h3>文件转换器</h3>
                <h6 style={{height: 44}}></h6>
                <div className='col'>
                  <h6 style={{height: 54}}></h6>
                  <button>选择文件</button>
                  <h6 style={{height: 13}}></h6>
                  <p>最多50个，每个最大10MB或 <a style={{cursor: 'pointer'}} onClick={() => openLogin(2)}>注册</a></p>
                </div>
                <h6 style={{height: 97}}></h6>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentGrey}>
          <div className={clsx('col w-1000', styles.contentIntro)}>
            <h6 style={{height: 80}}></h6>
            <h3>在线免费文件转换</h3>
            <h6 style={{height: 62}}></h6>
            <p>为所有人免费提供一个快捷便利的在线文件转换工具，并为设计开发者定制解决方案， 加速数字文件的优化进程。</p>
            <h6 style={{height: 87}}></h6>
            <ul>
              <li>
                <div>
                  <div>
                    <img src="images/home/支持各种文件格式icon.svg" alt=""/>
                    <span>支持各种文件格式</span>
                  </div>
                  <p>我们支持不同的文件格式间多种不同的灵活转换方式，包括对图像和文件的无损压缩转换等图像后期在线处理功能 。</p>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <img src="images/home/支持所有设备icon.svg" alt=""/>
                    <span>支持所有设备</span>
                  </div>
                  <p>Turbulence基于浏览器并支持所有平台。您无需下载与安装任何软件。</p>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <img src="images/home/云端处理icon.svg" alt=""/>
                    <span>云端处理</span>
                  </div>
                  <p>所有转换都在云端进行，不会消耗您计算机的资源。</p>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <img src="images/home/安全保障icon.svg" alt=""/>
                    <span>安全保障</span>
                  </div>
                  <p>我们将立即删除已上传的文件，并在 24 小时后删除已转换的文件。任何人都无法访问您的文件，我们可确保您的隐私100%安全。</p>
                </div>
              </li>
            </ul>
            <h6 style={{height: 75}}></h6>
          </div>
        </div>
        <div className={clsx('col', styles.contentShowImage)}>
          <h6 style={{height: 80}}></h6>
          <h3>你能找出它们的不同吗?</h3>
          <h6 style={{height: 56}}></h6>
          <p>拖动滑块，您可以将压缩前后的图像进行比较,令人惊奇的是文件大小减少了85%以上！</p>
          <h6 style={{height: 50}}></h6>
          <div>
            <ImageComparisonSlider></ImageComparisonSlider>
            {/*<span>BEFORE<em>1.5MB</em></span>*/}
            {/*<span>AFTER<em>210KB</em></span>*/}
          </div>
          <h6 style={{height: 100}}></h6>
        </div>

        <div className={styles.contentBlack}>
          <h6 style={{height: 110}}></h6>
          <div className={clsx(styles.contentOptimize)}>
            <div className='col'>
              <h6 style={{height: 41}}></h6>
              <p>试试我们可以</p>
              <h6 style={{height: 20}}></h6>
              <h3>优化您网站的性能</h3>
              <h6 style={{height: 42}}></h6>
              <div className='row'>
                <label htmlFor="">
                  <img src="images/home/网址图标.svg"/>
                  <input type="text" placeholder='请输入你的网址'/>
                </label>
                <h6 style={{width: 42}}></h6>
                <button>立即分析</button>
              </div>
              <h6 style={{height: 55}}></h6>
            </div>
          </div>
          <h6 style={{height: 110}}></h6>
        </div>
        <div className={clsx(styles.contentGrey)}>
          <div className={clsx('col', styles.contentFAQ)}>
            <h6 style={{height: 46}}></h6>
            <h3>常见问题解答(FAQ)</h3>
            <h6 style={{height: 40}}></h6>
            <div className='contentFAQ'>
              <Collapse accordion bordered={false}>
                <CollapseItem header={(
                    <div>
                      Bturbulence的用途是什么？
                      <img src="images/home/问答下拉箭头.svg" alt=""/>
                    </div>
                )} name='1'>
                  Beijing Toutiao Technology Co., Ltd.
                </CollapseItem>
                <CollapseItem header={(
                    <div>
                      Bturbulence的用途是什么？
                      <img src="images/home/问答下拉箭头.svg" alt=""/>
                    </div>
                )} name='2'>
                  Beijing Toutiao Technology Co., Ltd.
                </CollapseItem>
                <CollapseItem header={(
                    <div>
                      Bturbulence的用途是什么？
                      <img src="images/home/问答下拉箭头.svg" alt=""/>
                    </div>
                )} name='3'>
                  Beijing Toutiao Technology Co., Ltd.
                </CollapseItem>
              </Collapse>
            </div>
            <h6 style={{height: 26}}></h6>
            <h4>查看更多 <img src="images/home/问答下拉箭头.svg" alt=""/></h4>
            <h6 style={{height: 46}}></h6>
          </div>
        </div>
        <div className={styles.contentBlack222}>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
        <div className={styles.contentBlack}>
          <ul className={clsx('row w-1280', styles.contentCount)}>
            <li><span style={{marginLeft: 0}}>32</span>服务器</li>
            <li>已在线转换文件<span>77777</span>个</li>
            <li>已在线转换文件<span>999999</span>GB</li>
          </ul>
        </div>
        <LoginModal ref={refLoginModal} ></LoginModal>
      </div>
  );
}
