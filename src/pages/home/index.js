import clsx from 'clsx';
import React, { useState } from 'react';

import '../../css/page.scss';
import './index.scss';
import styles from './index.module.scss';
import ImageComparisonSlider from "./_ImageComparisonSlider";

export default function Home() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
      <div className="page">
        <div className={styles.header}>
          <div>
            <img src="img/logo.svg"/>
            Turbulence
          </div>
          <ul>
            <li>压缩</li>
            <li>转换</li>
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
            <button className={styles.homeButton}>登录</button>
          </div>
        </div>
        <div className={styles.contentBlack}>
          <div className={clsx(styles.contentWidth, styles.contentBanner)}>
            <img src="images/home/banner.jpg"/>
            <div>
              <h3>
                <b>免费</b>&nbsp;转换&nbsp;&nbsp;&nbsp;无损压缩
              </h3>
              <p>我们致力于数字格式的无缝转化</p>
              <button>开始</button>
            </div>
          </div>
          <div className={clsx('col', styles.contentWidth, styles.contentCovert)}>
            <div className='col'>
              <h3>文件转换器</h3>
              <div className='col'>
                <button>选择文件</button>
                <p>最多50个，每个最大10MB或 <a href="">注册</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentGrey}>
          <div className={clsx('col', styles.contentWidth1280, styles.contentIntro)}>
            <h6 style={{height: 120}}></h6>
            <h3>在线免费文件转换</h3>
            <h6 style={{height: 80}}></h6>
            <p>为所有人免费提供一个快捷便利的在线文件转换工具，并为设计开发者定制解决方案， 加速数字文件的优化进程。</p>
            <h6 style={{height: 100}}></h6>
            <ul>
              <li>
                <div>
                  <div><img src="images/home/支持各种文件格式icon.svg" alt="" width="123px"/>支持各种文件格式</div>
                  <p>我们支持不同的文件格式间多种不同的灵活转换方式，包括对图像和文件的无损压缩转换等图像后期在线处理功能 。</p>
                </div>
              </li>
              <li>
                <div>
                  <div><img src="images/home/支持所有设备icon.svg" alt="" width="126px"/>支持所有设备</div>
                  <p>Turbulence基于浏览器并支持所有平台。您无需下载与安装任何软件。</p>
                </div>
              </li>
              <li>
                <div>
                  <div><img src="images/home/云端处理icon.svg" alt="" width="107px"/>云端处理</div>
                  <p>所有转换都在云端进行，不会消耗您计算机的资源。</p>
                </div>
              </li>
              <li>
                <div>
                  <div><img src="images/home/安全保障icon.svg" alt="" width="129px"/>安全保障</div>
                  <p>我们将立即删除已上传的文件，并在 24 小时后删除已转换的文件。任何人都无法访问您的文件，我们可确保您的隐私100%安全。</p>
                </div>
              </li>
            </ul>
            <h6 style={{height: 200}}></h6>
          </div>
        </div>
        <div className={clsx('col', styles.contentWidth1280, styles.contentShowImage)}>
          <h6 style={{height: 120}}></h6>
          <h3>你能找出它们的不同吗?</h3>
          <h6 style={{height: 60}}></h6>
          <p>拖动滑块，您可以将压缩前后的图像进行比较,令人惊奇的是文件大小减少了85%以上！</p>
          <h6 style={{height: 100}}></h6>
          <div>
            <ImageComparisonSlider></ImageComparisonSlider>
            <span>BEFORE<em>1.5MB</em></span>
            <span>AFTER<em>210KB</em></span>
          </div>
          <h6 style={{height: 170}}></h6>
        </div>

        <div className={styles.contentBlack}>
          <h6 style={{height: 110}}></h6>
          <div className={clsx('row', styles.contentWidth1280, styles.contentOptimize)}>
            <h6 style={{width: 90}}></h6>
            <div className='col'>
              <h6 style={{height: 40}}></h6>
              <p>试试我们可以</p>
              <h6 style={{height: 20}}></h6>
              <h3>优化您网站的性能</h3>
              <h6 style={{height: 30}}></h6>
              <div>
                <label htmlFor="">
                  <img src="images/home/网址图标.svg"/>
                  <input type="text"/>
                </label>
                <button>立即分析</button>
              </div>
              <h6 style={{height: 50}}></h6>
            </div>
            <h6 style={{width: 90}}></h6>
          </div>
          <h6 style={{height: 110}}></h6>
        </div>
        <div className={clsx(styles.contentGrey)}>
          <div className={clsx('col', styles.contentWidth1280, styles.contentFAQ)}>
            <h6 style={{height: 50}}></h6>
            <h3>常见问题解答(FAQ)</h3>
            <h6 style={{height: 50}}></h6>
            <ul>
              <li>
                turbulence的用途是什么？
                <img src="" alt=""/>
              </li>
              <li>
                turbulence的用途是什么？
                <img src="" alt=""/>
              </li>
              <li>
                turbulence的用途是什么？
                <img src="" alt=""/>
              </li>
              <li>
                turbulence的用途是什么？
                <img src="" alt=""/>
              </li>
            </ul>
            <h6 style={{height: 40}}></h6>
            <h4>查看更多 <img src="" alt=""/></h4>
            <h6 style={{height: 45}}></h6>
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
          <ul className={clsx('row', styles.contentWidth, styles.contentCount)}>
            <li><span>32</span>服务器</li>
            <li>已在线转换文件<span>77777</span>个</li>
            <li>已在线转换文件<span>999999</span>GB</li>
          </ul>
        </div>
      </div>
  );
}
