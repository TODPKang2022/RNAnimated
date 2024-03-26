import React, {useRef, useEffect, useState} from 'react';
import {
  Animated,
  View,
  Text,
  Button,
  SafeAreaView,
  Alert,
  Dimensions,
  Platform,
  UIManager,
  PanResponder,
  InteractionManager,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default function ViewLayoutEvent() {
  return (
    <View
      onLayout={event => {
        console.log(event.nativeEvent);
      }}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello</Text>
    </View>
  );
}
