const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })


// midleware to parse json bodies, eneable CORS for all routes
app.use(express.json()); 
app.use(cors()); 

// get all boards
app.get('/boards', async (req, res) => {
  try {
    const boards = await prisma.board.findMany();
    res.json(boards);
  } catch (error) {
    console.error('Error fetching boards: ', error); 
    res.status(500).json({ error: 'Internal server error' })
  }
}); 

// create a new board
app.post('/boards', async(req, res) => {
  const { title, author, description, category, image } = req.body;
  try {
    const newBoard = await prisma.board.create({
      data: {
        title,
        author,
        description,
        category,
        image,
      },
    });
    res.json(newBoard);
  } catch (error) {
    console.error('Error creating board:', error); 
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.delete('/boards/:id', async (req, res) => {
  const { id } = req.params; 
  try {
    const deletedBoard = await prisma.board.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.json(deletedBoard)
  } catch (error) {
    console.error('Error deleting board:', error); 
    res.status(500).json({ error: 'Internal server error' })
  }
});



