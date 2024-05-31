**调用函数**
```java
GSUser.getInstance().login();
```

**调用示例**
```java
private void OnGSCallback(string module, string func, string result)
{
if (module == GSUnityConstants.Module.Platform && func == GSUnityConstants.Func.Platform.Login)
{
// 处理登录回调
}
}
```