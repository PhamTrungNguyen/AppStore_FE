import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Menu from "./layouts/menu/Menu";
import { gapi } from "gapi-script";
import DetailAccount from "./pages/DetailAccount";
import AddressAccount from "./layouts/account/AddressAccount";
import InfoAccount from "./layouts/account/InfoAccount";

function App() {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: "*****.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });
  window.Buffer = window.Buffer || require("buffer").Buffer;
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route element={<Menu></Menu>}>
        <Route path="/signin" element={<SignInPage></SignInPage>}></Route>
        <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route element={<DetailAccount></DetailAccount>}>
          <Route path="/account" element={<InfoAccount></InfoAccount>}></Route>
          <Route
            path="/account/address"
            element={<AddressAccount></AddressAccount>}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
