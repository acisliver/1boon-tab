//tab active클래스 핸들러
export default function (tabs, tab) {

    const active = "active"
    let tClassList = ""

    tabs.forEach(t => {
        tClassList = t.classList
        //이전 active 삭제
        if(tClassList.contains(active)) tClassList.remove(active)
    })

    //클릭된 탭에 active클래스 추가
    tab.classList.add(active)
}