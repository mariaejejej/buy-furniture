import { configureStore } from "@reduxjs/toolkit"
import imgList from "../reducers/imgList.ts"
import imgListFiltered from "../reducers/imgListFiltered.ts"
import users from "../reducers/users.ts"
import userLoged from "../reducers/userLoged.ts"

export const createStore = (preloadedState={})=> {
    return configureStore({
        reducer: {
            imgList,
            imgListFiltered,
            users,
            userLoged,
        
    }, preloadedState})
}

export const store =createStore()