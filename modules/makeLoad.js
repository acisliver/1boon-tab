//로딩 html 생성 메소스
export default function (){
    const text = ' 로딩중'
    const span = document.createElement("span")
    span.classList.add("glyphicon", "glyphicclassNamefresh", "load")

    const textNode = document.createTextNode(text)
    span.appendChild(textNode)

    const div = document.createElement("div")
    div.appendChild(span)

    return div
}