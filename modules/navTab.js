//tab active클래스 핸들러
export default function (tabs, tab) {

    const active = "active"
    let tClassList = ""

    //이전 active 삭제
    tabs.forEach(t => {
        tClassList = t.classList
        if(tClassList.contains(active)) tClassList.remove(active)
    })

    //클릭된 탭에 active클래스 추가
    tab.classList.add(active)
}