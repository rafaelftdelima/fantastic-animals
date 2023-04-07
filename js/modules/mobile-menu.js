import outsideClick from './outsidec-click.js';

export default class MobileMenu {
    constructor(button, menuList, events) {
        this.button = document.querySelector(button);
        this.menuList = document.querySelector(menuList);
        this.activeClass = 'actived';

        if (events === undefined) {
            this.events = ['touchstart', 'click'];
        } else {
            this.events = events;
        }

        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        this.button.classList.add(this.activeClass);
        this.menuList.classList.add(this.activeClass);

        outsideClick(this.menuList, this.events, () => {
            this.button.classList.remove(this.activeClass);
            this.menuList.classList.remove(this.activeClass);
        });
    }

    addMobileMenuEvent() {
        this.events.forEach((event) => {
            this.button.addEventListener(event, this.openMenu);
        });
    }

    init() {
        if (this.button && this.menuList) {
            this.addMobileMenuEvent();
        }

        return this;
    }
}