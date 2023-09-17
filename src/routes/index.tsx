import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { AuthProvider } from '@context/authContext';
import { UserProvider } from '@context/userContext';

// import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND.PRIMARY }}>
      <NavigationContainer>
        <AuthProvider>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}
