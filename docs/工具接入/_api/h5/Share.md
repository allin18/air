**调用函数**
```js
air.share({});
```

**调用示例**
```js
let params = {
    "extension": "extension",
    "sourceUrl": "https://www.baidu.com/",
    "notifyIconText": "notify icon text",
    "notifyIcon": "assets/icon.png",
    "sourceName": "source name",
    "title": "分享",
    "content": "分享内容",
    "imgUrl": "https://img.7yz.com/m00/e6/84/fb71069f85ed3d1530969c827181e43e.jpg",
    "titleUrl": "https://www.baidu.com/",
    "url": "https://www.baidu.com/",
}
// 方式1
air.share(params).then(result => {
    console.log(result) // => true|false
})
// 方式2 async/await
var result = await air.uploadRole(params)
console.log(result) // => true|false
```

**请求参数**
> 注意：以下参数中，带 * 号的，为必传参数，不能为空

| 参数名称    | 描述/参数          | 备注                                         | 分享平台 |
| ----------- | ------------------ | -------------------------------------------- | -------- |
| ShareParams | 需要翻译的内容主体 |                                              |          |
|             | title              | 分享的标题，最大30个字符                     |          |
|             | titleUrl           | 标题链接                                     |          |
|             | sourceName         | 分享此内容显示的出处名称                     |          |
|             | sourceUrl          | 出处链接                                     |          |
|             | content            | 内容，最大130个字符                          |          |
|             | url                | 链接，微信分享的时候会用到                   |          |
|             | imgUrl             | 图片地址                                     |          |
|             | dialogMode         | 是否全屏还是对话框                           |          |
|             | notifyIcon         | Notification的图标                           |          |
|             | notifyIconText     | Notification的文字                           |          |
|             | comment            | 内容的评论，人人网分享必须参数，不能为空     |          |
|             | extension          | 扩展参数                                     |          |
|             | ShareType          | 支持分享平台，参照：支持分享的平台参数对照表 |          |

* **支持分享的平台**

| 分享平台          | 描述                   |
| ----------------- | ---------------------- |
| WEIXIN            | 分享到微信             |
| WEIXIN_CIRCLE     | 分享到微信朋友圈       |
| WEIXIN_FAVORITE   | 分享到微信收藏         |
