const express = require('express');

const app = express();
const debug = require('debug')('index');
const chalk = require('chalk');
const port = process.env.PORT || 3000;
var morgan = require('morgan');
var path = require('path');

app.use(morgan('combined')); // a middleware
app.set('view engine', 'ejs');

app.get('/robot', (req, res) => {
  res.sendFile(path.join(__dirname, '/robot.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  const campgrounds = [
    { name: 'Salmon Creek', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' },
    { name: 'Granite Hill', image: 'https://www.malaysiacarcamping.com/wp-content/uploads/2019/09/the_hill_penang_campsite_malaysia_car_camping_malaysia-10.jpg' },
    { name: "Mountain Goat's Rest", image: 'https://www.malaysiacarcamping.com/wp-content/uploads/2019/09/the_hill_penang_campsite_malaysia_car_camping_malaysia-13.jpg' },
  ];
  res.render('campgrounds', { campgrounds });
});

app.listen(port, () => {
  console.log(`Running on port ${chalk.yellowBright(port)}`);
  debug(`App is listening to a port ${chalk.yellowBright(port)}`);
});
