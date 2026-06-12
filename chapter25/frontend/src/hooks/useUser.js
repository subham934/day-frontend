import { useSelector, useDispatch } from "react-redux";
import { fatchUserData } from "../redux/slice/userSlice";
import { useEffect } from "react";

export const useUser = () => {
  const { data, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchUserData());
  }, [dispatch]);

  return { data, loading, error };
};
