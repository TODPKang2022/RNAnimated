import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import AnimatedComponents from './src/ch2/AnimatedComponents';
import AnimatedValue from './src/ch2/AnimatedValue';
import AnimatedTiming from './src/ch2/AnimatedTiming';
import AnimatedSpring from './src/ch2/AnimatedSpring';
import AnimatedDecay from './src/ch2/AnimatedDecay';
import AnimatedComposing from './src/ch2/AnimatedComposing';

function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedComposing />
    </SafeAreaView>
  );
}

export default App;
