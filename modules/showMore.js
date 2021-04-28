import jsonToHtml from "./jsonToHtml.js"
import getJson from "./getJson.js"

//더보기 클릭 시 게시글 추가 랜더링 메소드
//content: 어떤 json을 가져올지 결정
//list: html을 추가할 dom요소
export default  async function (content, list) {
    //json을 불러옴
    const json = await getJson(content)
    //현재 표시된 게시물의 개수
    const currentArticleNum = list.childElementCount-1

    //더보기의 하위 노드개수와 json의 개수를 비교해 더보기가 이미 되었는지 확인
    if (currentArticleNum === json.length) {
        alert("마지막 페이지입니다.")
        return
    }

    //10개씩 더 표시
    //1초 후 실행
    setTimeout(function (){
        //로딩 아이콘을 안보이게함
        const $load = document.querySelector('.text-center')
        $load.style.display = "none"
        for (let i = currentArticleNum; i < currentArticleNum + 10; i++) {
            list.appendChild(jsonToHtml(i, json))
        }
    }, 1000)

}