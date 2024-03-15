import React, {useRef} from 'react';
import {Animated, Text, Button} from 'react-native';

export default function AnimatedComponents() {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const onButtonPress = () => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button title="go away" onPress={onButtonPress} />
      <Animated.Text style={{fontSize: 70, opacity: opacityAnim}}>
        🍊
      </Animated.Text>
    </>
  );
}
