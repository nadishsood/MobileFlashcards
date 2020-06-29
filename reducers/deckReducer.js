export default deckReducer = (state = {decks: {}}, action) => {
  switch (action.type) {
    case "FETCH_DECKS":
      return { ...state, decks: action.payload };
    default:
      return state;
  }
};

