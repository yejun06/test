//data: 数据源 id：需要加入盒子的id sengData:点击相对应条目是执行的方法，参数为当前数据
function initNav(data, id, sendData) {
    let aside = document.getElementById("aside")
    for(let i in data) {
        let div = createDiv(data[i])
        aside.appendChild(div)
        div.addEventListener("click",  function() {
            sendData(data[i])
        }, false)
    }
}
function createDiv(data) {
    let div = document.createElement("div")
    let img = document.createElement("img")
    let span = document.createElement("span")
    div.className = "img-type"
    if(data.type == "img") {
        img.src = data.imgUrl
        div.appendChild(img)
    }

    if(data.type == "video") {
        img.src = data.previewUrl
        div.appendChild(img)
    }
    if(data.type == "text") {
        div.className = "text-type"
    }
    if(data.text && data.text != "") {
        span.innerText = data.text
        div.appendChild(span)
    }
    return div
}