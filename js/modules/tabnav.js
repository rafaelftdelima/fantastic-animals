export default class TabNav {
    constructor(meno, content) {
        this.tabMenu = document.querySelectorAll(menu);
        this.tabContent = document.querySelectorAll(content);
        this.activeClass = 'actived';
    }

    init() {
        if (this.tabMenu.length && this.tabContent.length) {
            this.activeTab(0);
            this.addTabNavEvent();
        }
    }

    activeTab(index) {
        this.tabContent.forEach((section) => {
            section.classList.remove(this.activeClass);
        });

        const direction = this.tabContent[index].dataset.anime;
        
        this.tabContent[index].classList.add(this.activeClass, direction);
    }

    addTabNavEvent() {
        this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                this.activeTab(index);
            });
        });
    }
}
