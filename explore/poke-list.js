import Component from '../component.js';
import SinglePokemon from './pokemon.js';

class PokeList extends Component {

    onRender(el) {
        const pokemon = this.props.pokemon;

        pokemon.forEach(pokemon => {
            const props = { pokemon };
            const singlePokemon = new SinglePokemon(props);
            const singlePokemonDOM = singlePokemon.renderDOM();
            el.appendChild(singlePokemonDOM); 
        });
    }

    renderHTML() {
        return /*html*/`
            <div id="screen">
            </div>
            `;
        
    }

}

export default PokeList;