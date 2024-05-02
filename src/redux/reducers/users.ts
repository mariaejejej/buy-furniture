import { ADD_USER, SET_USERS } from "../action-creators/action-list.ts";
import { getDefaultState } from "../state/state.ts";






const setUsers = (action, state) => {

    return action.users || state

}

const addUser = (action, state) => {
    const copy = [  ...state]

      

    
    copy.push(action.user)
    return copy

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any = getDefaultState().users, action: { type: string; }) => {
    const actions = {
        [SET_USERS]: setUsers,
        [ADD_USER]: addUser
    };
    return actions[action.type] ? actions[action.type](action, state) : state;
}