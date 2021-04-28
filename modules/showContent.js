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

            htmlString += `<img src="${img}" style="width: 200px; height: auto">`
            htmlString += `<div class="title">제목: ${title}</div>`
            htmlString += `<div class="cp">cp: ${cp}</div>`
            // htmlString +- ``

            //카드 생성
            let card = makeCard(url)

            card.innerHTML = htmlString
            list.appendChild(card)

            htmlString = ''
        }
    }

    //기사를 감싸줄 카드 생성 메소드
    function makeCard(link) {
        const card = document.createElement("div")
        card.classList.add("card")
        const aTag = `<a href="${link}"></a>`
        card.innerHTML = aTag
        return card
    }
}