import React from 'react';
import { View } from 'react-native';

import { HomeScene } from './scenes/home/home.scene';


const App = () => (
  <View style={{
    height: 600,
    width: 300,
    backgroundColor: 'pink'
  }}
  >
    <HomeScene />
  </View>
);

export default App;
