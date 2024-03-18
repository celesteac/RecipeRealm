const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const DB = require('./database.js');
const app = express();

const authCookieName = 'token';

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;
//  const port = 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get("/celeste",(req,res,next)=>{
  res.send({message: "Hello World"})
})


// Get Recipes
apiRouter.get('/recipes', (_req, res) => {
  res.send(recipes);
});
  
// New Recipe
apiRouter.post('/newrecipe', (req, res) => {
  recipes.push(req.body); ////convert between types??? is req.body in json?
  res.send(recipes);
});



// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


recipes = [];
