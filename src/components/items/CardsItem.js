import React, { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import CardWrapper from "../ui/CardWrapper";
import classes from "./Cards.module.css";

const CardsItem = (props) => {
  const { id, image, title, rank, description } = props.card;

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

  return (
    <CardWrapper>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <p>{rank}</p>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>
            {cardIsFav ? "Remove From Favorites" : "Add to Favorites"}
          </button>
        </div>
      </li>
    </CardWrapper>
  );
};

export default CardsItem;
