import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { IndexStyles } from './index.styles';
import { HomeScene } from './scenes/home/home.scene';


const App = () => (
  <SafeAreaView style={IndexStyles.canvas}>
    <HomeScene />
  </SafeAreaView>
);

export default App;
