// 倒计时
// 倒计时
export class CountdownTimer {
    constructor(duration = 60) {
        this.duration = duration; // 倒计时总时长，默认为60秒
        this.timer = null; // 定时器
        this.onTick = null; // 每秒触发的回调函数
        this.onComplete = null; // 倒计时结束时的回调函数
    }

    start() {
        let remainingTime = this.duration;

        this.timer = setInterval(() => {
            remainingTime--;

            if (typeof this.onTick === 'function') {
                this.onTick(remainingTime);
            }

            if (remainingTime <= 0) {
                this.stop();
                if (typeof this.onComplete === 'function') {
                    this.onComplete();
                }
            }
        }, 1000); // 每秒执行一次
    }

    stop() {
        clearInterval(this.timer);
    }
}
// export class CountDown {
//     count = 60;
//     start(change, ownCall = false) {
//         const handler = () => {
//             this.count = this.count - 1;
//             change(this.count);
//             if (this.count > 1) {
//                 this.start(change, true)
//             }else {
//                 this.count = 60;
//             }
//         }
//         setTimeout(handler, 1000);
//         if (!ownCall) {
//             handler();
//         }
//     }
// }
