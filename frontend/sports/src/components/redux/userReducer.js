import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login:false,
    phone:null,
    admin:false,
    username:null,
}

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
      'USER_LOGIN':(state)=>{
          state.login = true
      },
      'USER_CONTACT':(state,action)=>{
          state.phone = action.payload.phone 
      },
      'USER_ADMIN':(state)=>{
          state.admin = true
      },
      'USER_USERNAME':(state,action)=>{
            state.username = action.payload.username
      },
      'USER_LOGOUT':state=>{
        state.login=false
        state.admin=false
      }
}});

export const {USER_LOGOUT,USER_USERNAME,USER_LOGIN,USER_CONTACT,USER_ADMIN} = userReducer.actions

export default userReducer.reducer
export const login = (state)=>state.user.login
export const phone = (state)=>state.user.phone
export const admin = (state)=>state.user.admin
export const username = (state)=>state.user.username
