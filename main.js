import activateTab from "/modules/navTab.js"
import showContent from "./modules/showContent.js"

const $tabs = document.querySelectorAll(".nav li")
const $list = document.getElementById("list")
const $more_btn = document.querySelector(".btn")

//각 탭에 이벤트리스너 등록
$tabs.forEach(tab => {
    tab.addEventListener('click', ()=>activateTab($tabs, tab))
    tab.addEventListener('click', ()=>showContent(tab.classList[0], $list, 10))
})

// //더보기 버튼에 이벤트 리스너 등록
// $more_btn.addEventListener("click", ()=> showMore())

//최초로 보여질 게시물 표시
showContent("recent", $list)

