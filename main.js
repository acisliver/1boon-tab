import activateTab from "/modules/navTab.js"
import showContent from "./modules/showContent.js"
import showMore from "./modules/showMore.js"

const $tabs = document.querySelectorAll(".nav li")
const $list = document.getElementById("list")
const $more_btn = document.querySelector(".btn")

//현재 탭을 전역변수로 저장
let clickedTab = "recent"

//각 탭에 이벤트리스너 등록
$tabs.forEach(tab => {

    tab.addEventListener('click', ()=>activateTab($tabs, tab))
    tab.addEventListener('click', ()=>{
        //클릭된 탭 전역변수로 저장
        clickedTab = tab.classList[0]
        showContent(clickedTab, $list)
    })
})

//더보기 버튼에 이벤트 리스너 등록
$more_btn.addEventListener("click", ()=> showMore(clickedTab, $list))

//최초로 보여질 게시물 표시
showContent(clickedTab, $list)

