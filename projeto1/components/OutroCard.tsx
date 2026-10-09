import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const OutroCard = () => {
  return (
    <View style={styles.container}>
        <View style={styles.containerFoto}>
        <Image source={
        {uri:'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/07/messi_lagrimas-e1784503879598.jpg?w=1200&h=1200&crop=1'}}
        style={styles.foto}
        />
        </View>

        <Text style={styles.h1}>Titulo</Text>
        <Text>balbalblablablablalb</Text>
        <TouchableOpacity style={styles.botao}>
            <Text>
                Aperta ai tio
            </Text>
        </TouchableOpacity>

    </View>
  )
}

export default OutroCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'

    }, containerFoto: {
        height: 100,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1
    }, foto: {
        borderRadius: 100,
        height: 80,
        width: 80,
        borderColor: 'black',
        borderWidth: 1
    },
    h1: {
        fontSize: 20
    },
    botao: {
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1
    }
})