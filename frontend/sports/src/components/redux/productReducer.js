import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product:{
        id:null,
        name:null,
        price:null,
        imageUrl:null,
        rating:null,
        category1:null,
        category2:null,
        available:null,
        size:null,
        mrp:null,
        },
}

const productReducer = createSlice({
  name: 'item',
  initialState,
  reducers: {
      'CHECK_PRODUCT':(state,action)=>{
            state.product.id = action.payload.id
            state.product.name = action.payload.name
            state.product.category1 = action.payload.category1
            state.product.category2 = action.payload.category2
            state.product.price = action.payload.price
            state.product.rating = action.payload.rating
            state.product.imageUrl = action.payload.imageUrl
            state.product.available = action.payload.available
            state.product.size=action.payload.size
            state.product.mrp = action.payload.mrp
          },

  }
});

export const {CHECK_PRODUCT} = productReducer.actions

export default productReducer.reducer
export const product = (state)=>state.item.product
