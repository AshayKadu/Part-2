import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  // const btnName = "Login";
  const [btnName, setBtnName] = useState(["Login"]);

  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);


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
          <li className="px-3 font-bold">
            <Link to={"/cart"}>🛒({cartItems.length})</Link>
          </li>
          <button
            className="px-3 border border-gray-400 rounded-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-3 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
