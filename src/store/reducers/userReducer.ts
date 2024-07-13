import { createAction, createReducer } from '@reduxjs/toolkit';

type UserReducerState = {
  menuIsOpen: boolean;
  // loading: boolean;
  // authSuccess: boolean;
  // isSuccess: boolean;
  // error: string;
  // isLogged: boolean;
};

const initialState: UserReducerState = {
  menuIsOpen: false,
  // loading: false,
  // authSuccess: false,
  // isSuccess: false,
  // error: '',
  // isLogged: false
};

export const toggleMenu = createAction('USER/TOGGLE_MENU');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleMenu, (state) => {
      // toggle du bouton burger => modifie l'état
      state.menuIsOpen = !state.menuIsOpen;
    })
  });

  export default userReducer;