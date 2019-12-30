import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import SearchIssuesViewController from "./presentation/modules/searchIssues/SearchIssuesViewController";
import configureStore from "./state/base/configureStore";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SearchIssuesViewController />
    </Provider>
  );
};

export default App;
