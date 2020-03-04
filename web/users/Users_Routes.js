const server = require('express');
const Users = require('../database/db-helpers.js');


const router = server.Router();

router.get('/',(req, res)=> {
   
   Users.find()
   .then(users => {
       res.json(users);
   })
   .catch(err => {
        res.status(500).json({err: 'failed to get users'})
   });
});


router.get('/:id', (req, res) => {
   const {id} = req.params;

   Users.findById(id)
        .then(user => {
            if(user){
                res.json(user)
            } else {
                res.status(404).json({err: 'Invalid User id'})}
        })
        .catch(err => {
            res.status(500).json({err: 'failed to get user with given id'})
        })
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

