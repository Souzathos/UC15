import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { cores } from '../theme/cores'

interface Props {
  texto: string
  onPress?: () => void
}

const Botao = ({ texto, onPress }: Props) => {
  return (
    <Pressable style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </Pressable>
  )
}

export default Botao

const styles = StyleSheet.create({
  botao: {
    backgroundColor: cores.coral,
    padding: 14,
    borderRadius: 25,
    alignItems: 'center'
  },
  texto: {
    color: cores.branco,
    fontSize: 16,
    fontWeight: 'bold'
  }
})
