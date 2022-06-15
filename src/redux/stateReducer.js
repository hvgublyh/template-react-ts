import { createReducer } from "@reduxjs/toolkit";

const state = {
    user: ''
}


export const userState = createReducer(state,{
    // user logic
    'login':(state,action) => {
        state.user = action.payload;
    },
    'logout' : (state) => {state.user = ''}
})

