import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class DeckDetail extends React.Component {
  addCard=()=>{
    this.props.navigation.navigate("NewCard", {
      item: this.props.route.params.item
    })
  }
  render() {
    const { item } = this.props.route.params;
    return (
      <View>
        <Text style={styles.header}>{item.title}</Text>
        <Text>{`${item.questions.length} cards`}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={this.addCard}>
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.handleResetDecks}>
            <Text style={styles.btnText}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.handleResetDecks}>
            <Text style={styles.btnText}>Delete Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    fontSize:50
  }, 
  btnContainer: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: 'center',
    width: '100%',
    marginBottom: 20
  },
  btn: {
    width: 100,
    height: 50,
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: `center`,
    alignItems: `center`, 
    marginBottom: 50
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  }
});
