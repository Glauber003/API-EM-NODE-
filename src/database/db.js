import  Sequelize from "sequelize";

const sequelize = new Sequelize('bancoteste', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
  });

  export default sequelize;