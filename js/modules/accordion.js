export default class Accordion {
    constructor(list) {
        this.accordionList = document.querySelectorAll(list);
        this.activeClass = 'actived';
    }

    init() {
        if (this.accordionList.length) {
            this.toggleAccordion(this.accordionList[0]);
            this.addAccordionEvent();
        }
    }

    addAccordionEvent() {
        this.accordionList.forEach((item) => {
            item.addEventListener('click', () => {
                this.toggleAccordion(item);
            });
        });
    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeClass);
        item.nextElementSibling.classList.toggle(this.activeClass);
    }
}