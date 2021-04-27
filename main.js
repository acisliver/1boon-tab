import activateTab from "/modules/navTab.js"
import showContent from "./modules/showContent.js"

//각 탭에 이벤트리스너 등록
const $tabs = document.querySelectorAll(".nav li")

$tabs.forEach(tab => {
    tab.addEventListener('click', ()=>activateTab($tabs, tab))
})

const $list = document.getElementById("list")
showContent("popular", $list)

