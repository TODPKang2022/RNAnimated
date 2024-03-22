import React, {useRef, useEffect, useState} from 'react';
import {
  Animated,
  View,
  Text,
  Button,
  SafeAreaView,
  Easing,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function LayoutAnimationIntro() {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);

  const onButtonPress = () => {
    // useState의 set 함수와 사용 하면 적용 됨
    LayoutAnimation.configureNext({
      duration: 300,
      create: {type: 'easeIn', property: 'opacity'},
      update: {type: 'spring', property: 'scaleX', springDamping: 0.3},
      delete: {type: 'linear', property: 'scaleXY'},
    });
    // LayoutAnimation preset이 있어서 해당 기능 사용 시 아래와 같음
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

    setCount(value => value * 10);
    setShow(value => !value);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="layout anmiation 작동" onPress={onButtonPress} />
      <View style={{width: 250, height: 250}}>
        {/* update */}
        <View style={{backgroundColor: 'orange'}}>
          <Text style={{fontSize: 50}}>{count}</Text>
        </View>
        {/* create, delete */}
        {show && (
          <View style={{backgroundColor: 'green', marginTop: 10}}>
            <Text style={{fontSize: 30}}>보이는 컴포넌트</Text>
          </View>
        )}
      </View>
    </View>
  );
}
