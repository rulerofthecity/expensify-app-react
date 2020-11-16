import { createStore } from "redux";
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    case "SET":
      return { count: action.count };
    case "RESET":
      const resetTo = typeof action.resetTo === "number" ? action.resetTo : 0;
      return {
        count: resetTo,
      };
    default:
      return state;
  }
});

const unsub = store.subscribe(() => {
  console.log(store.getState());
});

// ACTIONS
store.dispatch({
  type: "INCREMENT",
  incrementBy: 10,
});

store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "RESET",
  resetTo: 20,
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 2,
});

store.dispatch({
  type: "SET",
  count: 101,
});
