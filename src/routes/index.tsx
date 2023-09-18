import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { AuthProvider } from '@context/authContext';
import { UserProvider } from '@context/userContext';
import { useStorage } from '@hooks/useStorage';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { COLORS } = useTheme();
  const { userData } = useStorage();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND.PRIMARY }}>
      <NavigationContainer>
        <AuthProvider>
          <UserProvider>{userData ? <AppRoutes /> : <AuthRoutes />}</UserProvider>
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}
