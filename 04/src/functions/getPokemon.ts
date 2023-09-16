import  {httpClientPlugin as http  }  from '../plugins';
import { IPokemon } from '../interfaces/IPokemon';

export const getPokemonById = async( id:string ):Promise<IPokemon> => {
  const url:string = `https://pokeapi.co/api/v2/pokemon/${ id }`;
  const pokemon = await http.get<IPokemon>( url );
  return pokemon;
}

