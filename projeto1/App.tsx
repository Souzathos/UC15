import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import OutroCard from './components/OutroCard';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Botao from './components/Botao';

export default function App() {
  return (
      <SafeAreaProvider style={styles.container}>
        <SafeAreaView>
          <OutroCard />
          <Botao texto='Salvar'/>
          <Botao texto='clica ai'/>
          <Botao texto='bill'/>

        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9999ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  texto: {
    color: 'red'
  }
});
