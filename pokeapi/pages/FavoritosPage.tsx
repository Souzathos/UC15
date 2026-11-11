import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PokemonCard from '../components/PokemonCard'
import { useApp } from '../context/AppContext'

const FavoritosPage = () => {
    const { favoritos, alternarFavorito, cores } = useApp()

    if(favoritos.length === 0) {
      return (
          <View style={[styles.vazio, { backgroundColor: cores.fundo }]}>
            <Text style={{ color: cores.texto }}>Nenhum favorito ainda.</Text>
          </View>
      )
    }

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.nome}
        renderItem={({item}) => (
          <PokemonCard pokemon={item}>
            <Pressable style={styles.botao} onPress={() => alternarFavorito(item)}>
              <Text style={styles.textoBotao}>Remover</Text>
            </Pressable>
          </PokemonCard>
        )}
      />
    </View>
  )
}

export default FavoritosPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  vazio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: 'red',
    padding: 6,
    borderRadius: 4,
    marginRight: 4
  },
  textoBotao: {
    color: 'white'
  }
})