'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.insert('roles', [
      {
      id: 1,
      name: 'admin',
      description: 'admin role',
      },
      {
      id: 2,
      name: 'user',
      description: 'user role',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
