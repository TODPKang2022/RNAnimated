import React, {useRef} from 'react';
import {Animated, View, Text, Button, SafeAreaView, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default function Snackbar() {
  const translateYAnim = useRef(new Animated.Value(100)).current;

  const onButtonPress = () => {
    Animated.sequence([
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.circle),
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(translateYAnim, {
        toValue: 100,
        duration: 500,
        easing: Easing.in(Easing.circle),
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    // <SafeAreaView style={{borderWidth: 1, flex: 1}}>
    <>
      <Button title="go away" onPress={onButtonPress} />

      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          transform: [{translateY: translateYAnim}],
        }}>
        <View
          style={{
            backgroundColor: '#222',
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 20,
            margin: 14,
            borderRadius: 4,
            alignItems: 'center',
          }}>
          {/* <Text style={{color: 'white'}}>ICON</Text> */}
          <Icon name="checkmark-circle" color="white" size={24}></Icon>
          <Text style={{color: 'white', fontSize: 15, marginLeft: 10}}>
            오류가 발견 됐습니다
          </Text>
        </View>
      </Animated.View>
    </>

    // </SafeAreaView>
  );
}
