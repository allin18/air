**调用函数**
```objc
[air.sharedInstance login];

// 登录成功后返回字段可根据返回字段，进行下一步操作
- (void)onResultCode:(int)code method:(GSCallbackType)method result:(NSString *)result andExtendCode:(int)extendCode {
    if (method == GSCallbackType_LOGIN) {
         //登录成功
  }
}
```

**调用示例**
```csharp
private void OnGSCallback(string module, string func, string result)
{
if (module == GSUnityConstants.Module.Platform && func == GSUnityConstants.Func.Platform.Login)
{
// 处理登录回调
}
}
```