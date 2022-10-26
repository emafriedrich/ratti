import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { RecoilRoot } from 'recoil';
import FourStep from "./components/FourStep";
import FifthStep from "./components/FifthStep";
import SearchPlace from './components/search-place';
import CostumerPropertyOffer from "./components/costumerPropertyOffer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{  marginLeft: '7.5%',
    marginRight:' 7.5%'}}>
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPlace/>}></Route>
          <Route path="/new-post" element={<App />} />
          <Route path="/post/:id" element={<CostumerPropertyOffer/>}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
