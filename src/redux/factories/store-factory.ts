import { configureStore } from "@reduxjs/toolkit"
import imgList from "../reducers/imgList.ts"
import imgListFiltered from "../reducers/imgListFiltered.ts"

export const createStore = (preloadedState={})=> {
    return configureStore({
        reducer: {
            imgList,
            imgListFiltered
        
    }, preloadedState})
}

export const store =createStore()