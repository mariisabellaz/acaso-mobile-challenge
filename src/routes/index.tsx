import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';

type RouteProps = {
  onLayout: () => void;
};

export function Routes({ onLayout }: RouteProps) {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND.PRIMARY }} onLayout={onLayout}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
