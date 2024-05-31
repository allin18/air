**调用函数**
```js
air.uploadRole();
```

**调用示例**
```js
let roleParams = {
    "dataType": "TYPE_ENTER_GAME",
    "roleID": "6550219",
    "roleName": "王佐唐圆皓",
    "roleLevel": "11",
    "serverID": 219,
    "serverName": "S12按兵不动",
}
// 方式1
air.uploadRole(roleParams).then(result => {
    console.log(result) // => true|false
})
// 方式2 async/await
var result = await air.uploadRole(roleParams)
console.log(result) // => true|false
```

**请求参数**
> 注意：以下参数中，带 * 号的，为必传参数，不能为空

| 参数名称        | 参数说明                                       | 备注                      |
| :-------------- | :--------------------------------------------- | :------------------------ |
| RoleParams      | 角色信息                                       |                           |
| *  dataType     | 上报类型，包含以下几种                         | 必传，不能为空            |
|                 | TYPE_SELECT_SERVER                             | 选择服务器 ，选接         |
|                 | TYPE_CREATE_ROLE                               | * 创建角色 ，此类型为必接 |
|                 | TYPE_ENTER_GAME                                | * 进入游戏 ，此类型为必接 |
|                 | TYPE_LEVEL_UP                                  | * 角色升级 ，此类型为必接 |
|                 | TYPE_EXIT_GAME                                 | 角色退出游戏 ，选接       |
|                 | TYPE_ENTER_COPY                                | 进入副本 ，选接           |
|                 | TYPE_EXIT_COPY                                 | 退出副本 ，选接           |
|                 | TYPE_VIP_LEVELUP                               | vip升级 ，选接            |
| *   roleID      | 角色ID                                         | 必传，不能为空            |
| *  roleName     | 角色名称                                       | 必传，不能为空            |
| *   roleLevel   | 角色等级                                       | 必传，不能为空            |
| *   serverID    | 角色所在服务器ID                               | 必传，不能为空            |
| *   serverName  | 角色所在服务器名称                             | 必传，不能为空            |
| roleCreateTime  | 角色创建时间，从1970年到现在的时间，单位秒     |                           |
| roleLevelUpTime | 角色等级变化时间，从1970年到现在的时间，单位秒 |                           |
| vip             | vip等级                                        |                           |
| roleGender      | 角色性别                                       | 0:男，1：女               |
| professionID    | 职业ID                                         |                           |
| professionName  | 职业名称                                       |                           |
| power           | 战力                                           |                           |
| partyID         | 帮会，公会ID                                   |                           |
| partyName       | 帮会，公会名称                                 |                           |
| partyMasterID   | 帮会，公会会长ID                               |                           |
| partyMasterName | 帮会，公会会长名称                             |                           |
