import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {connect} from 'react-redux';
import Foods from '../components/Foods';
import {addToCart} from '../src/actions/cartAction';
import {fetchProduct} from '../src/actions/productAction';
import Logo from '../components/Logo';
import Cart from '../components/Cart';
import { foods } from '../Data';

class FoodsScreen extends Component{
  
  constructor(props){
    super(props)
  }
  componentWillMount = () =>{
    this.props.fetchProduct()
  }
  addItemsToCart = (food) =>{
    this.props.addToCart(food)
  } 
  render() {
    const {navigation, foods} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <FlatList data={foods} renderItem={({item}) =>
            <Foods item={item} addItemsToCart={this.addItemsToCart} food={item} />} keyExtractor={(item) => item.id} 
            ItemSeparatorComponent={() =><View style={{height:0.5,backgroundColor:'#34495e90'}} />} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
},
  body:{
    flex:1,
    justifyContent:'center'
  }
});

const mapStateToProps = state =>{
  return{
    foods: state.foods[0]
  }
}

export default connect(mapStateToProps,{addToCart,fetchProduct})(FoodsScreen);
