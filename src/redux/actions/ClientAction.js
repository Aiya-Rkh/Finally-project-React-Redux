import axios from "axios";
// import React, { useEffect } from "react";
// import { auth } from "../../../Firebase";
import { API } from "../../helpers/api";
import {
  GoogleAuthProvider, //! Для авторизации через google
  signInWithPopup, //! Чтобы вышло модальное окно при входе
  onAuthStateChanged, //!Чтобы понимать пользователь в системе или нет
  signOut, //! Чтобы выйти из системы
} from "firebase/auth";
import { auth } from "../../Firebase";
// import { auth } from "../../Firebase";
// import { auth } from "../Firebase";

// ? Клиентская часть.
export const getClothess = () => {
  return async (dispatch) => {
    try {
      const response = await axios(`${API}/clothes/${window.location.search}`);
      let action = {
        type: "GET_CLOTHESS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

// ? Заморочки с картой

export const addClothesToCart = (product) => {
  return (dispatch) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        clothess: [],
        totalPrice: 0,
      };
    }
    let productCart = {
      product,
      count: 1,
      subPrice: product.price,
    };
    cart.clothess.push(productCart);
    cart.totalPrice = cart.clothess.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));

    let action = {
      type: "ADD_CLOTHES_TO_CART",
      payload: cart.clothess.length,
    };
    dispatch(action);
  };
};

export const getCart = () => {
  return (dispatch) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        clothess: [],
        totalPrice: 0,
      };
    }
    let action = {
      type: "GET_CART",
      payload: cart,
    };
    dispatch(action);
  };
};

export const checkClothesInCart = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      clothess: [],
    };
  }
  let check = cart.clothess.find((item) => {
    return item.product.id === id;
  });
  if (!check) {
    return false;
  } else {
    return true;
  }
};

export const deleteClothesFromCart = (id) => {
  return (dispatch) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.clothess = cart.clothess.filter((item) => {
      return item.product.id !== id;
    });
    cart.totalPrice = cart.clothess.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    let action = {
      type: "DELETE_CLOTHES_FROM_CART",
      payload: cart.clothess.length,
    };
    dispatch(action);
    dispatch(getCart());
  };
};

export const changeCount = (count, id) => {
  return (dispatch) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.clothess = cart.clothess.map((item) => {
      if (item.product.id === id) {
        item.count = count;
        item.subPrice = item.count * item.product.price;
        return item;
      } else {
        return item;
      }
    });
    cart.totalPrice = cart.clothess.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(getCart());
  };
};

// ? detail

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios(`${API}/clothes/${id}`);
      let action = {
        type: "GET_DETAIL",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

// ? tbot

export const getClothesToBot = (info, cart) => {
  axios.get(
    "https://api.telegram.org/bot5197737560:AAEJ-XlDOdj6oJ9bbDKLKgDh9Vn0Qx6Ip6A/sendMessage",
    {
      params: {
        parse_mode: "HTML",
        text: ` Заказы 
          Ф.И.О. ${info.name}
          Почта: ${info.email}
          Адрес: ${info.address}
          Город: ${info.city}
          ${cart.clothess.reduce(
            (item, cur) =>
              item +
              `Категория: ${cur.product.category}, Цена:${cur.product.price},id:${cur.product.id}\n`,
            ""
          )}\nОбщая сумма: ${cart.totalPrice}`,

        chat_id: "868943207",
      },
    }
  );
};

// ? favorite block

export const addClothesToFavorite = (product) => {
  return (dispatch) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        clothess: [],
        totalPrice: 0,
      };
    }
    let productCart = {
      product,
      count: 1,
      subPrice: product.price,
    };
    favorite.clothess.push(productCart);
    favorite.totalPrice = favorite.clothess.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("favorite", JSON.stringify(favorite));

    let action = {
      type: "ADD_CLOTHES_TO_FAVORITE",
      payload: favorite.clothess.length,
    };
    dispatch(action);
  };
};

export const getFavorite = () => {
  return (dispatch) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        clothess: [],
        totalPrice: 0,
      };
    }
    let action = {
      type: "GET_FAVORITE",
      payload: favorite,
    };
    dispatch(action);
  };
};

export const checkClothesInFavorite = (id) => {
  let favorite = JSON.parse(localStorage.getItem("favorite"));
  if (!favorite) {
    favorite = {
      clothess: [],
    };
  }
  let check = favorite.clothess.find((item) => {
    return item.product.id === id;
  });
  if (!check) {
    return false;
  } else {
    return true;
  }
};

export const deleteClothesFromFavorite = (id) => {
  return (dispatch) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.clothess = favorite.clothess.filter((item) => {
      return item.product.id !== id;
    });
    // перерасчет totalPrice
    favorite.totalPrice = favorite.clothess.reduce((prev, item) => {
      return prev + item.subPrice;
    }, 0);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    let action = {
      type: "DELETE_CLOTHES_FROM_FAVORITE",
      payload: favorite.clothess.length,
    };
    dispatch(action);
    dispatch(getFavorite());
  };
};

// ? auth

export const googleProvider = new GoogleAuthProvider();

export const authWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const checkUser = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    let action = {
      type: "CHECK_USER",
      payload: user,
    };
    dispatch(action);
  });
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

// ? comments

export const getComments = () => {
  return async (dispatch) => {
    try {
      const response = await axios(`${API}/comments/${window.location.search}`);
      let action = {
        type: "GET_COMMENTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const addComments = (comments) => {
  return async (dispatch) => {
    try {
      await axios.post(`${API}/comments`, comments);
      dispatch(getComments());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteComments = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API}/comments/${id}`);
      dispatch(getComments());
    } catch (error) {
      console.log(error);
    }
  };
};
