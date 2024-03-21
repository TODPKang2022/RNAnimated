import React, {useRef, useEffect} from 'react';
import {Animated, Text, Button} from 'react-native';

export default function AnimatedOtherMethod() {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const onButtonPress = () => {
    // 3번 반복
    Animated.loop(
      Animated.timing(opacityAnim, {
        toValue: 0,
        useNativeDriver: true,
      }),
      {iterations: 3},
    ).start();
  };

  return (
    <>
      <Button title="move!" onPress={onButtonPress} />
      <Animated.Text style={{fontSize: 70, opacity: opacityAnim}}>
        🍊
      </Animated.Text>
    </>
  );
}
