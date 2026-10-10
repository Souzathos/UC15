import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import OutroCard from './components/OutroCard';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Botao from './components/Botao';
import Cartao from './components/Cartao';

export default function App() {
  return (
      <SafeAreaProvider style={styles.container}>
        <SafeAreaView>
        <ScrollView>
          <Cartao
            titulo="Tênis Runner"
            preco={299}
            onComprar={() => console.log('comprou o tênis!')}
          />
        </ScrollView>
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
