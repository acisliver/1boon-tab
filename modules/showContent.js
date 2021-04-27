
export default function (content) {

    //로컬에 api 요청을 통해 json파일 load
    fetch(`http://localhost:5000/${content}.json`)
        .then(res => res.json())
        .then(json => jsonToHtml(json))

    function jsonToHtml(json) {
        console.log(json)

        
    }


}