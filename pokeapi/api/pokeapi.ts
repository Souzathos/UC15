import { PokemonDetalhe } from '../types/pokemon'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export const POKEMONS_INICIAIS = ['pikachu', 'charmander', 'bulbasaur']

export async function buscarPokemon(nome: string): Promise<PokemonDetalhe> {
    const res = await fetch(`${BASE_URL}/${nome}`)
    if(!res.ok) throw new Error('Falha na requisição')
    const data = await res.json()

    return {
        id: data.id,
        nome: data.name,
        imagem: data.sprites.other?.['official-artwork']?.front_default ?? data.sprites.front_default,
        tipos: data.types.map((t: { type: { name: string } }) => t.type.name),
        // a api manda em decimetros e hectogramas, entao divide por 10
        altura: data.height / 10,
        peso: data.weight / 10
    }
}

export async function buscarTresPokemons(): Promise<PokemonDetalhe[]> {
    return Promise.all(POKEMONS_INICIAIS.map((nome) => buscarPokemon(nome)))
}

export function capitalizar(texto: string) {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}