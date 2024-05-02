import { configureStore } from "@reduxjs/toolkit"
import imgList from "../reducers/imgList.ts"
import imgListFiltered from "../reducers/imgListFiltered.ts"
import users from "../reducers/users.ts"

export const createStore = (preloadedState={})=> {
    return configureStore({
        reducer: {
            imgList,
            imgListFiltered,
            users,
        
    }, preloadedState})
}

export const store =createStore()