import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

//import IngredientsRow from './IngredientsRow';

const TINT_COLOR = 'rgb(4, 159, 239)';

StatusBar.setBarStyle('light-content');


export default class FilterMenù extends React.Component {
  state = {
    //Ingredients: [],
  };

  /*renderRow = ({ item }) => (
    <IngredientsRow
      data={item}
      onToggle={() => this._toggle(item)} />

  );

  _keyExtractor = (item, index) => {
    // aggiungere un id ad ogni elemento pari alla sua posizione
    item.id = index;
    return String(index);
  };

  _toggle = item => {

    
  }; */

  
  render() {
  
    const { params } = this.props.navigation.state.params.onFilters;
    //for( let a in params)
      //console.log("Array ricevuto:" +{ params.ingredientName});
    
    
    return (
      <View style={styles.container}>
        <Text> Parametro: { params.ingredientName} </Text> 
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
});
