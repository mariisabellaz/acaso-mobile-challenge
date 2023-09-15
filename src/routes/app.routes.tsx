import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AddPhoto } from '@screens/AddPhoto';
import { Profile } from '@screens/Profile';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="addPhoto" component={AddPhoto} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}
