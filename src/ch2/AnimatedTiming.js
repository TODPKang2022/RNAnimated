import React, {useRef, useEffect} from 'react';
import {Animated, Text, Button, Easing} from 'react-native';

export default function AnimatedTiming() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  const onButtonPress = () => {
    translateXAnim.setValue(-100);

    Animated.timing(translateXAnim, {
      toValue: 100,
      duration: 1000,
      delay: 0,
      //   easing: Easing.inOut(Easing.ease),
      //   easing: Easing.inOut(Easing.back(2)),
      //   easing: Easing.in(Easing.bounce),
      //   easing: Easing.in(Easing.elastic(2)), // 숫자가 크면 많이 넘어감
      easing: Easing.out(Easing.circle),
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button title="move!" onPress={onButtonPress} />
      <Animated.Text
        style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}>
        🍊
      </Animated.Text>
    </>
  );
}
