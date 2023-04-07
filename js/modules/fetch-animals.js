import NumbersAnimation from './numbers.js';

export default function fetchAnimais(url, target) {
    function createAnimal(animal) {
        const div = document.createElement('div');

        div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;

        return div;
    }

    const numbersGrid = document.querySelector(target);

    function fillAnimal(animal) {
        const div = createAnimal(animal);
        numbersGrid.appendChild(div);
    }

    function activeNumbersAnimation() {
        const numbersAnimation = new NumbersAnimation('[data-number]', '.numbers-grid', 'actived');

        numbersAnimation.init();
    }

    async function createAnimals() {
        try {
            const animals = await fetch(url);
            const animalsJSON = await animals.json();

            animalsJSON.forEach((animal) => fillAnimal(animal));
            activeNumbersAnimation();
        } catch (error) {
            console.log(error);
        }
    }

    return createAnimals();
}
