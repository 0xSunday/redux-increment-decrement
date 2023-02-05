// const redux = require("redux");
import { createStore } from "redux";
const reducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 10,
    };
  }
  if (action.type === "decreament") {
    return {
      counter: state.counter - 15,
    };
  }
  return state;
};
const store = createStore(reducer);

export default store;

// const newSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(newSubscriber);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decreament" });
