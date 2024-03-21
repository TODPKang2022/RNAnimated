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
import {collapseData} from '../utils/data';

export default function DrawerMenu() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {collapseData.map((value, index) => {
        const interpolatedAnim = useRef(new Animated.Value(0)).current;
        let isOpened = false;

        // 클릭하면 애니메이션이 작동
        const onPress = () => {
          Animated.timing(interpolatedAnim, {
            toValue: isOpened ? 0 : 1,
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            isOpened = !isOpened;
          });
        };

        return (
          <View key={index}>
            {/* 질문영역 */}
            <TouchableWithoutFeedback onPress={onPress}>
              <View
                style={{
                  backgroundColor: '#4c5ced',
                  padding: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'yellow',
                    fontWeight: 'bold',
                    fontSize: 16,
                    flexShrink: 1,
                  }}>
                  {value.q}
                </Text>
                <Animated.View
                  style={{
                    flexShrink: 1,
                    marginLeft: 10,
                    transform: [
                      {
                        rotate: interpolatedAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '180deg'],
                        }),
                      },
                    ],
                  }}>
                  <Icon name="expand-more" size={24} color="yellow" />
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>
            {/* 답변영역 */}
            <Animated.View
              style={{
                height: interpolatedAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
                paddingHorizontal: 40,
                justifyContent: 'center',
                borderBottomColor: '#4c5ced',
                borderBottomWidth: 0.5,
              }}>
              <Text style={{fontSize: 14}}>{value.a}</Text>
            </Animated.View>
          </View>
        );
      })}
    </SafeAreaView>
  );
}
