import React, {useState, useEffect} from 'react';


const FormGif = ({setShowGifForm }) => {
    const [gifSearch, setGifSearch] = useState('');
    const [gif, setGif] = useState(null);

    const handleClose = () => {
        setShowGifForm(false);
    }

    const handleGifSubmit = (event) => {
        console.log(gifSearch);
        setGifSearch('');
    }
    return (
        <div className='overlay'>
            <div className='gif-form'>
                <button className='close-btn' onClick={handleClose}>X</button>
                    <form className='search-gif-form' onSubmit={handleGifSubmit}>
                        <input type='text' required value={gifSearch} onChange={(e => setGifSearch(e.target.value))} placeholder='Search GIFS...'/>
                    </form>
            </div>
        </div>
    );
}

export default FormGif;