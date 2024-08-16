import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/createStore";

export type UseSelectorHookType = TypedUseSelectorHook<RootState>;
/**
 *useAppDispatch - typed hook useDispatch.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
/**
 *useAppSelector - typed hook appropriately for the root state of the store.
 */
export const useAppSelector: UseSelectorHookType = useSelector;
