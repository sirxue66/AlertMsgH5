import "../css/alert.css"
import "../css/global.css"
import solidInfo from "../icon/solid_info.svg"
import solidSuccess from "../icon/solid_success.svg"
import solidWarning from "../icon/solid_warning.svg"
import solidError from "../icon/solid_error.svg"
import {makeIcon, mount, remove, makeUUID, makeSpan, makeContainer} from "./common"
const containerId = makeUUID()
makeContainer(containerId, "alertContainer")
let lastUUID = null

const makeAlert = (className, svg, content, delay) => {
    const div = document.createElement("div")
    let uuid = makeUUID()
    div.classList.add("alertBox",className)
    div.id=uuid
    const icon = makeIcon(svg, "alertIcon")
    const span = makeSpan(content)
    div.appendChild(icon)
    div.appendChild(span)
    mount(div, lastUUID, containerId)
    remove(div, containerId, delay)
    lastUUID = uuid
}

function info(content="提示消息", delay){
    makeAlert("infoBox", solidInfo, content,delay)
}

function success(content="成功提示", delay){
    makeAlert("successBox", solidSuccess, content,delay)
}

function warning(content="警告提示", delay){
    makeAlert("warningBox", solidWarning, content,delay)
}

function error(content="错误提示", delay){
    makeAlert("errorBox", solidError, content,delay)
}

function plain(content="简洁提示", delay){
    makeAlert("plainBox", solidInfo, content, delay)
}

const alert = {
    info,
    success,
    warning,
    error,
    plain
}

export default alert