const db = require('./db-config.js');


module.exports = {
    find,
    findById,
    add,
    findBy
}

//resolves to an array of users
function find(){
    return db('users');

}

function findBy(filter){
    return db('users').where(filter);
}

//resolves to  a single user or null
function findById(id){
    return db('users').where({id}).first()

}

async function add(user){
    const [id] = await db('users').insert(user);
    return findById(id);

}
