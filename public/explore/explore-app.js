import Component from '../component.js';
import Header from '../common/header.js';
import Paging from './paging.js';
import PokeList from './poke-list.js';
import { getPokemon } from '../services/pokemon-api.js';
import SearchOptions from './search-options.js';

class ExploreApp extends Component {
    onRender(el) {
        const header = new Header();
        el.prepend(header.renderDOM());
        
        const screen = el.querySelector('.section');
        const pokeList = new PokeList({ pokemon: [] });
        screen.appendChild(pokeList.renderDOM());
        
        const container = el.querySelector('#container');
        const searchOptions = new SearchOptions();
        container.appendChild(searchOptions.renderDOM());
        const paging = new Paging({ count: 0 });
        container.appendChild(paging.renderDOM());

        async function loadPokemon() {
            const response = await getPokemon();
            const pokemon = response.results;
            const count = response.count;
            pokeList.update({ pokemon });
            paging.update({ count: count });
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <div class="section">
                </div>
            </div>
            `;
    }

}
export default ExploreApp;