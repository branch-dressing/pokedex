import Component from '../component.js';
import Header from '../common/header.js';

class App extends Component {
    onRender(el) {
        const header = new Header();
        el.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
            <div>`;
    }
}

export default App;