import { useContext } from 'react';
import RootStore from './RootStore';
import { StoreContext } from './StoreContext';

export const useStores = (): RootStore => useContext(StoreContext);
