const INIT_STATE = {
  clothess: null,
  cartCount: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).clothess.length
    : 0,
  cart: null,
  detail: null,
  favorite: null,
  favoriteCount: JSON.parse(localStorage.getItem("favorite"))
    ? JSON.parse(localStorage.getItem("favorite")).clothess.length
    : 0,
  user: null,
  comment: null,
};

export const clothesClientReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CLOTHESS":
      return {
        ...state,
        clothess: action.payload,
      };
    case "ADD_CLOTHES_TO_CART":
      return { ...state, cartCount: action.payload };
    case "DELETE_CLOTHES_FROM_CART":
      return { ...state, cartCount: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "GET_DETAIL":
      return { ...state, detail: action.payload };
    case "ADD_CLOTHES_TO_FAVORITE":
      return { ...state, favoriteCount: action.payload };
    case "DELETE_CLOTHES_FROM_FAVORITE":
      return { ...state, favoriteCount: action.payload };
    case "GET_FAVORITE":
      return { ...state, favorite: action.payload };
    case "CHECK_USER":
      return { ...state, user: action.payload };
    case "GET_COMMENTS":
      return { ...state, comment: action.payload };
    default:
      return state;
  }
};
