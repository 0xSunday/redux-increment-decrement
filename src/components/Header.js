import classes from "./Header.module.css";
import { authAction } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();

  const loghandler = () => {
    dispatch(authAction.islogOut());
  };
  const isAuth = useSelector((store) => store.auth.isLogin);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>{isAuth && <a href="/">My Products</a>}</li>
          <li>{isAuth && <a href="/">My Sales</a>}</li>
          <li>
            <button onClick={loghandler}>{isAuth ? "login" : "logout"}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
