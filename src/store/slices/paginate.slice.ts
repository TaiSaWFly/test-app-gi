import { PageInfoResponseType } from "@/@types/app.types";
import { initialStatePageSize } from "@/data/initialState.data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPaginateSlice {
  pageInfo: PageInfoResponseType | null;
  pageSize: number;
  startPage: string | null;
}

const initialStatePaginateSlice: IPaginateSlice = {
  pageInfo: null,
  pageSize: initialStatePageSize,
  startPage: null,
};

const paginateSlice = createSlice({
  name: "paginateSlice",
  initialState: initialStatePaginateSlice,
  reducers: {
    setPageInfo: (
      state,
      action: PayloadAction<PageInfoResponseType | null>
    ) => {
      state.pageInfo = action.payload;
      state.startPage =
        action.payload && !state.startPage
          ? action.payload.startCursor
          : state.startPage;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setResetPage: (state) => {
      state.startPage = null;
    },
  },
});

const { actions, reducer: paginateReducer } = paginateSlice;

/**
 * Action creators for the types of actions that are handled by the slice reducer.
 */
export const paginateActions = actions;
export default paginateReducer;
