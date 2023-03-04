import {creatMSG} from "./src/index.js"
creatMSG()  //挂载组件
console.log(window)
const {info, success, warning, error, plain} = $ALERTMSG.alert
const {notification} = $ALERTMSG
const {open} = $ALERTMSG.confirm
document.querySelector("#add").addEventListener("click", () => {
    info()
    success()
    warning()
    error()
    plain()
    notification.info()
    notification.success()
    notification.warning()
    notification.error()
    notification.plain()
    // open({
    //     content:"您确定继续进行？", 
    //     mask: true, 
    //     btnOK: "OK", 
    //     btnCancel: "Cancel",
    //     OKFun: () => {
    //         console.log("您点击了确定！", open)
    //     },
    // })
})