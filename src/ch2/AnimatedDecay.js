import React, {useRef, useEffect} from 'react';
import {Animated, Text, Button, View} from 'react-native';

export default function AnimatedDecay() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  const onButtonPress = () => {
    // translateXAnim.setValue(-100);

    Animated.decay(translateXAnim, {
      velocity: 1,
      deceleration: 0.995,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button title="spring~~!" onPress={onButtonPress} />
      <Animated.Text
        style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}>
        🍊
      </Animated.Text>
    </>
  );
}
