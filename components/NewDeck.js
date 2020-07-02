import React from "react";
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { createNewDeck } from './../actions';
import { connect } from "react-redux";

class NewDeck extends React.Component {
  handleSubmit=(title, resetForm)=>{
    this.props.createNewDeck(title);
    this.props.navigation.navigate("DeckDetail", {
      item: {
        title, 
        questions:[]
      }
    })
   resetForm({values: ""})

  }


  render() {
    return (
      <View style={styles.container}>
        <Formik
          initialValues={{ title: "" }}
          onSubmit={(values, {resetForm}) => {
             this.handleSubmit(values.title, resetForm);
          }}
        >
          {props => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Deck Title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
              />
              <Button
                color="green"
                title="Create Deck"
                onPress={props.handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    decks: state.decks.decks
  };
};
export default connect(mapStateToProps, { createNewDeck })(NewDeck);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});

