import React, {useRef, useEffect, useState} from 'react';
import {
  Animated,
  View,
  Text,
  Button,
  SafeAreaView,
  Dimensions,
  Platform,
  UIManager,
  PanResponder,
  InteractionManager,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export default function PanresponderBannerSlider() {
  const {width} = Dimensions.get('window');

  const [show, setShow] = useState(false);
  const [focus, setFocus] = useState(0);

  const bannerAnim = useRef(new Animated.Value(0)).current;
  const pandingRef = useRef(true);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const toRight = gestureState.dx < -80;
      const toLeft = gestureState.dx > 80;

      if (toRight && pandingRef.current && focus < 3) {
        pandingRef.current = false;
        setFocus(focus + 1);
        Animated.timing(bannerAnim, {
          toValue: -(focus + 1) * width,
          duration: 500,
          useNativeDriver: false,
        }).start(({finished}) => {
          if (finished) {
            pandingRef.current = true;
          }
        });
      }

      if (toLeft && pandingRef.current && focus > 0) {
        pandingRef.current = false;
        setFocus(focus - 1);
        Animated.timing(bannerAnim, {
          toValue: -(focus - 1) * width,
          duration: 500,
          useNativeDriver: false,
        }).start(({finished}) => {
          if (finished) {
            pandingRef.current = true;
          }
        });
      }
    },
  });

  const onButtonNavigation = index => {
    setFocus(index);

    Animated.timing(bannerAnim, {
      toValue: -index * width,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View
      //   {...panResponder.panHandlers}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* content box */}
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          left: 0,
          flexDirection: 'row',
          transform: [
            {
              translateX: bannerAnim,
            },
          ],
        }}>
        {[...Array(4)].map((value, index) => (
          <View
            key={index}
            style={{
              width,
              height: width,
              backgroundColor: 'orange',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 50, color: '#ffffff'}}>{index}</Text>
          </View>
        ))}
      </Animated.View>

      {/* Buttons */}
      <View style={{height: width, justifyContent: 'flex-end', marginTop: 60}}>
        <View style={{flexDirection: 'row'}}>
          {[...Array(4)].map((value, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => onButtonNavigation(index)}>
              <View
                style={{
                  // borderWidth: 1,
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: focus === index ? '#ffa100' : '#ffa10050',
                  margin: 8,
                }}></View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    </View>
  );
}
