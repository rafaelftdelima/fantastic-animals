export default class Modal {
    constructor(openButton, closeButton, container) {
        this.openButton = document.querySelector(openButton);
        this.closeButton = document.querySelector(closeButton);
        this.container = document.querySelector(container);

        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.clickOutsideModal = this.clickOutsideModal.bind(this);
    }

    init() {
        if (this.openButton && this.closeButton && this.container) {
            this.addModalEvents();
        } else {
            return this;
        }
    }

    toggleModal() {
        this.container.classList.toggle('actived');
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    clickOutsideModal(event) {
        if (event.target === this.container) {
            this.toggleModal();
        }
    }

    addModalEvents() {
        this.openButton.addEventListener('click', this.eventToggleModal);
        this.closeButton.addEventListener('click', this.eventToggleModal);
        this.container.addEventListener('click', this.clickOutsideModal);
    }
}