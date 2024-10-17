import { SET_USER_LOGED } from "./action-list.ts";

export const setUserLoged = (user) => ({
    userLoged: user,
    type: SET_USER_LOGED
})