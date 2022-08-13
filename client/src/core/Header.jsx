import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import CirleTRbadge from "./helper/CirleTRbadge";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const toggleSearchField = () => setOpenSearch(!openSearch);
  const [login, setLogin] = useState(true); //for testing

  return (
    <nav
      className="fixed inset-0 w-full h-24 px-12 backdrop-blur-3xl  text-amber-500 shadow-md z-10 header-bg"
      // style={{ backgroundImage: "url(/img/bgb.PNG)" }}
    >
      <div className="flex justify-between  ">
        <div className="flex items-center h-24 align-middle text-3xl gap-2 ">
          Mega T-shirts
          <span className="material-icons text-amber-400 align-bottom">
            star
          </span>
        </div>
        <div>
          <ul className="flex gap-4 items-center align-middle  h-24 relative">
            <ClickAwayListener onClickAway={() => setOpenSearch(false)}>
              <li
                className={`flex shadow-md shadow-amber-200 rounded-full ${
                  openSearch ? "visible" : "invisible"
                }`}
              >
                <div>
                  <input
                    type="text"
                    className={` pl-8 pr-4 py-3   ${
                      openSearch && "w-[450px]"
                    } bg-gray-50 text-amber-500  rounded-l-full focus:outline-none transition ease-in-out duration-700 font-semibold capitalize`}
                    placeholder="Enter name of T-shirt"
                    id="search"
                  />
                </div>
                <div
                  className={`py-2 bg-gray-50 w-[60px] rounded-r-full  flex justify-center ${
                    openSearch ? "visible" : "invisible"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 cursor-pointer transition hover:-translate-x-1 duration-700 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
            </ClickAwayListener>
            {openSearch ? (
              <span></span>
            ) : (
              <li onClick={toggleSearchField}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 cursor-pointer transition hover:-translate-x-1 duration-700 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            )}

            {login ? (
              <>
                <li>
                  <a href="/">
                    <button className="login-signup-btn">logout</button>
                  </a>
                </li>
                <li className={`relative cursor-pointer`}>
                  <span className="material-icons text-amber-400 text-4xl ">
                    shopping_cart
                  </span>
                  <CirleTRbadge text="1" />
                </li>
              </>
            ) : (
              <li>
                <a href="/">
                  <button className="login-signup-btn">login</button>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
