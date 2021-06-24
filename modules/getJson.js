//json을 불러오는 메소드
export default async function (content) {

    //로컬에 api 요청을 통해 json파일 load
    const response = await fetch(`${content}.json`)

    //Promise를 json으로
    const data = await response.json()
    const json = await data

    return json
}
