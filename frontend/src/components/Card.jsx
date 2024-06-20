import React from 'react'


const Card = ({ index, title, category, author, imageUrl, onDeleteBoard, setShowCards, setViewBoard, board }) => {
    const handleDelete = () => {
        onDeleteBoard(); 
    }

    const handleView = () => {
        setShowCards(true);
        setViewBoard(board); //viewBoard is ALL of the board, can then use dot notation in Card. 
        console.log('you wanna view a board');
    }

    console.log(imageUrl)
    return (
        <div className='board'>
            <img src={imageUrl} alt={title} className='board-image' />
            <h3>{title}</h3>
            <p>{category}</p>
            <p>{author}</p>
            <div className='btn-container'>
                <button className='view-btn' onClick={handleView}>View Board</button>
                <button className='delete-btn' onClick={handleDelete}>Delete Board</button>
            </div>
        </div>
    );
};

export default Card; 