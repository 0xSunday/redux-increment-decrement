import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const increamentHandler = () => {
    dispatch({ type: "increment" });
  };
  const decreamentHandler = () => {
    dispatch({ type: "decreament" });
  };

  const toggleCounterHandler = () => {};

  const counter = useSelector((store) => store.counter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increamentHandler}>incremenet</button>
        <button onClick={decreamentHandler}>decremenet</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
