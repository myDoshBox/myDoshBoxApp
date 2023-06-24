import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  ChatIcon,
  DashboardIcon,
  LogoutIcon,
  NavTransactionIcon,
  NotificationIcon,
  SettingsIcon,
  UsersIcon,
  TicketsIcon,
} from "../IconComponent/SideNavIcons";
import doshlogo from "../../images/NewDoshLogo.png";
import smdoshlogo from "../../images/doshnewlogo.png";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";

const CustomerCareSideNav = () => {
  return (
    <>
      <MobileScreen />
      <DesktopScreen />
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

const MobileScreenSideNav = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  let activeClassName = "active-linkSm";
  let baseClassName = "inactive-linkSm";
  const disappearEl = useRef(null);
  const navigate = useNavigate();
  const handleDisappear = () => {
    disappearEl.style.display = "none";
  };

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
        className="d-lg-none text-white border-0 shadow"
        style={{ width: "6rem" }}
        {...props}
        ref={disappearEl}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <img src={smdoshlogo} alt="logo" className="smlogo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-between flex-column">
            <ul className="ps-2">
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <div>
                  <NavLink
                    to="../userdashboard"
                    end
                    className={({ isActive }) =>
                      isActive ? activeClassName : baseClassName
                    }
                    onClick={handleDisappear}
                  >
                    <i class="bi bi-house icon"></i>
                  </NavLink>
                </div>
              </li>
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeClassName : baseClassName
                    }
                    to="transactions"
                    onClick={handleDisappear}
                  >
                    <i class="bi bi-house icon"></i>
                  </NavLink>
                </div>
              </li>
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeClassName : baseClassName
                    }
                    to="users"
                    onClick={handleDisappear}
                  >
                    <i class="bi bi-house icon"></i>
                  </NavLink>
                </div>
              </li>
              {/* <li className="d-flex align-items-center SideNavItem mb-4">
                <div className="me-3">
                  <ChatIcon />
                </div>
                <span className="my-1">Chats</span>
              </li> */}
              <li className="d-flex align-items-center SideNavItem mb-4">
                <div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeClassName : baseClassName
                    }
                    to="notification"
                    onClick={handleDisappear}
                  >
                    <i class="bi bi-house icon"></i>
                  </NavLink>
                </div>
              </li>
              <li className="d-flex  align-items-center SideNavItem mb-4">
                <div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeClassName : baseClassName
                    }
                    to="tickets-history"
                    onClick={handleDisappear}
                  >
                    <i class="bi bi-house icon"></i>
                  </NavLink>
                </div>
              </li>
              <li className="d-flex align-items-center SideNavItem mb-5">
                <div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeClassName : baseClassName
                    }
                    to="settings"
                    onClick={handleDisappear}
                  >
                    <i class="bi bi-house icon"></i>
                  </NavLink>
                </div>
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
                <span className="text-white">Logout</span>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const DesktopScreen = ({ name, ...props }) => {
  let activeClassName = "active-link";
  let baseClassName = "inactive-link";
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
            <li className="d-flex mb-4 align-items-center SideNavItem">
              <div>
                <NavLink
                  to="../customer-care"
                  end
                  className={({ isActive }) =>
                    isActive ? activeClassName : baseClassName
                  }
                >
                  {/* <span className="mx-3 icon">
                    <DashboardIcon />
                  </span> */}
                  <i class="bi bi-house icon"></i>
                  <span>Dashboards</span>
                </NavLink>
              </div>
            </li>
            <li className="d-flex mb-4 align-items-center SideNavItem">
              <div>
                <NavLink
                  to="transaction"
                  className={({ isActive }) =>
                    isActive ? activeClassName : baseClassName
                  }
                >
                  <i class="bi bi-house icon"></i>
                  <span>Transactions</span>
                </NavLink>
              </div>
            </li>
            <li className="d-flex mb-4 align-items-center SideNavItem">
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : baseClassName
                  }
                  to="users"
                >
                  <i class="bi bi-house icon"></i>
                  <span>Users</span>
                </NavLink>
              </div>
            </li>
            {/* <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">
                <ChatIcon />
              </div>
              <span className="my-1">Chats</span>
            </li> */}
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : baseClassName
                  }
                  to="notification"
                >
                  <i class="bi bi-house icon"></i>
                  <span>Notifications</span>
                </NavLink>
              </div>
            </li>
            <li className="d-flex  align-items-center SideNavItem mb-4">
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : baseClassName
                  }
                  to="tickets-history"
                >
                  <i class="bi bi-house icon"></i>
                  <span>Tickets</span>
                </NavLink>
              </div>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-5">
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeClassName : baseClassName
                  }
                  to="settings"
                >
                  <i class="bi bi-house icon"></i>
                  <span>Settings</span>
                </NavLink>
              </div>
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
              <span className="text-white">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const MobileScreen = () => {
  return (
    <>
      {options.map((props, idx) => (
        <MobileScreenSideNav key={idx} {...props} />
      ))}
    </>
  );
};

export default CustomerCareSideNav;
