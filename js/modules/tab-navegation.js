export default function initTabNavegation() {
    const tabMenu = document.querySelectorAll('[data-page="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add("actived");

        function activeTab(index) {
            tabContent.forEach(section => {
                section.classList.remove("actived");
            });

            const direction = tabContent[index].dataset.anime;
            tabContent[index].classList.add("actived", direction);
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener("click", () => activeTab(index));
        });
    }
}
