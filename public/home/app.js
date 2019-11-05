import Component from '../component.js';
import Header from '../common/header.js';
import Video from './video.js';

class App extends Component {
    onRender(el) {
        const header = new Header();
        el.prepend(header.renderDOM());

        const video = new Video();
        el.appendChild(video.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
            <div>`;
    }
}

export default App;