"use client";

import store from "@/store/createStore";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

const WithProviders: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default WithProviders;
