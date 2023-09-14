import {
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_700Bold,
  Raleway_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/raleway';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import React, { useCallback } from 'react';

import { ThemeProvider } from 'styled-components/native';

import { Routes } from './src/routes';
import theme from './src/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_700Bold,
    Raleway_700Bold_Italic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <Routes onLayout={onLayoutRootView} />
      </>
    </ThemeProvider>
  );
}
