export default function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');

    function createTooltip(element) {
        const text = element.getAttribute('aria-label');
        const tooltip = document.createElement('div');

        tooltip.classList.add('tooltip');
        tooltip.innerText = text;
        document.body.appendChild(tooltip);

        return tooltip;
    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltip.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
        }
    }

    const onMouseMove = {
        handleEvent(event) {
            this.tooltip.style.top = event.pageY + 20 + 'px';
            this.tooltip.style.left = event.pageX + 20 + 'px';
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }

    function onMouseOver(event) {
        const tooltip = createTooltip(this);

        tooltip.style.top = event.pageY + 'px';
        tooltip.style.left = event.pageX + 'px';

        onMouseLeave.tooltip = tooltip;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);

        onMouseMove.tooltip = tooltip;
        this.addEventListener('mousemove', onMouseMove);
    }

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseover', onMouseOver);
    })
}
