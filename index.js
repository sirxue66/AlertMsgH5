import alert from "./lib/alert.js"
import notification from "./lib/notification.js"
import modal from "./lib/modal.js"

export function creatMSG(WM = "_$ALERTMSG"){
    if(!window){
        throw new Error("请在浏览器环境中使用！")
    }
    if(window[WM]){
        throw new Error("请初始化一个唯一的组件名称！")
    }
    window[WM]= {
        alert,
        notification,
        modal
    }
}

// --------------------------------------------
creatMSG()
console.log(window)
const {info, success, warning, error, plain} = _$ALERTMSG.alert
const {open} = _$ALERTMSG.modal
document.querySelector("#add").addEventListener("click", () => {
    // info()
    // success()
    // warning()
    // error()
    // plain()
    open({})
})