
export default function (content, list) {
    //list child node 초기화
    list.textContent = ''

    //로컬에 api 요청을 통해 json파일 load
    fetch(`http://localhost:5000/${content}.json`)
        .then(res => res.json())
        .then(json => jsonToHtml(json))

    function jsonToHtml(json) {
        console.log(json)

        for (let i = 0; i < json.length; i++){
            const title = json[i].title
            const testNode = document.createTextNode(title)
            const titleDiv = document.createElement("div")
            titleDiv.appendChild(testNode)
            list.appendChild(titleDiv)

        }
    }

}