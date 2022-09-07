import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import CardsList from "../components/items/CardsList";
import { NavLink } from "react-router-dom";
import classes from "./somecss.module.css";

const FavoritesPage = () => {
  const favoritesCtxt = useContext(FavoritesContext);
  let contentOfThisPage;

  if (favoritesCtxt.totalFavorites === 0) {
    contentOfThisPage = (
      <div>
        <p>Let's start adding new favorites</p>
        <button
          className={`${classes["btn-returnToHome"]} ${classes.returnhome}`}
        >
          <NavLink
            to="/home"
            // className={(isActive) => (isActive ? "nav_active" : "")}
          >
            Return to Cards List
          </NavLink>
        </button>
      </div>
    );
  } else {
    contentOfThisPage = <CardsList cardsItems={favoritesCtxt.favorites} />;
  }

  return (
    <section>
      <h1>Favorites</h1>
      {contentOfThisPage}
    </section>
  );
};

export default FavoritesPage;
