const express = require('express');

const server = express();

const port = 3000;


server.get('/',(req, res)=> {
     res.send('Hello from Express');
});


server.get('/api/users',(req, res)=> {
    const users = [

        {
            id:1,
            name:"Jose Alcado",
            email:"jose@gmail.com",
            password: "1234"
        },
        {
            id:2,
            name:"Shawn Quirtz",
            email: "shawn@gmail.com",
            password: "1234"
        },
        {
            id:3,
            name:"Amy Whiney",
            email:"amy@gmail.com",
            password: "1234"
        }
        
    ];

    res.status(200).json(users);
});


server.listen(port, () => {
    console.log(`Server running at ${port}/`);
});