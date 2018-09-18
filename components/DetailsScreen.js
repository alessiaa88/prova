import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Button,
} from 'react-native';

const TINT_COLOR = 'rgb(4, 159, 239)';



export default class DetailsScreen extends React.Component {
  state = {
    Listafood: [],
    count: 0,
   // finalprice:0
  };


  componentWillMount() { //prendo il parametro passato da menùScreen su onDetails
    const Paramsfood = this.props.navigation.state.params.Currentfood;
    this.setState({Listafood : Paramsfood});
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: '100%', height: '50%' }}
          source={{ uri: this.state.Listafood.image }}
        />
        <View>
          <View style={styles.titleView}>
            <Text style= {styles.title}> {this.state.Listafood.name} </Text>
            <Text style = {styles.price}> {this.state.Listafood.price} </Text>
          </View>
          <View style={styles.counter}>
            <Button title="-" onPress={() => {(this.state.count>0) ? 
                                                this.setState({count : this.state.count-1}) :
                                                this.setState({count : 0})
                                              }}/>
            <Text>{this.state.count}</Text>
            <Button title="+" onPress={() => this.setState({count : this.state.count+1})} />
          </View>
      </View>
    </View>
    );
  }
}

DetailsScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Detail',
    headerStyle: {
      backgroundColor: TINT_COLOR,
    },
    headerTintColor: 'white',
    headerRight: null,
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    //backgroundColor: "yellow",
    padding: 20,
  },
  titleView: {
    height : 20,
    width : "100%",
    flexDirection : "row",
  },
   title: {
    fontSize: 20,
    fontWeight: '500',
  },
  price : {
    color: 'orange'
  },
  counter : {
    flexDirection : "row",
    width : "90%",
    height : 20,
    justifyContent: "center",
    alignItems : "center",
    padding : 30
  }

});
