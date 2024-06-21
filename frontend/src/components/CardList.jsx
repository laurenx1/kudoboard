import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Card from './Card'

import './CardList.css'


const CardList = ({ boardId }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
    let cardsUrl = `http://localhost:3000/boards/${boardId}/cards`
    fetch(cardsUrl) 
        .then(response => response.json())
        .then(data => setCards(data))
        .catch(error => console.error('Error fetching boards:', error));
    }, [boardId])

    console.log(cards);
    return (
      <>
      <div className='card-list'>
        {cards.map((card, index) => (
          <Card></Card>
        ))}

      </div>
      </>
    );
  }
  export default CardList;