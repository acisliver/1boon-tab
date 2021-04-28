import jsonToHtml from "./jsonToHtml.js"
import getJson from "./getJson.js"

//화면에 json을 랜더링하는 메소드
//content: 어떤 json을 가져올지 결정
//list: html을 추가할 dom요소
export default async function (content, list) {
    //list child node 초기화
    list.textContent = ''

    //json을 불러옴
    const json = await getJson(content)

    //표시될 게시물의 개수
    const articleNum = 10

    //json을 html로
    for (let i = 0; i < articleNum; i++) {
        jsonToHtml(i, json)
    }
}
