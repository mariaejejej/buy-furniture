import { SET_IMG_LIST } from "../action-creators/action-list.ts";
import { getDefaultState } from "../state/state.ts";

const setImgList = (action, state) => {
    return action.imgList || state
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any = getDefaultState().imgList, action: { type: string; }) => {
    const actions = {
        [SET_IMG_LIST]: setImgList,
    };
    return actions[action.type] ? actions[action.type](action, state) : state;
}