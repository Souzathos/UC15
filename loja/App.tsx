import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaProdutos from './components/ListaProdutos';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Busca from './components/Busca';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
          <Busca />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
