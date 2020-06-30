import * as server from './../utils/api';

export const fetchDecks = () => async dispatch => {
  const response = await server.getDecks();
  dispatch({ type: "FETCH_DECKS", payload: response });
};

export const createNewDeck = (title) => async dispatch => {
   const response = await server.saveDeckTitle(title);
    dispatch(fetchDecks());
    dispatch({ type: "NEW_DECK", payload: response });
};

export const resetDecksAction = () => async dispatch =>{
    await server.resetDecks();
    dispatch(fetchDecks());
}

// export const addCardToDeck = (title, card) => async dispatch => {
//   const response = await server.addCardToDeck(title);

// //   dispatch(fetchDecks());
// //   dispatch({ type: "NEW_DECK", payload: response });
// };


