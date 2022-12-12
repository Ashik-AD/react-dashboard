import { AnyAction } from "redux";
import { client } from "../../api/client";
import type { AppDispatch } from "../../store/store";
import { fetchUserListAction } from "./creator";
import UserListActionName from "./types/action";
import type { UserList, UserListParams, UserListState } from "./types/definition";

const INITIAL_STATE: UserListState = {
    data: [],
    total: 0,
    allData: [],
    params: {
        status: "",
        q: "",
        currentPlan: "",
        role: "",
    }
}

const userReducer = (state = INITIAL_STATE, action: AnyAction): UserListState => {
    switch (action.type) {
        case UserListActionName.fetchUserList:
            return {
                ...state,
                data: action.payload,
                total: action.payload?.length,
                allData: action.payload
            }

        case UserListActionName.removeUser:
            const newUser = state.data.filter(user => user?.id !== action.payload);
            return {
                ...state,
                data: newUser,
                total: newUser.length,
                allData: newUser
            }

        case UserListActionName.fetchUserListByParams:
            const params = { ...state.params, ...action.payload } as UserListParams;
            const hasFilterParams = (params.currentPlan || params.role || params.status) ? true : false;

            if (hasFilterParams || params.q) {
                let filteredUsers: UserList[] = [];
                const forEachUser = forEach(hasFilterParams ? state.data : state.allData);

                const combineProp = combinator(parseParams(params));
                forEachUser((item) => {
                    const isMatch = combineProp(item!);
                    const isFound = contain(toLowerCase(item?.fullName!), toLowerCase(params.q));
                    if (!hasFilterParams && params.q) {
                        if (isFound) {
                            filteredUsers.push(item!);
                        }
                    }

                    else if (hasFilterParams && params.q) {
                        if (isMatch && isFound) {
                            filteredUsers.push(item!)
                            return;
                        }
                    }

                    else {
                        if (isMatch) {
                            filteredUsers.push(item!)
                        }
                    }
                })
                return {
                    ...state,
                    params,
                    data: filteredUsers,
                    total: filteredUsers.length
                }
            }

            return {
                ...state,
                allData: state.allData,
                data: state.allData,
                total: state.allData.length
            }

        default:
            return state;
    }
}

export default userReducer;

export async function fetchUserList(dispatch: AppDispatch) {
    const response = await client.get("/6395f1d06a51bc4f704ce24a/users");
    dispatch(fetchUserListAction(response))
}

const toLowerCase = (str: string) => str.toLowerCase();

type Params = [k: keyof UserListParams, v: string][]
const combinator = (params: Params) => (obj: UserList) => {
    let isSatisfied = params.every((k) => obj[k[0] as keyof UserList] === k[1]);
    return isSatisfied;
}

const contain = (val1: string, val2: string) => val1.includes(val2)

const parseParams = (obj: UserListParams): Params => {
    const parsedParams: Params = [];
    for (const param in obj) {
        const key = param as keyof UserListParams;
        if (key !== 'q' && obj[key]) {
            parsedParams.push([key, obj[key]])
        }
    }
    return parsedParams;
}

type Ks<T> = T[]
const forEach = <T extends unknown>(array: Ks<T>) => (cb: (item: T, index?: number) => void) => {
    let i = 0;
    for (i = 0; i < array.length; i++) {
        cb(array[i], i)
    }
}
