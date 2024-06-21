import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Card from './Card'

import './CardList.css'


const CardList = ({ cards, setCards }) => {


    const onDeleteCard = (cardId) => {
        setCards(cards.filter((card) => card.id !== cardId));
    };


    const onUpvoteCard = (cardId) => {
        const UpdatedCards = cards.map((card) => 
            card.id === cardId ? {...card, upvotes: card.upvotes + 1 } : card
        );
        setCards(updatedCards);
    };


    return (
      <>
      <div className='card-list'>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onDeleteCard={onDeleteCard}
            onUpvoteCard={onUpvoteCard}
          />
        ))}

      </div>
      </>
    );
  }
  export default CardList;