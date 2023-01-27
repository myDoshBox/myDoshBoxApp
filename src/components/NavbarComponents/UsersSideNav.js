import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  ChatIcon,
  DashboardIcon,
  DisputeIcon,
  LogoutIcon,
  NavTransactionIcon,
  NotificationIcon,
  SettingsIcon,
} from "../IconComponent/SideNavIcons";
import doshlogo from "../../images/doshlogolight.png";
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";

const UsersSideNav = () => {
  return (
    <>
      <SmallShow />
      <BigShow />
      <Outlet />
    </>
  );
};

const options = [
  {
    scroll: true,
    backdrop: false,
  },
];

const SmallShowExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const disappearEl = useRef(null);

  const handleDisappear = () => {
    disappearEl.style.display = "none";
  };
  let activeClassName = "active-link";
  let baseClassName = "text-decoration-none text-white";
  const navigate = useNavigate();

  const nav = () => {
    navigate("/");
  };

  return (
    <>
      <Button
        onClick={toggleShow}
        className="me-2 bg-white border-0 d-lg-none position-fixed start-0 top-0"
      >
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8.33333H22.5V11.6667H0V8.33333ZM0 0H30V3.33333H0V0ZM0 20H13.5656V16.6667H0V20Z"
            fill="#006747"
          />
        </svg>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        className="w-75 d-lg-none text-white"
        {...props}
        ref={disappearEl}
        // id="off-canvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link to={"/"}>
              <img src={doshlogo} alt="logo" />
            </Link>
          </Offcanvas.Title>
          {/* <button
            type="button"
            class="btn-close"
            aria-label="Close"
            data-bs-dismiss="off-canvas"
          ></button> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-between flex-column">
            <ul className="ps-2">
              <li className="d-flex mb-5 align-items-center SideNavItem">
                <div className="me-3">
                  <DashboardIcon />
                </div>
                <NavLink
                  to="home"
                  className={({ isActive }) =>
                    isActive ? activeClassName : baseClassName
                  }
                  onClick={handleDisappear}
                >
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="d-flex mb-5 align-items-center SideNavItem">
                <div className="me-3">
                  <NavTransactionIcon />
                </div>
                <NavLink
                  to="transaction"
                  className={({ isActive }) =>
                    isActive ? activeClassName : baseClassName
                  }
                  onClick={handleDisappear}
                >
                  <span>Transactions</span>
                </NavLink>
              </li>

              {/* <li className="d-flex align-items-center SideNavItem mb-5">
                <div className="me-3">
                  <ChatIcon />
                </div>
                <span className="my-1">Chats</span>
              </li> */}
              <li className="d-flex align-items-center SideNavItem mb-5">
                <div className="me-3">
                  <NotificationIcon />
                </div>
                <NavLink
                  to="notification"
                  className={({ isActive }) =>
                    isActive ? activeClassName : baseClassName
                  }
                  onClick={handleDisappear}
                >
                  <span>Notifications</span>
                </NavLink>
              </li>
              <li className="d-flex  align-items-center SideNavItem mb-5">
                <div className="me-3">
                  <DisputeIcon />
                </div>
                <NavLink
                  to="dispute"
                  className={({ isActive }) =>
                    isActive ? activeClassName : baseClassName
                  }
                  onClick={handleDisappear}
                >
                  <span>Disputes</span>
                </NavLink>
              </li>
              <li className="d-flex align-items-center SideNavItem mb-5">
                <div className="me-3">
                  <SettingsIcon />
                </div>
                <NavLink
                  to="settings"
                  className={({ isActive }) =>
                    isActive ? activeClassName : baseClassName
                  }
                  onClick={handleDisappear}
                >
                  <span>Settings</span>
                </NavLink>
              </li>
            </ul>
            <ul className="ps-3">
              <li className="d-flex align-items-center SideNavItem mt-5 position-fixed bottom">
                <div className="me-3">
                  <LogoutIcon />
                </div>
                <li
                  className="d-flex align-items-center SideNavItem mt-5 bottom position-fixed"
                  onClick={nav}
                  style={{ cursor: "pointer" }}
                >
                  <div className="me-3">
                    <LogoutIcon />
                  </div>
                  <span>Logout</span>
                </li>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const BigShow = ({ name, ...props }) => {
  let activeClassName = "active-link";
  let baseClassName = "text-decoration-none text-white";

  const navigate = useNavigate();

  const nav = () => {
    navigate("/");
  };

  return (
    <>
      <div className="d-none d-lg-block big-side-nav">
        <Link to="/">
          <img src={doshlogo} alt="logo" className="mb-5" />
        </Link>

        <div className="d-flex justify-content-between flex-column">
          <ul className="ps-2">
            <li className="d-flex mb-5 align-items-center SideNavItem">
              <div className="me-3">
                <DashboardIcon />
              </div>
              <NavLink
                to="home"
                className={({ isActive }) =>
                  isActive ? activeClassName : baseClassName
                }
              >
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="d-flex mb-5 align-items-center SideNavItem">
              <div className="me-3">
                <NavTransactionIcon />
              </div>
              <NavLink
                to="transaction"
                className={({ isActive }) =>
                  isActive ? activeClassName : baseClassName
                }
              >
                <span>Transactions</span>
              </NavLink>
            </li>

            {/* <li className="d-flex align-items-center SideNavItem mb-5">
              <div className="me-3">
                <ChatIcon />
              </div>
              <span className="my-1">Chats</span>
            </li> */}
            <li className="d-flex align-items-center SideNavItem mb-5">
              <div className="me-3">
                <NotificationIcon />
              </div>
              <NavLink
                to="notification"
                className={({ isActive }) =>
                  isActive ? activeClassName : baseClassName
                }
              >
                <span>Notifications</span>
              </NavLink>
            </li>

            <li className="d-flex  align-items-center SideNavItem mb-5">
              <div className="me-3">
                <DisputeIcon />
              </div>
              <NavLink
                to="dispute"
                className={({ isActive }) =>
                  isActive ? activeClassName : baseClassName
                }
              >
                <span>Disputes</span>
              </NavLink>
            </li>

            <li className="d-flex align-items-center SideNavItem mb-5">
              <div className="me-3">
                <SettingsIcon />
              </div>
              <NavLink
                to="settings"
                className={({ isActive }) =>
                  isActive ? activeClassName : baseClassName
                }
              >
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
          <ul className="ps-3">
            <li
              className="d-flex align-items-center SideNavItem mt-5 bottom position-fixed"
              onClick={nav}
              style={{ cursor: "pointer" }}
            >
              <div className="me-3">
                <LogoutIcon />
              </div>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const SmallShow = () => {
  return (
    <>
      {options.map((props, idx) => (
        <SmallShowExample key={idx} {...props} />
      ))}
    </>
  );
};

export default UsersSideNav;
