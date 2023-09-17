import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ConfirmEmail } from '@screens/ConfirmEmail';
import { Login } from '@screens/Login';
import { SingUp } from '@screens/SingUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="singup" component={SingUp} />
      <Screen name="confirmemail" component={ConfirmEmail} />
    </Navigator>
  );
}
