import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default class Quiz extends React.Component {

  state = {
    cards: [], 
    onQuestion: 0, 
    totalQuestions: null, 
    correctAnswers : 0
  }

  componentDidMount(){
    console.log("I got called");
    this.setState({
      cards: this.props.route.params.item.questions, 
      onQuestion: 0, 
      totalQuestions: this.props.route.params.item.questions.length, 
      cardDisplay: "question"
    });
  }

  viewAnswerHandler=()=>{
    this.setState({
      cardDisplay: "answer"
    })
  }

  handleUserResponse=(responseWas)=>{
    if(responseWas == "correct"){
      this.setState({
        correctAnswers: this.state.correctAnswers + 1, 
        onQuestion: this.state.onQuestion + 1
      })
    }else{
      this.setState({
        onQuestion: this.onQuestion + 1
      })
    }
  }

  render() {
    
    let currentCard = this.state.cards[this.state.onQuestion];
    let question = "";
    let answer = "";
    let toDisplay = "";
    let currentQuestionCount = this.state.onQuestion + 1;
    let percentageScore = (this.state.correctAnswers/this.state.totalQuestions) * 100;
    console.log(currentCard);
    console.log(this.state.correctAnswers);

    if(currentCard){
      if(this.state.cardDisplay === "question"){
        toDisplay = currentCard["question"];
      }else{
        toDisplay = currentCard["answer"];
      }
    }
    
    if(this.state.onQuestion < this.state.totalQuestions){
          return (
            <View>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text>{`${currentQuestionCount}/${this.state.totalQuestions}`}</Text>
                  <Text>{toDisplay}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.answerButton}>
                <Button
                  color="blue"
                  title="View Answer"
                  onPress={this.viewAnswerHandler}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={()=>{this.handleUserResponse("correct")}}
              >
                <Text style={styles.btnText}>Correct</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.btn} 
                onPress={()=>{this.handleUserResponse("incorrect");}}>
                <Text style={styles.btnText}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          );
    }else{
      return (
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text>Quiz Complete</Text>
            <Text>{`You answered ${this.state.correctAnswers} out of ${this.state.totalQuestions} questions correctly.`}</Text>
            <Text>{`Your percentage score: ${percentageScore}% `}</Text>
          </View>
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 20,
    marginVertical: 20, 
    height: 200, 
    padding: 20
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20
  },
  btnContainer: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
  }, 
  answerButton:{
    margin: 20, 
  }
});