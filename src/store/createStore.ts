"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import repositoryReducer, {
  repositoryActions,
} from "./slices/repository.slice";
import searchValueReducer, {
  searchValueActions,
} from "./slices/searchValue.slice";
import sortByReducer, { sortByActions } from "./slices/sortBy.slice";
import paginateReducer, { paginateActions } from "./slices/paginate.slice";

const rootReducer = combineReducers({
  searchValue: searchValueReducer,
  repository: repositoryReducer,
  paginate: paginateReducer,
  sortBy: sortByReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

/**
 * rootActions - allows you to get all actions from the store
 * @constant
 */
export const rootActions = {
  ...sortByActions,
  ...searchValueActions,
  ...repositoryActions,
  ...paginateActions,
};

export default store;

/**
 * RootState - store state entity record type
 * @type
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * AppDispatch - Typed dispatches an action. It is the only way to trigger a state change.
 * @type
 */
export type AppDispatch = typeof store.dispatch;
