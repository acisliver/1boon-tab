//json을 html으로 변환하는 메소드
export default function (num, json) {
    const title = json[num].title
    const img = json[num].img
    const url = json[num].url
    const cp = json[num].cp
    let htmlString = ''

    //이미지 태그 추가
    htmlString += `<img src="${img}" style="width: 200px; height: auto">`
    //제목 추가
    htmlString += `<div class="title">${title}</div>`
    //cp 추가
    htmlString += `<div class="cp">${cp}</div>`
    //url 링크 추가가
    htmlString = `<a href=${url}>${htmlString}</a>`

    //카드 생성
    let card = makeCard(url)

    //카드에 json 내용 추가
    card.innerHTML = htmlString

    return card
    //기사를 감싸줄 카드 생성 메소드
    function makeCard() {
        const card = document.createElement("div")
        card.classList.add("card")
        return card
    }
}