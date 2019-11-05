import ExploreApp from './explore-app.js';

const app = new ExploreApp();
const el = app.renderDOM();
document.body.prepend(el);