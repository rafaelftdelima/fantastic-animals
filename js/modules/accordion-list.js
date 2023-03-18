export default function initAccordionList() {
    const accordionList = document.querySelectorAll('[data-page="accordion"] dt');

    if (accordionList.length) {
        accordionList[0].classList.add("actived");

        function activeAccordion(event) {
            console.log(event.currentTarget);
            event.currentTarget.classList.toggle("actived");
        }

        accordionList.forEach(item => {
            item.addEventListener("click", activeAccordion);
        });
    }
}
