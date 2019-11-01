import Component from '../component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header>
        <img id="pokedex" src="./assets/pokedex.png">
        <span id="band">SPAN</span>
            <div id="true-header">
                <h1>Pokédex</h1>
                <nav>
                    <ul>
                        <li>Nav 1</li>
                        <li>Nav 2</li>
                        <li>Nav 3</li>
                    </ul>
                </nav>
            </div>
        </header>`;
    }
}

export default Header;