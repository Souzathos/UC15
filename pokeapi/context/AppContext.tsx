import React, { createContext, ReactNode, useContext, useState } from 'react'
import { PokemonResumo } from '../types/pokemon'

const temaClaro = {
  fundo: 'white',
  card: 'white',
  texto: 'black',
  textoSecundario: 'gray',
  borda: 'black',
  destaque: 'red'
}

const temaEscuroCores = {
  fundo: '#222',
  card: '#333',
  texto: 'white',
  textoSecundario: 'lightgray',
  borda: 'gray',
  destaque: 'red'
}

interface AppContextType {
  favoritos: PokemonResumo[]
  alternarFavorito: (pokemon: PokemonResumo) => void
  ehFavorito: (nome: string) => boolean
  temaEscuro: boolean
  alternarTema: () => void
  cores: typeof temaClaro
}

const AppContext = createContext<AppContextType | null>(null)

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [favoritos, setFavoritos] = useState<PokemonResumo[]>([])
    const [temaEscuro, setTemaEscuro] = useState<boolean>(false)


    function ehFavorito(nome: string) {
      return favoritos.some((p) => p.nome === nome)
    }

    function alternarFavorito(pokemon: PokemonResumo) {
      if(ehFavorito(pokemon.nome)) {
        setFavoritos(favoritos.filter((p) => p.nome !== pokemon.nome))
      } else {
        setFavoritos([...favoritos, { nome: pokemon.nome, imagem: pokemon.imagem }])
      }
    }

    function alternarTema() {
      setTemaEscuro(!temaEscuro)
    }

  return (
    <AppContext.Provider
      value={{
        favoritos,
        alternarFavorito,
        ehFavorito,
        temaEscuro,
        alternarTema,
        cores: temaEscuro ? temaEscuroCores : temaClaro
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
    const context = useContext(AppContext)
    if(!context) throw new Error('useApp precisa estar dentro do AppProvider')
    return context
}