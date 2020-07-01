import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';
import CheckoutItems from '../components/CheckoutItems';
import Logo from '../components/Logo';
import Cart from '../components/Cart';

class CartsScreen extends Component{
  
  render() {
    const {cartItems,navigation,cartTotal} = this.props;
    return (
      <CheckoutItems cartItems={cartItems} cartTotal={cartTotal} navigation={navigation} />
    )
  }
}

const mapStateToProps = (state) =>({
  cartItems: state.cart.cart,
  cartTotal: state.cart.total
})

export default connect (mapStateToProps)(CartsScreen)
