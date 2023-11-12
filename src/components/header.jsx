import React from "react";
import { useLocation } from "react-router-dom";

import { userData } from "../utils/userData";
const Header = () => {
  const location = useLocation();

  const name = location?.pathname.replace(/^\/|\/$/g, "");
  return (
    <div className="w-full flex justify-between my-2">
      <div className="font-bold">{name}</div>
      <div>
        <input
          placeholder="Search"
          className="bg-gray-100 p-2 rounded-md w-80"
        />
      </div>
      <div>
        <div className="flex space-x-4">
          <img
            className="w-7 rounded-full"
            src={userData[0]?.imageUrl}
            alt="user"
          />
          <div>
            <p className="font-bold">{userData[0]?.name}</p>
            <p>{userData[0]?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
