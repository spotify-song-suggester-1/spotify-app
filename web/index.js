const express = require('express');

const userRoutes = require('./users/Users_Routes');

const server = express();

//middlewares
server.use(express.json());
server.use('/api/users', userRoutes);

const port = 3000;


server.get('/',(req, res)=> {
     res.send('API up and running');
});


;
server.listen(port, () => {
    console.log(`Server running at ${port}/`);
});