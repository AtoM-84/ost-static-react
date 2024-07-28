// import { createAction } from '@reduxjs/toolkit';

// // toggle du bouton burger => créer l'action :
// export const toggleMenu = createAction('UI/TOGGLE_MENU');


import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {menuIsOpen:false},
  reducers: {
    toggleMenu(state) {
      state.menuIsOpen = !state.menuIsOpen;
      console.log(state.menuIsOpen)
    }
  },
})



export const { toggleMenu } = uiSlice.actions
export default uiSlice.reducer