import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

type RouteProps = {
  onLayout: () => void;
};

export function Routes({ onLayout }: RouteProps) {
  const [auth, setAuth] = useState(false);
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND.PRIMARY }} onLayout={onLayout}>
      <NavigationContainer>{auth ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>
    </View>
  );
}
