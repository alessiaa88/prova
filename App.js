import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button, TouchableHighlight, Image } from "react-native";
import { createStackNavigator, TabNavigator } from "react-navigation";

const TINT_COLOR = 'rgb(4, 159, 239)';



import MenùScreen from './components/MenùScreen';
import CarrelloScreen from '/components/CarrelloScreen';
import DetailsScreen from './components/DetailsScreen';
import FilterMenù from './components/FilterMenù'




const ListaScreen = createStackNavigator({
  Menù: {
    screen: MenùScreen, //menùscreen
    navigationOptions: {
      title: "Menù" //Home-Menù
    }
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      title: "Detail"
    }
  },
  Filters: {
    screen: FilterMenù,
    navigationOptions: {
      title: "ListaIngredienti"
    }
  }
})

const MainNav = TabNavigator({
  
  Menù: { //menù
    screen: ListaScreen //menùscreen
  },
  Carrello: { //carrello
    screen: CarrelloScreen //carrelloscreen
  },
  
});

export default class App extends React.Component {
  render() {
    return <MainNav />;
      
    
  }
} 

