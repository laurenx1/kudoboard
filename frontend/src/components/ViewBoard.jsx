import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import CardList from './CardList';
import NewCardForm from './NewCardForm'

const ViewBoard = () => {
    const { boardId } = useParams();
    const [createNewCard, setCreateNewCard] = useState(false); 

    const handleShowCardForm = () => {
        setCreateNewCard(true);
    }

    return (
        <div>
            <button className='new-card-btn' style={{border: 'groove'}} onClick={handleShowCardForm}>Create a Card</button>
            <CardList boardId={boardId}/>
            {createNewCard && <NewCardForm setCreateNewCard={setCreateNewCard}/>}
        </div>
    );
};

export default ViewBoard;