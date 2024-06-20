import React, {useState} from "react";
import ReactDOM from "react-dom";
import Card from './Card'


// this will be our view board display, will switch between this and the main display. 
const CardList = ({ viewBoard }) => {
    const cards = viewBoard.cards;
    console.log(cards);
    return (
      <>
      <div className='card-list'>
        {cards.map((card) => (
          <Card>
            
          </Card>

        ))}
      </div>
      </>
    );
  }
  export default CardList;