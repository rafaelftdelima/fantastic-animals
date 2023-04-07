export default class StoreStatus {
    constructor(storeStatus, activeClass) {
        this.storeStatus = document.querySelector(storeStatus);
        this.activeClass = activeClass;
    }

    statusData() {
        const target = document.querySelector('[data-week]');

        this.daysOfWeek = target.dataset.week.split(',').map(Number);
        this.openingHours = target.dataset.hour.split(',').map(Number);
    }

    dateNow() {
        this.date = new Date();
        this.dayOfWeek = this.date.getDay();
        this.hour = this.date.getUTCHours() - 3;
    }

    isOpen() {
        const weekDay = this.daysOfWeek.indexOf(this.dayOfWeek) !== -1;
        const hourDay = this.hour >= this.openingHours[0] && this.hour < this.openingHours[1];

        return weekDay && hourDay;
    }

    activeOpen() {
        if (this.isOpen()) {
            this.storeStatus.innerText = 'Aberta agora';
            this.storeStatus.setAttribute('data-status', 'open');
        } else {
            this.storeStatus.innerText = 'Fechada';
            this.storeStatus.setAttribute('data-status', 'closed');
        }
    }

    init() {
        if (this.storeStatus) {
            this.statusData();
            this.dateNow();
            this.activeOpen();
        }

        return this;
    }
}