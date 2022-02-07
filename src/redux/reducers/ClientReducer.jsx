const INIT_STATE = {
  clothess: null,
};

export const clothesClientReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CLOTHESS":
      return {
        ...state,
        clothess: action.payload,
      };
    default:
      return state;
  }
};
