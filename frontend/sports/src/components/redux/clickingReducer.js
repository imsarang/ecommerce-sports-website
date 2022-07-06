import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    clickAction: false,
    createReview : false,
    category:null,
    clickSignIn:false,
    clickChangeAddress:false,
    pincode:null,
    sizechart:false,
    clickAddress:false,
}

const clickingReducer = createSlice({
  name: 'click',
  initialState,
  reducers: {
      'CLICK_ALL_SPORTS':state=>{
        state.clickAction = !state.clickAction
      },
      'CLICK_CREATE_REVIEW':state=>{
        state.createReview = !state.createReview
      },
      'CLICK_CATEGORY' : (state,action)=>{
        state.category = action.payload.category
        state.clickAction = !state.clickAction
      },
      'CLICK_SIGNIN' : state=>{
        state.clickSignIn = !state.clickSignIn
      },
      'CLICK_CHANGE_ADDRESS': state=>{
        state.clickChangeAddress = !state.clickChangeAddress
      },
      'PINCODE':(state,action)=>{
        state.pincode = action.payload.pincode
      },
      'CLICK_SIZE_CHART':(state)=> {
        state.sizechart = !state.sizechart
      },
      'CLICK_ADDRESS':(state,action)=>{
        state.clickAddress = action.payload.click
      }
  }
});

export const {PINCODE,CLICK_CHANGE_ADDRESS,CLICK_ADDRESS,
              CLICK_SIGNIN,CLICK_ALL_SPORTS,
              CLICK_CREATE_REVIEW,CLICK_CATEGORY,CLICK_SIZE_CHART} = clickingReducer.actions

export default clickingReducer.reducer
export const clickAction = (state)=>state.click.clickAction
export const createReview = (state)=>state.click.createReview
export const categoryClick = (state)=>state.click.category
export const clickSignIn = (state)=>state.click.clickSignIn 
export const clickChangeAddress = (state)=>state.click.clickChangeAddress
export const pincode = (state)=>state.click.pincode
export const sizechart = (state)=>state.click.sizechart
export const clickAddress = (state)=>state.click.clickAddress