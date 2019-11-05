import Component from '../component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header>
            <div id="container">
                <img id="pokedex" src="./assets/pokedex.png">
            </div>
            <div id="band">SPAN</div>
        </header>`;
    }
}

export default Header;