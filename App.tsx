import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import AnimatedComponents from './src/ch2/AnimatedComponents';
import AnimatedValue from './src/ch2/AnimatedValue';
import AnimatedTiming from './src/ch2/AnimatedTiming';
import AnimatedSpring from './src/ch2/AnimatedSpring';
import AnimatedDecay from './src/ch2/AnimatedDecay';
import AnimatedComposing from './src/ch2/AnimatedComposing';
import AnimatedOtherMethod from './src/ch2/AnimatedOtherMethod';
import AnimatedProperty from './src/ch2/AnimatedProperty';

import Snackbar from './src/ch3/Snackbar';
import DrawerMenu from './src/ch3/DrawerMenu';
import Collapse from './src/ch3/Collapse';
import Progressbar from './src/ch3/Progressbar';
import Skeleton from './src/ch3/Skeleton';

function App(): React.JSX.Element {
  return (
    // <SafeAreaView
    //   style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <AnimatedProperty />
    <Skeleton />
    // </SafeAreaView>
  );
}

export default App;
