import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  editClothes,
  saveEditedClothes,
} from "../../redux/actions/AdminAction";

const EditPage = () => {
  const dispacth = useDispatch();
  const params = useParams();
  const { clothesToEdit } = useSelector(({ clothesReducer }) => clothesReducer);

  const [clothesState, setClothesState] = useState();

  const handeleSubmit = (e) => {
    e.preventDefault();
    saveEditedClothes(clothesState);
  };

  useEffect(() => {
    setClothesState(clothesToEdit);
  }, [clothesToEdit]);

  useEffect(() => {
    dispacth(editClothes(params.id));
  }, []);

  if (!clothesState) {
    return <h3>-/-/-/-</h3>;
  }

  // ! тут в инпуты-таблицы вставить данные для редактирования
  return (
    <div>
      <h3>Edit Page</h3>
      <form onSubmit={handeleSubmit}>
        <input
          type="text"
          value={clothesState.name}
          onChange={(e) =>
            setClothesState({ ...clothesState, name: e.target.value })
          }
        />
        <input
          type="text"
          value={clothesState.lastName}
          onChange={(e) =>
            setClothesState({ ...clothesState, lastName: e.target.value })
          }
        />
        <input
          type="text"
          value={clothesState.phoneNumber}
          onChange={(e) =>
            setClothesState({ ...clothesState, phoneNumber: e.target.value })
          }
        />
        <button type="submit">Сохранить</button>
      </form>

      {/* value={clothesState.name}
          onChange={(e)=>setClothesState({...clothesState,name: e.target.value})} */}
    </div>
  );
};

export default EditPage;
