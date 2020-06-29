import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  getDecks,
  getDeck,
  saveDeckTitle,
  addCardToDeck,
  resetDecks
} from "../utils/api.js";

import { connect } from 'react-redux';

import { resetDecksAction } from "./../actions";

class APITest extends React.Component {
  state = {
    data: ""
  };
  componentDidMount() {
    this.handleGetDecks();
  }
  handleGetDecks = () => {
    getDecks().then(result => {
      console.log(JSON.stringify(result));
      this.setState(() => ({
        data: result
      }));
    });
  };

  handleResetDecks = () => {
    this.props.resetDecksAction();
  };

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          
          <TouchableOpacity style={styles.btn} onPress={this.handleResetDecks}>
            <Text style={styles.btnText}>Reset Decks</Text>
          </TouchableOpacity>
        </View>
       
        <Text style={{ marginLeft: 10 }}>{JSON.stringify(data)}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};
export default connect(mapStateToProps, { resetDecksAction })(APITest);

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
