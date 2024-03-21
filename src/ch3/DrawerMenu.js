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

export default function DrawerMenu() {
  const interpolateAnim = useRef(new Animated.Value(0)).current;
  const width = Dimensions.get('window').width;

  const onPress = () => {};

  const onOpenPress = () => {
    Animated.timing(interpolateAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };

  const onHidePress = () => {
    Animated.timing(interpolateAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      {/* HOME */}
      <View style={{backgroundColor: '#aff100', flex: 1}}>
        <SafeAreaView style={{alignItems: 'flex-end'}}>
          <TouchableHighlight
            underlayColor={'#ffffff50'}
            onPress={onOpenPress}
            style={{borderRadius: 100}}>
            <View style={{padding: 14}}>
              <Icon name="menu" size={30} color="#222" />
            </View>
          </TouchableHighlight>
        </SafeAreaView>
      </View>

      {/* Menu BG */}
      <TouchableWithoutFeedback onPress={onHidePress}>
        <Animated.View
          style={{
            position: 'absolute',
            width: interpolateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '120%'],
            }),
            height: '100%',
            backgroundColor: interpolateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['#00000000', '#00000090'],
            }),
            // zIndex: interpolateAnim.interpolate({
            //   inputRange: [0, 1],
            //   outputRange: [0, 2],
            // }), // 그냥 1로 두면 가려져서 클릭이 안됨
          }}></Animated.View>
      </TouchableWithoutFeedback>

      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          width: '90%',
          height: '100%',
          backgroundColor: interpolateAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['#ffffff00', '#ffffff'],
          }),
          zIndex: 10,
          transform: [
            {
              translateX: interpolateAnim.interpolate({
                inputRange: [0, 1],
                // outputRange: [0, 90%], // translate 에서 % 가 먹지 않음 // dimension 이라는 윈도우 너비를 알 수 있는 함수가 있음
                outputRange: [-width * 0.9, 0],
              }),
            },
          ],
        }}>
        <SafeAreaView
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{padding: 10, fontSize: 22}}>menu</Text>
            <Text style={{padding: 10, fontSize: 22}}>menu</Text>
            <Text style={{padding: 10, fontSize: 22}}>menu</Text>
          </View>
          <View>
            <TouchableHighlight
              underlayColor={'#aff10050'}
              onPress={onHidePress}
              style={{borderRadius: 100}}>
              <View style={{padding: 14}}>
                <Icon name="close" size={30} color="#222" />
              </View>
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
}
