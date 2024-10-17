import { ADD_USER, SET_USERS } from "./action-list.ts";

export const setUsers = (users) => ({
    users,
    type: SET_USERS
})

export const addUser = (user) => ({
    user,
    type: ADD_USER
})


