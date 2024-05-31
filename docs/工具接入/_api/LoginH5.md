**调用函数**
```js
air.login();
```

**调用示例**
```js
// 方式1
air.login().then(result => {
    console.log('userInfo', result)
})
// 方式2 async/await
var result = await air.login()
console.log('userInfo', result)
```

**返回示例**
> **登录**成功后，需要解析一下json结构中的userId作为用户唯一ID，sign用于校验
result会返回 JSON 对象字符串参数如下：
```json
{
    "code": 0,
    "data": {
        "userId": "10001_310153892574",
        "isAdult": 1,
        "userName": "310153892574",
        "userNick": "",
        "channelId": 410004,
        "appId": 10100078,
        "isGuest": 0,
        "extension": "",
        "sign": "4306d3162d2be360d193f23b13f11972",
        "userAge": 0,
        "realNameStatus": 1
    },
    "msg": "success",
    "dataType": 0
}
```
| 参数名称 | 参数扩展说明   | 参数类型 |                                                                参数说明 |
| -------- | -------------- | -------- | -----------------------------------------------------------------------:|
| data   |                | json   |                                              登陆成功后，返回的登陆结果 |
|          | appId          | int      |                                                              游戏标记ID |
|          | channelID      | int      |                      air、游卡 SDK、数据收集 SDK 等官方 SDK 的渠道 ID |
|          | userId         | string   |                                                 air 账号系统的 UserId |
|          | userName       | string   |                                               air 账号系统的 UserName |
|          | userNick       | string   |                                                     渠道返回的 userName |
|          | realNameStatus | int      | 0：未实名 1：已实名 2：实名中（此状态需要游戏判断玩家是否可以进入游戏） |
|          | isAdult        | int      |                                                      0：未成年 1 ：成年 |
|          | sign           | string   |      air 服务器验证签名，登陆成功后客户端与服务器验证登陆合法性时使用 |
| dataType |                | int      |                                     账号类型（0：新（GS）、1：topData） |