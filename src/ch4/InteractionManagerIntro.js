import React, {useRef, useEffect, useState} from 'react';
import {
  Animated,
  View,
  Text,
  Button,
  SafeAreaView,
  Alert,
  Platform,
  UIManager,
  LayoutAnimation,
  InteractionManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default function InteractionManagerIntro() {
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    const InteractionManagerPromise = InteractionManager.runAfterInteractions(
      () => {
        //애니메이션이 끝나면 작동되는 액션
        Alert.alert('hello interaction');
      },
    );
    return () => InteractionManagerPromise.cancel();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.Text style={{fontSize: 50, opacity: opacityAnim}}>
        🍊
      </Animated.Text>
    </View>
  );
}
