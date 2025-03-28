import NavButton from "../components/NavButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      this is the login page
      <Link to="artists">
        <NavButton text="Login" />
      </Link>
    </div>
  );
};

export default Login;
