import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./ui.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoritesCtxt = useContext(FavoritesContext);

  // const [active, setActive] = useState(null);

  const navTabs = [
    {
      id: 1,
      tabTitle: "All Cards",
      tabClass: "myCustomClass",
      tabClicked: false,
      href: "/home",
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

  const Nav = ({ href, id, tabTitle, isActive, counter }) => {
    return (
      // With NavLink it is possible to use isActive state without using all these props.
      // Change NavLink to Link and active all spaces to get the functionality ready
      <li
        key={id}
        // onClick={() => clickTab(id)}
        // className={isActive ? classes.active : ""}
      >
        <NavLink
          to={href}
          className={(isActive) => (!isActive ? "inactive" : "")}
        >
          {tabTitle} {counter}
        </NavLink>
      </li>
    );
  };

  // const clickTab = (id) => {
  //   setActive(id);
  // };

  return (
    <header className={classes.header}>
      <div className={classes.logo}> Gallery Cards</div>
      <nav>
        <ul>
          {navTabs.map((navItem) => (
            <Nav
              {...navItem}
              // key={navItem.id}
              // to={navItem.href}
              // isActive={active === navItem.id}
              // onClick={clickTab}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
