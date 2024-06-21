import React from 'react';
import { useParams } from 'react-router-dom';
import CardList from './CardList';

const ViewBoard = () => {
    const { boardId } = useParams();

    return (
        <div>
            <CardList boardId={boardId}/>
        </div>
    );
};

export default ViewBoard;