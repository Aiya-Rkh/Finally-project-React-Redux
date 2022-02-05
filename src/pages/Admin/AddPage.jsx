import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addClothes } from "../../redux/actions/AdminAction";

const initClothes = {
  name: "",
  lastName: "",
  phoneNumber: "",
};

const AddPage = () => {
  const dispacth = useDispatch();
  const [clothes, setClothes] = useState(initClothes);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(addClothes(clothes));
    setClothes(initClothes);
  };
  // ! тут в инпутах прописать value and onClick
  return (
    <div>
      <h3>AddPage</h3>
      <Link to="/">
        <h3>Main Page</h3>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          value={clothes.name}
          onChange={(e) => {
            setClothes({ ...clothes, name: e.target.value });
          }}
          type="text"
          placeholder="Name"
        />
        <input
          value={clothes.lastName}
          onChange={(e) => setClothes({ ...clothes, lastName: e.target.value })}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={clothes.phoneNumber}
          onChange={(e) =>
            setClothes({ ...clothes, phoneNumber: e.target.value })
          }
          type="number"
          placeholder="PhoneNumber"
        />
        <button type="submit">OK</button>
      </form>

      {/* value={clothes.name}...
      onChange={(e)=>setClothes({...clothes,name: e.target.value})} */}
    </div>
  );
};

export default AddPage;
