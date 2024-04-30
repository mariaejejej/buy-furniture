import { SET_IMG_LIST_FILTER, RESET_IMG_LIST_FILTER } from "./action-list.ts";

export const setImgListFiltered = (imgListFiltered) => ({
    imgListFiltered,
    type: SET_IMG_LIST_FILTER
})

export const resetImgListFiltered = () => ({
    type: RESET_IMG_LIST_FILTER
})