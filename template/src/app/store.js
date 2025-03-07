import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice'; // Ensure you have a reducer

const store = configureStore({
  reducer: {
    users: usersReducer, // Make sure this matches what you're selecting
  },
});

export default store;
