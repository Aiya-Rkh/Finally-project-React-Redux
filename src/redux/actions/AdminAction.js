import axios from "axios";
import { API } from "../../helpers/api";
import { getClothess } from "./ClientAction";

export const addClothes = (clothess) => {
  return async (dispatch) => {
    try {
      await axios.post(`${API}/clothes`, clothess);
    } catch (error) {
      console.log(error);
    }
  };
};

export const editClothes = (id) => {
  return async (dispatch) => {
    try {
      let response = await axios(`${API}/clothes/${id}`);
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
      await axios.patch(`${API}/clothes/${clothesEdit.id}`, clothesEdit);
      dispatch(getClothess());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteClothes = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API}/clothes/${id}`);
      dispatch(getClothess());
    } catch (error) {
      console.log(error);
    }
  };
};
