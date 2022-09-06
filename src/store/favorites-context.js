import React, { createContext, useState } from "react";

// Initial values
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,

  // adding these key with empty functions for autocompletion later only
  addFav: (favCard) => {},
  removeFav: (id) => {},
  cardIsFav: (id) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setFavorites] = useState([]);

  // concat returns a new array
  function addFavHandler(favCard) {
    setFavorites((prevState) => {
      return prevState.concat(favCard);
    });
  }

  // if the favorite id is different from the item id, then it removes the item from the array
  function removeFavHandler(id) {
    setFavorites((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }

  //some returns true or false (card) => card.id === id) is the condition
  function cardIsFavHandler(id) {
    return userFavorites.some((item) => item.id === id);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    cardIsFav: cardIsFavHandler, // true or false
  };

  // Updating initial values with value={context}
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
