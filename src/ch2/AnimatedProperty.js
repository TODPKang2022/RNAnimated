import React, {useRef} from 'react';
import {Animated, Text, View, Button} from 'react-native';

export default function AnimatedProperty() {
  const heightAnim = useRef(new Animated.Value(100)).current;

  const onButtonPress = () => {
    Animated.timing(heightAnim, {
      toValue: 200,
      useNativeDriver: false, // style 수정 하려고 false 로 바꿈
    }).start();
  };

  return (
    <>
      <Button title="move!" onPress={onButtonPress} />
      <Animated.View
        // style={{width: 100, height: heightAnim, backgroundColor: '#ffa100'}} // style 변경 예제
        style={{
          width: 100,
          height: heightAnim,
          backgroundColor: heightAnim.interpolate({
            inputRange: [100, 200],
            outputRange: ['#ffa100', '#aff100'],
          }),
          transform: [
            {
              rotate: heightAnim.interpolate({
                inputRange: [100, 200],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }} // 보간법 활용 변경 예제, input range가 바뀔때 같이 output range가 바뀜
      />
    </>
  );
}
