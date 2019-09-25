import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import CoinCard from './CoinCard';
import FetchCoinData from './../Actions/FetchCoinData';

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    return crypto.data.map((coin) => {
      return <CoinCard
        key={coin.name}
        _coinName={coin.name}
        _symbol={coin.symbol}
        _priceUSD={coin.price_usd}
        _percentChange24h={coin.percent_change_24h}
        _percentChange7d={coin.percent_change_7d}
      />
    });
  }

  render() {
    const { crypto } = this.props;
    const { contentContainer } = styles;

    if (crypto.isFetching === false) {
      return (
        <ScrollView contentContainerStyle={contentContainer}>
          {this.renderCoinCards()}
        </ScrollView>
      );
    }

    return (
      <View>
        <Spinner
          visible={crypto.isFetching}
          textContent={'Loading...'}
          textStyle={{ color: '#253145' }}
          animation='fade'
        ></Spinner>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55
  }
});

function mapStateToProp(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProp, { FetchCoinData })(CryptoContainer);
