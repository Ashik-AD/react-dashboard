import UserListActionName from "../types/action";
import { UserListParams } from "../types/definition";

export const fetchUserListAction = (userList: unknown) => ({
    type: UserListActionName.fetchUserList,
    payload: userList
});

export const removeUserFromList = (uid: number) => ({
    type: UserListActionName.removeUser,
    payload: uid
})

export const fetchUserListByParams = (payload: Partial<UserListParams>) => ({
    type: UserListActionName.fetchUserListByParams,
    payload
})