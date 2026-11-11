import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PokemonsPage from '../pages/PokemonsPage';
import DetalhesPage from '../pages/DetalhesPage';
import type { PokemonStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<PokemonStackParamList>();

export default function PokemonStack() {
  return (
    <Stack.Navigator initialRouteName="Lista">
      <Stack.Screen
        name="Lista"
        component={PokemonsPage}
        options={{ title: 'Pokédex' }}
      />
      <Stack.Screen
        name="Detalhes"
        component={DetalhesPage}
        options={{ title: 'Detalhes' }}
      />
    </Stack.Navigator>
  );
}
