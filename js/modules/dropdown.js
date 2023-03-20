export default function initDropdown() {
    const dropdowns = document.querySelectorAll('[data-dropdown]');

    function handleClick(event) {
        event.preventDefault();

        this.classList.toggle('actived');
    }

    dropdowns.forEach(dropdown => {
        ['click', 'touchstart'].forEach(event =>
            dropdown.addEventListener(event, handleClick)
        );
    });
}
