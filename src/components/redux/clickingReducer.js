import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    clickAction: false
}

const clickingReducer = createSlice({
  name: 'click',
  initialState,
  reducers: {
      'CLICK_ALL_SPORTS':state=>{
        state.clickAction = !state.clickAction
      }
  }
});

export const {CLICK_ALL_SPORTS} = clickingReducer.actions

export default clickingReducer.reducer
export const clickAction = (state)=>state.click.clickAction