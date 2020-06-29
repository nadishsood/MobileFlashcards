import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DeckList from "./../components/DeckList";
import DeckDetail from "./../components/DeckList";
import NewCard from "./../components/NewCard";
import Quiz from "./../components/Quiz";



const screens = {
    DeckList: {
        screen: DeckList
    }, 
    DeckDetail: {
        screen: DeckDetail
    }, 
    NewCard: {
        screen: NewCard
    }, 
    Quiz: {
        screen: Quiz
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);