import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { buscarPokemon, capitalizar } from '../api/pokeapi'
import { useApp } from '../context/AppContext'
import { PokemonStackParamList } from '../types/navigation'
import { PokemonDetalhe } from '../types/pokemon'

type Props = NativeStackScreenProps<PokemonStackParamList, 'Detalhes'>

const DetalhesPage = ({ navigation, route }: Props) => {
    const { nome } = route.params
    const { cores, ehFavorito, alternarFavorito } = useApp()
    const [pokemon, setPokemon] = useState<PokemonDetalhe | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [erro, setErro] = useState<string | null>(null)


    async function carregar() {
      setLoading(true)
      setErro(null)
      try {
            const dados = await buscarPokemon(nome)
            setPokemon(dados)
            navigation.setOptions({ title: capitalizar(dados.nome) })
        } catch {
            setErro('Não foi possível carregar os detalhes.')
        } finally {
          setLoading(false)
        }
    }

    useEffect(() => {
      carregar()
    }, [nome])

    if(loading) {
      return (
          <View style={[styles.centro, { backgroundColor: cores.fundo }]}>
            <ActivityIndicator size="large"/>
          </View>
      )
    }

    if(erro || !pokemon) {
      return (
          <View style={[styles.centro, { backgroundColor: cores.fundo }]}>
            <Text style={styles.erro}>{erro ?? 'Pokémon não encontrado.'}</Text>
          </View>
      )
    }

    const favorito = ehFavorito(pokemon.nome)


  return (
    <ScrollView style={{ backgroundColor: cores.fundo }} contentContainerStyle={styles.container}>
      <Image source={{uri: pokemon.imagem}} style={styles.imagem} />
      <Text style={[styles.titulo, { color: cores.texto }]}>{capitalizar(pokemon.nome)} (#{pokemon.id})</Text>

      <Text style={{ color: cores.texto }}>Tipo: {pokemon.tipos.map(capitalizar).join(', ')}</Text>
      <Text style={{ color: cores.texto }}>Altura: {pokemon.altura} m</Text>
      <Text style={{ color: cores.texto }}>Peso: {pokemon.peso} kg</Text>

      <Pressable style={styles.botao} onPress={() => alternarFavorito(pokemon)}>
        <Text style={styles.textoBotao}>
          {favorito ? 'Remover dos favoritos' : 'Favoritar'}
        </Text>
      </Pressable>
    </ScrollView>
  )
}

export default DetalhesPage

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    gap: 6
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagem: {
    width: 200,
    height: 200
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  erro: {
    color: 'red'
  },
  botao: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 4,
    marginTop: 10
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold'
  }
})