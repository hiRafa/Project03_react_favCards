import React, { useContext, useState } from "react";
import FavoritesContext from "../../store/favorites-context";
import CardWrapper from "../ui/CardWrapper";
import classes from "./Cards.module.css";

const CardsItem = (cards) => {
  // -------------- Favorites
  const { id, image, title, rank, description } = cards.card;

  // use Context connects the data in the createcontext file with the file where it's been called(here)
  // can't use the same name
  const favoritesCtxt = useContext(FavoritesContext);
  const cardIsFav = favoritesCtxt.cardIsFav(id);

  function toggleFavStatusHandler() {
    //if the card is already a favorite, remove from the main list
    if (cardIsFav) {
      favoritesCtxt.removeFav(id);
    } else {
      // if the item is not a favorite yet, we can add it to the favorites array
      favoritesCtxt.addFav({
        id: id,
        title: title,
        description: description,
        image: image,
        rank: rank,
      });
    }
  }

  const [cardsLeft, setCardsLeft] = useState(cards);
  console.log(cardsLeft.card);

  function removeCardHandler(id) {
    fetch(
      `https://project04favoritecards-default-rtdb.asia-southeast1.firebasedatabase.app/cards/${id}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      setCardsLeft(true);
      window.location.reload();
    });
  }

  return (
    // <CardWrapper customClass={cardIsFav ? "ego" : null}> either pass the result of the ternary operation, or
    // pass the cardIsFav boolean through props(in this case customClass) to the card wrapper component and set the ternary operation there
    <CardWrapper customClass={cardIsFav}>
      <li>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <p>{rank}</p>
          <p>{description}</p>
        </div>
        <div
          className={`${classes.actions} ${
            cardIsFav ? classes["actions_remove"] : ""
          }`}
        >
          <button onClick={toggleFavStatusHandler}>
            {cardIsFav ? "Remove From Favorites" : "Add to Favorites"}
          </button>
        </div>
        <div className={`${classes.actions} ${classes["actions_delete"]}`}>
          <button onClick={() => removeCardHandler(id)}>Delete Card</button>
        </div>
      </li>
    </CardWrapper>
  );
};

export default CardsItem;
