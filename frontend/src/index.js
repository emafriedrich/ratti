import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import {RecoilRoot} from 'recoil';
import FourStep from "./components/FourStep";
import FifthStep from "./components/FifthStep";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/Tipo" element={<FirstStep />} />
      <Route path="/Ubicacion" element={<SecondStep />} />
      <Route path="/Caracteristicas" element={<ThirdStep />} />
      <Route path="/Multimedia" element={<FourStep  />} />
      <Route path="/Amenities" element={<FifthStep />} />
    </Routes>
    </BrowserRouter>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
