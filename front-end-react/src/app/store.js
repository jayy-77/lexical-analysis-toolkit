import { configureStore } from '@reduxjs/toolkit';
import tabReducer from '../features/tabs/tabsSlicer';

export default configureStore({
  reducer: {
    tab: tabReducer,
  },
});
