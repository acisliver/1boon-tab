import jsonToHtml from "./jsonToHtml.js"
import getJson from "./getJson.js"

//화면에 json을 랜더링하는 메소드
//content: 어떤 json을 가져올지 결정
//list: html을 추가할 dom요소
export default async function (content, list) {

    //list child node 초기화
    list.innerHTML = '<div class="text-center">\n' +
        '          <span class="glyphicon glyphicon-refresh"></span> 로딩중\n' +
        '        </div>'

    //json을 불러옴
    const json = await getJson(content)

    //표시될 게시물의 개수
    const articleNum = 10

    //json을 html로
    //1초 후 실행
    setTimeout(function (){
        //로딩 아이콘을 안보이게함
        const $load = document.querySelector('.text-center')
        $load.style.display = "none"
        //게시물 표시
        for (let i = 0; i < articleNum; i++) {
            list.appendChild(jsonToHtml(i, json))
        }
    }, 1000)

}
