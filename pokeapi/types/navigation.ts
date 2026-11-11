import { NavigatorScreenParams } from '@react-navigation/native'

export type PokemonStackParamList = {
    Lista: undefined
    Detalhes: { nome: string }
}

export type AppTabParamList = {
    Pokemons: NavigatorScreenParams<PokemonStackParamList>
    Favoritos: undefined
    Configuracoes: undefined
}

export type AppDrawerParamList = {
    Inicio: NavigatorScreenParams<AppTabParamList>
    Favoritos: undefined
    Configuracoes: undefined
}