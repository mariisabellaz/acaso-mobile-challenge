import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AddPhoto } from '@screens/AddPhoto';
import { ConfirmEmail } from '@screens/ConfirmEmail';
import { Login } from '@screens/Login';
import { Profile } from '@screens/Profile';
import { SingUp } from '@screens/SingUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="singup" component={SingUp} />
      <Screen name="confirmemail" component={ConfirmEmail} />
      <Screen name="addphoto" component={AddPhoto} />
      <Screen name="profile" component={Profile} />
    </Navigator>
  );
}
