const { MongoClient } = require('mongodb');

const DBNAME = 'MarvelHeroNavegator';
const MONGO_DB_URL = `${process.env.MONGO_DB_URL}/${DBNAME}`;

const SUCESS = 1;

let connection = null;

const getConnection = () =>
  MongoClient.connection(MONGO_DB_URL, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((conn) => conn.db(DBNAME))
    .catch((err) => {
      console.error(err);
      process.exit(SUCESS)
    });

module.exports = connection;
