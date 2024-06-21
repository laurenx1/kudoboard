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


// Get all cards for a specific board
app.get('boards/:boardId/cards', async (req, res) => {
  const boardId = parseInt(req.params.boardId); 
  try {
    const cards = await prisma.card.findMany({
      where: { boardId: parseInt(boardId, 10) }, 
      orderBy: { id: 'desc' }
    });
    res.json(cards); 
  } catch (error) {
    console.error('Error fetching cards:', error)
    res.status(500).json({ error: 'Internal server error'})
  }
})



// // create a new card 
// app.post('boards/:boardId/cards', async (req, res) => {
//   const { boardId } = req.params; 
//   const { title, description, author, gif } = req.body;
//   try {
//     const newCard = await prisma.card.create({
//       data: {
//         boardId: parseInt(boardId, 10), 
//         title, 
//         description, 
//         author, 
//         gif,
//       }, 
//     });
//     res.json(newCard)
//   } catch (error) {
//     console.error('Error creating card:', error);
//     res.status(500).json({ error: 'Internal server error'})
//   }
// }); 


// // delete a card
// app.delete('/cards/:id', async (req, res) => {
//   const cardId = parseInt(req.params.id);
//   try {
//     await prisma.card.delete({
//       where: { id: cardId }
//     });
//     res.status(204).send();
//   } catch (error) {
//     console.error('Error deleting card:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


// // change the number of upvotes a card has
// app.patch('/cards/:id', async (req, res) => {
//   const cardId = parseInt(req.params.id);
//   const newUpvotes = parseInt(req.query.upvotes);

//   const updateCard = await prisma.card.update({
//     where: {
//       id: cardId,
//     }, 
//     data: {
//       upvotes: newUpvotes
//     },
//   })
//   res.status(204).send();
// });
