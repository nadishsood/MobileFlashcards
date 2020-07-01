export default deckReducer = (state = {decks: {}}, action) => {
  switch (action.type) {
    case "FETCH_DECKS":
      return { ...state, decks: action.payload };
    case "NEW_DECK":
      return {
        ...state,
        decks: { ...decks, [action.payload.title]: action.payload }
      };
    case "ADD_CARD":
      return {
        ...state,
        decks: { ...decks, [action.payload.title]: action.payload }
      };
    case "DELETE_DECK":
      return { ...state, decks: action.payload };
    default:
      return state;
  }
};

