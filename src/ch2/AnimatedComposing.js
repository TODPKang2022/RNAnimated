import React, {useRef} from 'react';
import {Animated, Text, Button} from 'react-native';

// sequence, delay, parallel, stagger

export default function AnimatedComposing() {
  const translateXAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(-200)).current;

  const onButtonPress = () => {
    Animated.sequence([
      Animated.timing(translateYAnim, {
        toValue: 0,
        useNativeDriver: true,
      }),

      Animated.timing(translateXAnim, {
        toValue: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      <Button title="go away" onPress={onButtonPress} />
      <Animated.Text
        style={{
          fontSize: 70,
          transform: [
            {
              translateX: translateXAnim,
            },
            {
              translateY: translateYAnim,
            },
          ],
        }}>
        🍊
      </Animated.Text>
    </>
  );
}
