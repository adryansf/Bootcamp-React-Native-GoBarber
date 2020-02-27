import React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Pages
import Dashboard, { options as dashboardOptions } from '~/pages/Dashboard';
import Profile, { options as profileOptions } from '~/pages/Profile';

// Appointments Routes
import Appointments, {
  options as appointmentsOptions,
} from './appointments.routes';

const Tab = createBottomTabNavigator();

export default function Default() {
  const settingsTab = {
    activeTintColor: '#FFF',
    style: { backgroundColor: '#8d41a8' },
    inactiveTintColor: 'rgba(255,255,255,0.6)',
    keyboardHidesTabBar: true,
  };

  return (
    <Tab.Navigator tabBarOptions={settingsTab}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={dashboardOptions}
      />
      <Tab.Screen
        name="Appointments"
        component={Appointments}
        options={appointmentsOptions}
      />
      <Tab.Screen name="Profile" component={Profile} options={profileOptions} />
    </Tab.Navigator>
  );
}
