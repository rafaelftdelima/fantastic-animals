export default function initScrollAnimation() {
    const sectionsList = document.querySelectorAll('[data-page="section"]');

    if (sectionsList.length) {
        const animationPoint = window.innerHeight * 0.6;

        function animateScroll() {
            sectionsList.forEach(section => {
                const sectionTopDistance = section.getBoundingClientRect().top - animationPoint;

                if (sectionTopDistance < 0) {
                    section.classList.add("actived");
                }
                else if (section.classList.contains('actived')) {
                    section.classList.remove("actived");
                }
            })
        }

        animateScroll();
        window.addEventListener("scroll", animateScroll);
    }
}
