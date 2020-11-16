import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "./actions/filters";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // console.log(store.getState());
  // console.log(visibleExpenses);
});

store.dispatch(
  addExpense({ description: "Water bill", amount: 1000, createdAt: 12000 })
);
store.dispatch(
  addExpense({ description: "Electricity bill", amount: 700, createdAt: 250 })
);
store.dispatch(
  addExpense({ description: "Telephone bill", amount: 90.5, createdAt: 500 })
);
store.dispatch(
  addExpense({ description: "Rent", amount: 1200, createdAt: 1010 })
);

// store.dispatch(setStartDate(25));
// store.dispatch(setEndDate(100250));

store.dispatch(sortByDate());
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
