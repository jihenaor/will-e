import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";


export const LoginOutPage = () => {
  const dispatch = useDispatch();

  dispatch( startLogout() );

  return (
    <>
      Logout
    </>
  )
}

export default LoginOutPage;
