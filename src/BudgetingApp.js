import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Table from "./components/Table";

function BudgetingApp() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="text-center my-4">Budgeting App</h1>
        <Table />
      </div>
    </Provider>
  );
}

export default BudgetingApp;
