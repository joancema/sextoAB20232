import { getPokemonById } from './functions'



(async ()=>{
    const pokemonFound= await getPokemonById("1");
    console.log(pokemonFound.forms[0].name);
})();

// getPokemonById("1").then(pokemon => { console.log(pokemon) })