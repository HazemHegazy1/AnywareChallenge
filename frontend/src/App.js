import React from "react";
import { Provider } from "react-redux";
import {  Route, Routes } from "react-router-dom";
import HistoryPage from "./Containers/HistoryPage/HistoryPage";
import LoginPage from "./Containers/LoginPage/LoginPage"
import SearchPage from "./Containers/SearchPage/SearchPage";

import store from "./reducers/store";

const App = () => {
  return (
    <Provider store={store}>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/search" element={<SearchPage/>} />
          <Route exact path="/history" element={<HistoryPage/>} />
        </Routes>
    </Provider>
  );
};

export default App;
