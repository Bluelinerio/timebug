import React from 'react'
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';

export const withStyle = style => ({ children }) => (
  <View style={style}>{children}</View>
);
export const scrollViewWithStyle = style => ({ children }) => (
  <KeyboardAvoidingView style={style}>
    <ScrollView>
      {children}
    </ScrollView>
  </KeyboardAvoidingView>
);