export default function initNumbers() {
    function animateNumbers() {
        const numbers = document.querySelectorAll('[data-number]');

        numbers.forEach(number => {
            const total = +number.innerText;
            const increment = Math.round(total / 25);
            let start = 0;

            number.innerText = '0';

            const timer = setInterval(() => {
                number.innerText = start;

                start += increment;

                if (start > total) {
                    clearInterval(timer);

                    number.innerText = total;
                }
            }, 50);
        });
    }

    const target = document.querySelector('.numbers');
    const observer = new MutationObserver(handleMutation);

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('actived')) {
            observer.disconnect();

            animateNumbers();
        }
    }

    observer.observe(target, {
        attributes: true
    });
}
