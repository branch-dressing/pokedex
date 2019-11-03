import Component from '../component.js';

class SinglePokemon extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;
        

        return /*html*/`
        <div class="pokemon" id="${pokemon.id}" style="background-color: ${pokemon.color_1}">
        <h2 class="name" style="text-shadow: 5px 5px 5px ${pokemon.color_2}">${pokemon.pokemon}</h2>
        <div class ="stats-img">
        <ul>
        <li>No.: ${pokemon.id} </li>
        <li>Type: ${pokemon.type_1}</li>
        <li>Type: ${pokemon.type_2}</li>
        <li>Attack: ${pokemon.attack}</li>
        <li>Defense: ${pokemon.defense}</li>
        </ul>
        <img src=${pokemon.url_image}>
        </div>
    </div>
    `;
    }
}

export default SinglePokemon;