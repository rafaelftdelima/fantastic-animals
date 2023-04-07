export default class ScrollAnimation {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.halfWindow = window.innerHeight * 0.6;

        this.checkDistance = this.checkDistance.bind(this);
    }    

    init() {
        if (this.sections.length) {
            this.getDistance();
            this.checkDistance();

            window.addEventListener('scroll', this.checkDistance);
        }

        return this;
    }

    getDistance() {
        this.distance = [...this.sections].map((section) => {
            const offset = section.offsetTop;

            return {
                element: section,
                offset: Math.floor(offset - this.halfWindow),
            };
        });
    }

    checkDistance() {
        this.distance.forEach((item) => {
            if (window.pageYOffset > item.offset) {
                item.element.classList.add('actived');
            } else if (item.element.classList.contains('actived')) {
                item.element.classList.remove('actived');
            }
        });
    }

    stop() {
        window.removeEventListener('scroll', this.checkDistance);
    }
}
