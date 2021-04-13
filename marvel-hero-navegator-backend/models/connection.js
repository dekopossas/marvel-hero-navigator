const { MongoClient } = require('mongodb');

require('dotenv').config();

const DBNAME = 'MarvelHeroNavegator';
const MONGO_DB_URL = `${process.env.MONGO_DB_URL}/${DBNAME}`;

let connection = null;

const getConnection = async (collectionName) =>{
  connection = 
    connection || 
      (await MongoClient.connect(MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }))
  return connection.db(DBNAME).collection(collectionName);
};

module.exports = getConnection;
