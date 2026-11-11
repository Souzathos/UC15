import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import AppDrawer from './navigation/AppDrawer';
import { AppProvider, useApp } from './context/AppContext';

function Navegacao() {
  const { temaEscuro } = useApp();

  return (
    <NavigationContainer theme={temaEscuro ? DarkTheme : DefaultTheme}>
      <StatusBar style={temaEscuro ? 'light' : 'dark'} />
      <AppDrawer />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppProvider>
          <Navegacao />
        </AppProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
