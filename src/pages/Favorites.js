import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import CardsList from "../components/items/CardsList";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const favoritesCtxt = useContext(FavoritesContext);
  let contentOfThisPage;

  if (favoritesCtxt.totalFavorites === 0) {
    contentOfThisPage = (
      <div>
        <p>Let's start adding new favorites</p>
        <button>
          <Link to="/">Return to Cards List</Link>
        </button>
      </div>
    );
  } else {
    contentOfThisPage = <CardsList cardsItems={favoritesCtxt.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {contentOfThisPage}
    </section>
  );
};

export default FavoritesPage;
