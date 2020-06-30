import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { connect } from "react-redux";

class NewCard extends React.Component {
  handleSubmit = (values, resetForm) => {
    console.log(values);
    resetForm({ values: "" });
  };

  render() {
    return (
      <View style={styles.container}>
        <Formik
          initialValues={{ question: "", answer: "" }}
          onSubmit={(values, { resetForm }) => {
            this.handleSubmit(values, resetForm);
          }}
        >
          {props => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Question"
                onChangeText={props.handleChange("question")}
                value={props.values.question}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter Answer"
                onChangeText={props.handleChange("answer")}
                value={props.values.answer}
              />
              <Button
                color="green"
                title="Submit"
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
export default connect(mapStateToProps, {  })(NewCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6
  }
});


