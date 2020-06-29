import React from "react";
import { StyleSheet, Text, View,  Button, TouchableOpacity } from "react-native";

class DeckList extends React.Component {

 navigation = this.props.navigation;

 handleClick=()=>{
   this.navigation.navigate('DeckList');
 }

  render() {
    console.log(this.props.navigation);
    return (
      <View>
        <TouchableOpacity style={styles.btn} onPress={this.handleClick}>
          <Text style={styles.btnText}>Get Decks</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff"
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  btnContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: 'center',
    // width: '100%',
    marginBottom: 20
  },
  btn: {
    width: 100,
    height: 50,
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: `center`,
    alignItems: `center`
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  }
});

export default DeckList;