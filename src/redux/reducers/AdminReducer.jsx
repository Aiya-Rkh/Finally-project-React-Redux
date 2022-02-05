const INIT_STATE = {
  clothes: null,
  clothesToEdit: null,
};

export const clothesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CLOTHES":
      return {
        ...state,
        clothes: action.payload,
      };
    case "EDIT_CLOTHES":
      return {
        ...state,
        clothesToEdit: action.payload,
      };
    default:
      return state;
  }
};
