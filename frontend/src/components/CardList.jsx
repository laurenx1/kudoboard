import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Card from './Card'


const CardList = ({boardOpened}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
    let cardsUrl = `http://localhost:3000/boards/${boardOpened.id}/cards`
    fetch(cardsUrl) 
        .then(response => response.json)
        .then(data => setCards(data))
        .catch(error => console.error('Error fetching boards:', error));
    }, [])

    console.log(cards);
    return (
      <>
      <button className='new-card-btn'>Make New Card</button>
      <div className='card-list'>
        {cards.map((card, index) => (
          <Card></Card>
        ))}

      </div>
      </>
    );
  }
  export default CardList;