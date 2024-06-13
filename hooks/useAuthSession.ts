import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearAuth } from "@/redux/auth/auth.slice";
import { RootState } from "@/redux/store";

const useAuthSession = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (user) {
      dispatch(setUser({ username: user.username }));
    } else {
      dispatch(clearAuth());
    }
  }, [user, dispatch]); // Include dispatch in the dependency array

  return user;
};

export default useAuthSession;
