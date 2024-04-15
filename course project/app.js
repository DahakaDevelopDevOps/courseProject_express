const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');

const app = express();

// Create the Handlebars view engine
const hbs = exphbs.create({ extname: 'hbs' }); // Correct variable name is 'hbs'

// Set up Handlebars as the view engine
app.engine('hbs', hbs.engine); // Use 'hbs' here
app.set('view engine', 'hbs');

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Define the route for the login page
app.get('/login', (req, res) => {
  res.render('login', { layout: 'main' });
});
app.get('/registration', (req, res) => {
  res.render('registration', { layout: 'registration' });
});
// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Route for logging in
app.post('/login', function (req, res) {
    // Verify user credentials
    if (req.body.username === 'admin' && req.body.password === 'password') {
      // Redirect to homepage
      res.redirect('/');
    } else {
      // Redirect back to login page with message
      res.render('login', { layout: 'main', message: 'Invalid username or password' });
    }
});
