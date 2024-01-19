const { User } = require('.models'); 

const userData = [
  {
    username: 'MichaelScott',
    email: 'MicahelScott@example.com',
    password: 'password123' 
  },
  {
    username: 'DwightSchrute',
    email: 'DwightS@example.com',
    password: 'password123'
  }
 // additional user data when needed. 
];

const seedUsers = async () => {
  await User.bulkCreate(userData, { individualHooks: true });
};

module.exports = seedUsers;
