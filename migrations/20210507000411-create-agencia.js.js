'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agencia', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      numeroagencia: {
        type: Sequelize.integer,
        allowNull: false
      },
      descricaodaagencia: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      iddobanco: {
        type: Sequelize.INTEGER,
        references: { model: 'Bancos', key: 'id'},
        allowNull: false
      }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Agencia');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
