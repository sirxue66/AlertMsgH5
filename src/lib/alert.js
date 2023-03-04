import "../css/alert.css"
import "../css/global.css"
import solidInfo from "../icon/solid_info.svg"
import solidSuccess from "../icon/solid_success.svg"
import solidWarning from "../icon/solid_warning.svg"
import solidError from "../icon/solid_error.svg"
import {makeIcon, mount, remove, makeUUID, makeSpan, makeContainer} from "./common"
const containerId = makeUUID()
let lastUUID = null
let containerDom

const makeAlert = (className, svg, content, delay) => {
    containerDom = makeContainer(containerId, "msg_alertContainer")
    const div = document.createElement("div")
    let uuid = makeUUID()
    div.classList.add("msg_alertBox",className)
    div.id=uuid
    const icon = makeIcon(svg, "msg_alertIcon")
    const span = makeSpan(content, "msg_alertSpan")
    div.appendChild(icon)
    div.appendChild(span)
    lastUUID = uuid
    mount(div, lastUUID, containerDom)
    remove(div, containerDom, delay)
}

function info(content="普通提示", delay){
    makeAlert("msg_infoBox", solidInfo, content,delay)
}

function success(content="成功提示", delay){
    makeAlert("msg_successBox", solidSuccess, content,delay)
}

function warning(content="警告提示", delay){
    makeAlert("msg_warningBox", solidWarning, content,delay)
}

function error(content="错误提示", delay){
    makeAlert("msg_errorBox", solidError, content,delay)
}

function plain(content="简洁提示", delay){
    makeAlert("msg_plainBox", solidInfo, content, delay)
}

const alert = {
    info,
    success,
    warning,
    error,
    plain
}

export default alert