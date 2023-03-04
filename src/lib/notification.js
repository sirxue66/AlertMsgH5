import "../css/notification.css"
import "../css/global.css"
import infoSvg from "../icon/info.svg"
import successSvg from "../icon/success.svg"
import warningSvg from "../icon/warning.svg"
import errorSvg from "../icon/error.svg"
import closeSvg from "../icon/close.svg"
import {makeIcon, mount, remove, makeUUID, makeSpan, makeContainer, removeById} from "./common"
const containerId = makeUUID()
let lastUUID = null
let containerDom
const makeNotification = ( svg, title, content, delay) => {
    containerDom = makeContainer(containerId, "msg_notificationContainer")
    const div = document.createElement("div")
    let uuid = makeUUID()
    div.classList.add("msg_notificationBox")
    div.id=uuid
    // 左侧图标
    if(svg){
        const icon = makeIcon(svg, "msg_notificationIcon")
        const iconDom = document.createElement("div")
        iconDom.classList.add("msg_leftDom")
        iconDom.appendChild(icon)
        div.appendChild(iconDom)
    }
    //右侧内容
    const contentDom = document.createElement("div")
    contentDom.classList.add("msg_rightDom")
    const topDom = document.createElement("div")
    topDom.classList.add("msg_topDom")
    const topSpan = makeSpan(title, "msg_topTitle")
    const closeIcon = makeIcon(closeSvg,"msg_closeIcon")
    
    topDom.append(topSpan)
    topDom.appendChild(closeIcon)
    const bottomDom = document.createElement("div")
    bottomDom.classList.add("msg_bottomDom")
    const bottomSpan = makeSpan(content, "msg_bottom_content")
    bottomDom.appendChild(bottomSpan)
    contentDom.appendChild(topDom)
    contentDom.appendChild(bottomDom)
    div.appendChild(contentDom)
    lastUUID = uuid
    mount(div, lastUUID, containerDom)
    addEvent(closeIcon, div)
    remove(div, containerDom, delay)
}

const addEvent = (icon, child) => {
    icon.addEventListener("click", () => {
        containerDom.removeChild(child)
    })
}

function info(option={}){
    const {title="系统提示", content="这是普通提示！", delay= 3000} = option
    makeNotification(infoSvg, title, content, delay)
}

function success(option={}){
    const {title="系统提示", content="这是成功提示！", delay= 3000} = option
    makeNotification(successSvg, title, content, delay)
}

function warning(option={}){
    const {title="系统提示", content="这是警告提示！", delay= 3000} = option
    makeNotification(warningSvg, title, content, delay)
}

function error(option={}){
    const {title="系统提示", content="这是错误提示！", delay= 3000} = option
    makeNotification(errorSvg, title, content, delay)
}

function plain(option={}){
    const {title="系统提示", content="这是简介提示！", delay= 3000} = option
    makeNotification(null, title, content, delay)
}


const notification = {
    info,
    success,
    warning,
    error,
    plain
}
export default notification