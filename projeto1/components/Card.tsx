import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome: Athao</Text>
      <Image source={
        {uri:'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/07/messi_lagrimas-e1784503879598.jpg?w=1200&h=1200&crop=1'}}
        style={styles.foto}
        />
      <TouchableOpacity style={styles.botao} onPress={() => alert('Botao clicado xd')}>
        <Text >Clique</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        borderRadius: 15,
        padding: 10,
        gap: 10
    },
    texto: {
        color: 'red',
        textAlign: 'center'
    },
    botao: {
        backgroundColor: 'lightgreen',
        borderRadius: 50,
        paddingVertical: 5,
        alignItems: 'center'
    },
    foto: {
        height: 100,
    }
})