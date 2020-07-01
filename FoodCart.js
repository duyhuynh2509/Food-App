
import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import FoodsScreen from './container/FoodsScreen';
import CartsScreen from './container/CartsScreen';
import ReceiptScreen from './container/ReceiptScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Logo from './components/Logo';
import Cart from './components/Cart';

const Stack = createStackNavigator();


class FoodCart extends Component{
    render() { 
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={FoodsScreen} options={{
                        title:'Food App',
                        headerStyle:{
                            backgroundColor:'skyblue',
                        },
                        headerTintColor:'white',
                        headerTitleStyle:{
                            fontWeight:'bold',
                        },
                        headerLeft: <Logo navigation={navigation} />,
                        headerRight: <Cart navigation={navigation} />
                    }} />
                    <Stack.Screen name="Checkout" component={CartsScreen} options={{
                        headerRight:'Checkout: ',
                        headerStyle:{
                            backgroundColor:'skyblue',
                        },
                        headerTintColor:'white',
                        headerLeft: <Logo navigation={navigation} />,
                        headerRight: <Cart navigation={navigation} />
                    }} />
                    <Stack.Screen name="Receipt" component={ReceiptScreen} options={{
                        headerTitle: 'Receipt',
                        headerLeft: <Logo navigation={navigation} />,
                        headerRight: <Cart navigation={navigation} />
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
};
 
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center'
  }
});
export default FoodCart;