import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';



export default class Carrello extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> 
        <Text> Il tuo carrello </Text>
      </View>
    );
  }
}
