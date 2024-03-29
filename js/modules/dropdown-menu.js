import outsideClick from './outside-click.js';

export default class DropdownMenu {
    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);

        if (events === undefined) {
            this.events = ['touchstart', 'click'];
        } else {
            this.events = events;
        }

        this.activeClass = 'actived';
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }

    init() {
        if (this.dropdownMenus.length) {
            this.addDropdownMenuEvent();
        }

        return this;
    }

    activeDropdownMenu(event) {
        event.preventDefault();

        const element = event.currentTarget;
        element.classList.add(this.activeClass);

        outsideClick(element, this.events, () => {
            element.classList.remove(this.activeClass);
        });
    }

    addDropdownMenuEvent() {
        this.dropdownMenus.forEach((dropdownMenu) => {
            this.events.forEach((event) => {
                dropdownMenu.addEventListener(event, this.activeDropdownMenu);
            });
        });
    }
}