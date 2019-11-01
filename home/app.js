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
                <main>
                    <div id="screen">
                        <div class="pokemon">
                            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
                            <ul>
                                <li class="name">Bulbasaur</li>
                                <li>No.: 1 </li>
                                <li>Type: Grass</li>
                                <li>Type: Poison</li>
                                <li>Attack: 49</li>
                                <li>Defense: 49</li>
                            </ul>
                        </div>
                        <div class="pokemon">
                            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png">
                            <ul>
                                <li class="name">Ivysaur</li>
                                <li>No.: 2 </li>
                                <li>Type: Grass</li>
                                <li>Type: Poison</li>
                                <li>Attack: 62</li>
                                <li>Defense: 63</li>
                            </ul>
                        </div>

                        <div class="pokemon">
                            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png">
                            <ul>
                                <li class="name">Venusaur</li>
                                <li>No.: 3 </li>
                                <li>Type: Grass</li>
                                <li>Type: Poison</li>
                                <li>Attack: 82</li>
                                <li>Defense: 83</li>
                            </ul>
                        </div>
                    </div>
                </main>
            <div>`;
    }
}

export default App;