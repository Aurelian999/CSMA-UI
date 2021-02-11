import React, {
  ReactElement, createContext, FC, ReactNode,
} from 'react';
import RootStore from './RootStore';

export const rootStore = new RootStore();

export const StoreContext = createContext<RootStore>({} as RootStore);

interface StoreParam {
  store: RootStore;
  children: ReactNode;
}

export type StoreComponent = FC<StoreParam>;

export const StoreProvider: StoreComponent = ({
  children,
  store,
}: StoreParam): ReactElement => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);
