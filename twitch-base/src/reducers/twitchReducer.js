export const twitchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MORE_ITEMS": // init zrobiłem w samym context, tutaj bede sobie dodowac inne akcje
      return { ...state, pages: state.pages + 8 };
    // case "FETCH_USER_DATA":
    //   return action.ID;
    default:
      return state;
  }
};

// musze porobic funkcje i dac im  type: i payload:  bo tak to nie zadziala
// https://alligator.io/react/usereducer/
// https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks
