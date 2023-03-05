import "../css/alert.css"
import "../css/global.css"
import {solidInfoIcon, solidSuccessIcon, solidWarningIcon, solidErrorIcon} from "../icon/icon.js"
import {makeIcon, mount, remove, makeUUID, makeSpan, makeContainer} from "./common"
const containerId = makeUUID()
let lastUUID = null
let containerDom

const makeAlert = (className, svg, content, delay = 3000) => {
    containerDom = makeContainer(containerId, "msg_alertContainer")
    const div = document.createElement("div")
    let uuid = makeUUID()
    div.classList.add("msg_alertBox", "msg_alert_enter", className)
    div.id=uuid
    const icon = makeIcon(svg, "msg_alertIcon")
    const span = makeSpan(content, "msg_alertSpan")
    div.appendChild(icon)
    div.appendChild(span)
    mount(div, lastUUID, containerDom)
    remove(div, containerDom, delay, "alert")
    lastUUID = uuid
}

function info(content="普通提示", delay){
    makeAlert("msg_infoBox", solidInfoIcon, content,delay)
}

function success(content="成功提示", delay){
    makeAlert("msg_successBox", solidSuccessIcon, content,delay)
}

function warning(content="警告提示", delay){
    makeAlert("msg_warningBox", solidWarningIcon, content,delay)
}

function error(content="错误提示", delay){
    makeAlert("msg_errorBox", solidErrorIcon, content,delay)
}

function plain(content="简洁提示", delay){
    makeAlert("msg_plainBox", solidInfoIcon, content, delay)
}

const alert = {
    info,
    success,
    warning,
    error,
    plain
}

export default alert