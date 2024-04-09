const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const DB = require('./database.js');
const app = express();
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';
const port = process.argv.length > 2 ? process.argv[2] : 4000; // The service port. In production the frontend code is statically hosted by the service on the same port.

app.use(express.json());// JSON body parsing using built-in middleware
app.use(cookieParser());// Use the cookie parser middleware for tracking authentication tokens
app.use(express.static('../public')); // Serve up the frontend static content hosting
app.set('trust proxy', true); // Trust headers that are forwarded from the proxy so we can determine IP addresses




////////////////////// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/celeste', (_req, res) => {
  res.send("Hello World");
});

//create user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.username)) { //if DB.getUser returns something (not the one in login.js)
    res.status(409).send({ msg: 'Existing user' }); //send to login.js as res error message
  } else { // create user
    const user = await DB.createUser(req.body.username, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

//login
// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});


//logout
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});


//getUser
// GetUser returns information about a user
//is called from getUser in login.js
apiRouter.get('/user/:username', async (req, res) => {
  const user = await DB.getUser(req.params.username);
  if (user) {
    const token = req?.cookies.token;
    res.send({ username: user.username, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});


////////////////////////////////////////secure api router
  //create
  //use
  //check authentication
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});



// Get Recipes
secureApiRouter.get('/recipes', async (_req, res) => {
  const recipes = await DB.getRecipes();
  res.send({recipes});
});
  
// New Recipe
secureApiRouter.post('/newrecipe', async (req, res) => {
  const recipe = req.body;
  await DB.addRecipe(recipe);
  const recipes = await DB.getRecipes();
  // recipes.push(req.body); 
  res.send(recipes);
});

//Get Notifications
secureApiRouter.get('/notifications', async (req, res) => {
  const notifications = await DB.getNotifications(req.body.user);
  res.send({notifications});
});

//Add Notification
secureApiRouter.post('/newNotification', async (req, res) => {
  const notification = req.body;
  await DB.addNotification(notification);
  // const notifications = await DB.getNotifications();
  // // recipes.push(req.body); 
  // res.send(recipes);
});


///////////////////////////////////////////////////

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: '../public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) { //res starts empty? authtoken came from call to DB.getUser()
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

peerProxy(httpService);

