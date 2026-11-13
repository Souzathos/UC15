import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Botao from './Botao'
import { cores } from '../theme/cores'

const LoginBox = () => {
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  return (
    <View style={styles.card}>
      <Input icone='mail-outline' placeholder='E-mail' valor={email} onChange={setEmail} />
      <Input icone='lock-closed-outline' placeholder='Senha' valor={senha} onChange={setSenha} senha />

      <Pressable style={styles.esqueceu}>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </Pressable>

      <Botao texto='Entrar' />

      <Text style={styles.rodape}>
        Não tem conta? <Text style={styles.link}>Criar conta</Text>
      </Text>
    </View>
  )
}

export default LoginBox

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderColor: cores.violeta,
    borderRadius: 20
  },
  esqueceu: {
    alignSelf: 'flex-end',
    marginBottom: 20
  },
  link: {
    color: cores.coral,
    fontWeight: 'bold'
  },
  rodape: {
    color: cores.branco,
    textAlign: 'center',
    marginTop: 20
  }
})
