import { SortByFieldType } from "@/@types/app.types";
import { editSearchValueBySortForRequest } from "@/utils/editSearchValueBySortForRequest";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearchValueSlice {
  value: string;
  valueBySort: string;
}

const initialStateSearchValueSlice: ISearchValueSlice = {
  value: "",
  valueBySort: "",
};

const searchValueSlice = createSlice({
  name: "searchValueSlice",
  initialState: initialStateSearchValueSlice,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setValueBySort: (state, action: PayloadAction<SortByFieldType>) => {
      state.valueBySort = editSearchValueBySortForRequest(
        state.value,
        action.payload
      );
    },
  },
});

const { actions, reducer: searchValueReducer } = searchValueSlice;

/**
 * Action creators for the types of actions that are handled by the slice reducer.
 */
export const searchValueActions = actions;
export default searchValueReducer;
