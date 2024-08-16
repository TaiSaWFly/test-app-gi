import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRepository } from "@/@types/IRepository";
import { ErrorType, RepositoryResponseType } from "@/@types/app.types";

interface IRepositorySlice {
  data: IRepository[];
  selectedRepository: IRepository | null;
  repositoryCount: number | null;
  isLoading: boolean;
  error: ErrorType | null;
}

const initialStateRepositorySlice: IRepositorySlice = {
  data: [],
  selectedRepository: null,
  repositoryCount: null,
  isLoading: false,
  error: null,
};

const repositorySlice = createSlice({
  name: "repositorySlice",
  initialState: initialStateRepositorySlice,
  reducers: {
    repositoryRequested: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setRepositoryData: (
      state,
      action: PayloadAction<Omit<RepositoryResponseType, "pageInfo">>
    ) => {
      state.data = action.payload.nodes;
      state.repositoryCount = action.payload.repositoryCount;
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<ErrorType>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setSelectedRepository: (state, action: PayloadAction<IRepository>) => {
      state.selectedRepository = action.payload;
    },
  },
});

const { actions, reducer: repositoryReducer } = repositorySlice;

/**
 * Action creators for the types of actions that are handled by the slice reducer.
 */
export const repositoryActions = actions;
export default repositoryReducer;
