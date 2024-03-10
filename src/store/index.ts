/*
 * @category  React-Ecommerce
 * @author    Wiktor Koscielny | <wiktorkoscielny@gmail.com>
 */

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { InitialState } from "./types"; 

const initialState: InitialState = {};

export const store = configureStore({
  reducer: {},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
