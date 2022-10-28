import { combineReducers } from '@reduxjs/toolkit';
import userStore from '../stores/user/user.store';
import navigationStore from '../stores/navigation/navigation.store';
import cartStore from '../stores/Card/card-store';


const rootReducer = combineReducers({
  user: userStore.reducer,
  navigation: navigationStore.reducer,
  cart: cartStore.reducer,
});

export default rootReducer;
