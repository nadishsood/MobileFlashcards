import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DeckList from "./components/DeckList";
import DeckDetail from "./components/DeckDetail";
import NewCard from "./components/NewCard";
import NewDeck from "./components/NewDeck";
import ResetApp from "./components/ResetApp";



import Quiz from "./components/Quiz";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import logger from "redux-logger";
import { Provider } from "react-redux";



const store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
);


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
    const NewDeckStack = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen name="NewDeck" component={NewDeck} />
          <Stack.Screen name="DeckDetail" component={DeckDetail} />
        </Stack.Navigator>
      );
    };
      const ResetAppStack = () => {
        return (
          <Stack.Navigator>
            <Stack.Screen name="ResetApp" component={ResetApp} />
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
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="NewDeck" component={NewDeckStack} />
          <Tab.Screen name="ResetDecks" component={ResetAppStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
  
}

export default App;

