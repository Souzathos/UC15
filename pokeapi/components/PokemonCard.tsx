import { Image, Pressable, StyleSheet, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { capitalizar } from '../api/pokeapi'
import { useApp } from '../context/AppContext'
import { PokemonResumo } from '../types/pokemon'

interface Props {
  pokemon: PokemonResumo
  onPress?: () => void
  children?: ReactNode
}

const PokemonCard = ({ pokemon, onPress, children }: Props) => {
    const { cores } = useApp()

  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, { backgroundColor: cores.card, borderColor: cores.borda }]}
    >
      <Image source={{uri: pokemon.imagem}} style={styles.imagem} />
      <Text style={[styles.nome, { color: cores.texto }]}>{capitalizar(pokemon.nome)}</Text>
      {children}
    </Pressable>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 10
  },
  imagem: {
    width: 80,
    height: 80
  },
  nome: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold'
  }
})