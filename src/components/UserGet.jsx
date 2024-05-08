import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../features/userSlice";
import User from "./User";

const UserGet = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      {users && users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};

export default UserGet;
