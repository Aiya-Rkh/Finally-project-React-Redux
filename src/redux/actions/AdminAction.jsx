import axios from "axios";
import { API } from "../../helpers/api";
import { getClothess } from "./ClientAction";

export const addClothes = (clothes) => {
  return async (dispatch) => {
    try {
      await axios.post(API, clothes);
    } catch (error) {
      console.log(error);
    }
  };
};

export const editClothes = (id) => {
  return async (dispatch) => {
    try {
      let response = await axios(`${API}/${id}`);
      console.log(response);
      let action = {
        type: "EDIT_CLOTHES",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveEditedClothes = (clothesEdit) => {
  return async (dispatch) => {
    try {
      await axios.patch(`${API}/${clothesEdit.id}`, clothesEdit);
      dispatch(getClothess());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteClothes = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API}/${id}`);
      dispatch(getClothess());
    } catch (error) {
      console.log(error);
    }
  };
};
