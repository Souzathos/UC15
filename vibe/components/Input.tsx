import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { ComponentProps, useState } from 'react'
import { Ionicons } from '@react-native-vector-icons/ionicons'
import { cores } from '../theme/cores'

interface Props {
  icone: ComponentProps<typeof Ionicons>['name']
  placeholder: string
  valor: string
  onChange: (texto: string) => void
  senha?: boolean
}

const Input = ({ icone, placeholder, valor, onChange, senha = false }: Props) => {
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <Ionicons name={icone} size={20} color={cores.branco} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor='lightgray'
        value={valor}
        onChangeText={onChange}
        secureTextEntry={senha && !mostrarSenha}
        autoCapitalize='none'
      />
      {senha && (
        <Pressable onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Ionicons name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'} size={20} color={cores.branco} />
        </Pressable>
      )}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: cores.lilas,
    borderRadius: 25
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: cores.branco,
    fontSize: 16
  }
})
