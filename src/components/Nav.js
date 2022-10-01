import React, { useState } from "react";
import WindowResize from "./WindowResize";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const windowResize = WindowResize();
  const windowSize = windowResize.props.children;

  const openNavMenu = () => {
    setOpenNav(true);
  };

  const closeNavMenu = () => {
    setOpenNav(false);
  };

  const navStyle = {
    backgroundColor: openNav && windowSize < 600 ? "white" : "",
    transition: "all 0.3s ease",
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      id="nav"
      style={navStyle}
      className={colorChange ? "colorChange" : "navbar"}
    >
      <div className="hamburger-logo">
        {windowSize > 600 && !openNav ? (
          openNav ||
          (!openNav && (
            <div className="navbar-600">
              <div className="logo">
                <img src="/images/logo.svg" alt="" />
              </div>
              <ul className="nav-links">
                <li className="navlink">
                  <a href="/">home</a>
                </li>
                <li className="navlink">
                  <a href="/">shop</a>
                </li>
                <li className="navlink">
                  <a href="/">about</a>
                </li>
                <li className="navlink">
                  <a href="/">contact</a>
                </li>
              </ul>
            </div>
          ))
        ) : !openNav ? (
          <div className="hamburger" onClick={openNavMenu}>
            <img src="/images/icon-hamburger.svg" alt="" />
          </div>
        ) : (
          <div className="open-hamburger">
            {windowSize < 600 ? (
              <div className="close-hamburger" onClick={closeNavMenu}>
                <img src="/images/icon-close.svg" alt="" />
              </div>
            ) : (
              <div className="logo">
                <img src="/images/logo.svg" alt="" />
              </div>
            )}

            <ul className="nav-links">
              <li className="navlink">
                <a href="/">home</a>
              </li>
              <li className="navlink">
                <a href="/">shop</a>
              </li>
              <li className="navlink">
                <a href="/">about</a>
              </li>
              <li className="navlink">
                <a href="/">contact</a>
              </li>
            </ul>
          </div>
        )}

        {!openNav && windowSize < 600 && (
          <div className="logo">
            <img src="/images/logo.svg" alt="" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
