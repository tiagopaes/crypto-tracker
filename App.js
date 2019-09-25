import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Store';
import { Header, CryptoContainer } from './src/components';

const App = () => {
  return (
    <Provider store={Store}>
      <View>
        <Header />
        <CryptoContainer />
      </View>
    </Provider>
  );
};

export default App;
