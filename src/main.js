import { getPokemons, getPokemonDetails } from './api/pokemon-api.js';
import { capitalizeFirstLetter } from './utils/helpers.js';

const section = document.getElementById("pokemons");

// Visa alla pokemons i en lista
async function displayCardPokemons() {

    const pokemons = await getPokemons();

    for(const pokemon of pokemons) {
    
        const card = document.createElement("article");
        card.classList.add("pokemon-card");
        card.textContent = pokemon.name;
        section.appendChild(card);

        const pokemonDetails = await getPokemonDetails(pokemon.name);
        console.log(pokemonDetails)

        const image = document.createElement("img");
        image.src = pokemonDetails.sprites.front_default;
        card.appendChild(image);

        const types = pokemonDetails.types;
        types.forEach((type) => {
            const p = document.createElement("p");
            p.textContent = capitalizeFirstLetter(type.type.name);
            card.appendChild(p);
        })
    }

}

displayCardPokemons();

