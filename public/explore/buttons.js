import Component from '../component.js';

class Buttons extends Component {
    renderHTML() {
        return /*html*/`
        <div id="controls">
        <div class="buttons" id="up"></div>
        <div class="buttons" id="left"></div>
        <div class="buttons" id="right"></div>
        <div class="buttons" id="down"></div>
        </div>`;
    }
}

export default Buttons;