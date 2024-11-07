import { API_POKEMON_BASE_URL } from '../config.js';

// Hämta pokemons från Pokemon API 
async function getPokemons() {
    try {
        const response = await fetch(API_POKEMON_BASE_URL);

        if(!response.ok) {
            throw new Error("HTTP" + response.status);
        }
        const data = await response.json();
        return data.results;

    } catch(error) {
        console.log(error);
    }

}

// Hämta pokemon details från Pokemon API
async function getPokemonDetails(pokemonName) {
    try {
        const response = await fetch(`${API_POKEMON_BASE_URL}/${pokemonName}`);

        if(!response.ok) {
            throw new Error("HTTP" + response.status);
        }
        const data = await response.json();
        return data;

    } catch(error) {
        console.log(error);
    }

}

export { getPokemons, getPokemonDetails };