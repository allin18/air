import clsx from 'clsx';

import '../../css/page.scss';
import styles from './index.module.scss';

export default function Home() {
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
            <h3>
              <b>免费</b> 转换 无损压缩
            </h3>
            <p>我们致力于数字格式的无缝转化</p>
            <button>开始</button>
          </div>
          <div className={clsx('col', styles.contentWidth, styles.contentCovert)}>
            <div className='col'>
              <h3>文件转换器</h3>
              <div className='col'>
                <button>选择文件</button>
                <p>最多50个，每个最大10MB或 注册</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentGrey}>
          <div className={clsx('col', styles.contentWidth, styles.contentIntro)}>
            <h3>在线免费文件转换</h3>
            <p>为所有人免费提供一个快捷便利的在线文件转换工具，并为设计开发者定制解决方案， 加速数字文件的优化进程。</p>
            <ul>
              <li>
                <div>
                  <div><img src="images/home/支持各种文件格式icon.svg" alt=""/>支持各种文件格式</div>
                  我们支持不同的文件格式间多种不同的灵活转换方式，包括对图像和文件的无损压缩转换等图像后期在线处理功能 。
                </div>
              </li>
              <li>
                <div>
                  <div><img src="images/home/支持所有设备icon.svg" alt=""/>支持所有设备</div>
                  Turbulence基于浏览器并支持所有平台。您无需下载与安装任何软件。
                </div>
              </li>
              <li>
                <div>
                  <div><img src="images/home/云端处理icon.svg" alt=""/>云端处理</div>
                  所有转换都在云端进行，不会消耗您计算机的资源。
                </div>
              </li>
              <li>
                <div>
                  <div><img src="images/home/安全保障icon.svg" alt=""/>安全保障</div>
                  我们将立即删除已上传的文件，并在 24 小时后删除已转换的文件。任何人都无法访问您的文件，我们可确保您的隐私
                  100%安全。
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={clsx('col', styles.contentWidth, styles.contentShowImage)}>
          <h3>你能找出它们的不同吗?</h3>
          <p>拖动滑块，您可以将压缩前后的图像进行比较,令人惊奇的是文件大小减少了85%以上！</p>
          <img src="" alt=""/>
        </div>
        <div className={styles.contentBlack}>
          <div className={clsx('col', styles.contentWidth, styles.contentOptimize)}>
            <div className='col'>
              <h3>试试我们可以</h3>
              <p>优化您网站的性能</p>
              <div className=''>
                <img src="images/home/网址图标.svg"/>
                <input type="text"/>
                <button>立即分析</button>
              </div>
            </div>
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
