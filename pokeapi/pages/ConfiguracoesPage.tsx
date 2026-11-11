import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import { useApp } from '../context/AppContext'

const ConfiguracoesPage = () => {
    const { temaEscuro, alternarTema, cores } = useApp()

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <View style={styles.linha}>
        <Text style={[styles.label, { color: cores.texto }]}>Tema escuro</Text>
        <Switch value={temaEscuro} onValueChange={alternarTema} />
      </View>
    </View>
  )
}

export default ConfiguracoesPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label: {
    fontSize: 16
  }
})