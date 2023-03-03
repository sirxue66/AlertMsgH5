import "../css/global.css"
import "../css/modal.css"
import warning from "../icon/warning.svg"
import { makeIcon} from "./common.js"
let maskUUID = null
const makeMask = (mask = true) => {
    const maskDom = document.createElement("div")
    maskDom.classList.add("mask")
    mask && (maskDom.style.background = "#00000073")
    document.body.appendChild(maskDom)
    maskUUID = maskDom
    return maskDom
}
const OK = () => {
    console.log("点击确定")
}
const Cancel = () => {
    console.log("取消")
}
const Close = () => {
    document.body.removeChild(maskUUID)
    document.body.removeChild(container)
}
let btn1UUID = null
let btn2UUID = null
let container = null
function open(option){
    const {content="<p>是否继续进行？</p>", mask = true, btnOK = "确定", btnCancel = "取消",OKFun=OK,CancelFun=Cancel} = option
    makeMask(mask)
    container = document.createElement("div")
    container.classList.add("modalContainer")
    const topMain = document.createElement("div")
    topMain.classList.add("topMain")
    const iconDom = document.createElement("div")
    iconDom.style.margin = "0 10px"
    const icon = makeIcon(warning, "icon_modal")
    iconDom.appendChild(icon)
    const contentDom = document.createElement("div")
    contentDom.classList.add("textContent")
    contentDom.innerHTML = content
    topMain.appendChild(iconDom)
    topMain.appendChild(contentDom)
    const botMain = document.createElement("div")
    botMain.classList.add("botMain")
    const btn1 = document.createElement("button")
    btn1.innerText = btnCancel
    btn1UUID = btn1
    btn1.classList.add("btn", "btn1")
    const btn2 = document.createElement("button")
    btn2.innerText = btnOK
    btn2UUID = btn2
    btn2.classList.add("btn", "btn2")
    botMain.appendChild(btn1)
    botMain.appendChild(btn2)
    
    container.appendChild(topMain)
    container.appendChild(botMain)
    document.body.appendChild(container)
    addEvent(OKFun, CancelFun)
}

const addEvent = (OKFun, CancelFun) => {
    setTimeout(() => {
        maskUUID.addEventListener("click", Cancel(CancelFun), false)
        btn1UUID.addEventListener("click", Cancel(CancelFun), false)
        btn2UUID.addEventListener("click", OK(OKFun), false)
    },0)
}

const modal = {
    open
}

export default modal