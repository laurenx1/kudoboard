import React, {useState} from 'react';
import './NewCardForm.css';


const NewCardForm = ({ setCreateNewCard, addCard }) => {
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [gifQuery, setGifQuery] = useState('');
    const [gifs, setGifs] = useState([]);
    const [selectedGif, setSelectedGif] = useState(null);

    const apiKey=import.meta.env.VITE_GIPHY_API_KEY;

    const handleClose = () => {
        setCreateNewCard(false);
    }


    const searchGiphy = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gifQuery}&limit=6`)
            .then(response => response.json())
            .then(data =>setGifs(data.data))
            .catch(error => console.error('Error fetching GIFs:', error));
    };


    const handleGifSelect = (gifUrl) => {
        setSelectedGif(gifUrl);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 

        const newCard = {
            title, 
            description, 
            author, 
            gif: selectedGif,
            upVotes: 0
        }

        addCard(newCard);
        setTitle('');
        setDescription('');
        setAuthor('');
        setGifQuery('');
        setGifs([]);
        setSelectedGif(null);
        setCreateNewCard(false);
    }


    return (
        <div className='overlay'>
            <div className='new-card-form'>
                <button className='close-btn' onClick={handleClose}>X</button>
                <h2>Create a New Card</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' required value={title} onChange={(e => setTitle(e.target.value))} placeholder='enter title here'/>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='enter description'/>
                    <input type='text' required value={author} onChange={(e => setAuthor(e.target.value))} placeholder='enter your name'/>
                    <input type='text' value={gifQuery} onChange={(e) => setGifQuery(e.target.value)} placeholder='Search GIFs...'/>
                    <button type='button' onClick={searchGiphy}>Search GIFs</button>
                    <div className='gif-options'>
                        {gifs.map(gif => (
                            <img
                                key={gif.id}
                                src={gif.images.fixed_height.url}
                                alt={gif.title}
                                onClick={() => handleGifSelect(gif.images.fixed_height.url)}
                                className={selectedGif === gif.images.fixed_height.url ? 'selected' : ''}
                            />
                        ))}
                    </div>
                    <button className='submit' type='submit'>Create Card</button>
                </form>

            </div>
        </div>
    );
}

export default NewCardForm;
