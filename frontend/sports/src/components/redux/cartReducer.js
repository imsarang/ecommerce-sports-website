import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product:{
        id:null,
        name:null,
        imageUrl:null,
        rating:null,
        size:null,
        price:null,
        quantity:null,
        available:null,
    },
    productArray : [],
    total:0
}

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      'ADD_TO_CART':(state,action)=>{
        state.product.id = action.payload.id
        state.product.name = action.payload.name
        state.product.imageUrl = action.payload.imageUrl
        state.product.price = action.payload.price
        state.product.rating = action.payload.rating
        state.product.size = action.payload.size
        state.product.quantity = action.payload.quantity
        state.product.available = action.payload.available

        let flag = 0
        if(state.productArray.length===0)
          {
            state.productArray.push(action.payload)
            state.total += action.payload.price  
          }
        else{
          state.productArray.map((item)=>{
            if(item.id === action.payload.id)
              {
                if(item.quantity<item.available)
                  {
                    item.quantity++
                    state.total += action.payload.price
                  }
                flag=1
              }
          })
          if(flag == 0) 
          {
            state.productArray.push(action.payload)
            state.total += action.payload.price
            
          }
        }
      },
      'REMOVE_PRODUCT':(state,action)=>{
        state.productArray= state.productArray.filter((item)=>item.id!=action.payload.id)
        state.total-=(action.payload.price*action.payload.quantity)

      },
      'INCREMENT':(state,action)=>{
        state.productArray.map((item)=>{
          if(item.id === action.payload.id)
            {
              if(item.quantity<item.available)
              {
                item.quantity++
                state.total+=item.price
              }
              else item.quantity=item.available
        }
      })  
      }
      ,
      'DECREMENT':(state,action)=>{
        state.productArray.map((item)=>{
          if(item.id === action.payload.id)
            {
              if(item.quantity>1)
              {
                item.quantity--
                state.total-=item.price
              }else item.quantity=1
            }
      })}
    }
});

export const {ADD_TO_CART,REMOVE_PRODUCT,INCREMENT,DECREMENT} = cartReducer.actions

export default cartReducer.reducer
export const product = (state)=>state.cart.product
export const productArray = (state)=>state.cart.productArray
// export const quantity = (state)=>state.cart.product.quantity
export const total = (state)=>state.cart.total
