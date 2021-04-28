import jsonToHtml from "./jsonToHtml.js";
import getJson from "./getJson.js";

//더보기 클릭 시 게시글 추가 랜더링 메소드
//content: 어떤 json을 가져올지 결정
//list: html을 추가할 dom요소
export default async function (content, list) {
    //json을 불러옴
    const json = await getJson(content)

    //더보기의 하위 노드개수와 json의 개수를 비교해 더보기가 이미 되었는지 확인
    if(list.childElementCount === json.length) return

    //json을 html로
    for (let i = 10; i < json.length; i++) {
        jsonToHtml(i, json);
    }
}