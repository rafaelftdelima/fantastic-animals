export default function initDropdown() {
    const dropdowns = document.querySelectorAll('[data-dropdown]');

    function outsideClick(element, events, callback) {
        const html = document.documentElement;
        const outside = 'data-outside';

        function handleOutsideClick(event) {
            if (!element.contains(event.target)) {
                element.removeAttribute(outside);

                events.forEach(event => {
                    html.removeEventListener(event, handleOutsideClick);
                });

                callback();
            }
        }

        if (!element.hasAttribute(outside)) {
            events.forEach(event => {
                html.addEventListener(event, handleOutsideClick);
            });

            element.setAttribute(outside, '');
        }
    }

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
