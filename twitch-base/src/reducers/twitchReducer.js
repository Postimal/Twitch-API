export const twitchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MORE_ITEMS": // init zrobiłem w samym context, tutaj bede sobie dodowac inne akcje
      return state + 8;
    default:
      return state;
  }
};
