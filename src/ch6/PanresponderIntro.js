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

export default function PanresponderIntro() {
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
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    // response method
    onPanResponderGrant: () => {}, // 터치가 잘 됐는지
    onPanResponderReject: () => {}, // 터치가 잘 안됐을 때
    // handler method
    onPanResponderStart: (evt, gestureState) => {
      setStatus({
        x0: gestureState.x0,
        y0: gestureState.y0,
      });
    }, // --------------------
    onPanResponderMove: (evt, gestureState) => {
      console.log(gestureState);
      setStatus({
        ...gestureState,
        x0: status.x0,
        y0: status.y0,
      });
    }, // --------------------
    onPanResponderRelease: () => {}, // 최후에 호출 됨
  });

  const moveXSize = Math.floor(status.moveX - status.x0);
  const moveYSize = Math.floor(status.moveY - status.y0);

  return (
    <View
      {...panResponder.panHandlers}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {moveXSize > 0 ? (
        <Text>{moveXSize} 만큼 오른쪽으로 가는 중</Text>
      ) : (
        <Text>{-moveXSize} 만큼 왼쪽으로 가는 중</Text>
      )}
      {moveYSize > 0 ? (
        <Text>{moveYSize} 만큼 아래로 가는 중</Text>
      ) : (
        <Text>{-moveYSize} 만큼 위로 가는 중</Text>
      )}
      <View style={{position: 'absolute', bottom: 70, left: 10}}>
        <Text>dx: {status.dx} </Text>
        <Text>dy: {status.dy} </Text>
        <Text>moveX: {status.moveX} </Text>
        <Text>moveY: {status.moveY} </Text>
        <Text>vx: {status.vx} </Text>
        <Text>vy: {status.vy} </Text>
        <Text>x0: {status.x0} </Text>
        <Text>y0: {status.y0} </Text>
      </View>
    </View>
  );
}
