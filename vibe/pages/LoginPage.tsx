import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginBox from '../components/LoginBox'
import { cores } from '../theme/cores'

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_vibe.png')} style={styles.logo} resizeMode='contain' />
      <Text style={styles.slogan}>Seu mundo, suas conexões.</Text>

      <LoginBox />
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: cores.roxo
  },
  logo: {
    width: 250,
    height: 90
  },
  slogan: {
    color: cores.branco,
    fontSize: 16,
    marginBottom: 30
  }
})
