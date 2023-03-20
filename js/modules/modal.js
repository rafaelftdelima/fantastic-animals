export default function initModal() {
    const openButton = document.querySelector('[data-modal="open"]');
    const closeButton = document.querySelector('[data-modal="close"]');
    const modalContainer = document.querySelector('[data-modal="container"]');

    if (openButton && closeButton && modalContainer) {
        function toggleModal(event) {
            event.preventDefault();

            modalContainer.classList.toggle('actived');
        }

        openButton.addEventListener('click', toggleModal);
        closeButton.addEventListener('click', toggleModal);

        function clickOut(event) {
            if (event.target === this) {
                closeModal(event);
            }
        }

        modalContainer.addEventListener('click', clickOut);
    }
}
