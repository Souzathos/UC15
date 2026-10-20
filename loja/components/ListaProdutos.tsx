import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { produtos } from '../data/Produto'



const ListaProdutos = () => {
  return (
    <View>
        <FlatList 
            // oropriedade que indica de onde vem os dados
            data={produtos}
            // aqui indicamos qual o identificador. Ele DEVE ser em string
            keyExtractor={(item) => item.id}
            // Aqui montamos como vamos renderizar o componente
            renderItem={({ item }) => (
                <View>
                    <Text>{item.titulo}</Text>
                    <Text>R$ {item.preco}</Text>
                </View>
            )}
        />
    </View>
  )
}

export default ListaProdutos

const styles = StyleSheet.create({})