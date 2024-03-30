import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NaveBar from "./Components/NaveBar";
import MainPage from "./Pages/MainPage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import UserProfile from "./Pages/UserProfile";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AuthProviders from "./context/AuthContext";
// react-router-dom

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviders>
        <NaveBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
      </AuthProviders>
    </BrowserRouter>
  </React.StrictMode>
);
