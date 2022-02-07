const INIT_STATE = {
  clothesToEdit: null,
};

export const clothesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "EDIT_CLOTHES":
      return {
        ...state,
        clothesToEdit: action.payload,
      };
    default:
      return state;
  }
};
