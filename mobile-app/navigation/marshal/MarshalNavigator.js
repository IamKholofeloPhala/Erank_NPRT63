import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MarshalDashboard from '../../screens/marshal/MarshalDashboard';

const Stack = createNativeStackNavigator();

export default function MarshalNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MarshalDashboard"
        component={MarshalDashboard}
      />
    </Stack.Navigator>
  );
}