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
  PanResponder,
  InteractionManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default function PanresponderBall() {
  const panAnim = useRef(new Animated.ValueXY(0)).current;

  const [status, setStatus] = useState({
    dx: 0, // 터치 후 누적거리
    dy: 0,
    moveX: 0, // 제일 최근에 찍힌 좌표 (절대좌표)
    moveY: 0,
    vx: 0, // 제스처의 속도
    vy: 0,
    x0: 0, // 터치 시작 지점
    y0: 0,
  });

  const panResponder = PanResponder.create({
    // permission method
    onMoveShouldSetPanResponder: () => true,
    // response method

    // handler method

    onPanResponderMove: Animated.event([null, {dx: panAnim.x, dy: panAnim.y}], {
      useNativeDriver: false,
    }), // --------------------
    onPanResponderEnd: (evt, gestureState) => {
      Animated.decay(panAnim, {
        useNativeDriver: true,
        deceleration: 0.997,
        velocity: {x: gestureState.vx / 5, y: gestureState.vy / 5},
      }).start();
    },
    onPanResponderRelease: (evt, gestureStat) => {
      setTimeout(() => {
        panAnim.setValue({x: 0, y: 50});
        Animated.spring(panAnim, {
          toValue: {x: 0, y: 0},
          friction: 7,
          tension: 30,
          useNativeDriver: true,
        }).start();
      }, 2000);
    }, // 최후에 호출 됨
  });

  const moveXSize = Math.floor(status.moveX - status.x0);
  const moveYSize = Math.floor(status.moveY - status.y0);

  return (
    <View
      {...panResponder.panHandlers}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 20,
          transform: [{translateX: panAnim.x}, {translateY: panAnim.y}],
        }}>
        <Text style={{fontSize: 100}}>⚽️</Text>
      </Animated.View>
    </View>
  );
}
