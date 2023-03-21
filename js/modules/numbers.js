export default function initNumbers() {
    const numbers = document.querySelectorAll('[data-number]');

    numbers.forEach(number => {
        const total = +number.innerText;
        const increment =   Math.round(total / 25);
        let start = 0;

        number.innerText = '0';

        const time = setInterval(() => {
            number.innerText = start;

            start += increment;

            if (start > total) {
                clearInterval(time);

                number.innerText = total;
            }
        }, 50);
    });
}
