import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'


interface Character {
  id: number
  name: string
  species: string
  gender: string
  image: string
  status: string
}

const CardCharacter = () => {
    const [character, setCharacter] = useState<Character[]>([])
    const [search, setSearch] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    

    async function findCharacter() {
      try {
            const res = await fetch('https://rickandmortyapi.com/api/character/')
            if(!res.ok) throw new Error('Falha na requisição')
            const data = await res.json()
            setCharacter(data.results)
        } catch {
            setError('Não foi possível listar os personagens.')
        } finally {
          setLoading(false)
        }
    }

    
    useEffect(() => {
      findCharacter()
    }, [])
    
    if(loading) {
      return (
          <View style={styles.loading}>
            <ActivityIndicator size="large"/>
            <Text>Loading...</Text>
          </View>
      )

    }
    
    const searchCharacter = character.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <View style={styles.container}>

      {error && (
        <Text style={styles.error}>{error}</Text>
      )}
      <View style={styles.containerSearchBar}>
        <TextInput 
        style={styles.searchBar}
        placeholder='Busque um personagem...'
        value={search}
        onChangeText={setSearch}
      />
      </View>
      <View style={styles.preCard}>
        <FlatList 
          data={searchCharacter}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            
              <View style={styles.card}>  
              
                  <Image source={
                    {uri: `${item.image}`}}
                    style={styles.image}
                    />
                  <Text style={styles.name}>{item.name}</Text>
                  <Text>Specie: {item.species}</Text>
                  <Text>Gender: {item.gender}</Text>
                  <Text>Status: {item.status}</Text>
                
              </View>
          )}
        />
      </View>
    </View>
  )
}

export default CardCharacter

const styles = StyleSheet.create({
  container: {
      
  },
  image: {
    height: 150
  }, 
  card: {
    gap: 6,
    padding: 4,
    borderWidth: 0.5, 
    marginBottom: 25,
    minWidth: '95%',
    boxShadow: '0px 10px 15px 0px rgba(0, 0, 0, 0.25)',
    shadowRadius: 4,
    borderRadius: 4
    
  },
  searchBar: {
    height: 50,
    width: '95%',
    padding: 4,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    justifyContent: 'center'

  },
  containerSearchBar: {
    width: '100%',
    alignItems: 'center'
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  preCard: {
    alignItems: 'center'
  },
  error: {
    color: 'red',
    textAlign: 'center'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})