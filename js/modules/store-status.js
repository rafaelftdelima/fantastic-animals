export default function initStoreStatus() {
    const status = document.querySelector('.navegation-status');

    const openingHours = document.querySelector('[data-week]');
    const daysOfWeek = openingHours.dataset.week.split(',').map(Number);
    const hours = openingHours.dataset.hour.split(',').map(Number);

    const now = new Date();
    const currentDayOfWeek = now.getDay();
    const currentHour = now.getHours();

    const isOpen = daysOfWeek.indexOf(currentDayOfWeek) !== -1 &&
        currentHour >= hours[0] && currentHour <= hours[1];

    if (isOpen) {
        status.setAttribute('data-status', 'open');
        status.innerText = 'Aberta agora';
    } else {
        status.setAttribute('data-status', 'closed');
        status.innerText = 'Fechada';
    }
}
