import { AsyncStorage } from 'react-native';
import decksData from './../database/data';

const storageKey = "DECKS";

export const getDecks = async ()=>{
    try {
    const storeResults = await AsyncStorage.getItem(storageKey);

    if (storeResults === null) {
      AsyncStorage.setItem(storageKey, JSON.stringify(decksData));
    }

    return storeResults === null ? decksData : JSON.parse(storeResults);
  } catch (err) {
    console.log(err);
  }
}

export const getDeck = async (id) =>{
    try{
        const res = await AsyncStorage.getItem(storageKey);
        return JSON.parse(res)[id];
    }catch(e){
        console.log(e);
    }
}

//don't touch finalized. 
export const saveDeckTitle = async (title) => {
  try {
    const res = await AsyncStorage.mergeItem(
      storageKey,
      JSON.stringify({
        [title]: {
          title,
          questions: []
        }
      }));

      const res1 = await AsyncStorage.getItem(storageKey);
      
      return JSON.parse(res1)[title];
  } catch (e) {
    console.log(e);
  }
};


export const addCardToDeck= async (title, card)=>{
    try{
        const deckToAddTo = await getDeck(title);
        await AsyncStorage.mergeItem(
            storageKey, 
            JSON.stringify({
                [title]:{
                    questions: [...deckToAddTo.questions].concat(card)
                }
            })
        )
    }catch(e){
        console.log(e);
    }
}

export const removeDeck = async (key)=>{
    try{
        const res = await AsyncStorage.getItem(storageKey);
        res = JSON.parse(res);
        res[key] = undefined;
        delete data[key];

    }catch(e){
        console.log(e);
    }
}

export const resetDecks= async ()=>{
    try{
        await AsyncStorage.removeItem(storageKey);
    }catch(e){
        console.log(e);
    }
}
