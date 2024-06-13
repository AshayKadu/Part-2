import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  // const btnName = "Login";
  const [btnName, setBtnName] = useState(["Login"]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 items-center">
      <div className="logo-container">
        <img className="w-36 p-2" src="/logo.3eb009db.png" />
      </div>
      <div className="font-medium">
        <ul className="flex">
          <li className="px-3">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-3">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-3">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <button
            className="login px-3"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
