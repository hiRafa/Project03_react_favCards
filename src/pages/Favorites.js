import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import CardsList from "../components/items/CardsList";
import { Link } from "react-router-dom";
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
          <Link to="/">Return to Cards List</Link>
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
