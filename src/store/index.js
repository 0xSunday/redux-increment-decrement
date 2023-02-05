import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isLogin: false };

const loginSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    islogin(state) {
      state.isLogin = true;
    },
    islogOut(state) {
      state.isLogout = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: loginSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export const authAction = loginSlice.actions;

export default store;
