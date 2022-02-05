import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes as MyRoutes, Route } from "react-router-dom";
import AddPage from "./pages/Admin/AddPage";
import AdminPage from "./pages/Admin/AdminPage";
import EditPage from "./pages/Admin/EditPage";
import MainPage from "./pages/Client/MainPage";
import { store } from "./store/store";

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyRoutes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </MyRoutes>
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;
