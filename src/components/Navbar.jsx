import { Link } from "react-router-dom";
import "./User.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="Link" to="/">
        {" "}
        Home
      </Link>
      <Link className="Link" to="/about">
        {" "}
        About
      </Link>
      <Link className="Link" to="/contactus">
        {" "}
        Contact
      </Link>
      <Link className="Link" to="/users">
        {" "}
        User
      </Link>
      <Link className="Link" to="/login">
        {" "}
        Login
      </Link>
    </div>
  );
};
