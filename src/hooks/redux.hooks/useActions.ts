import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { rootActions } from "../../store/createStore";

/**
 * Hook useActions - allows you to return all actions from the store
 * @returns Actions
 */

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
