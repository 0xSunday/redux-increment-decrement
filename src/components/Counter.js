import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();

  const increamentHandler = () => {
    dispatch(counterAction.increment());
  };
  const increamentHandlerByNum = () => {
    dispatch(counterAction.increase(10));
  };
  const decreamentHandler = () => {
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  const counter = useSelector((store) => store.counter.counter);

  const showCounter = useSelector((store) => store.counter.showCounter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>incremenet</button>
        <button onClick={increamentHandlerByNum}>incremenet by 10</button>
        <button onClick={decreamentHandler}>decremenet</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
