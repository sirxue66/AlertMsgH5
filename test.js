import {creatMSG} from "./src/index.js"
creatMSG()  //挂载组件
console.log(window)
const {info, success, warning, error, plain} = $ALERTMSG.alert
const {notification} = $ALERTMSG
const {open} = $ALERTMSG.confirm
document.querySelector("#info").addEventListener("click", () => {
    info()
})
document.querySelector("#success").addEventListener("click", () => {
    success()
})
document.querySelector("#warning").addEventListener("click", () => {
    warning()
})
document.querySelector("#error").addEventListener("click", () => {
    error()
})
document.querySelector("#plain").addEventListener("click", () => {
    plain()
})

document.querySelector("#infoC").addEventListener("click", () => {
    notification.info()
})
document.querySelector("#successC").addEventListener("click", () => {
    notification.success()
})
document.querySelector("#warningC").addEventListener("click", () => {
     notification.warning()
})
document.querySelector("#errorC").addEventListener("click", () => {
    notification.error()
})
document.querySelector("#plainC").addEventListener("click", () => {
    notification.plain()
})

document.querySelector("#open").addEventListener("click", () => {
    open()
})