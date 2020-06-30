import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class DeckDetail extends React.Component {
  addCard=()=>{
    this.props.navigation.navigate("NewCard", {
      item: this.props.route.params.item
    })
  }
  render() {
    const { item } = this.props.route.params;
    const title = item.title;
    const deck = this.props.decks[`${title}`]
    
  return (
      <View>
        <Text style={styles.header}>{deck.title}</Text>
        <Text>{`${deck.questions.length} cards`}</Text>
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

const mapStateToProps = (state, ownProps) => {
  return {
    decks: state.decks.decks
  };
};
export default connect(mapStateToProps, {  })(DeckDetail);

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
