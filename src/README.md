# 欢迎使用AlertMsgH5

***AlertMsgH5是一套轻量级的消息提示组件库，不依赖任何视图框架，纯js编写，开箱即用***
***项目依赖浏览器，不可脱离window环境，因为组件都是直接挂载到window上边的，一处挂载，全局使用***
***本组件适合于一些封装库、或者不需要大量使用UI却需要进行消息提示的项目使用***
***组件库 提供alert消息提示、confirm消息确认、notification通知提示三种组件***
***原生开发请前往[仓库](https://github.com/sirxue66/AlertMsgH5.git)使用打包后的文件，npm下载使用，请确保您的项目使用了css-loader和style-loader来处理css，***
***

[在线预览](http://localhost/)

[git仓库](https://github.com/sirxue66/AlertMsgH5.git)

### Alert
***分开传参***

| 方法  | 参数 |
| ------------- | ------------- |
| info  | content: string -->提示内容 <br>delay: number -->关闭延迟，默认3秒  |
|success | content: string -->提示内容 <br>delay: number -->关闭延迟，默认3秒 |
|warning | content: string -->提示内容 <br>delay: number -->关闭延迟，默认3秒 |
|error |content: string -->提示内容 <br>delay: number -->关闭延迟，默认3秒   |
|plian | content: string -->提示内容 <br>delay: number -->关闭延迟，默认3秒  |

**示例**
```javascript
import { creatMSG } from "alertmsgh5"
creatMSG("$ALERTMSG")  //挂载组件到window上(默认传参“$ALERTMSG")
console.log(window)
const {info, success, warning, error, plain} = $ALERTMSG.alert
info("消息提示", 3000)
success("成功提示", 3000)

```

### Notification
***对象传参***

| 方法  | 参数 |
| ------------- | ------------- |
| info  | title: string -->标题 <br> content: string -->提示内容 <br>delay: number -->关闭延迟，默认3秒|
|success | title: string -->标题 <br> content: string -->提示内容 <br>delay: number -->关闭延迟，默认3秒|
|warning | title: string -->标题 <br> content: string -->提示内容 <br>delay: number -->关闭延迟，默认3秒|
|error | title: string -->标题 <br> content: string -->提示内容 <br>delay: number -->关闭延迟，默认3秒 |
|plian | title: string -->标题 <br> content: string -->提示内容 <br>delay: number -->关闭延迟，默认3秒  |

**示例**
```javascript
import { creatMSG } from "alertmsgh5"
creatMSG("$ALERTMSG")  //挂载组件到window上(默认传参“$ALERTMSG")

const {info, success, warning, error, plain} = $ALERTMSG.notification
info({
	title: "系统提示",
	content: "这是系统提示",
	delay: 3000
})
success({
	title: "系统提示",
	content: "这是成功提示",
	delay: 3000
})

```

### Confirm
***对象传参***

| 方法  | 参数 |
| ------------- | ------------- |
| open  | mask: boolean -->是否打开遮罩<br> content: string -->提示内容,支持html字符串 <br>btnOK: string -->确认按钮文字<br>btnCancel: string -->取消按钮文字<br>OKFun: function -->确定的回调<br>CancelFun: function -->取消的回调 |

**示例**
```javascript
import { creatMSG } from "alertmsgh5"
creatMSG("$ALERTMSG")  //挂载组件到window上(默认传参“$ALERTMSG")

const { open } = $ALERTMSG.confirm
open({
	mask: true,
	content: "确定继续进行吗？",
	btnOK: "确定",
	btnCancel: "取消",
	OKFun: () => {},
	CancelFun: () => {}
})

```














