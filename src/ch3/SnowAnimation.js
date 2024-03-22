import React, {useRef, useEffect} from 'react';
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
import Icon from 'react-native-vector-icons/dist/Fontisto';

export default function Skeleton() {
  return (
    <View style={{backgroundColor: '#121723', flex: 1}}>
      {[...Array(100)].map((value, index) => {
        const interpolatedAnim = useRef(new Animated.Value(0)).current;

        useEffect(() => {
          Animated.loop(
            Animated.timing(interpolatedAnim, {
              toValue: 1,
              delay: index * 100,
              duration: 5000,
              useNativeDriver: false,
            }),
          ).start();
        }, []);

        return (
          <Animated.View
            key={index}
            style={{
              position: 'absolute',
              top: interpolatedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['-10%', '110%'],
              }),
              left: `${Math.floor(Math.random() * 100)}%`,
            }}>
            <Icon name="snowflake-2" size={16} color="#fff" />
          </Animated.View>
        );
      })}
    </View>
  );
}
