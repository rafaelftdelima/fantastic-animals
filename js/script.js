function initTabNavegation() {
    const tabMenu = document.querySelectorAll('[data-page="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add("actived");

        function activeTab(index) {
            tabContent.forEach(section => {
                section.classList.remove("actived");
            });

            const direction = tabContent[index].dataset.anime;
            tabContent[index].classList.add("actived", direction);
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener("click", () => activeTab(index));
        });
    }
}

function initAccordionList() {
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

function initSmoothScroll() {
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

function initScrollAnimation() {
    const sectionsList = document.querySelectorAll('[data-page="section"]');

    if (sectionsList.length) {
        const animationPoint = window.innerHeight * 0.6;

        function animateScroll() {
            sectionsList.forEach(section => {
                const sectionTopDistance = section.getBoundingClientRect().top - animationPoint;

                if (sectionTopDistance < 0) {
                    section.classList.add("actived");
                }
                /* else {
                    section.classList.remove("actived");
                } */
            })
        }

        animateScroll();
        window.addEventListener("scroll", animateScroll);
    }
}

initTabNavegation();
initAccordionList();
initSmoothScroll();
initScrollAnimation();