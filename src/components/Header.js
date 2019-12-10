import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>
        Crypto Tracker
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    backgroundColor: '#eeeeee'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  }
});

const { headerContainer, header } = styles;

export default Header;
