import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import CirleTRbadge from "./helper/CirleTRbadge";

////////////////////////Redux//////////////////
import { useSelector, useDispatch } from "react-redux/es/exports";
import { oponAuthMenu, setCurrentUser } from "../redux/user/userActions";
import { OPEN_LOGIN_MENU, OPEN_SIGNUP_MENU } from "../redux/user/userConstants";
import Cart from "./Cart";

//////////////////////////////////////////

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openAccount, setopenAccount] = useState(false);
  const toggleOpenAccount = () => setopenAccount((prev) => !prev);

  const [login, setLogin] = useState(true); //for testing
  // //
  const user = useSelector((state) => state.user.currentUser);
  const loginMenuopen = useSelector((state) => state.authMenu.loginMenuopen);
  const dispatch = useDispatch();
  ///
  const toggleSearchField = () => setOpenSearch(!openSearch);

  const toggleCart = () => setOpenCart(!openCart);

  return (
    <nav className="fixed inset-0 w-full h-24 px-12 backdrop-blur-3xl  text-amber-500 shadow-md z-50 header-bg">
      <div className="flex justify-between  ">
        <div className="flex items-center h-24 align-middle text-3xl gap-2 ">
          Mega T-shirts
          <span className="material-icons text-amber-500 align-bottom">
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
                    className={` search search-field-animation`}
                    placeholder="T-shirt name"
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
            {openSearch ? null : (
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
                <li className={`relative`}>
                  {openAccount && (
                    <ClickAwayListener
                      onClickAway={() => setopenAccount(false)}
                    >
                      <div className={`auth-bnts-container`}>
                        <button
                          className={`auth-btn`}
                          onClick={() => dispatch({ type: OPEN_LOGIN_MENU })}
                        >
                          Login
                        </button>
                        <button
                          className="auth-btn px-2"
                          onClick={() => dispatch({ type: OPEN_SIGNUP_MENU })}
                        >
                          signup
                        </button>
                      </div>
                    </ClickAwayListener>
                  )}
                  <button
                    className={`px-3 mx-2 rounded-lg `}
                    onClick={toggleOpenAccount}
                  >
                    <span className="material-icons text-[40px] text-amber-600 hover:shadow-md hover:shadow-amber-100 rounded-lg">
                      account_circle
                    </span>
                  </button>
                </li>
                <li className={`relative cursor-pointer`}>
                  <button onClick={toggleCart}>
                    <span className="material-icons text-amber-500 text-4xl ">
                      shopping_cart
                    </span>
                    <CirleTRbadge />
                  </button>
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
      <ClickAwayListener onClickAway={() => setOpenCart(false)}>
        <div className={`relative`}>
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
        </div>
      </ClickAwayListener>
    </nav>
  );
}

export default Header;
