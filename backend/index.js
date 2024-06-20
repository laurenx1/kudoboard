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
  const { category, query } = req.query
  try {
    let boards; 
    if (category) {
      boards = await prisma.board.findMany({
        where: {
          category: category
        }
      }); 
    } else if (query) {
      boards = await prisma.board.findMany({
        where: {
          OR: [
            {
              title: {
                contains: query, 
                mode: 'insensitive' // case insensitive search
              },
            },
            {
              description: {
                contains: query, 
                mode: 'insensitive'
              },
            },
          ],
        },
      });
    } else {
      boards = await prisma.board.findMany();
    }
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
        cards,
      },
    });
    res.json(newBoard);
  } catch (error) {
    console.error('Error creating board:', error); 
    res.status(500).json({ error: 'Internal server error' });
  }
});


// delete a board
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


// go to view board's cards
app.get('boards/cards/:boardId', async (req, res) => {
  const boardId = parseInt(req.params.boardId)
  const cards = await prisma.card.findMany({
    where: {
      boardId: boardId
    },
    orderBy: {
      id: 'desc'
    }
  });
  res.json(cards);
})


// delete a card
app.delete('/card/:id', async (req, res) => {
  const cardId = parseInt(req.params.id);
  const card = await prisma.card.findUnique({
    where: {id: cardId}
  });
  res.status(204).send()
});


// change the number of upvotes a card has
app.patch('/card/:id', async (req, res) => {
  const cardId = parseInt(req.params.id);
  const newUpvotes = parseInt(req.query.upvotes);

  const updateCard = await prisma.card.update({
    where: {
      id: cardId,
    }, 
    data: {
      upvotes: newUpvotes
    },
  })
  res.status(204).send();
});
