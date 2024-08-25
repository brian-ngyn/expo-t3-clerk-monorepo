import React from "react";
import { createContext, PropsWithChildren, useContext } from "react";
import {
  useFeatureFlags,
  UseFeatureFlagsReturnType,
} from "../hooks/useFeatureFlags";

type AppContextReturnType = {
  featureFlags: UseFeatureFlagsReturnType;
};

const AppContext = createContext<AppContextReturnType>(
  {} as AppContextReturnType,
);

export function AppContextProvider({ children }: PropsWithChildren) {
  const flags = useFeatureFlags();
  return (
    <AppContext.Provider value={{ featureFlags: flags }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextReturnType {
  return useContext(AppContext);
}
