const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/MarvelHeroNavegator';
const DBNAME = 'MarvelHeroNavegator';

const SUCESS = 1;

const connection = () =>
  MongoClient.connection(MONGO_DB_URL, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((conn) => conn.db(DBNAME))
    .catch((err) => {
      console.error(err);
      process.exit(SUCESS)
    });

module.exports = connection;
