import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsVerify,
} from "../redux/Auth/auth-selectors";

const useAuth = () => {
  const user = useSelector(selectUser);
  const isVerify = useSelector(selectIsVerify);

  return {
    user,
    isVerify,

  };
};

export default useAuth;