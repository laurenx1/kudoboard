import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './NewBoardForm.css'

const NewBoardForm = ({ setCreateNew, addBoard }) => {
    // state for form fields
    const [title, setTitle] = useState(''); 
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');



    // Function to close the modal
    const handleClose = () => {
        setCreateNew(false);
    }

    const handleSubmit = (event) => {
      event.preventDefault(); 

      console.log({title, category, author});
      const newBoard = { title, author, description, category, image: `http://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`, cards: []}; 
      addBoard(newBoard); 
      setTitle('');
      setCategory('');
      setAuthor('')
      setDescription('');
      setImage('');
      handleClose();
    }

    return (
      <div className='overlay'>
        <div className='new-board-form'>
          <button className='close-btn' onClick={handleClose}>X</button>
          <h2>Create a New Board</h2>
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label>Category:</label>
            <select required value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value>Select a category</option>
              <option value='Recent'>Recent</option>
              <option value='Celebration'>Celebration</option>
              <option value='Thank You'>Thank You</option>
              <option value='Inspiration'>Inspiration</option>
            </select>
            <label>Author:</label>
            <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button className='submit' type='submit'>Create Board</button>
        </form>
        </div>
      </div>

    );
}
export default NewBoardForm;