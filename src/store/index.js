import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home';

export default configureStore({
  reducer: {
    home: homeReducer
  }
});

