const express = require('express');
const PORT = 3000;
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const usersRoute = require('./routes/users');

// BodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Public
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', (req, res) => {
    res.render('login');
});

app.use('/users', usersRoute);

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});