import { IconContext } from "react-icons";
import { VscGraphLine } from "react-icons/vsc";
import { TbHome } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiWalletAlt } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { HiOutlineFlag } from "react-icons/hi";
import { RiSuitcaseLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const changeScreenWidth = () => {
    window.innerWidth <= 1300 ? setSidebar(false) : setSidebar(true);
  };

  window.addEventListener("resize", changeScreenWidth);

  const showSidebar = () => setSidebar(!sidebar);

  const SidebarData = [
    {
      title: "Dashboard",
      path: "/",
      icon: <VscGraphLine />,
      cName: "nav-text",
    },
    {
      title: "Products",
      path: "/product",
      icon: <TbHome />,
      cName: "nav-text",
    },
    {
      title: "Blog",
      path: "/blog",
      icon: <MdOutlineShoppingCart />,
      cName: "nav-text",
    },
    {
      title: "Transactions",
      path: "/transactions",
      icon: <BiWalletAlt />,
      cName: "nav-text",
    },
    {
      title: "Users",
      path: "/users",
      icon: <HiOutlineUsers />,
      cName: "nav-text",
    },
    {
      title: "Analysis",
      path: "/analysis",
      icon: <TbBrandGoogleAnalytics />,
      cName: "nav-text",
    },
    {
      title: "Reports",
      path: "/reports",
      icon: <HiOutlineFlag />,
      cName: "nav-text",
    },
    {
      title: "Investment",
      path: "/investment",
      icon: <RiSuitcaseLine />,
      cName: "nav-text",
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FiSettings />,
      cName: "nav-text",
    },
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sidebar-bg">
          <div className="sidebar container">
            <div className="sidebar-nav_left">
              <Link to="#" className="menu-bars">
                <FaBars onClick={showSidebar} />
              </Link>
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="sidebar-toggle" onClick={showSidebar}>
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
                <h2>RETRO</h2>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
