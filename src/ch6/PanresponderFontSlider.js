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
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default function PanresponderFontSlider() {
  const panAnim = useRef(new Animated.ValueXY(0)).current;
  const circleAnim = useRef(new Animated.Value(0)).current;

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
  const onPress = index => {
    setStep(index);
    Animated.spring(circleAnim, {
      toValue: index * BOX,
      friction: 7,
      tension: 50,
      useNativeDriver: true,
    }).start();
  };
  const panResponder = PanResponder.create({
    // permission method
    onMoveShouldSetPanResponder: () => true,
    // response method

    // handler method
    onStartShouldSetPanResponder: () => true,

    onPanResponderStart: (evt, gestureState) => {
      //   console.log(gestureState);
    },

    onPanResponderMove: (evt, gestureState) => {
      //   console.log(gestureState);
      circleAnim.setValue(gestureState.dx + step * BOX);
    },
    onPanResponderEnd: (evt, gestureState) => {
      //   console.log(gestureState);
      const fontstep = step + Math.round(gestureState.dx / 50);
      const toValue = fontstep * BOX;

      setStep(fontstep);
      Animated.spring(circleAnim, {
        toValue,
        friction: 7,
        tension: 50,
        useNativeDriver: true,
      }).start();
    },
  });

  const moveXSize = Math.floor(status.moveX - status.x0);
  const moveYSize = Math.floor(status.moveY - status.y0);

  const BOX = 50;
  const CIRCLE = 20;

  const [step, setStep] = useState(0);

  const FONT = [
    {
      title: {fontSize: 20, lineHeight: 32},
      body: {fontSize: 12},
    },
    {
      title: {fontSize: 24, lineHeight: 38},
      body: {fontSize: 14},
    },
    {
      title: {fontSize: 30, lineHeight: 40},
      body: {fontSize: 16},
    },
    {
      title: {fontSize: 40, lineHeight: 50},
      body: {fontSize: 18},
    },
  ];

  return (
    <View
      //   {...panResponder.panHandlers}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* test step 영역 */}
      <View
        style={{
          //   borderWidth: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: 250,
          height: 200,
        }}>
        <View>
          <Text style={FONT[step].title}>Font Step {step + 1}</Text>
          <Text style={FONT[step].body}>font body style</Text>
        </View>
        {/* slider 영역 */}

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {/* 가로선 */}
          <View
            style={{
              position: 'absolute',
              top: 24,
              width: BOX * 3,
              borderBottomColor: '#ddd',
              borderBottomWidth: 2,
            }}
          />
          {/* 동그라미 */}
          <View style={{flexDirection: 'row'}}>
            {[...Array(4)].map((value, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => onPress(index)}>
                <View
                  key={index}
                  style={{
                    width: BOX,
                    height: BOX,
                    // borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#ddd',
                      width: 10,
                      height: 10,
                      borderRadius: 100,
                    }}></View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
          {/* 큰 동그라미 */}
          <Animated.View
            {...panResponder.panHandlers}
            style={{
              width: CIRCLE,
              height: CIRCLE,
              backgroundColor: '#333',
              position: 'absolute',
              left: BOX / 2 - CIRCLE / 2,
              borderRadius: 100,
              transform: [{translateX: circleAnim}],
            }}></Animated.View>
        </View>
      </View>
    </View>
  );
}
