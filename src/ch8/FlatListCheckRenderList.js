import React, {useRef, useEffect, useState} from 'react';
import {
  Animated,
  View,
  Text,
  Button,
  SafeAreaView,
  Alert,
  Dimensions,
  FlatList,
  UIManager,
  PanResponder,
  InteractionManager,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {faker} from '@faker-js/faker';

export default function FlatListCheckRenderList() {
  return (
    <SafeAreaView
    //   style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    >
      <Text>Hello</Text>
      <FlatList
        data={[...Array(40)].map((value, index) => {
          return faker.person.fullName();
        })}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
}

function renderItem({item, index}) {
  return (
    <View
      style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#ddd'}}>
      <Text>
        {index}. {item}
      </Text>
    </View>
  );
}
