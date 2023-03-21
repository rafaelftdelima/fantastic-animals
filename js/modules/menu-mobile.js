import outsideClick from "./outside-click.js"

export default function initMenuMobile() {
    const button = document.querySelector('[data-menu="button"]');
    const menu = document.querySelector('[data-menu="list"]');
    const events = ['click', 'touchstart'];

    if (button && menu) {
        function openMenu() {
            button.classList.add('actived');
            menu.classList.add('actived');

            outsideClick(menu, events, () => {
                button.classList.remove('actived');
                menu.classList.remove('actived');
            });
        }

        events.forEach(event => button.addEventListener(event, openMenu));
    }
}
