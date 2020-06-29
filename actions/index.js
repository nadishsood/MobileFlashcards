import * as server from './../utils/api';

export const fetchDecks = () => async dispatch => {
  const response = await server.getDecks();
  dispatch({ type: "FETCH_DECKS", payload: response });
};

