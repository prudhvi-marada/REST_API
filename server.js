const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON

app.use(express.json());

// users data stored in an array of objects

let users = [
  { id: "1", firstName: "Anshika", lastName: "Agarwal", hobby: "Teaching" },
  { id: "2", firstName: "marada", lastName: "prudhvi", hobby: "writing" },
  { id: "3", firstName: "marada", lastName: "thanuja", hobby: "dance" },
  { id: "4", firstName: "penta", lastName: "umadevi", hobby: "cooking" },
  { id: "5", firstName: "bhaskrarao", lastName: "marada", hobby: "fighting" },
];

//  Middleware for logging req method,req url and status code 

app.use((req, res, next) => {
     console.log(`Request method:${req.method}, Request url: ${req.originalUrl}, Request status code: ${res.statusCode}`);
     next();
});

// ValidateBody (Middleware) to inform send all fields of data if we miss any field.

function validateBody(req, res, next) {
  const { firstName, lastName, hobby } = req.body;
  if (!firstName || !lastName || !hobby) {
    return res.status(400).json({ error: 'FirstName, LastName, and Hobby are Required*.' });
  }
  next();
}

// REST API'S

// Get method to retrive all the data (users)
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// Get method to retrive particular user by user ID
app.get('/user/:id', (req, res) => {
  const user = users.find(use => use.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user);
});

// POST method to create new user
app.post('/user', validateBody, (req, res) => {
  const newUser = { id: String(users.length + 1), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

//  PUT method to update datails of the user
app.put('/user/:id', validateBody, (req, res) => {
  const index_num = users.findIndex(use => use.id === req.params.id);
  if (index_num === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  users[index_num] = { id: req.params.id, ...req.body };
  res.status(200).json(users[index_num]);
});

//  DELETE method to delete user by their id
app.delete('/user/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  const deletedUser = users.splice(index, 1);
  res.status(200).json({ message: 'User deleted', user: deletedUser[0] });
});

// Start server (by command, npm start):
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});        
