import { createReducer } from "@reduxjs/toolkit";
import message from '../assert/js/message'

const state = {
    user: '',
    message
}


export const userState = createReducer(state,{
    // user logic
    'login':(state,action) => {
        state.user = action.payload;
    },
    'logout' : (state) => {state.user = ''},
})

