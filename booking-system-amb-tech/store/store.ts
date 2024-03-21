import { configureStore } from "@reduxjs/toolkit";

export interface UserState {
  firstName: string;
  lastName: string;
}

const initialState: UserState = {
  firstName: "John",
  lastName: "Doe",
};

const rootReducer = (state: UserState = initialState): UserState => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
