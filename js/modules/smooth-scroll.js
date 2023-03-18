export default function initSmoothScroll() {
    const internalLinks = document.querySelectorAll('[data-page="navegation"] a[href^="#"]');

    if (internalLinks.length) {
        function scrollToSection(event) {
            event.preventDefault();

            const href = event.currentTarget.getAttribute("href");
            const section = document.querySelector(href);
            /* const top = section.offsetTop;
                
                window.scrollTo({
                top: top,
                behavior: "smooth"
            }); */

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        internalLinks.forEach(link => {
            link.addEventListener("click", scrollToSection);
        });
    }
}
