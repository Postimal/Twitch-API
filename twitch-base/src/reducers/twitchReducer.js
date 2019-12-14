export const twitchReducer = (state, action) => {
  switch (action.type) {
    case "INIT": // init bede juz robil w samym context, tutaj moge sobie dodowac inne akcje
      return setGames(action.payload);
    default:
      return state;
  }
};
