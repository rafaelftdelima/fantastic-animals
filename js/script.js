const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("actived");

    function activeTab(index) {
        tabContent.forEach(section => {
            section.classList.remove("actived");
        });

        tabContent[index].classList.add("actived");
    }

    tabMenu.forEach((item, index) => {
        item.addEventListener("click", () => activeTab(index));
    });
}
