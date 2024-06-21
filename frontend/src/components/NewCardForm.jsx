import React, {useState} from 'react';
import './NewCardForm.css';
import FormGif from './FormGif'
import { Form } from 'react-router-dom';

const NewCardForm = ({setCreateNewCard }) => {
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState('');
    const [owner, setOwner] = useState('');
    const [showGifForm, setShowGifForm] = useState(false)

    const apiKey=import.meta.env.VITE_GIPHY_API_KEY;

    const handleClose = () => {
        setCreateNewCard(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 

        console.log({title, description, owner});
        setTitle('');
        setDescription('');
        setOwner('');
    }

    const handleShowGifForm = () => {
        setShowGifForm(true);
    }


    return (
        <div className='overlay'>
            <div className='new-card-form'>
                <button className='close-btn' onClick={handleClose}>X</button>
                <h2>Create a New Card</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' required value={title} onChange={(e => setTitle(e.target.value))} placeholder='enter title here'/>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='enter description'/>
                    <button className='show-gif-form-btn' onClick={handleShowGifForm}>Find GIF</button>
                    <input type='text' required value={owner} onChange={(e => setOwner(e.target.value))} placeholder='enter your name'/>
                    <button className='submit' type='submit'>Create Card</button>
                </form>
                {showGifForm && <FormGif setShowGifForm={setShowGifForm}/>}
            </div>
        </div>
    );
}

export default NewCardForm;
