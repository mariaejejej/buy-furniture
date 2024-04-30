import {  RESET_IMG_LIST_FILTER, SET_IMG_LIST_FILTER } from "../action-creators/action-list.ts";
import { getDefaultState } from "../state/state.ts";


const setImgListFiltered = (action, state) => {
    console.log('setImgListFiltered', action.imgListFiltered )

    return action.imgListFiltered || state

}

const resetImgListFltered = (action, state) => {
    console.log('resetImgListFltered', state)
    return getDefaultState().imgList

}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any = getDefaultState().imgListFiltered, action: { type: string; }) => {
    const actions = {
        [SET_IMG_LIST_FILTER]: setImgListFiltered,
        [RESET_IMG_LIST_FILTER]: resetImgListFltered
    };
    return actions[action.type] ? actions[action.type](action, state) : state;
}