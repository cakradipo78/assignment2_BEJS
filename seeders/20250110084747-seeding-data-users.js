'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
       name: 'Test',
       username: 'test',
       email:'test@aaa.com',
       password:'password123',
       address:'alamat 001',
       phonenumber:'081319023264',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'Ari Heryawan',
      username: 'arroy',
      email:'arroy@gmail.com',
      password:'arroy123',
      address:'aKarawang Barat',
      phonenumber:'0852123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    ], {
      
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
