export const twitchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MORE_ITEMS": // init zrobiłem w samym context, tutaj bede sobie dodowac inne akcje
      return { ...state, pages: state.pages + action.payload };
    case "GAME_ID":
      return {...state, id: action.payload}
    default:
      
      return state;
  }
};

// musze porobic funkcje i dac im  type: i payload:  bo tak to nie zadziala
// https://alligator.io/react/usereducer/
// https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks
