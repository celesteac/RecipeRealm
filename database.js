
const { MongoClient, ServerApiVersion } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('happyrecipes');
const userCollection = db.collection('users');  
const recipesCollection = db.collection('recipes');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log(`yay`);
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});