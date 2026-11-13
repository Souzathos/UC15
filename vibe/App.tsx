import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginPage from './pages/LoginPage';
import { cores } from './theme/cores';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.roxo,
  },
});
