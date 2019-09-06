'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    address: {
      allowNull: false,
      type: DataTypes.JSON
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING
    },
    website: {
      allowNull: true,
      type: DataTypes.STRING
    },
    company: {
      allowNull: true,
      type: DataTypes.JSON
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  users.associate = function (models) {
    users.hasMany(models.posts);
    users.hasMany(models.todos);
    users.hasMany(models.albums);
  };
  return users;
};