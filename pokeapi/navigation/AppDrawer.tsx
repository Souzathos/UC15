import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import AppTabs from './AppTabs';
import FavoritosPage from '../pages/FavoritosPage';
import ConfiguracoesPage from '../pages/ConfiguracoesPage';
import { useApp } from '../context/AppContext';
import type { AppDrawerParamList } from '../types/navigation';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function AppDrawer() {
  const { cores } = useApp();

  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      screenOptions={{ headerShown: false, drawerActiveTintColor: cores.destaque }}
    >
      <Drawer.Screen
        name="Inicio"
        component={AppTabs}
        options={{
          title: 'Pokédex',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favoritos"
        component={FavoritosPage}
        options={{
          title: 'Favoritos',
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configuracoes"
        component={ConfiguracoesPage}
        options={{
          title: 'Configurações',
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
