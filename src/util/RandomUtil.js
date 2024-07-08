// 使用该函数生成0到100之间的随机数
// let randomNumber = getRandomInt(0, 100);
// console.log(randomNumber);
export function getRandomInt(min, max) {
    min = Math.ceil(min); // 最小值是包含在内的
    max = Math.floor(max); // 最大值是包含在内的
    return Math.floor(Math.random() * (max - min + 1)) + min;
}