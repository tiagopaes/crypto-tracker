import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import CoinCard from './CoinCard';
import FetchCoinData from './../Actions/FetchCoinData';

const CryptoContainer = props => {
  useEffect(() => {
    props.FetchCoinData();
  }, []);

  const {crypto} = props;
  const {contentContainer} = styles;

  const renderCoinCards = () => {
    return crypto.data
      .sort((a, b) => {
        if (a.cmc_rank > b.cmc_rank) {
          return 1;
        }
        if (b.cmc_rank > a.cmc_rank) {
          return -1;
        }
        return 0;
      })
      .map(coin => {
        return (
          <CoinCard
            key={coin.id}
            _coinName={coin.name}
            _symbol={coin.symbol}
            _priceUSD={coin.quote.USD.price}
            _percentChange24h={coin.quote.USD.percent_change_24h}
            _percentChange7d={coin.quote.USD.percent_change_7d}
          />
        );
      });
  };

  if (crypto.isFetching === false) {
    return (
      <ScrollView contentContainerStyle={contentContainer}>
        {renderCoinCards()}
      </ScrollView>
    );
  }

  return (
    <View>
      <Spinner
        visible={crypto.isFetching}
        textContent={'Loading...'}
        textStyle={{color: '#253145'}}
        animation="fade"></Spinner>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
  },
});

const mapStateToProps = state => ({
  crypto: state.crypto,
});

export default connect(
  mapStateToProps,
  {FetchCoinData},
)(CryptoContainer);
