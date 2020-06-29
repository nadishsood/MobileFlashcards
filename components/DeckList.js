import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView
} from "react-native";
import { fetchDecks } from './../actions';
import { connect } from "react-redux";
import Constants from "expo-constants";


function Item({ title, numberOfCards }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text >{`Number of Cards: ${numberOfCards}`}</Text>
    </View>
  );
}

class DeckList extends React.Component {

  componentDidMount(){
    this.props.fetchDecks();
  }

  render() {
    const decks = this.props.decks;
      let decksArray = [];
      decksArray = Object.values(decks);
    
       return (
           
           <SafeAreaView style={styles.container}>
             <FlatList
               data={decksArray}
               renderItem={({ item }) => <Item title={item.title} numberOfCards = {item.questions.length} />}
               keyExtractor={item => item.title}
             />
           </SafeAreaView>
         
       );
    
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});



const mapStateToProps = state => {
  return {
    decks: state.decks.decks
  };
};
export default connect(mapStateToProps, { fetchDecks })(DeckList);


{
  /* <FlatList
             data={decksArray}
             renderItem={({ deck }) => (
               <View>
                 <Text>{deck}</Text>
                 <Text>sdfsfsjkh</Text>
               </View>
             )}
           /> */
}
{
  /* {decksArray.map((deck)=>{
             return(
               <View>
               <Text>{deck.title}</Text>
               </View>
             )
           })} */
}