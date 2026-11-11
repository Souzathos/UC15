export interface PokemonResumo {
    nome: string
    imagem: string
}

export interface PokemonDetalhe extends PokemonResumo {
    id: number
    tipos: string[]
    altura: number
    peso: number
}