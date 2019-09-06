const fs = require('fs'),
  path = require('path'),
  Sequelize = require('sequelize');

const basename = path.basename(__filename),
  env = process.env.NODE_ENV || 'development',
  config = require(__dirname + '/../config/config.json')[env];

var db = {};

const reconnectOptions = {
  max_retries: 9999,
  onRetry: (count) => {
    console.log("Connection lost, trying to reconnect (" + count + ")");
  }
};

var dbOptions = {
  host: config.host,
  port: config.port,
  dialect: 'postgres',
  pool: {
    max: 500,
    min: 0,
    acquire: 300,
    idle: 100
  },
  reconnect: reconnectOptions || true,
  define: {
    "createdAt": "created_at",
    "updatedAt": "updated_at",
    "underscored": true
  },
  logging: false
};

const sequelize = new Sequelize(config.database, config.username, config.password, dbOptions);


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;