import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClothes, getClothes } from "../redux/actions/AdminAction";
import { getClothess } from "../redux/actions/ClientAction";

// !Страница Отображений товаров,после клика на выбранный пункт
// !внутри вставить таблицу перебрать и подставить item

const Crid = () => {
  const dispacth = useDispatch();
  const { clothess } = useSelector((state) => state.clothesClientReducer);
  console.log(clothess);

  const handleSubmit = (id) => {
    dispacth(deleteClothes(id));
  };

  useEffect(() => {
    dispacth(getClothess());
  }, []);

  if (!clothess) {
    return <h3>Loading</h3>;
  }
  return (
    <div>
      {/* <ul>
          {clothes.map((item) => (
            <li key={item.id}>
              {item.name}
              {item.lastName}
              {item.phoneNumber}
              <button onClick={() => handleSubmit(item.id)}>DELETE</button>
              <Link to={`/edit/${item.id}`}>
                <button>EDIT</button>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/add">
          <h3>Add Page</h3>
        </Link> */}

      {/* {item.id}...
      <button onClick={() => handleSubmit(item.id)}>delete</button>
      <Link to="/edit">
        <button>edit</button>
      </Link> */}
    </div>
  );
};

export default Crid;
