import "../css/global.css"
import "../css/confirm.css"
import {warningIcon} from "../icon/icon.js"
import { makeIcon} from "./common.js"
const makeMask = (mask = true) => {
    const maskDom = document.createElement("div")
    maskDom.classList.add("msg_mask")
    mask && (maskDom.style.background = "#00000073")
    return maskDom
}
let maskUUID = null, btn1UUID = null, btn2UUID = null
let container = null
let tempOption = ""
function open(option = {}){
    const {content="是否继续进行？", mask = true, btnOK = "确定", btnCancel = "取消",OKFun=undefined,CancelFun=undefined} = option
    if(!(maskUUID instanceof Element)){ //如果创建过遮罩层直接渲染
        maskUUID = makeMask(mask)
    }
    document.body.appendChild(maskUUID)
    const curentOption = JSON.stringify({content,mask,btnOK,btnCancel,OKFun,CancelFun})
    if(curentOption === tempOption){ //参数未变直接渲染
        document.body.appendChild(container)
        addEvent(OKFun, CancelFun)
        return
    }
    tempOption = curentOption //将参数按顺序进行缓存
    container = document.createElement("div")
    container.classList.add("msg_confirmContainer")
    const topMain = document.createElement("div")
    topMain.classList.add("msg_topMain")
    const iconDom = document.createElement("div")
    const icon = makeIcon(warningIcon, "msg_confirmIcon")
    iconDom.appendChild(icon)
    const contentDom = document.createElement("div")
    contentDom.classList.add("msg_textContent")
    contentDom.innerHTML = content
    topMain.appendChild(iconDom)
    topMain.appendChild(contentDom)
    const botMain = document.createElement("div")
    botMain.classList.add("msg_botMain")
    const btn1 = document.createElement("button")
    btn1.innerText = btnCancel
    btn1UUID = btn1
    btn1.classList.add("msg_btn", "msg_btn1")
    const btn2 = document.createElement("button")
    btn2.innerText = btnOK
    btn2UUID = btn2
    btn2.classList.add("msg_btn", "msg_btn2")
    botMain.appendChild(btn1)
    botMain.appendChild(btn2)
    container.appendChild(topMain)
    container.appendChild(botMain)
    
    document.body.appendChild(container)
    addEvent(OKFun, CancelFun)
}

const addEvent = (OKFun, CancelFun) => {
    const OK = () => {
        console.log("确定")
        if(OKFun instanceof Function){OKFun()}
        Close()
    }
    const Cancel = () => {
        console.log("取消")
        if(CancelFun instanceof Function){CancelFun()}
        Close()
    }
    const Close = () => {
        maskUUID.removeEventListener("click", Cancel, false)
        btn1UUID.removeEventListener("click", Cancel, false)
        btn2UUID.removeEventListener("click", OK, false)
        document.body.removeChild(maskUUID)
        document.body.removeChild(container)
    }
    setTimeout(() => {
        maskUUID.addEventListener("click", Cancel, false)
        btn1UUID.addEventListener("click", Cancel, false)
        btn2UUID.addEventListener("click", OK, false)
    },0)
}

const confirm = {
    open
}

export default confirm