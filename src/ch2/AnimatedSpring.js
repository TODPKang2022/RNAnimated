import React, {useRef, useEffect} from 'react';
import {Animated, Text, Button, View} from 'react-native';

export default function AnimatedSpring() {
  const translateYAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    // unMount 적용
    return () => translateYAnim.removeAllListeners;
  });

  const onButtonPress = () => {
    translateYAnim.setValue(-100);

    Animated.spring(translateYAnim, {
      toValue: 100,

      //   bounciness: 16, // 탄력 제어
      //   speed: 12,

      friction: 2, // 에너지를 소비
      tension: 100, // 스프링이 얼마나 많은 에너지를 가졌는가

      //   stiffness: 100, // 스프링의 강도
      //   damping: 2, // 마찰력
      //   mass: 10, // 용수철 끝에 매달려 있는 물체의 질량

      velocity: 20,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Button title="spring~~!" onPress={onButtonPress} />
      <Animated.Text
        style={{fontSize: 70, transform: [{translateY: translateYAnim}]}}>
        🍊
      </Animated.Text>
    </View>
  );
}
