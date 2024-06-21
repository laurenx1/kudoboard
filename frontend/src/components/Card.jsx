import React from 'react'
import './Card.css'


const Card = ({ card, onDeleteCard, onUpvoteCard }) => {
    const handleDelete = () => {
        fetch(`http://localhost:3000/cards/${card.id}`, {
            method: 'DELETE',
        })
        .then(() => onDeleteCard(card.id))
        .catch(error => console.error('Error deleting card:', error));
    };

    const handleUpvote = () => {
        fetch(`http://localhost:3000/cards/${card.id}?upvotes=${card.upvotes + 1}`, {
            method: 'PATCH',
        })
        .then(() => onUpvoteCard(card.id))
        .catch(error => console.error('Error upvoting card:', error));
    };

    return (
        <div className='card'>
            <img src={card.gif} alt={card.title} className='card-gif' />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <p>{card.author}</p>
            <p>Upvotes: {card.upvotes}</p>
            <div className='btn-container'>
                <button className='upvote-btn' onClick={handleUpvote}> ⇪ </button>
                <button className='delete-btn' onClick={handleDelete}>🗑️</button>
            </div>
        </div>
    )

}

export default Card; 