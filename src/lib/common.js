/**
 * 创建父容器
 */
export const makeContainer = (containerId, className) => {
    let containerDom = document.getElementById(containerId)
    if(!containerDom){
        containerDom = document.createElement("div")
        containerDom.id = containerId
        containerDom.classList.add(className)
        document.body.appendChild(containerDom)
    }
    return containerDom
}
/**
 * 创建svg
 * @param {*} svg 
 * @param {*} className 
 * @returns 
 */
export const makeIcon = (svg, className) => {
    const img = document.createElement("img")
    img.classList.add(className)
    img.src = svg
    return img
}

/**
 * 创建span标签
 * @param {*} content 
 * @param {*} className 
 * @returns 
 */
export const makeSpan = (content, className) => {
    const span = document.createElement("span")
    className && span.classList.add(className)
    span.innerText = content
    return span
}
/**
 * 添加进父容器
 * @param {*} dom 
 * @param {*} uuid 
 * @returns 
 */
export const mount = (dom, lastId, containerDom) => {
    let last = document.getElementById(lastId)
    if(last instanceof Element){
        containerDom.insertBefore(dom, last)
        return
    }
    containerDom.appendChild(dom)
}
/**
 * 关闭提示
 * @param {*} dom 
 * @param {*} daly 
 */
const animationTime = 500
export const remove = (dom, containerDom, delay = 3000, flag) => {
    if(delay === 0) return
    setTimeout(() => {
        flag==="alert" && removeAnimation_alert(dom)
        flag==="notif" && removeAnimation_notif(dom)
        setTimeout(() => {
            dom.parentNode && containerDom.removeChild(dom)
        },animationTime)
    },delay-animationTime)
}

/**
 * 触发dom离开动画
 */
const removeAnimation_alert = (dom) => {
    dom.classList.remove("msg_alert_enter")
    dom.classList.add("msg_alert_leave")
}
const removeAnimation_notif = (dom) => {
    dom.classList.remove("msg_notif_enter")
    dom.classList.add("msg_notif_leave")
}

/**
 * 根据id移除dom
 * @param {*} containerID 
 * @param {*} id 
 */
export const removeById = (containerID ,id) => {
    const container = document.getElementById(containerID)
    const child = document.getElementById(id)
    container.replaceChild(child)
}

/**
 * 生成UUID
 * @returns 
 */
export const makeUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}