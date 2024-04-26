import { SET_IMG_LIST, SET_IMG_LIST_FILTER } from "../action-creators/action-list.ts";
import { getDefaultState } from "../state/state.ts";



const setImgList =(action, state)=> {
return action.imgList || state

}


const setImgListFiltered =(action, state)=> {
    return action.imgListFiltered || state
    
    }
// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any=getDefaultState().imgList, action: { type: string; })=> {
    const actions = {
        [SET_IMG_LIST]: setImgList,
        [SET_IMG_LIST_FILTER]: setImgListFiltered,

    };
    return actions[action.type]? actions[action.type](action, state): state;
}