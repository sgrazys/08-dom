const h1DOM = document.getElementsByTagName('h1')[0];

const text = h1DOM.textContent;

const newText = text.trim().replace('rytas', 'diena');

h1DOM.innerText = newText;

const colors = ['green', 'red', 'blue', 'orange'];

for (const color of colors) {
    h1DOM.classList.add(color)
}

h1DOM.classList.remove('red');

h1DOM.classList.toggle('blue');
h1DOM.classList.toggle('orange');
h1DOM.classList.toggle('pink');

const arTuri1 = h1DOM.classList.contains('agurkas');
console.log(arTuri1);

const arTuri2 = h1DOM.classList.contains('pink');
console.log(arTuri2);

console.log([h1DOM]);

const [minusDOM, plusDOM] = document.querySelectorAll('button');
const scoreDOM = document.querySelector('.score');

let score = 0;
minusDOM.addEventListener('click', () => {
    scoreDOM.innerText = --score;
});

plusDOM.addEventListener('click', () => {
    scoreDOM.innerText = ++score;
});