'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    role: DataTypes.STRING,
    phonenumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (users, opt)=>{
        console.log("Before Create Hook Triggered")
        const resultHash = hashPassword(users.password)
        console.log("Hashed Password:", resultHash);  // Cek apakah password ter-hash
        users.password = resultHash

      }}



  });
  return User;
};