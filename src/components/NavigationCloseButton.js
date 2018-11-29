import React from 'react';
import { Button, View, Platform } from 'react-native';

const NavigationCloseButton = ({ onPress }: { onPress: () => void }) => (
  <View
    style={{
      paddingRight: 16,
    }}
  >
    <Button
      title={'Close'}
      color={Platform.OS === 'ios' ? 'white' : 'transparent'}
      accessibilityLabel={'close'}
      backgroundColor={'transparent'}
      onPress={onPress}
    />
  </View>
);

export default NavigationCloseButton;
