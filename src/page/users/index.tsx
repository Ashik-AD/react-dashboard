import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchUserList } from "../../features/users/usersSlice";
import { useAppDispatch } from "../../hooks";
import UserList from "./chunk/UserList.page";
import UserView from "./chunk/UserView.page";

const Users = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserList);
  }, []);
  return (
    <Routes>
      <Route path="/list/" element={<UserList />} />
      <Route path="/view/*" element={<UserView />} />
      <Route path="*" element={<h1>404 :(</h1>} />
    </Routes>
  );
};
export default Users;
