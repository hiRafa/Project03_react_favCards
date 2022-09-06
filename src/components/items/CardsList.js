import React, { useContext } from "react";
import classes from "./Cards.module.css";
import CardsItem from "./CardsItem";

// cardsItems is an important prop
const CardsList = (props) => {
  return (
    <ul className={classes.list}>
      {props.cardsItems.map((card) => (
        <CardsItem card={card} key={card.id} />
      ))}
    </ul>
  );
};

export default CardsList;
