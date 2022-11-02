import concatActionString from "../../../utils/concatActionString"

const concat = concatActionString("users");

const UserListActionName = {
    fetchUserList: concat("fetchUsers"),
    removeUser: concat("removeUser"),
    fetchUserListByParams: concat("fecthUsers/params")
}
export default UserListActionName;