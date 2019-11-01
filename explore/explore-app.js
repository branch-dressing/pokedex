import Component from '../component.js';
import Header from '../common/header.js';
//import Paging from './paging.js';
import PokeList from './poke-list.js';
import { getPokemon } from '../services/pokemon-api.js';

class ExploreApp extends Component {
    async onRender(el) {
        const header = new Header();
        el.prepend(header.renderDOM());

        // const optionsSection = el.querySelector('#some-id');
        // const serchOptions = new SearchOptions();
        // optionsSection.prepend(SearchOptions.renderDOM());

        const screen = el.querySelector('.section');
        //const paging = new Paging();
        //screen.appendChild(.renderDOM());

        const pokeList = new PokeList({ pokemon: [] });
        screen.appendChild(pokeList.renderDOM());

        const response = await getPokemon();
        const pokemon = response.results;
        pokeList.update({ pokemon });
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