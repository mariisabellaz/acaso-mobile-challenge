import { AuthProvider } from '@context/authContext';
import { UserProvider } from '@context/userContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

const Stack = createNativeStackNavigator();

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND.PRIMARY }}>
      <NavigationContainer>
        <AuthProvider>
          <UserProvider>
            <Stack.Navigator initialRouteName="AuthRoutes" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
              <Stack.Screen name="AppRoutes" component={AppRoutes} />
            </Stack.Navigator>
          </UserProvider>
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}
