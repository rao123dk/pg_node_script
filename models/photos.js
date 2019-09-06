'use strict';
module.exports = (sequelize, DataTypes) => {
  const photos = sequelize.define('photos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    album_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'albums',
        key: 'id'
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING
    },
    thumbnail_url: {
      allowNull: true,
      type: DataTypes.STRING
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
  photos.associate = function(models) {
    photos.belongsTo(models.albums, { foreignKey: 'albums_id', });  
  };
  return photos;
};