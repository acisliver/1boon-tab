//json을 가져와 html로 변환하는 메소드
export default function (content, list) {
    //list child node 초기화
    list.textContent = ''

    //로컬에 api 요청을 통해 json파일 load
    fetch(`http://localhost:5000/${content}.json`)
        .then(res => res.json())
        .then(json => jsonToHtml(json))

    function jsonToHtml(json) {
        console.log(json)
        let htmlString = ''

        for (let i = 0; i < json.length; i++){
            const title = json[i].title
            const img = json[i].img
            const url = json[i].url
            const cp = json[i].cp

            //이미지 태그 추가
            htmlString += `<img src="${img}" style="width: 200px; height: auto">`
            //제목 추가
            htmlString += `<div class="title">제목: ${title}</div>`
            //cp 추가
            htmlString += `<div class="cp">cp: ${cp}</div>`
            //url 링크 추가가
            htmlString = `<a href=${url}>${htmlString}</a>`

            //카드 생성
            let card = makeCard(url)

            //카드에 json 내용 추가
            card.innerHTML = htmlString

            //list에 card 추가
            list.appendChild(card)

            //초기화
            htmlString = ''
       }
    }

    //기사를 감싸줄 카드 생성 메소드
    function makeCard() {
        const card = document.createElement("div")
        card.classList.add("card")
        return card
    }
}