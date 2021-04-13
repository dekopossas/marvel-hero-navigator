const { MongoClient } = require('mongodb');

require('dotenv').config();

const DB_NAME = 'MarvelHeroNavegator';
const MONGO_DB_URL = 'mongodb://localhost:27017/MarvelHeroNavegator';

module.exports = () =>
  MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
