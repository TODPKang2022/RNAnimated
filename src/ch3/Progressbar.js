import React, {useRef} from 'react';
import {
  Animated,
  View,
  Text,
  Button,
  SafeAreaView,
  Easing,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default function Progressbar() {
  const interpolatedAnim = useRef(new Animated.Value(0)).current;
  let clickCount = 0;

  const onRunPress = () => {
    if (clickCount < 5) {
      clickCount = clickCount + 1;
    }
    Animated.spring(interpolatedAnim, {
      toValue: 20 * clickCount,
      friction: 7,
      tension: 40,
      useNativeDriver: false,
    }).start();
  };
  const onAutoRunPress = () => {};
  const onResetPress = () => {};

  return (
    <SafeAreaView style={{flex: 1, marginTop: 300}}>
      <Button title="run" onPress={onRunPress} />
      <Button title="auto run" onPress={onAutoRunPress} />
      <Button title="reset" onPress={onResetPress} />
      <View
        style={{position: 'relative', margin: 30, justifyContent: 'center'}}>
        {/* progressbar 바닥*/}
        <View
          style={{
            backgroundColor: '#222',
            height: 10,
            borderRadius: 10,
          }}></View>
        {/* progressbar 움직이는 부분 */}
        <Animated.View
          style={{
            backgroundColor: 'blue',
            height: 16,
            position: 'absolute',
            width: interpolatedAnim.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
            borderRadius: 100,
          }}></Animated.View>
      </View>
    </SafeAreaView>
  );
}
