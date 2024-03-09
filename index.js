const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);


// Get Recipes
apiRouter.get('/recipes', (_req, res) => {
  res.send(recipes);
});
  
// New Recipe
apiRouter.post('/newrecipe', (req, res) => {
  console.log(typeof req.body)
  console.log(req.body)
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
