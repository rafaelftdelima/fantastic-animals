function initTabNavegation() {
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
}

function initAccordionList() {
    const accordionList = document.querySelectorAll(".js-accordion dt");

    if (accordionList.length) {
        accordionList[0].classList.add("actived");

        function activeAccordion(event) {
            console.log(event.currentTarget);
            event.currentTarget.classList.toggle("actived");
        }

        accordionList.forEach(item => {
            item.addEventListener("click", activeAccordion);
        });
    }
}

initTabNavegation();
initAccordionList();