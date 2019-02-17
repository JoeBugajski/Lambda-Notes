
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          userId: 1, 
          title: 'seed note 1',
          content: 'here is some stuff'
        },
        {
          userId: 2, 
          title: 'seed note 2',
          content: 'here is some other stuff'
        },
        {
          userId: 3, 
          title: 'seed note 3',
          content: 'here is even more stuff'
        }
      ]);
    });
};
