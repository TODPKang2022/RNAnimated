import React, {useRef, useEffect} from 'react';
import {Animated, Text, Button} from 'react-native';

// value 종류
// setValue();
// addListener(callback);
// removeAllListener();
// stopAnimation(); 애니메이션 멈춤
// resetAnimation(); 애니메이션 초기값으로 돌아감
// setOffset();
// flattenOffset();
// extractOffset();

export default function AnimatedValue() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    // unMount 적용
    return () => translateXAnim.removeAllListeners;
  });

  const onButtonPress = () => {
    translateXAnim.setValue(-100);
    translateXAnim.addListener(({value}) => console.log(value));

    setTimeout(() => {
      translateXAnim.resetAnimation();
    }, 500);

    Animated.timing(translateXAnim, {
      toValue: 100,
      duration: 1000,
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
