import { SortByFieldType } from "@/@types/app.types";
import { initialStateSortByData } from "@/data/initialState.data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISortBySlice {
  sortBy: SortByFieldType;
}

const initialStateSortBySlice: ISortBySlice = {
  sortBy: initialStateSortByData,
};

const sortBySlice = createSlice({
  name: "sortBySlice",
  initialState: initialStateSortBySlice,
  reducers: {
    setSortBy: (state, action: PayloadAction<SortByFieldType>) => {
      state.sortBy = action.payload;
    },
  },
});

const { actions, reducer: sortByReducer } = sortBySlice;

/**
 * Action creators for the types of actions that are handled by the slice reducer.
 */
export const sortByActions = actions;
export default sortByReducer;
