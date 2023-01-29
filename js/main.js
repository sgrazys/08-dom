const h1DOM = document.getElementsByTagName('h1')[0];
console.log(h1DOM);

const text = h1DOM.textContent;
console.log(`"${text}"`);

const newText = text.trim().replace('rytas', 'diena');

h1DOM.innerText = newText;