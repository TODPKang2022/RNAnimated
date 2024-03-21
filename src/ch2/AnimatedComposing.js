import React, {useRef} from 'react';
import {Animated, Text, Button} from 'react-native';

// sequence, delay, parallel, stagger

export default function AnimatedComposing() {
  const translateXAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(-200)).current;

  const onButtonPress = () => {
    // stagger 쓰면 여러개 앞에 delay를 한번에 줄 수 있음
    // sequence 대신 parallel을 쓰면 여러개중 하나가 멈추면 같이 멈춤
    Animated.sequence([
      Animated.timing(translateYAnim, {
        toValue: 0,
        useNativeDriver: true,
      }),

      // Animated.delay(1000),
      // 아래 timing 안에 넣어도 됨

      Animated.timing(translateXAnim, {
        toValue: 100,
        delay: 1000,
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
