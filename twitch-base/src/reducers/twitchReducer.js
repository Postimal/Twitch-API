export const twitchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MORE_ITEMS": // init zrobiłem w samym context, tutaj bede sobie dodowac inne akcje
      return state + 8;
    // case "FETCH_USER_DATA":
    //   return action.ID;
    default:
      return state;
  }
};
