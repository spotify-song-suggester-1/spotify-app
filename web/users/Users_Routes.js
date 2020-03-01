const server = require('express');

const router = server.Router();

router.get('/',(req, res)=> {
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


router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send(`hello from GET /${id}users endpoint`)
});

router.post('/', (req, res) => {
    res.status(200).send(`hello from the POST /users endpoint`)
});

router.put('/', (req, res) => {
    res.status(200).send('hello you have just updated an user');

});

router.delete('/', (req, res) => {
    res.status(200).send('hello you have just deleted an user');

});




module.exports = router;

