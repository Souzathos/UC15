import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { produtos } from '../data/Produto'

const Busca = () => {
    const [busca, setBusca] = useState('')

    const produtosFiltrados = produtos.filter((produto) => produto.titulo.toLowerCase().includes(busca.toLowerCase()))


  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.input}
            placeholder='Buscar produto...'
            value={busca}
            onChangeText={setBusca}
        />

        <FlatList 
            data={produtosFiltrados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.titulo}>{item.titulo}</Text>
                    <Text style={styles.preco}>R$ {item.preco}</Text>
                </View>
            )}
        />
    </View>
  )
}

export default Busca

const styles = StyleSheet.create({
    container: { padding: 16 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
    },
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    titulo: { fontSize: 16, fontWeight: '600' },
    preco: { color: '#2e7d32', marginTop: 4 },
})