import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './NewBoardForm.css'
// https://kudos-board-exemplar.onrender.com/

const NewBoardForm = ({ setCreateNew }) => {
    // Function to close the modal
    const handleClose = () => {
        setCreateNew(false);
    }

    return (
      <div className='overlay'>
        <div className='new-board-form'>
          <button class='close-btn'>X</button>
          <h2>Create a New Board</h2>
          <label>Title:</label>
          <input type='text' required value/>
          <label>Category:</label>
          <select required>
            <option value>Select a category</option>
            <option value='Recent'>Recent</option>
            <option value='Celebration'>Celebration</option>
            <option value='Thank You'>Thank You</option>
            <option value='Inspiration'>Inspiration</option>
          </select>
          <label>Author:</label>
          <input type='text' value/>
          <button class='submit'>Create Board</button>
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