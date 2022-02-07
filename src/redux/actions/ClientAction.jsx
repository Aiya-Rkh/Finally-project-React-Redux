import axios from "axios";
import { API } from "../../helpers/api";

export const getClothess = () => {
  return async (dispatch) => {
    try {
      const response = await axios(`${API}/${window.location.search}`);
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
