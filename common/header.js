import Component from '../component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header>
            <img id="pokedex" src="./assets/pokedex.png">
            <div>
            <div class="buttons" id="up">U</div>
            <div class="buttons" id="left">L</div>
            <div class="buttons" id="right">R</div>
            <div class="buttons" id="down">D</div>
            <div id="band">SPAN</div>
            </div>
        </header>`;
    }
}

export default Header;