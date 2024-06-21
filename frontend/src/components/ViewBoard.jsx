import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CardList from './CardList';
import NewCardForm from './NewCardForm'

const ViewBoard = () => {
    const { boardId } = useParams();
    const [createNewCard, setCreateNewCard] = useState(false); 
    const [cards, setCards] = useState([]);


    useEffect(() => {
        let cardsUrl = `http://localhost:3000/boards/${boardId}/cards`
        fetch(cardsUrl) 
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(error => console.error('Error fetching boards:', error));
        }, [boardId])


    const addCard = (newCard) => {
        console.log("newcard in addcard", newCard);
        fetch(`http://localhost:3000/boards/${boardId}/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCard),
        })
        .then((response) => response.json())
        .then((data) => setCards([...cards, data]))
        .catch((error) => console.error('Error adding card:', error))
            
    }
    

    const handleShowCardForm = () => {
        setCreateNewCard(true);
    }


    return (
        <div>
            <button className='new-card-btn' style={{border: 'groove'}} onClick={handleShowCardForm}>Create a Card</button>
            <CardList cards={cards} setCards={setCards}/>
            {createNewCard && <NewCardForm setCreateNewCard={setCreateNewCard} addCard={addCard}/>}
        </div>
    );
};

export default ViewBoard;