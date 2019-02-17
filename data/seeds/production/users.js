
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          username: 'seed1',
          password: 'stuff'
        },
        {
          id: 2, 
          username: 'seed2',
          password: 'stuff'
        },
        {
          id: 3, 
          username: 'seed3',
          password: 'stuff'
        }
      ]);
    });
};
