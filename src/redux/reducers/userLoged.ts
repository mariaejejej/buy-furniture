import { ADD_USER, SET_USERS, SET_USER_LOGED } from "../action-creators/action-list.ts";
import { getDefaultState } from "../state/state.ts";

const setUserLoged = (action, state) => {
    return action.userLoged || state
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any = getDefaultState().users, action: { type: string; }) => {
    const actions = {
        [SET_USER_LOGED]: setUserLoged,
       
    };
    return actions[action.type] ? actions[action.type](action, state) : state;
}