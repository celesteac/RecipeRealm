
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

// get user by name
function getUser(username) {
  return userCollection.findOne({ username: username });
}

//get user by token
function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

// create user
async function createUser(username, password){
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username : username,
    password : passwordHash,
    token : uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

// add recipe
function addRecipe(recipe){
  recipesCollection.insertOne(recipe);
}

// get recipes
function getRecipes(){
  return recipesCollection.find();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addRecipe,
  getRecipes,
};



