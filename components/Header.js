import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [Log_btn, setLog_btn] = useState(["Login"]);
  const onlineStatus = useOnlineStatus();

  return (
    <div id="header">
      <div className="logo">
        <img className="img-logo" alt="logo" src={LOGO_URL} />
      </div>
      <div className="search-bar">
        <h2>TheFoodApp</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>OnlineStatus:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <button
          className="btn-login"
          onClick={() => {
            const btn_click = Log_btn === "Login" ? "Logout" : "Login";
            setLog_btn(btn_click);
          }}
        >
          {Log_btn}
        </button>
      </div>
    </div>
  );
};

export default Header;
