import App from './app.js';

const app = new App();
const el = app.renderDOM();
document.body.prepend(el);

const clickme = document.querySelector('body');

clickme.addEventListener('click', event);

function event() {
    window.location = './pokedex-explore.html';
}
