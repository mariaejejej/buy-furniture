import { configureStore } from "@reduxjs/toolkit"
import imgList from "../reducers/imgList.ts"

export const createStore = (preloadedState={})=> {
    return configureStore({
        reducer: {
            imgList
            
        }
    })
}

export const store =createStore()