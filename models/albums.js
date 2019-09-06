'use strict';
module.exports = (sequelize, DataTypes) => {
  const albums = sequelize.define('albums', {
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
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  albums.associate = function(models) {
    albums.belongsTo(models.users, { foreignKey: 'user_id', });
    albums.hasMany(models.photos);  
  };
  return albums;
};