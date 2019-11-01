import App from './app.js';

const app = new App();
const el = app.renderDOM();
document.body.prepend(el);