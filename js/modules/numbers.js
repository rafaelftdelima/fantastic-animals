import animateNumbers from './animate-numbers.js';

export default function initNumbers() {
    function createAnimal(animal) {
        const item = document.createElement('div');
        item.classList.add('number-animal');
    
        const animalName = document.createElement('h3');
        animalName.innerText = animal.animal + ':';
    
        const number = document.createElement('span');
        number.innerText = animal.total;
        number.setAttribute('data-number', '');
    
        [animalName, number].forEach(element => {
            item.appendChild(element);
        })
    
        return item;
    }
    
    async function fetchAnimals(url) {
        const grid = document.querySelector('.numbers-grid');
        const animalsResponse = await fetch(url);
        const animalsJSON = await animalsResponse.json();
    
        animalsJSON.forEach(animal => {
            const item = createAnimal(animal);
            grid.appendChild(item);
        });
    
        animateNumbers();
    }

    fetchAnimals('./animalsapi.json');
}
