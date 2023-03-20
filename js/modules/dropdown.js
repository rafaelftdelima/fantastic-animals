import outsideClick from "./outside-click.js";

export default function initDropdown() {
    const dropdowns = document.querySelectorAll('[data-dropdown]');

    function handleClick(event) {
        event.preventDefault();

        this.classList.toggle('actived');

        outsideClick(this, ['click', 'touchstart'], () => {
            this.classList.remove('actived');
        });
    }

    dropdowns.forEach(dropdown => {
        ['click', 'touchstart'].forEach(event =>
            dropdown.addEventListener(event, handleClick)
        );
    });
}
