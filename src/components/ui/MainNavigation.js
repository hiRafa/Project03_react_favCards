import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./ui.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoritesCtxt = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Cards</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Cards</Link>
          </li>
          <li>
            <Link to="/new-card">New Card</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>
                {favoritesCtxt.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
