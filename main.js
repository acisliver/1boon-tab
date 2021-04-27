import activateTab from "/modules/navTab.js"
import showContent from "./modules/showContent.js"

//각 탭에 이벤트리스너 등록
const $tabs = document.querySelectorAll(".nav li")
const $list = document.getElementById("list")


$tabs.forEach(tab => {
    tab.addEventListener('click', ()=>activateTab($tabs, tab))
    tab.addEventListener('click', ()=>showContent(tab.classList[0], $list))
})

showContent("recent", $list)

