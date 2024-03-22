import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NaveBar from "./Components/NaveBar";
import MainPage from "./Pages/MainPage";

// react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NaveBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
