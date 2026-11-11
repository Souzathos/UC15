import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { buscarTresPokemons } from '../api/pokeapi'
import PokemonCard from '../components/PokemonCard'
import { useApp } from '../context/AppContext'
import { PokemonStackParamList } from '../types/navigation'
import { PokemonDetalhe } from '../types/pokemon'

type Props = NativeStackScreenProps<PokemonStackParamList, 'Lista'>

const PokemonsPage = ({ navigation }: Props) => {
    const { cores } = useApp()
    const [pokemons, setPokemons] = useState<PokemonDetalhe[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [erro, setErro] = useState<string | null>(null)


    async function carregar() {
      try {
            const lista = await buscarTresPokemons()
            setPokemons(lista)
        } catch {
            setErro('Não foi possível carregar os Pokémon.')
        } finally {
          setLoading(false)
        }
    }

    useEffect(() => {
      carregar()
    }, [])

    if(loading) {
      return (
          <View style={[styles.loading, { backgroundColor: cores.fundo }]}>
            <ActivityIndicator size="large"/>
            <Text style={{ color: cores.texto }}>Carregando...</Text>
          </View>
      )
    }


  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      {erro && (
        <Text style={styles.erro}>{erro}</Text>
      )}

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.nome}
        renderItem={({item}) => (
          <PokemonCard
            pokemon={item}
            onPress={() => navigation.navigate('Detalhes', { nome: item.nome })}
          />
        )}
      />
    </View>
  )
}

export default PokemonsPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  erro: {
    color: 'red',
    textAlign: 'center'
  }
})