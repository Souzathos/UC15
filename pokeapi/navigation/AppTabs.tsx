import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PokemonStack from './PokemonStack';
import FavoritosPage from '../pages/FavoritosPage';
import ConfiguracoesPage from '../pages/ConfiguracoesPage';
import { useApp } from '../context/AppContext';
import type { AppTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<AppTabParamList>();

export default function AppTabs() {
  const { cores } = useApp();

  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: cores.destaque }}>
      <Tab.Screen
        name="Pokemons"
        component={PokemonStack}
        options={{
          title: 'Pokémon',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavoritosPage}
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Configuracoes"
        component={ConfiguracoesPage}
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
