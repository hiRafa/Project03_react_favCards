import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./ui.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  // const [nav1active, setNav1active] = useState(false);
  // const [nav2active, setNav2active] = useState(false);
  // const [nav3active, setNav3active] = useState(false);

  // const activationHandler1 = () => {
  //   setNav1active(true);
  //   setNav2active(false);
  //   setNav3active(false);
  // };
  // const activationHandler2 = () => {
  //   setNav1active(false);
  //   setNav2active(true);
  //   setNav3active(false);
  // };
  // const activationHandler3 = () => {
  //   setNav1active(false);
  //   setNav2active(false);
  //   setNav3active(true);
  // };

  const favoritesCtxt = useContext(FavoritesContext);

  const [active, setActive] = useState(null);
  const navTabs = [
    {
      id: 1,
      tabTitle: "All Cards",
      tabClass: "myCustomClass",
      tabClicked: false,
      href: "/",
    },
    {
      id: 2,
      tabTitle: "New Card",
      tabClass: "myCustomClass",
      tabClicked: false,
      href: "/new-card",
    },
    {
      id: 3,
      tabTitle: "Favorites",
      tabClass: "myCustomClass",
      tabClicked: false,
      href: "/favorites",
      counter: (
        <span className={classes.badge}>{favoritesCtxt.totalFavorites}</span>
      ),
    },
  ];

  const NavLink = ({ href, id, tabTitle, isActive, counter }) => {
    return (
      <li
        key={id}
        onClick={() => clickTab(id)}
        className={isActive ? classes.active : ""}
      >
        <NavLink to={href}>
          {tabTitle} {counter}
        </NavLink>
      </li>
    );
  };

  const clickTab = (id) => {
    setActive(id);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}> Gallery Cards</div>
      <nav>
        <ul>
          {navTabs.map((navItem) => (
            <NavLink
              {...navItem}
              key={navItem.id}
              to={navItem.href}
              isActive={active === navItem.id}
              onClick={clickTab}
            />
          ))}
        </ul>
        {/* <ul>
          {/* 
          <li
            className={`${nav3active ? classes.active : ""}`}
            onClick={activationHandler3}
          >
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>
                {favoritesCtxt.totalFavorites}
              </span>
            </Link>
          </li> 
        </ul> */}
      </nav>
    </header>
  );
};

export default MainNavigation;
