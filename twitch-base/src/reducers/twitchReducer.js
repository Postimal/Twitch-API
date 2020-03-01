export const twitchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MORE_ITEMS":
      return { ...state, pages: state.pages + action.payload };
    case "GAME_ID":
      return { ...state, id: action.payload };
    case "FINISH_LOADING":
      return { ...state, isLoading: false };
    case "GET_GAMES":
      return { ...state, games: action.payload };
    case "GET_STREAMS":
      return { ...state, streams: action.payload };
    case "GET_CLIPS":
      return { ...state, clips: action.payload };
    case "GET_CHOOSEN_STREAMS":
      return { ...state, choosenStreams: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "FETCHING_DATA":
      return { ...state, isLoading: true };
    case "GET_USER_VIDS":
      return { ...state, userVideos: action.payload };
    case "GET_USER_DETAILS":
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};

