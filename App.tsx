import {
  Raleway_400Regular,
  Raleway_400Regular_Italic,
  Raleway_500Medium,
  Raleway_700Bold,
  Raleway_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/raleway';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

import { Loading } from '@components/atoms/Loading';

import { Routes } from './src/routes';
import './src/utils/config/reactotron';

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_700Bold,
    Raleway_400Regular_Italic,
    Raleway_700Bold_Italic,
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        {fontsLoaded ? <Routes /> : <Loading />}
      </>
    </ThemeProvider>
  );
}
