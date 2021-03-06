const { MongoClient } = require('mongodb');

require('dotenv').config();

const DB_NAME = 'MarvelHeroNavegator';
const MONGO_DB_URL = `${process.env.MONGO_DB_URL}/${DB_NAME}`;

let connection = null;

const getConnection = async(collectionName) => {
  connection =
    connection ||
      (await MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }));
  return connection.db(DB_NAME).collection(collectionName)
};

module.exports = getConnection;
