const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');

const app = express();

// Create the Handlebars view engine
const hbs = exphbs.create({ extname: 'hbs' });

// Set up Handlebars as the view engine
app.engine('hbs', hAbs.engine);
app.set('view engine', 'hbs');

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Define the route for the login page
app.get('/login', (req, res) => { // Changed from '/views/login.hbs' to '/login'
  res.render('login', { layout: 'main' }); // Express will look for 'login.hbs' in the 'views' directory
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Route for logging in
app.post('/login', function (req, res) { // Changed from '/views/login' to '/login'
    // Verify user credentials
    if (req.body.username === 'admin' && req.body.password === 'password') {
      // Redirect to homepage
      res.redirect('/');
    } else {
      // Redirect back to login page with message
      res.render('login', { layout: 'main', message: 'Invalid username or password' });
    }
});
