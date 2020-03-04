
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "id": 1,
          "username": "Jose Alcado",
          "email": "jose@gmail.com",
          "password": "1234"
        },
        {
          "id": 2,
          "username": "Shawn Quirtz",
          "email": "shawn@gmail.com",
          "password": "1234"
        },
        {
          "id": 3,
          "username": "Amy Whiney",
          "email": "amy@gmail.com",
          "password": "1234"
        }
      ]);
    });
};
