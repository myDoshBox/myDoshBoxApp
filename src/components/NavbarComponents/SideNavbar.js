//Neutrals Sidenav
//Admin Sidenav
//CustomerCareSidenav
//UserSidenav

import logo from "../../assets/images/doshlogo.jpg";
import { ChatIcon, DashboardIcon, DisputeIcon, LogoutIcon, NavTransactionIcon, NotificationIcon, SettingsIcon, UsersIcon, TicketsIcon } from '../IconComponent/SideNavIcons'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const UserSidenav = () => {
  return (
    <aside className="SideNav d-flex align-center flex-column" >
      <div>
        <img className="SideNavLogo ms-3 mt-3" src={logo} alt="MyDoshBox Logo" />
      </div>
      <div className="SideNavItems d-flex justify-content-between align-center flex-column mt-5 h-100">
        <ul className="ps-3">
          <li className="d-flex align-center SideNavItem mt-3">
            <DashboardIcon width="30" height="30" className="me-3"/>
            <span className="my-1">Dashboard</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <NavTransactionIcon width="30" height="30" className="me-3" />
            <span className="my-1">Transactions</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <UsersIcon width="30" height="30" className="me-3"  />
            <span className="my-1">History</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <ChatIcon width="30" height="30" className="me-3"/>
            <span className="my-1">Chats</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <NotificationIcon width="30" height="30" className="me-3" />
            <span className="my-1">Notifications</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex  align-center SideNavItem mt-3">
            <DisputeIcon width="30" height="30" className="me-3"/>
            <span className="my-2">Disputes</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <SettingsIcon width="30" height="30" className="me-3"/>
            <span className="my-1">Settings</span>
            <div className="hoverBlock"></div>
          </li>
        </ul>
        <ul className="ps-3">
          <li className="d-flex align-center SideNavItem mb-5">
            <LogoutIcon width="30" height="30" className="me-3" />
            <span className="my-1">Logout</span>
            <div className="hoverBlock"></div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export const NeutralsSidenav = () => {
  return (
    <aside className="SideNav d-flex align-center flex-column" >
      <div>
        <img className="SideNavLogo ms-3 mt-3" src={logo} alt="MyDoshBox Logo" />
      </div>
      <div className="SideNavItems d-flex justify-content-between align-center flex-column mt-5 h-100">
        <ul className="ps-3">
          <li className="d-flex align-center SideNavItem mt-3">
            <DashboardIcon width="30" height="30" className="me-3"/>
            <span className="my-1">Dashboard</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <NavTransactionIcon width="30" height="30" className="me-3" />
            <span className="my-1">
              {['end'].map((direction) => (
                <DropdownButton
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="secondary"
                  title={`Conflicts`}
                  className="SideNavDropdown"
                >
                  <Dropdown.Item eventKey="1">Open Conflicts</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Ongoing Conflicts</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Closed Conflicts</Dropdown.Item>
                </DropdownButton>
              ))}
            </span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <NotificationIcon width="30" height="30" className="me-3" />
            <span className="my-1">Notifications</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <SettingsIcon width="30" height="30" className="me-3"/>
            <span className="my-1">Settings</span>
            <div className="hoverBlock"></div>
          </li>
        </ul>
        <ul className="ps-3">
          <li className="d-flex align-center SideNavItem mb-5">
            <LogoutIcon width="30" height="30" className="me-3" />
            <span className="my-1">Logout</span>
            <div className="hoverBlock"></div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export const CustomerCareSidenav = () => {
  return (
    <aside className="SideNav d-flex align-center flex-column" >
      <div>
        <img className="SideNavLogo ms-3 mt-3" src={logo} alt="MyDoshBox Logo" />
      </div>
      <div className="SideNavItems d-flex justify-content-between align-center flex-column mt-5 h-100">
        <ul className="ps-3">
          <li className="d-flex align-center SideNavItem mt-3">
            <DashboardIcon width="30" height="30" className="me-3"/>
            <span className="my-1">Dashboard</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <NavTransactionIcon width="30" height="30" className="me-3" />
            <span className="my-1">Transactions</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <UsersIcon width="30" height="30" className="me-3"  />
            <span className="my-1">Users</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <ChatIcon width="30" height="30" className="me-3"/>
            <span className="my-1">Chats</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <NotificationIcon width="30" height="30" className="me-3" />
            <span className="my-1">Notifications</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex  align-center SideNavItem mt-3">
            <TicketsIcon width="30" height="30" className="me-3"/>
            <span className="my-2">Tickets</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <SettingsIcon width="30" height="30" className="me-3"/>
            <span className="my-1">Settings</span>
            <div className="hoverBlock"></div>
          </li>
        </ul>
        <ul className="ps-3">
          <li className="d-flex align-center SideNavItem mb-5">
            <LogoutIcon width="30" height="30" className="me-3" />
            <span className="my-1">Logout</span>
            <div className="hoverBlock"></div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export const AdminSidenav = () => {
  return (
    <aside className="SideNav d-flex align-center flex-column" >
      <div>
        <img className="SideNavLogo ms-3 mt-3" src={logo} alt="MyDoshBox Logo" />
      </div>
      <div className="SideNavItems d-flex justify-content-between align-center flex-column mt-5 h-100">
        <ul className="ps-3">
          <li className="d-flex align-center SideNavItem mt-3">
            <DashboardIcon width="30" height="30" className="me-3"/>
            <span className="my-1">Dashboard</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <NavTransactionIcon width="30" height="30" className="me-3" />
            <span className="my-1">Transactions</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <UsersIcon width="30" height="30" className="me-3"  />
            <span className="my-1">Users</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <ChatIcon width="30" height="30" className="me-3"/>
            <span className="my-1">Chats</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <NotificationIcon width="30" height="30" className="me-3" />
            <span className="my-1">Notifications</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex  align-center SideNavItem mt-3">
            <TicketsIcon width="30" height="30" className="me-3"/>
            <span className="my-2">Tickets</span>
            <div className="hoverBlock"></div>
          </li>
          <li className="d-flex align-center SideNavItem mt-3">
            <SettingsIcon width="30" height="30" className="me-3"/>
            <span className="my-1">Settings</span>
            <div className="hoverBlock"></div>
          </li>
        </ul>
        <ul className="ps-3">
          <li className="d-flex align-center SideNavItem mb-5">
            <LogoutIcon width="30" height="30" className="me-3" />
            <span className="my-1">Logout</span>
            <div className="hoverBlock"></div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

