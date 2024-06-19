import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './NewBoardForm.css'
// https://kudos-board-exemplar.onrender.com/

const NewBoardForm = ({ setCreateNew }) => {
    // state for form fields
    const [title, setTitle] = useState(''); 
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');



    // Function to close the modal
    const handleClose = () => {
        setCreateNew(false);
    }

    const handleSubmit = (event) => {
      event.preventDefault(); 

      console.log({title, category, author});
      setTitle('');
      setCategory('');
      setAuthor('')
      handleClose();
    }

    return (
      <div className='overlay'>
        <div className='new-board-form'>
          <button class='close-btn' onClick={handleClose}>X</button>
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
          <button className='submit' type='submit'>Create Board</button>
        </form>
        </div>
      </div>
        // <Modal show={true} onHide={handleClose} centered>
        //     <Modal.Header closeButton>
        //         <Modal.Title>Create New Board</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //         <p>Hello! Please enter the details for the new board.</p>
        //         {/* Form elements can be added here */}
        //     </Modal.Body>
        //     <Modal.Footer>
        //         <Button variant="secondary" onClick={handleClose}>
        //             Close
        //         </Button>
        //         <Button variant="primary" onClick={() => {
        //             // Logic to handle board creation
        //             handleClose();
        //         }}>
        //             Save Changes
        //         </Button>
        //     </Modal.Footer>
        // </Modal>
    );
}
export default NewBoardForm;