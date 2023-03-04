import {creatMSG} from "./src/index.js"
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