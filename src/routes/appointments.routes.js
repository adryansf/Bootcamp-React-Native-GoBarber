import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Octicons';

// Pages
import SelectProvider from '~/pages/Appointments/SelectProvider';
import SelectDateTime from '~/pages/Appointments/SelectDateTime';
import Confirm from '~/pages/Appointments/Confirm';

const Stack = createStackNavigator();

export default function Appointments({ navigation }) {
  const screenOptions = {
    headerTransparent: true,
    headerTintColor: '#fff',
    headerLeftContainerStyle: { marginLeft: 20 },
  };

  useEffect(() => {
    navigation.addListener('blur', () => {
      navigation.reset();
    });
  }, [navigation]);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SelectProvider" component={SelectProvider} />
      <Stack.Screen name="SelectDateTime" component={SelectDateTime} />
      <Stack.Screen name="Confirm" component={Confirm} />
    </Stack.Navigator>
  );
}

export const options = {
  tabBarLabel: 'Agendar',
  tabBarIcon: () => (
    <Icon size={20} name="plus" color="rgba(255,255,255,0.6)" />
  ),
  tabBarVisible: false,
};
