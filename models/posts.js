'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    body: {
      allowNull: false,
      type: DataTypes.TEXT
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
  posts.associate = function (models) {
    posts.belongsTo(models.users, { foreignKey: 'user_id', });
    posts.hasMany(models.comments);
  };
  return posts;
};