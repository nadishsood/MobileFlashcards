import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DeckList from "./components/DeckList";
import DeckDetail from "./components/DeckList";
import NewCard from "./components/NewCard";
import NewDeck from "./components/NewDeck";
import ResetApp from "./components/ResetApp";


import Quiz from "./components/Quiz";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="DeckList" component={DeckList} />
        <Stack.Screen name="DeckDetail" component={DeckDetail} />
        <Stack.Screen name="NewCard" component={NewCard} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    );
  };

class App extends React.Component {

  //get all decks from asyncStorage
  //pass as props to tab screen home
  //recieve in homestackcomponent and pass it to Decklist
  

  //From Decklist pass it further via props 


render(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="NewDeck" component={NewDeck} />
        <Tab.Screen name="ResetDecks" component={ResetApp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
  
}

export default App;

