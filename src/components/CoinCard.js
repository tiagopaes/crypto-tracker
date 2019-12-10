import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 3,
    padding: 20
  },
  upperRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: 'bold'
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20
  },
  separator: {
    marginTop: 10,
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 10,
    fontWeight: 'bold'
  },
  image: {
    width: 35,
    height: 35
  },
  moneySymbol: {
    fontWeight: 'bold'
  },
  statisticsContainer: {
    display: 'flex',
    borderTopColor: '#fafafa',
    borderTopWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  percentChangePlus: {
    color: '#00bfa5',
    fontWeight: 'bold',
    marginLeft: 5
  },
  percentChangeMinus: {
    color: '#dd2c00',
    fontWeight: 'bold',
    marginLeft: 5
  }
});

const {
  container,
  upperRow,
  coinSymbol,
  coinName,
  separator,
  coinPrice,
  image,
  moneySymbol,
  statisticsContainer,
  percentChangePlus,
  percentChangeMinus
} = styles;

const CoinCard = ({_symbol, _coinName, _priceUSD, _percentChange24h, _percentChange7d}) => {
  return (
    <View style={container}>
      <View style={upperRow}>
        <Image style={image} source={{ uri: images[_symbol] }} />
        <Text style={coinSymbol}>{_symbol}</Text>
        <Text style={separator}>|</Text>
        <Text style={coinName}>{_coinName}</Text>
        <Text style={coinPrice}>
          <Text style={moneySymbol}>US$ </Text>
          {Number(_priceUSD).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
        </Text>
      </View>
      <View style={statisticsContainer}>
        <Text>
          24hr:&ensp;
          <Text style={_percentChange24h < 0 ? percentChangeMinus : percentChangePlus}>
            {_percentChange24h} %
          </Text>
        </Text>
        <Text>
          7d:&ensp;
          <Text style={_percentChange7d < 0 ? percentChangeMinus : percentChangePlus}>
            {_percentChange7d} %
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default CoinCard;
