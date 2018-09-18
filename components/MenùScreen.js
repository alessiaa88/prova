import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,  FlatList } from "react-native";
import { createStackNavigator, TabNavigator } from "react-navigation";
import { SearchBar} from 'react-native-elements';

import PizzaRow from './PizzaRow';
//import Details from './Details';
const TINT_COLOR = 'rgb(4, 159, 239)';


/*var ingr = [      //Array per prova
  { ingrediente : 'pistacchio'},
  { ingrediente : 'bresaola',}
  
];*/

export default class MenùScreen extends React.Component {
  state = {
    Menù: [], // array che contiene il risultato della richiesta
    search: "", //per la searchbar
  };

  /*filterPiatti(ingredient) {
    // filtrare in menu in base all'ingrediente scelto nella FiltersMenu
    Menu.filter()
    this.setState({Menu: })
  }*/

  componentDidMount(){  //appena la componente viene renderizzata a video viene invocata la richiesta con makeRemoteRequest()
    this.makeRemoteRequest();
    this.props.navigation.setParams({ filters: this._FiltersIngred() });
  }

  makeRemoteRequest = () => {
    const ListaPizze = 'http://www.dmi.unict.it/~calanducci/LAP2/food.json';
    fetch(ListaPizze)
      .then(response => response.json())
        .then(jsonResponse => {
          let array = jsonResponse.data;
          this.setState({ Menù : array})
        })
  };

  _FiltersIngred () { //ottengo 1array con solo ingredienti
    let newArrayIngred = [ ]; 
    for( let i=0; i< this.state.Menù.length; i++)
    {
      let ingr = this.state.Menù[i].ingredients;
      newArrayIngred.push(
        { Ingrediente: ingr } );
    }
    //return newArrayIngred;
    //console.log("Array ingredienti:" +newArrayIngred.Ingrediente);
    //for( let a =0; a<newArrayIngred.length; a++)
      //console.log("ingredienti:" +newArrayIngred[a]); //ARRAY CON TTT GLI INGRED !!!
    /*let totalIngred = [];
    for( let i in newArrayIngred)
      for(let j in newArrayIngred[i])
        totalIngred.push(newArrayIngred[i][j]);
    console.log("Ingredienti:"+totalIngred); //array con tutti gli ingred */
    
     this._IngredFrequency(newArrayIngred);
  

  }

    _IngredFrequency = array => {
    
    let finalArray = [], count = 1, prev;
    array.sort();
    for( let i = 0; i< array.length; i++) {
      prev = array[i];
      if( prev === array[i+1])
        count++;
      else {
        //finalArray.push([array[i], count]);
         finalArray.push({
        ingredientName: array[i], count: count} )
        count = 1;
      }
    }
    //return finalArray;
    /*for( let v in finalArray)
      console.log("ARRAY FINALE:" +finalArray[v].ingredientName); //stampa ingrediente con la frequenza!!*/
      
    
    
  }

  _toDetail = (item) => {
    this.props.navigation.navigate("Details" , {Currentfood : item}) //scrivo Details perchè in app.js nello stacknavigator l'ho kiamato così
 }

  renderRow = ({ item }) => (
    <PizzaRow 
      data={item} 
      onDetails={() => this._toDetail(item)}/>
  );

  keyExtractor = (item, index) => {
    return String(index);
  };



  _getData() {
    return this.state.search == "" ? this.state.Menù : this._searched()
  }

_searched() {
  let key = this.state.search.toLowerCase();
  return this.state.Menù.filter(item => {
  let name = item.name.toLowerCase();
  let category = item.category.toLowerCase();
  let info=item.info.toLowerCase(); 
  return (name.search(key) !== -1 || info.search(key)!==-1 || category.search(key) !== -1);
  });
}
   

  render() {
    this._FiltersIngred()
    return ( 
      <View style={styles.container}>  
        <SearchBar  onChangeText={(value) => {this.setState({search: value})}}
                    placeholder = "Cerca per nome/categoria" 
                    lightTheme round  
        />
        <ScrollView>
        <FlatList
          data={this._getData()}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
        />
        </ScrollView>
      </View>
    );
  }
}


MenùScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Menu',
    headerStyle: {
      backgroundColor: TINT_COLOR,
    },
    headerTintColor: 'white',
    //headerLeft: null,
    headerRight: ( //
      <TouchableOpacity onPress={() => navigation.navigate('Filters', { onFilters: navigation.state.params.filters
            //onSelectIngredient: this.filterInge
          })}> //in app.js su stackNavigator la schermata l ho chiamata Filters
        <Text style={{ color: 'white' }}>Filtra</Text>
      </TouchableOpacity>
    ),
  };
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
  
