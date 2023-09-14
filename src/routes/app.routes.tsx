import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { Profile } from '@screens/Profile';

type AppRoutes = {
  profile: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}
