import Component from '../component.js';

class SinglePokemon extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
        <div class="pokemon">
        <img src=${pokemon.url_image}>
        <ul>
            <li class="name">${pokemon.pokemon}</li>
            <li>No.: ${pokemon.id} </li>
            <li>Type: ${pokemon.type_1}</li>
            <li>Type: ${pokemon.type_2}</li>
            <li>Attack: ${pokemon.attack}</li>
            <li>Defense: ${pokemon.defense}</li>
        </ul>
    </div>
    `;
    }
}

export default SinglePokemon;