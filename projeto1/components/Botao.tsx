import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


interface btnProp {
    texto: string,
}

const Botao = ({texto}: btnProp) => {
  return (
    <View>
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Botao

const styles = StyleSheet.create({
    botao: {
        backgroundColor: 'lightgreen',
        paddingHorizontal: 20,
        paddingVertical: 10,    
    },
    texto: {
        color: 'black'
    }
})