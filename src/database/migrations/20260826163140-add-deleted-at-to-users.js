'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'deletedAt', {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'deletedAt');
  },
};

//TODO: Criar outra migrations para nao deixar o email duplicado, e fazer o tratamento de erro no service de create user e update user.